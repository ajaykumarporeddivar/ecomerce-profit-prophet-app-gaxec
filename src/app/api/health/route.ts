import { Response } from 'next';
import { date } from 'clsx';

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify({
    ok: true,
    version: '1.0.0',
    mode: 'demo',
    ts: Date.now()
  }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}