"use client"

const Progress = () => {
    return (
        <div className={'w-[12rem] h-[8.75rem] rounded-[1.25rem] border border-[#DEDEDE] absolute z-30 bg-white ml-[85%]'}>
            <div className={'px-4 py-4 flex flex-col h-full'}>
                <p className={'text-base font-semibold text-black'}>Прогресс</p>
                <div className={'mt-auto flex gap-2 items-end'}>
                    <div className={'w-5 rounded-lg bg-[#F08000] h-7'}></div>
                    <div className={'w-5 rounded-lg bg-[#F08000] h-9 opacity-60'}></div>
                    <div className={'w-5 rounded-lg bg-[#F08000] h-10'}></div>
                    <div className={'w-5 rounded-lg bg-[#F08000] h-12 opacity-60'}></div>
                    <div className={'w-5 rounded-lg bg-[#F08000] h-13'}></div>
                    <div className={'w-5 rounded-lg bg-[#F08000] h-14 opacity-60'}></div>
                </div>
            </div>
        </div>
    );
}

export default Progress;