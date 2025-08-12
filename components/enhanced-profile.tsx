"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SocialLinks } from "@/components/social-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, MapPin, Languages, Briefcase } from "lucide-react"
import { getPersonalInfo, getAboutInfo } from "@/lib/data"

export function EnhancedProfile() {
  const [activeTab, setActiveTab] = useState("about")

  const personalInfo = getPersonalInfo()
  const aboutInfo = getAboutInfo()

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm col-span-1 flex flex-col">
      <CardContent className="p-0">
        {/* Profile Header - Improved mobile layout */}
        <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-4 sm:p-6 flex flex-col items-center border-b border-zinc-800">
          <div className="flex flex-col sm:flex-col items-center w-full">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-cyan-400/20 ring-4 ring-zinc-800/50">
              <Image src="/arman-profile.jpeg" alt="Arman Ali" fill className="object-cover" />
            </div>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold">Arman Ali</h2>
              <p className="text-sm text-cyan-400 mb-1">
                Growth Marketer | Media Buying Strategist | Tracking and Automation Expert
              </p>
              <div className="flex items-center justify-center text-xs text-zinc-400 mb-3">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {personalInfo.badges.map((badge, index) => (
              <Badge key={index} variant="outline" className="bg-zinc-800/50 hover:bg-zinc-700">
                {badge}
              </Badge>
            ))}
          </div>

          <SocialLinks socialLinks={personalInfo.social} />
        </div>

        {/* Tabbed Content - Mobile optimized */}
        <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b border-zinc-800">
            <TabsList className="w-full bg-transparent border-b border-zinc-800 rounded-none h-auto p-0">
              <TabsTrigger
                value="about"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${
                  activeTab === "about" ? "border-cyan-400 text-cyan-400" : "border-transparent text-zinc-400"
                }`}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                About
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="p-4 sm:p-6 space-y-4 sm:space-y-6 focus:outline-none">
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <User className="w-4 h-4 mr-2 text-cyan-400" />
                About Me
              </h3>
              <p className="text-sm">{aboutInfo.bio}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                Professional Focus
              </h3>
              <div className="space-y-2">
                {aboutInfo.focus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-zinc-400 flex items-center">
                <Languages className="w-4 h-4 mr-2 text-cyan-400" />
                Languages
              </h3>
              <div className="space-y-3">
                {aboutInfo.languages.map((language, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{language.name}</span>
                      <span className="text-xs text-zinc-400">{language.proficiency}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Profile Footer - Availability Status */}
        <div className="p-3 sm:p-4 border-t border-zinc-800 flex items-center justify-center">
          <div className="flex items-center">
            <span
              className={`w-2 h-2 ${personalInfo.availableForWork ? "bg-green-500" : "bg-red-500"} rounded-full mr-2`}
            ></span>
            <span className="text-xs text-zinc-400">
              {personalInfo.availableForWork ? "Available for new projects" : "Not available for new projects"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
