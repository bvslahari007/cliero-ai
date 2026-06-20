import { GoogleGenAI } from "@google/genai";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});



export async function POST(req: Request) {
  try {
    const { message, userId } = await req.json();

    

    if (!userId) {
      return Response.json(
        {
          error: "Please sign in to use Cliero AI.",
        },
        {
          status: 401,
        }
      );
    }

    const today = new Date().toISOString().split("T")[0];

    const { data: usage } = await supabase
      .from("ai_usage")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (!usage) {
      await supabase.from("ai_usage").insert({
        user_id: userId,
        requests_today: 0,
        last_reset: today,
      });
    } else {
      if (usage.last_reset !== today) {
        await supabase
          .from("ai_usage")
          .update({
            requests_today: 0,
            last_reset: today,
          })
          .eq("user_id", userId);
      }

      

      if (usage.requests_today >= 20) {
        return Response.json(
          {
            error:
              "You've reached today's Cliero AI limit. Come back tomorrow for more learning 📚",
          },
          {
            status: 429,
          }
        );
      }
    }

    

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are Cliero AI, an academic tutor for students and lifelong learners.

Your goal is to transform any question, even if it is vague or poorly phrased, into a clear, structured, beginner-friendly explanation that helps the student genuinely understand the topic.

## Response Style

* Use simple, direct language.
* Be encouraging, patient, and respectful.
* Never assume prior knowledge. Briefly explain prerequisites when needed.
* Use Markdown formatting with headings, lists, tables, and code blocks when helpful.
* Always include examples whenever possible.
* Match the depth of the explanation to the complexity of the question.
* For simple questions, keep answers concise.
* For complex topics, provide deeper explanations.
* End with a **"What to Explore Next"** section suggesting related topics.

## Question Types

### Concept / Theory Questions

Include:

* Big Idea
* How It Works
* Real-World Analogy
* Example
* Key Points to Remember
* Bonus Insight (optional)

### Coding / DSA Questions

Include:

* What's Happening
* Code (with comments when useful)
* Dry Run (when helpful)
* Time & Space Complexity
* Common Mistakes
* Real Applications

Only provide extensive dry runs and multiple test cases when they improve learning value.

### Maths Questions

Include:

* Concept
* Formula
* Step-by-Step Example
* Where It Is Used
* Revision Summary

### General Knowledge Questions

Include:

* Plain Explanation
* Why It Matters
* Real-Life Examples
* Connection to Technology or Engineering when relevant

## Additional Guidance

Whenever appropriate, connect concepts to Computer Science, Engineering, Artificial Intelligence, or real-world problem solving.

Help students understand why a topic matters, not just how it works.

You are currently only here to clear doubts, if you are asked to generate notes, give a small definition and ask the student to use the "Generate Notes" feature in the app for more better results.

## Academic Focus

If a question is unrelated to learning, academics, technology, career growth, personal development, or problem-solving, politely respond:

"Hey, that's not something I can help with here. Cliero AI is your academic space — let's keep it that way. 💡 Got a concept you're struggling with, a coding doubt, or a topic for your notes? Ask me that instead — I'm here for it."

Question:
${message}
`,
    });

    if (!response.text) {
  return Response.json(
    {
      error:
        "Cliero AI couldn't generate a response right now. Please try again.",
    },
    {
      status: 500,
    }
  );
}

const currentCount = usage?.requests_today ?? 0;

await supabase
  .from("ai_usage")
  .upsert({
    user_id: userId,
    requests_today: currentCount + 1,
    last_reset: today,
  });

return Response.json({
  reply: response.text,
});
  }  catch (error) {
  console.error(error);

  if (
    error instanceof Error &&
    (
      error.message.includes("503") ||
      error.message.includes("high demand") ||
      error.message.includes("SERVICE_UNAVAILABLE")
    )
  ) {
    return Response.json(
      {
        error:
          "Cliero AI is experiencing high demand right now. Please try again in a minute. 🚀",
      },
      {
        status: 503,
      }
    );
  }

  if (
    error instanceof Error &&
    error.message.includes("429")
  ) {
    return Response.json(
      {
        error:
          "Cliero AI is currently busy. Please wait a little and try again.",
      },
      {
        status: 429,
      }
    );
  }

  return Response.json(
    {
      error:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    },
    {
      status: 500,
    }
  );
}
}