// app/api/hello/route.ts
import { NextResponse } from 'next/server';
import Together from "together-ai";
import path from 'path'
import { writeFile } from 'fs/promises';


export async function GET(request) {

    const { searchParams } = new URL(request.url)
    const prompt = searchParams.get('prompt')

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const together = new Together({ apiKey: "19035402e2995099cbca931d65e3d5d8c3b54a3b478cb7c3c68590ea5ce7083e"    });

    const response = await together.images.create({
    model: "black-forest-labs/FLUX.1-schnell-Free",
    prompt: prompt,
    width: 1024,
    height: 1024,
    steps: 4,
    n: 1,
    response_format: "b64_json",
    stop: []});

    const b64image = response.data[0].b64_json

    const buffer_image = Buffer.from(b64image, 'base64')

    const file_name = `image-${Date.now()}.png`

    const file_path = path.join('public','generated', file_name)

    await writeFile(file_path, buffer_image)
    console.log(`Image saved to ${file_path}`);

    return NextResponse.json({
      image_url : `/generated/${file_name}`
    })
  }
  