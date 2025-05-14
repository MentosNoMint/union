'use client'

import MatterComponent from "@/components/ui/MatterComponent";
import {useInView} from "react-intersection-observer";
import useMediaQuery from "@/utils/CheckMobile";
import {FormEvent} from "react";

const FormBlock = () => {
  const isMobile = useMediaQuery(1024)
  const {ref, inView} = useInView({
    rootMargin: '-2% 0%',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)

    try {
      fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        }),
      })
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div className={'w-full bg-white'} id={'start'}>
      <div className={'flex bg-[#F2F2F2] w-full justify-center rounded-t-[4rem] max-md:rounded-t-[2rem] max-md:px-2.5 max-lg:px-5'}>
        <div className={'w-full bg-white max-w-[86.25rem] rounded-3xl mt-[7.5rem] max-md:mt-[2.5rem] max-lg:mt-[3rem]'}>
          <div className={'px-12 py-12 flex justify-between items-center'}>
            <div className={'flex flex-col'}>
              <h1 className={'text-[1.625rem] font-semibold text-black'}>Вступить в профсоюз</h1>
              <p className={'font-medium text-base text-[#404040]'}>Заполните форму, чтобы начать работу с
                нами</p>
              <form onSubmit={handleSubmit}>
                <div className={'flex flex-col mt-[4.5rem]'}>
                  <label className={'text-black text-base font-semibold leading-3 mb-2'}
                         htmlFor={'name'}>Имя</label>
                  <input placeholder={'Ваше имя'}
                         className={'max-w-[25rem] w-full rounded-xl border border-[#D7DAE1] h-12 px-4 text-black font-medium placeholder:text-[#B6B9BF] placeholder:font-medium'}
                         id={'name'}
                         type={'name'}
                         name={'name'}
                         required={true}
                  />
                </div>
                <div className={'flex flex-col mt-6'}>
                  <label className={'text-black text-base font-semibold leading-3 mb-2'}
                         htmlFor={'phone'}>Телефон</label>
                  <input placeholder={'Номер телефона'}
                         className={'max-w-[25rem] w-full rounded-xl border border-[#D7DAE1] h-12 px-4 text-black font-medium placeholder:text-[#B6B9BF] placeholder:font-medium'}
                         id={'phone'}
                         type={'phone'}
                         name={'phone'}
                         required={true}
                  />
                </div>
                <div className={'flex flex-col mt-6'}>
                  <label className={'text-black text-base font-semibold leading-3 mb-2'}
                         htmlFor={'message'}>Сообщение</label>
                  <input placeholder={'Краткая информация, когда связаться'}
                         className={'max-w-[25rem] w-full rounded-xl border border-[#D7DAE1] h-12 px-4 text-black font-medium placeholder:text-[#B6B9BF] placeholder:font-medium'}
                         id={'message'}
                         type={'text'}
                         name={'message'}
                         required={true}
                  />
                </div>
                <button type={'submit'}
                        className={'text-base text-white font-medium bg-black max-w-[25rem] w-full h-12 rounded-xl mt-6 cursor-pointer'}>Отправить
                  заявку
                </button>

                <div className={'flex gap-3 items-center mt-16'}>
                  <input type={'checkbox'} className={'accent-black w-5 h-5'} required={true} id={'checkbox'}/>
                  <span className={'font-medium text-base text-black'}>Согласие на обработку пер-ных данных</span>
                </div>
              </form>
            </div>
            {!isMobile && (
              <div ref={ref}>
                {inView && (
                  <MatterComponent/>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBlock;