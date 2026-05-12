import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import IntroYoutube from '../components/IntroYoutube';

function useRevealOnMount() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);
}

export default function HomePage() {
  useRevealOnMount();
  useHashScroll();

  return (
    <>
      <SiteHeader layout="home" />

      <main id="home">
        <section className="hero hero--banner" aria-labelledby="hero-heading">
          <div className="container">
            <div className="hero-content reveal">
              <span className="eyebrow">Hồn Việt — Tuổi thơ — Ký ức</span>
              <h1 id="hero-heading" className="hero-title">
                Gìn giữ <em>tinh hoa</em>
                <br />
                trò chơi dân gian Việt
              </h1>
              <p className="hero-desc">
                Một hành trình trở về với ký ức tuổi thơ, nơi tiếng cười rộn rã sân làng, nơi từng nhịp sạp, từng cánh
                diều, từng quả còn… kể câu chuyện ngàn đời của văn hóa dân gian Việt Nam.
              </p>
              <div className="hero-actions">
                <a href="#games" className="btn btn-primary">
                  Khám phá trò chơi
                </a>
                <a href="#reviews" className="btn btn-outline">
                  Cảm nhận cộng đồng
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <div className="stat-num">50+</div>
                  <div className="stat-label">Trò chơi truyền thống</div>
                </div>
                <div>
                  <div className="stat-num">3</div>
                  <div className="stat-label">Miền Bắc — Trung — Nam</div>
                </div>
                <div>
                  <div className="stat-num">10K+</div>
                  <div className="stat-label">Người yêu mến</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-video-section" aria-labelledby="intro-video-heading">
          <div className="container">
            <div className="intro-video-grid">
              <div className="intro-video-media">
                <div className="intro-video-frame">
                  <IntroYoutube />
                </div>
              </div>
              <div className="intro-video-copy reveal">
                <h2 id="intro-video-heading" className="intro-video-title">
                  Hành trình khám phá những trò chơi dân gian đặc sắc
                </h2>
                <p className="intro-video-text">
                  Từ những bãi đất quê làng Việt Nam đến các lễ hội truyền thống trên khắp thế giới,
                  <strong> trò chơi dân gian</strong> luôn phản ánh nét đẹp văn hóa, sự sáng tạo và tinh thần gắn kết
                  cộng đồng của con người qua nhiều thế hệ.
                </p>
                <p className="intro-video-text">
                  Video này là tuyển chọn những khoảnh khắc thú vị nhất của các <strong>trò chơi dân gian</strong> – từ
                  cổ xưa đến hiện đại, từ Việt Nam đến nhiều nền văn hóa khác nhau. Mỗi trò chơi không chỉ mang tính
                  giải trí, mà còn ẩn chứa những bài học về sự khéo léo, tinh thần đồng đội và bản sắc dân tộc.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="games" id="games">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Bộ sưu tập</span>
              <h2 className="section-title">Những trò chơi làm nên tuổi thơ</h2>
              <p className="section-subtitle">
                Chọn lọc 7 trò chơi dân gian tiêu biểu, gắn liền với hội làng, Tết cổ truyền và những buổi chiều quê
                mộc mạc.
              </p>
            </div>

            <div className="games-grid">
              <Link to="/games/danh-du" className="game-card reveal" aria-label="Đánh đu — xem chi tiết">
                <div className="game-card-image">
                  <span className="game-card-tag">Hội xuân</span>
                  <img src="/assets/thumb/danhdu.png" alt="Đánh đu" loading="lazy" />
                </div>
                <div className="game-card-body">
                  <h3 className="game-card-title">Đánh đu</h3>
                  <p className="game-card-desc">
                    Trò chơi gắn với nhiều lễ hội của người Việt, phổ biến ở nông thôn Bắc Bộ; rèn dẻo dai, thăng bằng
                    và tinh thần đoàn kết trong hoạt động tập thể.
                  </p>
                  <span className="game-card-link">Xem chi tiết</span>
                </div>
              </Link>

              <Link to="/games/dap-nieu" className="game-card reveal" aria-label="Bịt mắt đập niêu — xem chi tiết">
                <div className="game-card-image">
                  <span className="game-card-tag">Vui nhộn</span>
                  <img src="/assets/thumb/dapnieu.png" alt="Bịt mắt đập niêu" loading="lazy" />
                </div>
                <div className="game-card-body">
                  <h3 className="game-card-title">Bịt mắt đập niêu</h3>
                  <p className="game-card-desc">
                    Giải trí cao, tiếng cười rộn ràng; rèn khả năng định hướng không gian, phản xạ và tập trung — rất
                    phù hợp hoạt động ngoại khóa sinh viên.
                  </p>
                  <span className="game-card-link">Xem chi tiết</span>
                </div>
              </Link>

              <Link to="/games/nhay-sap" className="game-card reveal" aria-label="Nhảy sạp — xem chi tiết">
                <div className="game-card-image">
                  <span className="game-card-tag">Hội làng</span>
                  <img src="/assets/thumb/nhaysap.png" alt="Nhảy sạp" loading="lazy" />
                </div>
                <div className="game-card-body">
                  <h3 className="game-card-title">Nhảy sạp</h3>
                  <p className="game-card-desc">
                    Mang đậm nét văn hóa truyền thống, không khí sôi động; rèn nhanh nhẹn, phối hợp nhịp nhàng và tinh
                    thần đồng đội trong sinh hoạt tập thể.
                  </p>
                  <span className="game-card-link">Xem chi tiết</span>
                </div>
              </Link>

              <Link to="/games/bat-vit" className="game-card reveal" aria-label="Bắt vịt — xem chi tiết">
                <div className="game-card-image">
                  <span className="game-card-tag">Đồng quê</span>
                  <img src="/assets/thumb/batvit.png" alt="Bắt vịt" loading="lazy" />
                </div>
                <div className="game-card-body">
                  <h3 className="game-card-title">Bắt vịt</h3>
                  <p className="game-card-desc">
                    Vui nhộn, hào hứng; rèn nhanh nhẹn, quan sát và phản xạ linh hoạt, đồng thời tăng tinh thần đoàn
                    kết trong hội trại và ngoại khóa.
                  </p>
                  <span className="game-card-link">Xem chi tiết</span>
                </div>
              </Link>

              <Link to="/games/cau-kieu" className="game-card reveal" aria-label="Đi cầu kiều — xem chi tiết">
                <div className="game-card-image">
                  <span className="game-card-tag">Khéo léo</span>
                  <img src="/assets/thumb/caukieu.png" alt="Đi cầu kiều" loading="lazy" />
                </div>
                <div className="game-card-body">
                  <h3 className="game-card-title">Đi cầu kiều</h3>
                  <p className="game-card-desc">
                    Vận động nhẹ, rèn khéo léo, thăng bằng và tập trung; phù hợp môi trường sinh viên và gắn kết tập
                    thể.
                  </p>
                  <span className="game-card-link">Xem chi tiết</span>
                </div>
              </Link>

              <Link to="/games/bap-benh" className="game-card reveal" aria-label="Bập bênh — xem chi tiết">
                <div className="game-card-image">
                  <span className="game-card-tag">Tập thể</span>
                  <img src="/assets/thumb/bapbenh.png" alt="Bập bênh" loading="lazy" />
                </div>
                <div className="game-card-body">
                  <h3 className="game-card-title">Bập bênh</h3>
                  <p className="game-card-desc">
                    Vận động nhẹ; rèn giữ thăng bằng và phối hợp nhóm, tạo không khí vui vẻ và gắn kết trong ngày hội
                    sinh viên.
                  </p>
                  <span className="game-card-link">Xem chi tiết</span>
                </div>
              </Link>

              <Link to="/games/nem-con" className="game-card reveal" aria-label="Ném còn — xem chi tiết">
                <div className="game-card-image">
                  <span className="game-card-tag">Tết cổ truyền</span>
                  <img src="/assets/thumb/nemcon.png" alt="Ném còn" loading="lazy" />
                </div>
                <div className="game-card-body">
                  <h3 className="game-card-title">Ném còn</h3>
                  <p className="game-card-desc">
                    Mang đậm bản sắc vùng cao trong lễ hội; rèn khéo léo, chính xác và tinh thần tập thể — trải
                    nghiệm văn hóa gắn kết sinh viên.
                  </p>
                  <span className="game-card-link">Xem chi tiết</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="reviews" id="reviews">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Cảm nhận</span>
              <h2 className="section-title">Ký ức và cảm nhận về trò chơi dân gian</h2>
              <p className="section-subtitle">
                Tiếng sạp, tiếng cười sân đình hay giây phút thả còn — mỗi người một kỷ niệm gắn với trò chơi làng quê.
              </p>
            </div>

            <div className="reviews-grid">
              <div className="review-card reveal">
                <div className="review-stars">★★★★★</div>
                <p className="review-quote">
                  &quot;Hồi nhỏ đi hội làng, tôi thích nhất được xem nhảy sạp: nhịp tre gõ đều, mọi người nhún nhảy sao
                  cho khớp — vừa hồi hộp vừa vui, như cả làng cùng một nhịp đập.&quot;
                </p>
                <div className="review-author">
                  <div className="review-avatar">M</div>
                  <div>
                    <div className="review-name">Hương Huyền</div>
                    <div className="review-role">Giảng viên - Khoa Du Lịch và Ngoại Ngữ</div>
                  </div>
                </div>
              </div>

              <div className="review-card reveal">
                <div className="review-stars">★★★★★</div>
                <p className="review-quote">
                  &quot;Ở trường con tôi có ngày hội thể thao dân gian; các em được chơi bắt vịt, kéo co… Tiếng reo hò
                  không ngớt — trò chơi đơn giản mà gắn kết cả lớp.&quot;
                </p>
                <div className="review-author">
                  <div className="review-avatar">T</div>
                  <div>
                    <div className="review-name">Đức Mạnh</div>
                    <div className="review-role">Phụ huynh — Hải Phòng</div>
                  </div>
                </div>
              </div>

              <div className="review-card reveal">
                <div className="review-stars">★★★★★</div>
                <p className="review-quote">
                  &quot;Tết về quê ngoại, anh em cháu chắt kéo nhau ra sân đình xem đánh đu, ném còn. Không khí náo
                  nức — giữ được những trò đó là giữ được phần hồn của làng.&quot;
                </p>
                <div className="review-author">
                  <div className="review-avatar">Q</div>
                  <div>
                    <div className="review-name">Phạm Thị Tuyền</div>
                    <div className="review-role">Sinh viên — Khoa Kinh Tế</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
