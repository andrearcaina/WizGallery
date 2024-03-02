import Image from 'next/image';

export default function DisplayImages({ Data }) {
    return (
        <>
            {Data.dates && Data.img_data && Data.img_data.map((img, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
                    <div className="border border-gray-400 shadow-md p-2">
                        <Image
                            src={`data:image/jpeg;base64,${img}`}
                            width={500}
                            height={500}
                            alt={`Image ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'cover top'
                            }}
                        />
                    </div>
                    
                    <p className="mt-2 text-center">{new Date(Data.dates[index]).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</p>
                </div>
            ))}
        </>
    );
}