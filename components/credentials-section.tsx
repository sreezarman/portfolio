import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { SkillTag } from "@/components/skill-tag"
import { AnimatedSection } from "@/components/animated-section"
import { getCredentialsInfo } from "@/lib/data"

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo()

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Credentials</h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Professional Certifications */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                Professional Certifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {credentialsInfo.certifications.map((cert, index) => {
                  // Determine which logo to use based on the issuer
                  let logoSrc = "/placeholder.svg"
                  let bgColor = "bg-white"

                  if (cert.issuer.includes("Google")) {
                    logoSrc = "/google-logo.png"
                    bgColor = "bg-white"
                  } else if (cert.issuer.includes("Kameleoon")) {
                    logoSrc = "/kameleoon-logo.png"
                    bgColor = "bg-[#f5f5fa]" // Light lavender background matching Kameleoon's branding
                  } else if (cert.issuer.includes("Coursera")) {
                    logoSrc = "/coursera-logo.png"
                    bgColor = "bg-[#0056D2]" // Coursera blue background
                  } else if (cert.issuer.includes("CXL")) {
                    logoSrc = "/cxl-logo.png"
                    bgColor = "bg-[#e01e22]" // Red background for CXL
                  } else if (cert.issuer.includes("Meta")) {
                    logoSrc = "/meta-logo.png"
                    bgColor = "bg-white" // White background for Meta
                  }

                  return (
                    <div key={index} className="flex items-start bg-zinc-800/30 p-2 sm:p-3 rounded-lg">
                      <div
                        className={`relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 ${bgColor} flex items-center justify-center`}
                      >
                        <Image
                          src={logoSrc || "/placeholder.svg"}
                          alt={`${cert.issuer} logo`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">
                          {cert.url ? (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-cyan-400 transition-colors"
                            >
                              {cert.name}
                            </a>
                          ) : (
                            cert.name
                          )}
                        </h5>
                        <p className="text-xs text-zinc-400">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-cyan-400" />
                Education
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {credentialsInfo.education.map((edu, index) => {
                  // Determine which logo to use based on the institution
                  let logoSrc = "/placeholder.svg"
                  let bgColor = "bg-white"

                  if (edu.institution.includes("Cardiff Metropolitan")) {
                    logoSrc = "/cardiff-metropolitan-logo.png"
                    bgColor = "bg-black" // Black background for Cardiff Metropolitan logo
                  } else if (edu.institution.includes("ACCA")) {
                    logoSrc = "/acca-logo.png"
                    bgColor = "bg-white" // White background for ACCA logo
                  }

                  return (
                    <div key={index} className="flex items-start bg-zinc-800/30 p-2 sm:p-3 rounded-lg">
                      <div
                        className={`relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 ${bgColor} flex items-center justify-center`}
                      >
                        <Image
                          src={logoSrc || "/placeholder.svg"}
                          alt={edu.institution}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">
                          {edu.url ? (
                            <a
                              href={edu.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-cyan-400 transition-colors"
                            >
                              {edu.degree}
                            </a>
                          ) : (
                            edu.degree
                          )}
                        </h5>
                        <p className="text-xs text-zinc-400">
                          {edu.institution} • {edu.year}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills & Expertise */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {credentialsInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </CardContent>
    </Card>
  )
}
