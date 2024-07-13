import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"

const ChooseUs = () => {
    return (
        <div className="my-16">
            <div className="text-center space-y-2">
                <h1 className="text-red-500 text-xl font-bold">Why Choose Us</h1>
                <h1 className="text-3xl font-bold">Why We Are Best</h1>
            </div>
            <div className="md:flex items-center gap-4 my-10">
                <div className="space-y-5">
                    <img className="w-16" src={one} alt="" />
                    <h1 className="text-xl font-bold">Clarified Vision & Target</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
                <div className="space-y-5">
                    <img className="w-14" src={two} alt="" />
                    <h1 className="text-xl font-bold">High Performance</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
                <div className="space-y-5">
                    <img className="w-14" src={three} alt="" />
                    <h1 className="text-xl font-bold">Maintain Security</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
                <div className="space-y-5">
                    <img className="w-14" src={four} alt="" />
                    <h1 className="text-xl font-bold">Better Strategy & Quality</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                </div>
            </div>

        </div>
    );
};

export default ChooseUs;