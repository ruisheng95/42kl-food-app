import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    console.log('tesT');
    const data = await request.json(); // Parse the incoming JSON data

    // const { val } = data;

    // if (!val) {
    //   return NextResponse.json({ error: 'No value provided' }, { status: 400 });
    // }

    
    // Define where you want to save the file (not recommended to save in the public directory)
    const filePath = path.join(
      process.cwd(), 'src', 'app', 'domain', 'database', 'user-order.txt'
    );

    // Ensure that the folder exists (create if necessary)
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    // Write the data to the file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: 'File saved successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Error saving file' }, { status: 500 });
  }
}
