import { Link } from 'react-router-dom';

export default function GameDetailFooter() {
  return (
    <footer className="site-footer game-detail-simple-footer">
      <div className="container">
        <p>
          <Link to="/#games" className="game-detail-back">
            ← Về danh sách trò chơi
          </Link>
        </p>
        <p className="game-detail-copy">© 2026 Trò Chơi Dân Gian</p>
      </div>
    </footer>
  );
}
