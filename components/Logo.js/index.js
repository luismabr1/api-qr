import React from 'react';
import Image from 'next/image'
import style from './Logo.module.css'
import defaultImage from '../../styles/MoDo.svg'



const LogoModo = ( {imageSrc = defaultImage, imageAltText='Logo MoDo'} ) => {
    return (
        <>
        <div className={style.logoMain}>
            <Image src={imageSrc} alt={imageAltText} width={450} height={180} priority/>
            <p className='text'>QR</p>
        </div>

        </>
    );
};

export default LogoModo;