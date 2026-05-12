import type { GameDetailModel } from '../../types/gameDetail';

export const cauKieuGame: GameDetailModel = {
  slug: 'cau-kieu',
  pageTitle: 'Đi cầu kiều — Trò Chơi Dân Gian',
  coverSrc: '/assets/cau-kieu.jpg',
  coverAlt: 'Đi cầu kiều',
  heading: 'Đi cầu kiều',
  lead:
    'Đi cầu kiều là trò chơi dân gian mang tính vận động nhẹ, giúp người chơi rèn luyện sự khéo léo, thăng bằng và tập trung. Trò chơi phù hợp với môi trường sinh viên và góp phần tăng tính gắn kết tập thể.',
  sections: [
    {
      h2: '1. Mục đích – yêu cầu',
      groups: [
        {
          h3: 'Mục đích',
          ul: [
            'Rèn luyện khả năng giữ thăng bằng và sự khéo léo khi di chuyển',
            'Phát triển sự tập trung và kiểm soát cơ thể',
            'Tạo không khí sôi động trong hoạt động tập thể',
            'Góp phần bảo tồn trò chơi dân gian truyền thống',
          ],
        },
        {
          h3: 'Yêu cầu',
          ul: [
            'Người chơi phải tuân thủ hướng dẫn an toàn',
            'Di chuyển cẩn thận, không chen lấn',
            'Không nhảy hoặc đẩy nhau khi tham gia',
          ],
        },
      ],
    },
    {
      h2: '2. Dụng cụ',
      groups: [
        {
          ul: [
            'Cầu kiều (thanh tre/gỗ hoặc ván hẹp)',
            'Sân bằng phẳng',
            'Vạch xuất phát và vạch đích rõ ràng',
            'Có thể bố trí đệm mềm hai bên',
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
            'Số lượng: 3–6 người mỗi lượt',
            'Có thể thi cá nhân tính thời gian',
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
            'Lắp đặt cầu kiều chắc chắn',
            'Kiểm tra độ an toàn trước khi chơi',
            'Kẻ vạch xuất phát và đích rõ ràng',
          ],
        },
        {
          h3: 'Tiến hành chơi',
          ul: [
            'Người chơi đứng tại vạch xuất phát',
            'Khi có hiệu lệnh, bắt đầu đi qua cầu kiều',
            'Người chơi phải giữ thăng bằng đến khi qua hết cầu',
          ],
        },
        {
          h3: 'Luật chơi',
          ul: [
            'Không được nhảy khỏi cầu khi chưa đến đích',
            'Nếu bị rơi → quay lại hoặc tính lỗi',
            'Không được gây cản trở người khác',
          ],
        },
      ],
    },
    {
      h2: '5. Cách tính thắng – thua',
      groups: [
        {
          ul: [
            'Người hoàn thành nhanh nhất và không vi phạm sẽ thắng',
            'Nếu thi theo thời gian → người ít thời gian nhất thắng',
            'Nếu nhiều lần rơi → trừ điểm hoặc loại',
          ],
        },
      ],
    },
    {
      h2: '6. Hình thức tổ chức',
      groups: [
        {
          ul: [
            'Thi cá nhân theo lượt',
            'Tổ chức trong ngày hội thể thao hoặc ngoại khóa',
            'Có thể thi giữa các lớp',
          ],
        },
      ],
    },
    {
      h2: '7. Lưu ý khi tổ chức',
      groups: [
        {
          ul: [
            'Đảm bảo cầu kiều chắc chắn và không trơn trượt',
            'Có người giám sát an toàn',
            'Không tổ chức khi điều kiện sân bãi không đảm bảo',
          ],
        },
      ],
    },
  ],
};
