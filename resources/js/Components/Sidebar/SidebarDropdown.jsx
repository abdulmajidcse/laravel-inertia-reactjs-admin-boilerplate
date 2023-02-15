import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faFileLines } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({ text, icon, children }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <li className="mb-1">
                <a
                    href="#"
                    className={`sub-link flex items-center lg:leading-6 relative rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 ${
                        dropdownOpen && "active"
                    }`}
                    onClick={() => setDropdownOpen((state) => !state)}
                >
                    <div className="mr-2 shadow-sm dark:highlight-white/10">
                        <FontAwesomeIcon icon={icon} className="text-lg" />
                    </div>
                    {text}
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className={`absolute right-2 ${
                            dropdownOpen && "-rotate-90"
                        }`}
                    />
                </a>
                {/* dropdown menu */}

                <ul className={`my-1 ${!dropdownOpen && "hidden"}`}>
                    {children}
                </ul>
            </li>
        </>
    );
}
