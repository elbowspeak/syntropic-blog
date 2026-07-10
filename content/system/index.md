---
title: "System"
description: "The tools and systems behind this work"
image: /images/system-header.png
image_caption: "The loop the whole system runs: perceive, model, act, verify, learn. Every loop updates the model; verification is scored in a ledger."
---

Kayt is a cognitive operating system that runs my consulting practice, research, portfolio management, and writing. It's not a chatbot with prompts. It's a persistent system that maintains its own model of the world, acts on predictions, and updates when surprised.

## What makes it different

Most personal AI systems are prompt libraries with file organization. Kayt is built on Active Inference principles, which means three things:

**It has identity.** Kayt operates from a defined telos: mission, beliefs, goals, strategies, and known failure modes. This isn't personality prompting. It's a generative model that shapes how every decision gets made and what counts as relevant.

**It acts autonomously.** Daily intelligence briefs, weekly portfolio analysis, competitive monitoring, and workflow triggers all run without being asked. LaunchAgents and event-driven hooks mean the system is working even when I'm not in a session.

**It learns across domains.** Persistent memory, session state, and a knowledge graph in Obsidian mean that insight from a consulting engagement can surface during portfolio analysis. Nothing stays siloed.

## Architecture

<figure>
  <a href="/images/kayt-system-at-a-glance.png" target="_blank" rel="noopener"><img src="/images/kayt-system-at-a-glance.png" alt="Diagram of the full system: a router matches intent to skills and agents, an orchestration tier runs goals through a machine evaluator, and a single ledger substrate records everything"></a>
  <figcaption>The whole system on one page: a router matches intent to skills and agents, an orchestration tier runs goals through a machine evaluator, and one ledger substrate records everything.</figcaption>
</figure>

The system has five layers:

**Telos.** The identity core: mission, beliefs, models, goals, challenges, and strategies. Every capability operates in service of these. This is what keeps the system coherent across ~50 skills and 20+ agents.

**Skills and Agents.** Specialized capabilities that compose together: competitive intelligence, research synthesis, client delivery, portfolio tracking, network mapping, lead generation, market analysis. Each skill has its own workflows, context, and tools. Intent gets routed automatically.

**Orchestration.** Goals outlive sessions. An orchestrator decomposes each goal into work items and dispatches workers; every result carries a falsifiable prediction, and an independent evaluator judges it against that prediction before it counts as done. The evaluator fails closed, so anything uncertain waits for me. What reaches me is the exception list: failures, surprises, and anything irreversible or external, which the system will not do on its own.

<figure>
  <a href="/images/kayt-orchestration-tier.png" target="_blank" rel="noopener"><img src="/images/kayt-orchestration-tier.png" alt="Diagram of the orchestration tier: an orchestrator dispatches workers through a durable work ledger, workers post artifacts with falsifiable predictions to a shared blackboard, an evaluator verifies them, and only exceptions reach the human"></a>
  <figcaption>The orchestration tier: workers post results with falsifiable predictions, an evaluator verifies them, and only exceptions come to me.</figcaption>
</figure>

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
