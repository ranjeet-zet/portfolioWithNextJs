import { NextResponse } from "next/server";

export async function GET(requ){
    return NextResponse.json({message: 'Hello From next js Serverless server'})
}