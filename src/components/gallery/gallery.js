import React from 'react';
import GalleryContainer from './container';
const GallerySection = () => {
    const examples =[
        {
            id:1,
            author: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:2,
            author: "Jane Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:3,
            author: "Jane Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:4,
            author: "Jane Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:5,
            author: "Jane Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:6,
            author: "Jane Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:7,
            author: "Jane Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:8,
            author: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:9,
            author: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:10,
            author: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:11,
            author: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:12,
            author: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:13,
            author: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {
            id:14,
            author: "John Doe",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="w-full h-full grid grid-cols-3 place-items-center">
            {examples.map((example) => (
                <GalleryContainer key={example.id} data={example} />
            ))}
        </div>
    );
}

export default GallerySection;