const Header = () => {
    return (
        <header className={'w-full flex justify-between mt-7 items-center max-w-[86.25rem]'}>
            <span className={'text-black font-semibold text-2xl cursor-pointer'}>Logo</span>
            <div className={'flex gap-1 items-center'}>
                <button className={'font-semibold text-base text-black bg-white rounded-lg py-3 px-4 cursor-pointer'}>О нас</button>
                <div className={'py-3 px-1.5 bg-white text-black rounded-full font-semibold text-base cursor-pointer'}>/</div>
                <button className={'font-medium text-base text-white bg-black rounded-full py-3 px-4 cursor-pointer'}>Вступить</button>
            </div>
        </header>
    )
};

export default Header;