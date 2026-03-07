"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Play, ChevronLeft, ChevronRight, X } from "lucide-react"
import ReactMarkdown from "react-markdown"

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

  useEffect(() => {
    async function fetchProject() {
      if (!id) return

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
      <main className="min-h-screen bg-[#09090B]">
        <Navbar />
        <div className="pt-32 pb-24 flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-primary text-xl">Loading project...</div>
        </div>
        <Footer />
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#09090B]">
        <Navbar />
        <div className="pt-32 pb-24 max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#FAFAFA] mb-4">Error Loading Project</h1>
            <p className="text-[#A1A1AA] mb-4">Failed to fetch project details from API.</p>
            <Link href="/work" className="text-primary hover:underline">← Back to Projects</Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#09090B]">
        <Navbar />
        <div className="pt-32 pb-24 max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#FAFAFA] mb-4">Project Not Found</h1>
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
    <main className="min-h-screen bg-[#09090B]">
      <Navbar />

      <div className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4">
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
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 rounded-2xl overflow-hidden border border-[#3F3F46]/30 bg-[#18181B]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
            </motion.div>
          )}

          {/* Project Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[#3F3F46]/30 bg-[#18181B]/50 backdrop-blur-sm p-8 md:p-12"
          >
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-4">
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
            <p className="text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-10">
              {project.description}
            </p>

            {/* Detailed Content */}
            {project.detailedContent && (
              <div className="prose prose-invert prose-lg max-w-none">
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
              <h2 className="text-2xl font-bold uppercase tracking-tighter text-[#FAFAFA] mb-6 text-center">
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
