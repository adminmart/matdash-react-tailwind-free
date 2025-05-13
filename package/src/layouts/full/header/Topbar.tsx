import { Icon } from "@iconify/react/dist/iconify.js";
import adminmart_logo from "/src/assets/images/logos/logo-adminmart.svg";
import { Link } from "react-router";
import { Dropdown } from "flowbite-react/components/Dropdown";

import img1 from "src/assets/images/svgs/react-cat-icon.svg";
import img2 from "src/assets/images/svgs/angular-cat-icon.svg";
import img3 from "src/assets/images/svgs/vue-cat-icon.svg";
import img4 from "src/assets/images/svgs/nuxt-cat-icon.svg";
import img5 from "src/assets/images/svgs/next-cat-icon.svg";
import img6 from "src/assets/images/svgs/bt-cat-icon.svg";


const Topbar = () => {
    const dropdownItems = [
        {
            id: 1,
            img: img1,
            title: "React Version",
            href: "https://adminmart.com/product/matdash-tailwind-react-admin-template/?ref=56#product-demo-section"
        },
        {
            id: 2,
            img: img2,
            title: "Angular Version",
            href: "https://adminmart.com/product/matdash-material-angular-dashboard-template/?ref=56#product-demo-section"
        },
        {
            id: 3,
            img: img3,
            title: "Vuejs Version",
            href: "https://adminmart.com/product/matdash-vuejs-admin-dashboard/?ref=56#product-demo-section"
        },
        {
            id: 4,
            img: img4,
            title: "Nuxtjs Version",
            href: "https://adminmart.com/product/matdash-vuetify-nuxt-js-admin-template/?ref=56#product-demo-section"
        },
        {
            id: 5,
            img: img5,
            title: "NextJs Version",
            href: "https://adminmart.com/product/matdash-next-js-admin-dashboard-template/?ref=56#product-demo-section"
        },

        {
            id: 6,
            img: img6,
            title: "Bootstrap Version",
            href: "https://adminmart.com/product/matdash-bootstrap-5-admin-dashboard-template/?ref=56#product-demo-section"
        },

    ]
    return (
        <div className="py-[15px] px-6 z-40 sticky top-0 bg-[linear-gradient(90deg,_#001138_0%,_#001e66_100%)]">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="md:flex hidden items-center gap-5">
                    <Link target="_black" to="https://adminmart.com/">
                        <img src={adminmart_logo} alt="logo" width={150} />
                    </Link>
                    <div className="xl:flex items-center gap-4 pl-5 border-l border-opacity-20 border-white hidden">
                        <Link target="_black" to="https://adminmart.com/templates/react/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#5d87ff]">
                            <Icon icon="solar:window-frame-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#5d87ff]">Templates</h4>
                        </Link>
                        <Link target="_black" to="https://adminmart.com/support/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#5d87ff]">
                            <Icon icon="solar:question-circle-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#5d87ff]">Help</h4>
                        </Link>
                        <Link target="_black" to="https://adminmart.com/hire-us/" className="flex items-center gap-2 text-white bg-transparent hover:text-[#5d87ff]">
                            <Icon icon="solar:case-round-linear" width={20} />
                            <h4 className="text-base font-normal leading-none text-white hover:text-[#5d87ff]">Hire Us</h4>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                    <h4 className="text-sm font-semibold text-white uppercase bg-[linear-gradient(90deg,_#FFFFFF_0%,_#3772ff_100%)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]">Checkout Pro Version</h4>
                    <div className="flex flex-col sm:flex-row items-center gap-[10px]">
                        <div className="flex items-center gap-[10px]">
                            <div className="live-preview-drop !rounded-[4px] border border-[#ffffff66] border-1 hover:bg-[#3772ff]">
                                <Dropdown label={
                                    <p className="text-base text-white font-normal">Live Preview</p>
                                } color="" size="sm" className="py-3 px-4 text-white" >
                                    {
                                        dropdownItems.map((item) => {
                                            return (
                                                <Dropdown.Item to={item.href} key={item.id} className="flex items-center gap-3 text-base text-[#000c29] py-3 px-[18px] group rounded-[4px] hover:bg-[#000c290d] hover:text-[#000c29]" as={Link} href={item.href} target='_blank' icon={() =>
                                                    <img src={item.img} width={18} alt="logo" />}>
                                                    <span className="group-hover:text-[#000c29]" >{item.title}</span>
                                                </Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown>
                            </div>
                            <Link target="_black" to="https://adminmart.com/product/matdash-tailwind-react-admin-template/?ref=56" className="flex items-center px-4 py-[11px] rounded-[4px] gap-2 text-white bg-[#3772ff] hover:bg-[#5d87ff]">
                                <Icon icon="solar:crown-linear" width={18} />
                                <h4 className="text-base font-normal leading-none text-white">Get Pro</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar