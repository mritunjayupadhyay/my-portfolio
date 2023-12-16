"use client";
import { pointright } from '@/assets/icons';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const hand = useRef(null);

  function handleClick() {
    console.log("animate this one", hand.current)
  }
    return (
        <main className="w-full h-screen relative max-container">
            <section className="intro">
                <h1 className="head-text-light">
                    Hello!
                    <button onClick={handleClick} ref={hand} className="pl-4 animate">
                    👋
                    </button>
                </h1>

                <h2 className="head-text-light max-w-screen-sm">
                    I&apos;m
                    <span className="pl-2 blue-gradient_text font-semibold drop-shadow">Mritunjay Upadhyay</span>, 
                    a full stack engineer dedicated to developing and optimizing interactive, 
                    user-friendly, and feature-rich applications.
                    <span className="emoji technologist"></span>
                </h2>

                <h3 className="head-text-contact flex flex-wrap">
                    <span className='pr-5'>Get in touch </span>
                    <img
                      src={pointright}
                      alt={"pointright"}
                      className='w-7 object-contain mr-4'
                    />
                    <span className=''>
                    <Link href='/contact' className='blue-gradient_shadow'>
                      mupadhyay00@gmail.com
                    </Link>
                    </span>
                </h3>
            </section>
        </main>
    )
}
