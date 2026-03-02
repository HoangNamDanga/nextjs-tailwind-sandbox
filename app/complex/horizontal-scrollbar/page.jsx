import React from "react";
import HorizontalScrollbar from "../../components/horizontal-scrollbar/HorizontalScrollbar";

const categories = [
  "Phim & Hoạt hình (Film & Animation)",
  "Ô tô & Xe cộ (Autos & Vehicles)",
  "Âm nhạc (Music)",
  "Thú cưng & Động vật (Pets & Animals)",
  "Thể thao (Sports)",
  "Du lịch & Sự kiện (Travel & Events)",
  "Trò chơi (Gaming)",
  "Người & Blog (People & Blogs)",
  "Hài kịch (Comedy)",
  "Giải trí (Entertainment)",
  "Tin tức & Chính trị (News & Politics)",
  "Hướng dẫn & Phong cách (Howto & Style)",
  "Giáo dục (Education)",
  "Khoa học & Công nghệ (Science & Technology)",
  "Tổ chức phi lợi nhuận & Hoạt động xã hội (Nonprofits & Activism)",
  "YouTube Shorts (Video ngắn)",
  "ASMR (Âm thanh thư giãn)",
  "Review Sản phẩm (Product Reviews)",
  "Vlog Đời sống (Lifestyle Vlogs)",
  "Ẩm thực & Nấu ăn (Cooking & Recipes)",
  "Tài chính & Kinh doanh (Finance & Business)",
  "Sức khỏe & Thể hình (Health & Fitness)",
  "Làm đẹp & Trang điểm (Beauty & Makeup)",
  "Thời trang (Fashion)",
  "Lịch sử & Tài liệu (History & Documentaries)",
  "Kể chuyện & Hoạt hình (Storytelling & Animation)",
  "DIY & Thủ công (DIY & Crafts)",
  "Phim ngắn (Short Movies)",
  "Nội dung trẻ em (Kids Content)",
  "Hậu trường (Behind the Scenes)",
];

const users = new Array(20).fill(0).map((item, index) => {
  return {
    id: index,
    username: `U#{index}`,
    image: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 50)}`,
  };
});
const HorizontalScrollbarPage = () => {
  console.log(users);
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>HorizontalScrollbarPage</h1>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Youtube Categories</h1>
      <HorizontalScrollbar scrollbar={true}>
        {categories.map((item, index) => (
          <div
            key={index}
            className="border-1 border-gray-200 p-1 shrink-0 rounded-lg hover:border-gray-400 cursor-pointer"
          >
            <h1>{item}</h1>
          </div>
        ))}
      </HorizontalScrollbar>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Intagram Categories</h1>
      <HorizontalScrollbar>
        {users.map((item) => (
          <div className="shrink-0" key={item.id}>
            <img
              src={item.image}
              alt={item.username}
              className="w-14 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-200"
            />
          </div>
        ))}
      </HorizontalScrollbar>
    </div>
  );
};

export default HorizontalScrollbarPage;
