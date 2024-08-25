"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {
  formattedTopics: { text: string; value: number }[];
};

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const WordCloud = ({ formattedTopics }: Props) => {
  const { theme } = useTheme(); // Destructuring theme from useTheme
  const router = useRouter();

  return (
    <D3WordCloud
      data={formattedTopics}
      height={550}
      font="Times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme === "dark" ? "white" : "black"} // Adjusted to use theme directly
      onWordClick={(e, d) => {
        router.push(`/quiz?topic=${d.text}`); // Template literals for better readability
      }}
    />
  );
};

export default WordCloud;
