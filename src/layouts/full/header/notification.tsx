import { Badge, Dropdown } from "flowbite-react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";
import user1 from "/src/assets/images/profile/user-1.jpg";
import user2 from "/src/assets/images/profile/user-2.jpg";
import user3 from "/src/assets/images/profile/user-3.jpg";
import user4 from "/src/assets/images/profile/user-4.jpg";

const Notifications = [
    {
        id:1,
        title:"Received Order from John Doe of $385.90",
        user:user1
    },
    {
        id:2,
        title:"Received Order from Jessica Williams of $249.99",
        user:user2
    },
    {
        id:3,
        title:"Received Order from John Edison of $499.99",
        user:user3
    },
    {
        id:4,
        title:"Received message from Nitin Chohan",
        user:user4
    },
]

const Notification = () => {
    return (
        <div className="relative group/menu">
            <Dropdown label="" className="rounded-sm w-[300px] notification" dismissOnClick={false} renderTrigger={() => (
                <span
                    className="h-10 w-10 hover:text-primary group-hover/menu:bg-lightprimary group-hover/menu:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer relative"
                    aria-label="Notifications"
                >
                    <Icon icon="solar:bell-linear" height={20} />
                    <Badge className="h-2 w-2 rounded-full absolute end-2 top-1 bg-primary p-0" />
                </span>
            )}
            >
                {
                    Notifications.map((item) => (
                        <Dropdown.Item as={Link} key={item.id} to="#" className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark hover:bg-gray-100">
                        <div className="flex items-center gap-5">
                            <div>
                                <img
                                    src={item.user}
                                    alt="user"
                                    width={40}
                                    height={40}
                                    className="rounded-full shrink-0"
                                />
                            </div>
                            <p className="text-dark opacity-80 text-[13px] font-semibold">{item.title}</p>
                        </div>
                    </Dropdown.Item>
                    ))
                }
            </Dropdown>
        </div>
    );
};

export default Notification;
