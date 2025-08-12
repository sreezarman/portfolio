import type React from "react"
import { GlobeIcon, CodeIcon, BriefcaseIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/lib/data"
import { ExperienceCard } from "@/components/experience-card"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { CredentialsSection } from "@/components/credentials-section"
import { PortfolioHeader } from "@/components/portfolio-header"
import { getExperienceInfo, getTechnicalSkillsInfo } from "@/lib/data"

const SkillTagComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-2 py-1 bg-zinc-800 rounded-full text-xs font-medium text-zinc-400">{children}</div>
}

export default function Home() {
  const projects = getAllProjects()
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()

  // Define marketing hard skills
  const marketingHardSkills = [
    "Data Analytics",
    "SEO",
    "Media Buying (FB, Google, Tiktok, Pinterest)",
    "Content Strategy",
    "Influencer Marketing",
    "Email Marketing",
    "AB Testing",
    "Conversion Rate Optimization",
    "Marketing Automation",
    "Omni-Channel Marketing",
  ]

  // Define soft skills
  const softSkills = [
    "Analytical Skills",
    "Team Management",
    "Project and Product Management",
    "Multitasker",
    "Problem-Solving",
    "Learning & Adaptability",
  ]

  // Define automation and AI tools
  const automationAITools = [
    "Make.com",
    "n8n",
    "Zapier",
    "v0.dev",
    "OpenAI (ChatGPT API)",
    "LangChain",
    "Python (for scripting/automation)",
    "Google Apps Script",
    "Airtable Automations",
    "Notion AI",
    "Webhooks",
    "Pipedream",
    "Activepieces",
    "AutoGPT",
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Enhanced Profile Section */}
          <div className="md:sticky md:top-24 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Experience Section - Expanded */}
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-cyan-400" />
                    <h3 className="text-lg font-medium">Experience</h3>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {experienceInfo.map((experience, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          description={experience.description}
                          achievements={experience.achievements}
                          technologies={experience.technologies}
                          clients={experience.clients}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Credentials Section */}
            <AnimatedSection animation="fade-up" id="credentials">
              <CredentialsSection />
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection animation="fade-up" id="skills">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <CodeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                    <h3 className="text-lg font-medium">Technical Skills</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Core Competencies */}
                    <div className="space-y-4">
                      <h4 className="text-base font-medium text-cyan-400 flex items-center">
                        <span className="mr-2">📊</span> Core Competencies
                      </h4>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Data & Performance</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Data Analytics", "SEO", "Conversion Rate Optimization", "AB Testing"].map(
                              (skill, index) => (
                                <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                              ),
                            )}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Growth & Media</h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Media Buying (FB, Google, TikTok, Pinterest)",
                              "Influencer Marketing",
                              "Content Strategy",
                              "Email Marketing",
                              "Omni-Channel Marketing",
                            ].map((skill, index) => (
                              <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Marketing Ops</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Marketing Automation", "Project & Product Management"].map((skill, index) => (
                              <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Marketing Tools & Platforms */}
                    <div className="space-y-4">
                      <h4 className="text-base font-medium text-cyan-400 flex items-center">
                        <span className="mr-2">🛠️</span> Marketing Tools & Platforms
                      </h4>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Analytics & Tracking</h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Google Analytics",
                              "Google Tag Manager",
                              "Google Search Console",
                              "Google MC",
                              "Matomo",
                            ].map((tool, index) => (
                              <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Email & CRM</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Mailchimp", "Klaviyo", "HubSpot"].map((tool, index) => (
                              <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">SEO & CRO</h5>
                          <div className="flex flex-wrap gap-2">
                            {["SEMrush", "Ahrefs", "Yoast SEO", "Optimizely"].map((tool, index) => (
                              <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Customer Support & Ops</h5>
                          <div className="flex flex-wrap gap-2">
                            {["ZenDesk", "ClickFunnels"].map((tool, index) => (
                              <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Design & Scheduling</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Canva", "Buffer", "Hootsuite", "Trello", "Asana"].map((tool, index) => (
                              <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">CMS & eCommerce</h5>
                          <div className="flex flex-wrap gap-2">
                            {["WordPress", "Shopify", "Squarespace", "Magento"].map((tool, index) => (
                              <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Automation & AI Tools */}
                    <div className="space-y-4">
                      <h4 className="text-base font-medium text-cyan-400 flex items-center">
                        <span className="mr-2">🤖</span> Automation & AI Tools
                      </h4>

                      <div className="space-y-3">
                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Automation Platforms</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Make.com", "n8n", "Zapier", "Pipedream", "Activepieces", "Airtable Automations"].map(
                              (tool, index) => (
                                <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                              ),
                            )}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">AI & Scripting</h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "OpenAI (ChatGPT API)",
                              "LangChain",
                              "Python (for scripting/automation)",
                              "Notion AI",
                              "AutoGPT",
                            ].map((tool, index) => (
                              <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-zinc-300 mb-2">Integration & Dev Tools</h5>
                          <div className="flex flex-wrap gap-2">
                            {["Google Apps Script", "Webhooks", "v0.dev"].map((tool, index) => (
                              <SkillTagComponent key={index}>{tool}</SkillTagComponent>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="space-y-4">
                      <h4 className="text-base font-medium text-cyan-400 flex items-center">
                        <span className="mr-2">🧠</span> Soft Skills
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {["Analytical Skills", "Team Management", "Problem-Solving"].map((skill, index) => (
                              <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-2">
                            {["Multitasking", "Learning & Adaptability", "Project Ownership"].map((skill, index) => (
                              <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection animation="fade-up" id="projects">
              <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <GlobeIcon className="w-5 h-5 mr-2 text-cyan-400" />
                      <h3 className="text-lg font-medium">Recent Projects</h3>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                      View All
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {projects.map((project, index) => (
                      <AnimatedSection key={project.id} animation="zoom-in" delay={100 * (index + 1)}>
                        <ProjectCard
                          title={project.title}
                          category={project.category}
                          image={project.thumbnailImage}
                          slug={project.slug}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-zinc-500"
        >
          <p>© {new Date().getFullYear()} Arman Ali. All rights reserved.</p>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
  )
}
