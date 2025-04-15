"use client"

import Image from "next/image";
import {useState, useRef} from "react";
import gsap from "gsap";

interface FaqProps {
    question: string;
    answer: string;
}

const Faq = ({question, answer}: FaqProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef<HTMLDivElement>(null);
    const plusRef = useRef(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen)

        if (!isOpen) {
            gsap.to(plusRef.current, {
                duration: 0.3,
                transform: "rotate(-45deg)",
            })
            gsap.from(answerRef.current, {
                duration: 0.3,
                height: answerRef.current!.offsetHeight,
            })
        } else {
            gsap.to(plusRef.current, {
                duration: 0.3,
                transform: "rotate(0)",
            })
            gsap.to(answerRef.current, {
                duration: 0.3,
                height: 'auto',
            })
        }
    }

    return (
        <div className={'flex flex-col cursor-pointer'} onClick={() => toggleOpen()}>
            <div className={'w-full h-px bg-[#D1D1D1] z-20'}/>
            <div className={'mt-4 flex justify-between'}>
                <p className={'font-semibold text-black text-2xl'}>{question}</p>
                <Image src={'/assets/images/plus.svg'} alt={'icon'} width={20} height={20}
                       className={'cursor-pointer'} ref={plusRef}></Image>
            </div>
            <div className={'flex flex-col'} ref={answerRef}>
                {isOpen && (
                    <p className={'text-black font-medium text-base ml-auto max-w-[25rem] mt-12'}>{answer}</p>
                )}
            </div>
        </div>
    );
}

export default Faq;