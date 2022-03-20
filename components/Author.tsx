import React from 'react';
import Image from 'next/image';

export const Author = ( {author}: {author: any} ) => {
    return (
        <div className="text-center mt-20 mb-6 p-12 relative rounded-lg bg-black bg-opacity-30">
            <div className="absolute left-0 right-0 -top-14">
                <Image
                    alt={author.name}
                    unoptimized
                    height="100px"
                    width="100px"
                    className="align-middle rounded-full"
                    src={author.photo.url}
                />
            </div>
            <h3 className="text-white my-4 text-base font-bold">{author.name}</h3>
            <p className="text-white text-base">{author.bio}</p>
        </div>
    )
}

