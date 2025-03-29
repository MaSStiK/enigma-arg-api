const REPLY = [
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Канал связи закрыт...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Поток данных заархивирован...", newLine: false},
    {text: "Reply from 77.85.11.60: ", speed: "instant"},
        {text: "Узел отправки ликвидирован...", newLine: false},

    {text: "&nbsp;"},
    {text: "Теперь ты видел всю  ", pause: 20},
        {text: "<mark>правду</mark>", newLine: false, type: "code", pause: 20},
            {text: ", мы узнали даже больше, чем хотели.", newLine: false},

    {text: "&nbsp;"},
    {text: "Значит скалк..."},
    {text: "Они думали, что это просто редкий материал, глубинный ресурс, который можно выкачивать, продавать, превращать в топливо."},
    {text: "Но скалк – это не просто порода. Он живёт. И ", pause: 20},
        {text: "<mark>нечто</mark>", newLine: false, type: "code", pause: 20},
            {text: " охраняет его.", newLine: false},

    {text: "&nbsp;"},
    {text: "Чем глубже копали шахтёры, тем чаще слышали голоса."},
    {text: "Те, кто дотрагивался до глубинного скалка, рассказывали о вспышках в темноте и белых глазах, что наблюдали из пустоты."},
    {text: "Они стали звать его ", pause: 20},
        {text: `<span class="glitch">Херобрин</span>`, newLine: false, type: "code", pause: 20},
            {text: ".", newLine: false},

    {text: "&nbsp;"},
    {text: "Я нашёл последнее сообщение одного из инженеров:"},
    {text: `"Мы не знали что мы везем... Но наш грузовик начало затягивать в черную, густую жидкость. Она тянула нас всё сильнее, как будто сама земля хотела нас поглотить. Никаких шансов выбраться. Мы уже не выберемся... Всё, это конец..."`},

    {text: "&nbsp;"},
    {text: "У меня получилось расшифровать последнее загадочное послание, оставленное в том месте, откуда исходил этот сигнал и где пропало несколько команд инженеров."},
    {text: "Вот координаты этой катастрофы, скрытой в архивах: ", pause: 20},
        {text: "<mark>X37 Z618</mark>", newLine: false, type: "code"},
    {text: "В том месте, куда ты попадешь, скрыт последний шифр. Разгадай его, и ", pause: 20},
        {text: "<mark>награда</mark>", newLine: false, type: "code", pause: 20},
            {text: " будет твоей!", newLine: false},

    {text: "&nbsp;"},
    {text: "Возможно, мы еще когда-нибудь пересечемся..."},
    {text: "Удачи! До связи..."},
    {text: "2347"},
    {text: "&nbsp;"},
];

// X-56 1011000 101101 110101 110110 
// Z637 1011010 110110 110011 110111

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
