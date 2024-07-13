import hero from "../../assets/hero.png"


const Banner = () => {
    return (
        <div className="md:flex items-center gap-5 py-12">
            <div className="space-y-12 md:w-3/5">
                <h2 className="text-2xl mb-2 text-red-500 font-semibold">Award Winning</h2>
                <h1 className="text-5xl font-bold mb-2">Digital Marketing Agency</h1>
                <p className="text-lg mb-4">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Contact Us</button>
            </div>
            <div className="md:w-2/5">
                <img src={hero} className="h-[600px]" alt="coming soon" />
            </div>
        </div>
    );
};

export default Banner;