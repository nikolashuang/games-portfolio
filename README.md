# Games Portfolio

A simple, fast portfolio site for showing off games. No build step — just HTML, CSS and JavaScript, ready for GitHub Pages.

## Put it online (GitHub Pages)

1. Create a new **public** repository on GitHub.
   - Name it `YOUR-USERNAME.github.io` to get the site at `https://YOUR-USERNAME.github.io`
   - Or name it anything (e.g. `games`) to get `https://YOUR-USERNAME.github.io/games`
2. Upload all of these files: **Add file → Upload files**, drag everything in, then **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**, then **Save**.
4. Wait a minute or two and your site will be live at the address shown on that page.

## Add your games

Open **`games.js`**. That's the only file you need to edit.

- Change `SITE` to your name, tagline, About text and GitHub link.
- In `GAMES`, copy one `{ ... }` block per game and fill it in.
- Screenshots: put images in `assets/` and set `image: "assets/your-image.png"`. Without an image, a colored placeholder with the game's initials is shown.
- `featured: true` shows a game in the big card at the top.

### Hosting a playable web game on the site

If your game runs in a browser (HTML5, a Unity WebGL build, a Godot web export, etc.):

1. Make a folder `games/your-game/` and put the exported files in it (it needs an `index.html`).
2. In `games.js`, set `play: "games/your-game/"`.

For Roblox, itch.io or Steam games, set `play` to the game's page URL.


## Preview on your computer

Double-click `index.html` to open it in a browser.
