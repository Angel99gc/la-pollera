import { useState } from "react";
import { FiHome, FiInfo, FiSettings, FiPhone, FiSearch, FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";

interface itemInterface {
    id:  String;
    title: string;
    icon: any;
}


function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems: itemInterface[] = [
    {
      id: "home",
      title: "Inicio",
      icon: <FiHome className="w-5 h-5" />
    },
    {
      id: "menu",
      title: "Menú",
      icon: <FiInfo className="w-5 h-5" />
    },
    {
      id: "contact",
      title: "Contáctenos",
      icon: <FiPhone className="w-5 h-5" />
    },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

 

  const handleLinkClick = (id: any) => {
    setActiveLink(id);
  };

  return (
    <div className="relative sm:hidden">
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-3 sm:top-6 right-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      <aside
        className={`fixed top-0 right-0 h-screen bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 ease-in-out z-40
          ${isOpen ? "w-64" : "w-0"} overflow-hidden`}
        aria-label="Sidebar navigation"
      >
        <div className="h-full px-4 py-6 overflow-y-auto">
          <div className={`mb-6 ${!isOpen && "lg:hidden"}`}>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search website content"
              />
            </div>
          </div>

          <nav>
            <ul className="space-y-1">
              {menuItems.map((item: any) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      handleLinkClick(item.id);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200
                      ${activeLink === item.id
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"}
                    `}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <span className={``}>{item.title}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;