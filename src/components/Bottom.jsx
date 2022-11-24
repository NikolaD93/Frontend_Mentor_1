import React from 'react';
import img1 from '../assets/image-retro-pcs.jpg';
import img2 from '../assets/image-top-laptops.jpg';
import img3 from '../assets/image-gaming-growth.jpg';

const Bottom = () => {
  return (
    <div className='bottom mt-[60px] sm:flex sm:gap-6 sm:mt-[100px]'>
        <div className='wrapper flex gap-6 h-[150px] mb-[30px] sm:h-[200px] sm:basis-1/3 sm:mb-0'>
            <div className="image-div">
                <img className='h-[100%]' src={img1} alt="retro computer" />
            </div>
            <div className="text-div">
                <h2 className='font-[700] text-3xl text-grayishBlue sm:text-5xl'>01</h2>
                <p className='font-[800]  capitalize my-4 hover:text-softRed cursor-pointer transition sm:text-2xl'>Reviving retro PCs</p>
                <p className='opacity-80 leading-7 text-sm sm:text-[16px]'>What happens when old PCs <br /> are given modern upgrades?</p>
            </div>
        </div> 

        <div className='wrapper flex gap-6 h-[150px] mb-[30px] sm:h-[200px] sm:basis-1/3 sm:mb-0'>
            <div className="image-div">
                <img className='h-[100%]' src={img2} alt="retro computer" />
            </div>
            <div className="text-div">
                <h2 className='font-[700] text-3xl text-grayishBlue sm:text-5xl'>02</h2>
                <p className='font-[800]  capitalize my-4 hover:text-softRed cursor-pointer transition sm:text-2xl'>Top 10 Laptops of 2022</p>
                <p className='opacity-80 leading-7 text-sm sm:text-[16px]'>Our best picks for various <br /> needs and budgets.</p>
            </div>
        </div> 

        <div className='wrapper flex gap-6 h-[150px] sm:h-[200px] sm:basis-1/3'>
            <div className="image-div">
                <img className='h-[100%]' src={img3} alt="retro computer" />
            </div>
            <div className="text-div">
                <h2 className='font-[700] text-3xl text-grayishBlue sm:text-5xl'>03</h2>
                <p className='font-[800]  capitalize my-4 hover:text-softRed cursor-pointer transition sm:text-2xl'>The Growth of Gaming</p>
                <p className='opacity-80 leading-7 text-sm sm:text-[16px]'>How the pandemic has <br /> sparked fresh opportunities.</p>
            </div>
        </div> 

    </div>
  )
}

export default Bottom;