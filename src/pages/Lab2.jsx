import React, { useState } from 'react';
import { assets } from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Тема та мета ЛР №2, Розташування сайту та звіту" },
    { id: 2, title: "Методи підключення стилів" },
    { id: 3, title: "Основи селекторів" },
    { id: 4, title: "Селектори тегів" },
    { id: 7, title: "Інші види селекторів" },
    { id: 8, title: "CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки" },
    { id: 9, title: "Висновки до ЛР №2" },
];

const Lab2 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Функція для відображення контенту на основі activeTask
    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема та мета ЛР №2, Розташування сайту та звіту</p>
                        </div>

                        <p>
                            <strong>Тема:</strong> Вивчення каскадних таблиць стилів, селекторів та ідентифікаторів для оформлення текстових елементів у HTML-документах.
                        </p>

                        <p>
                            <strong>Мета:</strong> Отримати практичні навички роботи з різними типами селекторів, ідентифікаторами, списками, а також властивостями кольору, фону, відступів та оформлення тексту.
                        </p>

                        <ul>
                            <li>
                                <a href="https://github.com/AHgPEu6po/IO-24_appWEB-PetrenkoAndrew-FIOT-2025">Посилання на репозиторій веб-застосунку</a>
                            </li>
                            <li>
                                <a href="https://ahgpeu6po.github.io/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/">Посилання на живу сторінку веб-застосунку</a>
                            </li>
                            <li>
                                <a href="https://github.com/AHgPEu6po/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025">Посилання на репозиторій звітного HTML-документа</a>
                            </li>
                            <li>
                                <a href="https://ahgpeu6po.github.io/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/">Посилання на живу сторінку звітного HTML-документа</a>
                            </li>
                        </ul>
                    </div>
                </div>;
            case 2:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Методи підключення стилів</p>
                        <p>Існує кілька способів підключення CSS до HTML-документів, кожен з яких має свої переваги та недоліки.</p>

                        <p><strong>Вбудовані стилі (Inline CSS):</strong> Застосовуються безпосередньо до елемента через атрибут style. Це швидкий спосіб, але ускладнює підтримку коду.</p>

                        <p><strong>Внутрішні стилі (Internal CSS):</strong> Визначаються у секції head за допомогою тегу style. Підходять для централізованого оформлення однієї сторінки.</p>

                        <p><strong>Зовнішні стилі (External CSS):</strong> Зберігаються у окремих файлах .css і підключаються через тег link. Ідеальні для великих проєктів.</p>

                        <p><strong>Імпортовані стилі (Imported CSS):</strong> Використовуються через директиву @import для підключення одного файлу стилів до іншого.</p>
                    </div>
                </div>;
            case 3:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Основи селекторів</p>
                        <p>Селектори в CSS дозволяють вибирати HTML-елементи для застосування стилів, роблячи сторінки більш привабливими та функціональними.</p>

                        <p><strong>Селектор тегу:</strong> Вибирає всі елементи певного тегу для глобального форматування.</p>

                        <p><strong>Селектор класу:</strong> Вибирає елементи з однаковим класом для групового стилювання.</p>

                        <p><strong>Селектор ідентифікатора:</strong> Вибирає унікальний елемент за його ідентифікатором.</p>

                        <p><strong>Селектор атрибута:</strong> Вибирає елементи на основі атрибутів.</p>

                        <p><strong>Універсальний селектор:</strong> Вибирає всі елементи на сторінці.</p>

                        <p><strong>Сусідній селектор:</strong> Вибирає елемент, що йде безпосередньо після іншого.</p>

                        <p><strong>Дочірній селектор:</strong> Вибирає прямі дочірні елементи.</p>

                        <p><strong>Комбінований селектор:</strong> Вибирає кілька елементів одночасно.</p>

                        <p><strong>Груповий селектор:</strong> Об'єднує кілька селекторів для спільного стилювання.</p>

                        <p><strong>Псевдокласи та псевдоелементи:</strong> Стилізують елементи у певному стані або створюють додаткові елементи.</p>
                    </div>
                </div>;
            case 4:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Селектори класів</p>
                        <p>Код для селекторів класів:</p>
                        <img src={assets.class_selector} alt="Селектор класу" />
                        <p>Фото:</p>
                        <img src={assets.class_selector_photo} alt="Селектор класу" />
                    </div>
                </div>;
            
            case 7:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Інші види селекторів</p>
                        <ul className="list-disc pl-5">
                            <li className="mb-2">
                                <strong>Груповий селектор (,):</strong> Стилізує кілька елементів одночасно. 
                                <br />
                                <em>Приклад:</em> <code>.footer-content-left, .footer-content-right, .footer-content-center</code>
                            </li>
                            <li className="mb-2">
                                <strong>Селектор нащадків (пробіл):</strong> Вибирає всі вкладені елементи.
                                <br />
                                <em>Приклад:</em> <code>.navbar .logo, .food-item-name-rating img</code>
                            </li>
                            <li className="mb-2">
                                <strong>Псевдоклас (:hover):</strong> Стилізує елемент при наведенні миші.
                                <br />
                                <em>Приклад:</em> <code>.navbar button:hover</code>
                            </li>
                            <li className="mb-2">
                                <strong>Псевдоелемент (::-webkit-scrollbar):</strong> Ховає скролбар.
                                <br />
                                <em>Приклад:</em> <code>.explore-menu-list::-webkit-scrollbar</code>
                            </li>
                            <li className="mb-2">
                                <strong>Анімація (animation):</strong> Додає анімацію до елементів.
                                <br />
                                <em>Приклад:</em> <code>animation: fadeIn 1s</code>
                            </li>
                        </ul>
                    </div>
                </div>;
            case 8:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">CSS: Шрифти, Текст, Таблиці, Фон, Контур, Списки</p>
                        
                        <p><strong>Шрифти:</strong> Використання різних шрифтів дозволяє створити унікальний стиль для вашого веб-сайту. Ви можете змінювати розмір, вагу та сімейство шрифтів, щоб покращити читабельність та естетику тексту.</p>
                        
                        <p><strong>Контури:</strong> Контури додають обрамлення навколо елементів, що допомагає виділити їх на сторінці. Властивість `outline` дозволяє налаштовувати товщину, стиль та колір контуру.</p>
                        
                        <p><strong>Фон:</strong> Фонові зображення та кольори можуть значно вплинути на загальний вигляд вашого сайту. Використовуйте властивість `background` для налаштування кольору, зображення, позиції та повторення фону.</p>
                        
                        <p><strong>Колір тексту:</strong> Вибір кольору тексту є важливим для забезпечення контрасту та читабельності. Використовуйте властивість `color` для зміни кольору тексту, щоб він гармонійно поєднувався з фоном.</p>
                        
                        <p><strong>CSS-властивості для таблиць:</strong> Таблиці можуть бути стилізовані за допомогою CSS для покращення їх вигляду. Ви можете налаштовувати межі, відступи, вирівнювання тексту та кольори, щоб зробити таблиці більш привабливими та зрозумілими.</p>
                        
                        <p><strong>CSS-властивості для багаторівневих списків:</strong> Списки можуть бути оформлені за допомогою CSS для створення чіткої ієрархії. Використовуйте властивості для налаштування маркерів, відступів та вирівнювання, щоб покращити структуру та читабельність списків.</p>
                    </div>
                </div>;
            case 9:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Висновки до ЛР №2</p>
                        <p>Виконання лабораторної роботи №2 дозволило глибше зрозуміти принципи роботи з каскадними таблицями стилів (CSS) та їх застосування у веб-розробці. Було вивчено різні види селекторів, що дозволяють гнучко налаштовувати зовнішній вигляд елементів сторінки.</p>

                        <p>Особливу увагу було приділено стилізації текстових елементів, де використовувалися властивості шрифтів, кольору тексту, фонового оформлення та контурів. Також були реалізовані багаторівневі списки та таблиці, що дозволило зрозуміти, як створювати адаптивний та привабливий дизайн.</p>

                        <p>Створення макету в Figma допомогло візуалізувати майбутній вигляд звітного HTML-документа, що стало важливим етапом у верстці та підключенні стилів.</p>

                        <p>Отримані знання та навички є важливими для подальшого вивчення веб-технологій, оскільки CSS є невід'ємною частиною розробки сучасних веб-застосунків.</p>
                    </div>
                </div>;
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 2</h1>
            <div className="flex flex-col lg:flex-row items-start gap-5 mt-5 px-4">
                {/* Sidebar */}
                <div
                    className={`flex flex-col gap-2 w-64 lg:w-48 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
                    {tasks.map(task => (
                        <p
                            key={task.id}
                            className={`pl-3 py-2 border rounded transition-all cursor-pointer mt-4`}
                            onClick={() => setActiveTask(task.id)}
                        >
                            {task.title}
                        </p>
                    ))}
                </div>

                <button
                    className="lg:hidden p-2 border border-gray-300 rounded bg-white mb-4"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Закрити меню' : 'Відкрити меню'}
                </button>

                <div className="w-full grid grid-cols-1 gap-4 gap-y-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Lab2;