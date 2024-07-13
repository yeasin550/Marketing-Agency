import one from '../../assets/1.png'
import two from '../../assets/2.png'
import three from '../../assets/3.png'
import icon from '../../assets/icon.png'
import red from '../../assets/red.png'
import black from '../../assets/black.png'

const WhatDo = () => {
    return (
        <div className="my-12 py-12">
            <h1 className="text-xl mb-2 font-semibold text-red-500">WHAT WE DO</h1>
            <div className="md:flex justify-between items-center gap-20 my-8">
                <h1 className="w-4/12 text-4xl font-bold">Services Provide for You</h1>
                <p className="w-9/12 text-lg">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
            </div>
            <div className="md:flex items-center justify-between gap-3">
                <img className="md:w-64 rounded-md" src={one} alt="" />
                <img className="md:w-64 rounded-md" src={two} alt="" />
                <div className="md:w-64 rounded-md bg-[#FF3147] text-center px-3 h-full py-20 text-white space-y-4">
                    <img className="w-12 rounded-md mx-auto" src={icon} alt="" />
                    <h1 className="text-lg font-semibold">Web Development</h1>
                    <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh.</p>
                    
                    <button className="bg-white text-red-500 text-sm font-semibold px-4 py-2 mt-2">READ MORE</button>
                </div>
                <img className="md:w-64 rounded-md" src={three} alt="" />
            </div>
            <div className="flex gap-3 my-4 items-center">
                <img src={red} alt="" />
                <img className="w-1 h-1 rounded-full" src={black} alt="" />
                <img className="w-1 h-1 rounded-full" src={black} alt="" />
            </div>
        </div>
    );
};

export default WhatDo;