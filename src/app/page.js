"use client";

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

import Link from 'next/link';
import Title from '../components/Title'

export default function Home() {
    return (
        <>
            <div className="h-screen flex flex-col p-16 justify-center top-0 left-0">
                <Title />
                <div className="text-sub pb-4">
                    IT SERVICES  •  WEB DEVELOPMENT  •  SCRIPTING
                </div>
                <nav>
                    <div className="flex text-white text-3xl">
                        <Link href="#" className="pr-4"><AiFillLinkedin /></Link>
                        <Link href="#" className="pr-4"><AiFillGithub /></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}
