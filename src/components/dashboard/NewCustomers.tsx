
import { Progress } from "flowbite-react";
import { Icon } from "@iconify/react";

const NewCustomers = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-lightsecondary text-secondary p-3 rounded-md">
            <Icon icon="solar:football-outline" height={24} />
          </div>
          <p className="text-lg text-dark font-semibold">New Customers</p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-dark">New goals</p>
          <p className="text-sm text-dark">83%</p>
        </div>
        <Progress progress={83} color="secondary" />
      </div>
    </>
  );
};

export default NewCustomers;
