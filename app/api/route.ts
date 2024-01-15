import { NextResponse } from "next/server";


export async function GET(req:NextResponse) {
    return NextResponse.json(
      { error: "Method not allowed" },
      {
        status: 405
      }
    );
  }

  export async function POST(req:NextResponse) {
    return NextResponse.json("cholesky", {
        status: 200
        
    });
  }