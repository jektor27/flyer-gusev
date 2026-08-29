"""Bing Webmaster Tools API automation for gusev-flyer.ru.
Ключ API читается из D:/Jastas/hub/bing_api_key.txt (не хранить в чате).

ВАЖНО: старый SOAP/POX API отключается 31.08.2026.
Документация подтверждает: JSON-протокол работает, ключ передаётся как ?apikey=
(НЕ через заголовок api-Key — он даёт пустой 400).

Команды:
  python bing_seo.py sites          - список сайтов в аккаунте
  python bing_seo.py urlinfo        - статус главной страницы
  python bing_seo.py submitfeed     - отправить sitemap.xml
  python bing_seo.py submiturl      - отправить главную на индексацию
  python bing_seo.py submitbatch    - отправить все страницы из sitemap (чтобы Bing узнал)
  python bing_seo.py indexnow       - MASS IndexNow: все URL из sitemap → Bing + Яндекс + api.indexnow.org
  python bing_seo.py idxnow         - распечатать что нужно для IndexNow (руководство)
"""
import json
import re
import subprocess
import sys
import urllib.parse

API = "https://ssl.bing.com/webmaster/api.svc/json"
SITE = "https://gusev-flyer.ru/"
SITEMAP = "https://gusev-flyer.ru/sitemap.xml"
KEY_FILE = r"D:\Jastas\hub\bing_api_key.txt"
IDXNOW_KEY_FILE = r"D:\Jastas\hub\indexnow_key.txt"
INDEXNOW_HOSTS = ["https://www.bing.com", "https://yandex.com", "https://api.indexnow.org"]


def key():
    return open(KEY_FILE, encoding="utf-8").read().strip()


def get(method, params):
    q = urllib.parse.urlencode(params)
    cmd = ["curl", "-s", "-o", "-", "-w", "\\n%{http_code}", f"{API}/{method}?apikey={key()}&{q}"]
    out = subprocess.run(cmd, capture_output=True, text=True).stdout
    return out


def post(method, body):
    cmd = ["curl", "-s", "-o", "-", "-w", "\\n%{http_code}", "-X", "POST",
           "-H", "Content-Type: application/json", "-d", json.dumps(body),
           f"{API}/{method}?apikey={key()}"]
    out = subprocess.run(cmd, capture_output=True, text=True).stdout
    return out


def cmd_sites():
    print(get("GetUserSites", {}))


def cmd_urlinfo():
    site = urllib.parse.quote(SITE.replace("https:", "http:"), safe="")
    url = urllib.parse.quote(SITE, safe="")
    print(get("GetUrlInfo", {"siteUrl": site, "url": url}))


def cmd_submitfeed():
    print(post("SubmitFeed", {"siteUrl": SITE, "feedUrl": SITEMAP}))


def cmd_submiturl():
    print(post("SubmitUrl", {"siteUrl": SITE, "url": SITE}))


def cmd_submitbatch():
    # взять все url из sitemap.xml и отправить батчем
    urls = _sitemap_urls()
    print(f"Найдено URL: {len(urls)}")
    # SubmitUrlBatch: POST {siteUrl, urlList:[...]}
    for i in range(0, len(urls), 10):
        batch = urls[i:i+10]
        print(post("SubmitUrlBatch", {"siteUrl": SITE, "urlList": batch}))


def _sitemap_urls():
    import xml.etree.ElementTree as ET
    import urllib.request
    with urllib.request.urlopen(SITEMAP, timeout=30) as resp:
        xml = resp.read()
    root = ET.fromstring(xml)
    urls = [e.text for e in root.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    if not urls:
        root = ET.fromstring(xml)  # no namespace fallback
        urls = [e.text for e in root.iter("loc")]
    return urls


def cmd_indexnow():
    key = open(IDXNOW_KEY_FILE, encoding="utf-8").read().strip()
    urls = _sitemap_urls()
    print(f"IndexNow: host=gusev-flyer.ru key file={key}.txt, URL: {len(urls)}")
    payload = {
        "host": "gusev-flyer.ru",
        "key": key,
        "keyLocation": f"https://gusev-flyer.ru/{key}.txt",
        "urlList": urls,
    }
    for h in INDEXNOW_HOSTS:
        try:
            cmd = ["curl", "-s", "-o", "-", "-w", "|%{http_code}", "-X", "POST",
                   "-H", "Content-Type: application/json; charset=utf-8",
                   "-d", json.dumps(payload), f"{h}/indexnow"]
            out = subprocess.run(cmd, capture_output=True, text=True).stdout
            print(f"  {h} -> {out.strip()}")
        except Exception as e:
            print(f"  {h} -> ERROR {e}")


def cmd_idxnow():
    key = open(IDXNOW_KEY_FILE, encoding="utf-8").read().strip()
    print(f"IndexNow настройки: key file {key}.txt опубликован в корне сайта (запушен).")
    print("urlList берётся из sitemap.xml автоматически командой: python bing_seo.py indexnow")


def help():
    print(__doc__)


if __name__ == "__main__":
    m = sys.argv[1] if len(sys.argv) > 1 else "help"
    {"sites": cmd_sites, "urlinfo": cmd_urlinfo, "submitfeed": cmd_submitfeed,
     "submiturl": cmd_submiturl, "submitbatch": cmd_submitbatch,
     "indexnow": cmd_indexnow, "idxnow": cmd_idxnow, "help": help}.get(m, help)()
