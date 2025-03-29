const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Соединение установлено...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Сбор данных...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Проверка кандидата...", newLine: false},

    {text: "&nbsp;"},
    {text: "Добро пожаловать, Искатель."},
    {text: "Меня зовут ", pause: 20},
        {text: "<mark>Энигма</mark>.", newLine: false, type: "code"},
    {text: `Когда-то я работал на корпорацию по добыче черного золота и видел, как они скрывают правду.`},

    {text: "&nbsp;"},
    {text: "Корпорация знала. Всегда знала."},
    {text: "До того, как началась добыча, шахтёры уже слышали голоса."},
    {text: "Видели тени, но не было никого, кто мог бы их отбрасывать."},
    {text: "Некоторых из них больше никто не видел."},

    {text: "&nbsp;"},
    {text: "Доклады об аномалиях засекречены."},
    {text: "Те, кто задавал вопросы, исчезли вместе с ответами."},

    {text: "&nbsp;"},
    {text: "Но бурение продолжалось, как ни в чем не бывало."},

    {text: "&nbsp;"},
    {text: "--------------------"},

    {text: "&nbsp;"},
    {text: "Я покинул корпорацию, но не забыл её тайн."},

    {text: `<span class="hidden-text">Следующее задание</span>`, pause: 0, type: "code"},
    {text: "В этом сообщении спрятано послание, читай ", pause: 20},
        {text: "<mark>между строк</mark>", newLine: false, type: "code", pause: 20},
            {text: ", чтобы найти его и приблизиться к правде.", newLine: false},
    {text: "Но помни: награду получит только тот, кто "},
        {text: "<mark>первым</mark>", newLine: false, type: "code", pause: 20},
            {text: " пройдёт весь путь.", newLine: false},
    {text: "Только те, кто сумеют пройти все испытания, получат ценную информацию."},

    {text: `<span class="hidden-text">В файле</span>`, pause: 0, type: "code"},
    {text: "Поторопись, другие ждать не будут. "},
    {text: "Если вопросы затрудняют путь, команда ", pause: 20},
        {text: "<mark>help</mark>", newLine: false, type: "code", pause: 20},
            {text: " поможет тебе.", newLine: false},
    
    {text: `<span class="hidden-text">key-1.bat</span>`, pause: 0, type: "code"},
    {text: "Удачи!"},
    {text: "2347"},
    {text: "&nbsp;"}
];

export async function GET(req) {
    console.log("[GET] start.bat")

    return new Response(
        JSON.stringify(REPLY),
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
