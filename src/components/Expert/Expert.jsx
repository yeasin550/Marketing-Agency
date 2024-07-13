import heart from "../../assets/heart.png"
import clock from "../../assets/clock.png"
import right from "../../assets/right.png"
import Path from "../../assets/Path.png"
const Expert = () => {
    return (
        <div className="py-16">
            <div className="text-center space-y-2">
                <h1 className="text-red-500 text-xl font-bold">Experts Growth</h1>
                <h1 className="text-3xl font-bold">Our Company Growth</h1>
            </div>
            <div className="md:flex items-center justify-around my-10">
                <div className="text-center shadow-md hover:shadow-xl shadow-gray-300 px-8 py-6 space-y-3">
                    <img  className="w-9 mx-auto" src={heart} alt="1" />
                    <h1 className="text-4xl font-semibold">199 +</h1>
                    <p>Satisfied Customers</p>
                </div>
                <div className="text-center shadow-md hover:shadow-xl shadow-gray-300 px-8 py-6 space-y-3">
                    <img  className="w-9 mx-auto" src={clock} alt="1" />
                    <h1 className="text-4xl font-semibold">1591 +</h1>
                    <p>Days Of Operation</p>
                </div>
                <div className="text-center shadow-md hover:shadow-xl shadow-gray-300 px-8 py-6 space-y-3">
                    <img  className="w-9 mx-auto" src={right} alt="1" />
                    <h1 className="text-4xl font-semibold">283 +</h1>
                    <p>Complete Project</p>
                </div>
                <div className="text-center shadow-md hover:shadow-xl shadow-gray-300 px-8 py-6 space-y-3">
                    <img className="w-9 mx-auto"  src={Path} alt="1" />
                    <h1 className="text-4xl font-semibold">755 +</h1>
                    <p>Winning Awards</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;