import Link from "next/link"

const Hero = () => {
  return (
  <section className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white">
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
      <h1 className="text-4xl font-bold leading-none sm:text-5xl">Elevate your 
        <span className="text-blue-600"> Productivity</span> with myTaskList
      </h1>
      <p className="px-8 mt-8 mb-12 text-lg">Simplify your life with myTaskList: A user-friendly app that helps you organize your tasks and focus on what matters.</p>
      <div className="flex flex-wrap justify-center">
        <Link href="/signup">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-600 text-gray-50 hover:bg-white hover:text-blue-600">Get started</button>
        </Link>

        <Link href="/about">
          <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300 dark:text-white hover:border-blue-600 hover:text-blue-600 ">Learn more</button>
        </Link>

      </div>
    </div>
</section>
  )
}

export default Hero