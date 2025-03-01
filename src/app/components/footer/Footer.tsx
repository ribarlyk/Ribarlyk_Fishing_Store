import FooterIcons from "./FooterIcons";

export default function Footer() {
  return (
    <>
      <FooterIcons />
      <div className="md:flex md:flex-row p-4 flex-col gap-32 justify-center w-full">
        <div>
          <h3 className="text-2xl py-4 border-b-2">Информация</h3>
          <ul className="py-4">
            <li className="hover:text-blue-500 cursor-pointer">За нас</li>
            <li className="hover:text-blue-500 cursor-pointer">Общи условия</li>
            <li className="hover:text-blue-500 cursor-pointer">
              Декларация за даване на съгласие за
              <br />
              обработване на лични данни
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              Политиката за поверителност
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl py-4 border-b-2">Обслужване на клиенти</h3>
          <ul className="py-4">
            <li className="hover:text-blue-500 cursor-pointer">
              Доставки и разплащане
            </li>
            <li className="hover:text-blue-500 cursor-pointer">
              Връщане и замяна
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl py-4 border-b-2">Полезно</h3>
          <ul className="py-4">
            <li className="hover:text-blue-500 cursor-pointer">Блог</li>
            <li className="hover:text-blue-500 cursor-pointer">Марки</li>
            <li className="hover:text-blue-500 cursor-pointer">
              Кой е моят размер?
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl py-4 border-b-2">Контакти : </h3>
          <p className="py-4">
            <span className="font-semibold">Телефон:</span> 0888 888 888
          </p>
          <p>
            <span className="font-semibold">Имейл:</span> info@ribarlyk.com
          </p>
        </div>
      </div>
    </>
  );
}
