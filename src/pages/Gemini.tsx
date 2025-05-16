import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import axios from "axios";
import { Card, Textarea, Button, Text, Box } from "@mantine/core";

const API_KEY = "AIzaSyCFLSashZw2wHaZLUWxNuHCaQbBrMg_isw";
const MODEL = "gemini-1.5-flash-001";

type Message = {
  sender: "user" | "ai";
  text: string;
};

export default function GeminiText() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function fetchGeminiResponse(prompt: string): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${API_KEY}`;

    try {
      setLoading(true);
      const response = await axios.post(
        url,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);

      return (
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response"
      );
    } catch (error: any) {
      setLoading(false);
      console.error("Gemini error:", error);
      return (
        "Error: " +
        (error.response?.data?.error?.message ||
          error.message ||
          "Unknown error")
      );
    }
  }

  const handleSend = async () => {
    if (!input.trim()) return;

    const userPrompt = input;
    setMessages((prev) => [...prev, { sender: "user", text: userPrompt }]);
    setInput("");

    const aiReply = await fetchGeminiResponse(userPrompt);
    setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      style={{
        maxWidth: 600,
        height: 500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // keep bottom fixed
      }}
      bg={"#2e2e2e"}
      withBorder
    >
      {/* Messages Area */}
      <Box
        style={{
          flexGrow: 1,
          overflowY: "auto",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: 6,
          marginBottom: 10,
        }}
      >
        {messages.length === 0 && (
          <Text color="dimmed" ta="center" mt={20}>
            Start chatting with AI...
          </Text>
        )}
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            style={{
              margin: "10px 0",
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Box
              style={{
                backgroundColor: msg.sender === "user" ? "#4caf50" : "#e0e0e0",
                color: msg.sender === "user" ? "white" : "black",
                padding: "10px 15px",
                borderRadius: 20,
                maxWidth: "70%",
                whiteSpace: "pre-wrap",
              }}
            >
              {msg.text}
            </Box>
          </Box>
        ))}
        <div ref={chatEndRef} />
      </Box>

      {/* Input + Button Area */}
      <Box>
        <Textarea
          placeholder="Type your question here..."
          minRows={2}
          maxRows={4}
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          disabled={loading}
          onKeyDown={handleKeyDown}
        />
        <Button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          style={{ marginTop: 10, width: "100%" }}
        >
          {loading ? "Waiting for AI..." : "Send"}
        </Button>
      </Box>
    </Card>
  );
}
