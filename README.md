# Nature Bright Industries website

Responsive Next.js + TypeScript + Tailwind CSS starter based on the approved homepage mockup.

## Included
- Responsive homepage with the approved brand direction
- Uploaded Nature Bright Industries logo
- Clearly illustrative product-bottle placeholders (replace with real product photos)
- Product category showcase, quality highlights, about section, bulk enquiry CTA and contact details
- WhatsApp link is intentionally not activated until the phone number is verified
- Sanity Studio route and schemas for products, testimonials and site settings

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Sanity CMS setup
1. Create a project at https://www.sanity.io/manage.
2. Copy its Project ID into `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`.
3. Set `NEXT_PUBLIC_SANITY_DATASET=production`.
4. Run the project and open http://localhost:3000/studio.
5. Add your brother as a Sanity project member with the appropriate editor role.
6. Create product documents and publish only verified content.

The homepage currently uses a static, curated placeholder product catalogue. The CMS schemas and Studio are included, but live CMS fetching and product-page CRUD publishing are a next integration step.

## WhatsApp
The provided contact number was supplied as `07620409058`. Do not enable click-to-chat until the owner confirms the correct 10-digit Indian mobile number. Then set `NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX` (digits only) in Vercel and `.env.local`.

## Vercel deployment
1. Push this folder to a private GitHub repository.
2. Import the repository into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy.
5. Add `naturebright.in` in Vercel Project Settings > Domains and follow the DNS instructions from your domain registrar.

## Before public launch
- Replace illustrative bottles with actual product images and approved labels.
- Replace the factory illustration with a real facility photo or remove the section.
- Add real customer testimonials only with permission; none are fabricated in this starter.
- Confirm the WhatsApp number and exact Google Maps pin.
- Add a working enquiry form endpoint and test delivery.
- Confirm product descriptions, pack sizes, usage and safety details.
- Verify domain availability and purchase it through a registrar.
