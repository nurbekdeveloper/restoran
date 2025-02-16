import React from "react";
import vectorImg from "../assets/Vector.png";

const RegisterPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?restaurant')" }}>
      <div className="backdrop-blur-xl bg-white/10 p-8 rounded-lg shadow-xl w-[450px] flex flex-col items-center border border-white/30" style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)" }}>
        <h2 className="text-black text-2xl font-bold mb-6">Зарегистрироваться</h2>
        <input type="text" placeholder="Ваше имя" className="w-full p-3 mb-4 border-b border-gray-500 bg-transparent text-white outline-none placeholder-gray-300 focus:border-white focus:ring-0 text-lg focus:bg-white focus:text-black rounded-md" />
        <input type="text" placeholder="Фамилия" className="w-full p-3 mb-4 border-b border-gray-500 bg-transparent text-white outline-none placeholder-gray-300 focus:border-white focus:ring-0 text-lg focus:bg-white focus:text-black rounded-md" />
        <input type="tel" placeholder="Ваш номер телефона" className="w-full p-3 mb-4 border-b border-gray-500 bg-transparent text-white outline-none placeholder-gray-300 focus:border-white focus:ring-0 text-lg focus:bg-white focus:text-black rounded-md" />
        <input type="text" placeholder="Ваше имя пользователя" className="w-full p-3 mb-4 border-b border-gray-500 bg-transparent text-white outline-none placeholder-gray-300 focus:border-white focus:ring-0 text-lg focus:bg-white focus:text-black rounded-md" />
        <input type="password" placeholder="Пароль" className="w-full p-3 mb-4 border-b border-gray-500 bg-transparent text-white outline-none placeholder-gray-300 focus:border-white focus:ring-0 text-lg focus:bg-white focus:text-black rounded-md" />
        <input type="password" placeholder="Подтверждение пароля" className="w-full p-3 mb-4 border-b border-gray-500 bg-transparent text-white outline-none placeholder-gray-300 focus:border-white focus:ring-0 text-lg focus:bg-white focus:text-black rounded-md" />
        <div className="w-full flex items-center mb-5">
          <input type="checkbox" id="policy" className="mr-2 w-4 h-4" />
          <label htmlFor="policy" className="text-gray-300 text-sm select-none">Я принимаю Политику конфиденциальности и Условия</label>
        </div>
        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold shadow-lg text-lg">Зарегистрироваться</button>
        <a href="#" className="text-gray-400 text-sm mt-5 hover:underline transition hover:text-gray-300">Уже есть аккаунт?</a>
      </div>
    </div>
  );
};

export default RegisterPage;
