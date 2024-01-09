import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font bg-white md:bg-opacity-0">
      <div class="container mx-auto flex flex-wrap px-5 pt-10 pb-4 md:py-12 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/services"
            class="mt-6 md:mt-0 mr-14 text-darkBlue text-xl md:text-[16px] font-bold underline quicksand tracking-[6.33px] order-2 sm:order-1"
          >
            SERVICES
          </Link>
          <Link href="/" class="hover:text-gray-900 order-1 sm:order-2">
            <Image src={Logo} className="md:w-60" />
          </Link>
          <Link
            href="/about"
            class="mt-6 md:mt-0 ml-14 text-darkBlue text-xl md:text-[16px] font-bold underline quicksand tracking-[6.33px] order-3"
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
