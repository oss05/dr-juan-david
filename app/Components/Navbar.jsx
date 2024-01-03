import Link from "next/link";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/services" class="mr-5 hover:text-gray-900">
            Services
          </Link>
          <Link href="/" class="mr-5 hover:text-gray-900">
            <span class="text-xl">LOGO</span>
          </Link>
          <Link href="/about" class="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
