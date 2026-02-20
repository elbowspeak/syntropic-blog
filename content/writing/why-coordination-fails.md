---
title: "Why Coordination Fails Among People Who Agree"
date: 2026-02-20
description: "Coordination fails among people who agree on values because they're running different models of how the world works."
---

**tl;dr**

Coordination fails among people who agree on values because they're running different models of how the world works. New information doesn't update models - it gets interpreted through them. This is why better messaging, clearer data, and more trusted messengers mostly don't work.

- The real diagnostic: when people who want the same things can't coordinate, the models are incompatible, not the values. AI policy is a vivid current example, but the pattern is general.
- Interventions aimed at behavior miss the model entirely. Design from the model out, not the behavior in.
- **[Model-First Policy](/projects/model-first-policy/)** maps the generative models of relevant populations before designing interventions, identifies actual value overlap, and traces what each proposal signals within each model.
- Theoretical foundation is Active Inference (Friston et al.), well-supported at biological scales. Extension to organizations and policy systems is the live research question this work is designed to answer.

---

There's a particular kind of frustration that comes from watching people who want the same thing fail to act together. It's different from the ordinary frustration of political opposition, where at least the disagreement is honest. This is something more disorienting: shared values, shared stakes, shared urgency, and still no coordinated action. Just people talking past each other while the window closes.

AI policy is full of this right now. The debates that dominate public discourse, in federal hearings and state legislatures and the comment sections of technical blogs, look like values fights. Techno-optimists against precautionary skeptics, growth against governance, acceleration against restraint. But spend time with the people actually working on these questions and a different picture emerges. Most of them want roughly the same things: benefits that don't flow exclusively to the people who least need them, accountability that has some teeth, decisions made by people who bear some portion of the consequences. The values overlap is real and surprisingly broad.

What they don't share is a model of how the world works.

---

Daily AI users and people who've never touched these tools have been shaped by entirely different experiences into entirely different priors. For someone who uses Claude or GPT daily, the technology is concrete, its limitations are visible, and its potential to extend human capability is not abstract. For someone who hasn't, it's a thing that happens to other people, narrated by institutions with track records that invite skepticism. The same policy proposal lands differently inside each of those models. A datacenter moratorium looks like sensible precaution to someone whose model says extraction is the default pattern of tech development, and like obstruction dressed as environmentalism to someone whose model says infrastructure scarcity is the binding constraint on beneficial applications. Same values, different models, zero coordination.

The standard response to this is better communication. Clearer messaging. More accessible explanations of the technology, better data on impacts, more trusted messengers. This is well-intentioned and it mostly doesn't work, for a reason that's been well understood in cognitive science for decades but hasn't made it into policy practice.

Agents don't update their behavior when you change the incentive structure, or clarify the information, or find a more trusted messenger. They update their *model*, and then behavior follows. When new information arrives, the mind doesn't evaluate it against some neutral prior and revise accordingly. It evaluates it against the model it already holds and, in most cases, finds a way to interpret the new information that leaves the model intact. The subsidy signals scarcity to the person whose model says government intervention marks failing systems. The awareness campaign signals condescension to the person whose model says they already understand the situation better than the campaign's designers. The intervention lands, but nothing changes, because the model wasn't reached.

This is the mechanism behind a failure mode that every experienced policy practitioner has felt but rarely has language for. You design an intervention carefully, you pilot it, it appears to work, and then the effect evaporates or reverses or simply fails to scale. The post-mortem arrives at "messaging problem" or "implementation gap" because those are the categories the standard toolkit offers. But the actual problem, most of the time, is that you aimed at behavior and missed the model entirely.

---

The communities bearing the most direct costs of AI infrastructure expansion understand this intuitively, even if they don't use this vocabulary. Their experience of technology development is a long series of promises whose benefits went elsewhere while the costs stayed local. That's not a failure of information. It's a model, built from evidence, that predicts how these situations resolve. A new proposal, however well-designed, arrives inside that model and gets interpreted through it. The prediction it generates is: this will also resolve in the usual way. And that prediction is protective. Acting on it costs nothing. Updating it requires trusting that this time is different, which is a high bar when the base rate is what it is.

No amount of better messaging reaches that model. What reaches it is an intervention designed from the inside out, starting with the model the agent is actually running rather than the behavior the designer wants to produce.

---

The values overlap across most AI policy debates is broader than the rhetoric suggests, and the persistence of disagreement among people who share values is diagnostic rather than fundamental. It tells you something specific: where the models are incompatible, what each model predicts about any given intervention, and therefore where the intervention needs to work if it's going to work at all. Making that incompatibility legible is the precondition for coordination, and it's the step that almost never gets taken.

The theoretical framework underneath this is Active Inference, developed by Karl Friston and colleagues in computational neuroscience, where it has accumulated substantial empirical support. At the biological scale, from individual neurons to whole organisms, it describes something real about how living systems maintain models of their environment and act to minimize the gap between what they expect and what they experience. The framework has since been extended to explain cognition, behavior, and social dynamics, with serious applications in psychiatry and developmental biology. What remains genuinely open is whether it transfers cleanly to the mesoscale: organizations, communities, policy systems, the kinds of human coordination problems where the stakes are highest. That extension is the live research frontier, and it's what the Active Inference Institute exists to work on.

The application I've been developing, called [Model-First Policy](/projects/model-first-policy/), treats that extension as a practical design problem rather than a theoretical one. Before designing an intervention, map the generative models of the relevant populations. Identify where the values actually overlap, as opposed to where the rhetoric claims they do. Trace what each intervention signals within each model, what response it's likely to generate, and where the models have enough in common to act. The output isn't a messaging strategy. It's a map of the coordination surface, where action is actually possible given the models in play.

The biological foundations are solid. Whether the same logic holds when the agents are communities rather than cells, and the models are political rather than sensory, is the question this work is designed to answer. That uncertainty is honest. It's also, given what coordination failures are currently costing, worth taking seriously.

---

*[Model-First Policy](/projects/model-first-policy/) is an active project on this site.*
