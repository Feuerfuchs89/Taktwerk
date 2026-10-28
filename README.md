# Taktwerk

Shorts auf den Beat schneiden – für Seemannsknoten, Poi und Sport. Läuft komplett im Browser auf Handy, Tablet und Laptop. Deine Videos werden nirgendwo hochgeladen.

- **Taktwerk** (`index.html`) – das volle Programm
- **Poi-Studio** (`poi.html`) – die abgespeckte Version nur für Poi, mit Lichtspur

## Auf GitHub Pages stellen

1. Auf github.com ein neues Repository anlegen, z. B. `taktwerk` (öffentlich).
2. **Add file → Upload files** und alle Dateien aus der Zip auf einmal hineinziehen. Es gibt keine Unterordner. **Commit changes**.
3. **Settings → Pages**: unter „Branch“ `main` und `/ (root)` wählen, **Save**.
4. Nach ein bis zwei Minuten läuft die App unter
   - `https://DEIN-NAME.github.io/taktwerk/` (Taktwerk)
   - `https://DEIN-NAME.github.io/taktwerk/poi.html` (Poi-Studio)

**Aufs Handy holen:** Adresse im Browser öffnen → Menü → „Zum Startbildschirm hinzufügen“. Dann gibt es ein eigenes App-Symbol, und die App öffnet sich ohne Browserleiste und funktioniert auch offline.

**Updates:** einfach die neue `index.html` bzw. `poi.html` im Repository ersetzen. Die App lädt beim nächsten Öffnen mit Internet die neue Version.

## KI-Vorschläge mit Gemini (optional)

Beim Export unter „Für YouTube: Titel, Beschreibung, Hashtags“ kann Gemini passende Texte schreiben. Es schaut sich dabei auf Wunsch ein Standbild aus dem Video an.

1. Auf https://aistudio.google.com anmelden → **Get API key** → **Create API key**.
2. Den Schlüssel in Taktwerk ins Feld „Gemini-API-Schlüssel“ einfügen und **Vorschläge holen** tippen.

Der Schlüssel wird nur im Browser auf deinem Gerät gespeichert und geht ausschließlich an Google. Die App sucht sich selbst das aktuelle Gemini-Flash-Modell aus. Alles andere in der App funktioniert ohne KI und ohne Schlüssel.

## Dateien

| Datei | Wofür |
|---|---|
| `index.html` | Taktwerk |
| `poi.html` | Poi-Studio |
| `manifest.webmanifest`, `manifest-poi.webmanifest` | App-Name und Symbol für den Startbildschirm |
| `sw.js` | Offline-Speicher |
| `icon*.png`, `icon.svg`, `apple-touch-icon.png`, `favicon-32.png` | Symbol Taktwerk |
| `poi-*.png`, `poi-icon.svg` | Symbol Poi-Studio |

## Gut zu wissen

- Die App wirklich über die `https://…github.io`-Adresse öffnen, nicht als Datei vom Handy – sonst darf der Browser nicht speichern und keine Videos umwandeln.
- Videos von der SD-Karte am besten vorher in den internen Download-Ordner kopieren.
- Exportieren klappt am besten in Chrome oder Edge (Android, Windows, Mac).
