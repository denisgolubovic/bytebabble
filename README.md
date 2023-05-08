# ByteBabble

ByteBabble is a blog platform where users can create, read, and manage their blog posts. It is built using Next.js,
React, and Tailwind CSS, with a PostgreSQL database for storing data.

The main goal of this project is to show a small demo of how to use NextJS with new Vercel features such as Vercel
Postgres and Vercel KV. It is an ongoing project which will use webhooks, event driven architecture and more to
implement even more features.

## Features

- User authentication with Clerk
- Create, read, and manage blog posts
- Sort posts by date
- Responsive design with Tailwind CSS
- Server-side rendering with Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Prerequisites

- Node.js v18.x.x or later
- npm 9.6.2 or later
- Vercel with Vercel Postgres setup
- Clerk account with the API-keys added to your .environment.local

The goal is to deploy this in a production environment shortly which will allow for easier testing of the application.
This project will also use [Vercel KV](https://vercel.com/docs/storage/vercel-kv) and events with webhooks or similar. 

Start with ``npm install``

Configure [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) according to the documentation and setup your environment variables locally.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see ByteBabble application running.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### TODO feature list:
- Improve the user experience...
- Check how to configure Clerk sign out URL
- Add Vercel KV and use in some fun way
- Add event handling to auto update the dashboard with blogposts as soon as the database 'Posts' table is updated.
- Clean up the code and add comments...
