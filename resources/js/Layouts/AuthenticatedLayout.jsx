import { useState } from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faHome,
    faCircleChevronDown,
    faLayerGroup,
    faGrip,
    faPager,
} from "@fortawesome/free-solid-svg-icons";
import { DarkThemeToggle, Flowbite, Tooltip } from "flowbite-react";
import SidebarDropdown from "@/Components/Sidebar/SidebarDropdown";
import SidebarMenu from "@/Components/Sidebar/SidebarMenu";

export default function Authenticated({ auth, header, children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <Flowbite
            theme={{
                theme: {
                    darkThemeToggle: {
                        base: "inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                        icon: "text-xl",
                    },
                },
            }}
        >
            <div className="dark:bg-slate-800 dark:highlight-white/5 dark:text-slate-400 min-h-screen">
                <header className="p-4 text-base border-b border-slate-900/10 dark:border-slate-300/10 sticky top-0 z-40 w-full flex-none bg-white/95 dark:bg-slate-800 backdrop-blur">
                    {/* navbar */}
                    <nav className="flex justify-between mx-1">
                        {/* brand */}
                        <Link
                            href={route("dashboard")}
                            className="flex items-center"
                        >
                            {/* an example to use logo */}
                            {/* <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            class="mr-2 h-7"
                            alt="Logo"
                            title="Logo"
                        /> */}
                            <FontAwesomeIcon
                                icon={faLayerGroup}
                                className="text-2xl mr-2 text-blue-800"
                            />
                            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white hidden sm:inline-block">
                                Tailwind Admin
                            </span>
                        </Link>
                        {/* menu wrapper for mobile menu */}
                        <div className="flex justify-between lg:w-[calc(100%-15rem)]">
                            <ul className="flex space-x-1">
                                <li>
                                    <Tooltip content="Sidebar Menu">
                                        <button
                                            type="button"
                                            className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            onClick={() =>
                                                setSidebarOpen(
                                                    (state) => !state
                                                )
                                            }
                                        >
                                            <FontAwesomeIcon icon={faBars} />
                                        </button>
                                    </Tooltip>
                                </li>
                                <li>
                                    <Tooltip content="Visit Site">
                                        <Link
                                            href="/"
                                            className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        >
                                            <FontAwesomeIcon icon={faHome} />
                                        </Link>
                                    </Tooltip>
                                </li>
                                <li>
                                    <DarkThemeToggle />
                                </li>
                                {/* mobile menu toggle button */}
                                <li className="lg:hidden">
                                    <button
                                        type="button"
                                        className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        onClick={() =>
                                            setMobileMenuOpen((state) => !state)
                                        }
                                    >
                                        <FontAwesomeIcon
                                            icon={faCircleChevronDown}
                                        />
                                    </button>
                                </li>
                            </ul>
                            {/* mobile menu display blur wrapper */}
                            <div
                                className={`min-h-screen w-full fixed top-0 left-0 z-20 lg:hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 ${
                                    !mobileMenuOpen && "hidden"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            />
                            {/* main header menu */}
                            <ul
                                className={`lg:flex ${
                                    mobileMenuOpen
                                        ? "fixed lg:relative top-4 lg:top-0 right-4 lg:right-0 z-50 bg-white lg:bg-inherit p-6 lg:p-0 shadow-lg lg:shadow-none rounded-lg lg:rounded-none dark:bg-slate-800 dark:highlight-white/5 dark:text-slate-400"
                                        : "hidden"
                                }`}
                            >
                                <li>
                                    <button
                                        id="dropdownNotificationButton"
                                        data-dropdown-toggle="dropdownNotification"
                                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button"
                                    >
                                        <i className="fa-solid fa-bell text-base" />
                                        <div className="flex relative">
                                            <div className="inline-flex relative -top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900" />
                                        </div>
                                        Notifications
                                        <i className="fa-solid fa-chevron-down text-xs ml-1" />
                                    </button>
                                    {/* Dropdown menu */}
                                    <div
                                        id="dropdownNotification"
                                        className="hidden z-20 w-full max-w-sm bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-800 dark:divide-gray-700 max-h-[calc(100vh-100%)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-400"
                                        aria-labelledby="dropdownNotificationButton"
                                    >
                                        <div className="block py-2 px-4 font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white">
                                            Notifications
                                        </div>
                                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                                            <a
                                                href="#"
                                                className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-11 h-11 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                                        alt="Jese image"
                                                    />
                                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="pl-3 w-full">
                                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                                        New message from
                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                            Jese Leos
                                                        </span>
                                                        : "Hey, what's up? All
                                                        set for the
                                                        presentation?"
                                                    </div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">
                                                        a few moments ago
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-11 h-11 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                                        alt="Joseph image"
                                                    />
                                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-800">
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="pl-3 w-full">
                                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                            Joseph Mcfall
                                                        </span>
                                                        and
                                                        <span className="font-medium text-gray-900 dark:text-white">
                                                            5 others
                                                        </span>
                                                        started following you.
                                                    </div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">
                                                        10 minutes ago
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-11 h-11 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                                        alt="Bonnie image"
                                                    />
                                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-800">
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="pl-3 w-full">
                                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                            Bonnie Green
                                                        </span>
                                                        and
                                                        <span className="font-medium text-gray-900 dark:text-white">
                                                            141 others
                                                        </span>
                                                        love your story. See it
                                                        and view more stories.
                                                    </div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">
                                                        44 minutes ago
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-11 h-11 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                                        alt="Leslie image"
                                                    />
                                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-800">
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="pl-3 w-full">
                                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                            Leslie Livingston
                                                        </span>
                                                        mentioned you in a
                                                        comment:
                                                        <span
                                                            className="font-medium text-blue-500"
                                                            href="#"
                                                        >
                                                            @bonnie.green
                                                        </span>
                                                        what do you say?
                                                    </div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">
                                                        1 hour ago
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="w-11 h-11 rounded-full"
                                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                                        alt="Robert image"
                                                    />
                                                    <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-800">
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            aria-hidden="true"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="pl-3 w-full">
                                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                            Robert Brown
                                                        </span>
                                                        posted a new video:
                                                        Glassmorphism - learn
                                                        how to implement the new
                                                        design trend.
                                                    </div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-500">
                                                        3 hours ago
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a
                                            href="#"
                                            className="block py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                                        >
                                            <div className="inline-flex items-center">
                                                <svg
                                                    className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                                                    aria-hidden="true"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                View all
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <button
                                        id="dropdownAvatarNameButton"
                                        data-dropdown-toggle="dropdownAvatarName"
                                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button"
                                    >
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        {/* <img
              class="mr-2 w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            /> */}
                                        <i className="fa-solid fa-user-circle text-base mr-2" />
                                        Bonnie Green
                                        <i className="fa-solid fa-chevron-down text-xs ml-1" />
                                    </button>
                                    {/* Dropdown menu */}
                                    <div
                                        id="dropdownAvatarName"
                                        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                    >
                                        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
                                            <div className="font-medium">
                                                Member
                                            </div>
                                            <div className="truncate">
                                                name@example.com
                                            </div>
                                        </div>
                                        <ul
                                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    <i className="fas fa-user" />
                                                    <span className="ml-2">
                                                        Profile
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    <i className="fas fa-lock" />
                                                    <span className="ml-2">
                                                        Change Password
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a
                                                href="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                <i className="fas fa-sign-out" />
                                                <span className="ml-2">
                                                    Log Out
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 bg-slate-50 dark:bg-inherit">
                    {/* mobile menu display blur wrapper in sidebar */}
                    <div
                        className={`min-h-screen w-full fixed top-0 left-0 z-20 lg:hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 ${
                            !sidebarOpen && "hidden"
                        }`}
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div
                        className={`fixed z-20 inset-0 top-[3.8125rem] right-auto w-[17rem] pb-10 px-4 overflow-y-auto bg-white dark:bg-inherit border-r border-slate-900/10 dark:border-slate-300/10 shadow-2xl transition-all duration-300 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-400 ${
                            sidebarOpen ? "lg:left-0" : "-left-[20rem]"
                        }`}
                    >
                        <aside className="lg:text-sm lg:leading-6 relative mt-8 ta-sidebar">
                            <ul className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base">
                                <li className="mb-1">
                                    <Link
                                        href={route("dashboard")}
                                        className="top-link active flex items-center lg:leading-6 text-base rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                                    >
                                        <div className="mr-2 shadow-sm dark:highlight-white/10">
                                            <FontAwesomeIcon
                                                icon={faGrip}
                                                className="text-lg"
                                            />
                                        </div>
                                        Dashboard
                                    </Link>
                                </li>
                                <SidebarDropdown text="Category" icon={faPager}>
                                    <SidebarMenu
                                        text="Add New"
                                        href={route("dashboard")}
                                    />
                                </SidebarDropdown>
                            </ul>
                        </aside>
                    </div>
                    <div
                        className={`transition-all duration-300 ${
                            sidebarOpen && "lg:pl-[17rem]"
                        }`}
                    >
                        <main className="pt-5 min-h-[calc(100vh-13rem)]">
                            {children}
                        </main>
                        <footer className="bg-white dark:bg-gray-900/30 shadow-lg mt-5">
                            <div className="px-3 pt-2 pb-8">
                                <hr className="mt-3 mb-10 border-gray-200 dark:border-gray-700" />
                                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                                    <p className="text-sm text-gray-400">
                                        © Copyright 2022. All Rights Reserved.
                                    </p>
                                    <div className="flex mt-3 -mx-2 sm:mt-0">
                                        <p className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300">
                                            <span className="font-bold">
                                                Version
                                            </span>{" "}
                                            1.0.0
                                        </p>
                                        {/* <a
              href="#"
              class="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Teams
            </a>
            <a
              href="#"
              class="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Privacy
            </a>
            <a
              href="#"
              class="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              Cookies
            </a> */}
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </Flowbite>
    );
}
