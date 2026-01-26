---
title: "The SaaS Layer Will Dissolve"
date: 2026-01-22T22:02:00-08:00
draft: false
---

## **Agentic AI will collapse the application tier within five years**

---

Since the 90s, the most valuable real estate in enterprise software has been the application layer. I think 90% of it will become worthless in the next 5 years, give or take.

For last thirty years, we've accepted a basic architecture: infrastructure at the bottom (databases, compute, networking), applications in the middle (the SaaS products we pay for monthly), and users at the top. The application layer has been where the money lives. Salesforce, Workday, ServiceNow, HubSpot are billion-dollar companies built on the premise that software is hard to build, so businesses should rent it.

That premise is dying.

## The Dissolution Pattern

Tools like Claude Code and Cowork represent something qualitatively different from previous automation. They do more than write software faster, they generate complete working applications on demand, tailored to the exact problem you ask them to solve. I'm not a coder and I've built 3 working apps that I use every day. These are *not* hardened, tested SaaS apps that I would release to the world... but I don't have to! They solve my problems really well and took between 30 minutes and a couple weeks to build. And let me say it again: I'm not a coder.

Here's what this means in practice: When I need to analyze a dataset, I don't open Excel anymore. I describe what I want, and Claude Code creates a script that ingests the data, performs the transformations, runs the analysis, and outputs results in whatever format makes sense. The "application" exists for exactly as long as I need it, configured precisely for my use case, then dissolves back into nothing.

This is a portent of how complete classes of applications will lose relevance.

## What Will Survive

I don't think the application layer vanishes entirely. Applications will still exist but they'll just be generated internally rather than purchased externally. For organizations that would never build their own tools, the shift looks like this:

**Before:** Buy what's available and swallow the vendor's product decisions. You have little to no influence on the roadmap and you pay $20/seat/month in perpetuity for features you mostly don't use.

**After:** Build what you need, when you need it. Add features as your requirements evolve. The total cost of creation and maintenance will fall below the ongoing SaaS subscription.

I'm *not* claiming that everyone will become a developer. The claim is is that the cost of developing bespoke applications in-house will drop below the fully burdened cost of a Saas app. 

Here's the pattern that I think we'll see:

**Infrastructure persists.** ERP systems, databases, authentication services, payment processing; anything that requires deterministic behavior, transactional integrity, or serves as a system of record. These are the foundations that applications build on, and they will remain necessary.

**APIs become the universal interface.** The collapse of applications doesn't mean the collapse of capabilities. It means those capabilities get exposed as APIs that agentic systems can compose on the fly. Stripe, for instance wont' go away because it's a transaction primitive  that my AI calls when I say "charge the customer."

**Custom assembly replaces generic products.** Instead of buying Tableau and learning its interface, I describe the visualization I need and get exactly that. Instead of configuring HubSpot workflows, I describe my sales process and get automation built for it.

## I do SaaS. Now what?

If you're building a SaaS company today, you are, with high probability, standing on a melting ice floe, floating into oblivion.

The traditional playbook has been to identify a workflow, productize it, charge per seat. This assumes that building software is hard enough to justify ongoing rents. But when software can be generated on demand:

- Your moat becomes your data and integrations, not your ability to code software.
- Your value lives in the APIs and capabilities you expose
- Your competition isn't other SaaS offerings, it the AI that can recreate your functionality in minutes.

The five-year window is obviously not precise, but it's also not arbitrary. That's roughly how long enterprise procurement cycles take to catch up with technological reality. The early adopters, e.g. technical teams, startups, and progressive enterprises, are already building this way. The laggards will follow once the cost difference and nimbleness it enables becomes undeniable.

## Implications

For builders: Stop thinking about applications as products. Think about capabilities as services. You should be asking yourself, "If an AI could compose any functionality on the fly, what would it need that can't be generated?" That's your business.

For enterprises: Your competitive advantage is in your data and what you can do with it, not your software stack. In the past, "nobody ever got fired for buying Microsoft (or farther back, IBM)". That was safe harbor for IT folks. But it won't be for long... Invest in data infrastructure, API literacy, and AI-native workflows.

For the SaaS incumbents: Your runway is shorter than you think. Either become infrastructure (the boring but durable play) or become so embedded in customer data that you're irreplaceable. The middle ground focused on nice UIs and generic workflows will become the killing field in short order.

---

The commercial application layer was always an artifact of a specific technological moment: when building software required specialized skills and huge time investment. That moment is ending. What remains is a thin coordination layer between human intent and machine capability, assembled fresh for each class of problem, often dissolved when the problem is solved.

I don't think the SaaS era is declining as much as it will dissolve.
