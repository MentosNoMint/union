import {question} from "@/constants";
import Faq from "@/components/Faq";

const FaqSection = () => {
    return (
        <div className={'w-full bg-white flex justify-center pt-[12.5rem] top-0 sticky pb-[17.5rem] max-md:px-5.5'}>
            <div className={'max-w-[86.25rem] w-full'}>
                <h1 className={'font-semibold text-5xl text-black mb-16'}>Часто задаваемые вопросы</h1>
                <div className={'flex flex-col gap-10'}>
                    {question.map((faq, index) => (
                        <Faq question={faq.question} answer={faq.answer} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqSection;