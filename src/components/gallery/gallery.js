import React from 'react';
import GalleryContainer from './container';
const GallerySection = () => {
    const examples = [
        {
            id: 1,
            author: "User 1",
            image: "/gallery/cat.png",
        },
        {
            id: 2,
            author: "User 2",
            image: "/gallery/dog.png",
        },
        {
            id: 3,
            author: "User 3",
            image: "/gallery/flower.png",
        },
        {
            id: 4,
            author: "User 4",
            image: "/gallery/lya.png",
        },
        {
            id: 5,
            author: "User 5",
            image: "/gallery/msia_pride.png",
        },
        {
            id: 6,
            author: "User 6",
            image: "/gallery/scenery.png",
        },
        {
            id: 7,
            author: "User 7",
            image: "/gallery/sloth.png",
        },
        {
            id: 8,
            author: "User 8",
            image: "/gallery/ts.png",
        },
        {
            id: 9,
            author: "User 9",
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