import React,{useState} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import img1 from "../../public/m1.jpeg";
import img2 from "../../public/m2.jpeg";
import img3 from "../../public/m3.jpeg";
import img4 from "../../public/m4.jpeg";
import img5 from "../../public/m5.jpeg";
import img6 from "../../public/m6.jpeg";
import img7 from "../../public/m7.jpeg";
import img8 from "../../public/m8.jpeg";
import img9 from "../../public/m9.jpeg";
import img10 from "../../public/m10.jpeg";

function Gallery ()
{
    const slides = [
        {
          url: img1 ,
        },
        {
          url: img2,
        },
        {
          url: img3,
        },
    
        {
          url: img4,
        },
        {
          url: img5,
        },
        {
            url: img6,
        },
        {
            url: img7,
        },
        {
            url: img8,
        },
        {
            url: img9,
        },
        {
            url: img10,
        },      
    ];
    
      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    

      return (
        <div name="Gallery">
            <h1 className="text-3xl font-bold m-4 mb-2 ml-18">Photo Gallery</h1>
        <div className='max-w-[1000px] h-[500px] w-full m-auto py-16 px-4 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-[500px] rounded-2xl bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className=' md:hidden block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 md:left-5 text-2xl rounded-full p-2  bg-black/50 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='md:hidden block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 md:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
        </div>
      );
    

   
}
export default Gallery;