// Данные магазинов
const shopsData = [
    {
        id: 1,
        name: "Продукты 'У дома'",
        category: "Продукты",
        address: "ул. Московская, 45",
        phone: "+7 (40143) 3-10-10",
        description: "Продукты питания, молочные изделия, хлебобулочные изделия",
        products: ["Молоко", "Хлеб", "Мясо", "Овощи", "Фрукты"],
        badge: "Популярный",
        rating: 4.8
    },
    {
        id: 2,
        name: "Мебель 'Комфорт'",
        category: "Мебель",
        address: "ул. Победы, 12",
        phone: "+7 (40143) 5-20-20",
        description: "Мебель для дома и офиса: кровати, шкафы, столы, стулья",
        products: ["Кровати", "Шкафы", "Столы", "Стулья", "Диваны"],
        badge: "Новинка",
        rating: 4.5
    },
    {
        id: 3,
        name: "Стройматериалы 'СтройДом'",
        category: "Стройматериалы",
        address: "ул. Западная, 8",
        phone: "+7 (40143) 4-30-30",
        description: "Строительные материалы для ремонта и строительства",
        products: ["Кирпич", "Цемент", "Доски", "Краска", "Инструменты"],
        badge: "Выгодная цена",
        rating: 4.7
    },
    {
        id: 4,
        name: "Одежда 'Стиль'",
        category: "Одежда",
        address: "ул. Центральная, 22",
        phone: "+7 (40143) 2-40-40",
        description: "Одежда для всей семьи: мужская, женская, детская",
        products: ["Платья", "Костюмы", "Джинсы", "Обувь", "Аксессуары"],
        badge: "Скидки",
        rating: 4.6
    },
    {
        id: 5,
        name: "Техника 'Электро'",
        category: "Техника",
        address: "ул. Ленина, 33",
        phone: "+7 (40143) 6-50-50",
        description: "Бытовая техника, электроника, компьютеры",
        products: ["Телевизоры", "Стиральные машины", "Холодильники", "Ноутбуки"],
        badge: "Гарантия",
        rating: 4.4
    },
    {
        id: 6,
        name: "Аптека 'Здоровье'",
        category: "Аптеки",
        address: "ул. Медицинская, 5",
        phone: "+7 (40143) 7-60-60",
        description: "Лекарства, витамины, медицинские товары",
        products: ["Лекарства", "Витамины", "БАДы", "Медтехника"],
        badge: "Рецепты",
        rating: 4.9
    },
    {
        id: 7,
        name: "Продукты 'Свежесть'",
        category: "Продукты",
        address: "ул. Садовая, 18",
        phone: "+7 (40143) 3-70-70",
        description: "Свежие продукты, овощи, фрукты, мясо",
        products: ["Овощи", "Фрукты", "Мясо", "Рыба", "Молочные изделия"],
        badge: "Свежее",
        rating: 4.7
    },
    {
        id: 8,
        name: "Мебель 'Домашний'",
        category: "Мебель",
        address: "ул. Лесная, 7",
        phone: "+7 (40143) 5-80-80",
        description: "Мебель из натурального дерева",
        products: ["Кровати", "Шкафы", "Комоды", "Столы"],
        badge: "Дерево",
        rating: 4.6
    },
    {
        id: 9,
        name: "Стройматериалы 'Мастер'",
        category: "Стройматериалы",
        address: "ул. Промышленная, 15",
        phone: "+7 (40143) 4-90-90",
        description: "Инструменты и стройматериалы для профессионалов",
        products: ["Инструменты", "Крепеж", "Электрика", "Сантехника"],
        badge: "Профессионалам",
        rating: 4.5
    },
    {
        id: 10,
        name: "Бытовая химия 'Чисто'",
        category: "Быт",
        address: "ул. Чистая, 3",
        phone: "+7 (40143) 8-10-10",
        description: "Бытовая химия, уборка, гигиена",
        products: ["Порошки", "Гели", "Средства для уборки", "Гигиена"],
        badge: "Акции",
        rating: 4.3
    },
    {
        id: 11,
        name: "Автозапчасти 'АвтоМир'",
        category: "Авто",
        address: "ул. Автомобильная, 20",
        phone: "+7 (40143) 9-20-20",
        description: "Автозапчасти, шины, масла, аксессуары",
        products: ["Запчасти", "Шины", "Масла", "Аксессуары"],
        badge: "Оригинал",
        rating: 4.4
    },
    {
        id: 12,
        name: "Продукты 'Вкусный мир'",
        category: "Продукты",
        address: "ул. Вкусная, 10",
        phone: "+7 (40143) 3-30-30",
        description: "Деликатесы, сладости, напитки",
        products: ["Шоколад", "Кофе", "Чай", "Сладости", "Напитки"],
        badge: "Деликатесы",
        rating: 4.8
    }
];

// Категории
const categories = {
    "мебель": { name: "Мебель", icon: "🪑", description: "Мебель для дома и офиса в Гусеве" },
    "продукты": { name: "Продукты", icon: "🛒", description: "Продукты питания в Гусеве" },
    "стройматериалы": { name: "Стройматериалы", icon: "🧱", description: "Строительные материалы в Гусеве" },
    "одежда": { name: "Одежда", icon: "👗", description: "Одежда и обувь в Гусеве" },
    "техника": { name: "Техника", icon: "💻", description: "Бытовая техника и электроника в Гусеве" },
    "быт": { name: "Бытовая химия", icon: "🏠", description: "Бытовая химия и товары для дома в Гусеве" },
    "аптека": { name: "Аптеки", icon: "💊", description: "Аптеки и лекарства в Гусеве" },
    "авто": { name: "Авто", icon: "🚗", description: "Автозапчасти и автотовары в Гусеве" }
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    loadShops();
    initSearch();
    loadCategoryPage();
});

// Загрузка магазинов
function loadShops() {
    const grid = document.getElementById('shopsGrid');
    if (!grid) return;
    
    grid.innerHTML = shopsData.slice(0, 6).map(shop => createShopCard(shop)).join('');
}

// Создание карточки магазина
function createShopCard(shop) {
    return `
        <div class="shop-card">
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
    
    // Определяем категорию по запросу
    const categoryMap = {
        "мебель": "мебель",
        "кровать": "мебель",
        "шкаф": "мебель",
        "стол": "мебель",
        "продукты": "продукты",
        "еда": "продукты",
        "молоко": "продукты",
        "хлеб": "продукты",
        "стройматериалы": "стройматериалы",
        "строительные": "стройматериалы",
        "кирпич": "стройматериалы",
        "одежда": "одежда",
        "обувь": "одежда",
        "платье": "одежда",
        "техника": "техника",
        "телевизор": "техника",
        "холодильник": "техника",
        "аптека": "аптека",
        "лекарства": "аптека",
        "авто": "авто",
        "машина": "авто"
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
    } else {
        // Общий поиск
        const results = shopsData.filter(shop => 
            shop.name.toLowerCase().includes(query) ||
            shop.description.toLowerCase().includes(query) ||
            shop.products.some(p => p.toLowerCase().includes(query))
        );
        
        if (results.length > 0) {
            alert(`Найдено ${results.length} магазинов по запросу "${query}"`);
        } else {
            alert(`Магазины по запросу "${query}" не найдены. Попробуйте другой запрос.`);
        }
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
        shop.category.toLowerCase() === category.name.toLowerCase()
    );
    
    const grid = document.getElementById('categoryShops');
    if (grid) {
        if (filteredShops.length > 0) {
            grid.innerHTML = filteredShops.map(shop => createShopCard(shop)).join('');
        } else {
            grid.innerHTML = '<p style="text-align:center; color:#64748b; grid-column:1/-1;">Магазины в этой категории пока не добавлены</p>';
        }
    }
}

// Меню
function toggleMenu() {
    document.querySelector('.nav').classList.toggle('active');
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
