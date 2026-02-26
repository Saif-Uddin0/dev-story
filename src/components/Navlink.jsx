import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const pathname = usePathname();
    return <Link className={`${pathname.startsWith(href) && "bg-sky-600 py-2.5 px-4 text-white rounded-xs"}`} href={href}>{children}</Link>
};

export default Navlink;