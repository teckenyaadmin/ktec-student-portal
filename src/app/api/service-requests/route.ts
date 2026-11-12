import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SERVICE_PRICES: Record<string, number> = {
  cluster_analysis: 200,
  course_research: 100,
  career_report: 200,
  other: 0,
};

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseSecret = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecret) {
      return NextResponse.json(
        { error: "Server configuration is incomplete." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      full_name,
      phone,
      service_type,
      details,
    } = body;

    if (
      typeof full_name !== "string" ||
      typeof phone !== "string" ||
      typeof service_type !== "string"
    ) {
      return NextResponse.json(
        { error: "Please provide valid student details." },
        { status: 400 }
      );
    }

    const cleanName = full_name.trim();
    const cleanPhone = phone.trim();

    if (
      cleanName.length < 2 ||
      cleanName.length > 120 ||
      cleanPhone.length < 9 ||
      cleanPhone.length > 20
    ) {
      return NextResponse.json(
        { error: "Invalid name or phone number." },
        { status: 400 }
      );
    }

    if (!(service_type in SERVICE_PRICES)) {
      return NextResponse.json(
        { error: "Invalid service type." },
        { status: 400 }
      );
    }

    const safeDetails =
      details &&
      typeof details === "object" &&
      !Array.isArray(details)
        ? details
        : {};

    const response = await fetch(
      `${supabaseUrl}/rest/v1/service_requests`,
      {
        method: "POST",
        headers: {
          apikey: supabaseSecret,
          Authorization: `Bearer ${supabaseSecret}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          full_name: cleanName,
          phone: cleanPhone,
          service_type,
          amount_kes: SERVICE_PRICES[service_type],
          status: "pending",
          details: safeDetails,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("Supabase request failed:", await response.text());

      return NextResponse.json(
        { error: "Unable to save your request. Please try again." },
        { status: 500 }
      );
    }

    const savedRequest = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: "Your service request has been received.",
        request: savedRequest[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Service request error:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
