
import { Badge } from "flowbite-react";
import { Table } from "flowbite-react";

import product1 from "/src/assets/images/products/dash-prd-1.jpg";
import product2 from "/src/assets/images/products/dash-prd-2.jpg";
import product3 from "/src/assets/images/products/dash-prd-3.jpg";
import product4 from "/src/assets/images/products/dash-prd-4.jpg";
import SimpleBar from "simplebar-react";


const ProductRevenue = () => {
  const ProductTableData = [
    {
      img: product1,
      name: "Minecraf App",
      seller: "Jason Roy",
      process: "73.2%",
      statuscolor: "text-success",
      statusbg: "bg-lightsuccess",
      statustext: "Low",
    },
    {
      img: product2,
      name: "Web App Project",
      seller: "Mathew Flintoff",
      process: "73.2%",
      statuscolor: "text-warning",
      statusbg: "bg-lightwarning",
      statustext: "Medium",
    },
    {
      img: product3,
      name: "Modernize Dashboard",
      seller: "Anil Kumar",
      process: "73.2%",
      statuscolor: "text-secondary",
      statusbg: "bg-lightsecondary",
      statustext: "Very High",
    },
    {
      img: product4,
      name: "Dashboard Co",
      seller: "George Cruize",
      process: "73.2%",
      statuscolor: "text-error",
      statusbg: "bg-lighterror",
      statustext: "High",
    },
  ];

  return (
    <>
      <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray pt-6 px-0 relative w-full break-words">
        <div className="px-6">
          <h5 className="card-title mb-6">Revenue by Product</h5>
        </div>
        <SimpleBar className="max-h-[450px]">
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="p-6">Assigned</Table.HeadCell>
                <Table.HeadCell>Progress</Table.HeadCell>
                <Table.HeadCell>Priority</Table.HeadCell>
                <Table.HeadCell>Budget</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                {ProductTableData.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap ps-6">
                      <div className="flex gap-3 items-center">
                        <img
                          src={item.img}
                          alt="icon"
                          className="h-[60px] w-[60px] rounded-md"
                        />
                        <div className="truncat line-clamp-2 sm:text-wrap max-w-56">
                          <h6 className="text-sm">{item.name}</h6>
                          <p className="text-xs ">{item.seller}</p>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="me-5">
                        <p className="text-base">{item.process}</p>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge className={`${item.statusbg} ${item.statuscolor}`}>
                        {item.statustext}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <h4>$3.5k</h4>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </SimpleBar>
      </div>
    </>
  );
};

export default ProductRevenue;
