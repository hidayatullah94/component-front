import React from "react";

import { PaperClipIcon } from "@heroicons/react/20/solid";
export const CardProfil = ({
  name,
  ktp,
  email,
  phone,
  alamat,
  gender,
  klikName,
  klikGen,
  klikKtp,
  klikEmail,
  klikAddres,
  klikPhone,
}) => {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold text-slate-700">
          Detail Informasi Profil
        </h3>
      </div>
      <div className="mt-6 border-t border-slate-300">
        <dl className="divide-y divide-slate-300">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-slate-700">Nama</dt>
            <dd className="mt-1 flex text-sm/6 text-Primary sm:col-span-2 sm:mt-0">
              <span className="grow capitalize">{name}</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                  onClick={klikName}
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-slate-700">
              Jenis Kelamin
            </dt>
            <dd className="mt-1 flex text-sm/6 text-Primary sm:col-span-2 sm:mt-0">
              <span className="grow">{gender}</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                  onClick={klikGen}
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-slate-700">No KTP</dt>
            <dd className="mt-1 flex text-sm/6 text-Primary sm:col-span-2 sm:mt-0">
              <span className="grow">{ktp}</span>
              <span className="ml-4 shrink-0">
                <button
                  onClick={klikKtp}
                  type="button"
                  className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-slate-700">Email</dt>
            <dd className="mt-1 flex text-sm/6 text-Primary sm:col-span-2 sm:mt-0">
              <span className="grow">{email}</span>
              <span className="ml-4 shrink-0">
                <button
                  onClick={klikEmail}
                  type="button"
                  className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-slate-700">
              No Handphone
            </dt>
            <dd className="mt-1 flex text-sm/6 text-Primary sm:col-span-2 sm:mt-0">
              <span className="grow">{phone}</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  onClick={klikPhone}
                  className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-slate-700">Alamat</dt>
            <dd className="mt-1 flex text-sm/6 text-Primary sm:col-span-2 sm:mt-0">
              <span className="grow capitalize">{alamat}</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  onClick={klikAddres}
                  className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-slate-700">Password</dt>
            <dd className="mt-1 flex text-sm/6 text-Primary sm:col-span-2 sm:mt-0">
              <span className="grow">************</span>
              <span className="ml-4 shrink-0">
                <button
                  type="button"
                  className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium text-slate-700">Dokumen</dt>
            <dd className="mt-1 text-sm/6 text-Primary sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-slate-300 rounded-md border border-slate-300"
              >
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      aria-hidden="true"
                      className="size-5 shrink-0 text-gray-500"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-slate-700">
                        NPWP.pdf
                      </span>
                      <span className="shrink-0 text-gray-500">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                    >
                      Update
                    </button>
                    <span aria-hidden="true" className="text-gray-600">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-transparent font-medium text-gray-400 hover:text-slate-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon
                      aria-hidden="true"
                      className="size-5 shrink-0 text-gray-500"
                    />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium text-slate-700">
                        KTP.pdf
                      </span>
                      <span className="shrink-0 text-gray-500">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex shrink-0 space-x-4">
                    <button
                      type="button"
                      className="rounded-md bg-transparent font-medium text-rose-400 hover:text-rose-300"
                    >
                      Update
                    </button>
                    <span aria-hidden="true" className="text-gray-600">
                      |
                    </span>
                    <button
                      type="button"
                      className="rounded-md bg-transparent font-medium text-gray-400 hover:text-slate-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
