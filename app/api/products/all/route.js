import { NextResponse } from 'next/server';
import connectTODB from '../../backend/config/dbConnect';
export async function GET(){
   connectTODB()
   return NextResponse.json("Hello")
}