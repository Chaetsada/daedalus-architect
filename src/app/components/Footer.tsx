import Link from "next/link";

const navLinks = [
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

const Footer = () => {
  return (
    <footer className="w-[100vw] min-h-fit bg-primary-200 text-white">

      <div className="h-fit max-w-[1280px] mx-auto flex flex-col md:flex-row">
        <div className="md:flex-1 h-fit w-full  p-[32px] lg:py-[80px] lg:px-0">
          <h5 className="text-2xl md:text-3xl">DAEDALUS</h5>
        </div>
        <div className="w-full lg:w-[400px] p-[32px] border-t-[1px] md:border-l-[1px] border-gray-800 lg:py-[80px] lg:px-[48px] flex flex-col gap-5">
          <p >LINKS</p>
          <div className="flex flex-col gap-3">
            {navLinks.map( (item,i) => (
              <Link className="text-secondary-200  hover:text-white" key={i} href={item.link}>{item.name}</Link>
            ))}
          </div>
        </div>
        <div className="md:flex-1 h-fit w-full border-t-[1px] md:border-l-[1px] border-gray-800 p-[32px] lg:py-[80px] lg:px-[48px] flex flex-col gap-5">
          <p >SOCIALS</p>
          <ul className="flex flex-col gap-3">
            <li><a className="text-secondary-200 hover:text-white" href="#">Dribble</a></li>
            <li><a className="text-secondary-200 hover:text-white" href="#">Youtube</a></li>
            <li><a className="text-secondary-200 hover:text-white" href="#">Instagram</a></li>
            <li><a className="text-secondary-200 hover:text-white" href="#">X</a></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
