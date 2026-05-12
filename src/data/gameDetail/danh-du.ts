import type { GameDetailModel } from '../../types/gameDetail';

export const danhDuGame: GameDetailModel = {
  slug: 'danh-du',
  pageTitle: 'Đánh đu — Trò Chơi Dân Gian',
  coverSrc: '/assets/danh-du.jpg',
  coverAlt: 'Đánh đu — trò chơi dân gian',
  heading: 'Đánh đu',
  lead:
    'Đánh đu là trò chơi dân gian truyền thống gắn liền với nhiều lễ hội của người Việt, đặc biệt phổ biến ở các vùng nông thôn Bắc Bộ. Trò chơi mang tính giải trí cao, tạo cảm giác hào hứng và sôi động cho người tham gia; đồng thời rèn luyện sự dẻo dai, khả năng giữ thăng bằng và tinh thần tự tin — rất phù hợp để tổ chức trong các hoạt động tập thể sinh viên nhằm tăng sự gắn kết và trải nghiệm văn hóa dân gian.',
  sections: [
    {
      h2: '1. Mục đích – yêu cầu',
      groups: [
        {
          h3: 'Mục đích',
          ul: [
            'Rèn luyện sự dẻo dai, khả năng giữ thăng bằng và sự phối hợp vận động',
            'Tạo không khí vui tươi, sôi động trong các hoạt động tập thể',
            'Giúp người chơi tăng sự tự tin và tinh thần đoàn kết',
            'Góp phần gìn giữ và phát huy nét đẹp văn hóa dân gian truyền thống Việt Nam',
          ],
        },
        {
          h3: 'Yêu cầu',
          ul: [
            'Người chơi tuân thủ hướng dẫn và quy định an toàn',
            'Kiểm tra đu chắc chắn trước khi tham gia',
            'Không chen lấn, xô đẩy trong khu vực chơi',
            'Thực hiện đúng lượt chơi của mình',
          ],
        },
      ],
    },
    {
      h2: '2. Dụng cụ',
      groups: [
        {
          ul: [
            '1 bộ đu (gồm cột đu, dây đu và bàn đứng)',
            'Khu vực sân chơi rộng, bằng phẳng',
            'Dây bảo hộ hoặc người hỗ trợ an toàn (nếu cần)',
            'Còi và bảng điểm cho người quản trò',
          ],
        },
      ],
    },
    {
      h2: '3. Đối tượng và số lượng tham gia',
      groups: [
        {
          ul: [
            'Đối tượng: Sinh viên nam và nữ',
            'Số lượng: 2–6 người mỗi lượt',
            'Có thể tổ chức thi cá nhân hoặc theo cặp',
          ],
        },
      ],
    },
    {
      h2: '4. Quy trình tổ chức',
      sectionClass: 'game-detail-process',
      groups: [
        {
          h3: 'Chuẩn bị',
          ul: [
            'Lắp đặt và kiểm tra độ chắc chắn của bộ đu',
            'Phân chia khu vực chơi và khu vực đứng chờ',
            'Phổ biến luật chơi và hướng dẫn cách giữ thăng bằng khi đánh đu',
          ],
        },
        {
          h3: 'Tiến hành chơi',
          ul: [
            'Người chơi lần lượt bước lên bàn đu và dùng lực để đưa đu chuyển động',
            'Cố gắng giữ thăng bằng và đưa đu lên cao theo khả năng',
            'Mỗi lượt chơi diễn ra trong thời gian quy định (ví dụ 1–2 phút)',
          ],
        },
        {
          h3: 'Luật chơi',
          ul: [
            'Người chơi phải bám chắc tay vào dây đu trong suốt quá trình chơi',
            'Không được xô đẩy hoặc làm ảnh hưởng người khác',
            'Nếu bị ngã hoặc chạm chân xuống đất quá quy định → lượt chơi kết thúc',
            'Người chơi phải thực hiện theo hiệu lệnh của quản trò',
          ],
        },
      ],
    },
    {
      h2: '5. Cách tính thắng – thua',
      groups: [
        {
          ul: [
            'Người đưa đu cao và giữ thăng bằng tốt nhất sẽ thắng',
            'Có thể tính điểm dựa trên độ cao hoặc thời gian giữ đu ổn định',
            'Trường hợp bằng điểm → tổ chức lượt chơi phụ',
          ],
        },
      ],
    },
    {
      h2: '6. Hình thức tổ chức',
      groups: [
        {
          ul: [
            'Thi cá nhân hoặc theo cặp',
            'Có thể tổ chức trong ngày hội thể thao, lễ hội truyền thống hoặc hoạt động ngoại khóa',
            'Kết hợp cổ vũ và âm nhạc để tăng sự sôi động',
          ],
        },
      ],
    },
    {
      h2: '7. Lưu ý khi tổ chức',
      groups: [
        {
          ul: [
            'Kiểm tra kỹ độ chắc chắn của cột và dây đu trước khi chơi',
            'Đảm bảo khu vực xung quanh không có vật cản nguy hiểm',
            'Không để quá nhiều người đứng gần khu vực đu',
            'Có người hỗ trợ và giám sát an toàn trong suốt quá trình tổ chức',
          ],
        },
      ],
    },
  ],
};
