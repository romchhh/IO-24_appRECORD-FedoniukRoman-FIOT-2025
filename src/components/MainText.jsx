import React from 'react'
import { assets } from "../assets/assets.js";
const MainText = () => {
    return (
        <div className="py-8 px-4">
            <div className="text-base text-center font-light leading-relaxed mt-5 bg-gray-50 shadow-md rounded-lg p-6 max-w-4xl mx-auto">
                <div className="mb-6">
                    <p className="font-semibold text-xl text-blue-800 mb-2">ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ</p>
                    <p className="font-semibold text-lg text-blue-700">З ДИСЦИПЛІНИ «WEB-ОРІЄНТОВНАНІ ТЕХНОЛОГІЇ. ОСНОВИ FRONTEND та BACKEND РОЗРОБОК»</p>
                </div>
                <div className="mb-4 flex items-center justify-center bg-white p-4 rounded-lg shadow-sm">
                    <p className="mr-4 text-gray-700">Студент групи ІО-24 Федонюк Роман Ігорович</p>
                    <img src={assets.me} alt="Фото студента" className="w-48 h-48 rounded-full border-2 border-blue-500 shadow-lg transform transition-transform duration-300 hover:scale-105" />
                </div>
            </div>
        </div>
    )
}

export default MainText