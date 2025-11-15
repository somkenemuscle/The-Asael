import Link from 'next/link'; // Import Link from Next.js
import { navigationOnLargeScreen, navigationOnMobile } from '@/constants/navigation';

const Navbar = () => {

    return (
        <div className="fixed z-50 top-6 inset-x-0 mx-auto w-fit">
            {/* ON LARGE SCREEN DEVICES */}
            <nav className="hidden md:block lg:block bg-neutral-950 rounded-full text-pink-50 font-sans text-sm pr-3 pl-7 py-2 navbar">
                <ul className="flex flex-row items-center gap-x-8 cursor-pointer">
                    <Link href='/'>
                        <li className="">
                            <img src="/asael.jpg" alt="logo" className='rounded-full w-14 h-14 flex justify-center' />
                        </li>
                    </Link>
                    {navigationOnLargeScreen.map((nav, index) => (
                        <Link key={index} href={nav.href} {...(nav.name === 'Gallery' && { target: "_blank", rel: "noopener noreferrer" })}>
                            <li className='hover:text-pink-300 transition duration-300 ease-in-out'>{nav.name}</li>
                        </Link>
                    ))}
                    <a
                        href="tel:+2348035837203"
                        className="bg-neutral-800 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out hover:bg-neutral-900 border border-neutral-700 flex items-center"
                    >
                        <span>Call Us</span>
                        <span className="ml-3">☎️</span>
                    </a>
                </ul>
            </nav>

            {/* ON MOBILE DEVICES */}
            <nav className="md:hidden lg:hidden  bg-neutral-950 rounded-full text-pink-50 font-sans text-sm py-4 px-16 navbar nav-mobile">
                <ul className="flex flex-row items-center gap-x-8 cursor-pointer">
                      <Link href='/'>
                        <li className="">
                            <img src="/asael.jpg" alt="logo" className='rounded-full w-14 h-14 flex justify-center' />
                        </li>
                    </Link>
                    {navigationOnMobile.map((mobileNav, index) => (
                        <Link key={index} href={mobileNav.href} {...(mobileNav.name === 'Gallery' && { target: "_blank", rel: "noopener noreferrer" })}>
                            <li className='hover:text-pink-300 transition duration-300 ease-in-out'>{mobileNav.name}</li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
