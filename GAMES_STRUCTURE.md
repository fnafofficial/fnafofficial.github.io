# Games Page Structure

## Overview

The Games page (`/pages/games.html`) displays all available games in a simple grid layout with 6 games per row and a "Load More" functionality.

## Features

### Layout

- **6 games per row** on desktop
- **4 games per row** on tablet (1200px and below)
- **3 games per row** on mobile (768px and below)
- **2 games per row** on small mobile (480px and below)

### Game Cards

- **Simple design**: Only logo and game title
- **No descriptions**: Clean, minimal interface
- **Hover effects**: Cards lift and glow on hover
- **Click to play**: Direct game launch

### Load More Functionality

- **Initial load**: 20 games displayed
- **Load more**: Additional 20 games per click
- **Dynamic counter**: Shows remaining games
- **Auto-hide**: Button disappears when all games loaded

## Game Data Structure

```javascript
{
  id: 'game-id',           // Unique identifier
  title: 'Game Name',      // Display name
  logo: 'path/to/logo.png', // Logo image path
  placeholder: '🎮',        // Emoji fallback
  type: 'fnaf'             // Game category
}
```

## Game Categories

- **fnaf**: Five Nights at Freddy's games
- **horror**: Horror games
- **survival**: Survival games
- **puzzle**: Puzzle games

## Current Games (30+ total)

### FNAF Games (6)

- FNAF 1, FNAF 2, FNAF 3, FNAF 4
- Ultimate Custom Night, FNAF Hack

### Other Games (24+)

- Granny, Slenderman, Baldi
- Hello Neighbor, Outlast, Amnesia
- SOMA, Alien Isolation, Dead Space
- Resident Evil, Silent Hill, Evil Within
- Layers of Fear, Visage, Phasmophobia
- Devour, In Silence, Demonologist
- Ghost Hunters, Spirits of the North
- The Forest, Green Hell, Rust, ARK
- Minecraft, Subnautica, No Man's Sky
- Valheim, Raft, Grounded

## Adding New Games

1. **Add to `allGames` array** in `js/games.js`
2. **Create game folder** in appropriate directory
3. **Add logo image** (optional)
4. **Test game functionality**

## File Structure

```
pages/
├── games.html          # Main games page
├── blog.html           # Blog (FNAF content only)
└── ...

css/
├── games.css           # Games page styles
└── ...

js/
├── games.js            # Games page logic
└── ...

games/                  # FNAF games
├── fnaf1/
├── fnaf2/
└── ...

other-games/            # Other games
├── granny/
└── ...
```

## Responsive Breakpoints

- **Desktop**: 6 games per row
- **Tablet (1200px)**: 4 games per row
- **Mobile (768px)**: 3 games per row
- **Small Mobile (480px)**: 2 games per row

## Performance

- **Lazy loading**: Games load as needed
- **Optimized images**: Logo fallbacks
- **Smooth animations**: CSS transitions
- **Mobile friendly**: Touch-optimized
