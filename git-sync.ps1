param (
    [Parameter(Mandatory=$false)]
    [string]$Message
)

$gitPath = "C:\Program Files\Git\bin\git.exe"

if (-not (Test-Path $gitPath)) {
    Write-Error "Git non trovato in $gitPath. Verifica il percorso."
    return
}

if (-not $Message) {
    $Message = Read-Host "Inserisci il messaggio del commit"
}

if (-not $Message) {
    Write-Warning "Messaggio del commit vuoto. Operazione annullata."
    return
}

Write-Host "--- Aggiunta file ---" -ForegroundColor Cyan
& $gitPath add .

Write-Host "--- Creazione commit ---" -ForegroundColor Cyan
& $gitPath commit -m $Message

Write-Host "--- Invio su GitHub ---" -ForegroundColor Cyan
& $gitPath push

Write-Host "--- Completato! ---" -ForegroundColor Green
