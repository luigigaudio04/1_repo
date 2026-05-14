param (
    [Parameter(Mandatory=$false)]
    [string]$BranchName
)

# Percorso di Git
$git = "C:\Program Files\Git\bin\git.exe"

# Se il nome non è fornito, chiedilo
if (-not $BranchName) {
    $BranchName = Read-Host "Inserisci il nome del nuovo branch"
}

if (-not $BranchName) {
    Write-Host "Errore: Il nome del branch non può essere vuoto." -ForegroundColor Red
    exit 1
}

# Rimuovi eventuali spazi (i branch non possono avere spazi)
$BranchName = $BranchName -replace " ", "-"

Write-Host "--- Creazione Branch: $BranchName ---" -ForegroundColor Cyan

# 1. Creazione e switch
Write-Host "> Creazione branch locale..." -ForegroundColor Gray
& $git checkout -b $BranchName

# 2. Push su remoto per tracciamento
Write-Host "> Invio del nuovo branch su GitHub..." -ForegroundColor Gray
& $git push -u origin $BranchName

Write-Host "--- Branch creato e sincronizzato! ---" -ForegroundColor Green
Write-Host "Ora sei sul branch: $BranchName" -ForegroundColor Yellow
