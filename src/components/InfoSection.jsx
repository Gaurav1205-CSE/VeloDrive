import React from 'react'

function InfoSection() {
  return (
    <section>
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=1.00xw:0.755xh;0,0.169xh&resize=640:*"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Seamless rentals, trusted connections, and a smarter way to share the road.
            </h2>
  
            <p className="mt-4 text-gray-600">
              Finding the perfect ride has never been easier! VeloDrive connects car and bike owners with renters in a seamless, secure, 
              and sustainable way. Whether you need a vehicle for a road trip, a daily commute, or just an adventure, our platform offers 
              a hassle-free rental experience. With verified users, secure payments, and a wide range of vehicles to choose from, VeloDrive 
              makes mobility more accessible and eco-friendly. Join us today and unlock the road to convenience and flexibility!.
            </p>
  
            <a
              href="#"
              className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoSection