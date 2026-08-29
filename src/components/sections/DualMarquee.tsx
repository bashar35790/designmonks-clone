"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";

const ROW_1_LOGOS = [
  { src: "/images/trustedbrands/6885f10530ade15b8f215893_Logo_onethread_mono.svg", name: "OneThread" },
  { src: "/images/trustedbrands/6885f12d87ea8f930b98389b_Logo_rabfy_mono.svg", name: "Rabfy" },
  { src: "/images/trustedbrands/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg", name: "Ontik Technology" },
  { src: "/images/trustedbrands/6885f14fe135439678c205c4_Logo_ostad_mono.svg", name: "Ostad" },
  { src: "/images/trustedbrands/6885f15d6e8226dcdd42841f_Logo_oter_mono.svg", name: "Oter" },
  { src: "/images/trustedbrands/6885f18ddddd13f9898fa4a1_Logo_Sift_mono.svg", name: "Sift" },
  { src: "/images/trustedbrands/6885f19c8b03c8659ce41c98_Logo_skillophy_mono.svg", name: "Skillophy" },
  { src: "/images/trustedbrands/6885f0d458e5a5df0fbf1790_Logo_likely_mono.svg", name: "Likely" },
  { src: "/images/trustedbrands/6885f0e8feb06d3d996d79c3_Logo_Memorybox_mono.svg", name: "Memorybox" },
  { src: "/images/trustedbrands/6885ee08f5f493b2bb9e7f1e_Logo_medease_mono.svg", name: "Medease" },
  { src: "/images/trustedbrands/6885ee4528e1e50ce73cec96_Logo_3asafeer_mono.svg", name: "3asafeer" },
  { src: "/images/trustedbrands/6885ee8c69e8f4233a577999_Logo_akijship_mono.svg", name: "Akij Shipping" },
  { src: "/images/trustedbrands/6885ee9e7ebe3a3c0e3a331c_Logo_akij_mono.svg", name: "Akij Group" },
  { src: "/images/trustedbrands/6885eeb809370b706fb8e60d_Logo_alpine_mono.svg", name: "Alpine" },
  { src: "/images/trustedbrands/6885eee107ee412b3af204cf_Logo_Bizphix_mono.svg", name: "Bizphix" },
];

const ROW_2_LOGOS = [
  { src: "/images/trustedbrands/6885ef82c4a168e60b47911d_Logo_CRE Guard_mono.svg", name: "CRE Guard" },
  { src: "/images/trustedbrands/6885ef283a1bcb89be6747e7_Logo_compaies_mono.svg", name: "Klasio" },
  { src: "/images/trustedbrands/6885f17caf72390465b4e033_Logo_PF_mono.svg", name: "Affine" },
  { src: "/images/trustedbrands/6885f06558e5a5df0fbefdde_Logo_khanit_mono.svg", name: "Telenor" },
  { src: "/images/trustedbrands/6885f091d389d8df99129c17_Logo_leklub_mono.svg", name: "Axiata" },
  { src: "/images/trustedbrands/6885f0a19297eaa439b36a54_Logo_lendiview_mono.svg", name: "Guardian" },
  { src: "/images/trustedbrands/6885ef3df74b709059457346_Logo_cpg_mono.svg", name: "Crantech" },
  { src: "/images/trustedbrands/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg", name: "Dlicio" },
  { src: "/images/trustedbrands/6885efa747ec9f1d1564f668_Logo_docuseal_mono.svg", name: "Docuseal" },
  { src: "/images/trustedbrands/6885efb8de6485b41ef30512_Logo_edvive_mono.svg", name: "Edvive" },
  { src: "/images/trustedbrands/6885efcf7840077b72111115_Logo_farasha_mono.svg", name: "Farasha" },
  { src: "/images/trustedbrands/6885efde40d2b35d3d22dea0_Logo_fitmate_mono.svg", name: "Fitmate" },
  { src: "/images/trustedbrands/6885effb87ea8f930b980cad_Logo_Gainsty_mono.svg", name: "Gainsty" },
  { src: "/images/trustedbrands/6885f01211f8986a34f542d8_Logo_grow_mono.svg", name: "Grow" },
  { src: "/images/trustedbrands/6885f045523f0b94ba432e42_Logo_heyluna_mono.svg", name: "Heyluna" },
];

const ROW_3_LOGOS = [
  { src: "/images/trustedbrands/6885f1d2a43bb3fbe72ee40c_Logo_viber_mono.svg", name: "Rakuten Viber" },
  { src: "/images/trustedbrands/688653afacecba76738e739f_Logo_Homerun_mono.svg", name: "Homerun" },
  { src: "/images/trustedbrands/688653bf4f47ca91cf09762b_Logo_Sitewise_mono.svg", name: "SiteWise" },
  { src: "/images/trustedbrands/6a8412eab002f467b8ae3609_Logo_Tatlist_ mono.svg", name: "TATLIST" },
  { src: "/images/trustedbrands/6a2a85c1739fe7aab067997f_Logo_Externalit_ mono.svg", name: "Externalize it" },
  { src: "/images/trustedbrands/69e8da7044354a424b483801_Logo_Salesgo_ mono.svg", name: "SalesGo" },
  { src: "/images/trustedbrands/6885f16d40ff0915c93957cd_Logo_pepsi_mono.svg", name: "Pepsi" },
  { src: "/images/trustedbrands/6a2a85e71b1908e75d278368_Logo_Goodgenes_ mono.svg", name: "GoodGenes" },
  { src: "/images/trustedbrands/6885f1b6efcab4b193f09f5c_Logo_tempo_mono.svg", name: "Tempo" },
  { src: "/images/trustedbrands/6885f1c594a1ec8ca506cd37_Logo_triply_mono.svg", name: "Triply" },
  { src: "/images/trustedbrands/6885f1e4306e3894a1466064_Logo_ways_mono.svg", name: "Ways" },
  { src: "/images/trustedbrands/6885f1f680fdbf02fa0eae57_Logo_Y Combinator_mono.svg", name: "Y Combinator" },
  { src: "/images/trustedbrands/6885f2004933c2b4d513d932_Logo_yenex_mono.svg", name: "Yenex" },
  { src: "/images/trustedbrands/6886538a81d84aaf47e5386d_Logo_Addisoft_mono.svg", name: "Addisoft" },
  { src: "/images/trustedbrands/6886539e25b283ac0614549d_Logo_Banglashikhi_mono.svg", name: "Banglashikhi" },
];

const ROW_4_LOGOS = [
  { src: "/images/trustedbrands/6885eee107ee412b3af204cf_Logo_Bizphix_mono.svg", name: "BizPhix" },
  { src: "/images/trustedbrands/6885eeb809370b706fb8e60d_Logo_alpine_mono.svg", name: "Alpine Empower" },
  { src: "/images/trustedbrands/6885ee9e7ebe3a3c0e3a331c_Logo_akij_mono.svg", name: "Akij Cement" },
  { src: "/images/trustedbrands/6885ee8c69e8f4233a577999_Logo_akijship_mono.svg", name: "Akij Shipping" },
  { src: "/images/trustedbrands/6885ee4528e1e50ce73cec96_Logo_3asafeer_mono.svg", name: "3asafeer" },
  { src: "/images/trustedbrands/6885ee08f5f493b2bb9e7f1e_Logo_medease_mono.svg", name: "Medease" },
  { src: "/images/trustedbrands/68a091859ea0add1f56a3a99_Logo_zantrik_mono.svg", name: "Zantrik" },
  { src: "/images/trustedbrands/68a091c01ddc2dc9b5c6004d_Logo_Backpack_mono.svg", name: "Backpack" },
  { src: "/images/trustedbrands/68a091feeaa832d6e633b930_Logo_Goldman Sachs_mono.svg", name: "Goldman Sachs" },
  { src: "/images/trustedbrands/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg", name: "Clarity" },
  { src: "/images/trustedbrands/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg", name: "Esdiac" },
  { src: "/images/trustedbrands/68dcdff13a553e58f8303e64_Logo_Learndojo_mono.svg", name: "Learndojo" },
  { src: "/images/trustedbrands/68dce04f1cc66d075bc201c7_Logo_Vocai_mono.svg", name: "Vocai" },
  { src: "/images/trustedbrands/68dce06d6d2fe778ba755c28_Logo_Plentypay_mono.svg", name: "Plentypay" },
  { src: "/images/trustedbrands/68deba780a85b7d26245ce16_Logo_Aike_mono.svg", name: "Aike" },
];

export function DualMarquee() {
  const renderLogo = (item: { src: string; name: string }, idx: number) => (
    <div
      key={idx}
      className="flex items-center justify-center px-5 sm:px-7 flex-shrink-0"
    >
      <div className="relative h-6 sm:h-7 md:h-8 w-24 sm:w-28 md:w-32 flex items-center justify-center">
        <Image
          src={item.src}
          alt={item.name}
          fill
          className="object-contain filter brightness-0 opacity-40 hover:opacity-100 transition-all duration-300"
        />
      </div>
    </div>
  );

  return (
    <section className="relative -mt-10 sm:-mt-16 pt-16 pb-20 bg-white text-zinc-900 rounded-t-2xl sm:rounded-t-[50px] md:rounded-t-[65px] shadow-[0_-20px_50px_rgba(0,0,0,0.06)] border-t border-zinc-100 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10 sm:mb-12">
        <h3 className="font-title text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-800 tracking-tight">
          Trusted by 200+ of the world&apos;s top brands
        </h3>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <Marquee direction="left" duration="80s" pauseOnHover={false} repeat={2}>
          {ROW_1_LOGOS.map(renderLogo)}
        </Marquee>

        <Marquee direction="right" duration="80s" pauseOnHover={false} repeat={2}>
          {ROW_2_LOGOS.map(renderLogo)}
        </Marquee>

        <Marquee direction="left" duration="80s" pauseOnHover={false} repeat={2}>
          {ROW_3_LOGOS.map(renderLogo)}
        </Marquee>

        <Marquee direction="right" duration="80s" pauseOnHover={false} repeat={2}>
          {ROW_4_LOGOS.map(renderLogo)}
        </Marquee>
      </div>
    </section>
  );
}
