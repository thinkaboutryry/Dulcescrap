import svgPaths from "./svg-yud9xmfvyx";
import imgNavbar from "figma:asset/a9db1ffa88623b8aba0e2eca9480d9fc9b0fc9c0.png";
import imgImageTroqueladosNumeros09Dorados from "figma:asset/41930e1a10e0b756738dfaf3253185856538502a.png";
import imgImageTopperPersonalizadoCapybara from "figma:asset/982dbf05379c2a10ff3e8a3e393907a78646fe64.png";
import imgImageTopperPersonalizadoPrimavera from "figma:asset/d89335d6d7a34f078e3b1c55f52d78388522a299.png";
import imgImage7 from "figma:asset/b957c4ed90dbf9e5d552bdb5cab16552e0d12e7b.png";
import imgImageTopperPersonalizadoThundercats from "figma:asset/3a95f413563d9e62640de4e04e889e705502173b.png";
import imgImage8 from "figma:asset/e734f4154e16c2de33f1966b8e5ddac75c60a21f.png";

function Navbar1() {
  return (
    <div className="absolute left-0 size-[136px] top-0" data-name="Navbar">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgNavbar} />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute left-0 size-[136px] top-[24px]" data-name="Link">
      <Navbar1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[30.163px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1625 32">
        <g id="Icon">
          <path d={svgPaths.p1c983a00} id="Vector" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.51354" />
          <path d={svgPaths.p2f057e00} id="Vector_2" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.51354" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[28px] relative shrink-0 w-[757.838px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(236,38,143,0.7)]">Buscar...</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#efcbd4] h-[57px] relative rounded-[26843500px] shrink-0 w-[852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pl-[24px] relative size-full">
        <Icon />
        <TextInput />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 14">
            <path d={svgPaths.p20017a80} id="Vector" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path d={svgPaths.pf17cd80} id="Vector" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[42px] top-0" data-name="Link">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[42px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Icon">
          <path d={svgPaths.pb5d4000} id="Vector" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p15777980} id="Vector_2" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
          <path d={svgPaths.p4c09410} id="Vector_3" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}

function Navbar2() {
  return (
    <div className="absolute bg-[#ec268f] content-stretch flex items-center justify-center left-[26px] p-[1.6px] rounded-[26843500px] size-[20px] top-[-4px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border-[#f5f5f5] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[26843500px]" />
      <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-white">1</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute left-[66px] size-[42px] top-0" data-name="Link">
      <Icon2 />
      <Navbar2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[42px] relative shrink-0 w-[108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[57px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-[37.688px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.6px] tracking-[-0.48px]">Inicio</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-[59.3px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.6px] tracking-[-0.48px]">Toppers</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[89.8px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#ec268f] text-[16px] top-[-0.6px] tracking-[-0.48px]">Troquelados</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-[62.862px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.6px] tracking-[-0.48px]">Archivos</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-[79.088px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.6px] tracking-[-0.48px]">Mayoristas</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-[66.763px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.6px] tracking-[-0.48px]">Contacto</p>
      </div>
    </div>
  );
}

function Navbar3() {
  return (
    <div className="bg-[#ec268f] h-[40px] relative rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Navbar">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[24px] not-italic text-[16px] text-white top-[7.4px]">Ofertas</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[40px] relative shrink-0 w-[105.537px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Navbar3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[40px] relative shrink-0 w-[943px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[30px] items-center justify-center pr-[0.012px] relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[220px] items-start left-[136px] pl-[48px] pt-[63px] top-0 w-[1072px]" data-name="Container">
      <Container2 />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[220px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Container1 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col h-[220px] items-start px-[32px] relative shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[1272px]" data-name="Navbar">
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[72px] left-[236px] top-[124px] w-[800px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[36px] left-[400.39px] not-italic text-[24px] text-black text-center top-[-0.8px] w-[697px] whitespace-pre-wrap">Figuras troqueladas perfectas para decorar tus proyectos de scrapbooking y repostería</p>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#ec268f] h-[9px] left-0 rounded-[26843500px] top-[43px] w-[249.8px]" data-name="Text" />;
}

function SectionTitle() {
  return (
    <div className="absolute h-[60px] left-[511.1px] top-[48px] w-[249.8px]" data-name="SectionTitle">
      <p className="-translate-x-1/2 absolute font-['Nunito:Bold',sans-serif] font-bold leading-[60px] left-[125.5px] text-[48px] text-black text-center top-[-1.2px] tracking-[-2.4px]">Troquelados</p>
      <Text />
    </div>
  );
}

function ImageTroqueladosNumeros09Dorados() {
  return (
    <div className="absolute left-0 size-[284px] top-[0.2px]" data-name="Image (Troquelados Números 0-9 Dorados)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTroqueladosNumeros09Dorados} />
    </div>
  );
}

function ImageTopperPersonalizadoCapybara() {
  return (
    <div className="absolute left-0 overflow-clip size-[284px] top-0" data-name="Image (Topper Personalizado Capybara)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTopperPersonalizadoCapybara} />
      <ImageTroqueladosNumeros09Dorados />
    </div>
  );
}

function ToppersPage() {
  return (
    <div className="absolute bg-[#f0cad5] left-0 overflow-clip size-[284px] top-0" data-name="ToppersPage">
      <ImageTopperPersonalizadoCapybara />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="Link">
      <ToppersPage />
    </div>
  );
}

function ToppersPage1() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-[252px]" data-name="ToppersPage">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[30px] left-0 text-[20px] text-black top-[-1.2px] w-[201px] whitespace-pre-wrap">Flores troqueladas para el Carnaval</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.4px] w-[246px] whitespace-pre-wrap">Disfruta de este set de flores troqueladas de diferentes colores para disfrutar los carnavales.</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[92.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] w-[93px] whitespace-pre-wrap">$25.000</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2012_3716)" id="Icon">
          <path d={svgPaths.p32514c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2734ea00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24a52d80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2012_3716">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ec268f] relative rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Button />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[198px] items-start left-0 pt-[16px] px-[16px] top-[284px] w-[284px]" data-name="Container">
      <Link11 />
      <Paragraph1 />
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white h-[482px] left-[186px] overflow-clip rounded-[18px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[234.8px] w-[284px]" data-name="Container">
      <Link10 />
      <Container7 />
    </div>
  );
}

function ImageTopperPersonalizadoPrimavera() {
  return (
    <div className="absolute left-0 overflow-clip size-[284px] top-0" data-name="Image (Topper Personalizado Primavera)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTopperPersonalizadoPrimavera} />
      <div className="absolute h-[326px] left-[-9px] top-[-18.8px] w-[305px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}

function ToppersPage2() {
  return (
    <div className="absolute bg-[#f0cad5] left-0 overflow-clip size-[284px] top-0" data-name="ToppersPage">
      <ImageTopperPersonalizadoPrimavera />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="Link">
      <ToppersPage2 />
    </div>
  );
}

function ToppersPage3() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-[252px]" data-name="ToppersPage">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[30px] left-0 text-[20px] text-black top-[-1.2px] w-[201px] whitespace-pre-wrap">Flores troqueladas elegantes</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.4px] w-[250px] whitespace-pre-wrap">Set de flores pequeñas, medianas y grandes acompañadas de hojas troqueladas perfectas para celebraciones especiales.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[92.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] w-[93px] whitespace-pre-wrap">$25.000</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2012_3716)" id="Icon">
          <path d={svgPaths.p32514c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2734ea00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24a52d80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2012_3716">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ec268f] relative rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Button1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[198px] items-start left-0 pt-[16px] px-[16px] top-[284px] w-[284px]" data-name="Container">
      <Link13 />
      <Paragraph2 />
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white h-[482px] left-[494px] overflow-clip rounded-[18px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[234.8px] w-[284px]" data-name="Container">
      <Link12 />
      <Container10 />
    </div>
  );
}

function ImageTopperPersonalizadoThundercats() {
  return (
    <div className="absolute left-0 overflow-clip size-[284px] top-0" data-name="Image (Topper Personalizado Thundercats)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTopperPersonalizadoThundercats} />
      <div className="absolute h-[302px] left-[-20px] top-[0.2px] w-[323px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function ToppersPage4() {
  return (
    <div className="absolute bg-[#f0cad5] left-0 overflow-clip size-[284px] top-0" data-name="ToppersPage">
      <ImageTopperPersonalizadoThundercats />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="Link">
      <ToppersPage4 />
    </div>
  );
}

function ToppersPage5() {
  return (
    <div className="absolute h-[60px] left-0 overflow-clip top-0 w-[252px]" data-name="ToppersPage">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[30px] left-0 text-[20px] text-black top-[-1.2px] w-[201px] whitespace-pre-wrap">Set de mariposas troqueladas</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage5 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.4px] w-[243px] whitespace-pre-wrap">Te ofrecemos este set de mariposas troqueladas perfectas para decorar tus postres y tortas.</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[92.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] w-[93px] whitespace-pre-wrap">$15.000</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2012_3716)" id="Icon">
          <path d={svgPaths.p32514c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2734ea00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p24a52d80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2012_3716">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ec268f] relative rounded-[26843500px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Button2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[198px] items-start left-0 pt-[16px] px-[16px] top-[284px] w-[284px]" data-name="Container">
      <Link15 />
      <Paragraph3 />
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-white h-[482px] left-[802px] overflow-clip rounded-[18px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[234.8px] w-[284px]" data-name="Container">
      <Link14 />
      <Container13 />
    </div>
  );
}

function TroqueladosPage() {
  return (
    <div className="h-[765px] relative shrink-0 w-full" data-name="TroqueladosPage">
      <Paragraph />
      <SectionTitle />
      <Container6 />
      <Container9 />
      <Container12 />
    </div>
  );
}

function ImageDulceScrapLogo() {
  return (
    <div className="relative shrink-0 size-[93px]" data-name="Image (Dulce Scrap Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavbar} />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[106.95px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] tracking-[-0.72px]">¡Siguenos!</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[39px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 32.5">
          <path d={svgPaths.p36aefe00} fill="var(--fill-0, #DD8BA0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[39px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3376 32.5001">
          <path d={svgPaths.p2a7f0a00} fill="var(--fill-0, #DD8BA0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="flex-[1_0_0] h-[39px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[38px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[10%_15.83%_10.83%_15.83%]" data-name="Vector">
        <div className="absolute inset-[-3.32%_-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9682 32.0828">
            <path d={svgPaths.p2e17f280} id="Vector" stroke="var(--stroke-0, #DD8BA0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[39px] relative shrink-0 w-[148px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Link16 />
        <Link17 />
        <Link18 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[16px] h-[320.8px] items-start relative row-[1] shrink-0" data-name="Container">
      <ImageDulceScrapLogo />
      <Heading />
      <Container17 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] tracking-[-0.72px]">Dulce Scrap</p>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[37.688px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Inicio</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link19 />
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[79.088px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Mayoristas</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link20 />
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[92.65px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Contáctanos</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link21 />
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[110.088px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Sobre nosotros</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link22 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[147.2px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[24px] h-[320.8px] items-start relative row-[1] shrink-0" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] tracking-[-0.72px]">Catálogo</p>
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[59.3px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Toppers</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link23 />
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[89.8px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Troquelados</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link24 />
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[62.862px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Archivos</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link25 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[106.4px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="col-[3] content-stretch flex flex-col gap-[24px] h-[320.8px] items-start relative row-[1] shrink-0" data-name="Container">
      <Heading2 />
      <List1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] tracking-[-0.72px]">Políticas</p>
    </div>
  );
}

function Link26() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[164.563px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Políticas de devolución</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link26 />
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[133.088px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Políticas de envíos</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link27 />
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[161.387px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Políticas de privacidad</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link28 />
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[142.375px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Políticas de servicio</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link29 />
    </div>
  );
}

function Link30() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[3.2px] w-[170.063px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">Términos y condiciones</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24.8px] relative shrink-0 w-full" data-name="List Item">
      <Link30 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[188px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function Container20() {
  return (
    <div className="col-[4] content-stretch flex flex-col gap-[24px] h-[320.8px] items-start relative row-[1] shrink-0" data-name="Container">
      <Heading3 />
      <List2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[72px] left-0 top-0 w-[216px]" data-name="Heading 3">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] tracking-[-0.72px] w-[137px] whitespace-pre-wrap">¿Deseas más información?</p>
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[99.2px] w-[190.325px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.48px]">dulcescrapcol@gmail.com</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[72px] left-0 top-[152.8px] w-[216px]" data-name="Heading 3">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] tracking-[-0.72px] w-[122px] whitespace-pre-wrap">Horarios de atención</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[72px] left-0 top-[248.8px] w-[216px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.6px] tracking-[-0.48px] w-[209px] whitespace-pre-wrap">Lunes a Viernes de 9 a.m. - 6 p.m. Sábados de 10 a.m. 2 p.m. Domingos cerrado</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-[5] h-[320.8px] relative row-[1] shrink-0" data-name="Container">
      <Heading4 />
      <Link31 />
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(5,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[320.8px] left-[32px] top-[48px] w-[1208px]" data-name="Container">
      <Container16 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Link32() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-start left-[464.16px] top-[2.4px] w-[120.863px]" data-name="Link">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[30px] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[-0.6px]">Ryder Barrios</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[30px] relative shrink-0 w-[585.025px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[30px] left-[232px] not-italic text-[20px] text-center text-white top-[-0.6px] tracking-[-0.6px]">© Derechos reservados Dulce Scrap. Realizada por</p>
        <Link32 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#df8098] content-stretch flex h-[57px] items-center justify-center left-0 top-[416.8px] w-[1272px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white h-[473.8px] relative shrink-0 w-full" data-name="Footer">
      <Container15 />
      <Container22 />
    </div>
  );
}

function Root() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[1973.8px] items-start left-0 top-0 w-[1272px]" data-name="Root">
      <Navbar />
      <TroqueladosPage />
      <Footer />
    </div>
  );
}

export default function KaslCommunity() {
  return (
    <div className="bg-white relative size-full" data-name="kasl (Community)">
      <Root />
    </div>
  );
}