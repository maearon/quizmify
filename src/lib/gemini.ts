import { GoogleGenAI } from "@google/genai";
import JSON5 from "json5";

// Initialize GeminiAI client
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ Missing GEMINI_API_KEY in environment variables");
}
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

interface OutputFormat {
  [key: string]: string | string[] | OutputFormat;
}

export async function strict_output(
  system_prompt: string,
  user_prompt: string | string[],
  output_format: OutputFormat,
  default_category: string = "",
  output_value_only: boolean = false,
  model: string = "gemini-2.0-flash-001",
  temperature: number = 1,
  num_tries: number = 4,
  verbose: boolean = false
): Promise<
  {
    question: string;
    answer: string;
  }[]
> {
  const list_input: boolean = Array.isArray(user_prompt);
  const dynamic_elements: boolean = /<.*?>/.test(JSON.stringify(output_format));
  const list_output: boolean = /\[.*?\]/.test(JSON.stringify(output_format));

  let error_msg: string = "";

  for (let i = 0; i < num_tries; i++) {
    let output_format_prompt: string = `\nYou are to output the following in JSON format: ${JSON.stringify(
      output_format
    )}. \nDo not put quotation marks or escape character \\ in the output fields.`;

    if (list_output) {
      output_format_prompt += `\nIf output field is a list, classify output into the best element of the list.`;
    }

    if (dynamic_elements) {
      output_format_prompt += `\nAny text enclosed by < and > indicates you must generate content to replace it. Example input: Go to <location>, Example output: Go to the garden\nAny output key containing < and > indicates you must generate the key name to replace it. Example input: {'<location>': 'description of location'}, Example output: {school: a place for education}`;
    }

    if (list_input) {
      output_format_prompt += `\nGenerate a list of JSON, one JSON for each input element.`;
    }

    try {
      const fullPrompt = `${system_prompt}${output_format_prompt}${error_msg}\n\nUser prompt:\n${user_prompt.toString()}`;

      const response = await genAI.models.generateContent({
        model,
        contents: [
          {
            role: "user",
            parts: [{ text: fullPrompt }],
          },
        ],
        config: {
          temperature,
        },
      });

      const text = response.text ?? "";
      // let res = text.replace(/'/g, '"');
      let res = text
        .replace(/^```json/, "")
        .replace(/^```/, "")
        .replace(/```$/, "")
        .replace(/\\n/g, " ")
        .replace(/\n/g, " ")
        .trim();
      res = res.replace(/^[^{\[]+/, ""); // cắt mọi thứ trước JSON
      res = res.replace(/[^}\]]+$/, ""); // cắt mọi thứ sau JSON
      // res = res.replace(/```json|```/g, '').trim();
      // res = res.replace(/(\w)"(\w)/g, "$1'$2");

      // if (verbose) {
      //   console.log("System prompt:", system_prompt + output_format_prompt + error_msg);
      //   console.log("\nUser prompt:", user_prompt);
      //   console.log("\nGemini response:", res);
      // }
      if (verbose) {
        console.log("🧠 [Prompt Sent]:", fullPrompt);
        console.log("📩 [Raw Gemini Response]:", text);
        console.log("🧹 [Cleaned Response]:", res);
      }

      try {
        let output: any = JSON5.parse(res);

        if (list_input) {
          if (!Array.isArray(output)) throw new Error("Output format not in a list of JSON");
        } else {
          output = [output];
        }

        for (let index = 0; index < output.length; index++) {
          for (const key in output_format) {
            if (/<.*?>/.test(key)) continue;

            if (!(key in output[index])) {
              throw new Error(`${key} not in JSON output`);
            }

            if (Array.isArray(output_format[key])) {
              const choices = output_format[key] as string[];
              if (Array.isArray(output[index][key])) {
                output[index][key] = output[index][key][0];
              }
              if (!choices.includes(output[index][key]) && default_category) {
                output[index][key] = default_category;
              }
              if (typeof output[index][key] === "string" && output[index][key].includes(":")) {
                output[index][key] = output[index][key].split(":")[0];
              }
            }
          }

          if (output_value_only) {
            output[index] = Object.values(output[index]);
            if (output[index].length === 1) {
              output[index] = output[index][0];
            }
          }
        }

        return list_input ? output : output[0];
      } catch (e) {
        error_msg = `\n\nResult: ${res}\n\nError message: ${e}`;
        console.log("An exception occurred:", e);
        console.log("Current invalid JSON format:", res);
      }
    } catch (e) {
      console.log("An exception occurred with Gemini API:", e);
    }
  }

  return [];
}
