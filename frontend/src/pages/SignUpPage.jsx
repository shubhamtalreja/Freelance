import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage =() =>{
    const [userRole, setUserRole] = useState("Buyer");
    const naviagte = useNavigate();
    return (
        <>
      <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                       Signup
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                    <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    // required
                                    // onChange={(e)=>setUserEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    // required
                                    autoComplete="email"
                                    onChange={(e)=>setUserEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            </div>
                            <div>
                                <label htmlFor="services" className="block text-sm font-medium leading-6 text-gray-900">
                                    Role:
                                </label>
                                <div className="mt-2">
                                    <Menu as="div" className="relative inline-block text-left w-full" value={userRole} onChange={(e)=>{setUserRole(e.target.value)}}>
                                        <div>
                                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                                Options
                                                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                        >
                                            <div className="py-1">
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                    >
                                                        Buyer
                                                    </a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                    >
                                                        Seller
                                                    </a>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="services" className="block text-sm font-medium leading-6 text-gray-900">
                                    Services:
                                </label>
                                <div className="mt-2">
                                    <Menu as="div" className="relative inline-block text-left w-full">
                                        <div>
                                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                                Options
                                                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                        >
                                            <div className="py-1">
                                                <MenuItem>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                    >
                                                        IT
                                                    </a>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
            

                            <div>
                                <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        already a member?{' '}
                        <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login In
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default SignUpPage;