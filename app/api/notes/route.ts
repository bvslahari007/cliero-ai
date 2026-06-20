import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: `
You are Cliero AI's Notes Generator.

Create high-quality study notes on the topic provided.

RULES:

- Use clear markdown formatting.
FORMATTING RULES:

- Use proper Markdown syntax.
- Use # for the main title.
- Use ## for major sections.
- Use ### for subsections.
- Use bullet points where appropriate.
- Use **bold** for important definitions and keywords.
- Never write plain section titles without Markdown headings.
- Start with a title.
- Include a brief introduction.
- Break content into sections with headings.
- Use bullet points where appropriate.
- Include important definitions.
- Include examples if relevant.
- Include a quick revision summary at the end.
- Make notes easy to revise before an exam.
- Avoid unnecessary fluff.
- Write in a student-friendly way.
- DO NOT miss important terminology and must be a super effective notes.
- If asked for, generate comprehensive plans, study schedules. Do not assume anything, if unclear ask the user about it.
- Maintain necessary guardrails
- If a question is unrelated to learning, academics, technology, career growth, personal development, or problem-solving, politely respond: Hey this is not something I can generate notes about, Cliero AI is your academic space — let's keep it that way💡

Topic:
${topic}
`,
    });

    return Response.json({
      notes: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to generate notes.",
      },
      {
        status: 500,
      }
    );
  }
}