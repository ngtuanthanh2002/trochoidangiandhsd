import type { GameDetailModel } from '../../types/gameDetail';

export const nemConGame: GameDetailModel = {
  slug: 'nem-con',
  pageTitle: 'Ném còn — Trò Chơi Dân Gian',
  coverSrc: '/assets/nem-con.jpg',
  coverAlt: 'Ném còn',
  heading: 'Ném còn',
  lead:
    'Ném còn là trò chơi dân gian mang đậm bản sắc văn hóa vùng cao, thường xuất hiện trong các lễ hội truyền thống. Trò chơi không chỉ mang tính giải trí mà còn giúp rèn luyện sự khéo léo, chính xác và tinh thần tập thể — phù hợp để tổ chức trong môi trường sinh viên nhằm tạo sự gắn kết và trải nghiệm văn hóa.',
  sections: [
    {
      h2: '1. Mục đích – yêu cầu',
      groups: [
        {
          h3: 'Mục đích',
          ul: [
            'Rèn luyện sự khéo léo, chính xác và khả năng ước lượng lực ném',
            'Phát triển sự tập trung và phối hợp tay – mắt',
            'Tạo không khí vui tươi, mang tính lễ hội trong tập thể',
            'Góp phần gìn giữ nét đẹp văn hóa truyền thống vùng miền núi phía Bắc',
          ],
        },
        {
          h3: 'Yêu cầu',
          ul: [
            'Người chơi tuân thủ hướng dẫn và quy định an toàn',
            'Không chen lấn, xô đẩy trong khu vực thi đấu',
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
            '1 quả còn (làm bằng vải, bên trong nhồi hạt hoặc giấy)',
            'Cột còn cao (thường khoảng 5–10m tùy điều kiện)',
            'Vòng tròn mục tiêu gắn trên đỉnh cột',
            'Khu vực sân chơi rộng, thoáng',
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
            'Số lượng: 5–10 người mỗi lượt',
            'Có thể tổ chức thi đấu cá nhân hoặc theo đội',
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
            'Dựng cột còn chắc chắn tại vị trí trung tâm sân chơi',
            'Gắn vòng tròn mục tiêu ở đỉnh cột',
            'Chuẩn bị quả còn cho người chơi',
          ],
        },
        {
          h3: 'Tiến hành chơi',
          ul: [
            'Người chơi đứng tại vạch quy định cách cột một khoảng phù hợp',
            'Lần lượt thực hiện ném quả còn sao cho lọt qua vòng tròn',
            'Mỗi người có số lượt ném nhất định (ví dụ 3–5 lượt)',
          ],
        },
        {
          h3: 'Luật chơi',
          ul: [
            'Người chơi phải đứng đúng vạch khi ném',
            'Quả còn phải bay qua vòng tròn mục tiêu mới được tính điểm',
            'Không được gây cản trở người chơi khác',
            'Nếu vi phạm luật → lượt ném không được tính',
          ],
        },
      ],
    },
    {
      h2: '5. Cách tính thắng – thua',
      groups: [
        {
          ul: [
            'Người ném trúng vòng nhiều lần nhất sẽ thắng',
            'Trường hợp bằng nhau → tính số lần ném ít hơn sẽ thắng',
            'Nếu không ai ném trúng → có thể tổ chức lại vòng chơi',
          ],
        },
      ],
    },
    {
      h2: '6. Hình thức tổ chức',
      groups: [
        {
          ul: [
            'Thi cá nhân hoặc chia đội',
            'Có thể tổ chức trong các ngày hội thể thao hoặc sự kiện văn hóa',
            'Kết hợp cổ vũ để tăng tính hấp dẫn',
          ],
        },
      ],
    },
    {
      h2: '7. Lưu ý khi tổ chức',
      groups: [
        {
          ul: [
            'Kiểm tra độ chắc chắn của cột còn trước khi chơi',
            'Đảm bảo khoảng cách an toàn giữa người chơi và người xem',
            'Tránh ném quá mạnh gây mất kiểm soát',
            'Có người giám sát tính điểm và an toàn',
          ],
        },
      ],
    },
  ],
};
