// Данные магазинов (реальные данные по CSV)
const shopsData = [
    {id:1,name:"Софа",category:"mebel",address:"ул. Менделеева, 4",phone:"+7 (906) 219-22-44",description:"Салон мебели — кровати, шкафы, столы, стулья, диваны",products:["Кровати","Шкафы","Столы","Стулья","Диваны"],badge:"Мебель",rating:4.6},
    {id:2,name:"BOXXSale",category:"mebel",address:"Московская ул., 14",phone:"+7 (905) 245-40-62",description:"Мебельный магазин — мебель для дома и офиса",products:["Мебель","Шкафы","Столы","Комоды"],badge:"Мебель",rating:4.5},
    {id:3,name:"Недорогая мебель",category:"mebel",address:"ул. Ломоносова, 10",phone:"+7 (921) 853-02-73",description:"Недорогая мебель — кровати, шкафы, комоды, столы",products:["Кровати","Шкафы","Комоды","Столы"],badge:"Мебель",rating:4.4},
    {id:4,name:"Домашний",category:"produkty",address:"Московская ул., 64А",phone:"не указан",description:"Продуктовый магазин — продукты питания, молочные изделия, хлеб",products:["Хлеб","Молоко","Мясо","Овощи","Фрукты"],badge:"Продукты",rating:4.5},
    {id:5,name:"Прусский мясной комбинат",category:"produkty",address:"Московская ул., 24",phone:"не указан",description:"Мясной комбинат — мясо, колбасы, мясные изделия",products:["Мясо","Колбасы","Мясные изделия"],badge:"Продукты",rating:4.6},
    {id:6,name:"Светофор",category:"produkty",address:"просп. Ленина, 41А",phone:"не указан",description:"Продуктовый магазин — продукты, напитки, бакалея",products:["Продукты","Напитки","Бакалея"],badge:"Продукты",rating:4.4},
    {id:7,name:"Тёплый дом",category:"stroymaterialy",address:"Школьная ул., 11",phone:"не указан",description:"Строительный магазин — кирпич, цемент, доски, краска, инструменты",products:["Кирпич","Цемент","Доски","Краска","Инструменты"],badge:"Стройматериалы",rating:4.9},
    {id:8,name:"Фазенда",category:"stroymaterialy",address:"Московская ул., 33А",phone:"не указан",description:"Строительный магазин — инструменты, крепёж, электрика, сантехника",products:["Инструменты","Электрика","Сантехника","Крепёж"],badge:"Стройматериалы",rating:4.3},
    {id:9,name:"Kari Гипер",category:"odezhda",address:"просп. Ленина, 21А",phone:"+7 (499) 648-05-40",description:"Магазин обуви — обувь для всей семьи",products:["Обувь","Кроссовки","Сапоги","Туфли"],badge:"Одежда",rating:4.5},
    {id:10,name:"Золотая комета",category:"byt",address:"ул. Ломоносова, 5",phone:"+7 (4012) 61-40-02",description:"Бытовая химия, косметика, парфюмерия, товары для дома",products:["Бытовая химия","Косметика","Парфюмерия","Товары для дома"],badge:"Быт",rating:4.4},
    {id:11,name:"Супер Цены",category:"odezhda",address:"Правобережная ул., 4 (этаж 2)",phone:"+7 (962) 269-45-71",description:"Магазин одежды по доступным ценам",products:["Одежда","Брюки","Куртки","Платья"],badge:"Одежда",rating:4.3},
    {id:12,name:"Сервисный центр Девайс",category:"tehnika",address:"просп. Ленина, 35",phone:"+7 (952) 113-69-96",description:"Ремонт телефонов, планшетов, ноутбуков",products:["Ремонт телефонов","Ремонт планшетов","Ремонт ноутбуков"],badge:"Техника",rating:4.7},
    {id:13,name:"SYSтема",category:"tehnika",address:"ул. Победы, 22",phone:"+7 (921) 007-80-67",description:"Компьютеры, комплектующие, аксессуары",products:["Компьютеры","Комплектующие","Аксессуары"],badge:"Техника",rating:4.5},
    {id:14,name:"GSM-мастер",category:"tehnika",address:"Правобережная ул., 4",phone:"+7 (952) 111-12-34",description:"Ремонт телефонов, запчасти",products:["Ремонт телефонов","Запчасти","Аксессуары"],badge:"Техника",rating:4.4},
    {id:15,name:"Гранд",category:"byt",address:"просп. Ленина, 11",phone:"+7 (911) 455-51-23",description:"Бытовая химия — порошки, гели, средства для уборки",products:["Порошки","Гели","Средства для уборки"],badge:"Быт",rating:4.5},
    {id:16,name:"Калина",category:"byt",address:"просп. Ленина, 43",phone:"+7 (40143) 3-36-31",description:"Бытовая химия, товары для дома",products:["Бытовая химия","Товары для дома","Гигиена"],badge:"Быт",rating:4.4},
    {id:17,name:"Золотая комета",category:"byt",address:"ул. Менделеева, 5",phone:"+7 (4012) 97-33-12",description:"Бытовая химия, гигиена",products:["Бытовая химия","Гигиена","Средства для уборки"],badge:"Быт",rating:4.3},
    {id:18,name:"Планета здоровья",category:"apteka",address:"Московская ул., 9",phone:"8 (800) 755-05-00",description:"Аптека — лекарства, витамины, БАДы",products:["Лекарства","Витамины","БАДы"],badge:"Аптека",rating:4.8},
    {id:19,name:"Здравсити",category:"apteka",address:"Московская ул., 26",phone:"8 (800) 500-92-62",description:"Сеть аптек — лекарства, медицинские товары",products:["Лекарства","Медицинские товары","Витамины"],badge:"Аптека",rating:4.7},
    {id:20,name:"Апрель",category:"apteka",address:"Московская ул., 52",phone:"не указан",description:"Аптека — лекарства, витамины, медтехника",products:["Лекарства","Витамины","Медтехника"],badge:"Аптека",rating:4.5},
    {id:21,name:"Техник",category:"avto",address:"ул. Победы, 41А",phone:"+7 (906) 215-11-19",description:"Автозапчасти — иномарки, отечественные",products:["Запчасти","Иномарки","Отечественные"],badge:"Авто",rating:4.5},
    {id:22,name:"Автофарт",category:"avto",address:"ул. Менделеева, 2А",phone:"+7 (952) 116-84-74",description:"Автозапчасти, аксессуары",products:["Запчасти","Аксессуары"],badge:"Авто",rating:4.4},
    {id:23,name:"Деталь",category:"avto",address:"Московская ул., 39",phone:"+7 (921) 265-41-18",description:"Автозапчасти, шины, масла",products:["Запчасти","Шины","Масла"],badge:"Авто",rating:4.3},
    {id:24,name:"Канцлир",category:"kanctovary",address:"Московская ул., 28",phone:"+7 (911) 485-83-30",description:"Канцтовары — тетради, ручки, бумага, портфели",products:["Тетради","Ручки","Бумага","Портфели"],badge:"Канцтовары",rating:4.5},
    {id:25,name:"Холст с маслом",category:"kanctovary",address:"ул. Менделеева, 8А (этаж 1)",phone:"+7 (906) 237-70-13",description:"Канцтовары, художественные принадлежности",products:["Канцтовары","Художественные принадлежности","Холсты"],badge:"Канцтовары",rating:4.4},
    {id:26,name:"ЖЁЛТЫЙ БЕГЕМОТИК",category:"kanctovary",address:"просп. Ленина, 21А (этаж 0)",phone:"+7 (906) 232-35-30",description:"Детские товары, игрушки, товары для дома",products:["Детские товары","Игрушки","Товары для дома"],badge:"Канцтовары",rating:4.5},
    {id:27,name:"Муравейник",category:"odezhda",address:"Московская ул., 9",phone:"+7 909 796-95-76",description:"Одежда для взрослых и детей. Популярное место для школьных покупок!",products:["Одежда","Детская одежда","Школьная форма","Взрослая одежда"],badge:"Одежда",rating:4.6,featured:true,schoolRelated:true},
    {id:28,name:"Кафе Гараж",category:"cafe",address:"г. Гусев",phone:"+7 (967) 355-46-42",description:"Вкусная пицца, мясные блюда, разнообразные супы. Доставка на дом. Работаем с 09:30 до 22:00.",products:["Пицца","Доставка","Мясные блюда","Супы"],badge:"Кафе",rating:4.6},
    {id:29,name:"Мир одежды и обуви",category:"odezhda",address:"ул. Победы, 7Б",phone:"+7 (952) 053-65-62",description:"Магазин одежды и обуви для всей семьи",products:["Одежда","Обувь","Верхняя одежда"],badge:"Одежда",rating:4.1},
    {id:30,name:"Кроп-топ",category:"odezhda",address:"Правобережная ул., 4",phone:"не указан",description:"Магазин одежды — женская и молодёжная одежда",products:["Женская одежда","Молодёжная одежда"],badge:"Одежда",rating:4.5},
    {id:31,name:"Пуговица",category:"odezhda",address:"Московская ул., 23А",phone:"не указан",description:"Магазин одежды — повседневная одежда",products:["Одежда","Повседневная одежда"],badge:"Одежда",rating:3.8},
    {id:32,name:"Фамилия",category:"odezhda",address:"г. Гусев",phone:"не указан",description:"Магазин одежды — ассортимент для всей семьи",products:["Одежда","Аксессуары"],badge:"Одежда",rating:3.7},
    {id:33,name:"Щи Борщи",category:"cafe",address:"просп. Ленина, 21",phone:"+7 (906) 238-89-38",description:"Столовая — домашняя еда каждый день: борщ, щи, комплексные обеды, завтраки. Ежедневно 10:00–20:00.",products:["Борщ","Щи","Комплексные обеды","Завтраки"],badge:"Столовая",rating:4.8},
    {id:34,name:"Закусочная Восток",category:"cafe",address:"ул. Победы, 29",phone:"не указан",description:"Столовая-закусочная — супы, горячие блюда, комплексные обеды",products:["Комплексные обеды","Супы","Горячие блюда"],badge:"Столовая",rating:4.0},
    {id:35,name:"Столовка",category:"cafe",address:"ул. Достоевского, 5г",phone:"не указан",description:"Столовая — обеденный зал, комплексные обеды, супы и горячие блюда",products:["Комплексные обеды","Супы","Мясные блюда"],badge:"Столовая",rating:4.0},
    {id:36,name:"Столовая",category:"cafe",address:"ул. Зворыкина, 6",phone:"не указан",description:"Столовая — домашние обеды, супы, гарниры, выпечка",products:["Комплексные обеды","Супы","Выпечка"],badge:"Столовая",rating:4.0}
]

// Категории (ключ = slug из URL ?cat=mebel)
const categories = {
    "mebel": { name: "Мебель", icon: "🪑", description: "Мебель для дома и офиса в Гусеве" },
    "produkty": { name: "Продукты", icon: "🛒", description: "Продукты питания в Гусеве" },
    "stroymaterialy": { name: "Стройматериалы", icon: "🧱", description: "Строительные материалы в Гусеве" },
    "odezhda": { name: "Одежда", icon: "👗", description: "Одежда и обувь в Гусеве" },
    "tehnika": { name: "Техника", icon: "💻", description: "Бытовая техника и электроника в Гусеве" },
    "byt": { name: "Бытовая химия", icon: "🧴", description: "Бытовая химия и товары для дома в Гусеве" },
    "apteka": { name: "Аптеки", icon: "💊", description: "Аптеки и лекарства в Гусеве" },
    "avto": { name: "Авто", icon: "🚗", description: "Автозапчасти и автотовары в Гусеве" },
    "kanctovary": { name: "Канцтовары", icon: "📎", description: "Канцтовары и офисные принадлежности в Гусеве" },
    "cafe": { name: "Кафе и рестораны", icon: "☕", description: "Кафе, рестораны, столовые и доставка еды в Гусеве" }
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    loadShops();
    loadPopularQueries();
    initSearch();
    loadCategoryPage();
    if (window.location.pathname.indexOf('cafe.html') !== -1) {
        registerCategoryClick('cafe');
    }
    initScrollEffects();
    const form = document.getElementById('addShopForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Мы свяжемся с вами в течение 24 часов.');
            form.reset();
        });
    }
});

// Клики по магазинам (localStorage)
function getShopClicks() {
    try {
        return JSON.parse(localStorage.getItem('flyer_shop_clicks') || '{}');
    } catch (e) {
        return {};
    }
}

function registerShopClick(id) {
    try {
        const clicks = getShopClicks();
        clicks[id] = (clicks[id] || 0) + 1;
        localStorage.setItem('flyer_shop_clicks', JSON.stringify(clicks));
    } catch (e) { /* ignore */ }
}

// Просмотры категорий (localStorage)
function getCategoryClicks() {
    try {
        return JSON.parse(localStorage.getItem('flyer_cat_clicks') || '{}');
    } catch (e) {
        return {};
    }
}

function registerCategoryClick(cat) {
    try {
        const clicks = getCategoryClicks();
        clicks[cat] = (clicks[cat] || 0) + 1;
        localStorage.setItem('flyer_cat_clicks', JSON.stringify(clicks));
    } catch (e) { /* ignore */ }
}

// Сортировка популярных запросов по просмотрам категорий
function loadPopularQueries() {
    const container = document.querySelector('.popular-buttons');
    if (!container) return;

    const clicks = getCategoryClicks();
    const buttons = Array.from(container.querySelectorAll('button[data-cat]'));

    buttons.sort((a, b) => (clicks[b.dataset.cat] || 0) - (clicks[a.dataset.cat] || 0));

    buttons.forEach(btn => {
        container.appendChild(btn);
        btn.addEventListener('click', function() {
            const cat = this.dataset.cat;
            if (cat === 'cafe') {
                window.location.href = 'cafe.html';
            } else {
                window.location.href = cat + '.html';
            }
        });
    });
}

// Загрузка магазинов
function loadShops() {
    const grid = document.getElementById('shopsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const clicks = getShopClicks();
    const scored = shopsData.map(shop => ({
        shop,
        score: (clicks[shop.id] || 0) + (shop.featured ? 0.01 : 0)
    }));
    scored.sort((a, b) => b.score - a.score);
    scored.slice(0, 6).forEach((item, index) => {
        grid.appendChild(createShopCard(item.shop, index, true));
    });
}

// Создание карточки магазина (безопасное создание DOM-элементов)
function createShopCard(shop, index, clickable) {
    const card = document.createElement('div');
    card.className = 'shop-card';
    card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
    if (clickable) {
        card.classList.add('shop-card-clickable');
        card.setAttribute('role', 'link');
        card.tabIndex = 0;
        const go = function() {
            registerShopClick(shop.id);
            window.location.href = shop.category + '.html';
        };
        card.addEventListener('click', go);
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
        });
    }
    
    const header = document.createElement('div');
    header.className = 'shop-header';
    
    const name = document.createElement('span');
    name.className = 'shop-name';
    name.textContent = shop.name;
    
    const badge = document.createElement('span');
    badge.className = 'shop-badge';
    badge.textContent = shop.badge;
    
    header.appendChild(name);
    header.appendChild(badge);
    
    const category = document.createElement('div');
    category.className = 'shop-category';
    category.textContent = shop.category;
    
    const address = document.createElement('div');
    address.className = 'shop-address';
    address.textContent = `📍 ${shop.address}`;
    
    const phone = document.createElement('div');
    phone.className = 'shop-phone';
    phone.textContent = `📱 ${shop.phone}`;
    
    const products = document.createElement('div');
    products.className = 'shop-products';
    shop.products.slice(0, 4).forEach(p => {
        const tag = document.createElement('span');
        tag.className = 'product-tag';
        tag.textContent = p;
        products.appendChild(tag);
    });
    
    card.appendChild(header);
    card.appendChild(category);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(products);
    
    if (shop.website) {
        const website = document.createElement('div');
        website.className = 'shop-phone';
        const websiteLink = document.createElement('a');
        websiteLink.href = shop.website;
        websiteLink.target = '_blank';
        websiteLink.textContent = '🌐 Сайт';
        websiteLink.style.color = '#60a5fa';
        website.appendChild(websiteLink);
        card.appendChild(website);
    }
    
    if (shop.crossCategory) {
        const cross = document.createElement('div');
        cross.className = 'cross-category';
        const catNames = {odezhda:'Одежда',byt:'Быт',mebel:'Мебель',produkty:'Продукты',stroymaterialy:'Стройматериалы',tehnika:'Техника',apteka:'Аптеки',avto:'Авто',kanctovary:'Канцтовары',cafe:'Кафе'};
        cross.textContent = `Также в категории: ${catNames[shop.crossCategory]||shop.crossCategory}`;
        card.appendChild(cross);
    }
    
    return card;
}

// Поиск
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            search();
        }
    });
}

function search() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!query) return;
    
    const loader = document.getElementById('loader');
    const resultsBox = document.getElementById('search-results');
    
    if (loader) loader.style.display = 'flex';
    if (resultsBox) resultsBox.innerHTML = '';
    
    setTimeout(() => {
        if (loader) loader.style.display = 'none';
    
    const categoryMap = {
        "мебель": "mebel",
        "кровать": "mebel",
        "шкаф": "mebel",
        "стол": "mebel",
        "диван": "mebel",
        "продукты": "produkty",
        "еда": "produkty",
        "молоко": "produkty",
        "хлеб": "produkty",
        "мясо": "produkty",
        "овощи": "produkty",
        "фрукты": "produkty",
        "стройматериалы": "stroymaterialy",
        "строительные": "stroymaterialy",
        "кирпич": "stroymaterialy",
        "цемент": "stroymaterialy",
        "краска": "stroymaterialy",
        "одежда": "odezhda",
        "обувь": "odezhda",
        "платье": "odezhda",
        "костюм": "odezhda",
        "техника": "tehnika",
        "телевизор": "tehnika",
        "холодильник": "tehnika",
        "телефон": "tehnika",
        "ноутбук": "tehnika",
        "быт": "byt",
        "химия": "byt",
        "порошок": "byt",
        "уборка": "byt",
        "аптека": "apteka",
        "лекарства": "apteka",
        "витамины": "apteka",
        "авто": "avto",
        "машина": "avto",
        "запчасти": "avto",
        "шины": "avto",
        "канцтовары": "kanctovary",
        "канцелярия": "kanctovary",
        "тетради": "kanctovary",
        "ручки": "kanctovary",
        "бумага": "kanctovary",
        "офис": "kanctovary",
        "кафе": "cafe",
        "ресторан": "cafe",
        "столовая": "cafe",
        "кофейня": "cafe",
        "пицца": "cafe",
        "еда": "cafe",
        "обед": "cafe",
        "доставка": "cafe"
    };
    
    let category = null;
    for (const [key, value] of Object.entries(categoryMap)) {
        if (query.includes(key)) {
            category = value;
            break;
        }
    }
    
    if (category) {
        window.location.href = `${category}.html`;
        return;
    }
    
    const results = shopsData.filter(shop => 
        shop.name.toLowerCase().includes(query) ||
        shop.description.toLowerCase().includes(query) ||
        shop.products.some(p => p.toLowerCase().includes(query))
    );
    
    if (!resultsBox) return;
    
    if (results.length > 0) {
        resultsBox.innerHTML = `
            <div class="search-results-header">
                <span>Найдено ${results.length} магазинов</span>
                <button onclick="document.getElementById('search-results').innerHTML=''" class="search-results-close">✕</button>
            </div>
            <div class="search-results-list">
                ${results.map(shop => `
                    <a href="${shop.category}.html" class="search-result-card">
                        <div class="search-result-name">${shop.name}</div>
                        <div class="search-result-addr">${shop.address}</div>
                        <div class="search-result-desc">${shop.description}</div>
                    </a>
                `).join('')}
            </div>
        `;
    } else {
        resultsBox.innerHTML = `
            <div class="search-results-header">
                <span>Ничего не найдено</span>
                <button onclick="document.getElementById('search-results').innerHTML=''" class="search-results-close">✕</button>
            </div>
            <p class="search-results-empty">Магазины по запросу «${query}» не найдены. Попробуйте другой запрос.</p>
        `;
    }
    }, 500);
}

// Поиск внутри категории
function searchInCategory() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!query) return;
    
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    
    const results = shopsData.filter(shop => {
        if (cat && shop.category !== cat.toLowerCase()) return false;
        return shop.name.toLowerCase().includes(query) ||
               shop.description.toLowerCase().includes(query) ||
               shop.products.some(p => p.toLowerCase().includes(query));
    });
    
    const grid = document.getElementById('categoryShops');
    if (!grid) return;
    
    if (results.length > 0) {
        grid.innerHTML = '';
        results.forEach((shop, index) => {
            grid.appendChild(createShopCard(shop, index));
        });
    } else {
        grid.innerHTML = '<p style="text-align:center; color:#8892b0; grid-column:1/-1; padding:60px;">Магазины по запросу «' + query + '» не найдены в этой категории</p>';
    }
}

// Страница категории
function loadCategoryPage() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    
    if (!cat || !document.getElementById('categoryTitle')) return;
    
    const category = categories[cat.toLowerCase()];
    if (!category) {
        document.getElementById('categoryTitle').textContent = 'Категория не найдена';
        return;
    }
    
    registerCategoryClick(cat.toLowerCase());
    
    document.getElementById('categoryTitle').textContent = `${category.icon} ${category.name} в Гусеве`;
    document.getElementById('categoryDesc').textContent = category.description;
    document.title = `${category.name} в Гусеве — Флаер Гусев`;
    
    const filteredShops = shopsData.filter(shop => 
        shop.category === cat.toLowerCase()
    );
    
    const grid = document.getElementById('categoryShops');
    if (grid) {
        grid.innerHTML = '';
        if (filteredShops.length > 0) {
            filteredShops.forEach((shop, index) => {
                grid.appendChild(createShopCard(shop, index));
            });
        } else {
            grid.innerHTML = '<p style="text-align:center; color:#8892b0; grid-column:1/-1; padding:60px;">Магазины в этой категории пока не добавлены</p>';
        }
    }
}

// Эффекты скролла
function initScrollEffects() {
    const header = document.querySelector('.site-header') || document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Переключение мобильного меню
function toggleMenu() {
    const nav = document.querySelector('.nav') || document.querySelector('.main-nav');
    if (nav) {
        nav.classList.toggle('active');
    }
}


