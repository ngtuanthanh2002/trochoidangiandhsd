import type { GameDetailModel } from '../../types/gameDetail';

export const dapNieuGame: GameDetailModel = {
  slug: 'dap-nieu',
  pageTitle: 'Bịt mắt đập niêu — Trò Chơi Dân Gian',
  coverSrc: '/assets/dap-nieu.jpg',
  coverAlt: 'Bịt mắt đập niêu',
  heading: 'Bịt mắt đập niêu',
  lead:
    'Bịt mắt đập niêu là trò chơi dân gian mang tính giải trí cao, tạo sự hào hứng và tiếng cười trong tập thể. Trò chơi giúp người tham gia rèn luyện khả năng định hướng, phản xạ và sự tập trung, đồng thời phù hợp để tổ chức trong các hoạt động ngoại khóa dành cho sinh viên.',
  sections: [
    {
      h2: '1. Mục đích – yêu cầu',
      groups: [
        {
          h3: 'Mục đích',
          ul: [
            'Rèn luyện khả năng định hướng không gian khi bị hạn chế thị giác',
            'Phát triển phản xạ, sự tập trung và khả năng ước lượng khoảng cách',
            'Tạo không khí vui tươi, sôi động trong các hoạt động tập thể',
            'Góp phần giữ gìn và phát huy trò chơi dân gian truyền thống',
          ],
        },
        {
          h3: 'Yêu cầu',
          ul: [
            'Người chơi phải tuân thủ hướng dẫn của ban tổ chức',
            'Đảm bảo an toàn trong suốt quá trình tham gia',
            'Không xô đẩy, chen lấn khi chơi',
          ],
        },
      ],
    },
    {
      h2: '2. Dụng cụ',
      groups: [
        {
          ul: [
            '1–3 cái niêu đất (hoặc vật thay thế như chai nhựa treo)',
            '1 cây gậy (dùng để đập niêu)',
            'Khăn bịt mắt',
            'Dây treo niêu hoặc giá treo cố định',
            'Không gian rộng, thoáng, bằng phẳng',
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
            'Số lượng: 5–10 người mỗi lượt chơi',
            'Có thể tổ chức theo hình thức lần lượt từng người tham gia',
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
            'Treo niêu ở vị trí cố định (cách mặt đất phù hợp với chiều cao người chơi)',
            'Chuẩn bị gậy đập và khăn bịt mắt',
            'Kẻ khu vực an toàn, giới hạn phạm vi di chuyển',
          ],
        },
        {
          h3: 'Tiến hành chơi',
          ul: [
            'Người chơi được bịt mắt và xoay nhẹ 2–3 vòng để mất phương hướng',
            'Sau đó, người chơi cầm gậy và bắt đầu di chuyển tìm vị trí của niêu',
            'Người chơi dựa vào cảm giác và hướng dẫn từ khán giả (nếu có) để xác định vị trí',
            'Khi xác định được vị trí, người chơi tiến hành đập niêu',
          ],
        },
        {
          h3: 'Luật chơi',
          ul: [
            'Người chơi chỉ được đập trong phạm vi cho phép',
            'Không được tháo khăn bịt mắt trong quá trình chơi',
            'Mỗi người có số lần đập giới hạn (ví dụ: 3–5 lần)',
            'Nếu không trúng sau số lượt quy định → kết thúc lượt chơi',
          ],
        },
      ],
    },
    {
      h2: '5. Cách tính thắng – thua',
      groups: [
        {
          ul: [
            'Người đập trúng niêu trong ít lần nhất sẽ thắng',
            'Nếu nhiều người cùng đập trúng → so sánh số lần thực hiện',
            'Trường hợp không ai đập trúng → coi như hòa hoặc tổ chức lại',
          ],
        },
      ],
    },
    {
      h2: '6. Hình thức tổ chức',
      groups: [
        {
          ul: [
            'Chơi cá nhân theo lượt',
            'Có thể tổ chức trong ngày hội sinh viên hoặc hoạt động ngoại khóa',
            'Kết hợp cổ vũ để tăng không khí sôi động',
          ],
        },
      ],
    },
    {
      h2: '7. Lưu ý khi tổ chức',
      groups: [
        {
          ul: [
            'Phải đảm bảo khu vực an toàn, tránh người xem đứng quá gần',
            'Kiểm tra kỹ vị trí treo niêu để tránh rơi gây nguy hiểm',
            'Không dùng lực quá mạnh khi đập',
            'Có người giám sát để đảm bảo trật tự',
          ],
        },
      ],
    },
  ],
};
