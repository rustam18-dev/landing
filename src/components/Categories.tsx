import { Button } from "./ui/Button";
import { Icon } from "./ui/Icon";

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

export const Categories = () => {
  return (
    <div className="flex flex-col justify-center items-center px-[115px] tablet:px-8 mobile:px-4 w-full">
      <div className="max-w-[1130px]">
        <div className="flex tablet:flex-col items-center justify-center mt-[80px] mobile:mt-8 tablet-min:gap-8">
          <h1 className="font-bold laptop:w-full w-[286px] text-[56px] mobile:text-center mobile:text-[40px] mobile:leading-9 leading-[56px] pb-2 mr-[40px] laptop:mr-0 laptop:mb-10">
            категории товаров
          </h1>
          <div className="leading-[20px] text-justify ">
            Наш ассортимент позволяет нам закрывать потребности клиентов комплексно и
            экономить их время на поиске и логистике. Наличие разнообразных категорий
            делает наше предложение особенно выгодным для крупных сетей, которым важно
            получать все необходимые позиции от одного поставщика с гарантией качества и
            оперативной поставкой.
          </div>
        </div>
        <div className="grid grid-cols-3 laptop:grid-cols-2 tablet:grid-cols-1  justify-center gap-[48px]  laptop:gap-[20px] mt-[56px] w-full">
          <div className="flex flex-col gap-[24px]  w-full min-h-[268px] p-5 bg-alabaster">
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
              className="flex flex-col justify-between gap-[24px]  w-full min-h-[268px] p-5 border-t border-gray"
            >
              <h3 className="font-bold">{title}</h3>
              <div className="flex flex-col gap-[24px]">
                <div>{description}</div>

                <img src={image} alt="category" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
