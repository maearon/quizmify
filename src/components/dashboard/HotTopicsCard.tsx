"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

const WordCloud = dynamic(() => import("../WordCloud"), { ssr: false });

type Topic = {
  text: string;
  value: number;
};

const HotTopicsCard = () => {
  const [formattedTopics, setFormattedTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await fetch("/api/topics", { cache: "no-store" });
      const data = await response.json();
      const formattedData = data.map((topic: any) => ({
        text: topic.topic,
        value: topic.count,
      }));
      setFormattedTopics(formattedData);
    };

    fetchTopics();
  }, []);

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
