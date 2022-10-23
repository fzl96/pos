// import useffect
import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { BsCupFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import FoodData from "../data/FoodData";

const Menus = () => {
  const [activeTab, setActiveTab] = useState<string | null>("foods");

  useEffect(() => {
    document.title = "POS - Menus";
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Menus</h1>
      </div>
      <div className="mt-5">
        <Tabs color="dark" value={activeTab} onTabChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Tab
              value="foods"
              icon={<FaHamburger />}
              className="text-lg font-semibold"
            >
              Foods
            </Tabs.Tab>
            <Tabs.Tab
              value="drinks"
              icon={<BsCupFill />}
              className="text-lg font-semibold"
            >
              Drinks
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="foods" pt="lg">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
              {FoodData.map((item, index) => (
                <div
                  className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md "
                  key={item.id}
                >
                  <img
                    className="rounded-t-lg h-[10rem] w-full object-cover"
                    src={item.image}
                    alt=""
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                      {item.name}
                    </h5>
                    <p className="mb-3 font-normal text-sm text-gray-700">
                      {item.description}
                    </p>
                    <p>
                      <span className="font-bold text-lg text-gray-900">
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="drinks" pt="md">
            Second panel
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
};
export default Menus;
