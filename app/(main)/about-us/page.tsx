import Image from "next/image";

const AboutUs = () => {
    return ( 
        <>
            <div className="relative w-full h-[500px]">
                <div className="absolute size-full bg-blue-700 object-cover z-10 bg-opacity-25" />
                <Image
                    src="/assets/about-us.jpg"
                    alt="about us"
                    fill
                    className="object-cover absolute size-full z-0 filter brightness-50"
                />
                <section className="z-10 absolute w-full h-full flex items-center justify-center">
                    <div className="max-w-lg px-4 text-center text-white space-y-3">
                        <h2 className="text-5xl">
                            About Us
                        </h2>
                        <p className="text-base leading-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </section>
            </div>
            <div className="w-full h-fit px-5 md:px-12 lg:px-28 py-16 space-y-16">
                <div className="flex items-center md:flex-row flex-col-reverse gap-x-10 gap-y-6 justify-between w-full">
                    <div className="flex flex-col gap-2 md:max-w-[300px] lg:max-w-sm xl:max-w-lg">
                        <h3 className="text-3xl text-blue-500 font-bold">
                            About Company
                        </h3>
                        <p className="text-gray-600 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-gray-600 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                    <div className="relative w-full max-w-[500px] md:h-[300px] h-[200px] overflow-hidden rounded-tr-[150px] rounded-bl-[130px] rounded-tl-[90px] rounded-br-[40px] shadow-[-25px_25px_0px_-15px_rgba(0,0,0,0.3)]">
                        <Image
                            src="/assets/company1.jpg"
                            alt="company"
                            fill
                            className="size-full absolute filter brightness-90 object-cover"
                        />
                    </div>
                </div>
                <div className="flex items-center md:flex-row flex-col gap-x-10 gap-y-6 justify-between w-full">
                    <div className="relative w-full max-w-[500px] md:h-[300px] h-[200px] overflow-hidden rounded-tr-[100px] rounded-bl-[95px] rounded-tl-[120px] rounded-br-[60px] shadow-[-25px_25px_0px_-15px_rgba(0,0,0,0.3)]">
                        <Image
                            src="/assets/company2.jpg"
                            alt="company"
                            fill
                            className="size-full absolute filter brightness-90 object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-2 max-w-lg">
                        <h3 className="text-3xl text-blue-500 font-bold">
                            Manage Company  
                        </h3>
                        <p className="text-gray-600 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-gray-600 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AboutUs;