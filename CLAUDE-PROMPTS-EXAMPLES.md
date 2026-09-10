# Claude Prompts & Examples - VividFlow Studio

## Ready-to-Use Prompts for Your First Projects

Copy these exact prompts and modify for your specific project.

---

## PROJECT 1: Web Landing Page (2-3 hours)

### PROMPT: SaaS Landing Page

```
Create a professional, modern landing page for a productivity SaaS tool called "TaskFlow".

Business Overview:
- TaskFlow helps freelancers manage projects and time
- Target audience: Independent contractors, agency teams
- Primary benefit: Save 5+ hours per week on project management
- Key features: 
  1. Project dashboard with automated status tracking
  2. Time tracking with client billing integration
  3. Team collaboration with built-in communication

Design Requirements:
- Color scheme: Deep Blue (#0F3460), Cyan (#00D9FF), White
- Style: Modern, minimalist, tech-forward
- Must be fully responsive (mobile-first)
- No external libraries needed (pure HTML/CSS/JavaScript)
- Professional but approachable tone

Page Sections:
1. HERO (above fold)
   - Headline: "Manage Projects. Track Time. Get Paid."
   - Subheadline: [Your choice describing the benefit]
   - CTA Button: "Start Free Trial" (cyan background)
   - Hero image: Abstract productivity visualization

2. PROBLEM SECTION
   - Problem statement: "Juggling multiple clients and projects?"
   - 3 pain points with icons
   - Why TaskFlow solves it

3. FEATURES SECTION
   - Showcase 3 key features
   - Each with icon, headline, description
   - Screenshot or visualization

4. HOW IT WORKS
   - 4-step process visualization
   - Simple, clear steps

5. PRICING SECTION
   - 3 pricing tiers (Starter, Pro, Enterprise)
   - Feature comparison
   - Popular badge on middle tier
   - CTA buttons for each

6. FAQ SECTION
   - 6-8 common questions
   - Accordion-style answers

7. FOOTER
   - Company info, links
   - Social media icons
   - Copyright notice

Technical Requirements:
- Return COMPLETE HTML file (no external dependencies)
- Include embedded CSS (in <style> tags)
- Include JavaScript for interactive elements:
  - Smooth scroll navigation
  - Accordion for FAQ
  - Interactive pricing selector
  - Mobile hamburger menu
- Mobile-responsive (breakpoints at 768px, 1024px)
- Fast loading (optimize images as CSS gradients where possible)

Design Principles:
- Clean whitespace and padding
- Consistent typography hierarchy
- Strong color contrast
- Clear visual hierarchy
- Professional but friendly
- Minimalist approach

Return: One complete HTML file ready to save and open in browser.
```

### EXPECTED OUTPUT:
Claude returns a complete, working landing page with:
- Full HTML structure
- Embedded CSS styling
- JavaScript for interactions
- Mobile responsiveness
- Ready to open in any browser immediately

### YOUR IMPLEMENTATION (30 min):
1. Save Claude's output as `taskflow-landing.html`
2. Open in browser, test all features
3. Request adjustments: "Make CTA buttons larger", "Adjust spacing in features section", etc.
4. Claude updates, you review
5. Add to portfolio with before/after screenshots

---

## PROJECT 2: Social Media Graphics Package (3 hours)

### PROMPT: Tech Newsletter Social Graphics

```
Design a complete social media graphics package for a tech newsletter.

BRAND INFORMATION:
- Newsletter name: "Dev Insider"
- Topic: Weekly tech news, coding tips, industry trends
- Audience: Software developers (early career to senior)
- Platform: Primarily Instagram and LinkedIn
- Tone: Professional but friendly, sometimes humorous

PACKAGE REQUIREMENTS:
- Total: 12 unique Instagram post designs
- Variety of types:
  - 3 "Tip/Tutorial" posts
  - 3 "News/Trend" posts
  - 2 "Quote/Inspiration" posts
  - 2 "Call to Action/Subscribe" posts
  - 2 "Behind-the-scenes/Team" posts

DESIGN SPECIFICATIONS:
Colors:
- Primary: Dark blue-gray (#1a1a2e)
- Accent: Electric blue (#00d9ff)
- Secondary: Purple (#6a0dad)
- White (#ffffff)
- Background: Light gray (#f5f5f5)

Typography:
- Headlines: Bold, sans-serif (Modern feel)
- Body: Clean, readable sans-serif
- Size hierarchy: Large headlines (48-56px), readable body (20-28px)

Style:
- Minimalist modern aesthetic
- Mix of solid colors and subtle gradients
- Clean icons and illustrations (no photos initially)
- Generous whitespace
- Consistent branding elements

FOR EACH DESIGN, PROVIDE:
- Design Type: [Which category?]
- Layout Description: [What goes where?]
  - Header area: [what appears at top?]
  - Main content area: [central visual/text]
  - Footer area: [branding/CTA]
- Color Breakdown:
  - Background color
  - Accent colors used
  - Text color
- Typography:
  - Headline: [Font type], [size], [weight]
  - Body text: [Font type], [size], [weight]
  - Special text: [if any]
- Key Elements:
  - Main icon/visual needed
  - Text content/headline
  - Call-to-action (if any)
- Design Principles Applied: [2-3 principles]

CONTENT EXAMPLES FOR EACH:

Tip Post 1 Title: "Git Commit Best Practices"
Tip Post 2 Title: "React Performance Optimization"
Tip Post 3 Title: "CSS Grid vs Flexbox"

News Post 1 Title: "New Python 3.13 Released"
News Post 2 Title: "AI Coding Assistants Benchmark"
News Post 3 Title: "WebAssembly Goes Mainstream"

Quote Post 1: "Code is poetry written for humans, compiled for machines"
Quote Post 2: "Don't comment bad code - rewrite it" - Brian W. Kernighan

CTA Post 1: Subscribe to Dev Insider
CTA Post 2: Follow for weekly updates

Behind-the-scenes Post 1: [Team reviewing code]
Behind-the-scenes Post 2: [Workspace/setup]

TECHNICAL NOTES:
- Designs should work at 1080x1080px (Instagram square)
- Can be adapted for 1080x1350px (Instagram feed) or LinkedIn format
- Include padding/margins for text readability
- Designs should be easy to recreate in Canva or Figma

Return: COMPLETE DESIGN SPECIFICATIONS for all 12 posts
For each post, be specific enough that someone could build it in Canva without guessing.
```

### EXPECTED OUTPUT:
Claude provides detailed specs for 12 unique social media designs with:
- Exact layout descriptions
- Color codes and usage
- Typography specifications
- Content/text for each post
- Visual elements needed

### YOUR IMPLEMENTATION (2-3 hours):
1. Open Canva Pro
2. Create 1080x1080px post template
3. Build each post using Claude's specifications
4. Keep consistent brand elements across all 12
5. Export as images for Instagram
6. Add to portfolio with 4-6 post examples
7. Write case study: "Social Media Graphics Package"

---

## PROJECT 3: Video Script & Storyboard (2 hours)

### PROMPT: Product Demo Video Script

```
Write a professional 60-second product demo video script with detailed scene breakdown.

PRODUCT INFORMATION:
Product Name: "EmailBoost"
Product Type: AI email writing assistant for professionals
Key Feature: Writes professional emails 10x faster
Target Audience: Busy professionals, managers, business people
Primary Benefit: Save 30 minutes per day on email writing
Platform: Standalone web app + Gmail integration

VIDEO REQUIREMENTS:
- Total Length: 60 seconds
- Format: Screen recording + voiceover + B-roll
- Goal: Convince prospect to start free trial
- Platform: YouTube, LinkedIn, web landing page
- Tone: Professional, confident, approachable

STRUCTURE (60 seconds total):

SCENE 1: HOOK (0-2 seconds)
- Brief, attention-grabbing opening
- [Your choice of hook type: Problem statement, statistic, or intriguing question]

SCENE 2: PROBLEM (2-12 seconds - 10 seconds)
- Show relatable problem
- Example: Person overwhelmed with emails
- Establish the pain point

SCENE 3: SOLUTION DEMO (12-45 seconds - 33 seconds)
- Show EmailBoost solving the problem
- Step-by-step walkthrough:
  - Open app
  - Enter email request
  - AI writes email instantly
  - User reviews and approves
  - Email sent
- Show multiple examples (3 different email types)
- Emphasize speed and quality

SCENE 4: RESULTS (45-55 seconds - 10 seconds)
- Show transformation/results
- Statistics if available
- Before/after comparison
- User testimonial (optional)

SCENE 5: CTA (55-60 seconds - 5 seconds)
- Clear call to action
- "Start your free trial"
- Website URL on screen
- Brand logo

TECHNICAL SPECS:

Voiceover:
- Professional male/female voice (your choice)
- Conversational but authoritative tone
- Clear pronunciation, natural pacing
- Include [PAUSE] markers for visuals

Pacing:
- Deliberate, not rushed
- Allow 1-2 second pauses for viewers to absorb visuals
- Peak interest in middle (demo section)

TEXT ON SCREEN:
- Minimal text, large readable font
- Reinforce key points only
- Email addresses redacted for privacy
- Emphasis on key benefits

Return: EXACT SCRIPT FORMAT BELOW

[TIME: 0-2 seconds]
[SCENE: Attention-grabbing opening visual]
[VOICEOVER TEXT]

[PAUSE - let visual sink in - 1 second]

[TIME: 2-12 seconds]
[SCENE: Problem scene - emails piling up, person stressed]
[VOICEOVER TEXT]

[Continue pattern...]

Include:
- Precise timing for each section
- Scene description
- Voiceover text (conversational, not robotic)
- [PAUSE] markers
- Text that should appear on screen
- Visual cues for editor

Make it sound natural, not like a script.
```

### EXPECTED OUTPUT:
Claude provides a complete, timed script like:
```
[TIME: 0-3 seconds]
[SCENE: Close-up of person opening overflowing inbox]
[VOICEOVER: "You spend your days writing emails. Professional emails. 
Client updates. Team communications. It's necessary, but it's time-consuming."]

[PAUSE: 1 second - let visual sink in]

[TIME: 3-12 seconds]
[SCENE: Time counter showing 30 minutes passing, person looking frustrated]
[VOICEOVER: "The average professional spends 30 minutes a day on email. 
That's 150 minutes a week. 600 minutes a month."]
[TEXT ON SCREEN: "600 minutes/month writing emails"]

[Continue for 60 seconds total...]
```

### YOUR IMPLEMENTATION (2-3 hours):
1. Read script and understand flow
2. Record or source visuals:
   - Screen recording of EmailBoost (if you have it)
   - Or use stock footage of email/productivity
   - Or create product demo video yourself
3. Use CapCut to edit:
   - Sync voiceover timing (record or use text-to-speech)
   - Add transitions between scenes
   - Layer visuals with voiceover
   - Add on-screen text at marked points
   - Add logo intro/outro
4. Export and add to portfolio
5. Write case study: "Product Demo Video - EmailBoost"

---

## PROJECT 4: Brand Identity System (2-3 hours)

### PROMPT: Complete Brand Guidelines

```
Create comprehensive brand guidelines for a sustainable fashion startup.

COMPANY INFORMATION:
Company Name: "EarthStitch"
Mission: Make sustainable fashion accessible and stylish
Target Customer: Eco-conscious millennials and Gen Z (18-40 years old)
Product: Sustainable clothing from recycled and organic materials
Positioning: Premium quality, affordable price, environmental impact
Brand Personality: Conscious, modern, optimistic, stylish, trustworthy

BRAND VALUES:
- Sustainability (environmental responsibility)
- Transparency (honest about materials and production)
- Style (beautiful, wearable designs)
- Accessibility (not just luxury eco-fashion)
- Community (engaged customer base)

CREATE COMPREHENSIVE BRAND SYSTEM:

1. COLOR PALETTE:

Provide:
- PRIMARY COLOR: [One main brand color]
  - Hex code
  - RGB values
  - Usage: [Where is it used?]
  - Psychology: [Why this color?]
  
- SECONDARY COLORS: [2-3 complementary colors]
  - Each with hex, RGB
  - Meaning and usage

- ACCENT COLORS: [1-2 pop colors]
  - For emphasis, CTAs, highlights
  - Hex codes

- NEUTRAL PALETTE: [Grays/whites for backgrounds and text]
  - Light neutral (backgrounds)
  - Dark neutral (text)
  - Hex codes for each

Color Applications:
- Hero sections
- Buttons and CTAs
- Text and headings
- Background colors
- Borders and accents
- Social media posts

2. TYPOGRAPHY:

HEADING FONT:
- Recommended: [Sans-serif, modern]
- Why this font: [Conveys brand personality]
- Sizes: 
  - H1 (main headlines): [size], [weight]
  - H2 (secondary): [size], [weight]
  - H3 (tertiary): [size], [weight]

BODY FONT:
- Recommended: [Readable sans-serif]
- Why: [Legibility, brand fit]
- Sizes:
  - Body text: [size], [weight], [line-height]
  - Small text: [size], [weight]
- Letter spacing: [if relevant]

ACCENT FONT (optional):
- Used for: [Special emphasis only]
- Examples: [Where it appears]

3. VISUAL STYLE:

Photography Style:
- Aesthetic: [Minimalist/natural/bright/moody?]
- Color grading: [Warm/cool/vibrant/muted?]
- Subjects: [What appears in photos?]
- Examples: [Specific visual examples]
- Avoid: [What NOT to use]

Illustration Style:
- Type: [Line art/flat/detailed/minimal?]
- Usage: [Where illustrations appear]
- Color usage: [Limited palette or full?]
- Feeling: [What emotion?]

Icon Style:
- Approach: [Outline/solid/hand-drawn?]
- Sizing guidelines
- Color usage

Patterns & Textures:
- Signature patterns (if any)
- Texture usage
- When to use

4. VOICE & TONE:

Communication Style:
- How does EarthStitch speak to customers?
- [3-4 key communication principles]

Tone of Voice:
- Friendly but professional
- Conversational but authoritative
- Inspiring but not preachy
- [3-4 tone descriptors]

Key Brand Phrases:
- [3-5 phrases that embody the brand]
- Example usage

Messages to Avoid:
- [3-4 things NOT to say]
- Why to avoid them

Sample Copy:
- Homepage headline
- Product description
- CTA copy
- Email subject line

5. LOGO & MARK:

Logo Design Concept:
- Primary logo design description
- Symbolism
- What it represents

Logo Variations:
- Full logo (horizontal)
- Logo mark (icon only)
- Stacked version
- Black & white version
- Minimum size requirements

Usage Guidelines:
- Clear space around logo
- When to use which variation
- Colors to use/avoid
- What NOT to do

6. DESIGN ELEMENTS:

Buttons & CTAs:
- Primary button style
- Secondary button style
- Hover states
- Text color and sizing

Cards & Containers:
- Border radius
- Shadow/depth
- Padding guidelines
- Hover effects

Form Elements:
- Input fields
- Checkboxes/radios
- Error states
- Success states

7. APPLICATIONS:

Website:
- Header/navigation styling
- Hero section treatment
- Content card layouts
- Footer design

Social Media:
- Profile templates
- Post formats
- Story templates
- Highlight covers

Print Materials:
- Business card layout
- Email signature template
- Letterhead design

Marketing Materials:
- Ad template
- Banner sizes
- Poster layout

Return: COMPREHENSIVE BRAND GUIDELINES
Be specific enough that a new designer could apply these guidelines to any project.
Include hex codes, specific font names (from Google Fonts or similar), and exact usage examples.
```

### EXPECTED OUTPUT:
Claude provides complete brand guidelines with:
- Specific color codes
- Font recommendations
- Photography/illustration styles
- Voice and tone guidelines
- Logo design concept
- Application examples
- Technical specifications

### YOUR IMPLEMENTATION (2-3 hours):
1. Review all brand guidelines from Claude
2. Create logo in Figma or Canva based on description
3. Build brand asset templates:
   - Instagram post template
   - Email signature
   - Business card (optional)
   - Website header design
4. Create document showing:
   - Brand guidelines overview
   - Color palette swatches
   - Typography samples
   - Logo variations
   - Usage examples
5. Screenshot and add to portfolio
6. Write case study: "EarthStitch - Complete Brand Identity System"

---

## IMPLEMENTATION CHECKLIST

### Project Setup (Day 1)
- [ ] Choose ONE project from above
- [ ] Copy exact prompt into Claude chat
- [ ] Modify any details for your specific project
- [ ] Submit prompt to Claude
- [ ] Review Claude's output

### Review & Iterate (Day 2)
- [ ] Read through Claude's output carefully
- [ ] Identify any adjustments needed
- [ ] Ask Claude for revisions:
  - "Make the hero section taller"
  - "Use simpler language in the CTA"
  - "Add more spacing between sections"
  - "Change the accent color to brighter blue"
- [ ] Review revised output

### Implementation (Day 3-4)
- [ ] Download/save Claude's output
- [ ] For web: Save HTML file, open in browser, test
- [ ] For graphics: Open Canva, build using Claude specs
- [ ] For video: Use script for editing
- [ ] For branding: Create assets based on guidelines
- [ ] Make minor refinements (spacing, text, colors)

### Portfolio (Day 5)
- [ ] Export final deliverable
- [ ] Take screenshots for portfolio
- [ ] Write brief case study (3-4 sentences)
- [ ] Add to portfolio tracker
- [ ] Share on Behance or your site

### Loop
- [ ] Start Project 2 (same process, faster this time)
- [ ] Do 3-5 projects in first month
- [ ] Build portfolio quickly
- [ ] Start taking clients

---

## Quick Reference: Which Project First?

**FASTEST PORTFOLIO BUILD:** Graphic Design Projects
- Each project: 2-3 hours
- Do 5-10 designs in 1-2 weeks
- Impressive portfolio quickly
- Start: Project 2 (Social Graphics)

**HIGHEST VALUE:** Web Pages
- Each project: 2-4 hours
- Can charge $300-1000 per page
- Professional, impressive deliverables
- Start: Project 1 (Web Landing Page)

**MOST CREATIVE:** Video Content
- Each project: 2-3 hours
- Very shareable, engaging
- Less competitive market
- Start: Project 3 (Video Script)

**COMPLETE PACKAGE:** Brand Identity
- 2-3 hours for full system
- Comprehensive deliverable
- Shows strategic thinking
- Start: Project 4 (Brand Guidelines)

---

## Next Step

Pick ONE project above and start TODAY:

1. Copy the prompt
2. Open Claude chat
3. Paste and modify for your specific project
4. Submit to Claude
5. Review output
6. Iterate if needed
7. Implement immediately

By end of week: First portfolio project complete.

---

Last Updated: September 2, 2026
