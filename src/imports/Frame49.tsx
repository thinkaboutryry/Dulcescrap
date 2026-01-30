import svgPaths from "./svg-tm39ne7kmt";

function Frame() {
  return (
    <div className="absolute h-[64.5px] left-[182px] top-0 w-[80.625px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.6251 64.5">
        <g id="Frame 43">
          <path d={svgPaths.p30c6ea00} fill="var(--fill-0, #EC268F)" id="Vector" />
          <path d={svgPaths.p1871df0} fill="var(--fill-0, #EC268F)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_12.5%]" data-name="Group">
      <div className="absolute inset-[-6.25%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.6923 51.9231">
          <g id="Group">
            <path d={svgPaths.p29d57b80} id="Vector" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeWidth="5.76923" />
            <path d={svgPaths.p5f53a00} id="Vector_2" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeWidth="5.76923" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LetsIconsUserScan() {
  return (
    <div className="absolute left-[90.81px] overflow-clip size-[69.231px] top-[0.77px]" data-name="lets-icons:user-scan">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_12.49%_12.49%_12.49%]" data-name="Group">
      <div className="absolute inset-[-5.55%_-5.56%_-5.55%_-5.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.7006 57.699">
          <g id="Group">
            <path d={svgPaths.p18812500} id="Vector" stroke="var(--stroke-0, #EC268F)" strokeWidth="5.76923" />
            <path d={svgPaths.p1962b300} id="Vector_2" stroke="var(--stroke-0, #EC268F)" strokeLinejoin="round" strokeWidth="8.65385" />
            <path d={svgPaths.p356a1d00} id="Vector_3" stroke="var(--stroke-0, #EC268F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.76923" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconamoonDiscount() {
  return (
    <div className="absolute left-0 overflow-clip size-[69.231px] top-0" data-name="iconamoon:discount">
      <Group1 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
      <LetsIconsUserScan />
      <IconamoonDiscount />
    </div>
  );
}