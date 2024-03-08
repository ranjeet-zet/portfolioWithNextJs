import { NextResponse } from "next/server";
import { useParams } from "next/navigation";
export async function GET(request, { params }){
    
    const name  = params.name // 'a', 'b', or 'c'
    console.log(params);
    return NextResponse.json({message: 'Hello World with name '+name})
}