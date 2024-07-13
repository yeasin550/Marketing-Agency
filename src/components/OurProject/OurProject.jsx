// import image from "../../assets/image.png"

import { useState } from "react";

const images = [
    { src: 'https://img.freepik.com/free-photo/coworkers-office-with-photo-cameras-computer_329181-12380.jpg?t=st=1720872854~exp=1720876454~hmac=b69f89f3e78b18be33e389e90e213c1354c76068a5a25108dddea303d7d926f0&w=740', title: 'Genderless Kei – Japan’s Hot', description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of' },
    { src: 'https://img.freepik.com/free-photo/medium-shot-people-working-office_23-2149345227.jpg?t=st=1720872485~exp=1720876085~hmac=4821860d90008d185e7b95832d836f450e25058ddab3a47bb83bae942cb8b59f&w=740', title: 'Better Strategy & Quality', description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of' },
    { src: 'https://img.freepik.com/free-photo/colleagues-reading-together-medium-shot_23-2149345279.jpg?t=st=1720870682~exp=1720874282~hmac=3b5dd3604bcf5262c9412e46b110c8ef6512750ab4d117fb619e579034fe3c8d&w=826', title: 'Genderless Kei – Japan’s Hot', description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of' }
];



const OurProject = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleImageChange = (image, index) => {
        setCurrentImage(image);
        setActiveIndex(index);
    };
    return (
        <div className="py-16">
            <div className="text-center space-y-2">
                <h1 className="text-red-500 text-2xl font-bold">Our Project</h1>
                <h1 className="text-3xl font-bold">Why We Are Best</h1>
            </div>
            <div className="md:flex gap-8 justify-between py-12">
                <img src={currentImage.src} height="200" width="650" alt="" />
                <div className="flex gap-2 flex-col justify-between items-center">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`p-10 rounded-md duration-500 space-y-3 cursor-pointer ${activeIndex === index ? 'bg-[#FF3147] text-white' : 'bg-gray-100  '}`}
                            onClick={() => handleImageChange(image, index)}
                        >
                            <h1 className="font-bold">{image.title}</h1>
                            <p>{image.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProject;