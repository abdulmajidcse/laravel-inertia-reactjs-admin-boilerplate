import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

export default function Dropdown({ text, href, icon = "" }) {
    return (
        <>
            <li>
                <Link
                    href={href}
                    className="sub-link block mb-1 rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                    <FontAwesomeIcon icon={icon || faCircle} className="mr-2" />
                    {text}
                </Link>
            </li>
        </>
    );
}
