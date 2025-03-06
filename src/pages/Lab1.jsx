import React, { useState } from 'react';
import { assets } from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Предметне середовище та Бізнес-логіка" },
    { id: 2, title: "Тема, мета, місце розташування" },
    { id: 3, title: "Структура документа" },
    { id: 4, title: "Висновок" },
];

const Lab1 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Функція для відображення контенту на основі activeTask
    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">ПРЕДМЕТНЕ СЕРЕДОВИЩЕ</p>
                        </div>
                        <p>Сайт школи англійської мови — це сучасна онлайн-платформа для вивчення англійської мови, яка допомагає учням будь-якого рівня здобувати знання ефективно та комфортно. Наш сервіс створений для дітей, підлітків і дорослих, які прагнуть покращити свої мовні навички, підготуватися до міжнародних іспитів або просто вільно спілкуватися англійською.

На сайті доступні інтерактивні курси, які включають відеоуроки, граматичні вправи, тестові завдання та матеріали для самостійного навчання. Учні можуть обирати групові або індивідуальні заняття з професійними викладачами.
                        </p>
                        <div className="mb-4 mt-4">
                            <p className="font-semibold text-xl">БІЗНЕС-ЛОГІКА</p>
                        </div>
                        <h2 className="text-lg mt-2">Функціональні вимоги</h2>
                        <ol>
                            <li>Система перегляду загальної інформації про школу.</li>
                            <li>Система перегляду інформації про курси.</li>
                            <li>Система перегляду інформації про викладачів.</li>
                            <li>Система перегляду інформації про розклад занять.</li>
                            <li>Можливість залишити заявку на заняття.</li>
                            <li>Можливість проходження тестів для оцінки рівня знань.</li>
                            <li>Система автоматичних сповіщень про статус заявки.</li>
                        </ol>

                        <h2 className="text-lg mt-2">Нефункціональні вимоги</h2>
                        <ol>
                            <li>Забезпечення високого рівня безпеки персональних даних.</li>
                            <li>Масштабованість для збільшення кількості користувачів.</li>
                            <li>Оптимізація продуктивності для швидкої обробки запитів.</li>
                            <li>Підтримка адаптивного дизайну для мобільних пристроїв.</li>
                            <li>Зручний та інтуїтивно зрозумілий інтерфейс.</li>
                            <li>Можливість інтеграції з іншими сервісами (аналітика, повідомлення).</li>
                        </ol>
                    </div>
                </div>;
            case 2:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Тема, мета, місце розташування WEB-застосунка та місце
                            звітного HTML-документу</p>
                    </div>

                    <p>
                        Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. GitHub. РОБОТА З РЕПОЗИТОРІЯМИ. ОСНОВНІ
                        ТЕГИ ТА
                        АТРИБУТИ в HTML-ДОКУМЕНТІ.
                    </p>

                    <p>
                        Мета: Придбати практичні навички роботи з GitHub, репозиторіями, HTML-документом, таблицями,
                        зображеннями,
                        посиланнями, списками, формами. Створити шаблон звітного HTML-документом для відображення
                        результатів роботи всіх лабораторних робіт.
                    </p>


                    <ul>
                        <li>
                            <a href="https://github.com/AHgPEu6po/IO-24_appWEB-PetrenkoAndrew-FIOT-2025">Посилання на репозиторій власного WEB-застосунку</a>
                        </li>
                        <li>
                            <a href="https://ahgpeu6po.github.io/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/">Посилання на репозиторій на живу сторінку власного WEB-застосунку</a>
                        </li>
                        <li>
                            <a href="https://github.com/AHgPEu6po/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025">Посилання на репозиторій звітного HTML-документа</a>
                        </li>
                        <li>
                            <a href="https://ahgpeu6po.github.io/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/">Посилання на репозиторій на живу сторінку звітного HTML-документу</a>
                        </li>
                        <li>
                            Посилання на репозиторій з самостійними роботами:<a></a>
                        </li>
                        <li>
                            Посилання на репозиторій живу сторінку з самостійними роботами:<a></a>
                        </li>
                    </ul>
                </div>;
            case 3:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">СТРУКТУРА ДОКУМЕНТА</p>
                    </div>

                    <p>
                        <strong>Сторінка Index.html:</strong> Ця сторінка є основною точкою входу для нашого веб-застосунку. Вона містить базову структуру HTML, яка включає підключення до стилів та скриптів. Ось як виглядає структура нашого index.html:
                    </p>
                    <img src={assets.index} alt="Структура Index.html" />

                    <p>
                        <strong>Сторінка App.tsx:</strong> Цей файл є основним компонентом нашого React-застосунку, написаного на TypeScript. Він відповідає за рендеринг основних компонентів та управління станом застосунку. Ось короткий опис структури App.tsx:
                    </p>
                    <img src={assets.app} alt="Структура App.tsx" />

                    <p>
                        <strong>Список елементів:</strong> У нашому застосунку є список елементів, який відображається на сторінці. Ось як виглядає код для створення цього списку:
                    </p>
                    <img src={assets.list} alt="Код для списку" />

                    <p>
                        <strong>Відображення елементів на сайті:</strong> Ось як ці елементи виглядають на вашому сайті. Вони організовані у вигляді карток, що містять основну інформацію та зображення.
                    </p>
                    <img src={assets.first_list} alt="Відображення елементів" />

                    <p>
                        <strong>Футер:</strong> Футер нашого сайту містить інформацію про авторські права та контактні дані. Він розташований внизу сторінки і забезпечує легкий доступ до важливої інформації.
                    </p>
                    <img src={assets.footer} alt="Код футера" />
                    <img src={assets.footer1} alt="Відображення футера" />

                    <p>
                        <strong>Хедер:</strong> Хедер нашого сайту містить навігаційне меню та логотип. Він розташований у верхній частині сторінки і забезпечує швидкий доступ до основних розділів сайту.
                    </p>
                    <img src={assets.header} alt="Код хедера" />
                    <img src={assets.header1} alt="Відображення хедера" />
                </div>;
            case 4:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">ВИСНОВОК</p>
                        </div>
                        <p>
                            В результаті виконання лабораторної роботи ми отримали практичні навички роботи з GitHub, репозиторіями, HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створили шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
                        </p>
                    </div>
                </div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 1</h1>
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

                {/* Toggle Sidebar Button */}
                <button
                    className="lg:hidden p-2 border border-gray-300 rounded bg-white mb-4"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Закрити меню' : 'Відкрити меню'}
                </button>

                {/* Content */}
                <div className="w-full grid grid-cols-1 gap-4 gap-y-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Lab1;