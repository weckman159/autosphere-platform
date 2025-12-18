import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const clientFilename = searchParams.get('filename');

  if (!clientFilename || !request.body) {
    return NextResponse.json(
      { error: 'Filename and file required' },
      { status: 400 },
    );
  }

  const uniqueFilename = `${Date.now()}-${Math.floor(Math.random() * 1000)}-${clientFilename}`;

  const blob = await put(uniqueFilename, request.body, {
    access: 'public',
  });

  return NextResponse.json(blob);
}
