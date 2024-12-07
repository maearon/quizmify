"use client"; // Chỉ sử dụng trên Client-Side

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {
  formattedTopics: { text: string; value: number }[];
};

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const WordCloud = ({ formattedTopics }: Props) => {
  const { theme = "light" } = useTheme(); // Đảm bảo giá trị mặc định là light nếu theme chưa được xác định
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false); // Trạng thái để kiểm tra hydration

  useEffect(() => {
    setIsHydrated(true); // Đảm bảo cập nhật chỉ sau khi client đã hydrate
  }, []);

  // Trả về null trong lần render đầu tiên (tránh hydration lỗi)
  if (!isHydrated) {
    return null;
  }

  // Validate formattedTopics to ensure data integrity
  const validTopics = formattedTopics?.map((topic) => ({
    text: topic.text ?? "Unknown", // Fallback to "Unknown" if text is missing
    value: topic.value ?? 1, // Fallback to 1 if value is missing or invalid
  }));

  return (
    <D3WordCloud
      data={validTopics}
      height={550}
      font="Times"
      fontSize={fontSizeMapper}
      rotate={0}
      padding={10}
      fill={theme === "dark" ? "white" : "black"} // Điều chỉnh theo theme
      onWordClick={(e, d) => {
        router.push(`/quiz?topic=${d.text}`); // Điều hướng tới quiz
      }}
    />
  );
};

export default WordCloud;
