import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";

export const Header = () => {
  return (
    <header className="flex mobile:flex-col-reverse justify-center items-center w-full bg-alabaster laptop:px-[32px] mobile:px-[16px]  px-[115px]  py-[40px] mobile:py-[24px] border-gray border-[2px]">
      <div className="flex mobile:flex-col-reverse justify-between w-full items-center max-w-[1130px]">
        <Icon name={"logo"} />
        <menu className="flex mobile:pb-[24px]">
          <Button href="#" className="text-center w-[113px]">
            О нас
          </Button>
          <Button href="#" className="text-center w-[113px] border-x border-gray">
            Товары
          </Button>
          <Button href="#" className="text-center w-[113px]">
            Контакты
          </Button>
        </menu>
      </div>
    </header>
  );
};
