import { NextRequest, NextResponse } from "next/server"

// Cache the projects data
let cachedProjects: any[] | null = null
let lastFetch = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

async function fetchAllProjects() {
  const now = Date.now()

  if (cachedProjects && now - lastFetch < CACHE_DURATION) {
    return cachedProjects
  }

  try {
    // Fetch from the actual API endpoint
    const response = await fetch("https://www.nileshjaiswar.tech/api/projects", {
      headers: {
        Accept: "application/json",
      },
      // Revalidate every 5 minutes
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }

    const data = await response.json()

    // Handle both array and object response formats
    const projects = Array.isArray(data) ? data : data.projects || data.data || []

    cachedProjects = projects
    lastFetch = now

    return projects
  } catch (error) {
    console.error("Failed to fetch projects:", error)
    throw error
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  try {
    const projects = await fetchAllProjects()

    // Find the specific project by ID
    const project = projects.find((p: any) => p._id === id)

    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error("Proxy fetch error:", error)
    return NextResponse.json(
      { error: "Failed to fetch from external API" },
      { status: 500 }
    )
  }
}
