import React from 'react';
import GalleryContainer from './container';
const GallerySection = () => {
    const examples = [
        {
            id: 1,
            author: "John Doe",
            image: "/gallery/cat.png",
        },
        {
            id: 2,
            author: "Jane Doe",
            image: "/gallery/dog.png",
        },
        {
            id: 3,
            author: "Jane Doe",
            image: "/gallery/flower.png",
        },
        {
            id: 4,
            author: "Jane Doe",
            image: "/gallery/lya.png",
        },
        {
            id: 5,
            author: "Jane Doe",
            image: "/gallery/msia_pride.png",
        },
        {
            id: 6,
            author: "Jane Doe",
            image: "/gallery/scenery.png",
        },
        {
            id: 7,
            author: "Jane Doe",
            image: "/gallery/sloth.png",
        },
        {
            id: 8,
            author: "John Doe",
            image: "/gallery/ts.png",
        },
        {
            id: 9,
            author: "John Doe",
            image: "/gallery/wed.png",
        },
    ];

    return (
        <div className="w-full h-full grid grid-cols-3 place-items-center bg-[#c9dde0]">
            {examples.map((example) => (
                <GalleryContainer key={example.id} data={example} />
            ))}
        </div>
    );
}

export default GallerySection;