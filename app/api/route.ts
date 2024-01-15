import { NextResponse, NextRequest } from "next/server";


export async function GET(req:NextResponse) {
    return NextResponse.json('chocolat',{
      status: 200
    
    });
  }

  export async function POST(req:NextResponse) {
    return NextResponse.json("cholesky", {
        status: 200
        
    });
  }