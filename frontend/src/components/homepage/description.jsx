import Link from 'next/link';

export default function Description() {
    return (
        <div className="h-[65vh] flex justify-center items-center text-black p-8 bg-gray-200">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:w-[80%] xl:w-[50%]">
                <div className="flex flex-col mr-0 sm:mr-12 mb-6 sm:mb-0">
                    <h2 className="text-[3rem] md:text-[5rem] md:leading-[0.9] lg:text-[6rem] lg:leading-[0.9] font-bold mb-4">
                        About this
                    </h2>
                    
                    <hr className="border-black w-full my-4" />
                </div>
                
                <p className="text-justify md:text-[1.1rem] lg:text-2xl">
                    WizGallery is a fun little project made by <Link href="/about" className="underline hover:text-green-500 duration-300 transition-all">me</Link>.
                    It was meant to showcase photos taken from the game called Wizard101, but is currently
                    being expanded to include user authentication, image and database management, and their own photo showcase.
                    Technologies used to make this website is: Supabase, PostgreSQL, Flask, Next.js and TailwindCSS.
                </p>
            </div>
        </div>
    );
}