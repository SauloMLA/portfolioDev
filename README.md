Saulo Alaniz — Portfolio

Personal brand site for Saulo Alaniz, Software Engineer building AI, web, mobile, and full-stack products.

Live → sauloalaniz.dev



What this is

Not a template dump. A single-page portfolio designed to feel like a product — dark, minimal, fast — with real case studies, production experience, and embedded product demos.

Built to answer three questions in under 60 seconds:





Who is Saulo? — name-first branding, clear positioning



What has he shipped? — 4 real products with live links and demos



Where has he worked? — Paystand, Whipple Studio, Guía de Hoy



Highlights





Premium dark UI — fixed grid background, subtle depth, no visual noise



Bilingual — EN / ES toggle with full content swap (not just labels)



Product case studies — problem → solution → impact format



In-site demo player — YouTube embeds in a modal, no redirect



Clickable project previews — open live product or play demo from the image



SEO ready — metadata, Open Graph image, sitemap.xml, robots.txt



Type-safe content — all copy lives in typed locale files



Featured products







Product



Live



Repo





EcoSort AI



ecosortai-landing.vercel.app



ecoSortAI





Grupo Agaváceas



grupo-agavaceas.vercel.app



grupo-agavaceas





ServiMotos



Demo only



punto-de-venta





Passly Cashier



Demo only



passly_cashier



Stack







Layer



Tech





Framework



Next.js 16 (App Router)





Language



TypeScript





Styling



Tailwind CSS v4





UI



shadcn/ui + Base UI





Motion



Framer Motion





Icons



Lucide





Font



Geist





Deploy



Vercel



Quick start

git clone https://github.com/SauloMLA/porfolio.git
cd porfolio
npm install
npm run dev

Open http://localhost:3000.

Scripts

npm run dev      # local development
npm run build    # production build
npm run start    # run production server
npm run lint     # eslint



Project structure

src/
├── app/                    # layout, globals, SEO routes
├── components/
│   ├── sections/           # Hero, Projects, Experience, etc.
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Button, Badge, toggles
├── content/
│   ├── en.ts               # English copy (edit here)
│   └── es.ts               # Spanish copy (edit here)
└── lib/
    ├── i18n/               # types + locale provider
    └── video.ts            # YouTube embed helpers

public/
└── projects/               # project screenshots

Edit content

All visible text is in:





src/content/en.ts



src/content/es.ts

To add a project, update both files and drop an image in public/projects/.



Deploy

Optimized for Vercel — connect the GitHub repo and deploy. No environment variables required.

npm run build   # must pass before pushing
git push        # Vercel auto-deploys on push to main



Contact





GitHub — SauloMLA



LinkedIn — saulomarioalanizleon



Email — marioalaniz04@gmail.com



Location — Guadalajara, Mexico



Built by Saulo Alaniz.