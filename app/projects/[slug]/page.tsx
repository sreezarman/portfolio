"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Globe, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SkillTag } from "@/components/skill-tag"
import { getProjectBySlug } from "@/lib/data"
import { notFound } from "next/navigation"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { ImageModal } from "@/components/image-modal"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    notFound()
  }

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Back Button */}
        <AnimatedSection animation="fade-in">
          <Link
            href="/"
            className="inline-flex items-center text-xs sm:text-sm text-zinc-400 hover:text-white mb-4 sm:mb-6 transition-colors"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Back to Portfolio
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Project Header */}
          <AnimatedSection animation="fade-up" className="lg:col-span-3">
            <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm overflow-hidden">
              <div className="relative h-48 sm:h-64 md:h-80 w-full">
                <Image
                  src={
                    project.coverImage ||
                    (project.gallery && project.gallery.length > 0 ? project.gallery[0].url : "/placeholder.svg")
                  }
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-cyan-400 mb-1 sm:mb-2">{project.category}</div>
                  <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">{project.title}</h1>
                  <p className="text-sm text-zinc-400 mt-1 sm:mt-2 max-w-2xl">{project.shortDescription}</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {/* Project Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <AnimatedSection animation="fade-up" delay={100}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Project Overview</h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-300">
                    {project.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  {project.slug === "server-side-tracking" && (
                    <AnimatedSection animation="fade-up" delay={150}>
                      <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">Challenges</h3>
                      <div className="space-y-2">
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-300">
                            Double Counting Across Platforms: Meta and Google both over-reported sales vs. Shopify
                            actuals
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-300">
                            Broken Attribution Logic: GA4 last-click model clashed with ad platform reporting
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-300">
                            Scaling Without Signal Loss: Browser-side limitations (ITP, blockers) led to massive data
                            drop-offs
                          </span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-300">
                            Zero Confidence in Real CAC, LTV, or Retargeting ROI
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>
                  )}

                  {project.slug === "server-side-tracking" && (
                    <AnimatedSection animation="fade-up" delay={175}>
                      <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">Solutions</h3>
                      <div className="space-y-4 text-sm sm:text-base text-zinc-300">
                        <div>
                          <p className="font-medium text-white">Led Server-Side Tracking Rollout:</p>
                          <p>
                            Designed and implemented a GTM server container using Stape, pushing clean, deduplicated
                            events to GA4, Meta, and Google Ads.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">Event Mapping & QA:</p>
                          <p>
                            Synced event schema with Shopify's backend, verified via Tag Assistant and GA Debugger, and
                            validated server hits vs. browser hits.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">Attribution Realignment:</p>
                          <p>
                            Built a multi-platform Tableau dashboard to compare platform data vs. Shopify actuals —
                            enabling LTV-based optimization and smarter CAC targeting.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">Team Collaboration:</p>
                          <p>
                            Worked directly with developers for backend integration and marketing leads to realign
                            budget strategy post-tracking upgrade.
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  )}

                  <AnimatedSection animation="fade-up" delay={200}>
                    <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">
                      {project.slug === "server-side-tracking" ? "Results" : "Key Achievements"}
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-up" delay={300}>
                    <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">
                      Technologies & Tools Used
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.technologies.map((tech, index) => (
                        <SkillTag key={index}>{tech}</SkillTag>
                      ))}
                    </div>
                  </AnimatedSection>

                  {project.slug === "ror-to-shopify-migration" && (
                    <AnimatedSection animation="fade-up" delay={350}>
                      <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">
                        Challenges & Solutions
                      </h3>
                      <div className="space-y-4 text-sm sm:text-base text-zinc-300">
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Migrating 8,000+ product images and mapping them accurately to 500+ products with
                            2,000 variants.
                          </p>
                          <p>
                            Solution: Created structured Excel scripts to automate image sequencing, file renaming, and
                            bulk assignments using Shopify's import schema.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Preserving SEO rankings with thousands of indexed URLs and metadata during
                            migration.
                          </p>
                          <p>
                            Solution: Pre-migration sitemap audit and 301 redirect planning. Manual redirects set up in
                            Shopify, verified via Google Search Console. No loss in rankings; traffic increased 30%
                            post-migration.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">Challenge: Avoiding downtime during migration.</p>
                          <p>
                            Solution: Executed all staging, QA, and UAT in a cloned Shopify environment. Final switch
                            executed within a 3-hour window during off-peak hours with rollback protocols in place.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Coordinating between developers, marketing, and design across time zones.
                          </p>
                          <p>
                            Solution: Used Jira for task tracking, Slack for daily syncs, and shared documentation to
                            align timelines and accountability.
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  )}

                  {project.slug === "event-listing-automation" && (
                    <AnimatedSection animation="fade-up" delay={350}>
                      <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">
                        Challenges & Solutions
                      </h3>
                      <div className="space-y-4 text-sm sm:text-base text-zinc-300">
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Publishing 100+ events daily with rich metadata and minimal manual effort
                          </p>
                          <p>
                            Solution: Built a modular pipeline using n8n and ChatGPT to rewrite, tag, and prepare posts
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Structuring data for schema, organizer details, and CTA buttons
                          </p>
                          <p>
                            Solution: Used ChatGPT and formula-driven sheets to auto-generate these fields based on
                            context
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">Challenge: Integrating with Event Manager plugin</p>
                          <p>
                            Solution: Structured Google Sheet outputs to match plugin's importer format for seamless
                            batch uploads
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Linking with Eventbrite without manual copy/paste
                          </p>
                          <p>
                            Solution: Integrated Eventbrite API into the pipeline for direct redirects and event
                            attribution
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  )}

                  {project.slug === "medical-ad-spend" && (
                    <AnimatedSection animation="fade-up" delay={350}>
                      <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">
                        Challenges & Solutions
                      </h3>
                      <div className="space-y-4 text-sm sm:text-base text-zinc-300">
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Aggressive market entry by competitors during COVID peak
                          </p>
                          <p>
                            Solution: Deployed geo-segmented campaigns with keyword bidding strategies that prioritized
                            high-intent, low-competition queries.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Maintaining consistent CAC across multiple cities and verticals
                          </p>
                          <p>
                            Solution: Built localized bid adjustments and scheduled bid modifiers based on performance
                            heatmaps.
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Challenge: Campaign scale bottlenecks due to Google UI limits
                          </p>
                          <p>
                            Solution: Shifted all major scaling operations to Google Ads Editor, enabling faster bulk
                            changes and structured naming systems.
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  )}

                  {project.slug === "medical-ad-spend" && (
                    <AnimatedSection animation="fade-up" delay={375}>
                      <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">Results</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                          <div className="text-cyan-400 text-lg sm:text-xl font-bold">$61.8M</div>
                          <div className="text-xs sm:text-sm text-zinc-400">Total Ad Spend</div>
                        </div>
                        <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                          <div className="text-cyan-400 text-lg sm:text-xl font-bold">$30</div>
                          <div className="text-xs sm:text-sm text-zinc-400">CPA</div>
                        </div>
                        <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                          <div className="text-cyan-400 text-lg sm:text-xl font-bold">4.5x</div>
                          <div className="text-xs sm:text-sm text-zinc-400">ROAS</div>
                        </div>
                        <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                          <div className="text-cyan-400 text-lg sm:text-xl font-bold">313M+</div>
                          <div className="text-xs sm:text-sm text-zinc-400">Impressions</div>
                        </div>
                      </div>
                    </AnimatedSection>
                  )}

                  {project.slug === "email-retargeting-campaign" && (
                    <AnimatedSection animation="fade-up" delay={375}>
                      <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">Results</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                          <div className="text-cyan-400 text-lg sm:text-xl font-bold">14x</div>
                          <div className="text-xs sm:text-sm text-zinc-400">ROAS</div>
                        </div>
                        <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                          <div className="text-cyan-400 text-lg sm:text-xl font-bold">$11.35</div>
                          <div className="text-xs sm:text-sm text-zinc-400">Cost Per Purchase</div>
                        </div>
                        <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                          <div className="text-cyan-400 text-lg sm:text-xl font-bold">533</div>
                          <div className="text-xs sm:text-sm text-zinc-400">Purchases</div>
                        </div>
                        <div className="bg-zinc-800/50 p-3 rounded-lg text-center">
                          <div className="text-cyan-400 text-lg sm:text-xl font-bold">$80K+</div>
                          <div className="text-xs sm:text-sm text-zinc-400">Revenue from $6K Ad Spend</div>
                        </div>
                      </div>
                    </AnimatedSection>
                  )}

                  {project.slug === "event-listing-automation" && (
                    <AnimatedSection animation="fade-up" delay={375}>
                      <h3 className="text-base sm:text-lg font-bold mt-6 sm:mt-8 mb-2 sm:mb-3">Workflow Breakdown</h3>
                      <div className="space-y-4 text-sm sm:text-base text-zinc-300">
                        <div>
                          <p className="font-medium text-white">1. New Row in Google Sheet</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Manually entered or scraped from external event platforms</li>
                            <li>Contains basic info like Eventbrite URL or Event ID</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-white">2. n8n Trigger</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Watches for new rows in the Google Sheet</li>
                            <li>Initiates the automation when a new entry appears</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-white">3. Eventbrite API Call</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              Fetches full event data (title, date, time, location, description, link) using Event ID or
                              URL
                            </li>
                            <li>Ensures data consistency and completeness</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-white">4. ChatGPT Processing</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Rewrites the event description to be SEO-friendly and more engaging</li>
                            <li>Generates meta title, meta description, and JSON-LD schema</li>
                            <li>Enhances content quality and organic discoverability</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-white">5. Google Sheet Update</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>All processed data (content + metadata) is written back into a new tab or columns</li>
                            <li>This final structure matches the WordPress Event Manager plugin import format</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-white">6. WordPress Event Manager</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Uses the plugin's Google Sheet importer or CSV uploader to publish events</li>
                            <li>Ensures events go live with proper location, organizer, CTA button, and SEO schema</li>
                          </ul>
                        </div>
                      </div>
                    </AnimatedSection>
                  )}

                  <AnimatedSection animation="fade-up" delay={400}>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                      {project.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-xs sm:text-sm"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            View Live Project
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            View Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <AnimatedSection animation="fade-up" delay={200}>
                <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Project Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {project.gallery.map((image, index) => (
                        <AnimatedSection key={index} animation="zoom-in" delay={100 * (index + 1)}>
                          <div
                            className="relative h-40 sm:h-48 rounded-lg overflow-hidden border border-zinc-800 cursor-pointer group"
                            onClick={() => openModal(index)}
                          >
                            <Image
                              src={image.url || "/placeholder.svg"}
                              alt={image.caption || `Gallery image ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="bg-black/50 rounded-full p-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-white"
                                >
                                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          {image.caption && <p className="text-xs text-zinc-400 mt-1 text-center">{image.caption}</p>}
                        </AnimatedSection>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}
          </div>

          {/* Project Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <AnimatedSection animation="slide-left" delay={100}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Project Details</h2>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400">Client</h3>
                      <p className="text-sm sm:text-base">{project.client || "Personal Project"}</p>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400">Timeline</h3>
                      <p className="text-sm sm:text-base">{project.timeline}</p>
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-zinc-400">Role</h3>
                      <p className="text-sm sm:text-base">{project.role}</p>
                    </div>

                    {project.additionalLinks && project.additionalLinks.length > 0 && (
                      <div>
                        <h3 className="text-xs sm:text-sm font-medium text-zinc-400">Live Sites</h3>
                        <div className="space-y-2 mt-2">
                          {project.additionalLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <Globe className="w-3 h-3 mr-2" />
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Next Projects */}
            <AnimatedSection animation="slide-left" delay={200}>
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">More Projects</h2>
                  <div className="space-y-3 sm:space-y-4">
                    {project.relatedProjects &&
                      project.relatedProjects.map((related, index) => (
                        <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                          <Link href={`/projects/${related.slug}`} className="block group">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden flex-shrink-0">
                                <Image
                                  src={related.image || "/placeholder.svg"}
                                  alt={related.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="text-sm sm:text-base font-medium group-hover:text-cyan-400 transition-colors">
                                  {related.title}
                                </h3>
                                <p className="text-xs text-zinc-400">{related.category}</p>
                              </div>
                            </div>
                          </Link>
                        </AnimatedSection>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" delay={450} className="lg:col-span-3 mt-8">
          <Card className="bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 border-zinc-700 overflow-hidden">
            <CardContent className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Ready to improve your marketing performance?</h2>
                <p className="text-sm sm:text-base text-zinc-300">
                  Let's discuss how I can help you achieve similar results for your business.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                <a href="mailto:sreezarman@gmail.com">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
        >
          <p>© {new Date().getFullYear()} Arman Ali. All rights reserved.</p>
        </AnimatedSection>
      </div>

      {/* Image Modal */}
      {project.gallery && (
        <ImageModal
          images={project.gallery}
          initialIndex={currentImageIndex}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
  )
}
