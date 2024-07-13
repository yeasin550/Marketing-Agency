import image from "../../assets/image.png"

const OurProject = () => {
    return (
        <div className="py-16">
            <div className="text-center space-y-2">
                <h1 className="text-red-500 text-2xl font-bold">Our Project</h1>
                <h1 className="text-3xl font-bold">Why We Are Best</h1>
            </div>
            <div className="md:flex gap-8 justify-between py-12">
                <img className="" src={image} height="200" width="650" alt="" />
                <div className="flex gap-2 flex-col justify-between items-center">
                    <div className="p-10 rounded-md hover:bg-[#FF3147] hover:text-white duration-500 bg-gray-100 space-y-3">
                        <h1 className="font-bold">Genderless Kei – Japan’s Hot</h1>
                        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                    <div className="p-10 rounded-md hover:bg-[#FF3147] hover:text-white duration-500 space-y-3 bg-gray-100">
                        <h1 className="font-bold">Better Strategy & Quality</h1>
                        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                    <div className="p-10 rounded-md hover:bg-[#FF3147] hover:text-white duration-500 bg-gray-100 space-y-3">
                        <h1 className="font-bold">Genderless Kei – Japan’s Hot</h1>
                        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProject;