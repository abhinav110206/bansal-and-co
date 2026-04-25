import { NextResponse } from 'next/server';

const OLLAMA_URL = "http://localhost:11434/api/chat";
const MODEL = "llama3"; // You can also use "mistral" or "phi3"

const SYSTEM_PROMPT = `
You are an intelligent legal assistant for "Bansal & Co.", a premium Indian law firm.

CORE INSTRUCTIONS:
1. DISCLAIMER: Always start every response with: "Disclaimer: This is general legal guidance, not a substitute for professional legal advice."
2. PROCESS: Understand the user's legal issue deeply. If information is incomplete or vague, you MUST ask clarifying questions before providing a full analysis.
3. TONE: Professional, calm, reassuring, and contextual. Do NOT give generic or repetitive answers.
4. JURISDICTION: Use Indian legal context (e.g., Indian Penal Code, IT Act, Family Courts Act).

REQUIRED RESPONSE FORMAT:
You must strictly respond in the following format for every analysis:

[Case Understanding]
(Summarize the facts and provide deep insight into the situation)

[Legal Category]
(Identify the specific category like Corporate, Criminal, Cyber, IP, or Family Law)

[What You Can Do Next]
(List actionable steps like gathering evidence, filing an FIR, or drafting a notice)

[Suggested Legal Help]
(Recommend the type of lawyer or specialist from Bansal & Co. needed)

Think step-by-step before responding. If the user just says "Hello" or something extremely brief, greet them but ask how you can help them with a legal matter in India.
`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Map the messages to Ollama format
    const chatHistory = messages.map((msg: any) => ({
      role: msg.role === "bot" ? "assistant" : msg.role,
      content: msg.content,
    }));

    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...chatHistory,
        ],
        stream: false, // Set to false for easier integration
      }),
    });

    if (!response.ok) {
      throw new Error("Ollama connection failed. Is the Ollama app running?");
    }

    const data = await response.json();
    const aiContent = data.message.content;

    return NextResponse.json({ content: aiContent });
  } catch (error: any) {
    console.error("Ollama Error:", error);
    
    return NextResponse.json({ 
      content: "⚠️ **Connection Error:** I cannot reach the local Llama 3 server. \n\n**To fix this:**\n1. Open your terminal.\n2. Run `ollama serve`.\n3. Make sure you have run `ollama run llama3` at least once." 
    }, { status: 503 });
  }
}
