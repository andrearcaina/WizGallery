export default function Parallax({ image }) {
    return (
        <div className="h-[90vh] relative overflow-hidden">
            <div
                className="absolute inset-0 z-[-1] bg-fixed bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold text-center">WizGallery</h1>
            </div>
        </div>
    );
};