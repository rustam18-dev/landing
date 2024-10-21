import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";
import { IconName } from "./ui/theme";

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

const categories = [
  {
    id: 1,
    title: "Полиграфическая продукция",
    description:
      "Печатные материалы и упаковочные решения для брендинга и деловой документации.",
    image: "/image/category/2.png",
  },
  {
    id: 2,
    title: "Химия для клининга",
    description:
      "Профессиональные средства для качественной уборки и поддержания чистоты.",
    image: "/image/category/3.png",
  },
  {
    id: 3,
    title: "Инструмент",
    description:
      "Надёжные и высококачественные инструменты для профессионального и бытового использования.",
    image: "/image/category/4.png",
  },
  {
    id: 4,
    title: "Краска",
    description:
      "Широкий ассортимент лакокрасочной продукции для различных типов поверхностей и задач.",
    image: "/image/category/5.png",
  },
  {
    id: 5,
    title: "Другое",
    description:
      "Разнообразные товары для комплексного обеспечения потребностей бизнеса и крупных сетей.",
    image: "/image/category/6.png",
  },
];

export const Main = () => {
  return (
    <>
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

      <div className="flex tablet:flex-col justify-center min-h-[684px] bg-black py-[80px] px-[115px] laptop:px-[32px] gap-[56px]">
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
                  <p className="text-center">{text}</p>
                </div>
              ))}
            </div>
            <img
              src="/image/world_mobile.png"
              className="block mobile-min:hidden w-full"
              alt="world_tablet"
            />
          </div>
        </div>
        <div className="py-[75px] laptop:py-0 text-white max-w-[520px] tablet:max-w-full tablet:order-1">
          <h1 className="text-[56px] font-bold pb-[40px]  leading-[20px]">о нас</h1>
          <div className="flex flex-col gap-5 leading-[20px]">
            <p>
              Мы стремимся обеспечивать наших партнеров лучшими материалами и
              инструментами, помогая им эффективно и удобно решать задачи любого масштаба.
            </p>
            <p>
              Наша миссия — стать связующим звеном между качеством и успешным бизнесом
              наших клиентов, создавая надежные и взаимовыгодные отношения.
            </p>
            <p>
              Мы придерживаемся принципов качества, гибкости и надежности, работая только
              с проверенными поставщиками и адаптируя условия сотрудничества под
              индивидуальные задачи каждого клиента. Благодаря профессионализму и вниманию
              к деталям, мы всегда готовы предложить оптимальные решения, на которые можно
              положиться.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center px-[115px] w-full">
        <div className="max-w-[1130px]">
          <div className="flex items-center justify-center mt-[80px]">
            <h1 className="font-bold w-[286px] text-[56px] leading-[56px] pb-2 mr-[40px]">
              категории товаров
            </h1>
            <div className="leading-[20px]">
              Наш ассортимент позволяет нам закрывать потребности клиентов комплексно и
              экономить их время на поиске и логистике. Наличие разнообразных категорий
              делает наше предложение особенно выгодным для крупных сетей, которым важно
              получать все необходимые позиции от одного поставщика с гарантией качества и
              оперативной поставкой.
            </div>
          </div>
          <div className="flex flex-wrap gap-[48px] mt-[56px]">
            <div className="flex flex-col gap-[24px] w-[344px] h-[268px] p-5 bg-alabaster">
              <h3 className="font-bold">Канцелярия</h3>
              <div>
                Всё необходимое для эффективной организации офисного и учебного
                пространства.
              </div>
              <div className="flex gap-[24px]">
                <img src="/image/category/1.png" alt="category" />
                <Button className="mt-[28px]">
                  <Icon name="vector" />
                </Button>
              </div>
            </div>
            {categories.map(({ id, description, title, image }) => (
              <div
                key={id}
                className="flex flex-col gap-[24px] w-[344px] h-[268px] p-5 border-t border-gray"
              >
                <h3 className="font-bold">{title}</h3>
                <div>{description}</div>
                <div className="flex gap-[24px]">
                  <img src={image} alt="category" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
