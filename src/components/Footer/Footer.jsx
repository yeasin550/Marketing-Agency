import logos from "../../assets/logos.png"
import huawei from "../../assets/huawei.png"
import metamask from "../../assets/metamask.png"
import disney from "../../assets/disney.png"
import vmware from "../../assets/vmware.png"

const Footer = () => {
    return (
        <div className="bg-gray-200 py-20 text-white flex items-center justify-around border-t-red-500 border">
            <img className="w-16" src={logos} alt="" />
            <img className="w-16" src={huawei} alt="" />
            <img className="w-16" src={disney} alt="" />
            <img className="w-16" src={metamask} alt="" />
            <img className="w-16" src={vmware} alt="" />
        </div>
    );
};

export default Footer;