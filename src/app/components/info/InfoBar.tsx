import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineChangeCircle } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";
import { RiDiscountPercentLine } from "react-icons/ri";

function InfoBar() {
  return (
    <div className="md:flex w-auto h-auto justify-center items-center flex-col ">
      <div className="hidden h-14 md:flex">
        <h2 className="flex items-center justify-center gap-4 font-semibold md:text-lg lg:text-2xl">
          Онлайн риболовен магазин Рибарлък | Такъми за вашият майсторлък.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-blue-500 w-full gap-4 md:gap-20">
        <div className="w-auto h-auto flex flex-col md:flex-row items-start justify-start gap-4 ">
          <div className="flex items-center justify-center gap-4 self-start">
            <TbTruckDelivery size={40} />
            <p className="font-semibold text-xs md:text-lg lg:text-xl">
              БЕЗПЛАТНА ДОСТАВКА
              <br />
              НАД 69,90ЛВ.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 self-start">
            <MdOutlineChangeCircle size={40} />
            <p className="font-semibold text-xs md:text-lg lg:text-xl">
              ВЪЗМОЖНОСТ ЗА
              <br />
              ВРЪЩАНЕ ИЛИ ЗАМЯНА
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 self-start">
            <RiMedalLine size={40} />
            <p className="font-semibold text-xs  md:text-lg lg:text-xl">
              КАЧЕСТВО НА
              <br />
              ПРЕДЛАГАНИТЕ ПРОДУКТИ
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 self-start">
            <RiDiscountPercentLine size={40} />
            <p className="font-semibold text-xs  md:text-lg lg:text-xl">
              ПОСТОЯННИ ПРОМОЦИИ И
              <br />
              ОТСТЪПКИ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
