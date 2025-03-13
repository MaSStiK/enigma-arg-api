const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Соединение установлено...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Подключение зашифровано...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
    {text: "Проверка кандидата...", newLine: false},

    {text: "&nbsp;"},
    {text: "Добро пожаловать, Искатель."},
    {text: "Меня зовут ", pause: 20}, {text: "<mark>Энигма</mark>.", newLine: false, type: "code"},
    {text: "Компания, занимающаяся добычей черного золота, поручила мне организовать это событие."},

    {text: "&nbsp;"},
    {text: "Немногие способны видеть за пределами очевидного."},
    {text: "Ты один из них?"},

    {text: `<span class="hidden-text">Следующее задание</span>`, pause: 0, type: "code"},
    {text: "В ", pause: 20}, {text: "<mark>этом</mark>", newLine: false, type: "code", pause: 20}, {text: " сообщении спрятано послание.", newLine: false},
    {text: "Найди его — и ты приблизишься к награде."},
    {text: "Но помни: награду получит только тот, кто первым пройдёт весь путь."},
    {text: "Только те, кто сумеют пройти все испытания, узнают правду."},

    {text: `<span class="hidden-text">В файле</span>`, pause: 0, type: "code"},
    {text: "Поторопись, другие ждать не будут. "},
    {text: "Если вопросы затрудняют путь, команда ", pause: 20}, {text: "<mark>help</mark>", newLine: false, type: "code", pause: 20}, {text: " поможет тебе.", newLine: false},
    
    {text: `<span class="hidden-text">key-1.bat</span>`, pause: 0, type: "code"},
    {text: "Удачи!"},
    {text: "Энигма"},
    {text: "&nbsp;"}
];

export async function GET(req) {
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
