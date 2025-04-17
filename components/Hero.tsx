import React from 'react'

const Hero = () => {
    return (
        <div className='relative flex flex-col h-full w-full'>
            <video autoPlay muted loop className='rotate-180 absolute top-[140px] left-0 z-[1] w-full h-full object-contain'>
                <source src="" type="" />
            </video>
        </div>
    )
}

export default Hero