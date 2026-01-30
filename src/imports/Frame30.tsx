import svgPaths from "./svg-us8ywgl3nh";
import imgImageTopperPersonalizadoCapybara from "figma:asset/982dbf05379c2a10ff3e8a3e393907a78646fe64.png";
import imgImageTopperPersonalizadoPrimavera from "figma:asset/d89335d6d7a34f078e3b1c55f52d78388522a299.png";
import imgImageTopperPersonalizadoThundercats from "figma:asset/3a95f413563d9e62640de4e04e889e705502173b.png";

function ImageTopperPersonalizadoCapybara() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="Image (Topper Personalizado Capybara)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTopperPersonalizadoCapybara} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#ec268f] h-[29px] left-[176.44px] rounded-[26843500px] top-[16px] w-[91.563px]" data-name="Container">
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[21px] left-[12px] text-[14px] text-white top-[3.8px]">Destacado</p>
    </div>
  );
}

function ToppersPage() {
  return (
    <div className="absolute bg-[#f0cad5] left-0 overflow-clip size-[284px] top-0" data-name="ToppersPage">
      <ImageTopperPersonalizadoCapybara />
      <Container1 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[284px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage />
    </div>
  );
}

function ToppersPage1() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[252px]" data-name="ToppersPage">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[30px] left-0 text-[20px] text-black top-[-1.2px] w-[201px] whitespace-pre-wrap">Topper Personalizado Capybara</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.4px] w-[246px] whitespace-pre-wrap">Divertido topper personalizado con temática de Capybara. Incluye nombre y edad del cumpleañero. Ideal para fiestas temáticas y amantes de los animales. Materiales de alta calidad y acabado impecable.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[36px] relative shrink-0 w-[92.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] w-[93px] whitespace-pre-wrap">$45.000</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[83.33%_62.5%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-3/4 right-[16.67%] top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.54%_7.96%_33.12%_8.54%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-4.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3667 13.3337">
            <path d={svgPaths.p48b0ac0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ec268f] relative rounded-[26843500px] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[198px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Link1 />
        <Paragraph />
        <Container3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[482px] items-start left-0 overflow-clip rounded-[18px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[284px]" data-name="Container">
      <Link />
      <Container2 />
    </div>
  );
}

function ImageTopperPersonalizadoPrimavera() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="Image (Topper Personalizado Primavera)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTopperPersonalizadoPrimavera} />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#ec268f] h-[29px] left-[176.44px] rounded-[26843500px] top-[16px] w-[91.563px]" data-name="Container">
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[21px] left-[12px] text-[14px] text-white top-[3.8px]">Destacado</p>
    </div>
  );
}

function ToppersPage2() {
  return (
    <div className="absolute bg-[#f0cad5] left-0 overflow-clip size-[284px] top-0" data-name="ToppersPage">
      <ImageTopperPersonalizadoPrimavera />
      <Container5 />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[284px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage2 />
    </div>
  );
}

function ToppersPage3() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[252px]" data-name="ToppersPage">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[30px] left-0 text-[20px] text-black top-[-1.2px] w-[201px] whitespace-pre-wrap">Topper Personalizado Primavera</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.4px] w-[250px] whitespace-pre-wrap">Topper delicado con diseño primaveral. Perfecto para celebraciones al aire libre o temáticas florales. Personalízalo con el nombre que desees. Colores vivos y duraderos.</p>
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

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[83.33%_62.5%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-3/4 right-[16.67%] top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.54%_7.96%_33.12%_8.54%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-4.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3667 13.3337">
            <path d={svgPaths.p48b0ac0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ec268f] relative rounded-[26843500px] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Button1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[198px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Link3 />
        <Paragraph1 />
        <Container7 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[482px] items-start left-[308px] overflow-clip rounded-[18px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[284px]" data-name="Container">
      <Link2 />
      <Container6 />
    </div>
  );
}

function ImageTopperPersonalizadoThundercats() {
  return (
    <div className="absolute left-0 size-[284px] top-0" data-name="Image (Topper Personalizado Thundercats)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTopperPersonalizadoThundercats} />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#ec268f] h-[29px] left-[176.44px] rounded-[26843500px] top-[16px] w-[91.563px]" data-name="Container">
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[21px] left-[12px] text-[14px] text-white top-[3.8px]">Destacado</p>
    </div>
  );
}

function ToppersPage4() {
  return (
    <div className="absolute bg-[#f0cad5] left-0 overflow-clip size-[284px] top-0" data-name="ToppersPage">
      <ImageTopperPersonalizadoThundercats />
      <Container9 />
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[284px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage4 />
    </div>
  );
}

function ToppersPage5() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[252px]" data-name="ToppersPage">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[30px] left-0 text-[20px] text-black top-[-1.2px] w-[201px] whitespace-pre-wrap">Topper Personalizado Thundercats</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Link">
      <ToppersPage5 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.4px] w-[243px] whitespace-pre-wrap">¡Thundercats, oooooh! Topper lleno de acción para los fans de esta serie clásica. Personalizado con nombre y edad. Detalles en capas para efecto 3D.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[92.363px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#ec268f] text-[24px] top-[-0.4px] w-[93px] whitespace-pre-wrap">$35.000</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[83.33%_62.5%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-3/4 right-[16.67%] top-[83.33%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.54%_7.96%_33.12%_8.54%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-4.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3667 13.3337">
            <path d={svgPaths.p48b0ac0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ec268f] relative rounded-[26843500px] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Button2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[198px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[16px] px-[16px] relative size-full">
        <Link5 />
        <Paragraph2 />
        <Container11 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[482px] items-start left-[616px] overflow-clip rounded-[18px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[284px]" data-name="Container">
      <Link4 />
      <Container10 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Container />
      <Container4 />
      <Container8 />
    </div>
  );
}