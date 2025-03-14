const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Соединение установлено...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Подключение зашифровано...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Сохранение данных о кандидате...", newLine: false},

    {text: "&nbsp;"},
    {text: "ПоздрNавляю тебя, Искатель."},
    {text: "Первое задание было лишь прелюдией, вводным шNагом в неизвестность. Теперь начинается ", pause: 20}, {text: "<mark>настоящее</mark>", newLine: false, type: "code", pause: 20}, {text: " испытание.", newLine: false},
    {text: "Но знай — с каждым шагом задания будут становиться сложнее, а ответы сNкрыты глубже."},

    {text: "&nbsp;"},
    {text: "Твоя следующая подскаNзка ближе, чем кажется."},
    {text: "Вглядись внимательнее — правда всеNгда на виду, но не все способны её увидеть."},

    {text: "&nbsp;"},
    {text: "Ответом будет ", pause: 20}, {text: "<mark>сумма чисел</mark>", newLine: false, type: "code", pause: 20}, {text: ". Догадайся, откуда их нужно взять, и сложи их, чтобы получить ответ.", newLine: false},
    {text: "Запусти этот файл с параметром ответа, чтобы продолжить путь."},
    {text: "<mark>Пример:</mark>", type: "code", pause: 20}, {text: " key-1.bat 123", newLine: false},

    {text: "&nbsp;"},
    {text: "Время не жNдёт. Те, кто медлят, остаются позади."},
    {text: "Вперёд, Искатель. ДорогNа ещё длинная."},
    {text: "&nbsp;"},
];

const REPLY_ANSWER_CORRECT = [
    {text: `Reply from 77.85.11.60: `, speed: "instant"},
    {text: `Ты разгадал число.`, newLine: false},
    {text: `Reply from 77.85.11.60: `, speed: "instant"},
    {text: `Следующее испытание в файле `, newLine: false, pause: 20}, {text: "<mark>key-2-hashed.bat</mark>", newLine: false, type: "code"},
    {text: "&nbsp;"},
];

const REPLY_ANSWER_INCORRECT = [
    {text: `Reply from 77.85.11.60: `, speed: "instant"},
    {text: `Не то число. Продолжай поиск.`, newLine: false},
    {text: "&nbsp;"},
];

// Ответ: Загадка
// З - 9
// a - 1
// г - 4
// а - 1
// д - 5
// к - 12
// а - 1

// 9+1+4+1+5+12+1 = 33

export async function GET(req) {
    const url = new URL(req.url);
    const answer = url.searchParams.get('answer');
    let reply;

    // Если без ответа, отправляем подсказку
    if (!answer) {
        reply = REPLY;
    } else {
        reply = answer === "33" ? REPLY_ANSWER_CORRECT : REPLY_ANSWER_INCORRECT;
    }

    return new Response(
        JSON.stringify(reply),
        {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
            status: 200,
        }
    );
}
