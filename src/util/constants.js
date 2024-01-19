import React from "react";
import {
  AiFillStar,
  BsFillSendFill,
  BsShieldFillCheck,
  airbnb,
  binance,
  coinbase,
  dropbox,
} from "../assets";

export const navigationLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "products",
    title: "Mahsulot",
  },
  {
    id: "features",
    title: "Xizmatlar",
  },
  {
    id: "clients",
    title: "Mijozlar",
  },
];
export const stistics = [
  {
    id: 1,
    title: "Foydalanuvchi faol",
    value: "9302+",
  },
  {
    id: 2,
    title: "Kompayniya Homiyligida",
    value: "902+",
  },
  {
    id: 3,
    title: "Tranzaksiya",
    value: "10m+",
  },
];

export const features = [
  {
    id: 1,
    // icon: <AiFillStar className={`w-[50%] h-[50%] object-contain icons`} />,
    icon: AiFillStar,
    title: "Mukofotlar",
    content:
      "Eng yaxshi kredit kartalari aksiyalar va sovrinlarning ajoyib kombinatsiyasini taklif qiladi.",
  },
  {
    id: 2,
    // icon: (
    //   <BsShieldFillCheck className={`w-[50%] h-[50%] object-contain icons`} />
    // ),
    icon: BsShieldFillCheck,
    title: "100% Himoyalangan",
    content:
      "Ma'lumotlaringiz va tranzaksiyalaringiz xavfsiz ekanligiga ishonch hosil qilish uchun choralar.",
  },
  {
    id: 3,
    // icon: <BsFillSendFill className={`w-[50%] h-[50%] object-contain icons`} />,
    icon: BsFillSendFill,
    title: "Balansni o'tkazish",
    content:
      "Balansni o'tkazish kredit kartasi sizga foizlarni to'lashda ko'p pul tejash imkonini beradi.",
  },
];
export const feedbacks = [
  {
    id: 1,
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Ledaer",
  },
  {
    id: 2,
    content:
      "Money makes your life easier. If you are lucky to have it, you are lucky.",
    name: "Steve Mark",
    title: "Founder & Ledaer",
  },
  {
    id: 3,
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Ledaer",
  },
];
// airbnb binance coinbase dropbox
export const clients = [
  {
    id: 1,
    title: "AIRBNB",
    logo: airbnb,
  },
  {
    id: 2,
    title: "BINANCE",
    logo: binance,
  },
  {
    id: 3,
    title: "COINBASE",
    logo: coinbase,
  },
  {
    id: 4,
    title: "DROPBOX",
    logo: dropbox,
  },
];

export const footerLinks = [
  {
    title: "Jamiyat",
    links: [
      { name: "Yordam markazi", link: "https://www.hoobank.com/help-center/" },
      { name: "Hamkorlar", link: "https://www.hoobank.com/partners/" },
      { name: "Takliflar", link: "https://www.hoobank.com/suggestions/" },
      { name: "Blog", link: "https://www.hoobank.com/blog/" },
      { name: "Yangiliklar", link: "https://www.hoobank.com/newsletters/" },
    ],
  },

  {
    title: "Foydali Havolalar",
    links: [
      { name: "Content", link: "https://www.hoobank.com/newsletters/" },
      { name: "Qanday ishlaydi", link: "https://www.hoobank.com/newsletters/" },
      {
        name: "Shartlar & xizmatlar",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },

  {
    title: "Hamkor",
    links: [
      {
        name: "Bizning hamkorimiz",
        link: "https://www.sammi.ac/our-partner/",
      },
      {
        name: "Hamkor bo'ling",
        link: "https://www.sammi.ac/become-a-partner/",
      },
    ],
  },
];
