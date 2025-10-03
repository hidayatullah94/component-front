import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
export const CardUser = ({
  status,
  image,
  nik,
  username,
  branch,
  role,
  klik,
}) => {
  return (
    <li className="flex justify-between gap-x-6 py-5 relative border rounded shadow px-5 bg-white">
      {status ? (
        <div className="mt-1 flex items-center gap-x-1.5 absolute end-10 top-1">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="size-1.5 rounded-full bg-emerald-500" />
          </div>
        </div>
      ) : (
        <div className="mt-1 flex items-center gap-x-1.5 absolute end-10 top-1">
          <div className="flex-none rounded-full bg-rose-500/20 p-1">
            <div className="size-1.5 rounded-full bg-rose-500" />
          </div>
        </div>
      )}

      <div className="flex min-w-0 gap-x-4">
        <img
          alt=""
          src={image}
          className="size-12 flex-none rounded-full bg-gray-50"
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm/6 font-semibold text-gray-900">{nik}</p>
          <p className="mt-1 flex text-xs/5 text-gray-500 capitalize">
            {username}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-x-6">
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm/6 text-gray-900">{branch}</p>
          <p className="text-sm/6 text-gray-900">{role}</p>
        </div>
        <Menu as="div" className="relative flex-none">
          <MenuButton className="relative block text-gray-500 hover:text-gray-900">
            <span className="absolute -inset-2.5" />
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <MenuItem>
              <button
                className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden cursor-pointer"
                onClick={klik}
              >
                Edit
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </li>
  );
};
