"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Play, ChevronLeft, ChevronRight, X, ImageIcon } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { getProjectById, getProjectBySlug } from "@/lib/data"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

interface ProjectDetail {
  _id: string
  title: string
  description: string
  detailedContent?: string
  image?: string
  carousels?: string[]
  tags?: string[]
  category?: string
  liveUrl?: string
  githubUrl?: string
  video_url?: string
  isDetailedPage?: boolean
  featured?: boolean
  isActive?: boolean
  isPrivate?: boolean
  order?: number
  createdAt?: string
  updatedAt?: string
}

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string

  const [project, setProject] = useState<ProjectDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    async function fetchProject() {
      if (!id) return

      // Check if this is a local project first (by id or slug)
      let localProject = getProjectById(id)
      if (!localProject) {
        localProject = getProjectBySlug(id)
      }
      if (localProject?.isLocal) {
        // Use static data for local projects
        const staticData: ProjectDetail = {
          _id: localProject.id,
          title: localProject.name,
          description: localProject.challenge,
          detailedContent: localProject.detailedContent,
          image: localProject.image,
          carousels: localProject.carousels,
          tags: localProject.tags,
          category: localProject.category,
          liveUrl: localProject.liveUrl,
          githubUrl: localProject.githubUrl,
        }
        setProject(staticData)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const response = await fetch(`/api/projects/${id}`)

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }

        const data = await response.json()
        setProject(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load project")
        console.error("Error fetching project:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [id])

  useEffect(() => {
    setImageError(false)
  }, [project])

  const nextImage = () => {
    if (project?.carousels) {
      setCurrentImage((prev) => (prev + 1) % project.carousels!.length)
    }
  }

  const prevImage = () => {
    if (project?.carousels) {
      setCurrentImage((prev) => (prev - 1 + project.carousels!.length) % project.carousels!.length)
    }
  }

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  if (loading) {
    return (
      <main className={`min-h-screen bg-[#09090B] ${inter.variable}`}>
        <Navbar />
        <div className="pt-32 pb-24 flex items-center justify-center min-h-[60vh] font-(family-name:--font-inter)">
          <div className="animate-pulse text-primary text-lg">Loading project...</div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error) {
    return (
      <main className={`min-h-screen bg-[#09090B] ${inter.variable}`}>
        <Navbar />
        <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 font-(family-name:--font-inter)">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#FAFAFA] mb-4">Error Loading Project</h1>
            <p className="text-lg text-[#A1A1AA] mb-6">Failed to fetch project details from API.</p>
            <Link href="/work" className="text-primary hover:underline">← Back to Projects</Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!project) {
    return (
      <main className={`min-h-screen bg-[#09090B] ${inter.variable}`}>
        <Navbar />
        <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 font-(family-name:--font-inter)">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#FAFAFA] mb-4">Project Not Found</h1>
            <Link href="/work" className="text-primary hover:underline">← Back to Projects</Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const allImages = project.carousels || []
  const hasMultipleImages = allImages.length > 1

  return (
    <main className={`min-h-screen bg-[#09090B] ${inter.variable}`}>
      <Navbar />

      <div className="pt-28 md:pt-32 pb-16 md:pb-24 font-(family-name:--font-inter)">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Main Image - HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mb-8 rounded-2xl overflow-hidden border ${project.image && project.image.trim() !== "" && !imageError ? "border-[#3F3F46]/30 bg-[#18181B]" : "border-[#E5E5E5] bg-[#F0F0F0]"}`}
          >
            {project.image && project.image.trim() !== "" && !imageError ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full aspect-video bg-[#F0F0F0] flex items-center justify-center relative overflow-hidden">
                {/* v0-style placeholder with compass/target design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer circle */}
                  <div className="w-32 h-32 rounded-full border border-[#D4D4D4]/60" />
                  {/* Middle circle */}
                  <div className="absolute w-20 h-20 rounded-full border border-[#D4D4D4]/50" />
                  {/* Crosshair lines - horizontal */}
                  <div className="absolute w-48 h-px bg-[#D4D4D4]/50" />
                  {/* Crosshair lines - vertical */}
                  <div className="absolute h-48 w-px bg-[#D4D4D4]/50" />
                  {/* Diagonal lines */}
                  <div className="absolute w-32 h-px bg-[#D4D4D4]/40 rotate-45" />
                  <div className="absolute w-32 h-px bg-[#D4D4D4]/40 -rotate-45" />
                </div>
                {/* Center icon circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border border-[#D4D4D4] shadow-sm flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-[#9CA3AF]" />
                </div>
              </div>
            )}
          </motion.div>

          {/* Project Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-0 md:p-0"
          >
            {/* Title - Large prominent heading like reference */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#FAFAFA] mb-6 leading-[1.1]">
              {project.title}
            </h1>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold text-[#FAFAFA] bg-[#27272A] px-3 py-1.5 rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-bold uppercase tracking-tighter rounded-full hover:scale-105 transition-transform"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
              {project.video_url && (
                <a
                  href={project.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#3F3F46] text-[#FAFAFA] font-bold uppercase tracking-tighter rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  <Play size={18} />
                  Watch Demo
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#A1A1AA] leading-[1.7] mb-10 font-normal">
              {project.description}
            </p>

            {/* Detailed Content - Inter font with clear hierarchy */}
            {project.detailedContent && (
              <div className="prose prose-invert prose-lg max-w-none
                [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-[#FAFAFA] [&_h1]:mt-16 [&_h1]:mb-6 [&_h1]:leading-[1.15]
                [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-[#FAFAFA] [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:leading-[1.2]
                [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-[#E4E4E7] [&_h3]:mt-10 [&_h3]:mb-4
                [&_p]:text-lg [&_p]:text-[#A1A1AA] [&_p]:mb-6 [&_p]:leading-[1.7] [&_p]:font-normal
                [&_ul]:mb-6 [&_ul]:space-y-3 [&_ul]:text-[#A1A1AA] [&_ul]:text-lg
                [&_ol]:mb-6 [&_ol]:space-y-3 [&_ol]:text-[#A1A1AA] [&_ol]:text-lg
                [&_li]:leading-[1.7] [&_li]:font-normal
                [&_strong]:text-[#FAFAFA] [&_strong]:font-semibold
                [&_blockquote]:my-8 [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-[#27272A]/30 [&_blockquote]:rounded-r-lg [&_blockquote]:text-[#D4D4D8]
                [&_hr]:my-10 [&_hr]:border-[#3F3F46]
                [&_img]:my-8 [&_img]:rounded-xl">
                <ReactMarkdown>{project.detailedContent}</ReactMarkdown>
              </div>
            )}
          </motion.div>

          {/* Gallery Section - AT THE BOTTOM */}
          {hasMultipleImages && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#FAFAFA] mb-6 text-center">
                Project Gallery
              </h2>

              {/* Main Gallery Image */}
              <div className="relative rounded-2xl overflow-hidden border border-[#3F3F46]/30 bg-[#18181B] mb-4">
                <img
                  src={allImages[currentImage]}
                  alt={`${project.title} screenshot ${currentImage + 1}`}
                  className="w-full aspect-video object-cover cursor-pointer"
                  onClick={() => openLightbox(currentImage)}
                />

                {/* Navigation Arrows */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-sm font-bold text-white">
                    {currentImage + 1} / {allImages.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImage
                        ? "border-primary"
                        : "border-[#3F3F46] hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-colors"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <div
            className="w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-primary text-white hover:text-black rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-2 rounded-full backdrop-blur-sm">
            <span className="text-white text-sm">
              {currentImage + 1} / {allImages.length}
            </span>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
