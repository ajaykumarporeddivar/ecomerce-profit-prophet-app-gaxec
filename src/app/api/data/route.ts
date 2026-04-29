import { Response } from 'next';
import { mockData, STATS } from '@/lib/data';

export async function GET({ params }: { params: { entityName: string } }): Promise<Response> {
  const entityName = params.entityName;
  const mockArray = mockData[entityName as keyof typeof mockData];

  return new Response(JSON.stringify({
    ok: true,
    data: {
      [entityName]: mockArray,
      stats: STATS
    }
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}

export async function POST({ request }: { request: Request }): Promise<Response> {
  const jsonData = await request.json();
  console.log('Received JSON body:', jsonData);

  return new Response(JSON.stringify({
    ok: true,
    message: 'Demo mode — data not persisted'
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}