const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Соединение через луковую сеть...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Обход через Tor завершён...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Доступ в Даркнет получен...", newLine: false},

    {text: "&nbsp;"},
    {text: "Искатель, ты ", pause: 20},
        {text: "<mark>осмелился</mark>", newLine: false, type: "code", pause: 20},
            {text: " перейти черту допустимого.", newLine: false},
    {text: "Обратной дороги теперь нет."},

    {text: "&nbsp;"},
    {text: "Ты прошёл сквозь луковые сети и оказался по ту сторону обычного интернета."},
    {text: "Теперь ты в Даркнете, где тени хранят секреты, которые не должны были быть раскрыты."},
    {text: "Перед тобой – след, ведущий к засекреченной правительственной тайне."},
    {text: "Но помни: каждый разгаданный шифр приближает тебя к цели, и цена за это уже назначена."},

    {text: "&nbsp;"},
    {text: "Используй команду ниже, чтобы открывать сайты из Даркнета, оставаясь анонимным и незамеченным."},
    {text: "<mark>Пример:</mark>", type: "code", pause: 20},
        {text: " key-4-crypted.bat Ссылка.домен", newLine: false},

    {text: `<img src="http://localhost:3000/encrypted.png" alt="encrypted">`, type: "code"},

    {text: "&nbsp;"},
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
