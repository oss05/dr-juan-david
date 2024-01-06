import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap px-5 py-12 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/services" class="mr-14 text-darkBlue text-lg underline">
            Services
          </Link>
          <Link href="/" class="mr-14 hover:text-gray-900">
            <Image src={Logo} className="w-60" />
          </Link>
          <Link href="/about" class="text-darkBlue text-lg underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
