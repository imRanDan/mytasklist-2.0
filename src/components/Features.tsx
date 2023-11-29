import React from 'react'

const Features = () => {
  return (
    <>
<section className="bg-gray-100 text-gray-800">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-900">Features</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">MyTaskList has more features than before, offering a system for your task management.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracki sm:text-3xl text-gray-900">Get into a state of flow for effective task management!</h3>
				<p className="mt-3 text-lg text-gray-600">myTaskList will help you get focused with tips and pointers to easily get into a state of flow.</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Create, Update, and Delete your tasks!</h4>
							<p className="mt-2 text-gray-600">Not just a typical CRUD app! Create and manage your tasks with style!</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Set your own pomodoro timer!</h4>
							<p className="mt-2 text-gray-600">For every task, you can set your own pomodoro timer to take as much time (and breaks) needed for successful task management</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leadi text-gray-900">Motivational quotes and clean dashboard</h4>
							<p className="mt-2 text-gray-600">Our app has a clean dashboard for your organizational needs and motivational quotes that will randomize each time you refresh the page.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default Features