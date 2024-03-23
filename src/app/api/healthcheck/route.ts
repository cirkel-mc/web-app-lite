import { NextResponse } from "next/server";

export async function GET() {  
  return new NextResponse(JSON.stringify({ status: 200, message: 'Cirkel webapp is healthy'}));
}