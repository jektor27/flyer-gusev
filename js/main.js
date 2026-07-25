// Данные магазинов (реальные данные по CSV)
const shopsData = [
    {
        id: 1,
        name: "Софа39",
        category: "mebel",
        address: "ул. Менделеева, 4",
        phone: "+7 (4012) XX-XX-XX",
        description: "Салон мебели — кровати, шкафы, столы, стулья, диваны",
        products: ["Кровати", "Шкафы", "Столы", "Стулья", "Диваны"],
        badge: "Мебель",
        rating: 4.6
    },
    {
        id: 2,
        name: "BOXXSale",
        category: "mebel",
        address: "Московская ул., 14",
        phone: "+7 (952) XXX-XX-XX",
        description: "Мебельный магазин — мебель для дома и офиса",
        products: ["Мебель", "Шкафы", "Столы", "Комоды"],
        badge: "Мебель",
        rating: 4.5
    },
    {
        id: 3,
        name: "ГУМ",
        category: "stroymaterialy",
        address: "просп. Ленина, 41а",
        phone: "+7 (4012) XX-XX-XX",
        description: "Гусевский Универсальный Магазин — стройматериалы и товары для дома",
        products: ["Кирпич", "Цемент", "Доски", "Краска", "Инструменты"],
        badge: "Стройматериалы",
        rating: 4.7
    },
    {
        id: 4,
        name: "Техэлектроцентр",
        category: "stroymaterialy",
        address: "ул. Сержанта Утегенова, 26",
        phone: "+7 (4012) XX-XX-XX",
        description: "Строительные материалы и электрика для профессионалов",
        products: ["Инструменты", "Электрика", "Сантехника", "Крепёж"],
        badge: "Стройматериалы",
        rating: 4.5
    },
    {
        id: 5,
        name: "Планета здоровья",
        category: "apteka",
        address: "ул. Московская, 9",
        phone: "+7 (4012) XX-XX-XX",
        description: "Аптека — лекарства, витамины, медицинские товары",
        products: ["Лекарства", "Витамины", "БАДы", "Медтехника"],
        badge: "Аптека",
        rating: 4.9
    },
    {
        id: 6,
        name: "ЗдравСити",
        category: "apteka",
        address: "ул. Победы, 22",
        phone: "+7 (800) XXX-XX-XX",
        description: "Сеть аптек — широкий ассортимент лекарств и витаминов",
        products: ["Лекарства", "Витамины", "Минералы", "Косметика"],
        badge: "Аптека",
        rating: 4.8
    },
    {
        id: 7,
        name: "Автосервис Фурманово",
        category: "avto",
        address: "просп. Ленина, 2В",
        phone: "+7 (952) XXX-XX-XX",
        description: "Автосервис — ремонт и обслуживание автомобилей",
        products: ["Ремонт авто", "ТО", "Диагностика", "Запчасти"],
        badge: "Авто",
        rating: 4.4
    },
    {
        id: 8,
        name: "Автомагазин Техник",
        category: "avto",
        address: "ул. Малахова, 10",
        phone: "+7 (4012) XX-XX-XX",
        description: "Автозапчасти, шины, масла, аксессуары",
        products: ["Запчасти", "Шины", "Масла", "Аксессуары"],
        badge: "Авто",
        rating: 4.3
    },
    {
        id: 9,
        name: "Виктория",
        category: "produkty",
        address: "ул. Калининградская / Московская",
        phone: "—",
        description: "Сеть магазинов продуктов — широкий ассортимент свежих продуктов",
        products: ["Хлеб", "Молоко", "Мясо", "Овощи", "Фрукты"],
        badge: "Продукты",
        rating: 4.7
    },
    {
        id: 10,
        name: "Местные ИП",
        category: "produkty",
        address: "Центральные улицы",
        phone: "—",
        description: "Известные павильоны и мини-маркеты с продуктами",
        products: ["Бакалея", "Крупы", "Чай", "Кофе", "Сладости"],
        badge: "Продукты",
        rating: 4.5
    },
    {
        id: 11,
        name: "Местные сервисные центры",
        category: "tehnika",
        address: "Центральные улицы",
        phone: "—",
        description: "Ремонт и обслуживание бытовой техники и электроники",
        products: ["Ремонт техники", "Диагностика", "Запчасти"],
        badge: "Техника",
        rating: 4.4
    },
    {
        id: 12,
        name: "Точки ремонта телефонов",
        category: "tehnika",
        address: "Центральные улицы",
        phone: "—",
        description: "Ремонт смартфонов, планшетов, ноутбуков",
        products: ["Ремонт телефонов", "Ремонт планшетов", "Ремонт ноутбуков", "Аксессуары"],
        badge: "Техника",
        rating: 4.3
    },
    {
        id: 13,
        name: "Местные магазины одежды",
        category: "odezhda",
        address: "Центральные улицы",
        phone: "—",
        description: "Одежда и обувь для всей семьи — мужская, женская, детская",
        products: ["Платья", "Костюмы", "Джинсы", "Обувь", "Аксессуары"],
        badge: "Одежда",
        rating: 4.5
    },
    {
        id: 14,
        name: "Местные магазины бытовой химии",
        category: "byt",
        address: "Центральные улицы",
        phone: "—",
        description: "Бытовая химия, уборка, гигиена — порошки, гели, средства для уборки",
        products: ["Порошки", "Гели", "Средства для уборки", "Гигиена"],
        badge: "Быт",
        rating: 4.3
    }
];

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
