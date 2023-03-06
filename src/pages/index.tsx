import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-inter">
        <div className="p-10">
          <h1 className="text-4xl">Getting started</h1>
          <p>
            Get started by editing&nbsp;
            <code>src/pages/index.tsx</code>
          </p>
        </div>
      </main>
    </>
  );
}