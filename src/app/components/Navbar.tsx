"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const navlinks = [
  { id: "01", name: "ABOUT", link: "/about" },
  { id: "02", name: "PROJECTS", link: "/projects" },
  { id: "03", name: "BLOG", link: "/blog" },
  { id: "04", name: "CONTACT", link: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="absolute top-0 z-20 w-screen py-[24px] px-[32px] ">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div>
          <Link className="uppercase text-2xl" href="/">
            daedalus
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="size-[56px] flex justify-center items-center rounded-full transition-all duration-150 hover:bg-secondary-100 hover:cursor-pointer"
        >
          <RxHamburgerMenu
            className={` ${
              pathName === "/contact" ? "text-white" : "text-black"
            } text-2xl`}
          />
        </div>
      </div>

      <div
        className={` fixed top-0 right-0 z-20 ${
          open ? "w-full" : "w-0"
        } h-screen bg-black bg-opacity-70 overflow-hidden`}
        onClick={() => setOpen(false)}
      >
        <nav
          className={`absolute top-0 right-0 z-30 ${
            open ? "w-full lg:w-1/3" : "w-0"
          } h-screen bg-primary-200 transition-all duration-300 `}
        >
          <div
            onClick={() => setOpen(false)}
            className="w-[56px] h-[56px] rounded-full absolute top-8 right-8 z-40 flex justify-center items-center hover:cursor-pointer hover:bg-zinc-800"
          >
            <IoMdClose className="text-xl text-white" />
          </div>

          <div className="p-[80px]">
            <div className="flex flex-col">
              <nav className="h-[700px] flex flex-col gap-4 lg:items-start items-center justify-center">
                {navlinks.map((item) => (
                  <Link
                    className="flex items-center gap-2 group"
                    onClick={() => setOpen(false)}
                    key={item.id}
                    href={item.link}
                  >
                    <p className="text-slate-400 group-hover:text-white">
                      {item.id}
                    </p>
                    <span className="h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-[35px]"></span>
                    <h3 className="text-5xl lg:text-5xl text-white">
                      {item.name}
                    </h3>
                  </Link>
                ))}
              </nav>
              <ul className="w-full h-[68px] flex justify-center items-center gap-5">
                <li className="w-[48px] h-[48px] border border-slate-400 hover:border-white rounded-full flex justify-center items-center">
                  <a className="text-white" href="#">
                    DB
                  </a>
                </li>
                <li className="w-[48px] h-[48px] border border-slate-400 hover:border-white rounded-full flex justify-center items-center">
                  <a className="text-white" href="#">
                    YT
                  </a>
                </li>
                <li className="w-[48px] h-[48px] border border-slate-400 hover:border-white rounded-full flex justify-center items-center">
                  <a className="text-white" href="#">
                    IG
                  </a>
                </li>
                <li className="w-[48px] h-[48px] border border-slate-400 hover:border-white rounded-full flex justify-center items-center">
                  <a className="text-white" href="#">
                    X
                  </a>
                </li>
              </ul>
              {/*--- END SOCIAL LINKS ---*/}
            </div>
          </div>
        </nav>
        {/*--- END SIDE NAV ---*/}
      </div>
    </nav>
  );
};

export default Navbar;
