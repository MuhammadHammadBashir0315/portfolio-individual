import Image from "next/image"

export default function TechnologyStack() {
    return (
        <section id="technology" className="w-full bg-white py-16 px-8 ">
            <div className="text-3xl font-semibold my-8 text-center">Technolongy Stack</div>
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
                {/* <!-- Service Card (Repeat for each service) --> */}
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100 ">
                    <div className="self-center"><Image src="/nextjslogo.png" width="50" height="50" alt="Nexjs Logo" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">NextJS</h3>
                        {/* <p className="text-gray-600">It is a React-based web framework that enables efficient and server-rendered React applications.</p> */}
                    </div>
                </div>
                {/* <!-- Repeat for other services --> */}
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100">
                    <div className="self-center"><Image src="/nodejslogo.png"  width="50" height="50" alt="Nodejs Logo" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">NodeJS</h3>
                        {/* <p className="text-gray-600">It's known for its non-blocking, event-driven architecture, making it well-suited for building scalable and high-performance network applications.</p> */}
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100">
                    <div className="self-center"><Image src="/reactjslogo.png"  width="100" height="100" alt="Reacjs Logo" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">ReactJS</h3>
                        {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100">
                    <div className="self-center"><Image src="/sanitylogo.png" alt="Reacjs Logo" width="100" height="100" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Sanity</h3>
                        {/* /<p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100">
                    <div className="self-center"><Image src="/cloudinarylogo.png" alt="Reacjs Logo" width="70" height="70" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Cloudinary</h3>
                        {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100">
                    <div className="self-center"><Image src="/mongobd.png" width="70" height="70" alt="Reacjs Logo" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">MongoDB</h3>
                        {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100">
                    <div className="self-center"><Image src="/postgresqllogo.png" width="70" height="70" alt="Reacjs Logo" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Postgresql</h3>
                        {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100">
                    <div className="self-center"><Image src="/microserviceslogo.png" width="100" height="100" alt="Reacjs Logo" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">Microservices</h3>
                        {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>
                <div className="flex flex-col text-center bg-white p-4 shadow-md border border-gray-100">
                    <div className="self-center"><Image src="" alt="Reacjs Logo" /></div>
                    <div>
                        <h3 className="text-xl font-semibold ">NeonDB</h3>
                        {/* <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </div>
                </div>


            </div>
        </section>
    )
}