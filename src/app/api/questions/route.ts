import { strict_output } from "@/lib/gemini";
import { validateRequest } from "@/auth";
import { getQuestionsSchema } from "@/schemas/questions";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: Request, res: Response) {
  try {
    const session = await validateRequest();
    // 🔒 Nếu muốn yêu cầu login, bỏ comment 3 dòng dưới
    // if (!session?.user) {
    //   return NextResponse.json({ error: "You must be logged in to create a game." }, { status: 401 });
    // }

    const body = await req.json();
    const { amount, topic, type } = getQuestionsSchema.parse(body);

    // 🧩 Tạo mảng prompt riêng cho từng câu để tránh trùng
    const prompts = Array.from({ length: amount }, (_, i) => 
      type === "mcq"
        ? `Question #${i + 1}: Create a unique multiple-choice question about "${topic}". 
          The question must NOT repeat or be similar to the others. 
          Include one correct answer and three incorrect but realistic options. 
          Each text must be concise (max 15 words).`
        : `Question #${i + 1}: Create a unique open-ended question about "${topic}". 
          The question must NOT repeat or be similar to the others.
          Provide a short, factual answer (max 15 words).`
    );

    let questions: any;

    if (type === "open_ended") {
      questions = await strict_output(
        `You are a quiz generator. Generate diverse open-ended questions and short answers about the given topic. 
         Each question must explore a different subtopic or angle. 
         Output JSON array with "question" and "answer" keys only.`,
        prompts,
        {
          question: "question",
          answer: "answer (max 15 words)",
        }
      );
    } else if (type === "mcq") {
      questions = await strict_output(
        `You are a quiz generator. Generate diverse multiple-choice questions about the given topic.
         Each question must be unique and NOT similar to others.
         Include 1 correct answer and 3 incorrect options.
         Output a JSON array with "question", "answer", "option1", "option2", "option3".`,
        prompts,
        {
          question: "question",
          answer: "correct answer (max 15 words)",
          option1: "incorrect option (max 15 words)",
          option2: "incorrect option (max 15 words)",
          option3: "incorrect option (max 15 words)",
        }
      );
    }

    // 🚫 Lọc trùng đề phòng Gemini trả về câu giống nhau
    const uniqueQuestions = Array.from(
      new Map(questions.map((q: any) => [q.question, q])).values()
    );

    return NextResponse.json(
      {
        questions: uniqueQuestions,
        total: uniqueQuestions.length,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    } else {
      console.error("❌ Error in /api/game:", error);
      return NextResponse.json(
        { error: "An unexpected error occurred while generating questions." },
        { status: 500 }
      );
    }
  }
}
