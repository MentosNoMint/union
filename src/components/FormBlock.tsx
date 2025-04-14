const FormBlock = () => {
    return (
        <div className={'w-full bg-white pt-[17.5rem]'}>
            <div className={'flex bg-[#F2F2F2] w-full justify-center rounded-t-[4rem]'}>
                <div className={'w-full bg-white max-w-[86.25rem] rounded-3xl mt-[7.5rem]'}>
                    <div className={'px-12 py-12 flex justify-between'}>
                        <div className={'flex flex-col'}>
                            <h1 className={'text-[1.625rem] font-semibold text-black'}>Вступить в профсоюз</h1>
                            <p className={'font-medium text-base text-[#404040]'}>Заполните форму, чтобы начать работу с
                                нами</p>
                            <form>
                                <div className={'flex flex-col mt-[4.5rem]'}>
                                    <label className={'text-black text-base font-semibold leading-3 mb-2'}
                                           htmlFor={'email'}>Почта</label>
                                    <input placeholder={'Название почты'}
                                           className={'max-w-[25rem] w-full rounded-xl border border-[#D7DAE1] h-12 px-4 text-[#B6B9BF] font-medium placeholder:text-[#B6B9BF] placeholder:font-medium'}
                                           id={'email'}
                                           type={'email'}
                                    />
                                </div>
                                <div className={'flex flex-col mt-6'}>
                                    <label className={'text-black text-base font-semibold leading-3 mb-2'}
                                           htmlFor={'phone'}>Телефон</label>
                                    <input placeholder={'Номер телефона'}
                                           className={'max-w-[25rem] w-full rounded-xl border border-[#D7DAE1] h-12 px-4 text-[#B6B9BF] font-medium placeholder:text-[#B6B9BF] placeholder:font-medium'}
                                           id={'phone'}
                                           type={'phone'}
                                    />
                                </div>
                                <button
                                    className={'text-base text-white font-medium bg-black max-w-[25rem] w-full h-12 rounded-xl mt-6 cursor-pointer'}>Отправить
                                    заявку
                                </button>

                                <div className={'flex gap-3 items-center mt-16'}>
                                    <input type={'checkbox'} className={'accent-black w-5 h-5'} id={'checkbox'}/>
                                    <span className={'font-medium text-base text-black'}>Согласие на обработку пер-ных данных</span>
                                </div>
                            </form>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormBlock;