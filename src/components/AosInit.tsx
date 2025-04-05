"use client"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can .
import {  useEffect } from 'react';


export function AosInit() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false ,
        });
        AOS.refresh();
    }, []);
    
    return null;
}

