#!/usr/bin/env python3
import os

categories = [
    {
        "slug": "mebel",
        "title": "Мебель в Гусеве — магазины мебели, адреса и цены",
        "description": "Каталог магазинов мебели в Гусеве (Калининградская область). Кровати, шкафы, столы, стулья, диваны. Актуальные адреса, телефоны и ассортимент.",
        "keywords": "мебель Гусев, магазины мебели Гусев, кровать Гусев, шкаф Гусев, диван Гусев",
        "icon": "🪑",
        "category_name": "Мебель"
    },
    {
        "slug": "produkty",
        "title": "Продуктовые магазины Гусева — адреса, ассортимент, цены",
        "description": "Продуктовые магазины в Гусеве (Калининградская область). Молоко, хлеб, мясо, овощи, фрукты. Актуальные адреса и телефоны магазинов.",
        "keywords": "продукты Гусев, молоко Гусев, хлеб Гусев, овощи Гусев, фрукты Гусев",
        "icon": "🛒",
        "category_name": "Продукты"
    },
    {
        "slug": "stroymaterialy",
        "title": "Стройматериалы в Гусеве — магазины, адреса, цены",
        "description": "Стройматериалы в Гусеве (Калининградская область). Кирпич, цемент, доски, краска, инструменты. Актуальные адреса и телефоны.",
        "keywords": "стройматериалы Гусев, кирпич Гусев, цемент Гусев, краска Гусев, инструменты Гусев",
        "icon": "🧱",
        "category_name": "Стройматериалы"
    },
    {
        "slug": "odezhda",
        "title": "Одежда в Гусеве — магазины одежды, адреса, каталог",
        "description": "Магазины одежды в Гусеве (Калининградская область). Мужская, женская, детская одежда. Актуальные адреса и телефоны.",
        "keywords": "одежда Гусев, магазин одежды Гусев, платье Гусев, джинсы Гусев, обувь Гусев",
        "icon": "👗",
        "category_name": "Одежда"
    },
    {
        "slug": "tehnika",
        "title": "Техника в Гусеве — магазины бытовой техники и электроники",
        "description": "Магазины техники в Гусеве (Калининградская область). Телевизоры, холодильники, стиральные машины, ноутбуки. Гарантия и сервис.",
        "keywords": "техника Гусев, телевизор Гусев, холодильник Гусев, ноутбук Гусев, бытовая техника Гусев",
        "icon": "💻",
        "category_name": "Техника"
    },
    {
        "slug": "byt",
        "title": "Бытовая химия в Гусеве — магазини чистоты и уборки",
        "description": "Магазины бытовой химии в Гусеве (Калининградская область). Порошки, гели, средства уборки, гигиена. Актуальные адреса и цены.",
        "keywords": "бытовая химия Гусев, порошки Гусев, средства уборки Гусев, гигиена Гусев",
        "icon": "🏠",
        "category_name": "Бытовая химия"
    },
    {
        "slug": "apteka",
        "title": "Аптеки в Гусеве — адреса, лекарства, витамины",
        "description": "Аптеки в Гусеве (Калининградская область). Лекарства, витамины, БАДы, медицинские товары. Режим работы и адреса.",
        "keywords": "аптека Гусев, лекарства Гусев, витамины Гусев, БАДы Гусев, медтехника Гусев",
        "icon": "💊",
        "category_name": "Аптеки"
    },
    {
        "slug": "avto",
        "title": "Автозапчасти в Гусеве — магазины, шины, масла, аксессуары",
        "description": "Автозапчасти в Гусеве (Калининградская область). Запчасти, шины, масла, аксессуары. Актуальные адреса и телефоны.",
        "keywords": "автозапчасти Гусев, шины Гусев, масла Гусев, аксессуары Гусев, авто Гусев",
        "icon": "🚗",
        "category_name": "Авто"
    }
]

shops_data = {
    "Мебель": [
        {"name": "Мебель 'Комфорт'", "address": "ул. Победы, 12", "phone": "+7 (952) 796-57-85", "products": "Кровати, шкафы, столы, стулья, диваны", "badge": "Новинка"},
        {"name": "Мебель 'Домашний'", "address": "ул. Лесная, 7", "phone": "+7 (952) 796-57-85", "products": "Кровати, шкафы, комоды, столы", "badge": "Дерево"}
    ],
    "Продукты": [
        {"name": "Продукты 'У дома'", "address": "ул. Московская, 45", "phone": "+7 (952) 796-57-85", "products": "Молоко, хлеб, мясо, овощи, фрукты", "badge": "Популярный"},
        {"name": "Продукты 'Свежесть'", "address": "ул. Садовая, 18", "phone": "+7 (952) 796-57-85", "products": "Овощи, фрукты, мясо, рыба, молочные изделия", "badge": "Свежее"},
        {"name": "Продукты 'Вкусный мир'", "address": "ул. Вкусная, 10", "phone": "+7 (952) 796-57-85", "products": "Шоколад, кофе, чай, сладости, напитки", "badge": "Деликатесы"}
    ],
    "Стройматериалы": [
        {"name": "Стройматериалы 'СтройДом'", "address": "ул. Западная, 8", "phone": "+7 (952) 796-57-85", "products": "Кирпич, цемент, доски, краска, инструменты", "badge": "Выгодная цена"},
        {"name": "Стройматериалы 'Мастер'", "address": "ул. Промышленная, 15", "phone": "+7 (952) 796-57-85", "products": "Инструменты, крепеж, электрика, сантехника", "badge": "Профессионалам"}
    ],
    "Одежда": [
        {"name": "Одежда 'Стиль'", "address": "ул. Центральная, 22", "phone": "+7 (952) 796-57-85", "products": "Платья, костюмы, джинсы, обувь, аксессуары", "badge": "Скидки"}
    ],
    "Техника": [
        {"name": "Техника 'Электро'", "address": "ул. Ленина, 33", "phone": "+7 (952) 796-57-85", "products": "Телевизоры, стиральные машины, холодильники, ноутбуки", "badge": "Гарантия"}
    ],
    "Бытовая химия": [
        {"name": "Бытовая химия 'Чисто'", "address": "ул. Чистая, 3", "phone": "+7 (952) 796-57-85", "products": "Порошки, гели, средства для уборки, гигиена", "badge": "Акции"}
    ],
    "Аптеки": [
        {"name": "Аптека 'Здоровье'", "address": "ул. Медицинская, 5", "phone": "+7 (952) 796-57-85", "products": "Лекарства, витамины, БАДы, медтехника", "badge": "Рецепты"}
    ],
    "Авто": [
        {"name": "Автозапчасти 'АвтоМир'", "address": "ул. Автомобильная, 20", "phone": "+7 (952) 796-57-85", "products": "Запчасти, шины, масла, аксессуары", "badge": "Оригинал"}
    ]
}

template = """<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{description}">
    <meta name="keywords" content="{keywords}">
    <meta name="robots" content="index, follow">
    
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ru_RU">
    <meta property="og:image" content="https://gusev-flyer.ru/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    
    <title>{title}</title>
    
    <link rel="canonical" href="https://gusev-flyer.ru/{slug}.html">
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="preload" href="css/style.css" as="style">
    <link rel="stylesheet" href="css/style.css">
    
    <!-- Яндекс.Вебмастер верификация -->
    <meta name="yandex-verification" content="f76b111d88cf6ce9">
    
    <!-- Schema.org LocalBusiness -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ФлаерГусев",
      "description": "Каталог магазинов и товаров города Гусев, Калининградская область",
      "url": "https://gusev-flyer.ru/{slug}.html",
      "telephone": "+7-952-796-57-85",
      "email": "pryazhnikov24@yandex.ru",
      "address": {{
        "@type": "PostalAddress",
        "addressLocality": "Гусев",
        "addressRegion": "Калининградская область",
        "addressCountry": "RU"
      }},
      "geo": {{
        "@type": "GeoCoordinates",
        "latitude": 54.5923,
        "longitude": 21.1343
      }},
      "openingHours": "Mo-Su 09:00-18:00",
      "priceRange": "$$"
    }}
    </script>
    
    <!-- Schema.org ItemList -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "{category_name} в Гусеве",
      "description": "Магазины {category_name} в городе Гусев, Калининградская область",
      "url": "https://gusev-flyer.ru/{slug}.html",
      "itemListElement": [{shop_items}]
    }}
    </script>
    
    <!-- Schema.org BreadcrumbList -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://gusev-flyer.ru/"
        }},
        {{
          "@type": "ListItem",
          "position": 2,
          "name": "{category_name}",
          "item": "https://gusev-flyer.ru/{slug}.html"
        }}
      ]
    }}
    </script>
</head>
<body>
    <header class="header" id="header">
        <div class="container">
            <a href="index.html" class="logo">
                <div class="logo-icon">📋</div>
                <span class="logo-text">Флаер<strong>Гусев</strong></span>
            </a>
            <nav class="nav">
                <a href="index.html" class="nav-link">Главная</a>
                <a href="index.html#categories" class="nav-link">Категории</a>
                <a href="index.html#shops" class="nav-link">Магазины</a>
                <a href="index.html#about" class="nav-link">О нас</a>
                <a href="index.html#contact" class="nav-link">Контакты</a>
            </nav>
            <button class="menu-btn" onclick="toggleMenu()">☰</button>
        </div>
    </header>

    <section class="hero" style="padding: 60px 0;">
        <div class="container">
            <div class="hero-badge">
                <span>{icon}</span>
                <span>{category_name} в Гусеве</span>
            </div>
            <h1>{icon} {category_name} — лучшие магазины города Гусев</h1>
            <p class="subtitle">{description}</p>
        </div>
    </section>

    <section class="shops" style="padding: 60px 0;">
        <div class="container">
            <h2 class="section-title">Магазины категории "{category_name}"</h2>
            <div class="shops-grid" id="shopsGrid">
                {shop_cards}
            </div>
        </div>
    </section>

    <section class="seo-text" style="padding: 60px 0;">
        <div class="container">
            <h2 class="section-title">{category_name} в Гусеве — всё для вашего комфорта</h2>
            <div class="seo-content">
                <p>Гусев — город с богатой инфраструктурой и развитой торговлей. В нашем каталоге собраны лучшие магазины категории "{category_name}" в Гусеве.</p>
                <p>Мы постоянно обновляем информацию о магазинах и товарах, чтобы вы могли найти самые актуальные предложения. Все магазины проходят проверку — мы гарантируем качество данных.</p>
                <p>Если вы владелец магазина в категории "{category_name}" — добавьте свой магазин бесплатно! Первые 3 месяца размещения — без платежей.</p>
            </div>
        </div>
    </section>

    <section class="cta">
        <div class="container">
            <div class="cta-content">
                <h2>Добавьте свой магазин в каталог</h2>
                <p>Рекламируйте свой бизнес в категории "{category_name}". Первые 3 месяца бесплатно!</p>
                <a href="index.html#contact" class="cta-btn">
                    <span>Добавить бесплатно</span>
                    <span>→</span>
                </a>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-logo">
                    <a href="index.html" class="logo">
                        <div class="logo-icon">📋</div>
                        <span class="logo-text">Флаер<strong>Гусев</strong></span>
                    </a>
                    <p>Каталог магазинов и товаров города Гусев, Калининградская область</p>
                </div>
                <div class="footer-links">
                    <h4>Навигация</h4>
                    <a href="index.html">Главная</a>
                    <a href="index.html#categories">Категории</a>
                    <a href="index.html#shops">Магазины</a>
                    <a href="index.html#about">О нас</a>
                </div>
                <div class="footer-categories">
                    <h4>Категории</h4>
                    <a href="mebel.html">Мебель в Гусеве</a>
                    <a href="produkty.html">Продукты Гусев</a>
                    <a href="stroymaterialy.html">Стройматериалы</a>
                    <a href="odezhda.html">Одежда</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 ФлаерГусев. Все права защищены.</p>
                <p>📧 pryazhnikov24@yandex.ru | 📱 +7 (952) 796-57-85</p>
                <p>г. Гусев, Калининградская область</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>"""

output_dir = r"D:\Jastas\flyer-gusev"

for cat in categories:
    slug = cat["slug"]
    title = cat["title"]
    description = cat["description"]
    keywords = cat["keywords"]
    icon = cat["icon"]
    category_name = cat["category_name"]
    
    # Build shop items for JSON-LD
    shops = shops_data.get(category_name, [])
    shop_items = []
    for i, shop in enumerate(shops):
        shop_items.append(f'{{"@type": "ListItem", "position": {i+1}, "name": "{shop["name"]}", "url": "https://gusev-flyer.ru/{slug}.html", "description": "{shop["products"]}"}}')
    shop_items_json = ", ".join(shop_items)
    
    # Build shop cards HTML
    shop_cards = ""
    for i, shop in enumerate(shops):
        products_html = "".join(f'<span class="product-tag">{p}</span>' for p in shop["products"].split(", "))
        shop_cards += f'''
        <div class="shop-card" style="animation: fadeInUp 0.6s ease {i * 0.1}s both">
            <div class="shop-header">
                <span class="shop-name">{shop["name"]}</span>
                <span class="shop-badge">{shop["badge"]}</span>
            </div>
            <div class="shop-address">📍 {shop["address"]}</div>
            <div class="shop-phone">📱 {shop["phone"]}</div>
            <div class="shop-products">
                {products_html}
            </div>
        </div>'''
    
    # Replace all placeholders
    html = template.format(
        title=title,
        description=description,
        keywords=keywords,
        slug=slug,
        icon=icon,
        category_name=category_name,
        shop_items=shop_items_json,
        shop_cards=shop_cards
    )
    
    # Fix curly braces in JSON-LD (double braces in format string)
    html = html.replace('{{', '{').replace('}}', '}')
    
    output_file = os.path.join(output_dir, f"{slug}.html")
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(html)
    
    print(f"Created: {slug}.html")

print("All landing pages created successfully!")
