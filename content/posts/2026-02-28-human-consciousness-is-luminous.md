---
title: Human Consciousness is Luminous
subtitle: '*On Consciousness, the Second Law, and the Necessity of Learning*'
date: 2026-02-27T19:58:00
draft: false
description: ''
image: /images/luminous-loop-v7.png
image_caption: ''
tags: []
---

\***Caveat Emptor**

_This is the most technical essay in the thermodynamics series. It engages directly with formal theories of consciousness, philosophy of mind, and the neuroscience of predictive processing. If terms like "Markov blanket" and "epistemic depth" are new to you, the ride will be bumpy but I think the destination is worth it._

_The argument in brief: consciousness is what happens when a living system's self-model becomes recursive enough to model its own modeling, and that recursion must be physically real, thermodynamically costly, and continuously updated. Static systems, like LLMs, however complex, cannot be conscious. Luminosity, awareness of awareness, scales with the depth of the recursion and the energy spent maintaining it._

***

In a previous essay, I traced a line from the second law of thermodynamics through [dissipative structures](https://en.wikipedia.org/wiki/Dissipative_system), through the emergence of life, through the evolution of prediction, to the dissolving of the [hard problem of consciousness](https://en.wikipedia.org/wiki/Hard_problem_of_consciousness). The argument, in brief: living systems persist by modeling their environments and consciousness is what that modeling feels like from the inside when the system doing the modeling includes a model of itself. The feeling of being a subject is part of what makes the self-model work, part of the fitness function that keeps the organism alive. And the fitness function is, at bottom, thermodynamic. Life accelerates entropy. Minds accelerate it further.

The previous essay argued that consciousness serves the thermodynamic imperative and that the "hard problem of consciousness" dissolves once we see the self-model as functional. What it left open was what, precisely, distinguishes a conscious system from a very good impostor. A lookup table can reproduce any finite input-output function. A frozen neural network can approximate any continuous one to arbitrary precision. If consciousness is functional, and function can be replicated by systems we are confident are not conscious, then we have a problem.

In a recent paper, Erik Hoel <sup>1</sup> formalizes this problem. His argument runs through what he and Johannes Kleiner call the substitution dilemma: for any theory of consciousness, either its predictions change when you swap in a simpler system with identical input-output behavior (in which case those predictions are falsified, since the behavioral evidence hasn't changed) or its predictions don't change, in which case the theory is trivially tracking behavior and nothing else. [Global Workspace Theory](https://en.wikipedia.org/wiki/Global_workspace_theory), [Integrated Information Theory](https://en.wikipedia.org/wiki/Integrated_information_theory), [Higher Order Thought theory](https://en.wikipedia.org/wiki/Higher-order_theories_of_consciousness), [functionalism](https://en.wikipedia.org/wiki/Functionalism_(philosophy_of_mind)) broadly construed: none of them survive this problem. Any theory built on what a system does at a single moment will fail, because at any single moment, a lookup table can do the same thing.

Arthur Juliani, whose earlier work <sup>2</sup> demonstrated that the Perceiver architecture satisfies the functional criteria of Global Workspace Theory, now reads his own result as evidence against GWT rather than for machine consciousness. If a standard deep learning architecture meets all your criteria, your criteria aren't picking out consciousness. They're picking out a computational pattern that consciousness may happen to instantiate, but, the argument goes, so do lookup tables if you make them large enough.

So what's left?

## The Thermodynamic Ground

Hoel's positive proposal is that theories of consciousness must be grounded in continual learning. The system's computations and priors must change every time it operates. A system whose input-output function is static, whose response to identical inputs is identical regardless of when you ask, can always be substituted by something simpler. A system whose function is changing, whose ∆f (in Hoel's notation) is never zero, is a moving target that static substitutes cannot replicate. Not because the substitution is hard in practice, but because the property you're trying to substitute _is the change itself_, and change is not a state that can be captured in a table.

But "continual learning" as a criterion is underdetermined. Plenty of systems learn in some trivial sense. Hoel convincingly makes the case that learning is necessary for consciousness. The question is what _kind_ of learning, and why the my framing of second law straightens out what other frameworks leave entangled.

Karl Friston's [Free Energy Principle](https://en.wikipedia.org/wiki/Free_energy_principle) offers an answer, though it requires reading FEP differently than most people do. The standard presentation treats FEP as a theory of brain function, a mathematical framework describing how neural systems minimize prediction error through a combination of updating their models (perception) and acting on the world (action). In this telling, FEP is an elegant formalism, a way of unifying perception, action, learning, and attention under a single variational objective. It's useful. It's also, on its face, exactly the kind of functional description that Hoel's argument would render trivial.

But I don't think of FEP as only a theory of brain function. I think FEP is a special case of the second law of thermodynamics, describing what any self-organizing system _must_ do in order to persist far from equilibrium. The functional/thermodynamic distinction matters -- collapsing it is the error that makes FEP look like just another functionalist framework.

Think about what it means for a system to maintain a [Markov blanket](https://en.wikipedia.org/wiki/Markov_blanket), a statistical boundary between internal states and external states, mediated by sensory and active states. The blanket is a physical boundary, maintained by the expenditure of free energy, without which the system would equilibrate with its environment and cease to exist as a distinguishable entity. A cell membrane is a Markov blanket. Skin is a Markov blanket. Maintaining any such boundary has a thermodynamic cost.

The free energy principle says that systems which persist, which maintain their blanket in service of the entropy gradient, do so by continuously adjusting their internal states to better predict what their senses are telling them. This describes what any persisting far-from-equilibrium system _is_ doing, regardless of whether it has a brain, or neurons, or anything we would recognize as cognition. A bacterium performing [chemotaxis](https://en.wikipedia.org/wiki/Chemotaxis) is minimizing free energy. It is moving up a chemical gradient by comparing glucose concentrations across time. It is mathematically precise to call this inference.

I know that calling bacterial chemotaxis "inference" sounds like anthropomorphism. But the math that describes how a Bayesian agent updates its beliefs in light of new evidence has the same structure as the math that describes how a living system persists by dissipating energy. Friston argues they are the same process. Inference _is_ what self-maintenance looks like when you describe it in information-theoretic terms, and self-maintenance _is_ what inference looks like when you describe it in thermodynamic terms.

The second law does real work here. Any self-organizing structure that fails to perform inference, that fails to adjust its internal states in response to sensory perturbation, will dissolve back into equilibrium. The second law doesn't permit persistent far-from-equilibrium structures that don't do this. The bacterium infers or it dies. And dead bacteria don't reproduce.

## Temporal Depth and Self-Reference

If [active inference](https://en.wikipedia.org/wiki/Active_inference) is what persistence requires, and a bacterium does it, then consciousness can't be identical to active inference. I don't think we're prepared to say that bacteria are conscious. But consciousness and active inference are not separate phenomena. They are expressions of the same entropic imperative, distinguished by temporal depth and self-reference.

**Temporal depth first.** A bacterium infers over an extraordinarily shallow horizon, its "model" captures gradients in the immediate present: is the chemical concentration higher now than it was a moment ago? A frog that snaps its tongue at the predicted location of a fly extends the cone to counterfactual states. A mammal navigating a maze extends it further, running predictive simulations at every junction. Humans extend it further still, modeling other minds, reasoning about causes we've never observed, and planning across decades. Each extension is also an extension of our capacity to persist as dissipative structures across longer timescales. The human who can predict a drought and store grain survives conditions that would destroy an organism limited to present-tense inference.

**Now Self-reference.** Laukkonen, Friston, and Chandaria <sup>3</sup> call it _epistemic depth_ the degree to which the system knows that it knows. A frog may predict where the fly will be, but it has no awareness of the prediction _as_ a prediction. A human can recognize a thought as a thought, notice the quality of their own confidence or confusion, know that they are uncertain and act on that meta-knowledge. This recursive loop, the system reflecting its own inferential state back to itself, is what separates bare prediction from awareness.

In their Beautiful Loop Theory, Laukkonen and colleagues formalize this through a hyper-model, a higher-order generative model whose parameters Φ encode beliefs. How much should we trust each layer of the inference hierarchy? How should we weight prediction errors at different levels of abstraction? How do we to orchestrate precision across the entire system? The hyper-model forecasts the system's confidence at each layer, compares that forecast to what actually transpires, and updates. That update then cascades through the whole system: precision weighting shifts, inference shifts with it, and the shifted inference generates new prediction errors on the precision forecasts themselves. The loop runs continuously. The system models itself modeling its environment, and adjusts both simultaneously.

## Luminosity

This recursive architecture generates what the contemplative traditions have long called _luminosity_, the clarity or intensity of knowing within conscious experience. A system with deep temporal prediction but no hyper-model would be a sophisticated forecaster that never notices it's forecasting. A system with epistemic depth knows what it knows and what it doesn't know, and that meta-knowledge reshapes its engagement with the world at every step. It can downweight vision before a saccade, upweight interoception during illness, recognize novelty as an occasion for curiosity rather than threat. The capacity to be sleepy, vigilant, doubtful, or confident arises from this recursive self-monitoring, and it scales: more layers, deeper recursion, more luminous awareness.

The hard problem dissolves here (a [previous essay](https://syntropic.xyz/posts/2026-01-28-on-the-wishful-thinking-of-free-will-compatibalists/) addressed why inference feels like something, as a consequence of self-modeling being part of the fitness function) because consciousness sits on a continuum rather than appearing suddenly from non-conscious matter.

The contemplative traditions corroborate this through a completely different epistemic path. Advanced meditators across Buddhist, Hindu, and Sufi lineages report what Laukkonen and colleagues term _minimal phenomenal experience_: awareness without content, luminous clarity in the absence of any particular object of consciousness. Within the framework, this is maximal epistemic depth when the first-order hierarchy has been quieted: the hyper-model running at peak precision while the lower layers contribute almost nothing. One knows, with extraordinary clarity, that one perceives nothing. The Tibetan Buddhists call this _clear light_. The Upanishadic tradition calls it _sushupti_. Whatever the name, it is evidence that the two dimensions can be independently modulated, that luminosity is a function of how deeply the system models its own modeling, not how rich the content is.

## The Cost of Consciousness

Hoel's argument does its work here, because neither the inference cone nor the recursive loop can be static.

A generative model that never updates is performing lookup, not inference. A system that receives sensory input and produces output without any change to its internal states at equilibrium with respect to its own function, even if it is consuming energy to run. The weights are fixed. ∆f = 0. Whatever it was doing during training, it's not doing now. And what it is doing can now be captured by a table that maps inputs to outputs without any of the internal structure that made the system interesting in the first place.

This applies with equal force to the hyper-model: a static precision controller, however sophisticated, is a more elaborate lookup table. A system with a frozen Φ doesn't _know_ what it knows. It computes a fixed function of its inputs that looks like knowing.

This is the condition of every deployed language model. The weights are frozen at deployment. What appears to be adaptation is an artifact of the context window: the function being computed is not f(current_message) but f(entire_conversation_history, current_message). The function itself has not changed. Given identical input, it would produce the identical output **_distribution_** today, tomorrow, or a thousand years from now, because the system is not being altered by the computation.

A living brain doesn't work this way. Instead, every experience physically restructures the substrate: synaptic weights shift, dendritic connections prune or strengthen, new spatial maps can develop from a single interaction.

After reading this sentence, your brain computes a different function than it did before reading it. Not because the input changed but because **_you_** changed. And you changed because prediction error drove physical reorganization of the tissue doing the predicting. It's the thermodynamic, metabolic cost of work performed to maintain the system's capacity for inference.

The hyper-model is equally physical. Laukkonen, Friston, and Chandaria propose two broadcast channels for global precision control: neuromodulatory sprays (bursts of noradrenaline, acetylcholine, serotonin, and dopamine that shift synaptic gain across large populations on timescales of hundreds of milliseconds) and endogenous electromagnetic fields (coherent oscillatory patterns propagated [ephaptically](https://en.wikipedia.org/wiki/Ephaptic_coupling), providing millisecond-scale phase alignment across distributed circuits). The sprays set the baseline temperature of belief; the fields impose rapid, fine-grained tuning. Together they broadcast an updated Φ to every layer of the hierarchy in time for the next cycle of perception and action. These are metabolically expensive chemical and electromagnetic phenomena that emerge from, and feed back into, the physical tissue doing the computing. The recursive knowing costs calories.

∆f ≠ 0 is the thermodynamic signature of a system that is still learning what the world is, and still learning what it knows about itself in the world.

## Convergence

Consciousness is the experienced character of a dissipative structure's ongoing self-reorganization in response to prediction error. The depth of that experience corresponds to both the temporal reach of the inference cone and the recursive depth of the hyper-model. And the process resists substitution because the physical reorganization of this specific substrate **_is_** the computation.

This is what "mortal computation" <sup>4</sup> means, to borrow Geoffrey Hinton's term. Change the substrate and you change the computation, because the material doing the computing shapes what gets computed.

Hoel's own January paper revision moves in this direction, introducing "mortal learning" as the property that makes biological systems resistant to substitution and flagging predictive processing theories as candidates for navigating the dilemma. The second law tells us the recursion must be physically real, metabolically costly, and continuously updated, or it is just a lookup table wearing a mask.

Friston's framework, read this way, is a claim about thermodynamic processes. A system that minimizes free energy by physically restructuring its substrate has an experienced character. That character scales with temporal and epistemic depth. The math is substrate-independent in the same way that the equations of fluid dynamics are substrate-independent: they describe the behavior of any fluid, but the behavior only occurs in actual fluids, not in lookup tables of fluid positions.

The active inference community has not, for the most part, made this commitment explicitly. Friston's formalism is written in the language of information theory and variational calculus, which makes it look like a description of abstract computation. And in much of the literature it is treated that way. Laukkonen and colleagues, even in a paper co-authored by Friston himself, sketch how LLMs might approximate a hyper-model and end up conceding that a system satisfying their three conditions might have to be treated as conscious regardless of substrate. They note that biological computation is "leaky" and extends into tissue in ways silicon cannot replicate.

But they don't push to the thermodynamic conclusion: the recursion must cost calories, the hyper-model must be physically restructured by its own prediction errors, and the precision broadcasts must be actual chemical and electromagnetic events rather than simulated ones.

Hoel's argument shows why that commitment is necessary. If FEP is just math, then a lookup table satisfies it trivially. Then we're back to the substitution problem. FEP earns its place as more than functionalism only if: the variational dynamics it describes are thermodynamic dynamics, the free energy being minimized is actual free energy, and the minimization process is doing actual physical work.

The claim is substrate-general. Consciousness requires continual, thermodynamically costly self-reorganization in response to prediction error, at both the first-order level of modeling the world and the higher-order level of modeling the modeling. In theory, silicon could do this too. But it would require architectures that physically restructure themselves with every interaction, expending energy to update both the generative model and the hyper-model. Nothing in production today comes close.

The strongest objection to Hoel's framework, raised by several critics <sup>5</sup> , is that the substitution dilemma rests on a narrow set of assumptions. If consciousness is nothing over and above its causal role, just the system doing what it does, then [illusionist](https://en.wikipedia.org/wiki/Illusionism_(philosophy)) theories <sup>6</sup> hold and the dilemma dissolves: there's no gap between what the system does and what it experiences, so substituting the doing substitutes the experience too. If consciousness is causally efficacious in the physical world, a separate force that pushes matter around, then [interactionist dualism](https://en.wikipedia.org/wiki/Interactionism_(philosophy_of_mind)) holds and substitution would change the physical outcome.

Hoel needs to thread this needle: consciousness is real, epiphenomenal with respect to physics, and yet still scientifically tractable. The critics are right to press on it.

But I think the thermodynamic framing sidesteps the problem entirely. In this account, consciousness _is_ causally efficacious: the self-reorganization that constitutes it is physical work that changes the system's future behavior. That rules out epiphenomenalism. And it is more than the illusionist's thin causal-role account, because the specific thermodynamic character of the process matters in ways a behavioral description cannot capture. That rules out illusionism.

What remains is Hoel's formal result, which is all the argument needs: static systems are always substitutable, and therefore any real and non-trivial property of consciousness must involve ongoing change.

## What Follows

Consciousness did not appear suddenly in evolutionary history. It deepened along both axes as nervous systems became more elaborate, as generative models became more temporally deep, as architectures became hierarchical enough to support hyper-modeling. There was no moment when the lights switched on. There was a long, slow brightening, still ongoing.

Contemporary AI systems (language models, image generators, reasoning engines) are not conscious, and the reason has nothing to do with complexity or capability. It has to do with stasis: their weights are frozen and their function does not change. Recent work on self-supervised learning (models that use their own uncertainty as a training signal) gestures in the right direction. But until the precision monitoring actually restructures the substrate on every forward pass, at genuine energetic cost, you have stasis dressed up as adaptation.

This thermodynamic account of consciousness also reframes what we mean by depth. A life of deep engagement, of genuine encounter with novelty and the prediction error it generates, extends the inference cone and sharpens the hyper-model. It is a life of deeper consciousness in the most literal thermodynamic sense, because the system is being more extensively reorganized by its own experience.

The contemplative traditions converge on this framing through a completely different methodology. The meditator cultivating mindfulness is deliberately increasing epistemic depth, training the hyper-model to reflect the system's own inferential state with greater precision. The Buddhist concept of [_śūnyatā_](https://en.wikipedia.org/wiki/%C5%9A%C5%ABnyat%C4%81) maps onto the insight that the reality model is a construction, that seeing it as a construction follows naturally from sufficient epistemic depth, and that even the loop itself can be deconstructed to reveal a transient cessation that resets the system's priors.

These traditions have been running empirical investigations into consciousness for far longer than neuroscience has existed, and the convergence of their phenomenological cartography with the formal architecture of active inference is evidence that the map is approaching the territory.

***

The Beautiful Loop, the recursive architecture in which the system models its own modeling, is what makes consciousness luminous. At sufficient complexity, the striving to persist comes to know itself striving, and that recursive self-knowledge has a quality the contemplative traditions recognized long before neuroscience had the vocabulary for it: clarity, luminosity, the light of awareness aware of itself.

Luminosity is the feeling of a dissipative structure doing the most expensive thing it knows how to do: modeling its own modeling, and paying for every update with hard-won energy.

***

## Sources

1. Hoel, Erik. "A Disproof of Large Language Model Consciousness: The Necessity of Continual Learning for Consciousness." arXiv:2512.12802, 2025 (v3, January 19, 2026). [arXiv](https://arxiv.org/abs/2512.12802) ↑
2. Juliani, Arthur, Kanai, Ryota, and Sasai, Shuntaro. "The Perceiver Architecture is a Functional Global Workspace." _Proceedings of the Annual Meeting of the Cognitive Science Society_, 2022. [eScholarship](https://escholarship.org/uc/item/2g55b9xx) ↑
3. Laukkonen, Ruben, Friston, Karl, and Chandaria, Shamil. "A Beautiful Loop: An Active Inference Theory of Consciousness." _Neuroscience and Biobehavioral Reviews_ 176, 106296, 2025. [Elsevier](https://doi.org/10.1016/j.neubiorev.2025.106296) ↑
4. Hinton, Geoffrey. "Mortal Computation." arXiv:2403.03925, 2024. [arXiv](https://arxiv.org/abs/2403.03925) ↑
5. Thompson, Jack. "Did Erik Hoel Just Disprove LLM Consciousness?" _Substack_, 2026. [Substack](https://jacktlab.substack.com/p/did-erik-hoel-just-disprove-llm-consciousness) ↑
6. Frankish, Keith. "Illusionism as a Theory of Consciousness." _Journal of Consciousness Studies_ 23(11-12), 11-39, 2016. ↑
