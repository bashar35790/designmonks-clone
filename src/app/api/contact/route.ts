sme and recover four parts of a meeting. Before, I just ask her server to plan out the pool thing and walk me through the implementation step by step. I then had agents running simultaneously to refine the page in static and pull data from the message open source database. Even when you're taking a break and admiring your patient, cursor agents are running in the background to bring your idea to life. It's never been easier to do this yourself, so comment paint down the loopimport { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, budget, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Simulate lead processing and logging
    console.log("New Consultation Request Received:", {
      name,
      email,
      whatsapp,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your $799 consultation has been booked. Our COO will reach out within 2 hours.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
