import { NextRequest, NextResponse } from "next/server";
import { MemberCacheData } from "@/types/member";
import { createErrorResponse } from "@/app/utils/errorHandler";
import { memberService } from "@/app/services/memberService";

const cache = new Map<string, MemberCacheData>();
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ generation: string }> }
) {
  const { generation } = await context.params;

  const cachedData = cache.get(generation);
  if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
    return NextResponse.json(cachedData.data, {
      headers: {
        "Cache-Control":
          "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  }

  try {
    const members = await memberService.getMembersByGeneration(generation);

    cache.set(generation, {
      data: members,
      timestamp: Date.now(),
    });

    return NextResponse.json(members, {
      headers: {
        "Cache-Control":
          "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err: any) {
    console.error("Error fetching people:", err);

    const status = err.message.includes("Invalid generation") ? 404 : 500;
    const errorResponse = createErrorResponse(
      "Failed to fetch people",
      err.message
    );

    return NextResponse.json(errorResponse, { status });
  }
}
