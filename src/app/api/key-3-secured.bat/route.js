const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Соединение установлено...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Подключение зашифровано...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Активация протокола безопасности...", newLine: false},

    {text: "&nbsp;"},
    {text: "Ты уже сделал свой первый шаг, Искатель."},
    {text: "Я наблюдаю и радуюсь твоему ", pause: 20}, {text: "<mark>успеху</mark>", newLine: false, type: "code", pause: 20}, {text: ".", newLine: false},

    {text: "&nbsp;"},
    {text: "Этот мир полон шума, но среди хаоса скрыта истина."},
    {text: "Тебе предстоит расшифровать её."},

    {text: "&nbsp;"},
    {text: "В давние времена великий правитель оставил послание для тех, кто умеет видеть скрытое."},
    {text: "Его голос зашифрован. Разгадай шифр и ты узнаешь ответ."},
    {text: "Цезарь говорит: 11 12 5 20 1 7, 15 30 5 32 1 7, 11 10 29 1 32 5 7"},

    {text: "&nbsp;"},
    {text: "Расшифруй послание, введи ", pause: 20}, {text: "<mark>правильную фразу</mark>", newLine: false, type: "code", pause: 20}, {text: " и продолжай путь.", newLine: false},
    {text: "Запусти этот файл с параметром ответа."},
    {text: "<mark>Пример:</mark>", type: "code", pause: 20}, {text: " key-2-hashed.bat Ответ", newLine: false},

    {text: "&nbsp;"},
    {text: "Не останавливайся. Истина ближе, чем кажется."},
    {text: "&nbsp;"},
];

// 26 27 19 3 15 22 , 30 12 19 14 15 22 , 26 25 11 15 14 19 22
// Щ Ъ Т В О Х , Э Л Т Н О Х , Щ Ш К О Н Т Х
// ПРИШЕЛ , УВИДЕЛ , ПОБЕДИЛ


const REPLY_ANSWER_CORRECT = [
    {text: `Reply from 77.85.11.60: `, speed: "instant"},
    {text: `Ты разгадал фразу.`, newLine: false},
    {text: `Reply from 77.85.11.60: `, speed: "instant"},
    {text: `Следующее испытание в файле key-3-secured.bat`, newLine: false},
    {text: "&nbsp;"},
];

const REPLY_ANSWER_INCORRECT = [
    {text: `Reply from 77.85.11.60: `, speed: "instant"},
    {text: `Не то число. Продолжай поиск.`, newLine: false},
    {text: "&nbsp;"},
];

export async function GET(req) {
    const url = new URL(req.url);
    const answer = url.searchParams.get('answer');
    let reply;

    // Если без ответа, отправляем подсказку
    if (!answer) {
        reply = REPLY;
    } else {
        reply = answer.toLowerCase() === "пришел, увидел, победил" ? REPLY_ANSWER_CORRECT : REPLY_ANSWER_INCORRECT;
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
