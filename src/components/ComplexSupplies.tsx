import { Button } from "./ui/Button";

export const ComplexSupplies = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex tablet:flex-col max-w-[1130px]">
        <div className="w-full my-[196px] pr-[46px] laptop:px-[37px] tablet:my-[56px]">
          <h1 className="w-[520px] tablet:w-full text-[56px] tablet:font-bold mobile:text-[40px] leading-[66px] tablet:leading-[45px] tablet:text-center">
            <span className="text-blue">Комплексные</span> поставки для вашего бизнеса
          </h1>
          <p className="leading-[20px] mt-[40px] tablet:text-justify">
            Предлагаем услуги по комплексному снабжению организаций. Широкий ассортимент
            поставляемых хозяйственных, бытовых и канцелярских товаров. Выгодные условия
            доставки и оплаты, оптимальные цены.
          </p>
          <div className="flex w-[386px] gap-[24px] tablet:w-full tablet:gap-[16px] mt-[112px] mobile:mt-[56px]">
            <Button>Связаться с нами</Button>
            <Button variant="outlined">Узнать больше</Button>
          </div>
        </div>
        <div className="w-full">
          <img
            src="/image/image1.png"
            className="w-full h-full object-cover"
            alt="image1"
          />
        </div>
      </div>
    </div>
  );
};
