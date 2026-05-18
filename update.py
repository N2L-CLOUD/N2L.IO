import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Hero Section Capitalization
content = content.replace(
    '<h1 class="hero-headline" style="color: white;">The Fourth Industrial Revolution<br><span class="accent">needs a map</span></h1>',
    '<h1 class="hero-headline" style="color: white;">The Fourth Industrial Revolution<br><span class="accent">Needs a Map</span></h1>'
)

# Mission Section Layout and Font Size
content = re.sub(
    r'<section class="mission-section" id="mission">\s*<div class="section-eyebrow">The Mission</div>\s*<h2 class="mission-statement">Neural Net Labs maps the connective tissue across the domains powering <span class="accent">the Fourth Industrial Revolution\.</span></h2>\s*</section>',
    '<section class="mission-section" id="mission" style="width: 95%; max-width: var(--content-wide); padding-left: 0; padding-right: 0;">\n      <div class="section-eyebrow">The Mission</div>\n      <h2 class="mission-statement" style="color: white; font-size: var(--text-lg); font-weight: 400; max-width: 900px; margin-left: auto; margin-right: auto; line-height: 1.6;">Neural Net Labs maps the connective tissue across the domains powering <span class="accent">the Fourth Industrial Revolution.</span></h2>\n    </section>',
    content
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Changes applied.')
