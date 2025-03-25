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
    {text: "Следующий шаг спрятан там, где обычные глаза не могут видеть."},
    {text: "Ищи в глубинах даркнета, где скрытые адреса ждут своего времени."},
    {text: "Твоя цель — найти следующий файл, которая откроет последний шаг."},

    {text: "&nbsp;"},
    {text: "Используй команду ниже, чтобы открывать сайты из Даркнета, оставаясь анонимным и незамеченным."},
    {text: "<mark>Пример:</mark>", type: "code", pause: 20},
        {text: " key-4-crypted.bat Ссылка.onion", newLine: false},

    {text: "&nbsp;"},
    {text: "2347"},
    {text: "&nbsp;"},
];

// https://vk.com/club229819402
// whusan_lrzunrmam.uzisa*iafh=hvzkotmim-7
// summon_herobrine.onion*auth=directive-7
// key-4-crypted.bat summon_herobrine.onion
// key-4-crypted.bat summon_herobrine.onion*auth=directive-7

const REPLY_SUMMON_HEROBRINE = [
    {text: "[Socket-Connect] ", speed: "instant"},
    {text: "Инициализация сокет-соединения с Tor-сетью...", newLine: false, pause: 2000},
    {text: "[Socket-Connect] ", speed: "instant"},
    {text: "Установление защищённого канала связи...", newLine: false, pause: 2000},
    {text: "&nbsp;"},
    {text: 
        `<div class="tor-wrapper">
            <div class="tor-inner">
                <h1>Извините!</h1>
                <p>У вас нету доступа к этой странице, если у вас возникла данная проблема пожалуйста свяжитесь с нами: <a href="https://vk.com/enigma2347" target="_blank">https://vk.com/enigma2347</a></p>
                <p>Возможно, вы попали на эту страницу, потому что:</p>
            </div>

            <section class="tor__additional-info">
                <ul>
                    <li>
                        <div class="tor__info-image">
                            <img src="https://enigma-arg-api.vercel.app/tor/server_misconfigured.png">
                        </div>
                        <p class="tor__heading-text">У вас недостаточный уровень допуска.</p>
                    </li>
                    <li>
                        <div class="tor__info-image">
                            <img src="https://enigma-arg-api.vercel.app/tor/IP_changed.png">
                        </div>
                        <p class="tor__heading-text">IP - адрес был изменён.</p>
                    </li>
                    <li>
                        <div class="tor__info-image">
                            <img src="https://enigma-arg-api.vercel.app/tor/server_moved.png">
                        </div>
                        <p class="tor__heading-text">Сайт мог быть перенесён на другой сервер.</p>
                    </li>
                </ul>
            </section>

            <div class="tor__cpanel">
                <img src="https://enigma-arg-api.vercel.app/tor/powered_by_cpanel.svg" alt="powered_by_cpanel">
                <p>Copyright © 2025 cPanel, L.L.C.</p>
            </div>
        </div>`,
        type: "code"
    },
    {text: "&nbsp;"},
]

const REPLY_SUMMON_HEROBRINE_AUTH = [
    {text: "[Socket-Connect] ", speed: "instant"},
    {text: "Инициализация сокет-соединения с Tor-сетью...", newLine: false, pause: 2000},
    {text: "[Socket-Connect] ", speed: "instant"},
    {text: "Установление защищённого канала связи...", newLine: false, pause: 2000},
    {text: "&nbsp;"},
    {text:
        `<div class="encrypted">
            <h1 class="warning">⚠ ДОСТУП К РЕСУРСУ РАЗРЕШЕН ⚠</h1>
            <h2 class="warning">УРОВЕНЬ ДОСТУПА: МАКСИМАЛЬНЫЙ</h2>

            <h3>MCP-666 – "Херобрин"</h3>
            <p>Объект представляет собой аномальное цифровое существо, способное проникать в виртуальные пространства и взаимодействовать с пользователями без их ведома.</p>
            <p><strong>Класс объекта:</strong> <span>КЕТЕР</span></p>
            <p><strong>Сила:</strong> <span class="danger">НЕИЗВЕСТНО</span></p>
            <p><strong>Здоровье:</strong> <span class="danger">НЕИЗВЕСТНО</span></p>
            <p><strong>Месторасположение:</strong> <span class="danger">НЕИЗВЕСТНО</span></p>

            <h2 class="glitch">⚠ ТРЕБУЕТСЯ РАСКРЫТЬ СКРЫТОЕ ПОСЛАНИЕ ⚠</h2>

            <div class="image-container">
                <img src="https://enigma-arg-api.vercel.app/encrypted/encrypted.png" alt="Объект">
                <div class="coordinates">Координаты: X-96.8353, Z488.1930</div>
            </div>
        </div>`,
        type: "code"},
    {text: "&nbsp;"},

]
const REPLY_ERROR_404 = [
    {text: "[Socket-Connect] ", speed: "instant"},
    {text: "Инициализация сокет-соединения с Tor-сетью...", newLine: false, pause: 2000},
    {text: "[FATAL ERROR] 0xD4RKNET_404 - Соединение потеряно!"},
    {text: "Запрашиваемый .onion сайт недоступен или не существует."},
    {text: "&nbsp;"},
];

export async function GET(req) {
    const url = new URL(req.url);
    const answer = url.searchParams.get("answer");
    let reply;

    if (answer) {
        let answerLower = answer.toLowerCase();
        if (answerLower.startsWith("summon_herobrine.onion")) {
            reply = answerLower === "summon_herobrine.onion*auth=directive-7"
                ? REPLY_SUMMON_HEROBRINE_AUTH
                : REPLY_SUMMON_HEROBRINE
        } else {
            reply = REPLY_ERROR_404;
        }
    } else {
        reply = REPLY;
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
