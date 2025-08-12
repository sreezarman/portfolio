export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
  additionalLinks?: { name: string; url: string }[]
}

const projects: Project[] = [
  {
    id: 5,
    slug: "medical-ad-spend",
    title: "Scaling Medical Ad Spend to $60M+ During COVID Surge",
    category: "Performance Marketing",
    shortDescription: "Massive growth campaign for nationwide healthcare provider during COVID-19 pandemic.",
    description: [
      "From 2020 to 2023, I worked as a Media Buyer and Performance Analyst on a high-growth medical client during the height of COVID-19. The campaigns focused on driving appointment bookings for COVID testing, weight loss consultations, and other medical services across 40+ U.S. markets.",
      "Over three years, we scaled from a few thousand dollars in ad spend to $61.8M in total spend — averaging 18.9M clicks at a $3.26 CPC, maintaining a CPA of $30 and an estimated ROAS of 4.5x, as tracked via call rail + ERP attribution.",
      "The project required intense daily optimization and adaptation to rapidly changing market conditions. As COVID testing demand surged and competition intensified, we continuously refined targeting strategies, bid adjustments, and creative messaging to maintain performance at scale.",
    ],
    features: [
      "Scaled Google Ads from <$10K/month to $30K+/day across 4 major accounts",
      "Launched and optimized high-volume search and video campaigns with intense daily iterations",
      "Maintained performance during extreme market volatility and daily new competition",
      "Leveraged Google Ads Editor for bulk edits and bid optimizations across thousands of ad groups",
      "Used Looker Studio dashboards for real-time budget pacing, regional CPA tracking, and ROI snapshots",
      "Managed spend across Google Ads, Programmatic, and Meta (retargeting)",
    ],
    technologies: [
      "Google Ads",
      "Google Ads Editor",
      "Looker Studio",
      "CallRail",
      "ERP System",
      "Meta Ads",
      "Programmatic Platforms",
      "Excel",
      "Data Studio",
      "Attribution Modeling",
    ],
    coverImage: "/medical-ad-spend-dashboard.png",
    thumbnailImage: "/medical-ad-spend-dashboard.png",
    gallery: [
      { url: "/medical-ad-spend-dashboard.png", caption: "Google Ads Dashboard Showing $61.8M Total Spend" },
      { url: "/google-ads-editor.png", caption: "Google Ads Editor Used for Campaign Management" },
      { url: "/google-ads-account.png", caption: "Multi-Account Performance Overview" },
      { url: "/analytics-dashboard.png", caption: "Analytics Dashboard for Conversion Tracking" },
    ],
    client: "Nationwide Healthcare Provider (via Agency)",
    timeline: "3 years (2020-2023)",
    role: "Media Buyer & Performance Analyst",
    relatedProjects: [
      {
        slug: "event-listing-automation",
        title: "Event Listing Automation",
        category: "Workflow Automation",
        image: "/workflow-diagram.png",
      },
      {
        slug: "server-side-tracking",
        title: "Server-Side Tracking Implementation",
        category: "Analytics & Attribution",
        image: "/server-side-tracking-diagram.png",
      },
    ],
  },
  {
    id: 9,
    slug: "personalized-event-lead-gen",
    title: "Personalization-Led Event Lead Gen at <$1 CPL Across 3 Major US Cities",
    category: "Performance Marketing",
    shortDescription:
      "Hyper-personalized Meta Ads campaign drove thousands of qualified event signups by matching creatives to user intent.",
    description: [
      "To promote local events in Los Angeles, Atlanta, and Miami, I launched a city-wise lead generation campaign via Meta Ads, focused on discovering user preferences based on creative engagement. The campaign aimed to segment prospects by event type (music, fitness, social, etc.) and collect leads for email marketing follow-up.",
      "Leveraging Meta's vertical ad structure guidelines, each ad set used a minimum of 5 creative variations to match diverse intent triggers—from surf clips to nightlife visuals—capturing specific interests while improving delivery efficiency.",
      "The campaign's success was built on a foundation of creative diversity and personalization. By allowing users to self-select their interests through engagement with specific creative types, we were able to build highly targeted audience segments for remarketing and create more relevant follow-up email sequences based on demonstrated preferences.",
    ],
    features: [
      "Delivered 5,422 leads in LA at $0.88 CPL, and 3,859 leads in ATL at $0.91 CPL",
      "Achieved an average CPL well under $1, with top-performing sets at $0.55",
      "Implemented vertical ad structure using 5+ creatives per ad set for optimal personalization",
      "Scaled across three US metros, each with unique engagement patterns and event interest profiles",
      "Generated over 9,281 qualified leads with a total spend of $6,644",
      "Achieved 537K+ impressions across all campaigns",
    ],
    technologies: [
      "Meta Ads Manager",
      "Lead Forms",
      "Meta Guide for Vertical Ad Structures",
      "Geo-targeting",
      "Creative Testing Framework",
      "Audience Segmentation",
      "Frequency Capping",
      "Performance Heatmaps",
    ],
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-insights-2025-04-17-04_30_57-VJoJbrB1CG1ccN197Gc9adwiaoX9sM.png",
    thumbnailImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-insights-2025-04-17-04_30_57-VJoJbrB1CG1ccN197Gc9adwiaoX9sM.png",
    gallery: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-insights-2025-04-17-04_30_57-VJoJbrB1CG1ccN197Gc9adwiaoX9sM.png",
        caption: "Los Angeles Campaign: 5,422 leads at $0.88 CPL with $4,797.31 spend",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-insights-2025-04-17-04_30_25-LWeZkMXUsT6TF2fMeK6mWGxac8vOLa.png",
        caption: "Atlanta Campaign: 3,859 leads at $0.91 CPL with $3,522.95 spend",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-adsets-2025-04-17-04_32_31-foOPgsORdqoLog6fbSe1wzrz9DIyEB.png",
        caption: "Campaign Overview: Multiple ad sets performance across cities",
      },
    ],
    client: "Breathe Media Network",
    timeline: "Dec 2024 - Apr 2025",
    role: "Lead Generation Strategist",
    relatedProjects: [
      {
        slug: "email-retargeting-campaign",
        title: "Email Retargeting Campaign",
        category: "Performance Marketing",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-insights-2025-04-17-04_06_05-6rKFXgDNn4koqWh4CMdd5OLgP3ccTH.png",
      },
      {
        slug: "event-listing-automation",
        title: "Event Listing Automation",
        category: "Workflow Automation",
        image: "/workflow-diagram.png",
      },
    ],
  },
  {
    id: 3,
    slug: "event-listing-automation",
    title: "Event Listing Automation – Breathe Media Network",
    category: "Workflow Automation",
    shortDescription: "Workflow automation to scale daily wellness event listings with ChatGPT and n8n.",
    description: [
      "To support Breathe Media Network's mission of surfacing the best wellness events in Atlanta and beyond, we automated the event listing process to publish hundreds of curated events daily.",
      "Manual listing was unsustainable, so we designed an automation system powered by n8n, ChatGPT, and Google Sheets. The system transformed raw event data into SEO-optimized, reader-friendly listings — complete with metadata, schema, and structured CTAs — which were then published to WordPress using the Event Manager plugin's sheet-based importer.",
      "Over 5,000 events were published in 1 year, driving the site from zero to 20,000 monthly visitors and creating a valuable lead funnel from organic search and newsletter traffic. Events from Eventbrite were automated via API; others were handled manually.",
    ],
    features: [
      "Fully automated event listing workflow from Google Sheets → n8n → ChatGPT → WordPress",
      "SEO-enhanced rewriting using ChatGPT to improve click-throughs and organic ranking",
      "Dynamic schema generation, including event location, organizer, and call-to-action buttons",
      "Successfully published over 5,000 events in 12 months",
      "Traffic grew from 0 to 20,000 monthly users in under 18 months",
      "Became a high-quality lead source from email and search",
    ],
    technologies: [
      "n8n",
      "ChatGPT",
      "Google Sheets",
      "Eventbrite API",
      "WordPress",
      "Event Manager Plugin",
      "Excel Scripting",
      "Make.com",
      "Screaming Frog",
      "Ahrefs",
      "Google Search Console",
    ],
    coverImage: "/workflow-diagram.png",
    thumbnailImage: "/workflow-diagram.png",
    gallery: [
      { url: "/workflow-diagram.png", caption: "Event Listing Automation Workflow Diagram" },
      { url: "/breathe-miami-events.png", caption: "Breathe Miami Events Page" },
      { url: "/breathe-la-events.png", caption: "Breathe Los Angeles Events Page" },
      { url: "/breathe-miami-full.png", caption: "Breathe Miami Website Overview" },
    ],
    client: "Breathe Media Network",
    timeline: "1 month (Q4 2023)",
    role: "Automation Architect & Growth Strategist",
    liveUrl: "https://breathemedianetwork.com",
    additionalLinks: [
      { name: "Breathe Miami", url: "https://breathemiami.us/" },
      { name: "Breathe Los Angeles", url: "https://breathelosangeles.us/" },
      { name: "Breathe Atlanta", url: "https://breatheatlanta.us/" },
    ],
    relatedProjects: [
      {
        slug: "medical-ad-spend",
        title: "Medical Ad Spend Scaling",
        category: "Performance Marketing",
        image: "/medical-ad-spend-dashboard.png",
      },
      {
        slug: "server-side-tracking",
        title: "Server-Side Tracking Implementation",
        category: "Analytics & Attribution",
        image: "/server-side-tracking-diagram.png",
      },
    ],
  },
  {
    id: 6,
    slug: "server-side-tracking",
    title: "Fixing $88K in Misattributed Revenue with Server-Side Tracking",
    category: "Analytics & Attribution",
    shortDescription:
      "Implemented server-side tracking to solve critical attribution issues across multiple platforms.",
    description: [
      "While managing performance marketing for a fast-scaling eCommerce client, we faced critical attribution issues across Shopify, Meta Ads, Google Ads, Pinterest, and GA4. Conversion data was inflated, misaligned, and misleading — causing wasted spend and poor optimization decisions.",
      "I led the architecture and deployment of a server-side tracking framework to fix attribution blind spots and bring data clarity across platforms. The project involved deep collaboration with developers to implement a GTM server container using Stape, pushing clean, deduplicated events to GA4, Meta, and Google Ads.",
      "The implementation required careful event mapping and QA, syncing event schema with Shopify's backend, and validating server hits against browser hits. We also built a multi-platform Tableau dashboard to compare platform data against Shopify actuals, enabling LTV-based optimization and smarter CAC targeting.",
    ],
    features: [
      "Reduced attribution error margin from ~28% to under 5%",
      "Improved ROAS accuracy — adjusted from inflated 7.2x to true 4.5x",
      "Identified Meta Ads as the strongest-performing channel, leading to reallocation of 18% budget from low-ROI Pinterest campaigns",
      "Enabled real CAC, LTV, churn visibility, powering smarter scaling decisions",
      "Delivered in 4 weeks from diagnosis to full deployment + reporting",
    ],
    technologies: [
      "Shopify",
      "Meta Ads",
      "Google Ads",
      "GA4",
      "Pinterest Ads",
      "Google Tag Manager (Server-Side)",
      "Stape",
      "Tableau",
      "GA Debugger",
      "Tag Assistant",
    ],
    coverImage: "/server-side-tracking-diagram.png",
    thumbnailImage: "/server-side-tracking-diagram.png",
    gallery: [
      { url: "/server-side-tracking-diagram.png", caption: "Client-Side vs Server-Side Tracking Architecture" },
      { url: "/gtm-server-flow.png", caption: "Google Tag Manager Server-Side Implementation Flow" },
      { url: "/conversion-tracking-accuracy.png", caption: "Conversion Tracking Accuracy Before & After Fix" },
      { url: "/ltv-cac-ratio.png", caption: "LTV to CAC Ratio Dashboard" },
      { url: "/ltv-vs-cac-over-time.png", caption: "Customer LTV vs CAC Over Time" },
    ],
    client: "Fast-Scaling eCommerce Brand",
    timeline: "4 weeks (Q1 2023)",
    role: "Analytics & Attribution Architect",
    relatedProjects: [
      {
        slug: "medical-ad-spend",
        title: "Medical Ad Spend Scaling",
        category: "Performance Marketing",
        image: "/medical-ad-spend-dashboard.png",
      },
      {
        slug: "ror-to-shopify-migration",
        title: "RoR to Shopify Migration",
        category: "eCommerce Migration",
        image: "/ninety-percent-ecommerce.png",
      },
    ],
  },
  {
    id: 8,
    slug: "email-retargeting-campaign",
    title: "Retargeting Campaign Using Email List Generates 14x ROAS",
    category: "Performance Marketing",
    shortDescription: "Massive ROI from Meta Ads by retargeting high-intent users with email-based segmentation.",
    description: [
      "In Q4 2024, I executed a Meta Ads retargeting campaign targeting an email list of high-intent users for a DTC brand. The primary goal was to convert dormant subscribers and past website visitors into purchasers through personalized ad sequences.",
      "Using Meta's custom audience capabilities, the campaign aligned messaging with segmented email behaviors, offering time-sensitive promotions and product reminders to re-engage warm leads.",
      "The strategy focused on micro-budgets with tight frequency capping and optimized creative rotation to maintain engagement longevity, resulting in consistent purchase volume over a 60-day period through sequential retargeting and bid optimization.",
    ],
    features: [
      "Generated 533 purchases at just $11.35 cost per purchase",
      "Achieved a remarkable 14x ROAS from cold start",
      "Drove over $80,000 in revenue from approximately $6,000 in ad spend",
      "Maintained consistent purchase volume over a 60-day period via sequential retargeting",
      "Created retargeting ad sequences based on open rates, click data, and recent site visits",
      "Used micro-budgets with tight frequency capping for optimal performance",
    ],
    technologies: [
      "Meta Ads Manager",
      "Email List Custom Audiences",
      "Facebook Pixel",
      "GA4",
      "Behavioral Segmentation",
      "Audience Targeting",
      "Creative Testing",
      "Conversion Optimization",
    ],
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-insights-2025-04-17-04_06_05-6rKFXgDNn4koqWh4CMdd5OLgP3ccTH.png",
    thumbnailImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-insights-2025-04-17-04_06_05-6rKFXgDNn4koqWh4CMdd5OLgP3ccTH.png",
    gallery: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-campaigns-insights-2025-04-17-04_06_05-6rKFXgDNn4koqWh4CMdd5OLgP3ccTH.png",
        caption: "Meta Ads Campaign Performance: 533 purchases at $11.35 CPP with 14x ROAS",
      },
    ],
    client: "DTC Brand (Undisclosed)",
    timeline: "Q4 2024",
    role: "Performance Marketing Strategist",
    relatedProjects: [
      {
        slug: "omnichannel-holiday-campaign",
        title: "Omnichannel Holiday Campaign",
        category: "Performance Marketing",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_OQbxbVCS7L-laLplSTekyNGf28OAFJdr0qkLoY5ho.gif",
      },
      {
        slug: "server-side-tracking",
        title: "Server-Side Tracking Implementation",
        category: "Analytics & Attribution",
        image: "/server-side-tracking-diagram.png",
      },
    ],
  },
  {
    id: 2,
    slug: "omnichannel-holiday-campaign",
    title: "Omnichannel Holiday Campaign: 4.5x+ ROAS Across Google & Meta",
    category: "Performance Marketing",
    shortDescription:
      "High-impact omnichannel holiday campaign delivering exceptional ROAS across Meta and Google Ads platforms.",
    description: [
      "In December 2024, I executed a high-impact omnichannel holiday campaign across Meta and Google Ads to drive eCommerce sales for a DTC brand. By combining Meta's creative reach and retargeting strengths with Google's intent-driven conversions, we crafted a full-funnel acquisition engine.",
      "Meta Ads focused on driving awareness and engagement through Advantage+ and manual ad sets, featuring LAL, broad, and catalog-based audiences. Simultaneously, Google Search and Shopping campaigns targeted bottom-funnel buyers with high-intent keywords.",
      "The campaigns were synced through UTM consistency, shared creative insights, exclusion logic, and server-side tracking to maintain attribution clarity. The result was a tightly orchestrated, multi-platform performance strategy that delivered exceptional ROAS.",
      "To maximize campaign efficiency during the holiday season, I deployed a dual-layer A/B testing framework across Meta Ads: Audience Test comparing Lookalike Audiences (LAL) against broader interest-based targeting, and Creative Test running static lifestyle creatives vs. dynamic product catalog ads. LAL outperformed in CPA stability and ROAS during peak dates, while static creatives had higher CTR, but catalog ads delivered better ROAS on retargeting.",
    ],
    features: [
      "Achieved a blended ROAS of 4.5x+, combining Meta and Google results",
      "Meta Ads: $1.2K spend, 4.66x ROAS, 59 purchases at $20.91 CPA",
      "Google Ads: $9.2K spend, 4.3x ROAS, 400+ conversions at $22.92 CPA",
      "Synchronized budget pacing and UTM mapping across both platforms",
      "Used creative and audience insights from one platform to inform the other",
      "Delivered daily blended performance dashboards using Looker Studio",
    ],
    technologies: [
      "Meta Ads",
      "Google Ads",
      "Advantage+",
      "Shopify",
      "GA4",
      "Catalog Ads",
      "Creative Testing",
      "LAL/Broad Segmentation",
      "Search Campaigns",
      "Looker Studio",
    ],
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_OQbxbVCS7L-laLplSTekyNGf28OAFJdr0qkLoY5ho.gif",
    thumbnailImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_OQbxbVCS7L-laLplSTekyNGf28OAFJdr0qkLoY5ho.gif",
    gallery: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_OQbxbVCS7L-laLplSTekyNGf28OAFJdr0qkLoY5ho.gif",
        caption: "Meta Ads Campaign Performance: 4.66x ROAS, $5,752.18 in purchase value",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AyQDGFcS3HDpd2X3Hi0qpJV5CTLu90.png",
        caption: "Google Ads Results: 402+ conversions with $40K+ value at $22.92 CPA",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%205%2C%202025%2C%2002_58_17%20AM-Rx6aj20ULMlLfm29MLCDxREIDaRzl9.png",
        caption: "Omnichannel Strategy Flow: Google + Meta Ads driving traffic to maximize ROAS",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-adsmanager-facebook-adsmanager-manage-adsets-insights-2025-04-17-04_24_41-F3hMZ0JeZYZU0fi1TsmFCjfD0K4CMl.png",
        caption: "A/B Testing Results: Dynamic Sales Campaign performance metrics",
      },
    ],
    client: "DTC Brand (Undisclosed)",
    timeline: "Dec 2024 - Jan 2025",
    role: "Performance Marketing Strategist",
    relatedProjects: [
      {
        slug: "medical-ad-spend",
        title: "Medical Ad Spend Scaling",
        category: "Performance Marketing",
        image: "/medical-ad-spend-dashboard.png",
      },
      {
        slug: "server-side-tracking",
        title: "Server-Side Tracking Implementation",
        category: "Analytics & Attribution",
        image: "/server-side-tracking-diagram.png",
      },
    ],
  },
  {
    id: 7,
    slug: "real-estate-lead-gen",
    title: "Real Estate Lead Gen: Optimizing Google Ads for $39 CPA in DFW Market",
    category: "Performance Marketing",
    shortDescription: "Optimized Google Ads campaigns for real estate lead generation in the Dallas-Fort Worth market.",
    description: [
      "In April 2025, I managed multiple Google Ads campaigns focused on driving high-quality real estate leads in the Dallas-Fort Worth area. Through structured optimization, AI-driven adjustments, and precise audience segmentation, the campaigns delivered efficient conversions with cost control and data-backed scalability.",
      "The strategy centered on refining weekday morning ad scheduling with a focus on the 8-9AM timeframe, when potential real estate clients were most active. By applying Google's AI optimization tools for bidding, location targeting, and device targeting, we were able to maximize campaign efficiency.",
      "A key part of the approach involved pausing underperforming ad groups and reallocating spend to the highest-performing segments. Creative assets were specifically tailored for mobile users, which proved to be the dominant platform for both clicks and conversions in this market.",
    ],
    features: [
      "Achieved 27 qualified leads at an average CPA of $38.93",
      "Maintained a tight budget of $1.05K, generating 1.58K clicks",
      "Top-performing campaign: $517 spend → 18 conversions",
      "Mobile dominated: 77.1% of clicks, 66.7% of conversions",
      "Highest CTR ad hit 12.6%",
      "Refined weekday morning ad scheduling (8–9AM focus)",
      "Applied Google's AI optimization for bidding/location/device targeting",
    ],
    technologies: [
      "Google Ads",
      "Conversion Tracking",
      "Demographic Insights",
      "Device Reporting",
      "Search Ad Optimization",
      "Google Ads AI Recommendations",
      "Performance Max",
      "Local Services Ads",
      "Google Analytics",
    ],
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XuFcIQr9QMXCVAkVmRdnm42todfQQQ.png",
    thumbnailImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XuFcIQr9QMXCVAkVmRdnm42todfQQQ.png",
    gallery: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XuFcIQr9QMXCVAkVmRdnm42todfQQQ.png",
        caption: "Google Ads Campaign Performance: 27 conversions at $38.93 CPA",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ibHUyqU8JgzylsfCIV0r1pDkga8Siy.png",
        caption: "Device & Demographics Breakdown: Mobile dominates with 77.8% of spend",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yjxbSaUW5NrpAimvniw83TkyZmRKKD.png",
        caption: "Extended Campaign Performance: 598 conversions from 28.9K clicks",
      },
    ],
    client: "Real Estate Agency (DFW Market)",
    timeline: "April 2025",
    role: "Performance Marketing Strategist",
    relatedProjects: [
      {
        slug: "omnichannel-holiday-campaign",
        title: "Omnichannel Holiday Campaign",
        category: "Performance Marketing",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_OQbxbVCS7L-laLplSTekyNGf28OAFJdr0qkLoY5ho.gif",
      },
      {
        slug: "medical-ad-spend",
        title: "Medical Ad Spend Scaling",
        category: "Performance Marketing",
        image: "/medical-ad-spend-dashboard.png",
      },
    ],
  },
  {
    id: 1,
    slug: "looker-studio-dashboards",
    title: "Looker Studio Dashboard Library: 6 Custom Reporting Systems",
    category: "Analytics & Reporting",
    shortDescription: "Custom analytics dashboards designed for different stakeholders across multiple industries.",
    description: [
      "Over the past 2+ years, I've designed a wide range of Looker Studio dashboards for DTC brands, agencies, and internal marketing ops. This case study highlights 6 custom dashboards that solved distinct analytics needs — from campaign performance to executive-level summaries.",
      "Each dashboard was designed with a clear user type in mind — CMO, media buyer, founder, or operations — ensuring clarity, decision-ready metrics, and seamless cross-platform visibility.",
      "The dashboards reduced manual reporting time by 80%, improved decision velocity for founders and CMOs, and enabled granular campaign optimization. Several dashboards were used to automate investor update decks and marketing syncs.",
    ],
    features: [
      "Shopify Performance Dashboard: Real ROAS, net CAC, blended LTV with server-side conversion signals synced via GA4 + Stape",
      "Google Ads Campaign Optimizer: Daily CPA trends, CTR breakdown, search term filtering with keyword-level performance and campaign heatmaps",
      "Meta Ads Creative Insights: Placement ROAS, ad-set performance, creative trends segmented by device, age, gender",
      "Cross-Channel Attribution Model: GA4, Meta, Google Ads, and Shopify synced with real vs reported conversions and attribution heatmap",
      "Executive Snapshot Dashboard: Weekly KPI rollups sent via email (PDF & link) with LTV, churn, and trend visualization for founders",
      "Product Funnel Breakdown (eCommerce): Top-selling SKUs, drop-offs, returns, retention with variant-level insights & cohort comparisons",
    ],
    technologies: [
      "Looker Studio",
      "GA4",
      "Meta Ads",
      "Google Ads",
      "Shopify",
      "Google Sheets",
      "Stape",
      "BigQuery",
      "Data Visualization",
      "Data Studio",
      "SQL",
    ],
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-lookerstudio-google-u-0-reporting-e4bde14c-c541-4458-bdcf-30af0124cb0b-page-AwyCB-2025-05-05-04_04_53-168G5yEUh1it0wie0CICInfrYYhJNY.png",
    thumbnailImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-lookerstudio-google-u-0-reporting-e4bde14c-c541-4458-bdcf-30af0124cb0b-page-AwyCB-2025-05-05-04_04_53-168G5yEUh1it0wie0CICInfrYYhJNY.png",
    gallery: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-lookerstudio-google-u-0-reporting-e4bde14c-c541-4458-bdcf-30af0124cb0b-page-AwyCB-2025-05-05-04_04_53-168G5yEUh1it0wie0CICInfrYYhJNY.png",
        caption: "Campaign Performance Dashboard: Cost, clicks, and conversions with device breakdown",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Altura_Homes_page-0001.jpg-Xn66cRuO1jbIJScE4DHNlG8peUNMhC.jpeg",
        caption:
          "Altura Homes Real Estate Dashboard: Multi-platform performance tracking with detailed Google Ads metrics",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sameday_Health_-_Dashboard%20%281%29%20%282%29_page-0001.jpg-SbvTfyPIqUeZCwJbVPkIjzUbZj8je6.jpeg",
        caption: "Website Overview Dashboard: User engagement, traffic sources, and conversion tracking",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dRNvQegM3OESZtJbMX12ZDmGl5iHxK.png",
        caption: "Cross-Platform Comparison: Facebook vs Google performance metrics",
      },
    ],
    client: "Multiple (eCommerce, Lead Gen, DTC)",
    timeline: "2022 - 2025",
    role: "Analytics & Reporting Specialist",
    relatedProjects: [
      {
        slug: "server-side-tracking",
        title: "Server-Side Tracking Implementation",
        category: "Analytics & Attribution",
        image: "/server-side-tracking-diagram.png",
      },
      {
        slug: "real-estate-lead-gen",
        title: "Real Estate Lead Gen",
        category: "Performance Marketing",
        image: "/real-estate-lead-gen-dashboard.png",
      },
    ],
  },
  {
    id: 4,
    slug: "ror-to-shopify-migration",
    title: "RoR to Shopify Migration – Ninety Percent",
    category: "eCommerce Migration",
    shortDescription: "eCommerce Migration Project designed for performance, SEO preservation, and scalability.",
    description: [
      "This project involved the full-scale migration of Ninety Percent's eCommerce site from a legacy Ruby on Rails (RoR) platform to Shopify. The goal was to enhance site performance, improve scalability, and preserve organic SEO value without downtime.",
      "The site had a large and complex structure: over 500 products with 2,000 variants and 8,000+ images. A team of 7 was assembled for the 3-month project, including 2 developers, 1 support admin, 3 marketing associates, and 1 UX designer. I led the entire migration process, from technical execution to team coordination and QA.",
      "The primary challenge was to execute a precise, lossless migration — ensuring all product data, images, SEO meta, and redirect rules were correctly mapped without breaking live functionality. Custom Excel scripts were developed to automate bulk data formatting, image sequencing, and product-image assignment. SEO structure was maintained using manual sitemap configuration and redirect mapping.",
      "The actual site switch took under 3 hours and maintained 100% traffic continuity. Within one month of relaunch, SEO traffic increased by 30% due to improved page speed, SEO-optimized Shopify theme setup, and enhanced structured data.",
    ],
    features: [
      "Migrated 500+ products, 2,000 variants, and 8,000 images using structured scripts",
      "Zero-downtime migration with complete SEO preservation and 301 redirect management",
      "Shopify SEO features (canonical URLs, alt text, meta fields) fully utilized during rebuild",
      "Used Excel scripting to automate image mapping and bulk product import",
      "Redirect and sitemap optimization led to 30% SEO traffic growth within 1 month post-launch",
      "Managed project via Jira and ensured cross-functional collaboration across dev, design, and marketing teams",
      "CircleCI used for staging/testing pipelines pre-deployment",
    ],
    technologies: [
      "Shopify",
      "Ruby on Rails",
      "Excel Scripting",
      "Jira",
      "CircleCI",
      "Screaming Frog",
      "Ahrefs",
      "Google Search Console",
      "Google Sheets",
      "Shopify Admin API",
    ],
    coverImage: "/ninety-percent-ecommerce.png",
    thumbnailImage: "/ninety-percent-ecommerce.png",
    gallery: [{ url: "/ninety-percent-ecommerce.png", caption: "Ninety Percent eCommerce Site After Migration" }],
    client: "Ninety Percent",
    timeline: "3 months (Q1 2020)",
    role: "Lead Migration Strategist & Project Manager",
    liveUrl: "https://ninetypercent.com",
    relatedProjects: [
      {
        slug: "event-listing-automation",
        title: "Event Listing Automation",
        category: "Workflow Automation",
        image: "/workflow-diagram.png",
      },
      {
        slug: "medical-ad-spend",
        title: "Medical Ad Spend Scaling",
        category: "Performance Marketing",
        image: "/medical-ad-spend-dashboard.png",
      },
    ],
  },
  {
    id: 10,
    slug: "viral-ecommerce-scaling",
    title: "Scaling a Viral E-commerce Trend to $200K in Under 14 Days",
    category: "Performance Marketing",
    shortDescription:
      "Massive revenue surge leveraging Labubu's global trend with lean ad spend and cross-platform targeting.",
    description: [
      "In July 2025, I led a rapid-scale e-commerce campaign for a trending collectible product — capitalizing on the viral Labubu wave. Starting from zero, the store went from launch to $35K in daily sales within 15 days, hitting $200K in revenue by August 4 with just $30K total ad spend.",
      "The campaign strategy centered on aggressive, data-driven scaling across Meta, TikTok, and Pinterest Ads, using trend-driven UGC creatives to ride existing demand momentum. We targeted multiple countries and audience segments, constantly testing hooks and offers.",
      "The success was built on rapid creative iteration and real-time optimization. By leveraging the viral nature of the Labubu trend and implementing urgency-driven messaging around stock scarcity, we were able to capture maximum demand during the peak of the trend cycle while maintaining profitability across all channels.",
    ],
    features: [
      "Grew from $0 to $200K in sales in under two weeks",
      "Scaled ad spend from $100/day to $2K/day on Meta while running parallel TikTok campaigns",
      "Achieved 6.6x blended ROAS with a $110 average order value",
      "Leveraged 'stock running out' urgency to boost conversion rates",
      "Used UGC-style video ads and unboxing content to tap into community hype",
      "Implemented Hyros tracking for high-accuracy attribution across channels",
    ],
    technologies: [
      "Shopify",
      "Hyros",
      "Meta Ads",
      "TikTok Ads",
      "Pinterest Ads",
      "UGC Content Creation",
      "Cross-Platform Attribution",
      "Trend Analysis",
      "Creative Testing Framework",
      "Multi-Country Targeting",
    ],
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hKPB7jUAV7QL8p79PHuTDrbxXfiqwl.png",
    thumbnailImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hKPB7jUAV7QL8p79PHuTDrbxXfiqwl.png",
    gallery: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hKPB7jUAV7QL8p79PHuTDrbxXfiqwl.png",
        caption: "Shopify Analytics Dashboard: $198,518.93 in sales over 20 days with 1,714 orders",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FnqlGdKotJryF8LXfTYr8uMlOVMfEV.png",
        caption: "Cross-Platform Attribution: Facebook ($76K), Instagram ($40K), and TikTok ($23K) sales breakdown",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-28QGhZ77xbA1t0reaBKqOkFxTDQvGn.png",
        caption: "Google Analytics Traffic Surge: 92,642 users with 79.9% from Paid Social during viral scaling",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5VGEzrgGNiMKwtYPKTzvTChYY0VSXK.png",
        caption:
          "Performance Snapshot: 6.5K add-to-carts, 1.8K purchases, $198K revenue with Labubu products dominating",
      },
    ],
    client: "Viral Collectibles Store (Undisclosed)",
    timeline: "14 days (July - August 2025)",
    role: "Lead Performance Marketing Strategist",
    relatedProjects: [
      {
        slug: "medical-ad-spend",
        title: "Medical Ad Spend Scaling",
        category: "Performance Marketing",
        image: "/medical-ad-spend-dashboard.png",
      },
      {
        slug: "omnichannel-holiday-campaign",
        title: "Omnichannel Holiday Campaign",
        category: "Performance Marketing",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrome_OQbxbVCS7L-laLplSTekyNGf28OAFJdr0qkLoY5ho.gif",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
