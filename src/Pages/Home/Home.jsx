import Banner from "../../components/Banner/Banner";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Expert from "../../components/Expert/Expert";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";
import OurProject from "../../components/OurProject/OurProject";
import WhatDo from "../../components/WhatDo/WhatDo";


const Home = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto">
                <Banner />
                <WhatDo />
                <ChooseUs />
                <OurProject />
                <Expert />
                <Feedback />
            </div>
            <Footer />
        </div>
    );
};

export default Home;