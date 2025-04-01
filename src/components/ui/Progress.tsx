const Progress = () => {
    return (
        <div className={'w-[12rem] h-[8.75rem] rounded-[1.25rem] border border-[#DEDEDE]'}>
            <div className={'px-4'}>
                <p className={'text-base font-semibold mt-2.5'}>Прогресс</p>
                <div className={'flex gap-2'}>
                    <div className={'w-5 rounded-lg h-7 bg-[#F08000]'}></div>
                </div>
            </div>
        </div>
    );
}

export default Progress;