'use client';

import React, {memo, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {disableContextMenu} from "@/utils/disableContextMenu";

const Logo = memo(() => {
    useEffect(() => {
        disableContextMenu("no-context-menu");
    })

    return (
        <Link href="/" className="flex items-center gap-2.5 select-none" aria-label="Homepage">
            <Image
                className="no-context-menu"
                src="/typography/logo.svg"
                alt="Logo"
                width={25}
                height={25}
                priority
            />
            <h2 className="text-md font-bold">GoodbyeDPI/UI</h2>
        </Link>
    );
});

Logo.displayName = 'Logo';

export default Logo;
