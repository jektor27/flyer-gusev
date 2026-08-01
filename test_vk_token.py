import requests

# ВАШ СУЩЕСТВУЮЩИЙ ТОКЕН (из файла)
TOKEN = "vk1.a.lQGHr1glQov_uJ0oreBHCWfQxsJh4xzHN2TRUN2mGh5UTs6fiv7h7o2IZh4kfRC37NUQUKZ5IIM3DpQtDDK8zVxcWUY8coyB4auv-Pd0dh9oBtz5YqVbV1j1F_gSzDSvMSJN99PUjOl0SzL0ISGODMdz2RjBkuQq2Y4iYNwbbpTsXymqxfT9jZV8vLVV5R_Ns6KQ-cwvbnTo2VG8iDDAxg"
GROUP_ID = 240424956

print("🔍 Проверяю токен...")

# Проверка - получаем информацию о группе
response = requests.get("https://api.vk.com/method/groups.getById", params={
    "group_id": GROUP_ID,
    "access_token": TOKEN,
    "v": "5.199"
})

data = response.json()

if "response" in data:
    group = data["response"][0]
    print(f"✅ ТОКЕН РАБОТАЕТ!")
    print(f"📛 Группа: {group['name']}")
    print(f"👥 Подписчиков: {group.get('members_count', 'N/A')}")
else:
    print(f"❌ Ошибка: {data}")