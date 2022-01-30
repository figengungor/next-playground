# Server-side pre-rendering

## 1. Static-site Generation(SSG)

`users`

    [id].js => /users/1, /users/2 ...

    index.js => /users

All user list page and detail pages are pre-generated in advance during **build time**.

    keywords: `getStaticProps`, `getStaticPaths`

### Incremental Static Re-generation(ISR)

`trending-movies`

    index.js => /trending-movies

**Helpful links:**

Create `.env.local` file inside root directory.

Add your credentials there. (e.g. TMDB_API_KEY=blabla)

[`next.config.js` env variable conf](https://nextjs.org/docs/api-reference/next.config.js/environment-variables)

[TMDB API KEY](https://www.themoviedb.org/settings/api)

[TMDB API DOCS](https://developers.themoviedb.org/3/getting-started/introduction)

[`next/image` unconfigured host](https://nextjs.org/docs/messages/next-image-unconfigured-host)

[TMDB images](https://developers.themoviedb.org/3/getting-started/images)

[TMDB API => trending](https://developers.themoviedb.org/3/trending/get-trending)

`npm install axios` (use axios instead of fetch)

    keywords: `revalidate`

## 2. Server-side Rendering(SSR)

Coming soon...

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
