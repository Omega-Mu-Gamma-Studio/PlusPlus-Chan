import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import BottomBar from '../ui/BottomBar';
import PlusPlusChan from '../character/PlusPlusChan';
import { useProgress } from '../../hooks/useProgress';
import { getShopItem } from '../../data/shopItems';
import './AppLayout.css';

/**
 * AppLayout.jsx
 * 
 * The master shell. Always visible on every page.
 * Structure:
 *   - Sidebar (overlay, controlled by hamburger)
 *   - TopBar (hamburger + app title)
 *   - Main content area (rendered by React Router via <Outlet>)
 *   - BottomBar (XP, progress)
 *   - PlusPlusChan (bottom-right, always present)
 */
const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { equippedWallpaper } = useProgress();
  const wallpaper = getShopItem(equippedWallpaper);

  // Shop wallpapers are CSS gradients until real art is added —
  // see src/data/shopItems.js for how to swap in imageSrc later.
  const wallpaperStyle = wallpaper?.imageSrc
    ? { backgroundImage: `url(${wallpaper.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { background: wallpaper?.gradient || 'var(--color-bg)' };

  return (
    <div className="app-layout">
      {/* Sidebar overlay */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Overlay backdrop */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Top bar */}
      <header className="topbar">
        <button
          className="hamburger-btn"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open lesson menu"
        >
          <span />
          <span />
          <span />
        </button>
        <span className="topbar-title">
          <span className="topbar-title-main">C++</span>
          <span className="topbar-title-accent">chan</span>
        </span>
      </header>

      {/* Main content — React Router renders pages here */}
      <main className="main-content" style={wallpaperStyle}>
        <Outlet />
      </main>

      {/* Bottom bar */}
      <BottomBar />

      {/* PlusPlus-Chan character — always visible */}
      <PlusPlusChan />
    </div>
  );
};

export default AppLayout;
