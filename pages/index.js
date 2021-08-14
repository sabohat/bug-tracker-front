import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Bug tracker</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center my-5">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-purple-500" href="#">
            Bug Tracker!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Created by{" "}
          <span className="bg-yellow-500 p-1 rounded-lg text-white">
            Sabohat and Hadicha
          </span>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/users/login">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-yellow-600 focus:text-yellow-600">
              <h3 className="text-2xl font-bold">Login &rarr;</h3>
              <p className="mt-4 text-xl">
                Login and continue using the app for your projects!
              </p>
            </a>
          </Link>

          <Link href="/users/signup">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-yellow-600 focus:text-yellow-600">
              <h3 className="text-2xl font-bold">Signup &rarr;</h3>
              <p className="mt-4 text-xl">
                Signup to use this app for your business!
              </p>
            </a>
          </Link>
          <Link href="/demo">
            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-yellow-600 focus:text-yellow-600"
            >
              <h3 className="text-2xl font-bold">Demo &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and learn how it all works without logging in!
              </p>
            </a>
          </Link>
          <Link href="/creators">
            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-yellow-600 focus:text-yellow-600"
            >
              <h3 className="text-2xl font-bold">About US &rarr;</h3>
              <p className="mt-4 text-xl">
                Interested in who we are? Just follow the link...
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
