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
    {text: "На этот раз мне нужна твоя помощь в расшифровке ссылки, которая ведет на ресурс с информацией об этом загадочном существе."},
    {text: "Подсказка к ней спрятана в ", pause: 20},
        {text: "<mark>простых числах</mark>", newLine: false, type: "code", pause: 20},
            {text: ", а разгадка — в твоей ", newLine: false, pause: 20},
                {text: "<mark>клавиатуре</mark>.", newLine: false, type: "code"},
    {text: "Следуй за ссылкой, и она приведёт тебя к информации, которая была плохо спрятана."},

    {text: "&nbsp;"},
    {text: "╔═══════════════════════════════════╗", type: "code"},
    {text: "swwo_axykj_iuk.ibuib/gevb 12 26 32"},
    {text: "╚═══════════════════════════════════╝  ", type: "code"},

    {text: "&nbsp;"},
    {text: "Введи расшифрованную "},
        {text: "<mark>ссылку</mark>", type: "code", newLine: false, pause: 20},
            {text: " и ты сделаешь следующий шаг в разгадке этой тайны.", newLine: false},
    {text: "<mark>Пример:</mark>", type: "code", pause: 20},
        {text: " key-3-secured.bat Ссылка.домен", newLine: false},

    {text: "&nbsp;"},
    {text: "Не теряй времени — половина пути уже пройдена!"},
    {text: "2347"},
    {text: "&nbsp;"},
];

// deep_sculk_oil.onion/hrbn 23 37 43
// swwo_axykj_iuk.ibuib/gevb 12 26 32
// Решение - Сдвиг на один влево
// https://www.dcode.fr/keyboard-shift-cipher

const REPLY_ANSWER_CORRECT = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка ответа...", newLine: false, pause: 2000},
    {text: "&nbsp;"},
    {text: "Ссылка расшифрована. Доступ к ней разблокирован."},
    {text: "Дальнейший путь выходит за рамки закона."},
    {text: "Решай сам, готов ли ты перейти черту."},
    {text: "Следующее испытание в файле ", pause: 20},
        {text: "<mark>key-4-crypted.bat</mark>", newLine: false, type: "code"},
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
        reply = ["deep_sculk_oil.onion/hrbn", "deep_sculk_oil.onion/hrbn 23 37 43"].includes(answer.toLowerCase())
            ? REPLY_ANSWER_CORRECT
            : REPLY_ANSWER_INCORRECT;
    }

    console.log("[GET] key-3-secured.bat, answer: " + answer)

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
