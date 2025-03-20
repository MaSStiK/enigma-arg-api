const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Соединение установлено...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Подключение зашифровано...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Сохранение данных о кандидате...", newLine: false},

    {text: "&nbsp;"},
    {text: "ПоздрАвляю тебя, Искатель."},
    {text: "Первое задание было лишь прелюдией, вводным шАгом в неизвестность. Теперь начинается ",pause: 20},
        {text: "<mark>настоящее</mark>", newLine: false, type: "code", pause: 20},
            {text: " испытание.", newLine: false},
    {text: "Но знай — с каждым шагом задания будут становиться сложнее, а ответы сКрыты глубже."},

    {text: "&nbsp;"},
    {text: "Твоя следующая подскАзка ближе, чем кажется."},
    {text: "Вглядись внимательнее — ответ всеГда на виду, но не все способны его увидеть."},

    {text: "&nbsp;"},
    {text: "Ответом будет ", pause: 20},
        {text: "<mark>сумма чисел</mark>", newLine: false, type: "code", pause: 20},
            {text: ", умноженная на количество чисел. Догадайся, где искать эти числа.", newLine: false},
    {text: "Запусти этот файл с параметром ответа, чтобы продолжить путь."},
    {text: "<mark>Пример:</mark>", type: "code", pause: 20},
        {text: " key-1.bat 123", newLine: false},

    {text: "&nbsp;"},
    {text: "Время не жДёт. Те, кто медлят, остаются позади."},
    {text: "Вперёд, Искатель. ДорогА ещё длинная."},
    {text: "&nbsp;"},
];

const REPLY_ANSWER_CORRECT = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка ответа...", newLine: false, pause: 2000},
    {text: "&nbsp;"},
    {text: "Поздравляю, тебе удалось разгадать число!"},
    {text: "Следующее испытание в файле ", pause: 20},
        {text: "<mark>key-2-hashed.bat</mark>", newLine: false, type: "code"},
    {text: "&nbsp;"},
];

const REPLY_ANSWER_INCORRECT = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка ответа...", newLine: false, pause: 2000},
    {text: "&nbsp;"},
    {text: "Не то число. Продолжай поиск."},
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
// 33 * 7 = 231

export async function GET(req) {
    const url = new URL(req.url);
    const answer = url.searchParams.get("answer");
    let reply;

    if (!answer) {
        reply = REPLY;
    } else {
        reply = answer === "231"
            ? REPLY_ANSWER_CORRECT
            : REPLY_ANSWER_INCORRECT;
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
