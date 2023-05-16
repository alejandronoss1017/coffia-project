import { config } from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

config();

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.COFFIA_GTP_API_KEY
  })
);

async function createChatCompletion(message: string) {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }]
    });

    return response.data.choices[0].message?.content;
  } catch (error) {
    console.error(error);
  }
}

export async function GET(req: Request, res: Response) {
  return new Response('Hello world!');
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  console.log(body);

  const iaResponse = await createChatCompletion(body.question);

  console.log(iaResponse);

  return new Response(JSON.stringify({ iaResponse: iaResponse}));
}
