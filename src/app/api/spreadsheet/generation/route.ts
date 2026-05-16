import { NextResponse } from "next/server";
import { GenerationInfo } from "@/types/member";
import { createErrorResponse } from "@/app/utils/errorHandler";
import { memberService } from "@/app/services/memberService";

interface GenerationCacheData {
  data: GenerationInfo[];
  timestamp: number;
}

let cache: GenerationCacheData | null = null;
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export async function GET() {
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return NextResponse.json(cache.data, {
      headers: {
        "Cache-Control":
          "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  }

  try {
    const generations = await memberService.getGenerations();

    cache = {
      data: generations,
      timestamp: Date.now(),
    };

    return NextResponse.json(generations, {
      headers: {
        "Cache-Control":
          "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err: unknown) {
    console.error("Error fetching generations:", err);
    const errorResponse = createErrorResponse(
      "Failed to fetch generations",
      err instanceof Error ? err.message : String(err)
    );
    return NextResponse.json(errorResponse, { status: errorResponse.status });
  }
}
