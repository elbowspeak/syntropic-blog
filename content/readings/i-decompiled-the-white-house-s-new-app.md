---
title: "I Decompiled the White House's New App"
date: 2026-03-28
source_url: "https://thereallo.dev/blog/decompiling-the-white-house-app"
source_name: "Thereallo"
description: "The official White House Android app has a cookie/paywall bypass injector, tracks your GPS every 4.5 minutes, and loads JavaScript from some guy's GitHub Pages."
image: "https://thereallo.dev/api/og?title=I%20Decompiled%20the%20White%20House's%20New%20App&description=The%20official%20White%20House%20Android%20app%20has%20a%20cookie/paywall%20bypass%20injector,%20tracks%20your%20GPS%20every%204.5%20minutes,%20and%20loads%20JavaScript%20from%20some%20guy's%20GitHub%20Pages."
---

"That's a personal GitHub Pages site. If the lonelycpp GitHub account gets compromised, whoever controls it can serve arbitrary HTML and JavaScript to every user of this app, executing inside the WebView context.
This is a government app loading code from a random person's GitHub Pages."
