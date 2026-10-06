import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, course } = body;

  if (!name || !phone || !email || !course) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const { error } = await supabase
    .from("enquiries")
    .insert({ name, phone, email, course });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: "Could not save enquiry" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
