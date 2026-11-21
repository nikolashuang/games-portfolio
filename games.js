// ============================================================
//  YOUR GAMES — edit this file to add, remove or change games.
// ============================================================
//
//  Each game is one { ... } block. Fields:
//    title       – game name (required)
//    description – one or two sentences
//    platform    – e.g. "Web", "Roblox", "Windows", "Mobile"
//    tags        – genre tags, used by the filter buttons
//    image       – path to a screenshot, e.g. "assets/my-game.jpg"
//                  (leave "" and a colored placeholder is drawn)
//    play        – link to play (Roblox page, itch.io, or "games/my-game/")
//    source      – link to the code on GitHub (or "")
//    year        – year made
//    status      – optional badge, e.g. "In development"
//    featured    – true to show it bigger at the top
//
//  To host a web (HTML5) game here: put its files in
//  games/<folder-name>/ with an index.html, then set
//  play: "games/<folder-name>/"

const SITE = {
  name: "Nikolas Huang",
  tagline: "I make games. Here are some of them.",
  about:
    "Student and game developer. I build in Roblox (Luau + Rojo) and for the web (Phaser), with a soft spot for movement systems and strange twists on classic games.",
  github: "https://github.com/nikolashuang",
  email: "", // optional, e.g. "you@example.com"
};

const GAMES = [
  {
    title: "Shotgun Chess",
    description:
      "A turn-based roguelike on a 12×12 board: play as a king armed with a shotgun, summon chess pieces, and spend energy each turn to blast, command and outmaneuver the enemy king. Includes a campaign, PvP duels, unlockable shotguns and classes.",
    platform: "Roblox",
    tags: ["Strategy", "Turn-based", "Roguelike"],
    image: "assets/shotgun-chess.jpg",
    play: "",
    source: "https://github.com/nikolashuang/Shotgun-Chess",
    year: 2026,
    status: "In development",
    featured: true,
  },
  {
    title: "Temporal Frame",
    description:
      "An endless runner where you split your movement into 6 frames: hit the A/D quick-time sequence to project yourself forward (even through walls) and speed up. Miss it and you freeze in place.",
    platform: "Web",
    tags: ["Endless Runner", "Platformer"],
    image: "assets/temporal-frame.jpg",
    play: "games/temporal-frame/",
    source: "https://github.com/nizhuang305586/CMPM-120-Endless-Runner",
    year: 2026,
    featured: false,
  },
  {
    title: "Overtake",
    description:
      "A sandbox parkour playground for testing the movement system behind a future competitive racer. Jump in and mess around with momentum-based vaulting, wall-running, climbing and sliding.",
    platform: "Roblox",
    tags: ["Parkour", "Sandbox"],
    image: "assets/overtake.jpg",
    play: "https://www.roblox.com/games/77894032137775/Overtake",
    source: "https://github.com/nikolashuang/Overtake",
    year: 2026,
    status: "Playtest",
    featured: false,
  },
];
