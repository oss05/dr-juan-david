import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font bg-white md:bg-opacity-0">
      <div class="container mx-auto flex flex-wrap px-5 py-12 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/services"
            class="md:mr-14 text-darkBlue text-[16px] font-bold underline quicksand tracking-[6.33px]"
          >
            SERVICES
          </Link>
          <Link href="/" class="hover:text-gray-900 ">
            <Image src={Logo} className="md:w-60" />
          </Link>
          <Link
            href="/about"
            class="md:ml-14 text-darkBlue text-[16px] font-bold underline quicksand tracking-[6.33px]"
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
