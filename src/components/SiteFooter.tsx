import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-mark">T</span>
              <span className="logo-text">
                <strong>Trò Chơi Dân Gian</strong>
                <small>Văn hóa Việt</small>
              </span>
            </Link>
            <p>
              Nơi tôn vinh và lan tỏa giá trị của những trò chơi dân gian Việt Nam — gìn giữ hồn quê cho thế hệ hôm nay
              và mai sau.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-2.9h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 7s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17 3.4 12 3.4 12 3.4s-5 0-8.1.3c-.4.1-1.3.1-2.1 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.7v1.6C.8 14.1 1 16 1 16s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.8.3 7.8.3s5 0 8.1-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.6C23.2 8.9 23 7 23 7zM9.7 14.6V8.1l6.4 3.3-6.4 3.2z" />
                </svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.6 6.7a4.8 4.8 0 01-3.4-1.5 4.8 4.8 0 01-1.3-2.7h-3.3v13.1a2.4 2.4 0 11-2.4-2.4c.3 0 .5 0 .8.1V9.9a5.7 5.7 0 00-.8-.1A5.7 5.7 0 1014 15.6V9a8.1 8.1 0 005.6 1.8V7.5a4.8 4.8 0 010-.8z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Khám phá</h5>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/#games">Danh sách trò chơi</Link>
              </li>
              <li>
                <Link to="/#reviews">Đánh giá</Link>
              </li>
              <li>
                <Link to="/#contact">Liên hệ</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Hỗ trợ</h5>
            <ul>
              <li>
                <a href="#">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="#">Hướng dẫn chơi</a>
              </li>
              <li>
                <a href="#">Điều khoản</a>
              </li>
              <li>
                <a href="#">Bảo mật</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Liên hệ</h5>
            <ul>
              <li className="contact-item">
                <span>✉</span>
                <span>giaptheduyet03@gmail.com</span>
              </li>
              <li className="contact-item">
                <span>☏</span>
                <span>+84 38 628 1932</span>
              </li>
              <li className="contact-item">
                <span>⌂</span>
                <span>
                  Số 35, đường Chu Văn An, tổ dân phố Thái Học 2, phường Chu Văn An, thành phố Hải Phòng
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Trò Chơi Dân Gian. Mộc mạc lưu giữ — Tự hào lan tỏa.</p>
          <p>
            <a href="#">Điều khoản</a> · <a href="#">Bảo mật</a> · <a href="#">Cookie</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
