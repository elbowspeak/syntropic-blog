---
title: "System"
description: "The tools and systems behind this work"
image: /images/kayt-architecture.svg
image_caption: "Kayt architecture: Telos identity core, surrounded by specialized skills and agents, integrations, and the Obsidian knowledge substrate"
---

Kayt is a cognitive operating system that runs my consulting practice, research, portfolio management, and writing. It's not a chatbot with prompts. It's a persistent system that maintains its own model of the world, acts on predictions, and updates when surprised.

## What makes it different

Most personal AI systems are prompt libraries with file organization. Kayt is built on Active Inference principles, which means three things:

**It has identity.** Kayt operates from a defined telos: mission, beliefs, goals, strategies, and known failure modes. This isn't personality prompting. It's a generative model that shapes how every decision gets made and what counts as relevant.

**It acts autonomously.** Daily intelligence briefs, weekly portfolio analysis, competitive monitoring, and workflow triggers all run without being asked. LaunchAgents and event-driven hooks mean the system is working even when I'm not in a session.

**It learns across domains.** Persistent memory, session state, and a knowledge graph in Obsidian mean that insight from a consulting engagement can surface during portfolio analysis. Nothing stays siloed.

## Architecture

The system has four layers:

**Telos.** The identity core: mission, beliefs, models, goals, challenges, and strategies. Every capability operates in service of these. This is what keeps the system coherent across 15+ skills and 11 agents.

**Skills and Agents.** Specialized capabilities that compose together: competitive intelligence, research synthesis, client delivery, portfolio tracking, network mapping, lead generation, market analysis. Each skill has its own workflows, context, and tools. Intent gets routed automatically.

**Integrations.** HubSpot CRM, Atlassian (Jira/Confluence), Google Drive, web research, and custom data pipelines. The system coordinates across these rather than treating each as a separate tool.

**Knowledge Substrate.** Obsidian vault with linked notes, transcriptions, clippings, and operational logs. Everything is queryable and connected. The knowledge graph is the system's long-term memory.

## What it runs

On any given day, Kayt is:

- Generating morning prioritization based on calendar, tasks, and open threads
- Monitoring competitive signals across client industries
- Running 13-dimension weekly portfolio analysis
- Managing pipeline, lead scoring, and account intelligence for S37
- Synthesizing research from multiple sources into structured deliverables
- Maintaining this site and the writing on it

## Why build it

The gap in AI tooling isn't capability. It's coherence. Individual AI tools are powerful but disconnected. Each session starts cold. Context doesn't transfer. There's no persistent model of what matters and why.

Kayt solves this by treating the entire system as a single organism with memory, purpose, and the ability to act on its own predictions. The result is something closer to an extended mind than a set of tools.

## Technical details

Built on Claude (Anthropic) with custom orchestration. Runs locally on macOS with Obsidian as the knowledge layer. Event-driven automation via LaunchAgents and shell hooks. Full observability through structured logging.
