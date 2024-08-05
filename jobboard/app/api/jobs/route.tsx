// external api - server componenet : token : backend

import { NextResponse } from "next/server";

export async function GET(request) {

    const response = await fetch('http://localhost:8002/jobs/')
    const data = await response.json()
    return NextResponse.json(data)
    
}