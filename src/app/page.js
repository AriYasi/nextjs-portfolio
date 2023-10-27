"use client";

import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BiLogoDiscord } from 'react-icons/bi';

import Link from 'next/link';
import Title from '../components/Title'

export default function Home() {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center top-0 left-0 md:p-16 md:items-start">
                <Title />
                <div className="text-sub2 pb-8">
                    IT Professional and Hobbyist Programmer
                </div>
                <div className="text-sub pb-4 text-lg flex text-center md:text-left">
                    A cybersecurity enthusiast with some years of experience in both IT infrastructure<br/> and programming
                </div>
                <nav>
                    <div className="flex text-main text-4xl text-center">
                        <Link href="https://www.linkedin.com/in/artur-yasinskiy/" className="pr-4 hover:text-hover transition-all duration-300 tooltip tooltip-bottom" data-tip="Linkedin"><AiFillLinkedin /></Link>
                        <Link href="https://github.com/AriYasi" className="pr-4 hover:text-hover transition-all duration-300 tooltip tooltip-bottom" data-tip="Github"><AiFillGithub /></Link>
                        <Link href="#" className="pr-4 hover:text-hover transition-all duration-300 tooltip tooltip-bottom" data-tip="Aria#5387"><BiLogoDiscord /></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}
