import React, { useState } from 'react';
import { assets } from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Аналіз використання Flexbox" },
    { id: 2, title: "Методи" },
    { id: 3, title: "Скріншоти" },
];

const Lab3 = () => {
    const [activeTask, setActiveTask] = useState(1);

    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return (
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Аналіз використання Flexbox</p>
                        <p>На цьому сайті Flexbox використовується для створення адаптивних макетів, які легко підлаштовуються під різні розміри екранів. Це дозволяє елементам автоматично розподіляти простір у контейнері, забезпечуючи зручне вирівнювання та розташування.</p>
                        
                        <p>Flexbox надає можливість легко вирівнювати елементи по горизонталі та вертикалі, що значно спрощує процес створення складних макетів без використання float або позиціонування.</p>
                        
                        <p>Основні властивості, які використовуються:</p>
                        <ul className="list-disc pl-5">
                            <li><strong>display: flex;</strong> - встановлює контейнер як flex-контейнер.</li>
                            <li><strong>justify-content:</strong> - вирівнює елементи по головній осі.</li>
                            <li><strong>align-items:</strong> - вирівнює елементи по перпендикулярній осі.</li>
                            <li><strong>flex-wrap:</strong> - дозволяє елементам переноситися на новий рядок.</li>
                        </ul>
                    </div>
                );
            case 2:
                return (
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Методичні рекомендації</p>
                        <p>Flexbox є потужним інструментом для створення адаптивних макетів. Ось кілька рекомендацій щодо його використання:</p>
                        <ul className="list-disc pl-5">
                            <li>Використовуйте <strong>flex-direction</strong> для зміни напрямку розташування елементів (рядок або стовпець).</li>
                            <li>Застосовуйте <strong>flex-grow</strong> для визначення, як елементи будуть розширюватися, щоб заповнити доступний простір.</li>
                            <li>Використовуйте <strong>flex-shrink</strong> для контролю, як елементи будуть зменшуватися, якщо простір обмежений.</li>
                            <li>Застосовуйте <strong>align-self</strong> для вирівнювання окремих елементів незалежно від інших.</li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Скріншоти</p>
                        <img src={assets.screenshot1} alt="Скріншот 1" className="mb-4" />
                        <img src={assets.screenshot2} alt="Скріншот 2" />
                    </div>
                );
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 3</h1>
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

export default Lab3;
