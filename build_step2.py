import re

with open('c:/Users/hchip/OneDrive/Desktop/N2L.IO/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

hero_css = "\n    /* Hero Section */\n    .hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:calc(var(--space-20) + 80px) var(--space-8) var(--space-20);overflow:hidden}\n    .hero-bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}\n    .hero-bg img{width:100%;height:100%;object-fit:cover;opacity:0.45}\n    .hero-bg::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom,rgba(11,13,18,0.3) 0%,rgba(11,13,18,0.7) 60%,var(--color-bg) 100%)}\n    .hero-radial{position:absolute;top:-20%;left:50%;transform:translateX(-50%);width:800px;height:600px;background:radial-gradient(ellipse,rgba(79,209,255,0.08) 0%,transparent 65%);pointer-events:none;z-index:1}\n    .hero-content{position:relative;z-index:10;max-width:var(--content-wide);margin:0 auto;text-align:center}\n    .hero-eyebrow{display:inline-block;font-family:var(--font-body);font-size:var(--text-xs);font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:var(--color-cyan);padding:var(--space-2) var(--space-5);border:1px solid rgba(79,209,255,0.3);border-radius:var(--radius-full);background:var(--color-cyan-glow);margin-bottom:var(--space-8)}\n    .hero-headline{font-family:var(--font-display);font-size:var(--text-hero);font-weight:700;letter-spacing:-0.03em;line-height:1.02;margin-bottom:var(--space-8)}\n    .hero-headline .accent{background:linear-gradient(135deg,#4FD1FF 0%,#C23BFF 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}\n    .hero-tagline{font-family:var(--font-body);font-size:var(--text-lg);color:var(--color-text-muted);max-width:60ch;margin:0 auto var(--space-12);line-height:1.7}\n    .hero-cta{display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap}\n    .btn-hero{font-size:var(--text-base) !important;padding:var(--space-4) var(--space-10) !important}\n    .scroll-hint{position:absolute;bottom:var(--space-8);left:50%;transform:translateX(-50%);z-index:10;display:flex;flex-direction:column;align-items:center;gap:var(--space-2);color:var(--color-text-faint);font-size:var(--text-xs);letter-spacing:0.1em;text-transform:uppercase}\n    .scroll-hint-arrow{width:1px;height:40px;background:linear-gradient(to bottom,var(--color-text-faint),transparent);animation:scroll-drop 1.8s ease-in-out infinite}\n    @keyframes scroll-drop{0%{opacity:0;transform:scaleY(0);transform-origin:top}50%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform-origin:bottom}}\n    @media(max-width:768px){.hero-headline{font-size:var(--text-3xl)}.hero-tagline{font-size:var(--text-base)}}\n"

hero_html = """  <!-- Hero Section -->
  <section class="hero" id="hero">
    <div class="hero-bg">
      <img src="./Upscaled Website Images/Hero Images/enhanced_N2L_homepage_hero_image.png" alt="N2L Neural Network Hero">
    </div>
    <div class="hero-radial"></div>
    <div class="hero-content">
      <div class="hero-eyebrow">Neural Net Labs</div>
      <h1 class="hero-headline">The Universe<br>Is an <span class="accent">Operating System</span></h1>
      <p class="hero-tagline">Applied AI innovation &mdash; building breakthrough media platforms, spatial intelligence tools, and next-generation software products powered by world-class agentic systems.</p>
      <div class="hero-cta">
        <button class="btn btn-primary glow-btn btn-hero">Enter Labs &#8599;</button>
        <button class="btn btn-secondary btn-hero">View Work</button>
      </div>
    </div>
    <div class="scroll-hint"><div class="scroll-hint-arrow"></div></div>
  </section>"""

content = content.replace('  </style>', hero_css + '  </style>')
content = content.replace('    <!-- Sections will be added incrementally -->', hero_html)

with open('c:/Users/hchip/OneDrive/Desktop/N2L.IO/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('OK size=' + str(len(content)))
