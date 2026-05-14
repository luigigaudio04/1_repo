param (
    [Parameter(Mandatory=$false)]
    [string]$Message
)

# Percorso di Git (dato che non è nel PATH di sistema)
$git = "C:\Program Files\Git\bin\git.exe"

# Se il messaggio non è fornito, chiedilo all'utente
if (-not $Message) {
    $Message = Read-Host "Inserisci il messaggio del commit"
}

if (-not $Message) {
    Write-Host "Errore: Il messaggio del commit non può essere vuoto." -ForegroundColor Red
    exit 1
}

Write-Host "--- Inizio sincronizzazione Git ---" -ForegroundColor Cyan

# 1. Add
Write-Host "> Aggiunta file..." -ForegroundColor Gray
& $git add .

# 2. Commit
Write-Host "> Salvataggio (commit)..." -ForegroundColor Gray
& $git commit -m "$Message"

# 3. Push
Write-Host "> Invio su GitHub (push)..." -ForegroundColor Gray
& $git push

Write-Host "--- Sincronizzazione completata! ---" -ForegroundColor Green
