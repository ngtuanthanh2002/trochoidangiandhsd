import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

type Layout = 'home' | 'detail';

export default function SiteHeader({ layout = 'home' }: { layout?: Layout }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(layout === 'detail');

  useEffect(() => {
    if (layout === 'detail') {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [layout]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720) {
        setNavOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeNav = useCallback(() => {
    setNavOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleNav = () => {
    setNavOpen((open) => {
      const next = !open;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  return (
    <header className={`site-header${navOpen ? ' nav-open' : ''}${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav">
        <Link to="/" className="logo" aria-label="Trò Chơi Dân Gian" onClick={closeNav}>
          <span className="logo-mark">T</span>
          <span className="logo-text">
            <strong>Trò Chơi Dân Gian</strong>
            <small>Văn hóa Việt</small>
          </span>
        </Link>

        <nav id="primary-nav" aria-label="Điều hướng chính">
          <ul className="nav-menu">
            <li>
              <Link to="/" onClick={closeNav}>
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/#games" onClick={closeNav}>
                Trò chơi
              </Link>
            </li>
            <li>
              <Link to="/#reviews" onClick={closeNav}>
                Đánh giá
              </Link>
            </li>
            <li>
              <Link to="/#contact" onClick={closeNav}>
                Liên hệ
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/#games" className="nav-cta" onClick={closeNav}>
          Khám phá ngay
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={navOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={navOpen}
          aria-controls="primary-nav"
          onClick={toggleNav}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
