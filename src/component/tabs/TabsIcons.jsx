import React, { Fragment } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";

export const TabsIcons = ({ idx, tabs, change, selec }) => {
  //   const navigate = useNavigate();
  const filteredTabs = tabs.filter((tab) => {
    // kalau tidak ada allowRoles, berarti semua boleh akses
    if (!tab.allowRoles) return true;
    // kalau ada allowRoles, cek apakah user punya salah satu role yang dibutuhkan
    return tab.allowRoles.some((role) => Roles.includes(role));
  });
  return (
    <div className="border-b border-gray-200 ">
      <nav aria-label="Tabs">
        <TabGroup selectedIndex={selec} onChange={change} defaultIndex={idx}>
          <TabList
            className={"flex justify-start flex-wrap md:flex-nowrap flex-row "}
          >
            {filteredTabs.map((tab, idx) => (
              <Tab as={Fragment} key={idx}>
                {({ selected }) => (
                  <button
                    onClick={() => navigate(tab.href)}
                    className={classNames(
                      selected
                        ? "border-Third text-Primary font-semibold"
                        : "border-transparent text-gray-500 hover:border-Primary hover:text-Primary group",
                      "w-1/3 max-w-sm border-b-2 py-3 px-1 text-center text-sm flex justify-center items-center gap-2 outline-none group/item:"
                    )}
                  >
                    <p className="truncate">{tab.name}</p>
                    <tab.icon
                      aria-hidden="true"
                      className={classNames(
                        selected
                          ? "text-Primary font-semibold"
                          : "text-gray-400 hover:text-Primary",
                        "-ml-0.5 mr-2 h-5 w-5 :"
                      )}
                    />
                  </button>
                )}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </nav>
    </div>
  );
};
