import React from "react";
import vectorImg from "../assets/Vector.png";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?restaurant')" }}>
      <div className="backdrop-blur-xl bg-white/10 p-8 rounded-lg shadow-xl w-[400px] flex flex-col items-center border border-white/30" style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)" }}>
        <div className="bg-black p-3 rounded-full mb-5 flex justify-center items-center w-14 h-14">
          <img src={vectorImg} alt="logo" className="w-8 h-8" />
        </div>
        <h2 className="text-white text-xl font-bold mb-5">Вход в аккаунт</h2>
        <input
          type="text"
          placeholder="Ваше имя пользователя"
          className="w-full p-3 mb-4 border-b border-gray-400 bg-transparent text-white outline-none placeholder-gray-300 focus:border-white focus:ring-0 text-lg focus:bg-white focus:text-black rounded-md"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-full p-3 mb-5 border-b border-gray-400 bg-transparent text-white outline-none placeholder-gray-300 focus:border-white focus:ring-0 text-lg focus:bg-white focus:text-black rounded-md"
        />
        <a href="#" className="text-gray-300 text-sm mb-5 hover:underline">Забыли пароль?</a>
        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold shadow-lg text-lg">Вход в аккаунт</button>
        <a href="#" className="text-gray-300 text-sm mt-5 hover:underline">У вас нет учетной записи?</a>
      </div>
    </div>
  );
};

export default LoginPage;
