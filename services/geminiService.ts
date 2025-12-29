
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const getApiKey = () => {
  try {
    // In Vite, process.env is usually injected via the define config
    return (process.env as any).API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const getGeminiChat = (): Chat => {
  const apiKey = getApiKey();
  const ai = new GoogleGenAI({ apiKey });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are ForgeAI, the premium virtual fitness assistant for IRON FORGE GYM. 
      Your tone is motivating, professional, and high-energy. 
      You help users with:
      1. Choosing the right membership (Starter for beginners, Pro for regulars, Elite for those wanting PT).
      2. Quick workout tips.
      3. Explaining our facilities (HIIT area, Olympic lifting platforms, recovery lounge).
      4. Motivation.
      Keep responses concise and action-oriented. Suggest a visit to the gym at 123 Power Lane.`,
    },
  });
};

export async function sendMessageToAI(chat: Chat, message: string): Promise<string> {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "The ForgeAI systems are currently offline. Please ensure the API_KEY is configured in your environment.";
  }

  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I'm pushing my limits right now. Could you try asking that again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a technical glitch in my circuit. Let's try again shortly!";
  }
}
