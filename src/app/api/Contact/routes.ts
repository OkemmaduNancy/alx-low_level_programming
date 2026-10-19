import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Honeypot filled: pretend success, send nothing
  if (body.website) return NextResponse.json({ ok: true });

  if (
    name.length < 2 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    message.length < 10 ||
    message.length > 2000
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // TODO: deliver the message (see note below). For now it only logs.
  console.log("Contact message:", { name, email, message });

  return NextResponse.json({ ok: true });
}
