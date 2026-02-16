---
title: The Hill-Climbing Loop Is Free Energy Minimization
subtitle: Why biology, design thinking, and AI agent frameworks converge on the same algorithm
date: 2026-02-15T20:06:00
draft: false
description: ''
image: /images/Active-Inference-Psychological-Change-Model-1024x538.webp
image_caption: ''
tags:
  - active-inference
  - free-energy-principle
  - convergent-evolution
  - agentic-ai
---

**tl;dr**

This post is written in honor of Daniel Miessler. He inspired me to build my PAI-like system starting in the dark ages of last September.

He just [wrote a post](https://danielmiessler.com/blog/nobody-is-talking-about-generalized-hill-climbing) that describes an algorithm he calls "Generalized Hill-Climbing": observe, think, plan, build, verify against criteria, learn, repeat.

I've been building my own AI infrastructure using active inference as the design principle, a description of how living systems persist under uncertainty, first formalized in 2006 by Karl Friston. The two systems are nearly isomorphic. Design Thinking arrived at the same loop independently in the 1990s. Three communities, three vocabularies, one architecture. That convergence tells us something important about the shape of the solution space, and the formal framework opens up some useful directions for anyone building these systems.

***

## Miessler's Algorithm

Daniel Miessler recently [wrote a post](https://danielmiessler.com/blog/nobody-is-talking-about-generalized-hill-climbing) called "Nobody is Talking About Generalized Hill-Climbing." He describes an algorithm built into his Personal AI Infrastructure: observe the situation, think about what you see, plan your approach, build the thing, execute, verify against criteria, learn from the results.

The centerpiece is what he calls "Ideal State Criteria" — 8-12 word binary-testable statements that describe what _done_ looks like. You iterate against those criteria. When verification fails, you update and cycle again. He structures the whole thing as two nested loops: an outer loop driving from current state to ideal state, and an inner loop running the scientific method to climb within it.

His core claim: you can't improve what you can't test. Define the destination precisely, iterate toward it, verify, update.

Full disclosure: Daniel's work was the direct inspiration for my own system. Back in September 2025, I started building out a personal AI infrastructure, and when I dug into his architecture, I adopted large parts of it: the task decomposition, the skills library, and much more. Where we diverged was the systems design principle. Mine has been, from the start, active inference.

That divergence is why this post exists. Not because either approach is wrong, but because the convergence between them is so striking that it deserves attention.

## The Same Loop, Formalized

Karl Friston's Free Energy Principle describes how any self-organizing system that persists over time must operate. The core cycle:

- **Sense** the environment.
- **Model** what you observe — update your beliefs about how things work.
- **Act** to reduce uncertainty.
- **Verify** outcomes against predictions.
- **Update** the model based on prediction errors.

This is active inference. It's the mathematical formalization of how organisms, from single cells to human brains, navigate uncertainty. The system maintains prior preferences (what it expects the world to look like), takes actions to bring reality closer to those preferences, and updates its model when reality pushes back.

When I started mapping Miessler's algorithm against active inference, the correspondence was almost eerie. His "Ideal State Criteria" are prior preferences, the C matrix in active inference notation. His "verification against ISC" is prediction error computation. His "LEARN" phase is Bayesian model updating. His two nested loops, outer loop for state transition, inner loop for scientific iteration, are a two-level version of what active inference describes as hierarchical depth.

Step for step, the correspondence is precise. Two systems built independently, one from engineering intuition, one from variational calculus, arriving at the same sequence. The table below lays it out, but the short version: the labels changed, the loop didn't.

## The Third Time Is a Pattern

Neither of us was the first to arrive here. Design Thinking, the methodology that emerged from IDEO and the Stanford d.school in the 1990s, runs the same cycle.

- Empathize (sense)
- Define (model)
- Ideate (plan/policy selection)
- Prototype (act)
- Test (verify/compute prediction error)
- Iterate (update the model)

Three communities. Three different vocabularies. One loop.

<table>
<thead>
<tr>
<th>Step</th>
<th>Active Inference (Friston, 2006)</th>
<th>Design Thinking (IDEO, 1990s)</th>
<th>Hill-Climbing (Miessler, 2026)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sample reality</td>
<td>Sense</td>
<td>Empathize</td>
<td>Observe</td>
</tr>
<tr>
<td>Build understanding</td>
<td>Model</td>
<td>Define</td>
<td>Think</td>
</tr>
<tr>
<td>Choose action</td>
<td>Policy selection</td>
<td>Ideate</td>
<td>Plan</td>
</tr>
<tr>
<td>Execute</td>
<td>Act</td>
<td>Prototype / Build</td>
<td>Build / Execute</td>
</tr>
<tr>
<td>Check results</td>
<td>Prediction error</td>
<td>Test</td>
<td>Verify against ISC</td>
</tr>
<tr>
<td>Revise</td>
<td>Model update</td>
<td>Iterate</td>
<td>Learn</td>
</tr>
</tbody>
</table>

## Why They Converge

This pattern of independent rediscovery is convergent evolution. And it has the same explanation convergent evolution always has.

Eyes evolved independently at least 40 times across different lineages. Not because organisms copied each other, but because the physics of photon detection constrains the solution space. If you need to sense electromagnetic radiation at biological scales, you're going to end up with something lens-shaped.

If you need to operate adaptively under uncertainty; if you don't have a complete model of your environment and you need to act anyway; the solution space is similarly constrained.

You must:

- **Sample your environment** (because you can't know everything),
- **Maintain some model of how things work** (because raw data without structure is noise),
- **Act based on that model** (because inaction is also a choice, and usually a bad one),
- **Compare outcomes to expectations** (because that's how you detect model errors),
- **Update your model** (because a model that doesn't learn is a dogma).

This isn't one approach among many. It's an attractor in the space of possible adaptive architectures. Everything that persists eventually converges on it. Friston proved it mathematically. IDEO discovered it by building products. Miessler discovered it by building AI agents. I found it by starting from the math and building toward implementation. We all ended up in the same place because there's nowhere else to end up.

## The Agent Era Makes It Obvious

This convergence is becoming more visible now because AI agent frameworks are running the loop in the open.

Every competent agentic framework converges on the same pattern. Anthropic's tool-use loop, LangGraph's cycles, AutoGPT's iterations, the observe-plan-execute-verify pattern running inside OpenClaw's autonomous workflows. They all arrive at sense-model-act-verify-update because nothing else works when you can't hardcode the solution.

Miessler's specific contribution, and it's a genuinely useful one, is the engineering formalization of prior preferences. Defining what _done_ looks like as discrete, binary-testable statements before you start working is powerful discipline. Active inference tells you that prior preferences are necessary for any adaptive system. Miessler figured out how to write them down in a way a machine can verify. That's a meaningful bridge between a mathematical framework and practical implementation, and it's one I've adopted in my own system.

## Where the Formal Framework Opens Things Up

If practitioners keep arriving at the same loop intuitively, what does thinking about it through the lens of active inference and free energy actually add?

A few things I've found useful in practice.

**Precision weighting.** Not all signals deserve equal attention, and the formal framework makes that explicit. Active inference gives you a principled way to modulate how much you trust different inputs based on context. Miessler's ISC system already gets at this through effort-level tiering, a typo fix shouldn't trigger the same verification depth as a system redesign. The Bayesian framing extends that intuition: you can weight criteria dynamically as a task evolves, letting the system shift attention toward the prediction errors that matter most right now rather than treating every checkbox equally.

**Epistemic action.** Most engineering versions of the loop assume you're always trying to _do_ something:  build, execute, ship. Active inference adds a category that's easy to overlook: actions taken specifically to reduce uncertainty rather than to produce output. Sometimes the optimal move is to _learn_ something before committing resources. Miessler's effort-level system is a rough version of this: deciding how much exploration a task warrants before execution. The formal framework gives you a way to think about the explore/exploit tradeoff explicitly, which turns out to matter a lot when you're building systems that need to know when they don't know enough.

**Hierarchical depth.** Miessler already has this in embryonic form. His two nested loops are a two-level hierarchy, and that structure is a big part of why his system works as well as it does. Active inference extends this to arbitrary depth. Cognitive systems run the loop at many timescales simultaneously: this sentence, this paragraph, this post, this quarter, this career. The math handles the nesting and the interactions between levels. If you're building systems that need to operate across timescales, and agentic AI systems increasingly do, the formal framework gives you a scaffold for thinking about how local decisions propagate up and global preferences propagate down.

**Finding the global maximum.** Here's where thinking in terms of uncertainty, Bayesian mechanics, and free energy minimization really pays off. Hill-climbing, by definition, is vulnerable to local maxima. You optimize against your criteria, hit a plateau, and declare victory. But if your criteria themselves are subtly wrong, you've climbed the wrong hill. Free energy minimization includes model structure in its scope. It's not just asking "did I meet my criteria?" but "are my criteria the right criteria?" That capacity to update the model of the model, to question not just your outputs but your assumptions. is what helps you find the global maximum rather than getting stuck on a local one.

## So What's Next

Daniel Miessler built a sophisticated personal AI infrastructure through engineering iteration and arrived at an architecture that's nearly isomorphic with active inference. I started from active inference and built toward implementation and arrived at something that looks a lot like his. The convergence itself is the most interesting part of both stories.

The brain runs this loop on 20 watts. IDEO runs it with Post-it notes. Miessler runs it with LLM agents. I run it with a math approximation framework and a lot of Claude Code. The substrate changes. The loop doesn't.

If you're building these systems, and a lot of people are right now, the active inference literature is worth your time because it will give you a formal language for the thing you're already doing. And that language opens up directions you might not find otherwise.

Nobody's talking about generalized hill-climbing because everyone's already doing it under different names.

Let's compare notes.
