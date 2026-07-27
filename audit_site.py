#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Автоматический аудит сайта gusev-flyer.ru
Проверяет структуру, файлы, конфигурацию и код
"""

import os
import re
import json
import glob
from datetime import datetime
from pathlib import Path

# Конфигурация
SITE_DIR = r"D:\Jastas\flyer-gusev"
REPORT_FILE = os.path.join(SITE_DIR, "audit_report.md")

# Ожидаемая структура
REQUIRED_FILES = [
    "index.html",
    "css/style.css",
    "js/main.js",
    "robots.txt",
    "sitemap.xml",
    "favicon.svg",
    "og-image.png",
]

REQUIRED_PAGES = [
    "category.html",
    "mebel.html",
    "produkty.html",
    "stroymaterialy.html",
    "odezhda.html",
    "tehnika.html",
    "byt.html",
    "apteka.html",
    "avto.html",
    "tariffs.html",
    "blog.html",
    "contacts.html",
    "moose.html",
]

SEO_FILES = [
    "robots.txt",
    "sitemap.xml",
]

CONFIG_FILES = [
    "config.json",
    "seo-meta.json",
]

JS_CHECKS = {
    "initSearch": r"function\s+initSearch\s*\(",
    "loadCategoryPage": r"function\s+loadCategoryPage\s*\(",
    "search": r"function\s+search\s*\(",
    "shopsData": r"const\s+shopsData|let\s+shopsData|var\s+shopsData",
    "toggleMenu": r"function\s+toggleMenu\s*\(",
}

CSS_CHECKS = {
    "dark_theme": r"#0f172a",
    "responsive": r"@media",
    "animations": r"@keyframes",
}


def check_file_exists(filepath):
    """Проверка существования файла"""
    full_path = os.path.join(SITE_DIR, filepath)
    return os.path.exists(full_path)


def check_directory_exists(dirpath):
    """Проверка существования директории"""
    full_path = os.path.join(SITE_DIR, dirpath)
    return os.path.isdir(full_path)


def analyze_js():
    """Анализ main.js"""
    js_path = os.path.join(SITE_DIR, "js", "main.js")
    results = {"found": [], "missing": [], "warnings": []}
    
    if not os.path.exists(js_path):
        results["missing"].append("js/main.js не найден")
        return results
    
    try:
        with open(js_path, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        results["warnings"].append(f"Ошибка чтения main.js: {e}")
        return results
    
    # Проверка функций
    for name, pattern in JS_CHECKS.items():
        if re.search(pattern, content):
            results["found"].append(name)
        else:
            results["missing"].append(name)
    
    # Проверка размера
    size_kb = len(content.encode("utf-8")) / 1024
    if size_kb > 50:
        results["warnings"].append(f"main.js слишком большой: {size_kb:.1f} КБ")
    
    # Проверка количества магазинов
    shop_count = content.count("id:")
    results["info"] = f"Найдено магазинов в данных: ~{shop_count}"
    
    return results


def analyze_css():
    """Анализ style.css"""
    css_path = os.path.join(SITE_DIR, "css", "style.css")
    results = {"found": [], "missing": [], "warnings": []}
    
    if not os.path.exists(css_path):
        results["missing"].append("css/style.css не найден")
        return results
    
    try:
        with open(css_path, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        results["warnings"].append(f"Ошибка чтения style.css: {e}")
        return results
    
    # Проверка ключевых элементов
    for name, pattern in CSS_CHECKS.items():
        if re.search(pattern, content):
            results["found"].append(name)
        else:
            results["missing"].append(name)
    
    # Подсчёт строк
    line_count = len(content.splitlines())
    results["info"] = f"Строк в style.css: {line_count}"
    
    # Проверка !important
    important_count = content.count("!important")
    if important_count > 5:
        results["warnings"].append(f"Много !important: {important_count}")
    
    return results


def analyze_html():
    """Анализ всех HTML-файлов"""
    results = {"ok": [], "warnings": [], "errors": []}
    
    html_files = glob.glob(os.path.join(SITE_DIR, "*.html"))
    html_files += glob.glob(os.path.join(SITE_DIR, "blog", "*.html"))
    
    for filepath in html_files:
        filename = os.path.relpath(filepath, SITE_DIR)
        
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
        except Exception as e:
            results["errors"].append(f"{filename}: ошибка чтения - {e}")
            continue
        
        # Проверка <title>
        titles = re.findall(r"<title[^>]*>(.*?)</title>", content, re.DOTALL)
        if len(titles) == 0:
            results["errors"].append(f"{filename}: нет <title>")
        elif len(titles) > 1:
            results["warnings"].append(f"{filename}: дубль <title> ({len(titles)} шт)")
        else:
            results["ok"].append(f"{filename}: <title> есть")
        
        # Проверка meta description
        descriptions = re.findall(r'<meta\s+name="description"', content)
        if len(descriptions) == 0:
            results["warnings"].append(f"{filename}: нет meta description")
        elif len(descriptions) > 1:
            results["warnings"].append(f"{filename}: дубль meta description")
        
        # Проверка OG тегов
        og_title = re.search(r'og:title', content)
        og_desc = re.search(r'og:description', content)
        og_image = re.search(r'og:image', content)
        
        if not (og_title and og_desc and og_image):
            missing = []
            if not og_title: missing.append("og:title")
            if not og_desc: missing.append("og:description")
            if not og_image: missing.append("og:image")
            results["warnings"].append(f"{filename}: нет OG тегов: {', '.join(missing)}")
        
        # Проверка canonical
        canonical = re.search(r'<link\s+rel="canonical"', content)
        if not canonical:
            results["warnings"].append(f"{filename}: нет canonical")
        
        # Проверка favicon
        favicon = re.search(r'<link\s+rel="icon"', content)
        if not favicon and "index.html" in filename:
            results["warnings"].append(f"{filename}: нет favicon")
        
        # Проверка Schema.org
        schema = re.search(r'type="application/ld\+json"', content)
        if not schema:
            results["warnings"].append(f"{filename}: нет Schema.org")
    
    return results


def check_seo():
    """Проверка SEO-файлов"""
    results = {"ok": [], "warnings": [], "errors": []}
    
    # robots.txt
    robots_path = os.path.join(SITE_DIR, "robots.txt")
    if os.path.exists(robots_path):
        with open(robots_path, "r", encoding="utf-8") as f:
            content = f.read()
        if "Sitemap:" in content:
            results["ok"].append("robots.txt: Sitemap указан")
        else:
            results["warnings"].append("robots.txt: нет Sitemap")
        if "Allow: /" in content:
            results["ok"].append("robots.txt: Allow: /")
    else:
        results["errors"].append("robots.txt не найден")
    
    # sitemap.xml
    sitemap_path = os.path.join(SITE_DIR, "sitemap.xml")
    if os.path.exists(sitemap_path):
        with open(sitemap_path, "r", encoding="utf-8") as f:
            content = f.read()
        url_count = content.count("<loc>")
        results["ok"].append(f"sitemap.xml: {url_count} URL")
    else:
        results["errors"].append("sitemap.xml не найден")
    
    return results


def generate_report():
    """Генерация отчёта"""
    now = datetime.now().strftime("%d.%m.%Y %H:%M")
    
    ok_items = []
    warning_items = []
    error_items = []
    
    # 1. Проверка файлов
    for filepath in REQUIRED_FILES:
        if check_file_exists(filepath):
            ok_items.append(f"Файл `{filepath}` — есть")
        else:
            error_items.append(f"Файл `{filepath}` — НЕТ")
    
    # 2. Проверка страниц
    for page in REQUIRED_PAGES:
        if check_file_exists(page):
            ok_items.append(f"Страница `{page}` — есть")
        else:
            error_items.append(f"Страница `{page}` — НЕТ")
    
    # 3. Проверка папок
    for folder in ["css", "js", "blog", "img"]:
        if check_directory_exists(folder):
            ok_items.append(f"Папка `/{folder}/` — есть")
        else:
            warning_items.append(f"Папка `/{folder}/` — нет")
    
    # 4. Анализ JS
    js_results = analyze_js()
    if js_results.get("info"):
        ok_items.append(js_results["info"])
    for item in js_results.get("found", []):
        ok_items.append(f"JS: `{item}()` — найдена")
    for item in js_results.get("missing", []):
        error_items.append(f"JS: `{item}()` — НЕ найдена")
    for item in js_results.get("warnings", []):
        warning_items.append(item)
    
    # 5. Анализ CSS
    css_results = analyze_css()
    if css_results.get("info"):
        ok_items.append(css_results["info"])
    for item in css_results.get("found", []):
        ok_items.append(f"CSS: `{item}` — есть")
    for item in css_results.get("missing", []):
        warning_items.append(f"CSS: `{item}` — нет")
    for item in css_results.get("warnings", []):
        warning_items.append(item)
    
    # 6. Анализ HTML
    html_results = analyze_html()
    for item in html_results.get("ok", []):
        ok_items.append(item)
    for item in html_results.get("warnings", []):
        warning_items.append(item)
    for item in html_results.get("errors", []):
        error_items.append(item)
    
    # 7. SEO
    seo_results = check_seo()
    for item in seo_results.get("ok", []):
        ok_items.append(item)
    for item in seo_results.get("warnings", []):
        warning_items.append(item)
    for item in seo_results.get("errors", []):
        error_items.append(item)
    
    # Формирование отчёта
    report = f"""# Аудит сайта gusev-flyer.ru

**Дата:** {now}

---

## ✅ OK ({len(ok_items)})

"""
    for item in ok_items:
        report += f"- {item}\n"
    
    report += f"""
---

## ⚠️ WARNING ({len(warning_items)})

"""
    for item in warning_items:
        report += f"- {item}\n"
    
    if not warning_items:
        report += "- Нет предупреждений\n"
    
    report += f"""
---

## ❌ ERROR ({len(error_items)})

"""
    for item in error_items:
        report += f"- {item}\n"
    
    if not error_items:
        report += "- Нет ошибок\n"
    
    report += f"""
---

**Итого:** {len(ok_items)} OK | {len(warning_items)} WARNING | {len(error_items)} ERROR

— Сгенерировано для Александра (инженер, Гусев) | gusev-flyer.ru | {now}
"""
    
    return report


def main():
    print("Запуск аудита сайта gusev-flyer.ru...")
    print(f"Директория: {SITE_DIR}")
    print()
    
    # Проверка директории
    if not os.path.exists(SITE_DIR):
        print(f"ОШИБКА: Директория не найдена: {SITE_DIR}")
        return
    
    # Генерация отчёта
    report = generate_report()
    
    # Сохранение
    with open(REPORT_FILE, "w", encoding="utf-8") as f:
        f.write(report)
    
    print(f"Отчёт сохранён: {REPORT_FILE}")
    print()
    
    # Краткий вывод
    ok_count = report.count("- ") - report.count("- Нет")
    print(f"Результат: {ok_count} проверок пройдено")


if __name__ == "__main__":
    main()
