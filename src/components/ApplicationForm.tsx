import {Button} from "./ui/Button";

export const ApplicationForm = () => {
  return (
    <div className="flex w-full justify-center application mt-[80px]">
      <div className="flex desktop:flex-col-reverse flex-row w-full max-w-[1230px]">
        <div className=" w-full z-10 tablet-min:px-[115px] px-[16px] tablet-min:py-[80px] py-[32px]">
          <div className="flex flex-col justify-center items-center text-white">
            <h2 className="font-bold uppercase mb-8">Форма заявки</h2>
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                className="w-full border border-alabaster rounded-full px-4 text-sm placeholder:font-semibold placeholder:text-[#5d7c88] placeholder:text-xs bg-blue focus:outline-none h-[52px]"
                placeholder="Ваше имя*"
              />
              <div className="flex gap-6 w-full">
                <input
                  type="text"
                  className="w-full border border-alabaster rounded-full px-4 text-sm placeholder:font-semibold placeholder:text-[#5d7c88] placeholder:text-xs bg-blue focus:outline-none h-[52px]"
                  placeholder="Телефон*"
                />
                <input
                  type="text"
                  className="w-full border border-alabaster rounded-full px-4 text-sm placeholder:font-semibold placeholder:text-[#5d7c88] placeholder:text-xs bg-blue focus:outline-none h-[52px]"
                  placeholder="Email*"
                />
              </div>
              <textarea
                className="w-full resize-none border border-alabaster rounded-[32px] px-4 py-6 placeholder:font-semibold placeholder:text-[#5d7c88] placeholder:text-xs bg-blue focus:outline-none h-[104px]"
                placeholder="Сообщение (обращение)"
              />
              <div className="text-[11px] text-center font-semibold">
                Нажимая кнопку, я даю согласие на <a href="#" className="text-gold">Обработку персональных данных</a> и
                соглашаюсь с <a href="#" className="text-gold">Правилами и Политикой конфиденциальности</a>
              </div>
              <Button className="opacity-50">Отправить запрос</Button>
            </div>
          </div>
        </div>
        <div className="w-full tablet-min:px-[115px] px-[16px] tablet-min:py-[80px] py-[32px] z-10">
          <h2 className="tablet-min:text-[56px] text-[40px] font-bold tablet-min:leading-[54px] leading-[35px] tablet:text-center">
            получите персональное <span className="text-blue">предложение для вашего бизнеса!</span>
          </h2>
          <p className="mt-10 leading-[22px] text-[14px] tablet:text-justify">
            Оставьте заявку, чтобы получить персональное предложение по комплексной
            поставке товаров для вашего бизнеса. Мы подберём оптимальные решения и
            оперативно свяжемся с вами для обсуждения деталей.
          </p>
        </div>
      </div>
    </div>
  );
};
