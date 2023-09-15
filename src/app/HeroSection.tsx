export default function HeroSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
                {/* <!-- Left Side: Text --> */}
                <div className="lg:w-1/2 text-center lg:text-left px-8">
                    <h1 className="text-4xl font-bold text-primary mb-4">Welcome to the next Generation Application Development world</h1>
                    <p className="text-lg text-gray-600 mb-8">Transform thoughts in to reality with my help</p>
                    <a href="#contact" className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition duration-300 ease-in-out inline-block">Hire Me</a>
                </div>

                {/* <!-- Right Side: Animated Image (Replace with your animated image) --> */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    {/* <!-- Replace with your animated image or GIF --> */}
                    {/* <img src="animated-image.gif" alt="Animated Image" className="w-full rounded-lg shadow-lg"> */}
                </div>

            </div>
            <div className="flex container mx-auto px-32 pt-4 gap-2">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">Design</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">Build</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-4">Deploy</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
        </section>
    )
}