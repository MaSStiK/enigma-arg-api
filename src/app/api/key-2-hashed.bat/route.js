const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Соединение установлено...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Внешний трафик зашифрован...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Источник: [Удалено]...", newLine: false},

    {text: "&nbsp;"},
    {text: "Ты справился с первым испытанием, Искатель."},
    {text: "Я наблюдаю и радуюсь твоему ", pause: 20},
        {text: "<mark>успеху</mark>.", newLine: false, type: "code"},

    {text: "&nbsp;"},
    {text: "Этот мир полон шума, но среди хаоса скрыта истина."},
    {text: "Тебе предстоит расшифровать её."},

    {text: "&nbsp;"},
    {text: "В давние времена великий правитель ", pause: 20},
        {text: "<mark>Цезарь</mark>", newLine: false, type: "code", pause: 20},
            {text: " оставил послание для тех, кто умеет видеть скрытое.", newLine: false},
    {text: "Это послание было зашифровано и преобразовано в цифры."},

    {text: "&nbsp;"},
    {text: "Тиберий Клавдий Цезарь говорит:"},
    {text: "26 27 19 2 15 22, 30 12 19 14 15 22, 26 25 11 15 14 19 22"},

    {text: "&nbsp;"},
    {text: "Расшифруй послание, введи правильную ", pause: 20},
        {text: "<mark>фразу</mark>", newLine: false, type: "code", pause: 20},
            {text: " и продолжай путь.", newLine: false},
    {text: "<mark>Пример:</mark>", type: "code", pause: 20},
        {text: " key-2-hashed.bat Ответ", newLine: false},

    {text: "&nbsp;"},
    {text: "Не останавливайся! Истина ближе, чем кажется."},
    {text: "2347"},
    {text: "&nbsp;"},
];

const REPLY_ANSWER_CORRECT = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка ответа...", newLine: false, pause: 2000},
    
    {text: "&nbsp;"},
    {text: "Фарнак, сын Митридата, после смерти отца захватил земли, включая Галатию и Пафлагонию, и обратился за помощью к Риму."},
    {text: `Цезарь быстро пришел в регион, разгромил врага и с уверенностью написал: "Veni, Vidi, Vici", что означало "Пришел, увидел, победил".`},

    {text: "&nbsp;"},
    {text: "Один из начальников любил вкидывать цитаты Цезаря, даже не задумываясь о их значении."},
    {text: "Что ж, не будем отходить от темы."},

    {text: "&nbsp;"},
    {text: `В файлах базы данных корпорации я обнаружил упоминание о неком существе под кодовым именем "hrbn".`},
    {text: "Оно появлялось там, где пропадали люди, но его природа оставалась загадкой."},
    {text: "Все записи о нем строго засекречены, но кое-кто по неосторожности все же упомянул его в своих документах..."},

    {text: "&nbsp;"},
    {text: "Следующее испытание в файле ", pause: 20},
        {text: "<mark>key-3-secured.bat</mark>", newLine: false, type: "code"},
    {text: "&nbsp;"},
];

const REPLY_ANSWER_INCORRECT = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка ответа...", newLine: false, pause: 2000},
    {text: "&nbsp;"},
    {text: "Это не та фраза. Ищи дальше."},
    {text: "&nbsp;"},
];

// 26 27 19 2 15 22, 30 12 19 14 15 22, 26 25 11 15 14 19 22
// Щ Ъ Т В О Х , Э Л Т Н О Х , Щ Ш К О Н Т Х
// Ответ: ПРИШЕЛ, УВИДЕЛ, ПОБЕДИЛ

export async function GET(req) {
    const url = new URL(req.url);
    const answer = url.searchParams.get("answer");
    let reply;

    if (!answer) {
        reply = REPLY;
    } else {
        reply = answer.toLowerCase() === "пришел, увидел, победил"
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
