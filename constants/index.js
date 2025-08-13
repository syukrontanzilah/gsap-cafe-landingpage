const navLinks = [
 {
	id: "cocktails",
	title: "Minuman",
 },
 {
	id: "about",
	title: "Tentang Kami",
 },
 {
	id: "art",
	title: "Seni Meracik",
 },
 {
	id: "contact",
	title: "Kontak",
 },
];

const cocktailLists = [
 {
	name: "Es Cendol",
	country: "Jawa Barat",
	detail: "Gelas",
	price: "Rp 10.000",
 },
 {
	name: "Es Dawet Ayu",
	country: "Jawa Tengah",
	detail: "Gelas",
	price: "Rp 12.000",
 },
 {
	name: "Kopi Tubruk",
	country: "Jawa",
	detail: "Cangkir",
	price: "Rp 8.000",
 },
 {
	name: "Wedang Jahe",
	country: "Jawa Tengah",
	detail: "Cangkir",
	price: "Rp 9.000",
 },
];

const mockTailLists = [
 {
	name: "Es Teh Tarik",
	country: "Sumatera",
	detail: "Gelas",
	price: "Rp 10.000",
 },
 {
	name: "Es Pisang Ijo",
	country: "Sulawesi Selatan",
	detail: "Mangkok",
	price: "Rp 15.000",
 },
 {
	name: "Es Teler",
	country: "Jawa Barat",
	detail: "Mangkok",
	price: "Rp. 15.000",
 },
 {
	name: "Bajigur",
	country: "Sunda",
	detail: "Cangkir",
	price: "Rp.10.000",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Bahan pilihan dari alam Nusantara",
 "Resep turun-temurun yang terjaga",
 "Teknik racikan khas tradisi",
 "Seni meracik yang memikat",
];

const goodLists = [
 "Rasa segar dari racikan langsung",
 "Perpaduan cita rasa yang seimbang",
 "Hiasan cantik hingga sempurna",
 "Selalu disajikan segar dan nikmat",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
  {
    id: 1,
    name: "Es Cendol",
    image: "/images/drink1.png",
    title: "Segar Manis Khas Sunda",
    description:
      "Perpaduan tepung beras, santan, dan gula aren asli, disajikan dengan es serut yang menyegarkan. Cocok untuk pelepas dahaga di siang yang terik.",
  },
   {
    id: 2,
    name: "Kopi Tubruk",
    image: "/images/drink3.png",
    title: "Pahit Nikmat Penuh Aroma",
    description:
      "Bubuk kopi pilihan diseduh langsung dengan air panas tanpa disaring. Cita rasa khas Jawa yang kuat dan menghangatkan.",
  },
  {
    id: 3,
    name: "Es Dawet Ayu",
    image: "/images/drink2.png",
    title: "Manis Lembut dari Jawa Tengah",
    description:
      "Dawet kenyal berpadu santan gurih dan gula merah cair. Racikan khas Banjarnegara yang selalu bikin rindu kampung halaman.",
  },
  {
    id: 4,
    name: "Wedang Jahe",
    image: "/images/drink4.png",
    title: "Hangat Pedas Menyegarkan",
    description:
      "Jahe segar direbus dengan gula aren, menghasilkan minuman hangat yang menenangkan tubuh dan menambah energi.",
  },
];


export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};