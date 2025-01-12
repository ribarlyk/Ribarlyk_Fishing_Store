import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineChangeCircle } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import { RiDiscountPercentLine } from "react-icons/ri";

function InfoBar() {
  return (
    <div className="hidden md:flex w-auto h-auto justify-center items-center flex-col ">
      <div className="h-14 flex">
        <h2 className="flex items-center justify-center gap-4 font-semibold">
          Онлайн риболовен магазин Рибарлък | Такъми за вашият майсторлък.
        </h2>
      </div>
      <div className="flex items-center justify-center bg-blue-500 w-full gap-20">
        <div className="flex items-center justify-center gap-4">
          <TbTruckDelivery size={70} />
          <p className="font-semibold">
            БЕЗПЛАТНА ДОСТАВКА
            <br />
            НАД 69,90ЛВ.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <MdOutlineChangeCircle size={70} />
          <p className="font-semibold">
            ВЪЗМОЖНОСТ ЗА
            <br />
            ВРЪЩАНЕ ИЛИ ЗАМЯНА
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <RiMedalLine size={70} />
          <p className="font-semibold">
            КАЧЕСТВО НА
            <br />
            ПРЕДЛАГАНИТЕ ПРОДУКТИ
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <RiDiscountPercentLine size={70} />
          <p className="font-semibold">
            ПОСТОЯННИ ПРОМОЦИИ И
            <br />
            ОТСТЪПКИ
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
