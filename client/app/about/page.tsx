'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function WhoAmI() {
    const text = 'web dev/cloud/devops enthusiast :P';

    return (
        <main className="flex justify-center items-center h-[75vh] bg-gray-100">
            <div className="max-w-screen-md mx-auto bg-white p-8 shadow-lg rounded-lg flex flex-col md:flex-row md:space-x-8">
                <div className="w-full md:w-1/3 flex justify-center">
                    <Image
                        src="/images/pfp.jpg"
                        alt="Profile Picture"
                        width={250}
                        height={250}
                        className="rounded-lg hover:animate-spin transition-all duration-400 cursor-pointer"
                    />
                </div>
                
                <div className="w-full md:w-2/3">
                    <p className="text-center text-[1.25rem]/[2rem] md:text-3xl lg:text-4xl text-green-500 font-semibold mb-4 cursor-pointer">
                        <span className="inline-block hover:animate-bounce transition-all duration-300">h</span>
                        <span className="inline-block hover:animate-bounce">i</span>
                        <span className="inline-block hover:animate-bounce">!</span> <span className="inline-block hover:animate-bounce">i</span>
                        <span className="inline-block hover:animate-bounce">&apos;</span>
                        <span className="inline-block hover:animate-bounce">m</span> <span className="inline-block hover:animate-bounce">a</span>
                        <span className="inline-block hover:animate-bounce">n</span>
                        <span className="inline-block hover:animate-bounce">d</span>
                        <span className="inline-block hover:animate-bounce">r</span>
                        <span className="inline-block hover:animate-bounce">e</span> <span className="inline-block hover:animate-bounce">a</span>
                        <span className="inline-block hover:animate-bounce">r</span>
                        <span className="inline-block hover:animate-bounce">c</span>
                        <span className="inline-block hover:animate-bounce">a</span>
                        <span className="inline-block hover:animate-bounce">i</span>
                        <span className="inline-block hover:animate-bounce">n</span>
                        <span className="inline-block hover:animate-bounce">a</span>
                    </p>

                    <div className="text-lg mb-4">big fan of wizard101 :D</div>
                    
                    <div className="text-lg mb-4">
                        currently studying cs at <Link className="underline hover:text-green-500 transition-all duration-300" href="https://www.torontomu.ca/">tmu</Link>
                    </div>
                    
                    <div className="text-lg mb-4 cursor-pointer">
                        {text.split('').map((char, index) => (
                            <span key={index} className="inline-block hover:text-green-500 hover:animate-pulse transition-all duration-300">
                                {char !== ' ' ? char : '\u00A0'}
                            </span>
                        ))}
                    </div>

                    <div className="text-lg mb-4">
                        check out my <Link className="underline hover:text-green-500 transition-all duration-300" href="https://andrearcaina.vercel.app/">portfolio</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
