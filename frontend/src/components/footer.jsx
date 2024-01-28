import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-green-900 py-6 mt-6 text-white">
            <div className="container mx-auto px-4">
                <p className="text-center text-lg mb-4">&copy; 2024 Copyright - Andre Arcaina</p>
                
                <div className="flex justify-center space-x-4">
                    <Link href='https://github.com/andrearcaina'>
                        <p className='underline'>GitHub</p>
                    </Link>

                    <Link href='https://www.linkedin.com/in/andre-arcaina/'>
                        <p className='underline'>LinkedIn</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
