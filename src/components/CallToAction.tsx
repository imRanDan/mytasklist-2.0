import Link from 'next/link'

const CallToAction = () => {
  return (
    <>
    <section className="py-6 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white">
	    <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		    <h1 className="text-5xl font-bold leadi text-center">Sign up now</h1>
		    <p className="text-xl font-medium text-center">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
		  <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
			<Link href="/signup">
				<button className="px-8 py-3 text-lg font-semibold rounded bg-blue-600 text-gray-50 hover:bg-white hover:text-blue-600">Sign up</button>
			</Link>

			<Link href="/login">
				<button className="px-8 py-3 text-lg font-normal border-4 rounded bg-gray-800 text-gray-50 border-gray-700 hover:border-blue-600 hover:text-blue-600">Sign In</button>
			</Link>
		  </div>
	    </div>
  </section>
    </>
  )
}

export default CallToAction