import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <span className="sr-only">Car E-commerce</span>
        </Link>
        <div className="ml-auto flex gap-2">
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md p-5"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md p-5"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md p-5"
            prefetch={false}
          >
            Gallery
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md p-5"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
