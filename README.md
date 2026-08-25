# Cura Climate Core

🏭 CURA CLIMATE — 1:1 WEBSITE REPLICA MASTER PROMPT
GLOBAL DESIGN PHILOSOPHY
Build a single-page, long-scroll corporate climate-tech website for "CURA Climate" — a Canadian company decarbonizing cement production via electrochemical technology. The design language is premium industrial-minimalism meets climate-tech authority: think ultra-clean, confident whitespace, muted earth tones, and surgical typography. Every section breathes. Nothing is decorative without purpose. The aesthetic sits at the intersection of deep-tech credibility and environmental gravitas — similar to Stripe's clarity merged with a Patagonia-level mission seriousness. The site must feel like a $50M Series A company, not a startup blog.

STRICT COLOR PALETTE (Do NOT deviate)
Primary Background: #FFFFFF (pure white) — used for hero, content sections
Secondary Background: #F5F5F0 (warm off-white / light stone) — alternating section backgrounds
Dark Background Sections: #1A1A1A (near-black charcoal) — used for high-contrast statement sections and footer
Primary Text: #1A1A1A (near-black) — all headings and body copy on light backgrounds
Secondary Text: #6B6B6B (warm medium gray) — subheadings, captions, supporting text
Inverted Text: #FFFFFF — text on dark sections
Accent / Brand Green: #2D6A4F (deep forest green) — used sparingly for CTAs, links, hover states, and small accent elements
Accent Hover: #1B4332 (darker forest green) — button hover states
Border / Divider: #E0E0DC (warm light gray) — subtle horizontal rules, card borders
Highlight / Tag Background: #E8F0EB (very pale green tint) — label backgrounds, pill badges
TYPOGRAPHY SYSTEM (Exact Specifications)
Font Family:
Primary Typeface: A modern geometric sans-serif — use "Inter" or "Neue Montreal" (if unavailable, fallback to "Inter", "Helvetica Neue", Arial, sans-serif)
NO serif fonts anywhere. NO decorative fonts. The entire site uses ONE sans-serif family at different weights.
Type Scale:
Element	Size (Desktop)	Weight	Line-Height	Letter-Spacing	Transform
Hero Headline	72px–80px	600 (Semi-Bold)	1.05	-0.03em (tight)	None
Section Headline (H2)	48px–56px	600	1.1	-0.025em	None
Sub-Section Headline (H3)	28px–32px	600	1.2	-0.015em	None
Marquee / Scrolling Text	40px–48px	500 (Medium)	1.0	-0.02em	None
Body Copy (paragraphs)	17px–18px	400 (Regular)	1.65	0em	None
Small Body / Captions	14px–15px	400	1.5	0.01em	None
Navigation Links	15px	500	1.0	0.02em	Uppercase or Title Case
Button Text	15px	600	1.0	0.03em	Uppercase
Stat Numbers (large)	64px–80px	700 (Bold)	1.0	-0.03em	None
Stat Labels	14px	500	1.4	0.05em	Uppercase
Mobile Type Scale:
Hero: 38px–42px
H2: 32px–36px
H3: 22px–24px
Body: 16px
All letter-spacing slightly loosened by +0.005em
SPACING & GRID SYSTEM (Microscopic Precision)
Grid:
Max content width: 1200px, centered with margin: 0 auto
Page side padding: 80px on desktop, 40px on tablet, 20px on mobile
Column system: 12-column grid, 24px gutters
Vertical Section Spacing:
Between major sections: 120px–160px padding top and bottom
Between heading and first paragraph: 24px
Between paragraphs: 20px
Between heading and subheading: 12px
Between card elements in a grid: 32px gap
Between stat items: 48px–64px
Internal card padding: 32px–40px
Micro-spacing:
Button padding: 14px 32px
Button border-radius: 6px (subtle rounding, NOT fully rounded pills)
Nav item spacing: 32px horizontal gap between items
Logo to nav gap: auto-spaced with justify-content: space-between
Icon to text gap in lists: 12px
Tag/pill padding: 6px 14px, border-radius: 100px
NAVIGATION BAR (Sticky Header)
Structure:
Position: Fixed to top, full-width, z-index: 999
Height: 72px
Background on load: Transparent (over hero)
Background on scroll: #FFFFFF with box-shadow: 0 1px 0 rgba(0,0,0,0.06) — triggered after 80px scroll
Transition: Background and shadow fade in with transition: all 0.3s ease
Layout:
Left: CURA logo — clean wordmark "CURA" in all caps, semi-bold, 20px, letter-spacing 0.08em, color #1A1A1A. Optionally a small geometric icon to the left (abstract molecule/hexagon shape in brand green)
Center/Right: Navigation links: Technology · About · Partners · Press — styled in 15px medium weight, color #1A1A1A, no underlines
Far Right: CTA button labeled "Contact" or "Get in Touch" — solid #2D6A4F background, white text, 6px border-radius
Hover States:
Nav links: color transitions to #2D6A4F with transition: color 0.2s ease
CTA button: background darkens to #1B4332, slight translateY(-1px) lift
Mobile:
Hamburger menu icon (three lines, 2px stroke, #1A1A1A)
Opens full-screen overlay with #1A1A1A background, white links, stacked vertically, centered, 32px font
Overlay slides down with transform: translateY(-100%) → translateY(0) over 0.4s cubic-bezier
SECTION 1: HERO
Layout:
Full viewport height (100vh), flex-centered content
Background: #FFFFFF or very subtle warm off-white
Content:
Pre-headline tag/pill: Small rounded pill badge that says "Decarbonized Cement Technology" — background #E8F0EB, text #2D6A4F, 13px, font-weight 500, border-radius: 100px, padding: 6px 16px, margin-bottom: 24px
Main Headline: "Cement production is responsible for 8% of global CO₂ emissions." — 72px–80px, font-weight 600, color #1A1A1A, max-width 900px, centered
Sub-headline: "That's as many as all cars and trucks combined globally." — 20px, font-weight 400, color #6B6B6B, max-width 640px, centered, margin-top: 20px
Second paragraph: "CURA's technology is cost-effective, retrofit-ready, low-energy and reduces the carbon emissions that come from cement manufacturing by 85%." — 18px, same color, max-width 680px
CTA Button: "Learn More" or "Explore Technology" — solid green button, centered, margin-top: 40px
Animation:
All hero elements fade-in + slide up from 30px below with stagger: pill at 0ms, headline at 150ms, sub-headline at 300ms, button at 450ms. Duration: 0.8s each, easing: cubic-bezier(0.16, 1, 0.3, 1)
Optional Hero Visual:
Subtle, very large, faded abstract background graphic — could be a geometric pattern of hexagons or a stylized molecular lattice in #F5F5F0 at 5% opacity, slowly rotating or pulsing at an almost imperceptible speed (animation: rotate 120s linear infinite)
SECTION 2: HORIZONTAL SCROLLING MARQUEE BANNER
Structure:
Full-width horizontal band, background #1A1A1A, height ~80px, overflow: hidden
Sits between hero and next content section as a visual divider
Content:
Repeating text: "Decarbonizing cement at the source." repeated 8–10 times, separated by a small diamond ◆ or dot · in #2D6A4F
Text: 40px, font-weight 500, color #FFFFFF, white-space: nowrap
Animation:
Infinite horizontal scroll from right to left using @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } — duration: 25s, linear, infinite
Content is duplicated inside the container so it seamlessly loops
On hover: marquee speed slows to 50s (CSS animation-duration change with transition)
SECTION 3: TECHNOLOGY EXPLANATION (Two-Column)
Background: #FFFFFF
Padding: 140px top/bottom
Layout:
Two columns: 55% text left, 45% visual right, 64px gap
On mobile: stacks to single column, visual below text
Left Column:
Section Label: Small uppercase label "OUR APPROACH" — 13px, font-weight 600, letter-spacing 0.1em, color #2D6A4F, margin-bottom: 16px
Headline: "CURA separates process CO₂ at its source — before it enters the kiln system." — 48px, font-weight 600, color #1A1A1A, max-width 560px
Body: "This upstream approach enables substantial emissions reduction while preserving core plant configuration and material performance." — 17px, color #6B6B6B, margin-top: 24px, max-width 500px
Second Body Paragraph: "By upgrading production rather than replacing it, CURA supports practical deployment within existing cement facilities without adding a green premium." — same style
Right Column:
A clean technical diagram or abstract illustration placeholder — use a rounded-corner container (border-radius: 12px) with a light gray background #F5F5F0, aspect ratio 4:3
Inside: placeholder showing a simplified flow diagram (Limestone → CURA Electrolyzer → Pure CO₂ stream + Zero-carbon Lime → Cement Kiln → Low-Carbon Cement)
Style the diagram with thin lines (1.5px, #1A1A1A), small circle nodes, and labeled steps in 12px uppercase
Scroll Animation:
Left column: fade-in from left (translateX(-40px) → translateX(0)) on scroll into view, duration 0.7s
Right column: fade-in from right (translateX(40px) → translateX(0)), 0.1s delay after left
SECTION 4: THREE-COLUMN VALUE PROPS / BENEFITS GRID
Background: #F5F5F0 (warm off-white)
Padding: 140px top/bottom
Section Header (centered):
Label: "WHY CURA" — small uppercase green label
Headline: "A practical path to deep decarbonization" — 48px, centered
Cards Layout:
3 cards in a row, gap: 32px, equal width
On tablet: 2 columns. On mobile: 1 column stacked.
Card Design:
Background: #FFFFFF
Border: 1px solid #E0E0DC
Border-radius: 12px
Padding: 40px
No box-shadow at rest; on hover: box-shadow: 0 8px 30px rgba(0,0,0,0.06) and translateY(-4px) with transition: all 0.3s ease
Card Content:
Card 1:

Icon: Small abstract icon (gear/plant hybrid) in #2D6A4F, 40px size
Title: "Supply chain ready" — 22px, font-weight 600
Body: "By starting with limestone and producing industry-standard Ordinary Portland Cement, CURA delivers full compatibility with today's infrastructure." — 16px, color #6B6B6B
Card 2:

Icon: Target/crosshair icon in green
Title: "Targets the source" — same style
Body: "Cement's biggest emissions come from the chemical reaction that creates clinker. This approach goes straight to that source, rather than focusing only on fuel or efficiency improvements."
Card 3:

Icon: Retrofit/plug-in icon in green
Title: "Retrofit-ready integration" — same style
Body: "Our technology integrates with cement plant operations for precalcination carbon capture of the CO₂ emissions from limestone."
Scroll Animation:
Cards appear one by one with 0.15s stagger, fade-in + slide up from 30px
SECTION 5: LARGE STAT / IMPACT NUMBER SECTION
Background: #1A1A1A (dark)
Padding: 120px top/bottom
Layout:
3 stat blocks in a horizontal row, evenly spaced, centered
Separated by thin vertical lines (1px solid rgba(255,255,255,0.15), full height of the stat block)
Stats:
Number	Label
85%	Reduction in CO₂ emissions
8%	Of global emissions from cement
100 TPA	Pilot plant in development
Style:
Numbers: 72px, font-weight 700, color #FFFFFF
Labels: 14px, font-weight 500, uppercase, letter-spacing 0.06em, color rgba(255,255,255,0.6)
Gap between number and label: 12px
Animation:
Numbers count up from 0 using an animated counter when section scrolls into view. Duration: 2s, easing: ease-out. The "%" and "TPA" symbols appear immediately, only the digits animate.
Subtle green accent: a thin 3px line under each number in #2D6A4F, width 40px, centered
SECTION 6: PARTNERS & COLLABORATORS
Background: #FFFFFF
Padding: 120px top/bottom
Section Header (centered):
Label: "COLLABORATORS" — small uppercase green label
Headline: "Validating and scaling with industry leaders" — 48px, centered
Body: "CURA works alongside industrial operators, academic institutions, and strategic collaborators to validate and scale its upstream approach. Our focus is disciplined progress from laboratory validation through pilot deployment." — 17px, color #6B6B6B, max-width 640px, centered
Logo Grid:
A single row (or 2 rows) of partner logos displayed as grayscale, 60% opacity at rest
On hover: each logo transitions to full color/full opacity, transition: opacity 0.3s ease, filter 0.3s ease
Logos include placeholders for: NorthX Climate Tech, Cemex Ventures, TITAN Group, ACCIONA, Creative Destruction Lab, UBC, Amplify Capital, Zacua Ventures
Each logo: max-height 40px, max-width 140px, horizontally centered with gap: 64px, align-items: center
On mobile: wrap to 2×4 grid with smaller gaps
SECTION 7: PRESS / NEWS SECTION
Background: #F5F5F0
Padding: 140px top/bottom
Section Header:
Label: "IN THE NEWS" — uppercase green label, left-aligned
Headline: "Latest from CURA" — 48px, left-aligned
News Cards Layout:
3 cards in a row, gap: 32px
On mobile: horizontal scroll carousel or stacked
News Card Design:
Background: #FFFFFF
Border-radius: 12px
Overflow hidden
Top: image placeholder area (16:9 aspect ratio, #E0E0DC placeholder bg)
Bottom: padding: 28px
Date: "November 2025" — 13px, color #6B6B6B, uppercase, letter-spacing 0.04em
Headline: "CURA Emerges from Stealth with Breakthrough Tech to Slash Cement Emissions" — 20px, font-weight 600, color #1A1A1A, margin-top: 8px
Read more link: "Read article →" — 14px, font-weight 600, color #2D6A4F, margin-top: 16px, on hover: arrow translates 4px right
Hover on entire card:
Slight lift: translateY(-4px), shadow deepens, transition: all 0.3s ease
Image zooms slightly: transform: scale(1.03) with overflow: hidden on parent
Other News Items:
"CURA Awarded Non-Dilutive Funds from NorthX Climate Tech" (November 2025)
"CURA Named to Cemex Ventures Cleantech Construction Map 2026" (2026)
SECTION 8: LARGE STATEMENT / MISSION BANNER
Background: #1A1A1A
Padding: 160px top/bottom
Content:
Single centered statement, max-width 800px
Text: "CURA is building a practical pathway for producers to reduce process emissions this decade — without replacing their plants." — 40px, font-weight 500, color #FFFFFF, line-height 1.3, text-align center
Animation:
Text fades in and slides up on scroll, 0.8s duration
Optional: words reveal one line at a time with a 0.2s stagger (split text animation using clip-path or opacity per line)
SECTION 9: TEAM / LEADERSHIP PREVIEW (Optional)
Background: #FFFFFF
Padding: 140px top/bottom
Section Header:
Label: "OUR TEAM"
Headline: "Seasoned climatetech leaders" — 48px
Team Grid:
3–4 team member cards in a row
Each card: circular photo placeholder (200px diameter, border-radius: 50%, grayscale by default, color on hover), name in 20px semi-bold, title in 14px medium gray, below photo
Gap: 48px
Members: Erin Bobicki (CEO), Phil De Luna (CTO), Sabrina Scott (COO), Curtis Berlinguette (Science Advisor)
Hover:
Photo transitions from grayscale to full color, slight scale up to 1.05
transition: all 0.4s ease
SECTION 10: CTA / CONTACT SECTION
Background: #2D6A4F (solid brand green)
Padding: 100px top/bottom
Border-radius on the section: 20px with margin: 0 40px 40px 40px (creating a floating rounded card above the footer)
Content (centered):
Headline: "Let's decarbonize cement together." — 48px, font-weight 600, color #FFFFFF
Body: "Get in touch to learn how CURA's technology can integrate with your operations." — 18px, color rgba(255,255,255,0.85), margin-top: 16px
Button: "Contact Us" — background: #FFFFFF, color: #2D6A4F, font-weight 600, padding: 16px 40px, border-radius: 6px, margin-top: 32px
Button hover: background: #F5F5F0, slight lift
SECTION 11: FOOTER
Background: #1A1A1A
Padding: 80px top, 40px bottom
Layout:
4 columns on desktop, stacking on mobile
Column 1 (Brand):
CURA logo/wordmark in white
One-liner: "Electrochemical cement decarbonization." — 14px, rgba(255,255,255,0.5)
Location: "Vancouver, Canada" — same style
Column 2 (Navigation):
Header: "Company" — 13px, uppercase, white, font-weight 600, letter-spacing 0.08em
Links: Technology, About, Team, Careers — 15px, rgba(255,255,255,0.6), hover → white
Column 3 (Resources):
Header: "Resources"
Links: Press, Blog, Contact
Column 4 (Connect):
Header: "Connect"
Links: LinkedIn, Twitter/X, Email
Social icons: 20px, rgba(255,255,255,0.5), hover → white
Bottom Bar:
Thin top border: 1px solid rgba(255,255,255,0.1)
padding-top: 32px, margin-top: 48px
Left: "© 2025 CURA Climate Inc. All rights reserved." — 13px, rgba(255,255,255,0.4)
Right: "Privacy Policy" · "Terms" — same style, with hover to white
GLOBAL MICRO-INTERACTIONS & ANIMATIONS
Scroll-Triggered Reveals:
Every section heading, body text block, image, and card uses Intersection Observer to trigger a fade-in + translateY(30px→0) animation when entering the viewport at 15% threshold
Duration: 0.7s
Easing: cubic-bezier(0.16, 1, 0.3, 1) (smooth overshoot)
Stagger: child elements within the same section stagger by 100–150ms
Smooth Scrolling:
html { scroll-behavior: smooth; } for anchor links
Alternatively, Lenis smooth scroll library feel with slight momentum
Cursor:
Default cursor throughout — no custom cursors
All clickable elements have cursor: pointer
Buttons:
All buttons: transition: all 0.25s ease
Hover: background darkens, translateY(-2px), box-shadow: 0 4px 12px rgba(0,0,0,0.15)
Active/click: translateY(0), shadow reduces
Links:
Inline text links: color: #2D6A4F, no underline, on hover: text-decoration: underline with text-underline-offset: 4px
Page Load:
Initial load: navbar slides down from translateY(-100%) over 0.5s
Hero content fades in with stagger (as described above)
Total initial load choreography: ~1.2s
RESPONSIVE BREAKPOINTS
Desktop: 1200px+ (full layout as described)
Tablet: 768px–1199px (2-column grids become 2 or 1, padding reduces to 40px, hero headline shrinks to 48px)
Mobile: <768px (single column everything, hamburger nav, hero headline 36px–40px, section padding 80px, card grid stacks vertically)
TECHNICAL REQUIREMENTS
Framework: Next.js or React with Tailwind CSS
All animations: CSS-native or Framer Motion
Fonts: Google Fonts "Inter" (weights 400, 500, 600, 700)
Icons: Lucide React or Phosphor icons (line style, 1.5px stroke)
Fully responsive, mobile-first approach
Lighthouse score target: 95+ on performance
No external dependencies for animations (no GSAP unless needed for number counter)
Semantic HTML5 throughout (

, , 

, 

, , 

)
All images use  with lazy loading and placeholder blur
CRITICAL NOTES FOR PERFECT REPLICATION:
Whitespace is a design element — do NOT compress sections. Let every section breathe with generous padding.
Typography hierarchy is everything — the massive headline → subdued body contrast creates the premium feel.
The marquee banner is essential — it creates visual rhythm between the hero and content.
Color usage is surgical — green appears ONLY on CTAs, labels, icons, and hover states. It is never a background for large sections (except the CTA block).
Dark sections create rhythm — alternating white → dark → white → off-white → dark prevents visual fatigue.
Animations are subtle, not flashy — nothing bounces, nothing overshoots dramatically. Everything is smooth, confident, and professional.
The overall tone is: "We are serious engineers solving the hardest climate problem, and our website reflects that discipline."

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cement-zen.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/42cba17b-451a-4640-a44c-1a6191cd040a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
