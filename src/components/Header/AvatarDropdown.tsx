'use client'

import { Popover, Transition } from '@/app/headlessui'
import { avatarImgs } from '@/contains/fakeData'
import { Fragment } from 'react'
import Avatar from '@/shared/Avatar/Avatar'
import SwitchDarkMode2 from '@/shared/SwitchDarkMode/SwitchDarkMode2'
import Link from 'next/link'

export default function AvatarDropdown() {
    return (
        <div className="AvatarDropdown ">
            <Popover className="relative">
                {({ open, close }) => (
                    <>
                        <Popover.Button
                            className={` h-10 px-4 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center`}
                        >
                            {/* <svg className=" w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                /> 
                            </svg> */}
                            Hızlı İşlemler
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-[260px] px-4 mt-3.5 -right-10 sm:right-0 sm:px-0">
                                <div onMouseLeave={() => close()} className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-neutral-800 py-7 px-6">
                                        {/* ------------------ 1 --------------------- */}
                                        <Link
                                            onClick={() => close()}
                                            href={'/fundamentai/ppk'}
                                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                        >
                                            <p className="text-sm font-medium ">PPK Karşılaştırma</p>
                                        </Link>

                                        {/* ------------------ 2 --------------------- */}
                                        <Link
                                            href={'/fundamentai/currency'}
                                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            onClick={() => close()}
                                        >
                                            <p className="text-sm font-medium ">Günlük Kur İşlemleri</p>
                                        </Link>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}
