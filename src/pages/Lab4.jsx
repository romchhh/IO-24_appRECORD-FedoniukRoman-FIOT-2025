import React, { useState } from 'react';
import { assets } from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Тема та мета" },
    { id: 2, title: "Адаптивна верстка" },
    { id: 3, title: "Скріншоти" },
];

const Lab4 = () => {
    const [activeTask, setActiveTask] = useState(1);

    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return (
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Тема та мета</p>
                        <p><strong>Тема:</strong> Адаптивна верстка, медіа-запити, метатег viewport, стратегія Mobile First.</p>
                        <p><strong>Мета:</strong> Освоїти адаптивну верстку з використанням медіа-запитів, медіа-типів, медіа-функцій, метатегу viewport та стратегії Mobile First.</p>
                    </div>
                );
            case 2:
                return (
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Адаптивна верстка</p>
                        <p>Адаптивна верстка дозволяє створювати веб-сторінки, які автоматично підлаштовуються під різні розміри екранів. Це досягається за допомогою медіа-запитів, які змінюють стилі CSS в залежності від ширини екрану.</p>
                        
                        <p>Основні кроки:</p>
                        <ul className="list-disc pl-5">
                            <li>Використання метатегу <strong>viewport</strong> для контролю масштабу та розмірів сторінки на мобільних пристроях.</li>
                            <li>Застосування медіа-запитів для визначення стилів для різних брейкпоінтів (десктоп, планшет, мобільний).</li>
                            <li>Використання стратегії <strong>Mobile First</strong>, яка передбачає спочатку розробку мобільної версії, а потім розширення для більших екранів.</li>
                        </ul>
                        
                        <p>Приклад медіа-запиту:</p>
                        <pre className="bg-gray-100 p-3 rounded">
                            {`@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}`}
                        </pre>
                    </div>
                );
            case 3:
                return (
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Скріншоти</p>
                        <img src={assets.adaptive_code} alt="Код адаптивності" className="mb-4" />
                        <img src={assets.adaptive_page} alt="Адаптивна сторінка" />
                    </div>
                );
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 4</h1>
            <div className="flex flex-col lg:flex-row items-start gap-5 mt-5 px-4">
                <div className="flex flex-col gap-2 w-64 lg:w-48">
                    {tasks.map(task => (
                        <p
                            key={task.id}
                            className={`pl-3 py-2 border rounded transition-all cursor-pointer mt-4 ${activeTask === task.id ? 'bg-gray-200' : ''}`}
                            onClick={() => setActiveTask(task.id)}
                        >
                            {task.title}
                        </p>
                    ))}
                </div>
                <div className="w-full">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Lab4;

