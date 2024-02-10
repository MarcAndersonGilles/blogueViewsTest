import { NextResponse,NextRequest } from "next/server";
export async function GET(req: NextRequest) {
    return NextResponse.json({ ip: req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || 'unkown'  }, { status: 200 });
}
