import type { GameDetailModel } from '../../types/gameDetail';

export const nhaySapGame: GameDetailModel = {
  slug: 'nhay-sap',
  pageTitle: 'Nhảy sạp — Trò Chơi Dân Gian',
  coverSrc: '/assets/nhay-sap.jpg',
  coverAlt: 'Nhảy sạp',
  heading: 'Nhảy sạp',
  lead:
    'Nhảy sạp là trò chơi dân gian mang đậm nét văn hóa truyền thống, tạo không khí sôi động, vui tươi và gắn kết tập thể. Trò chơi giúp người tham gia rèn luyện sự nhanh nhẹn, khả năng phối hợp nhịp nhàng giữa tay, chân và cảm nhận tiết tấu âm nhạc; đồng thời góp phần nâng cao tinh thần đồng đội, sự tự tin — rất phù hợp hoạt động ngoại khóa và sinh hoạt tập thể sinh viên.',
  sections: [
    {
      h2: '1. Mục đích – yêu cầu',
      groups: [
        {
          h3: 'Mục đích',
          ul: [
            'Tạo sân chơi vui vẻ, tăng sự gắn kết giữa sinh viên',
            'Rèn luyện sự nhanh nhẹn, khả năng phản xạ và phối hợp nhịp nhàng',
            'Góp phần bảo tồn và phát huy giá trị văn hóa truyền thống',
          ],
        },
        {
          h3: 'Yêu cầu',
          ul: [
            'Người chơi phải tuân thủ đúng nhịp',
            'Đảm bảo an toàn trong quá trình tham gia',
            'Có tinh thần hợp tác, không chen lấn',
          ],
        },
      ],
    },
    {
      h2: '2. Dụng cụ',
      groups: [
        {
          ul: [
            '4–6 thanh tre (hoặc gậy gỗ), dài khoảng 2–3m',
            'Không gian tổ chức rộng, bằng phẳng',
            'Loa phát nhạc (nếu có) để tăng không khí',
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
            'Số lượng: 4–6 người gõ sạp; 2–6 người tham gia nhảy mỗi lượt',
            'Có thể tổ chức theo hình thức luân phiên',
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
            'Sắp xếp các thanh tre thành từng cặp song song',
            'Khoảng cách giữa các thanh đủ để người chơi di chuyển',
            'Phân công người gõ sạp và người chơi',
          ],
        },
        {
          h3: 'Tiến hành trò chơi',
          ul: [
            'Người gõ sạp thực hiện động tác mở – đóng – mở – đóng theo nhịp đều',
            'Người chơi nhảy vào giữa các thanh tre theo nhịp',
            'Có thể tăng tốc độ hoặc thay đổi kiểu nhảy (nhảy đơn, nhảy đôi)',
          ],
        },
        {
          h3: 'Luật chơi',
          ul: [
            'Người chơi phải nhảy đúng nhịp sạp',
            'Không được để chân bị kẹp vào thanh tre',
            'Nếu vi phạm: bị loại hoặc đổi lượt chơi',
          ],
        },
      ],
    },
    {
      h2: '5. Cách tính điểm và xác định thắng – thua',
      groups: [
        {
          ul: [
            'Người chơi trụ lại lâu nhất sẽ chiến thắng',
            'Có thể chấm điểm dựa trên thời gian tham gia, độ chính xác theo nhịp, tính sáng tạo trong cách nhảy',
          ],
        },
      ],
    },
    {
      h2: '6. Hình thức tổ chức',
      groups: [
        {
          ul: [
            'Tổ chức theo nhóm hoặc cá nhân',
            'Có thể kết hợp thi đấu giữa các lớp, hoạt động ngoại khóa, ngày hội sinh viên',
          ],
        },
      ],
    },
    {
      h2: '7. Lưu ý khi tổ chức',
      groups: [
        {
          ul: [
            'Kiểm tra độ an toàn của dụng cụ',
            'Tránh gõ sạp quá mạnh gây chấn thương',
            'Có người hướng dẫn cho người mới',
            'Không tổ chức ở nơi trơn trượt',
          ],
        },
      ],
    },
  ],
};
