import { FaTimes } from "react-icons/fa";
import Link from "next/link";

function SideBar({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <>
      <div className="z-50">
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out overflow-auto`}
        >
          <div className="p-4 flex justify-end">
            <FaTimes
              size={24}
              onClick={toggleSidebar}
              className="cursor-pointer"
            />
          </div>
          <div className="p-4">
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/rods" onClick={toggleSidebar}>
                  <span className="font-semibold">ВЪДИЦИ</span>
                </Link>
              </li>
              <li>
                <Link href="/reels" onClick={toggleSidebar}>
                  <span className="font-semibold">МАКАРИ</span>
                </Link>
              </li>
              <li>
                <Link href="/feed" onClick={toggleSidebar}>
                  <span className="font-semibold">ЗАХРАНКИ</span>
                </Link>
              </li>
              <li>
                <Link href="/takymi" onClick={toggleSidebar}>
                  <span className="font-semibold">ТАКЪМИ</span>
                </Link>
              </li>
              <li>
                <Link href="/accessories" onClick={toggleSidebar}>
                  <span className="font-semibold">АКСЕСОАРИ</span>
                </Link>
              </li>
              <li>
                <Link href="/camping" onClick={toggleSidebar}>
                  <span className="font-semibold">КЪМПИНГ</span>
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleSidebar}>
                  <span className="font-semibold">ЗА НАС</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isSidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}

export default SideBar;
