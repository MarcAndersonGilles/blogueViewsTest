import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    console.log(request);
    console.log('test');
    const data = [{
        data: 'string'
    }];
    // Assuming you want to return the data as JSON
    return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
