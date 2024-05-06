'use client';
import { Parallax, Description } from '@/components';

export default function Home() {
    return (
        <main>
            <Parallax image={'images/logo.jpg'} />
            <Description />
        </main>
    );
};
