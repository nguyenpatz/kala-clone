import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialValue = {
	logo: "https://api.kalabooks.com/static/1654755954240logo.png/high",
	slides: [
		{
			id: 1,
			url: "https://api.kalabooks.com/static/1651126250474b3jpg/high",
		},
		{
			id: 2,
			url: "https://api.kalabooks.com/static/1652414579206banner-sach.jpg/high",
		},
		{
			id: 3,
			url: "https://api.kalabooks.com/static/1651125902975banerpng/high",
		},
	],
	paper: [
		{
			id: 1,
			img_front:
				"https://api.kalabooks.com/static/1652496652801yeu-nhung-dieu-khong-hoan-hao.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652496655863yeu-nhung-dieu-khong-hoan-hao1.jpg/high",
			name: "Yêu những điều không hoàn hảo",
			price: "300.000",
			sale: "250.000",
			author: "Hae Min",
		},
		{
			id: 2,
			img_front:
				"https://api.kalabooks.com/static/1650612995496truyen-co-grimm3.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652172692762truyenco-grimm2.jpg/high",
			name: "Truyện cổ Grimm",
			price: "30.000",
			sale: "29.999",
			author: "Zoe McKey",
		},
		{
			id: 3,
			img_front:
				"https://api.kalabooks.com/static/1650612731183tu-thu-tay-tang.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652417042119tu-thu-tay-tang-1.jpg/high",
			name: "Tử thư Tây Tạng",
			price: "1.000.000",
			sale: "125.000",
			author: "Trương Tân Quốc ",
		},
		{
			id: 4,
			img_front:
				"https://api.kalabooks.com/static/1650612487869viet-nam-su-luoc2.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652417422398vietnam-su-luoc.jpg/high",
			name: "Việt Nam sử lược 2",
			price: "900.000",
			sale: "120.000",
			author: "Thích Trí Tịnh",
		},
		{
			id: 5,
			img_front:
				"https://api.kalabooks.com/static/1652417503872vietnam-su-luoc.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652417508941vietnam-su-luoc0.jpg/high",
			name: "Việt Nam sử lược",
			price: "100.000",
			sale: "85.000",
			author: "Thích Trí Tịnh",
		},
		{
			id: 6,
			img_front:
				"https://api.kalabooks.com/static/1650594213538toi-tai-gioi-ban-cung-the2.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652417547707toitai-gioi-ban-cung-the1.jpg/high",
			name: "Yêu những điều không hoàn hảo",
			price: "300.000",
			sale: "250.000",
			author: "Hae Min",
		},
	],
	ebook: [
		{
			id: 1,
			img_front:
				"https://api.kalabooks.com/static/1652170738193phi-ly-tri.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652416130658phi-ly-tri1.jpg/high",
			name: "Phi Lý Trí",
			price: "100.000",
			sale: "90.000",
			author: "orling Kindersley Limited",
		},
		{
			id: 2,
			img_front:
				"https://api.kalabooks.com/static/1652170789946vietnam-su-luoc1.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652170793489vietnam-su-luoc2.jpg/high",
			name: "Việt nam sử lược",
			price: "20.000",
			sale: "19.000",
			author: "Trần Quang Đức",
		},
		{
			id: 3,
			img_front:
				"https://api.kalabooks.com/static/1650616171899Phi lý trí.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652416946771phi-ly-tri1.jpg/high",
			name: "Phi lý trí",
			price: "350.000",
			sale: "300.000",
			author: "Dan Ariely",
		},
		{
			id: 4,
			img_front:
				"https://api.kalabooks.com/static/1650615774301viet-nam-su-luoc0.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1650615774301viet-nam-su-luoc0.jpg/high",
			name: "Việt Nam sử lược",
			price: "200.000",
			sale: "199.999",
			author: "Trần Trọng Kim",
		},
		{
			id: 5,
			img_front:
				"https://api.kalabooks.com/static/1650615270062suc-manh-tiem-thuc-joseph-murphy3.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1652172330356sucmanh-tiem-thuc-joseph-murphy1.jpg/high",
			name: "Sức mạnh tiềm thức",
			price: "30.000",
			sale: "29.999",
			author: "Joseph Murphy ",
		},
		{
			id: 6,
			img_front:
				"https://api.kalabooks.com/static/1650615425313truyen-co-grimm2.jpg/high",
			img_back:
				"https://api.kalabooks.com/static/1650615425313truyen-co-grimm2.jpg/high",
			name: "Đắc nhân tâm",
			price: "120.000",
			sale: "250.000",
			author: "Vương Bảo Long ",
		},
	],
	minimal_news: [
		{
			id: 1,
			img: "https://api.kalabooks.com/static/1653280532637giao-duc-cong-dan-8001.jpg/high",
			title: "Giúp trẻ tìm niềm vui khi học ngoại ngữ",
			content:
				"Một số xuất bản phẩm được thực hiện dưới dạng sách tranh, song ngữ hoặc kể chuyện cười nhằm giải tỏa áp lực, khơi gợi niềm hứng khởi với ngoại ngữ.",
			date: "23/05/2022 - 11:35",
		},
		{
			id: 2,
			img: "https://api.kalabooks.com/static/1650900717612muon-kiep-nhan-sinh-03jpg/high",
			title: "Đại dương đen: Ánh sáng giữa đại dương tăm tối",
			content:
				"Tiếp nối thành công từ những cuốn sách trước đó như “Bức xúc không làm ta vô can”, “Thiện – ác và smartphone”, “Tìm mình trong thế giới hậu tuổi thơ”, Tiến sĩ Đặng Hoàng Giang công bố cuốn sách mang tên “Đại dương đen” – kết tinh hành trình đầy nhọc nhằn và nhẫn nại của tác giả với người trầm cảm trong suốt hai năm ròng. Cuốn sách ghi lại tiếng nói đầy xót xa, ám ảnh của những người đang ngấp ngoải trong “đại dương” trầm cảm, đồng thời đem đến cho người đọc góc nhìn đầy khoa học khi cung cấp những kiến thức cơ bản về trầm cảm từ nguyên nhân, hậu quả, phương thức trị liệu, đến cách đối mặt với trầm cảm.",
			date: "25/04/2022 - 11:43",
		},
		{
			id: 3,
			img: "https://api.kalabooks.com/static/1650851916265nha-gia-kim-4jpg/high",
			title: "GIẢI MÃ Ý NGHĨA CÁC BIỂU TƯỢNG TRONG  TÁC PHẨM “NHÀ GIẢ KIM” CỦA PAULO COELHO",
			content: `1. Biểu tượng về những mô hình người trong xã hội
			Đàn cừu: Đây là biểu tượng xuất hiện với tần suất cao trong “Nhà giả kim”. Cậu bé Santiago ở trong truyện sở hữu một đàn cừu và nó chính là phương tiện trao đổi để phục vụ cho nhu cầu đi tới nhiều nơi của cậu. Tuy nhiên ngoài ra, đàn cừu còn tượng trưng cho một nhóm người ngại thay đổi, lười biếng trong xã hội. Những người này chỉ biết tuân thủ những quy tắc, định nghĩa do người khác tạo ra mà không có sự phản biện. Trong “Nhà giả kim”, Santiago đã nhận xét về lũ cừu rằng: “Nếu bất chợt mình biến thành một kẻ hung ác, giết hết con này đến con khác thì chắc khi cả lũ chết gần hết rồi chúng mới biết. Vì chúng mù quáng tin vào mình, chứ không còn tin ở bản năng của chúng nữa.”
			 Người chăn cừu và anh chàng đọc sách: Điều làm nên sự khác biệt giữa hai người này là Santiago chú ý vào trải nghiệm thực tế còn anh chàng đọc sách chỉ biết đến lý thuyết mà thôi. Dù chỉ là cậu bé chăn cừu nhưng Santiago lại biết liên hệ, thực hành những gì đọc được vào trong cuộc sống. Thậm chí, cậu cũng học được rất nhiều điều từ chính cuộc phiêu lưu của bản thân. Như vậy, hai thái cực đối lập giữa người chăn cừu và người đọc sách cho chúng ta thấy được sự vô ích của việc đọc mà không hiểu. Vì vậy đừng chỉ nắm lý thuyết suông mà hãy trải nghiệm nhiều hơn.
			Người bán kem và chủ cửa hàng pha lê: Người bán kem trong truyện là người có mong muốn ngao du đó đây và quyết định bán kem để có tiền sang châu Phi chơi một tháng. Nhưng cuối cùng anh ta cũng không thực hiện được mục đích của mình. Đây là điển hình cho những người trên con đường thực hiện ước mơ lại quên đi mục tiêu ban đầu đặt ra. Còn chủ cửa hàng pha lê lại khác hoàn toàn. Ông luôn nhớ rất rõ là nhắc nhở bản thân là phải hành hương đến Mekka - Thánh địa của những người theo đạo Hồi. Nhưng khi có đủ điều kiện rồi, ông vẫn không chịu tới Mekka. Đây là những người chỉ duy trì việc hướng đến mục đích sống của mình chứ không cố gắng thực hiện nó.   
			Đám quân lính trên sa mạc và bọn cướp: Trong “Nhà giả kim”, đám quân lính trên sa mạc không tin vào nhà giả kim và Santiago cho đến khi Santiago chứng minh được sức mạnh. Đây là điển hình của những người luôn hoài nghi và chỉ khi có căn cứ thì họ mới tin. Điều này chứng minh họ là những người thực tế vừa đủ. Ngược lại, bọn cướp lại cười nhạo Santiago và khuyên cậu không nên tin vào giấc mơ. Những người này sống quá thực dụng. Vì họ không có ước mơ, không mục đích nên chẳng thể làm được gì có giá trị, không cống hiến được gì cho xã hội.    
			2. Biểu tượng về hành vi
			Theo đuổi giấc mơ: Cậu bé Santiago trong truyện quyết định đến kim tự tháp không phải bị hấp dẫn bởi kho báu mà là vì cậu không biết tại sao mình lại có một giấc mơ như vậy. Thực chất theo đuổi giấc mơ ở đây là việc khám phá và giải mã những vấn đề đang diễn ra bên trong tâm trí, trong suy nghĩ, và trong chính con người Santiago, chứ không chỉ đơn giản là thực hiện một hành động nào đó xuất hiện trong giấc mơ theo nghĩa đen.
			Cuộc phiêu lưu: Trong cuộc phiêu lưu của mình, Santiago đã không ngừng mở rộng, phát triển bản thân. Điều này chứng tỏ rằng cuộc phiêu lưu vừa là để chinh phục, vừa là để tận hưởng. Cuộc phiêu lưu chỉ thực sự đúng nghĩa khi người ta hết mình vì nó, tận hưởng mọi thứ xảy ra kể cả những niềm vui hay thử thách.    
			Tình yêu lý tưởng: Biểu tượng này được thể hiện qua nhân vật Fatima. Qua câu chuyện, người đọc sẽ nhận ra rằng tình yêu là không trói buộc, đem lại cho đối phương sự tự do và quyền lựa chọn. Fatina được tác giả Paulo Coelho xây dựng rõ ràng như một người phụ nữ hết lòng vì người yêu. Người ta không thể lẫn đôi mắt thăm thẳm và dáng đợi chờ giữa sa mạc rộng lớn của Fatima với bất kỳ ai. Tương tự như thế, tình yêu lý tưởng sẽ không bao giờ bị pha tạp, trộn lẫn.
			3. Biểu tượng về vấn đề tâm linh
			Nhà giả kim/Thuật giả kim: Biểu tượng này xuất hiện trải dài trong toàn bộ cuốn sách. Nhà giả kim không đơn thuần là người luyện vàng mà đã nâng lên thành biểu tượng về luyện đan tinh thần. Mục đích cao nhất của thuật giả kim là chuyển hóa để đạt đến trạng thái cao và hoàn mỹ nhất. Như vậy, con người không ngừng mở rộng bản thân, vượt qua giới hạn thì sẽ trở thành phiên bản tốt nhất.
			Kim tự tháp: Trên thực tế, kim tự tháp là lăng mộ của các vị Pharaon, được xây dựng vô cùng kiên cố. Chúng là một thực thể tồn tại vĩnh viễn cùng không gian, thời gian và là biểu tượng của vẻ đẹp lý tưởng, sự sống vĩnh hằng. Mơ về kho báu ở kim tự tháp rất có thể là kho báu của sự sống đời đời.  
			Các dấu hiệu: Dấu hiệu chỉ xuất hiện khi chúng ta không có bất kỳ một sự mong đợi nào. Việc chúng xuất hiện không hề lộ liễu. Nếu muốn nhận biết dấu hiệu, ta phải có khả năng quan sát kỹ lưỡng, đưa ra những phân tích cụ thể, nắm bắt được điểm khác biệt trong bức tranh toàn cảnh. 
			Có lẽ mỗi người khi đọc sách “Nhà giả kim” đều sẽ có những suy nghĩ và nhận định riêng. Điều này là một trong những yếu tố làm nên sức hấp dẫn của cuốn tiểu thuyết phương Tây này. Bạn có thể tìm mua sách tại Nhà sách Kala. 
			
			Tham khảo: spiderum.com`,
			date: "21/04/2022 - 19:13",
		},
		{
			id: 4,
			img: "https://api.kalabooks.com/static/1650853274237rung-na-uy-3jpg/high",
			title: `RỪNG NA UY - KHI CÁI CHẾT LÀ MỘT PHẦN CỦA SỰ SỐNG`,
			content: `Thông tin chung về cuốn sách
				Tên sách: Rừng Na Uy
				Tác giả Haruki Murakami 
				Thể loại: Tiểu thuyết
				Người dịch: Trịnh Lữ 
				Năm phát hành: 2018 
				Hình thức: Bìa mềm
				Số trang: 553`,
			date: "21/04/2022 - 14:13",
		},
	],
};

// const initialValue = {
// 	slides: true,
// 	search: "",
// }

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialValue);

	return (
		<AppContext.Provider value={{ ...state }}>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
