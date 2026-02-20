---
title: "Model-First Policy"
description: "A coordination tool for people who share values but disagree on how to act. Uses Active Inference to surface the model mismatches that make well-designed interventions fail."
status: "active"
weight: -1
---

A coordination tool for people who share values but disagree on how to act together.

---

Most policy fights that look like values fights aren't. They're model disagreements about how the world works, what causes what, whose experience counts as evidence, cloaked by ideology. People who could be acting together spend their energy arguing past each other, running incompatible mental simulations of the same interventions, with each convinced the other is naive or captured.

The standard response is better messaging, but this is almost always wrong. **Agents don't update their behavior when you change the incentive structure. They update their *model*, and then behavior follows.** An intervention aimed at behavior that ignores the model the agent is running will be reinterpreted, explained away, or absorbed without ever changing anything, sometimes while appearing to succeed in the short run.

Model-First Policy is a structured conversation tool that helps people with shared values map where their models diverge, understand what those divergences predict about how they'll each interpret a given intervention, and find the path toward coordination. Persistent disagreement among people who agree on values is diagnostic. It tells you something specific about where the models are incompatible, and making that incompatibility legible is the first step toward resolving it.

---

## The problem it solves

Take AI infrastructure policy. Daily AI users and people who've never touched these tools aren't primarily divided by values. Most people across that divide want broadly distributed benefits, accountability for harms, and decisions made by people with some skin in the game. What divides them is their model of what AI is, who controls it, and what the counterfactual future looks like. Those models were formed through radically different experiences and predict radically different things about any given policy. A datacenter moratorium looks like protection to one community and obstruction to another. Same values, divergent models, zero coordination.

The tools for values-aligned coordination are badly underdeveloped relative to the tools for values-misaligned capture. This is an attempt to close that gap.

---

## How it works

The tool runs as a structured session, currently Claude-mediated and eventually purpose-built, that walks participants through six stages:

**Values triage.** Are the participants in the same rough values territory? The question is whether there's enough overlap to make a models conversation productive. If yes, proceed. If not, find the smallest intervention that operates within the overlap space.

**Intervention framing.** Describe the policy: what it does, who it targets, what outcome it's designed to produce, and the assumed causal chain. Writing the chain out explicitly matters because the gaps in it are what the session finds.

**Model mapping.** For each relevant population, sketch the generative model across three dimensions: what they believe about their current situation, what they believe about actors like the one proposing this intervention, and what they believe the future looks like if nothing changes.

**Signal analysis.** What does the intervention signal within each model? What it actually means given the prior each population holds, as opposed to what it's designed to communicate.

**Model-preserving responses.** For each population: what's the response that absorbs the intervention without updating the model? Naming this is usually sufficient to show why the assumed causal chain is broken.

**Coordination surface.** Where do the models have enough in common to act? What's the smallest intervention that operates within that overlap, and which population's model needs to shift first?

The output is a shared artifact, a model map, that makes visible where models agree and diverge, what each model predicts about the intervention's reception, and where coordination is actually possible.

---

## Why Active Inference

The theoretical substrate is Active Inference, developed by Karl Friston and colleagues in computational neuroscience. The core idea: agents are model-maintaining systems that act to minimize the gap between what they expect and what they experience. When new information arrives, they will preferentially update their expectations about the information before updating their model of the world. The first question about any intervention is what it signals within the model the agent is already running, and whether that signal creates pressure to update the model or pressure to protect it.

The framework has substantial empirical support at the biological scale, from individual neurons to whole organisms, where it describes something real about how living systems maintain models of their environment and act on them. Applications in psychiatry and developmental biology have extended it upward from cells to cognition and behavior. What remains an open research question is whether it transfers cleanly to the mesoscale: organizations, communities, political systems. That extension is the live frontier, and it's what, IMO, the Active Inference Institute exists to work on.

Model-First Policy treats that extension as a practical design problem. If the framework holds at the social scale, structured model mapping should produce coordination surfaces that practitioners couldn't find on their own. If it doesn't transfer cleanly, the sessions will show us where and why. Either way, the work is worth doing.

---

## Current state

Early development. The scaffold is designed; the first use case is AI infrastructure policy run against three distinct agent populations.

**I'm looking for policy practitioners, researchers, and domain experts who work on coordination problems and want to run a session or help shape what this becomes.**

This is independent work, unaffiliated with any particular organizational agenda. It emerges from a conviction that the tools for values-aligned coordination are badly underdeveloped relative to the tools for values-misaligned capture, and that closing that gap is worth some effort regardless of whether it makes money.

*Joshua, Science Advisory Board, Active Inference Institute*
