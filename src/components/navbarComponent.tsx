import type React from "react"
import { useState, useEffect } from "react"
import { FiHome, FiUser, FiFolder, FiBookOpen, FiMail, FiLogIn, FiUserPlus, FiSun, FiMoon, FiMenu, FiX, FiBarChart2, FiDatabase, FiTrendingUp, FiFileText, FiZap, FiStar } from "react-icons/fi"
import {cloudinaryConstants} from "../constants/cloudinaryConstants.tsx";
import {businessConstants} from "../constants/businessConstants.tsx";
import {useAppDispatch, useAppSelector} from "../redux/hook/hook.tsx";
import {selectTheme, toggleDarkLightTheme} from "../redux/features/darkLightTheme/darkLightThemeSlice.tsx";



interface NavItem {
    label: string
    href: string
    icon?: React.ReactNode
    children?: NavItem[]
}



const NavbarComponent: React.FC = () => {


    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState<boolean>(false)

    const darkMode = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();


    const toggleDarkMode = () => {
        dispatch(toggleDarkLightTheme())
    }


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    const publicNavItems: NavItem[] = [
        { label: "Home", href: "/", icon: <FiHome /> },
        { label: "About", href: "/about", icon: <FiUser /> },
        {
            label: "Services",
            href: "/services",
            icon: <FiBarChart2 />,
            children: [
                { label: "Strategy Analysis", href: "/services/strategy", icon: <FiTrendingUp /> },
                { label: "Data Cleanup", href: "/services/cleanup", icon: <FiDatabase /> },
                { label: "Power BI Dashboards", href: "/services/powerbi", icon: <FiBarChart2 /> },
                { label: "Reporting Solutions", href: "/services/reporting", icon: <FiFileText /> },
            ],
        },
        { label: "Portfolio", href: "/portfolio", icon: <FiFolder /> },
        { label: "Blog", href: "/blog", icon: <FiBookOpen /> },
        { label: "Contact", href: "/contact", icon: <FiMail /> },
    ]


    const authItems: NavItem[] = [
        { label: "Sign In", href: "/signin", icon: <FiLogIn /> },
        { label: "Sign Up", href: "/signup", icon: <FiUserPlus /> },
    ]


    const toggleMobileMenu = (): void => {
        setMobileMenuOpen(!mobileMenuOpen)
    }


    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 pt-8 ${
                    scrolled
                        ? darkMode
                            ? "bg-gray-900/95 backdrop-blur-2xl border-b border-gray-800/50 shadow-2xl shadow-blue-500/10"
                            : "bg-white/95 backdrop-blur-2xl border-b border-gray-200/50 shadow-2xl shadow-blue-500/10"
                        : darkMode
                            ? "bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/30"
                            : "bg-white/90 backdrop-blur-xl border-b border-gray-200/30"
                }`}
            >
                <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex items-center justify-between h-16 border-b border-gray-200/10 dark:border-gray-800/20">
                        <div className="flex items-center space-x-4 cursor-pointer group">
                            <img
                                src={
                                    darkMode
                                        ? cloudinaryConstants?.nav_logo_dark
                                        : cloudinaryConstants?.nav_logo_light
                                }
                                alt="Datara Cloud Logo"
                                className="h-32 w-auto object-contain group-hover:scale-110" // Removed transition-transform duration-300
                            />
                            <div className="hidden sm:block">
                                <span
                                    className={`text-xl font-bold bg-gradient-to-r ${
                                        darkMode ? "from-blue-400 via-purple-400 to-blue-300" : "from-blue-600 via-purple-600 to-blue-500"
                                    } bg-clip-text text-transparent`} // Removed transition-all duration-300
                                >
                                    {businessConstants.name}
                                </span>
                                <div
                                    className={`text-xs font-medium tracking-wider uppercase ${
                                        darkMode ? "text-gray-400" : "text-gray-600"
                                    }`}
                                >
                                    {businessConstants?.slogan}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-1">
                            {/* Main Navigation Items */}
                            <div className="hidden lg:flex items-center space-x-1">
                                {publicNavItems?.map((item, index) => (
                                    <div key={index} className="relative group">
                                        <a
                                            href={item.href}
                                            className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-xl font-medium text-sm tracking-wide ${
                                                // Removed transition-all duration-300
                                                darkMode
                                                    ? "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20"
                                                    : "text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20"
                                            } hover:scale-105 active:scale-95`}
                                        >
                                            {item.icon && (
                                                <span
                                                    className={`${
                                                        // Removed transition-all duration-300
                                                        darkMode
                                                            ? "text-blue-400 group-hover:text-purple-400"
                                                            : "text-blue-600 group-hover:text-purple-600"
                                                    }`}
                                                >
                                                    {item.icon}
                                                </span>
                                            )}
                                            <span>{item.label}</span>
                                        </a>

                                        {/* Dropdown for Services */}
                                        {item.children && (
                                            <div
                                                className={`absolute top-full left-0 w-72 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50 ${
                                                    darkMode
                                                        ? "bg-gray-900/95 backdrop-blur-2xl border border-gray-800/50"
                                                        : "bg-white/95 backdrop-blur-2xl border border-gray-200/50"
                                                }`}
                                            >
                                                <div className="p-3">
                                                    {item.children.map((child, childIndex) => (
                                                        <a
                                                            key={childIndex}
                                                            href={child.href}
                                                            className={`flex items-center space-x-3 px-3 py-2 rounded-xl cursor-pointer ${
                                                                darkMode
                                                                    ? "text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white"
                                                                    : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-gray-900"
                                                            }`}
                                                        >
                                                            {child.icon && (
                                                                <span className={darkMode ? "text-blue-400" : "text-blue-600"}>{child.icon}</span>
                                                            )}
                                                            <span className="font-medium text-sm">{child.label}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={toggleDarkMode}
                                className={`p-2.5 rounded-xl cursor-pointer ml-2 ${
                                    darkMode
                                        ? "bg-gray-800/50 hover:bg-gray-700/50 text-blue-400 hover:text-purple-400 border border-gray-800/50"
                                        : "bg-gray-100/50 hover:bg-gray-200/50 text-blue-600 hover:text-purple-600 border border-gray-200/50"
                                } hover:scale-110 active:scale-95`}
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={toggleMobileMenu}
                                className={`lg:hidden p-2.5 rounded-xl cursor-pointer ml-2 ${
                                    darkMode
                                        ? "bg-gray-800/50 hover:bg-gray-700/50 text-blue-400 hover:text-purple-400 border border-gray-800/50"
                                        : "bg-gray-100/50 hover:bg-gray-200/50 text-blue-600 hover:text-purple-600 border border-gray-200/50"
                                } hover:scale-110 active:scale-95`}
                                aria-label="Toggle mobile menu"
                            >
                                {mobileMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Second Line: CTA and Auth Buttons */}
                    <div className="hidden lg:flex items-center justify-end h-14 space-x-3">
                        <a
                            href="/consultation"
                            className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide cursor-pointer ${
                                darkMode
                                    ? "bg-gradient-to-r from-purple-400 to-blue-400 text-gray-900 hover:from-purple-300 hover:to-blue-300 shadow-lg shadow-purple-400/30"
                                    : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-400 hover:to-blue-500 shadow-lg shadow-purple-500/30"
                            } hover:scale-105 active:scale-95`}
                        >
                            <FiZap className="h-4 w-4" />
                            <span>Free Consultation</span>
                        </a>

                        {authItems?.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-semibold text-sm tracking-wide cursor-pointer bg-gradient-to-r ${
                                    darkMode
                                        ? "from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400 shadow-lg shadow-blue-500/30"
                                        : "from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/30"
                                } hover:scale-105 active:scale-95`}
                            >
                                {item.icon && <span className="text-current">{item.icon}</span>}
                                <span>{item.label}</span>
                                {item.label === "Sign Up" && <FiStar className="h-3 w-3" />}
                            </a>
                        ))}
                    </div>

                    {mobileMenuOpen && (
                        <div
                            className={`lg:hidden border-t backdrop-blur-2xl ${
                                darkMode ? "border-gray-800/30 bg-gray-900/95" : "border-gray-200/30 bg-white/95"
                            }`}
                        >
                            <div className="px-4 pt-4 pb-6 space-y-2">
                                {publicNavItems?.map((item, index) => (
                                    <div key={index}>
                                        <a
                                            href={item.href}
                                            className={`flex items-center space-x-4 px-4 py-3 rounded-2xl cursor-pointer ${
                                                darkMode
                                                    ? "text-gray-300 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white"
                                                    : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-gray-900"
                                            } hover:scale-105 active:scale-95`}
                                        >
                                            {item.icon && (
                                                <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>{item.icon}</span>
                                            )}
                                            <span className="font-medium">{item.label}</span>
                                        </a>

                                        {item.children && (
                                            <div className="ml-8 mt-2 space-y-1">
                                                {item.children.map((child, childIndex) => (
                                                    <a
                                                        key={childIndex}
                                                        href={child.href}
                                                        className={`flex items-center space-x-4 px-4 py-2 rounded-xl cursor-pointer ${
                                                            darkMode
                                                                ? "text-gray-400 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:text-gray-300"
                                                                : "text-gray-600 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:text-gray-800"
                                                        } hover:scale-105 active:scale-95`}
                                                    >
                                                        {child.icon && (
                                                            <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>{child.icon}</span>
                                                        )}
                                                        <span>{child.label}</span>
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <div
                                    className={`border-t pt-4 mt-4 space-y-2 ${darkMode ? "border-gray-800/30" : "border-gray-200/30"}`}
                                >
                                    {authItems?.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className={`flex items-center space-x-4 px-4 py-3 rounded-2xl font-semibold cursor-pointer bg-gradient-to-r ${
                                                darkMode
                                                    ? "from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl"
                                                    : "from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                                            } hover:scale-105 active:scale-95`}
                                        >
                                            {item.icon && <span className="text-current">{item.icon}</span>}
                                            <span>{item.label}</span>
                                        </a>
                                    ))}

                                    <a
                                        href="/consultation"
                                        className={`flex items-center space-x-4 px-4 py-3 rounded-2xl font-bold cursor-pointer ${
                                            darkMode
                                                ? "bg-gradient-to-r from-purple-400 to-blue-400 text-gray-900 shadow-xl"
                                                : "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-xl"
                                        } hover:scale-105 active:scale-95`}
                                    >
                                        <FiZap className="h-4 w-4" />
                                        <span>Free Consultation</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <div className="h-32" />
        </>
    )
}


export default NavbarComponent;
