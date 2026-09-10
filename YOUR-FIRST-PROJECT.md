# Your First Project with Claude - Step-by-Step

## BUILD A PROFESSIONAL LANDING PAGE IN 3 HOURS

This is a walkthrough of how to build your FIRST portfolio project using Claude.

Follow along exactly and you'll have your first professional deliverable by end of today.

---

## WHAT YOU'LL BUILD

A beautiful, complete landing page for a fictional AI tool.

**Final Deliverable:**
- Fully functional website
- Mobile responsive
- Professional design
- Ready for portfolio
- Can show to potential clients

**Time Investment:** 3 hours total
**Your Effort:** ~1.5 hours (Claude does the rest)
**Result Value:** $500-800 if you charged for it

---

## BEFORE YOU START: 5-MINUTE PREP

### Setup (Do This First)
1. [ ] Open this document in one window
2. [ ] Open Claude chat (claude.ai) in another window
3. [ ] Have a text editor ready (Notepad, VS Code, or any text editor)
4. [ ] Have your browser ready to test the final product

### Choose Your Project Type (Pick One)
- [ ] **Option A:** AI Writing Assistant (easier, very relatable)
- [ ] **Option B:** Project Management SaaS (business focused)
- [ ] **Option C:** Design Portfolio Tool (creative focused)

I'll show Option A below. Just follow the same format for others.

---

## PART 1: CREATE YOUR BRIEF (20 minutes)

### What is a "Brief"?
A brief is a document describing what you want. Claude uses it to build your landing page.

### Your Brief (Copy This Structure)

```
PROJECT BRIEF: Write.AI - AI Writing Assistant Landing Page

=== BUSINESS OVERVIEW ===
Name: Write.AI
What it does: AI-powered writing assistant for content creators, students, and professionals
Target audience: Bloggers, students, busy professionals who write a lot
Main benefit: Write better content 10x faster using AI
Key differentiator: Better than ChatGPT for creative writing

=== KEY FEATURES ===
1. AI Content Generator
   - Type a topic, get blog posts/articles/social media captions instantly
   - Works for any writing type

2. Writing Assistant
   - Grammar correction, tone adjustment, length optimization
   - Improve existing writing

3. Content Ideas Generator
   - Stuck on what to write? AI suggests trending topics and angles
   - Never run out of ideas

=== TARGET AUDIENCE ===
- Content creators (bloggers, YouTubers)
- Students (essays, assignments)
- Professionals (emails, reports, proposals)
- Age: 18-50, tech-savvy
- Pain point: Spend too much time writing or struggling with writer's block

=== DESIGN DIRECTION ===
Colors: 
- Primary: Purple (#7C3AED) - creative, AI-forward
- Accent: Blue (#3B82F6) - trustworthy
- Neutral: White, light gray

Style: Modern, minimalist, tech-forward
Tone: Professional but friendly, inspiring, non-corporate

=== SECTIONS NEEDED ===
1. Hero - Headline and CTA
2. Problem - "Struggle with writing?" Show relatable problems
3. Features - Showcase 3 features with icons
4. How It Works - 4-step process
5. Pricing - 3 tiers (Free, Pro, Professional)
6. FAQ - Common questions
7. Footer - Links and contact

=== FINAL REQUIREMENTS ===
- Must be responsive (works on mobile, tablet, desktop)
- No external libraries (pure HTML/CSS/JavaScript)
- Professional quality
- Should look premium and trustworthy
- Ready to open in browser immediately
```

### Customize Your Brief
Change these details to match your choice:
- **Product Name:** [Pick any name]
- **What it does:** [Describe in 1 sentence]
- **Main Benefit:** [What problem does it solve?]
- **Features:** [3 key features]
- **Color Scheme:** [Pick 2-3 colors you like]

Save your customized brief somewhere (Notion, Google Doc, or just a text file).

---

## PART 2: PROMPT CLAUDE (30 minutes)

### The Prompt You'll Use

Copy this exact text into Claude chat:

```
You are an expert web designer. Create a professional, modern landing page for the following product:

[PASTE YOUR BRIEF HERE]

Requirements:
1. Return ONE COMPLETE HTML file (self-contained)
2. Include all CSS in <style> tags (no external stylesheets)
3. Include all JavaScript in <script> tags (no external libraries)
4. Make it fully responsive (mobile-first design)
5. Smooth scroll navigation
6. Interactive pricing selector (click to switch between tiers)
7. Accordion-style FAQ (click to expand answers)
8. Mobile hamburger menu
9. Professional, clean design
10. Use CSS gradients instead of images where possible for fast loading

Design Quality:
- Modern, minimalist aesthetic
- Professional typography with clear hierarchy
- Generous whitespace and padding
- Strong visual hierarchy
- Smooth transitions and hover effects
- Color scheme as specified in brief

Return: COMPLETE, WORKING HTML FILE
The user should be able to save this as .html and open it immediately in a browser.

Make it pixel-perfect and production-ready.
```

### Submit to Claude
1. Go to claude.ai
2. Start a new chat
3. Copy and paste the prompt above
4. Replace [PASTE YOUR BRIEF HERE] with your customized brief
5. Click Send
6. Wait for Claude to generate the landing page

**Expected wait time:** 2-5 minutes

---

## PART 3: REVIEW CLAUDE'S OUTPUT (20 minutes)

### What You'll Receive
Claude sends back a complete HTML file. It looks something like:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Write.AI - AI Writing Assistant</title>
    <style>
        /* All CSS is here */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        /* ... lots of CSS ... */
    </style>
</head>
<body>
    <!-- HTML structure -->
    <nav>...</nav>
    <section class="hero">...</section>
    <!-- ... more sections ... -->
    <script>
        // JavaScript for interactions
    </script>
</body>
</html>
```

### How to Test Claude's Output

**Step 1: Copy the HTML**
- Select ALL of Claude's HTML output
- Copy it

**Step 2: Save as a File**
- Open Notepad or any text editor
- Paste the HTML
- Save as: `landing-page.html` (must end in .html)
- Save location: Anywhere (Desktop is easy)

**Step 3: Open in Browser**
- Find the file you just saved
- Double-click it
- It opens in your default browser
- You now have a working website!

**Step 4: Test the Page**
- [ ] Click through navigation
- [ ] Test mobile view (resize browser window smaller)
- [ ] Click buttons and links
- [ ] Try the FAQ accordion (click questions to expand)
- [ ] Try the pricing selector (switch between pricing tiers)
- [ ] Scroll through entire page

**Step 5: Note Any Issues**
- Does it look good?
- Are there typos?
- Is spacing right?
- Colors look good?
- Mobile view working?

---

## PART 4: REQUEST REFINEMENTS (30 minutes)

### If Something Isn't Perfect

Go back to Claude chat and ask for changes:

**Example 1: "Make changes to spacing"**
```
Can you make the following adjustments:
1. Make the hero section taller (more breathing room)
2. Add more padding between sections
3. Make the buttons larger and more prominent
4. Increase the font size in the features section

Return the updated complete HTML file.
```

**Example 2: "Change colors"**
```
I want to adjust the color scheme:
- Change primary color from purple to a deep teal (#0D9488)
- Change accent color from blue to a bright cyan (#06B6D4)
- Keep white and light gray for neutrals

Update the landing page with new colors throughout.
Return complete updated HTML file.
```

**Example 3: "Modify content"**
```
Update the landing page with new content:
- Hero headline: "Write Like a Pro. In Minutes."
- Hero subheadline: "AI-powered writing that sounds like you"
- Feature 1 name: "Smart Templates" (instead of AI Content Generator)
- Feature 1 description: "Choose from 50+ templates and customize in seconds"
- Pricing tiers: "Free, Premium ($9/mo), Enterprise (Custom)"

Keep everything else the same. Return complete updated HTML file.
```

**Key Points:**
- Claude can make ANY changes
- Just describe what you want
- Be specific
- Claude returns the complete updated file each time
- No programming knowledge needed

### Iterate Until Perfect
- Make refinements
- Test in browser
- Ask for more changes if needed
- Keep going until you love it

---

## PART 5: FINALIZE FOR PORTFOLIO (30 minutes)

### Step 1: Save Final Version
Keep your `landing-page.html` file in a safe location.

```
VividFlow-Studio/
└── Portfolio-Projects/
    └── Project-1-Write.AI/
        ├── landing-page.html (FINAL FILE)
        ├── screenshots/ (your screenshots)
        └── case-study.md (description)
```

### Step 2: Take Screenshots

**Screenshot 1: Full Page**
- Open landing page in browser
- Press F12 (Developer Tools)
- Right-click page, select "Inspect" → "Responsive Design Mode"
- Select "Desktop" view
- Screenshot the full page (scroll to capture all sections)
- Save as: `desktop-full-page.png`

**Screenshot 2: Mobile View**
- Still in Responsive Design Mode
- Select "iPhone 12" or "iPhone SE"
- Screenshot
- Save as: `mobile-view.png`

**Screenshot 3: Feature Highlight**
- Zoom in on the best section (hero or features)
- Screenshot just that section
- Save as: `feature-highlight.png`

### Step 3: Write a Case Study (10 minutes)

Create a file called `case-study.md`:

```markdown
# Project: Write.AI Landing Page

## Overview
Created a professional landing page for Write.AI, an AI writing assistant tool.
The page showcases key features, pricing options, and drives visitors to sign up.

## Project Details
- **Client:** Write.AI (fictional for portfolio)
- **Timeline:** 3 hours
- **Tools Used:** Claude (design), HTML/CSS (development)
- **Result:** Fully functional, responsive landing page

## Approach
1. Defined product positioning and target audience
2. Sketched out page structure and content flow
3. Used AI to generate responsive HTML/CSS
4. Refined design through iterative feedback
5. Tested on mobile and desktop

## Key Features
- Hero section with compelling headline and CTA
- Feature showcase with clear benefits
- Interactive pricing selector
- Expandable FAQ section
- Fully responsive design
- Mobile hamburger menu

## Results
- Professional, modern design
- Optimized for conversions
- Mobile-ready
- Production-quality code
- Completed in 3 hours

## Process
Claude handled design and development while I provided strategic direction
and iterative feedback. This demonstrates how AI can accelerate the
design process while maintaining quality and strategic thinking.
```

### Step 4: Organize Your Portfolio Folder

```
Project-1-Write.AI/
├── landing-page.html (THE WORKING WEBSITE)
├── case-study.md (Description of project)
├── screenshots/
│   ├── desktop-full-page.png
│   ├── mobile-view.png
│   └── feature-highlight.png
└── notes.md (Your thoughts on the project)
```

---

## PART 6: SHARE ON PORTFOLIO SITES (30 minutes)

### Option 1: Behance (Best for Showcase)
1. Go to behance.net
2. Create account (if you don't have one)
3. Click "New Project"
4. Upload screenshots
5. Add description (use your case study)
6. Include link to working landing page
7. Publish

### Option 2: Personal Website
Once you build your own portfolio website, host the actual working page:
- Upload `landing-page.html` to your site
- Link to it from your portfolio
- People can actually interact with it!

### Option 3: Dribbble (Design Focus)
1. Go to dribbble.com
2. Create account
3. Post screenshots
4. Add project description
5. Link to working page

### Option 4: GitHub Pages (For Developers)
1. Create GitHub account (if needed)
2. Create new repository
3. Upload landing-page.html
4. Enable GitHub Pages
5. Get free hosting!

---

## TIMELINE: DAY BY DAY

### TODAY (Day 1)
- [ ] 9:00 AM - Read this entire document (15 min)
- [ ] 9:15 AM - Create your brief (20 min)
- [ ] 9:35 AM - Prompt Claude (2 min to submit, 5 min wait)
- [ ] 9:42 AM - Test Claude's output (20 min)
- [ ] 10:02 AM - Request 2-3 refinements (30 min)
- [ ] 10:32 AM - Finalize and test (15 min)
- [ ] **10:47 AM - FIRST PROJECT COMPLETE! ✅**

### Tomorrow (Day 2)
- [ ] Save final version (5 min)
- [ ] Take screenshots (15 min)
- [ ] Write case study (10 min)
- [ ] Upload to Behance (15 min)
- [ ] **45 minutes - First portfolio piece live!**

---

## REAL EXAMPLE: COMPLETE WALKTHROUGH

### My Brief (Example)
```
PROJECT BRIEF: TaskFlow - Project Management SaaS

Name: TaskFlow
What it does: Project management tool for freelancers
Target audience: Freelance developers, designers, contractors
Main benefit: Manage clients, projects, and time in one place
Key differentiator: Built specifically for freelancers, not enterprises

Key features:
1. Client Dashboard - See all clients in one place
2. Project Tracking - Status updates, timelines, deliverables
3. Time Tracking - Log hours per project for billing

Target audience: Freelancers aged 25-45, tech-savvy, want simple tools

Design: Modern, clean, blue and cyan colors

Sections: Hero, Problem, Features, How It Works, Pricing, FAQ, Footer
```

### My Prompt (What I Send to Claude)
```
You are an expert web designer. Create a professional, modern landing page for:

PROJECT BRIEF: TaskFlow - Project Management SaaS
[... etc, full brief ...]

Requirements:
[... standard requirements from earlier ...]
```

### Claude's Response (Partial)
Claude sends back 300-400 lines of HTML/CSS/JavaScript

### My Test
I save as `taskflow-landing.html`, open in browser, and see:
- Beautiful hero section
- Clean feature cards
- Interactive pricing
- Responsive design
- All working perfectly

### My Refinement Request
```
Can you make these adjustments:
1. Make the CTA button bigger and more prominent
2. Change hero background from gradient to solid blue with an accent accent color
3. Add more spacing between feature cards
4. Make the pricing monthly/annual toggle more visible

Return updated HTML.
```

### Claude Updates
Within 2 minutes, Claude sends updated version with all changes.

### I Test Again
Perfect! Everything looks great.

### Screenshots & Portfolio
I take 3 screenshots, write 200-word case study, upload to Behance.

### Result
Portfolio now has:
- ✅ Professional landing page
- ✅ Live, interactive demo
- ✅ Case study showing process
- ✅ Social proof of design capability

**Total time: 2 hours**
**Perceived value: $500-800**
**Actual time effort: ~1 hour**

---

## WHAT HAPPENS NEXT

### Week 1: Do 3 Projects
- Day 1: Write.AI Landing Page ✅
- Day 3: Design Portfolio Tool Landing Page
- Day 5: SaaS Analytics Dashboard Landing Page

### Week 2: Branch Out
- Social media graphics (Project 2 type)
- Video script & editing (Project 3 type)
- Brand identity (Project 4 type)

### Week 3-4: Refine & Polish
- Clean up your best 5-10 projects
- Write professional case studies
- Create portfolio website
- Start promoting on freelance platforms

### Month 2: Take First Clients
- With 10+ projects, start pitching
- Upwork/Fiverr will start bringing inquiries
- First paid projects roll in
- Real client feedback improves your process

### Month 3+: Scale
- Build system for faster delivery
- Increase pricing
- Get better clients
- Build reputation

---

## KEY TAKEAWAYS

✅ **You don't need to learn Figma, Webflow, or code**
- Claude handles the technical execution
- You focus on strategy and communication

✅ **Professional results immediately**
- First project looks like you hired a professional designer
- Clients won't know it's AI-assisted

✅ **Fast portfolio building**
- 2-3 hours per project
- 10 projects in first month
- Portfolio ready for real clients

✅ **The process is the skill**
- Learning to brief, iterate, and refine
- These are the REAL skills freelancers need
- Technical tools are just implementation

✅ **Your competitive advantage**
- Speed: 10x faster than learning tools manually
- Quality: Professional results from day 1
- Scale: You can take on more projects
- Efficiency: Less time on execution, more on clients

---

## READY TO START?

### Right Now (Next 20 minutes)
1. [ ] Create your brief using the template
2. [ ] Copy the prompt
3. [ ] Submit to Claude
4. [ ] Watch for response

### Today (Next 3 hours)
1. [ ] Test Claude's output
2. [ ] Make refinements
3. [ ] Finalize the project
4. [ ] Take screenshots

### Tomorrow
1. [ ] Write case study
2. [ ] Upload to Behance
3. [ ] Start Project 2

**You've got this. Let's build VividFlow Studio.** 🚀

---

Last Updated: September 2, 2026
