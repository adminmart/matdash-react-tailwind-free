import { Badge, Dropdown } from "flowbite-react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";
import user1 from "/src/assets/images/profile/user-1.jpg";
import user2 from "/src/assets/images/profile/user-2.jpg";
import user3 from "/src/assets/images/profile/user-3.jpg";
import user4 from "/src/assets/images/profile/user-4.jpg";

const Notification = () => {
    return (
        <div className="relative group/menu">
            <Dropdown label="" className="rounded-sm w-44 notification" dismissOnClick={false} renderTrigger={() => (
                <span
                    className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer relative"
                    aria-label="Notifications"
                >
                    <Icon icon="solar:bell-linear" height={20} />
                    <Badge className="h-2 w-2 rounded-full absolute end-2 top-1 bg-primary p-0" />
                </span>
            )}
            >
                <Dropdown.Item as={Link} to="#" className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark hover:bg-gray-100">
                    <div className="flex items-center gap-5">
                        <div>
                            <img
                                src={user1}
                                alt="user"
                                width={35}
                                height={35}
                                className="rounded-full"
                            />
                        </div>
                        <p className="text-black text-sm font-semibold">Received Order from John Doe of $385.90</p>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark hover:bg-gray-100">
                    <div className="flex items-center gap-5">
                        <div>
                            <img
                                src={user2}
                                alt="user"
                                width={35}
                                height={35}
                                className="rounded-full"
                            />
                        </div>
                        <p className="text-black text-sm font-semibold">Received Order from Jessica Williams of $249.99</p>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark hover:bg-gray-100">
                    <div className="flex items-center gap-5">
                        <div>
                            <img
                                src={user3}
                                alt="user"
                                width={35}
                                height={35}
                                className="rounded-full"
                            />
                        </div>
                        <p className="text-black text-sm font-semibold">Received Order from John Edison of $499.99</p>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark hover:bg-gray-100">
                    <div className="flex items-center gap-5">
                        <div>
                            <img
                                src={user4}
                                alt="user"
                                width={35}
                                height={35}
                                className="rounded-full"
                            />
                        </div>
                        <p className="text-black text-sm font-semibold">Received message from Nitin Chohan</p>
                    </div>
                </Dropdown.Item>
                <div className="">
                </div>
            </Dropdown>
        </div>
    );
};

export default Notification;
