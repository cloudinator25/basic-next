export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">
        Welcome to <a href="https://nextjs.org">Deploy Next.js in another Version!</a>
      </h1>
      <p className="mt-3 text-2xl">
        Get started by editing&nbsp;
        <code className="p-1 font-mono text-sm rounded-md bg-gray-100">
          pages/index.tsx
        </code>
      </p>
      <div className="flex flex-row gap-x-4 mt-6">
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss"
          className="
            px-4
            py-2
            text-xl
            font-semibold
            text-white
            bg-blue-500
            rounded-md
            shadow-sm
            hover:bg-blue-700
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:ring-offset-2
            focus:ring-offset-white
          "
        >
          Explore our GitHub repository
        </a>
        <a
          href="https://dev.to/vercel/announcing-nextjs-13-4j7k"
          className="
            px-4
            py-2
            text-xl
            font-semibold
            text-white
            bg-green-500
            rounded-md
            shadow-sm
            hover:bg-green-700
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            focus:ring-offset-2
            focus:ring-offset-white
          "
        >
          Check out our latest blog post
        </a>
      </div>
    </div>
  );
}


