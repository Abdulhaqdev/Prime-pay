export const style = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  marginY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-6",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  container: "xl:max-w-[1280px] w-full",
  flexcenter: "flex justify-center items-center",
  flexstart: "flex justify-start items-start",
  paragraph:
    "font-montserrat font-normal text-lightWhite text-[18px] leading-[30.8px]",
  flexbetween: "flex justify-between items-center",
  heding2:
    "font-montserrat text-lightWhite font-semibold xs:text-[48px] text-[40px] leading-[66.8px] w-full",
  heding1:
    "font-montserrat font-semibold xs:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full",
  navLink: "font-montserrat font-normal text-[16px] text-lightWhite",
  activeNavLink: "font-montserrat font-normal text-[16px] text-white",
};

export const layout = {
  section: `flex md:flex-row flex-col items-center   ${style.paddingY}`,
  sectionReverse: `flex md:flex-row items-center flex-col-reverse ${style.paddingY}`,
  sectionIfo: `flex-1 ${style.flexstart} flex-col`,
  sectionImg: `flex-1 flex ${style.flexcenter} md:ml-10 ml-0 relative `,
  sectionImgReverse: `flex-1 flex ${style.flexcenter} md:mr-10 mr-0 md:mt-0 mt-10 relative `,
};
