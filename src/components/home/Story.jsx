import React, { useEffect, useState } from 'react';
import './style/style.css';
import close from '../../assets/home/closewhite.png';
import { Link } from 'react-router-dom';

const Shorts = ({ data, setOpen }) => {
    const images = data.images;
    const [index, setIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    useEffect(() => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, []);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            handleNext();
        }

        if (touchEndX - touchStartX > 50) {
            handlePrev();
        }
    };

    return (
        <section 
            className='z-50 w-screen h-screen bg-gray-500 absolute top-0 flex items-center justify-center gap-5'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div 
                onClick={handlePrev} 
                className='flex items-center justify-center w-10 h-10 text-white text-2xl rounded-full bg-gray-700 cursor-pointer max-sm:hidden'
            >
                {'<'}
            </div>

            <div className='relative flex items-center justify-center h-[652px] w-[400px] overflow-hidden max-sm:h-screen max-sm:w-screen'>
                <img src={images[index]} alt="" className='min-sm:w-[400px] max-sm:h-1/2 max-sm:w-[90%] h-3/5 w-4/5 object-contain' />
                
                <div className='flex items-center justify-between absolute top-2 w-11/12 mt-[25px]'>
                    <div className="flex items-center justify-start gap-2">
                        <div className="flex items-center justify-center rounded-full w-12 h-12 p-1 border-2 border-red-500">
                            <img src={images[0]} alt="" className="rounded-full w-full h-full object-cover" />
                        </div>
                        <p className='text-white font-semibold'>
                            {data.title}
                        </p>
                    </div>
                    <img src={close} alt="" className='cursor-pointer w-6 h-6' onClick={() => setOpen(false)} />
                </div>

                <div className='absolute top-4 flex justify-center gap-1 w-11/12'>
                    {images.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1 ${i === index ? 'bg-white' : 'bg-gray-400'} flex-1`}
                        />
                    ))}
                </div>

                <Link className='flex items-center justify-center w-11/12 bg-white h-11 absolute bottom-20 rounded-sm' to={'/products'}>
                    Alış-verişə başla
                </Link>
            </div>

            <div 
                onClick={handleNext} 
                className='flex items-center justify-center w-10 h-10 text-white text-2xl rounded-full bg-gray-700 cursor-pointer max-sm:hidden'
            >
                {'>'}
            </div>
        </section>
    );
};

export default Shorts;
