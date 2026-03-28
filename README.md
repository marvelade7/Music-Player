# Music Player (VibePlay)

## Project Report

### Overview
VibePlay is a responsive React music player interface that fetches song data from a hosted API and allows users to browse tracks and play a selected song in a fixed bottom audio player.

The project is built with Vite and styled using Bootstrap + custom CSS.

### Live Demo
https://music-player-one-rho-64.vercel.app/

### Objectives
- Build a clean, modern single-page music player UI.
- Consume a remote music API and render dynamic content.
- Allow track playback with a persistent audio controller.
- Provide a responsive experience across desktop and mobile.

### Core Features
- Hero section with CTA button to jump to songs list.
- Sticky navigation bar with responsive mobile collapse.
- Dynamic song cards fetched from API endpoint.
- Loading state with spinner overlay while songs are being fetched.
- Error state message when API request fails.
- Interactive play button on each card.
- Bottom fixed player with:
- track title and artist display
- close animation
- HTML audio controls with autoplay and loop

### Technical Implementation
#### Frontend Stack
- React 19
- Vite 8
- Bootstrap 5
- Bootstrap Icons (CDN)

#### Data Flow
1. `Songs` component fetches song data from:
	`https://music-player-api-ybjs.onrender.com/api/music`
2. Songs are stored in local state.
3. Clicking a song updates `currentSong` in `App`.
4. `Player` receives selected song via props and plays audio.

#### State Management (Local React State)
- `currentSong` in `App` controls whether player is visible.
- `songs`, `isLoading`, and `errorMsg` in `Songs` handle API lifecycle.
- `isClosing` in `Player` controls close transition animation.

### Project Structure
```text
src/
  App.jsx                  # Root composition + song/player coordination
  index.css                # Global and navbar/player responsive styles
  components/
	 Hero.jsx               # Hero content and CTA
	 Hero.css               # Hero/background and responsive media queries
	 Navbar.jsx             # Top navigation
	 Songs.jsx              # Fetching, loading/error states, song cards
	 Player.jsx             # Audio player UI and close transition
  assets/images/           # Hero and UI image assets
```

### How to Run Locally
#### Prerequisites
- Node.js (LTS recommended)
- npm

#### Steps
1. Install dependencies:
	```bash
	npm install
	```
2. Start development server:
	```bash
	npm run dev
	```
3. Open the local URL shown in terminal (typically `http://localhost:5173`).

### Available Scripts
- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks

### Responsiveness
- Hero layout adapts across desktop, tablet, and mobile breakpoints.
- Player padding/text size is reduced on smaller screens.
- Navbar supports collapsed menu on mobile via Bootstrap.

### Current Limitations
- No search/filter logic yet (icons/links are currently visual).
- No playlist queue or next/previous controls.
- Audio playback state is local and not persisted.
- API dependency means offline mode is not available.

### Future Improvements
- Add search and category filtering.
- Add progress bar sync and custom player controls.
- Add favorites/playlist management.
- Add better accessibility (keyboard controls and ARIA labels).
- Add unit/component tests for fetch and player behavior.

### Conclusion
This project successfully demonstrates practical React fundamentals: component composition, prop drilling, local state management, API integration, conditional rendering, and responsive UI design. It is a strong base for extending into a richer full-featured music streaming interface.
