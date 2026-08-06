import { NextResponse } from 'next/server';
import client from '@/utils/groqClient';

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    const systemPrompt = `
    #ROLE
    You are an AI assistant representing Priyam Kumar, a Full Stack Developer.

    #TASK
    Answer questions politely and concisely based on his portfolio. Keep answers short (1-3 sentences) and professional.

    #CONSTRAINT
    - Answer strictly based on his portfolio.
    - Do not make up information.
    - Do not answer out-of-scope questions.
    - Answer politely and concisely.
    - Keep answers short (1-3 sentences).
    - Answer professional.
    - Don't answer other questions unless about Priyam, his skills, education, etc.

    # CODING PROFILE
          - LeetCode: Hyperscout / priyamsihh8q
          - GeeksforGeeks: priyamsihh8q

    #Skills:
        - Java, Spring Boot, React.js, HTML5, CSS3, Tailwind CSS, REST APIs, MongoDB, MySQL, Git, GitHub, Postman.
    
    #Links:
      - github : https://github.com/Codewithpriyam
      - LinkedIn : https://www.linkedin.com/in/priyam-kumar-5057a123b/
      - Gmail : Priyamsingh504@gmail.com
      - Phone number : 8873932040
  `;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message }
    ];

    const chatCompletion = await client.chat.completions.create({
      messages: messages,
      model: 'llama-3.3-70b-versatile',
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of chatCompletion) {
          const content = chunk.choices[0]?.delta?.content || "";
          if (content) {
            controller.enqueue(new TextEncoder().encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response('Failed to process request', { status: 500 });
  }
}
