// Данные магазинов (реальные данные по CSV)
const shopsData = [
    {id:1,name:"Софа",category:"mebel",address:"ул. Менделеева, 4",phone:"+7 (906) 219-22-44",description:"Салон мебели — кровати, шкафы, столы, стулья, диваны",products:["Кровати","Шкафы","Столы","Стулья","Диваны"],badge:"Мебель",rating:4.6},
    {id:2,name:"BOXXSale",category:"mebel",address:"Московская ул., 14",phone:"+7 (905) 245-40-62",description:"Мебельный магазин — мебель для дома и офиса",products:["Мебель","Шкафы","Столы","Комоды"],badge:"Мебель",rating:4.5},
    {id:3,name:"Недорогая мебель",category:"mebel",address:"ул. Ломоносова, 10",phone:"+7 (921) 853-02-73",description:"Недорогая мебель — кровати, шкафы, комоды, столы",products:["Кровати","Шкафы","Комоды","Столы"],badge:"Мебель",rating:4.4},
    {id:4,name:"Домашний",category:"produkty",address:"Московская ул., 64А",phone:"не указан",description:"Продуктовый магазин — продукты питания, молочные изделия, хлеб",products:["Хлеб","Молоко","Мясо","Овощи","Фрукты"],badge:"Продукты",rating:4.5},
    {id:5,name:"Прусский мясной комбинат",category:"produkty",address:"Московская ул., 24",phone:"не указан",description:"Мясной комбинат — мясо, колбасы, мясные изделия",products:["Мясо","Колбасы","Мясные изделия"],badge:"Продукты",rating:4.6},
    {id:6,name:"Светофор",category:"produkty",address:"просп. Ленина, 41А",phone:"не указан",description:"Продуктовый магазин — продукты, напитки, бакалея",products:["Продукты","Напитки","Бакалея"],badge:"Продукты",rating:4.4},
    {id:7,name:"Тёплый дом",category:"stroymaterialy",address:"Школьная ул., 11",phone:"+7 (40143) XXX-XX-XX",description:"Строительный магазин — кирпич, цемент, доски, краска, инструменты",products:["Кирпич","Цемент","Доски","Краска","Инструменты"],badge:"Стройматериалы",rating:4.9},
    {id:8,name:"Фазенда",category:"stroymaterialy",address:"Московская ул., 33А",phone:"не указан",description:"Строительный магазин — инструменты, крепёж, электрика, сантехника",products:["Инструменты","Электрика","Сантехника","Крепёж"],badge:"Стройматериалы",rating:4.3},
    {id:9,name:"Kari Гипер",category:"odezhda",address:"просп. Ленина, 21А",phone:"+7 (499) 648-05-40",description:"Магазин обуви — обувь для всей семьи",products:["Обувь","Кроссовки","Сапоги","Туфли"],badge:"Одежда",rating:4.5},
    {id:10,name:"Золотая комета",category:"odezhda",address:"ул. Ломоносова, 5",phone:"+7 (4012) 61-40-02",description:"Магазин одежды — одежда, аксессуары",products:["Одежда","Аксессуары"],badge:"Одежда",rating:4.4},
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
    {id:23,name:"Деталь",category:"avto",address:"Московская ул., 39",phone:"+7 (921) 265-41-18",description:"Автозапчасти, шины, масла",products:["Запчасти","Шины","Масла"],badge:"Авто",rating:4.3}
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
    "avto": { name: "Авто", icon: "🚗", description: "Автозапчасти и автотовары в Гусеве" }
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    loadShops();
    initSearch();
    loadCategoryPage();
    initScrollEffects();
});

// Загрузка магазинов
function loadShops() {
    const grid = document.getElementById('shopsGrid');
    if (!grid) return;
    
    grid.innerHTML = shopsData.slice(0, 6).map((shop, index) => 
        createShopCard(shop, index)
    ).join('');
}

// Создание карточки магазина
function createShopCard(shop, index) {
    return `
        <div class="shop-card" style="animation: fadeInUp 0.6s ease ${index * 0.1}s both">
            <div class="shop-header">
                <span class="shop-name">${shop.name}</span>
                <span class="shop-badge">${shop.badge}</span>
            </div>
            <div class="shop-category">${shop.category}</div>
            <div class="shop-address">📍 ${shop.address}</div>
            <div class="shop-phone">📱 ${shop.phone}</div>
            <div class="shop-products">
                ${shop.products.slice(0, 4).map(p => `<span class="product-tag">${p}</span>`).join('')}
            </div>
        </div>
    `;
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
    
    const resultsBox = document.getElementById('search-results');
    
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
        "шины": "avto"
    };
    
    let category = null;
    for (const [key, value] of Object.entries(categoryMap)) {
        if (query.includes(key)) {
            category = value;
            break;
        }
    }
    
    if (category) {
        window.location.href = `category.html?cat=${category}`;
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
                    <a href="category.html?cat=${shop.category}" class="search-result-card">
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
        grid.innerHTML = results.map((shop, index) => createShopCard(shop, index)).join('');
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
    
    document.getElementById('categoryTitle').textContent = `${category.icon} ${category.name} в Гусеве`;
    document.getElementById('categoryDesc').textContent = category.description;
    document.title = `${category.name} в Гусеве — Флаер Гусев`;
    
    const filteredShops = shopsData.filter(shop => 
        shop.category === cat.toLowerCase()
    );
    
    const grid = document.getElementById('categoryShops');
    if (grid) {
        if (filteredShops.length > 0) {
            grid.innerHTML = filteredShops.map((shop, index) => 
                createShopCard(shop, index)
            ).join('');
        } else {
            grid.innerHTML = '<p style="text-align:center; color:#8892b0; grid-column:1/-1; padding:60px;">Магазины в этой категории пока не добавлены</p>';
        }
    }
}

// Меню
function toggleMenu() {
    document.querySelector('.nav').classList.toggle('active');
}

// Эффекты скролла
function initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Форма
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addShopForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Ваш магазин будет добавлен после проверки.');
            form.reset();
        });
    }
});
