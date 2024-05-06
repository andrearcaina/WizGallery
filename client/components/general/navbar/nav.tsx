import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NavMobile } from './nav-mobile';

export default function Nav() {
    const [NavItems, setNavItems] = useState([]);

    useEffect(() => {
        fetchNavItems();
    }, []);

    const fetchNavItems = async () => {
        try {
            const res = await fetch('/data/nav-items.json');
            const navItems = await res.json();
            setNavItems(navItems);
        } catch (error) {
            console.error("Error fetching nav-items data:", error);
        }
    };

    return (
        <nav className="bg-white shadow-lg p-4 sticky top-0 z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
                <div className="flex items-center">
                    <Link href="/">
                        <p className="flex items-center space-x-2 text-black">
                            <Image src="/images/icon.ico" alt="Logo" width={80} height={80} className="rounded-md logo-image" />
                            <span className="font-semibold text-2xl lg:text-3xl">WizGallery</span>
                        </p>
                    </Link>
                </div>

                <div className="hidden lg:flex lg:items-center lg:w-auto">
                    <div className="flex flex-col lg:flex-row lg:space-x-4">
                        {NavItems.map((route: { href: string, text: string }, index: number) => (
                            <Link href={route.href} key={index}>
                                <p className="text-black text-xl hover:text-green-500 transition-colors duration-200">{route.text}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                <NavMobile links={NavItems} />
            </div>
        </nav>
    );
};
