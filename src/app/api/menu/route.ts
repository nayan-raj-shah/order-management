import { NextResponse } from "next/server";
import { menu } from "@/lib/data";

export async function GET() {
    return NextResponse.json(menu);
}