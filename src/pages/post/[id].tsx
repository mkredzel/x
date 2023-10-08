import Head from "next/head";

export default function SinglePostPage() {
  return (
    <>
      <Head>
        <title>Post / X</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div className="w-full border-x border-slate-200 md:max-w-2xl">
          <div className="border-b border-slate-400 p-4"></div>
        </div>
      </main>
    </>
  );
}
