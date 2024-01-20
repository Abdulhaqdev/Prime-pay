import { logo } from "../assets";
import { footerLinks, navigationLinks } from "../util/constants";
import { style } from "../util/style";
import FooterCard from "./FooterCard";

const Footer = () => {
  return (
    <div className={`${style.flexcenter} ${style.paddingY} flex-col`}>
      <div className={`${style.flexstart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[250px] object-contain" />
          <p className={`${style.paragraph} mt-4 max-w-[350px]`}>
            To'lovlarni oson ishonchli va xavfsiz qilisning yangi usuli
          </p>
        </div>

        <div className="flex-[1.5] flex flex-row w-full justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link, idx) => (
            <FooterCard key={idx} {...link} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-montserrat font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright &copy; 2023 AmazonPay. All Rights Reserved
        </p>
        <ul className="list-none sm:flex hidden justify-start items-center  ">
          {navigationLinks.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${style.navLink} ${
                  index === navigationLinks.length - 1 ? "mr-0" : "mr-10"
                } 
               hover:text-white transition-all duration-300 navlink`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
