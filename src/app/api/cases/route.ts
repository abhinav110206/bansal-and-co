import { NextResponse } from 'next/server';

// This acts as a mock in-memory database for demonstration.
// In a production app, you would use MongoDB or Firestore here.
let submittedCases: any[] = [];

export async function GET() {
  return NextResponse.json(submittedCases);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate data flow
    if (!data.fullName || !data.email || !data.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newCase = {
      id: `CAS-${Date.now()}`,
      client: data.fullName,
      email: data.email,
      type: data.caseType || "General",
      description: data.description,
      status: "Pending",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    submittedCases.unshift(newCase); // Save in memory
    
    console.log("New Case Saved to Backend:", newCase);

    return NextResponse.json({ success: true, caseId: newCase.id });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
