import Link from 'next/link';

export default function Parallax({ image }: { image: string }) {
    return (
        <div className="h-[90vh] relative overflow-hidden">
            <div
                className="absolute inset-0 z-[-1] bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl font-bold text-center">Welcome to WizGallery</h1>
                <p className="text-xl text-center mt-4 text-white">A place to hold mine, and your memories from <Link target="_blank" href="https://www.wizard101.com/" className="underline hover:text-green-500 duration-300 transition-all">Wizard101</Link></p>
            </div>
        </div>
    );
};