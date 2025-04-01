"use client";

import React from "react";
import {ReactLenis} from 'lenis/react';

interface SmoothScrollingProps {
    children: React.ReactNode;
}

function SmoothScrolling({children}: SmoothScrollingProps) {
    return (
        <ReactLenis root options={{lerp: 0.1, duration: 1.5, smoothWheel: true}}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;