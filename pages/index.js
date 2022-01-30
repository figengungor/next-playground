import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Next Playground</title>
        <meta name="description" content="Learn Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next, Please!</h1>
      <nav>
        <ul>
          <Link href="/about">About</Link>
        </ul>
        <ul>
          <Link href="/users">Users</Link>
        </ul>
        <ul>
          <Link href="/trending-movies">Trending Movies</Link>
        </ul>
      </nav>
    </div>
  );
}
