const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Соединение установлено...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Внешний мониторинг отключен...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Подключение анонимизировано...", newLine: false},

    {text: "&nbsp;"},
    {text: "Искатель, ты снова доказал свою ", pause: 20},
        {text: "<mark>стойкость</mark>.", newLine: false, type: "code"},

    {text: "&nbsp;"},
    {text: "На этот раз тебе предстоит расшифровать ссылку на изображение."},
    {text: "Подсказка к ней спрятана в ", pause: 20},
        {text: "<mark>простых числах</mark>", newLine: false, type: "code", pause: 20},
            {text: ", а разгадка — в твоей ", newLine: false, pause: 20},
                {text: "<mark>клавиатуре</mark>.", newLine: false, type: "code"},
    {text: "Следуй за текстом, и он приведёт тебя к изображению, которое не должно было быть найдено."},

    {text: "&nbsp;"},
    {text: "╔════════════════════════════════╗", type: "code"},
    {text: "aynnib_gweiveubw.ibuib 12 26 32"},
    {text: "╚════════════════════════════════╝  ", type: "code"},

    {text: "&nbsp;"},
    {text: "Следуй за цифрами, пользуйся клавиатурой, и ты найдешь путь."},
    {text: "Введи расшифрованную "},
        {text: "<mark>ссылку</mark>", type: "code", newLine: false, pause: 20},
            {text: " и откроешь следующую дверь.", newLine: false},
    {text: "<mark>Пример:</mark>", type: "code", pause: 20},
        {text: " key-3-secured.bat Ссылка.домен", newLine: false},

    {text: "&nbsp;"},
    {text: "Не теряй времени — половина пути уже пройдена!"},
    {text: "2347"},
    {text: "&nbsp;"},
];

// summon_herobrine.onion 23 37 43
// aynnib_gweiveubw.ibuib 12 26 32
// Решение - Сдвиг на один вправо

const REPLY_ANSWER_CORRECT = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка ответа...", newLine: false, pause: 2000},
    {text: "&nbsp;"},
    {text: "Ссылка расшифрована. Доступ к ней разблокирован."},
    {text: "Дальнейший путь выходит за рамки закона."},
    {text: "Решай сам, готов ли ты перейти черту."},
    {text: "Следующее испытание в файле key-4-crypted.bat"},
    {text: "&nbsp;"},
];

const REPLY_ANSWER_INCORRECT = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка ответа...", newLine: false, pause: 2000},
    {text: "&nbsp;"},
    {text: "Ссылка ведёт не туда. Попробуй снова."},
    {text: "&nbsp;"},
];

export async function GET(req) {
    const url = new URL(req.url);
    const answer = url.searchParams.get("answer");
    let reply;

    if (!answer) {
        reply = REPLY;
    } else {
        reply = ["summon_herobrine.onion", "summon_herobrine.onion 23 37 43"].includes(answer.toLowerCase())
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
