import { Icon } from "./components/ui/Icon";
import { IconName } from "./components/ui/theme";

interface IService {
  icon: IconName;
  text: string;
}

const services: IService[] = [
  {
    icon: "product",
    text: "Широкий ассортимент товаров",
  },
  {
    icon: "arrow",
    text: "Оперативная доставка по всей стране",
  },
  {
    icon: "heart",
    text: "Индивидуальный подход к каждому клиенту",
  },
];
export const About = () => {
  return (
    <div className="flex tablet:flex-col justify-center min-h-[684px] bg-black py-[80px] mobile:p-8 px-[115px] laptop:px-[32px] gap-[56px]">
      <div className="py-[40px] laptop:py-0 tablet:order-2 mobile:hidden">
        <div className="flex tablet-min:flex-col mobile:flex-col w-[210px] tablet:w-full tablet:justify-center text-white">
          {services.map(({ icon, text }, index) => (
            <div
              key={icon}
              className={`flex items-start flex-col gap-[24px] py-[24px] tablet:mr-[40px] ${index === 1 ? "tablet:px-[40px] border-t border-b  border-white tablet:border-r tablet:border-l tablet:border-t-0 tablet:border-b-0" : ""} ${index === 2 ? "tablet:mr-0" : ""}`}
            >
              <Icon name={icon} />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tablet:order-3">
        <img
          src="/image/world.png"
          className="min-w-[289px] laptop:min-w-[335px] tablet:hidden h-[524px]"
          alt="world"
        />
        <img
          src="/image/world_tablet.png"
          className="hidden tablet:block world_tablet"
          alt="world_tablet"
        />
        <div className="hidden mobile:flex w-full flex-col items-center">
          <div className="flex flex-col w-[219px] justify-center items-center text-white absolute">
            {services.map(({ icon, text }, index) => (
              <div
                key={icon}
                className={`flex items-center flex-col gap-[24px] py-[24px] ${index === 1 ? " border-t border-b  border-white" : ""} ${index === 2 ? "tablet:mr-0" : ""}`}
              >
                <Icon name={icon} />
                <p className="text-center mobile:leading-5">{text}</p>
              </div>
            ))}
          </div>
          <img
            src="/image/world_mobile.png"
            className="block mobile-min:hidden w-full h-[450px]"
            alt="world_tablet"
          />
        </div>
      </div>
      <div className="py-[75px] laptop:py-0 text-white max-w-[520px] tablet:max-w-full tablet:order-1">
        <h1 className="text-[56px] font-bold pb-[40px]  leading-[20px]">о нас</h1>
        <div className="flex flex-col gap-5 leading-[20px]">
          <p>
            Мы стремимся обеспечивать наших партнеров лучшими материалами и инструментами,
            помогая им эффективно и удобно решать задачи любого масштаба.
          </p>
          <p>
            Наша миссия — стать связующим звеном между качеством и успешным бизнесом наших
            клиентов, создавая надежные и взаимовыгодные отношения.
          </p>
          <p>
            Мы придерживаемся принципов качества, гибкости и надежности, работая только с
            проверенными поставщиками и адаптируя условия сотрудничества под
            индивидуальные задачи каждого клиента. Благодаря профессионализму и вниманию к
            деталям, мы всегда готовы предложить оптимальные решения, на которые можно
            положиться.
          </p>
        </div>
      </div>
    </div>
  );
};
