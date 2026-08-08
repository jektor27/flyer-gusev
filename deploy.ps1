param(
    [string]$Message = "",
    [switch]$All
)
# Деплой ФлаерГусев: коммит (опц.) + push + переобход изменённых страниц в Яндексе
# Использование:
#   .\deploy.ps1                       # push + переобход изменённых html
#   .\deploy.ps1 -Message "текст"      # add+commit+push + переобход
#   .\deploy.ps1 -All                  # push + переобход ВСЕХ страниц

$ErrorActionPreference = "Stop"
$repo = "D:\Jastas\projects\flyer-gusev"
$py = "D:\Jastas\server\.venv\Scripts\python.exe"
$recrawl = "D:\Jastas\tools\recrawl_yandex.py"
Set-Location $repo

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
    if (-not $prev) { Write-Host "Нет origin/main — переобход пропущен."; exit 0 }
    $new = git rev-parse origin/main
    $files = git diff --name-only $prev $new -- "*.html"
}

if (-not $files) {
    Write-Host "Изменённых html нет — переобход не требуется."
    exit 0
}

Write-Host "Отправляю на переобход ($($files.Count) страниц):"
& $py $recrawl @($files)
