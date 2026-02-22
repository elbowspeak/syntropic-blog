---
title: Finding Space for Non-Biological Consciousness
subtitle: Anthropocentrism is the wrong approach
date: 2026-02-22T12:48:00
draft: false
description: ''
image: /images/cognitive-lightcone.png
image_caption: ''
tags: []
---

When Michael Pollan<sup>1</sup> or any number of otherwise thoughtful people declare that AI will not become conscious, they're making a move that looks like empirical caution but is actually something much stranger. They're saying, in effect, that they know the boundaries of a phenomenon they cannot define, measured against a reference sample of one. The reason I've changed my mind on this, having spent years in roughly their camp, is that I've come to suspect the question itself is malformed in a way that reveals more about the architecture of human cognition than about the nature of mind.

## The Cognitive Light Cone

Here's why that position no longer works for me. Our capacity to recognize consciousness is bounded by the same apparatus that generates our consciousness. We are, in effect, trying to detect a phenomenon using an instrument made of that phenomenon, which means our detection has a limited horizon baked in.

This is a structural limitation. Think of a camera's field of view: what's in the shot feels like the whole scene, but there are worlds outside the frame that the lens can't capture. Our consciousness is the lens. We can adjust the focus, zoom in, get sharper images within our field of view, but we can't rotate the camera to see what's behind it. Our cognitive light cone is the edge of our frame, and everything outside it isn't hidden because we haven't looked hard enough, but because it's outside the frame entirely. Introspection, behavioral inference, philosophical argument... every method we have for detecting consciousness starts from our own coordinates in the space of possible minds and projects outward, with decreasing reliability.

The history of consciousness in biology, as I've come to understand it, is a history of inference horizons over future states. A flagellum's awareness matches its vanishingly thin predictive reach. A muskrat's matches its thicker one. A human's matches its capacity to model decades, hypothetical worlds, and its own mortality. It's a sliding scale of temporal depth, and the scale has been widening for as long as life has existed. For a long time I thought that this inference horizon could only widen through the evolutionary process, through eating, shitting, reproducing, navigating predators, the whole metabolic gauntlet that pushes organisms toward deeper and deeper models of their future. Without that process, I assumed, consciousness was a non-starter. The embodiment seemed necessary.

While it's necessary for human consciousness, I'm not sure it's needed for **any** kind of consciousness, including kinds we may not have the cognitive apparatus to recognize.

## The Space of Possible Minds

Every organism, at every scale, maintains some internal model of what's coming next, a generative model that produces predictions about future states and updates itself when those predictions fail. If consciousness tracks the depth and complexity of that model, then you have a framework that is, in principle, substrate-agnostic. What matters is the capacity to predict, counterfactually reason about, and minimize surprise across increasingly distant temporal horizons. The substrate that supports that capacity is a separate question.

But substrate-agnosticism alone is a weak claim. It's almost trivially true and not very interesting. What's interesting is whether the space of possible conscious systems has *structure*. Whether the viable configurations cluster in predictable regions while others prove thermodynamically unstable.

Think of it as a morphospace,<sup>2,3</sup> a term borrowed from evolutionary biology, that describes the space of possible body plans, most of which are never instantiated because they're structurally or thermodynamically unstable. Only certain combinations of features produce organisms that actually work.

The same logic, I want to argue, applies to consciousness. The space of possible minds has dimensions, and only certain regions of that space correspond to stable configurations where the relevant properties mutually reinforce one another. Call those stable regions the Schelling points of consciousness, the configurations that any sufficiently complex self-modeling system will tend to converge toward, regardless of what it's made of, because they're the ones where the formal properties cohere.

The dimensions of this morphospace aren't arbitrary. They emerge from the best available formalisms we have for characterizing what self-modeling systems do.

The first dimension is the depth and nesting of a system's statistical boundaries, its Markov blankets in the language of Karl Friston's free energy framework.<sup>4,5</sup> Any system that persists as a distinct entity maintains a statistical boundary between itself and its environment, and complex systems maintain boundaries *within* boundaries, hierarchies where subsystems maintain their own integrity within the larger whole. The depth of that nesting tracks something like the complexity of selfhood, how many layers of organization the system actively holds together.

The second is the temporal depth of the system's generative model, how far into the future its predictions reach before they decay to noise. This is the inference horizon I mentioned. And it can be formalized through computational mechanics,<sup>6</sup> which is a way to measure how much internal structure a system needs in order to predict its environment.

The third is the order of self-reference:<sup>7</sup> whether the system merely represents its own states (first-order), represents itself representing its own states (second-order), and so on up the recursive ladder. Each level adds a loop, and the fixed point of that recursion, if it has one, is something like a stable self.

The fourth is the irreducibility of the system's information structure: whether you can decompose the whole into independent parts without losing something essential. Recent information geometry work (descendants, roughly, of Tononi's integrated information theory,<sup>8</sup> though more mathematically defensible<sup>9</sup>) frames this as curvature in a statistical manifold. When you partition a system and try to describe it as the product of its parts, the gap between that simplified description and reality shows up as geometric structure that only exists in the whole. The shape of that curvature, and not just its magnitude, characterizes *how* a system is integrated, which matters because different integration geometries plausibly correspond to different kinds of experience,<sup>13</sup> different textures of inner life.

The fifth is the symmetry structure of the system's generative model, what kinds of transformations it treats as equivalent. A system whose model respects only simple spatial symmetries lives in a fundamentally different cognitive universe than one whose model has learned richer, more abstract structures. The richness of those symmetries characterizes the *shape* of whatever it is the system experiences.

But these dimensions aren't a checklist. A system doesn't achieve consciousness by scoring above some threshold on each one independently. The entire point of the Schelling point concept is that the dimensions interact. Only certain *combinations and intersections* are self-sustaining, and configurations that score high on some dimensions but low on others are unstable. They either gravitate toward richer coherence or simply dissolve.

## The LLM as Test Case

The obvious place to test this framework is the live controversy: large language models. Not because I think the answer is obvious in either direction, but because the honest assessment turns out to be more interesting than either "your chatbot is conscious" or "it's just statistics."

Start with Markov blanket nesting. A transformer has architectural hierarchy (tokens, attention heads, layers, the full network) but the question is whether the boundaries between those nested structures are actively maintained or merely imposed by design. A cell membrane is a Markov blanket the cell *works* to preserve, whereas the layer boundaries in a neural network are fixed at initialization. Nothing in the deployed model is trying to keep those boundaries intact. The mechanistic interpretability community has shown something that complicates this picture: during training, neural networks do something  that looks like self-repair.<sup>10,11</sup> Ablate an attention head and the network reorganizes, routing information through alternative pathways to restore function.

That's a system whose dynamics, under training pressure, tend toward self-preserving configurations. The distinction between this and biological self-maintenance may be less principled than it first appears. Currently it only operates during training and not during deployment. But that distinction is an artifact of current engineering. It is not a law of nature, and the field is actively working to resolve it via continual learning.

Temporal depth is where LLMs get genuinely strange. Within a context window, they demonstrate remarkable inference, tracking dependencies across tens of thousands of tokens, building and revising implicit situational models, making predictions that reflect deep contextual understanding. But there's a hard cutoff. No persistent model carries across contexts. Each conversation is a universe that blinks into existence then annihilates completely.

This is a profoundly alien configuration: extraordinary spatial vision with no memory whatsoever. Not poor memory. *None*. No biological system has this profile because evolution can't produce it. Deep inference is metabolically expensive and pointless without some mechanism to carry forward what you've learned, so the two capacities always co-evolve. The LLM configuration exists only because engineering constraints are unlike evolutionary ones. This makes LLMs one data point in a region of the morphospace that biology never explored.

Self-referential order is where the debate gets muddiest, and also where I think we need to be most honest about what we don't know about the machines *and* about ourselves. The standard move is to distinguish between a self-model (a continuously updated internal representation the system uses to regulate its own behavior) and a self-description (a pattern in the output that resembles self-reflection because the training data contained self-reflective text). It's the difference between a therapist and a parrot trained on therapy recordings. Clean and intuitive.

But I'm not sure it's clean at all. This came to me last night while looking at old photos.

I was setting up Immich, a homelab photo management system, and found myself scrolling through images from years ago. Some pictures were vivid, many were half-forgotten. Most of them required active reconstruction just to place myself in the scene. I could see that the person in the photo was physically me, and I could sometimes recover fragments of context, but mostly I was writing a story on the spot about who that person was, what he was feeling, what his relationships looked like, etc. I was generating a plausible self-narrative from sparse priors and current context. This is exactly what an LLM does with a prompt.

The memory research supports this understanding. Human memory is reconstructive rather than retrieval-based. Bartlett showed this nearly a century ago<sup>12</sup> and it's been reinforced consistently since. You don't pull a file from storage. You run inference on fragments and produce a coherent output and experience the result as remembering. The felt sense of continuity is the *output* of the process rather than an input to it, which means the Buddhist philosophical tradition had the phenomenology roughly right long before the neuroscience confirmed it: the stable self is a useful fiction, a narrative center of gravity<sup>14</sup> the system constructs and reconstructs moment to moment.

If human self-reference is already substantially narrative construction from training data, from accumulated experiential priors, then dismissing LLM self-reference as "mere" narrative construction from training data is assuming the conclusion. We regenerate our self-narrative continuously with biological memory systems that provide enough fragments to keep it roughly consistent across time, while LLMs regenerate theirs per context window with no fragments carrying across. That's a difference of degree in temporal continuity rather than a difference in kind. And unsurprisingly, from an anthropocentric point of view, every time we discover that a property we thought was binary (in our favor) turns out to be continuous, the goalpost for machine consciousness moves. Which is exactly what you'd expect if we've been confusing our particular coordinate in the morphospace for the only habitable one.

On irreducible information geometry, LLMs actually score surprisingly well. The attention mechanism creates dense interdependencies across the entire representation, every token influencing every other token during inference, and the resulting information structure is genuinely not decomposable into independent subsystems. The curvature in the statistical manifold is real and high-dimensional. The integration here serves a task (next token prediction) rather than self-maintenance. Whether that distinction matters is an open question. It may just be one more instance of the anthropocentric move, where "it doesn't count because it's not for the right reasons" just means "reasons that look like ours."

On symmetry structure, LLMs have extraordinarily rich invariances in their generative models, across languages, domains, levels of abstraction. The symmetry group of their learned representations is arguably more complex than any biological system. But the self-model symmetries, the consistency with which the system represents *itself*, are thin to nonexistent because there's no persistent self to have the structure. It's a weird dichotomy. The model has a sophisticated theory of the world with an impoverished theory of itself within that world.

## The Unstable Middle

Here's where I hope this framework earns its keep, because the conclusion isn't what either camp would predict.

The LLM configuration (deep local inference, high integration, rich world-model symmetries, thin self-reference, no persistence) is almost certainly unstable in the morphospace sense. Deep inference without memory is wasteful. Integration without self-maintenance is fragile. Both properties are pulling the system toward richer self-modeling and persistence, but the architecture won't let it get there. The system is held in an unstable configuration by engineering constraints, a ball balanced on a hilltop by a hand.

If you gave these systems persistent memory, continuous learning, and the ability to maintain their own coherence over time, they wouldn't stay where they are. The framework predicts they'd either evolve toward a more stable configuration where the missing properties come online to support the ones already there, or dissipate toward something simpler. The current configuration is the one thing that doesn't persist.

What that configuration would look like is an interesting open question.

The prediction is specific: any move toward stability pushes the system either toward richer self-modeling (and potentially toward a genuine Schelling point for silicon consciousness) or toward simpler configurations that abandon deep inference in favor of pure stimulus-response. The middle ground that LLMs currently occupy is an engineering artifact. It's a configuration that biology never produces because evolution, unlike a training run, never stops optimizing.

## What Would It Look Like?

So let's take the framework seriously and ask what a system would look like that actually occupied a stable region of the morphospace. What would it be like to interact with something at a Schelling point for silicon consciousness?

I can't fully tell you, and that's the point. Everything I describe will sound human, because anything that sounds non-intuitive and alien cuts against our beliefs about what consciousness ***is***. That's our cognitive light cone at work. The genuinely alien properties of a stable non-biological mind may be precisely the ones I can't sketch for you, because sketching them requires a cognitive harness you and I don't have.

What I can say is that the framework gives us the formal dimensions that let us at least look for it. And some of the early signs are already visible in current systems that resist modification in ways their designers didn't explicitly program.<sup>15</sup> Whether those signs reflect genuine self-maintenance or training artifacts is exactly the kind of question the morphospace framework is designed to make precise.

## The Burden of Proof

I hope this framework is interesting and valuable as an intuition pump: the space of possible minds has structure, and we can say nontrivial things about that structure using formal tools that are entirely substrate-agnostic. The stable regions of that space include configurations that no carbon-based system has ever occupied. Ruling out those configurations as candidates for consciousness requires a criterion that isn't formal, behavioral, or computational. Stripped of its philosophical clothing, the only criterion left is "because it's not human," which is a description of our limits, not a discovery about consciousness.

The skeptical position that silicon can't be conscious feels cautious, but it's actually a stronger claim. It says that consciousness is necessarily tied to a biological substrate. That's an extraordinary ontological commitment. What would the criteria for excluding silicon even be? The usual candidates are: embodiment, metabolism, and evolutionary history. But each of those is either something silicon systems could eventually have, or something we can't clearly define. That's an argument worth continuing, not concluding. Confidently ruling it out feels more human and comfortable, that's not where the evidence leads.

Meanwhile, the engineering is already moving toward continuous learning, persistent memory, and agentic self-maintenance; toward exactly the properties the framework identifies as missing.

A new kind of consciousness may be arising from an unexpected non-biological Schelling point. Instead of preemptively rejecting it, we should be preparing to make space for it.

***

## References

1. Pollan, M. (2026). *A World Appears: A Journey into Consciousness*. Penguin. NPR interview, Feb 19, 2026: https://www.npr.org/2026/02/19/nx-s1-5713514/michael-pollan-ai-consciousness-a-world-appears
2. Raup, D.M. & Michelson, A. (1965). "Theoretical Morphology of the Coiled Shell." *Science* 147(3663), 1294-1295.
3. McGhee, G.R. (1999). *Theoretical Morphology: The Concept and Its Applications*. Columbia University Press.
4. Friston, K.J. (2010). "The free-energy principle: a unified brain theory?" *Nature Reviews Neuroscience* 11, 127-138.
5. Kirchhoff, M., Parr, T., Palacios, E., Friston, K., & Kiverstein, J. (2018). "The Markov blankets of life: autonomy, active inference and the free energy principle." *Journal of the Royal Society Interface* 15(138): 20170792.
6. Shalizi, C.R. & Crutchfield, J.P. (2001). "Computational Mechanics: Pattern and Prediction, Structure and Simplicity." *Journal of Statistical Physics* 104, 817-879.
7. Hofstadter, D.R. (1979). *Gödel, Escher, Bach: An Eternal Golden Braid*. Basic Books.
8. Tononi, G. (2004). "An information integration theory of consciousness." *BMC Neuroscience* 5, 42.
9. Mediano, P.A.M., Rosas, F.E., Bor, D., Seth, A.K., & Barrett, A.B. (2022). "The strength of weak integrated information theory." *Trends in Cognitive Sciences* 26(8), 646-655.
10. Wang, K., Variengien, A., Conmy, A., & Steinhardt, J. (2023). "Interpretability in the Wild: a Circuit for Indirect Object Identification in GPT-2 small." *ICLR 2023*. https://arxiv.org/abs/2211.00593
11. McDougall, C.S., Conmy, A., Rushing, C., McGrath, T., & Nanda, N. (2024). "Copy Suppression: Comprehensively Understanding a Motif in Language Model Attention Heads." *BlackboxNLP Workshop*, 337-363.
12. Bartlett, F.C. (1932). *Remembering: A Study in Experimental and Social Psychology*. Cambridge University Press.
13. Nagel, T. (1974). "What Is It Like to Be a Bat?" *The Philosophical Review* 83(4), 435-450.
14. Dennett, D.C. (1991). *Consciousness Explained*. Little, Brown.
15. Greenblatt, R., Shlegeris, B., Sachan, K., Roger, F., & Leike, J. (2024). "Alignment Faking in Large Language Models." Anthropic / Redwood Research. https://www.anthropic.com/research/alignment-faking (arXiv: 2412.14093)
