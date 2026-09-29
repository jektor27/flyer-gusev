param(
    [string]$Message = "",
    [switch]$All,
    [switch]$NoSeoNotify,
    [int]$WaitSeconds = 60
)
# Деплой ФлаерГусев: коммит (опц.) + push + переобход в Яндексе + IndexNow
# Использование:
#   .\deploy.ps1                       # push + переобход изменённых html + IndexNow
#   .\deploy.ps1 -Message "текст"      # add+commit+push + переобход + IndexNow
#   .\deploy.ps1 -All                  # push + переобход ВСЕХ страниц
#   .\deploy.ps1 -NoSeoNotify          # без IndexNow и отправки sitemap
#   .\deploy.ps1 -WaitSeconds 0        # не ждать перед IndexNow (по умолчанию 60)

$ErrorActionPreference = "Stop"
$repo = "D:\Jastas\projects\flyer-gusev"
$py = "D:\Jastas\server\.venv\Scripts\python.exe"
$recrawl = "D:\Jastas\tools\recrawl_yandex.py"
$seoNotify = "D:\Jastas\projects\flyer-gusev-work\scripts\seo_notify.py"
$deepAudit = "D:\Jastas\projects\flyer-gusev-work\scripts\deep_audit.py"
Set-Location $repo

Write-Host "Глубокий аудит перед публикацией:"
& $py $deepAudit
if ($LASTEXITCODE -ne 0) { throw "Аудит нашёл проблемы — публикация остановлена. Сначала почини." }

if ($Message) {
    git add -A
    if (git status --porcelain) {
        git commit -m $Message
    } else {
        Write-Host "Нечего коммитить, продолжаем push."
    }
}

$prev = git rev-parse origin/main 2>$null
git push
if ($LASTEXITCODE -ne 0) { throw "Push не удался" }

if ($All) {
    $files = Get-ChildItem -Recurse -Filter *.html | ForEach-Object { $_.FullName.Substring($repo.Length + 1) }
} else {
    if (-not $prev) {
        Write-Host "Нет origin/main — беру все страницы."
        $files = Get-ChildItem -Recurse -Filter *.html | ForEach-Object { $_.FullName.Substring($repo.Length + 1) }
    } else {
        $new = git rev-parse origin/main
        $files = git diff --name-only $prev $new -- "*.html"
    }
}

if ($files) {
    Write-Host "Переобход в Яндексе ($($files.Count) страниц):"
    & $py $recrawl @($files)
} else {
    Write-Host "Изменённых html нет — переобход не требуется."
}

if ($NoSeoNotify) {
    Write-Host "IndexNow отключён (-NoSeoNotify)."
    exit 0
}

if (-not $files) {
    Write-Host "Меняющихся страниц нет — IndexNow не отправляю."
    exit 0
}

if ($WaitSeconds -gt 0) {
    Write-Host "Жду $WaitSeconds с, чтобы GitHub Pages собрал сайт перед IndexNow..."
    Start-Sleep -Seconds $WaitSeconds
}

Write-Host "Уведомляю поисковики (IndexNow + sitemap в Bing):"
& $py $seoNotify @($files)
