import React from 'react'

const Form = () => {
  return (
  <section className="p-6 bg-gray-100 text-gray-900">
	  <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12">
		  <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
			  <div className="space-y-2 col-span-full lg:col-span-1">
				  <p className="font-medium">Personal Inormation</p>
				  <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			  </div>
			  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label for="firstname" className="text-sm">First name</label>
            <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label for="lastname" className="text-sm">Last name</label>
            <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label for="email" className="text-sm">Email</label>
            <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
          </div>
          <div className="col-span-full">
            <label for="address" className="text-sm">Address</label>
            <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
          </div>
			  </div>
		  </fieldset>
	  </form>
  </section>
  )
}

export default Form