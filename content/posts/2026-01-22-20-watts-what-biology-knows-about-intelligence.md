---
title: '20 Watts: What Biology Knows About Intelligence'
date: 2026-01-22T22:33:00-08:00
draft: false
description: ''
image: /images/Pasted image 20240628164256.png
---

**Why Active Inference, Not Scaling, is the Path That Gets Us to the Physics Limit**

---

The human brain runs on 20 watts. A dim lightbulb.

Training GPT-4 consumed roughly 1,287 megawatt-hours. Running inference at scale with billions of queries daily draws power equivalent to small cities. We've built brute force intelligence by using more parameters, more data, more compute, more energy.

But this can't go on forever. Energy and thermal envelopes are finite in practice on god's green earth. (_But what about datacenters in spaaaaaacce!??!_). Instead, we should be focusing on two aspects of intelligence that evolution does shockingly well: efficiency and continuous learning.

This lack of focus is huge design flaw that's been called out by Yann LeCun, Dr. Jeff Beck and everyone else applying active inference to generate grounded "world models" that continuously learn and broadly generalize. IMO, this is the better path to embodied intelligence.

## Is Scaling a Dead End?

Foundation models work by memorization at scale. They compress statistical patterns from training data into weights, then retrieve and recombine those patterns during inference. This works remarkably well but it's thermodynamically profligate.

Think about what happens when you ask an LLM a question. Generating every token requires activating billions of parameters and performing matrix multiplications across the entire network, regardless of whether the question is trivial or profound. The architecture doesn't know how to think less. It processes everything with maximum effort.

This is the opposite of how biological intelligence works.

The brain is a sparse computer. At any moment, only a fraction of neurons fire. Since neural activity is expensive and each action potential costs ATP, evolution optimized for minimum necessary computation. The brain only activates the minimum circuitry required **to reduce uncertainty about the answer**.

That principle, **minimum necessary computation to reduce uncertainty**, is the core of active inference. And it's the key to closing the thermodynamic gap.

## What Active Inference Actually Does

Active inference, grounded in the Free Energy Principle, frames intelligence as prediction error minimization. Here's how that works: A system maintains a generative model of its environment and continuously updates that model to minimize surprise, which is the difference between what it predicted and what it observed.

The critical insight is that **the energy cost of inference is proportional to prediction error, not to model size.**

When predictions are accurate, minimal updating is needed. When predictions fail, the system does only enough work required to resolve the specific uncertainty. This creates natural sparsity. Most of the system remains quiescent most of the time, activating only when and where prediction errors demand attention.

Compare this to transformers, where every query activates the full network regardless of whether the answer requires novel reasoning or trivial retrieval. This means that foundation models are "metabolically flat". They have the same energy expenditure whether the task is hard or easy. Active inference systems are metabolically adaptive, wherein energy tracks uncertainty.

## The Math of Efficiency

Free energy minimization and thermodynamic efficiency are linked by the same underlying physics.

Variational free energy, which is the quantity that active inference systems minimize, decomposes into two terms: complexity and accuracy. The complexity term penalizes model updates that deviate from prior beliefs. The accuracy term rewards predictions that match observations.

Minimizing free energy means finding the simplest belief update that adequately explains the data. This is Occam's razor as a loss function. And Occam's razor, in physical systems, translates directly to energy efficiency: simpler computations require fewer state transitions, fewer state transitions mean less heat dissipation, less heat dissipation means operation closer to the Landauer limit.

Recent work in computational neuroscience has demonstrated this. Energy-optimized spiking neural networks trained with predictive coding objectives show dramatically lower spike rates than control networks while maintaining equivalent accuracy. The networks learn to transmit only prediction errors (the delta between expectation and observation rather than raw signals). Information that confirms predictions cost nothing to process because it triggers no neural activity.

This is how the brain achieves 20 watts, by being radically selective about what gets computed.

## Why Transformers Can't Get There

The transformer architecture has fundamental properties that work against thermodynamic efficiency:

**Dense activation.** Self-attention requires computing relationships between all tokens in a context window. Even with optimizations like sparse attention or flash attention, the basic operation scales with sequence length. You can't attend to nothing.

**Static computation graphs.** The same operations execute regardless of input difficulty. A transformer doesn't "think harder" about hard problems, it applies the same computation everywhere. This means easy problems waste energy.

**Separation of training and inference.** Foundation models learn offline, then freeze. They can't adapt their internal models based on new observations without fine-tuning. Every inference pass pays the full cost of the frozen architecture.

**No uncertainty quantification.** Transformers output probability distributions over tokens, but they don't maintain beliefs about their own uncertainty in the active inference sense. They can't allocate computation based on confidence because they don't track confidence as a first-class quantity.

**Active inference architectures differ on every dimension:**

**Sparse activation.** Only prediction errors propagate. Accurate predictions produce no signal, so they consume no energy.

**Dynamic computation.** Inference depth adapts to uncertainty. Easy predictions terminate quickly, hard predictions iterate until uncertainty resolves or a threshold is reached.

**Continuous learning.** The generative model updates with every observation. There's no separation between "training" and "deployment", the system is always learning, always adapting.

**Precision-weighted inference.** Uncertainty is explicit. High-confidence predictions suppress computation, low-confidence predictions recruit more processing. Energy follows uncertainty.

## The Path to the Physics Limit

If the thermodynamic endgame is inference at the edge (intelligence operating within tight power and thermal budgets), then the architectural requirements follow:

**Predictive coding substrates.** Hardware optimized not for dense matrix multiplication but for sparse, event-driven computation. Neuromorphic chips, spiking neural networks, analog compute-in-memory. The physical implementation should match the algorithmic structure.

**Hierarchical generative models.** Instead of flat transformers, we need deep hierarchies where each level predicts the level below. Prediction errors flow upward, predictions flow downward. Most processing happens locally, where only unresolved surprises escalate.

**Active sampling.** Systems that choose what to observe based on expected information gain. Don't process the whole image, concentrate on the uncertain regions. Don't read the whole document, just attend to the passages that resolve current questions.

**Embodied inference.** The cheapest way to reduce uncertainty is often action: moving in, manipulating and probing the environment. Active inference naturally unifies perception and action because both serve the same objective: prediction error minimization.

This isn't speculative. Research groups are building these systems now. Spiking predictive coding networks running on low-power microcontrollers. Neuromorphic chips implementing free energy minimization in analog circuits. Active vision systems that sample scenes intelligently rather than processing everything.

The results are pretty cool IMO: orders of magnitude reduction in energy consumption for equivalent task performance. Not just incremental improvements but fundamental efficiency gains that come from a fundamentally different approach to intelligence.

## The Second Law

The foundation model paradigm that focuses on scaling parameters, data, and compute, has produced incredible outputs. I've been shocked and surprised. (I admit to having been on the skeptical side of what transformers could achieve). Even so, it's running into physics. Data centers are becoming power plants. Inference costs are becoming unsustainable (ish?). This transformer trajectory doesn't lead to ubiquitous intelligence IMO, but it will lead to overly centralized intelligence rationed by energy cost.

Active inference has the potential to bring us a different future where intelligence operates efficiently within thermodynamic constraints rather than against them. Intelligence that can run on harvested solar power, on body heat, or on the minimal energy available at the edge of the network.

The companies building with this approach are reimagining what computation for intelligence looks like. The primary reason is that they believe foundation models will bump up against cognition limits, but they also understand that in the near future energy will be the binding constraint. They're taking seriously how the brain functions and using it as an existence proof that general intelligence can run on 20 watts.

So far, the scaling era gave us truly awesome capabilities. The efficiency era will, I hope, give us broad decentralized deployment. And the path from here to there runs through the mathematics that biology discovered first: minimize free energy, minimize surprise, minimize the thermodynamic cost of thought.

---

The brain didn't evolve to maximize accuracy. It evolved to minimize regret given scarce metabolic resources. That's the optimization target we should be pursuing. Not "how smart can we make it?" but "how smart can we make it per joule?"

Active inference answers that question. The problem is that foundation models don't even ask it.![](/images/Pasted%20image%2020240628164256.png)
