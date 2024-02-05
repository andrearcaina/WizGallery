import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-green-900 py-6 text-white">
            <div className="container mx-auto px-4">
                <p className="text-center text-lg mb-4">&copy; 2024 Copyright - Andre Arcaina</p>
                
                <div className="flex justify-center space-x-4">
                    <Link href='https://github.com/andrearcaina'>
                        <FontAwesomeIcon icon={faGithub} className="text-white p-2 text-3xl hover:text-green-500 hover:scale-[1.3] transition-all duration-400 cursor-pointer" />
                    </Link>

                    <Link href='https://www.linkedin.com/in/andre-arcaina/'>
                        <FontAwesomeIcon icon={faLinkedin} className="text-white p-2 text-3xl hover:text-green-500 hover:scale-[1.3] transition-all duration-400 cursor-pointer" />
                    </Link>

                    <Link href='https://devpost.com/andrearcaina/'>
                        <FontAwesomeIcon icon={faDev} className="text-white p-2 text-3xl hover:text-green-500 hover:scale-[1.3] transition-all duration-400 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};
