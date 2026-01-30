function Frame() {
  return (
    <div className="absolute bg-white h-[719px] left-0 overflow-clip rounded-[24px] top-[6px] w-[1437px]">
      <p className="-translate-x-1/2 absolute font-['Nunito:Bold',sans-serif] font-bold leading-[62px] left-[717.5px] text-[48px] text-black text-center top-[211px] tracking-[-2.4px] w-[755px] whitespace-pre-wrap">¿Quieres ser mayorista?</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[68px] justify-center leading-[1.5] left-[718.5px] not-italic text-[24px] text-black text-center top-[335px] tracking-[-0.72px] w-[1057px] whitespace-pre-wrap">
        <p className="mb-0">En Dulce Scrap ofrecemos ventas al por mayor para distribuidores y emprendedores,</p>
        <p>¡Benefíciate de descuentos y atención exclusiva para compras grandes!</p>
      </div>
      <div className="absolute border-3 border-[#ec268f] border-solid h-[57px] left-[637px] rounded-[30px] top-[401px] w-[184px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] left-[664px] text-[#ec268f] text-[24px] top-[429px] tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[1.5]">Contáctanos</p>
      </div>
      <div className="absolute bg-[#ec268f] h-[9px] left-[735px] rounded-[94px] top-[273px] w-[214px]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
      <div className="absolute bg-[#f0cad5] inset-[0_7.01%_73.52%_75.97%] rounded-[24px]" data-name="Light - Item (alternative)" />
      <div className="absolute bg-[#fedde4] inset-[0.83%_71.11%_79.86%_0] rounded-[24px]" data-name="Light - Big Horizontal image 2" />
      <div className="absolute bg-[#f0cad5] inset-[71.31%_82.92%_0.14%_0] rounded-[24px]" data-name="Light - Item (alternative)" />
      <div className="absolute bg-[#fedde4] inset-[80.28%_65.97%_0_10%] rounded-[24px]" data-name="Light - Big Horizontal image 1" />
      <div className="absolute bg-[#f0cad5] inset-[82.62%_11.25%_0_70.9%] rounded-[24px]" data-name="Light - Item (alternative)" />
      <div className="absolute bg-[#fedde4] inset-[72.14%_0_12.69%_93.19%] rounded-[24px]" data-name="Light - Item image 1" />
    </div>
  );
}