export default function Services(){
    return(
        <section id="services" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
                {/* <!-- Service Card (Repeat for each service) --> */}
                <div className="bg-white items-center rounded-full shadow-lg ">
                    <h3 className="text-xl font-semibold  ">Contact</h3>
                    {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Order</h3>
                    {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Get Work Done</h3>
                    {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Payment</h3>
                    {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </div>
                {/* <!-- Repeat for other services --> */}
            </div>
        </div>
    </section> 
    )
}