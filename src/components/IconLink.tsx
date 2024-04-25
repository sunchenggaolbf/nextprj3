"use client"
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';
import React, { ReactNode } from 'react';

interface IconLinkProps {
    href: string;
    icon: keyof typeof Icon;
    children: ReactNode;
}

export default function IconLink(props: IconLinkProps) {
    const IconInc = Icon[props.icon];

    return (
        <Link href={props.href} passHref legacyBehavior>
            <a style={{ display: 'flex', flexDirection: 'row' }}>
                <IconInc style={{ marginTop: 'auto', marginBottom: 'auto', marginRight: '10px' }} />
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    {props.children}
                </div>
            </a>
        </Link>
    );
}
