export const site = {
  name: "VIP Setup",
  brand: "VIP FOOD SETUP",
  tagline: "Big Flavor. Bigger Cravings.",
  owner: "Mustafa Hanif",
  email: "orders@vipsetup.pk",
  phone: "03111234567",
  phoneIntl: "+92 311 123 4567",
  whatsapp: "923111234567",
  address: "Main Bahadurabad Road, Bahadurabad",
  city: "Karachi, Pakistan",
  area: "Bahadurabad, Karachi",
  hours: "Open Daily 24/7",
  mapsQuery: "Bahadurabad, Karachi",
  metaTitle: "VIP Setup | Big Flavor. Bigger Cravings.",
  metaDescription:
    "Freshly grilled burgers, crispy fried chicken, BBQ favorites, wraps, sandwiches, and loaded meals in Bahadurabad, Karachi. Owned by Mustafa Hanif. Order online today.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Deals", href: "/deals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const PAYMENT_METHODS = [
  { id: "cod", label: "Cash on Delivery", icon: "payments" },
  { id: "jazzcash", label: "JazzCash", icon: "smartphone" },
  { id: "easypaisa", label: "EasyPaisa", icon: "account_balance_wallet" },
] as const;

export const DELIVERY_FEE = 150;
export const FREE_DELIVERY_THRESHOLD = 1500;

export function parsePrice(price: string): number {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export function formatPKR(value: number): string {
  return `Rs. ${Math.round(value).toLocaleString("en-PK")}`;
}

export const IMAGES = {
  burger:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCATwlsCCyz61C40MIt_6Gl1ANAJjuOjfGFeZa8KOHVV_c76OaLeCh_WKGW_x_iQ8iwJKIaC_ZmbuEWbi3VF67_b-RNdqDEVSy4h8NGZPGJ4njttjuBJJn7W-1hLXgE1rqg0KlKck6GiJHO5E9-YLMuqkJYYx2rkGojUOSCy1qP0M4feoFBE2PV0NXocsSIcIhSF2F8Gtqd8CXbMY1MuXtZ2A5lhP2p2CFekqnuHZMom89UCWDkXlw",
  friedChicken:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBsxheimU8Bu656Pe3OaoqjkpXnEE446xz54-ofEsdcwSkqHFzJpI4U0fiolLQ3QVFs1IKWFO6sh0QW7AgwGSiyaX95EwmW1R1ml6xYlwAAzfKaCTBuDnZZom1XT3urWyo1yQegth1WZcZ1rtuK-voWzPYcTf5IvZYw_cF6ONVMJSdedNOXYG_ZrgGYZ_QrdqkOi_oVqc9mhghhnFkBSuZmQZuU3o9FovUROcNbLuldLzGsYTIdlCU",
  bbq: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKZvdSHXb4hhvgJUFAx_GGkSu4IG_2bjW023Qs6_uxCWpvtYd2ud9KrDnPhQjWkDKdbW2CT_F-m1KYppMQ0hR3kYhMuxtoE8SBPGkXgBt12yZm-kBz7eq0mlIxGgvpB80f8Xx0NFRBeDK8KObyLy_hxnB_Y4jx2SQxT6pp3qmLPLtkgEBAjxjZmdSkfh03A9tsrg0T79zjfL-9HlreuaSPX-jihNZvbRkvWkQgpIjEO5rWwEPyss",
  wraps:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAN604dFWcNnl4JN7cDwhWZdtCuUUeQA-mB8xM-u-F1_tT1BjBL1WK5KaOJTatFv4_iu_2ONIHHGuM1GLMgMHIxBubXvLKtofqWdkZoSCylAHVdo8_X0Zwyxav7AlG5gDC5geSOtz-MHByrof-9WP_XleVDh2m-LY29XYFM1sDr1VU-4UUi-ZuCVK8gv9ckcMrbqrE2bkyI_bzI9bmdTKV-3JPSsRbXzBqEMd40T1AkZjFt4v-tk2M",
  sandwich:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5c8DwaTyH0hc0bOoWryN5G49V34fHVa9OgbeldICEWk8cUranozUcUvIyIaZfKwwfw9N4Z96Q-A0Bfn7xmKM4a0V7MmZHiOD_qlxnjZ_Pw76Lb1jhIVwkmdxLLyJdi4q94B-PofzTvcxwaqkI788oCe_L2g-7nTcZkRCeDq4IT-bjfCLMDYIHAoGQ5IY7WO7CQ15fq2r7iY8v7Fq9QrSOGeOr7sLAAebp82qBqBqrwvHCSuQl8tI",
  loadedFries:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgnyAvp8uzfqiD4WzXPLOUk5xFz0X2IlC2z055Gdnl_zwosEE9kmeJseF0JsExWt58cU9lw3QJylmkvXcEquhosEeOt1fTFMpuqRnevwCQ28etIeqQ9qPNhrJqcBXU0xfDJZCuKswNzEbbooTjewnUaRFrPqswMmfKe8ZSnxToEffS4X1aKm-7CaYzBCzpbBc9H2yFvLvbDf0zXCSNsxlkiOtwIPWY1sT6oLLe3qCQ46-7VRkxwUY",
  familyDeals:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCFOkzXCXP_k25Jbm-FhGP5pOZugrvHSu192Epn4b8h1AUk6AN5Eb3xqcP4Ojx99hsYJtGQhKHpBAAuBoneX4jJ0MkaFlxKkN5mqBPmXJt0I8ldq7WwuiXglNNe0L3-EikmdA4TITJkSAsmq5Yn0O8-meVZKzOBqBIDgPYWckswY8_P6o3RQ3hkBDE81lb4LQByr3SlUoawytiA4i8OwAcH-uIMZd_HwzCxJdxTbb62AZobVPTvb0c",
  kidsMeals:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBO0G_383KWlFCEqhXow4xXb19tpTe4B9chcpySWNAmxo7xAVYaHie91QyPjgAVhXuLAMnnp08hgNmBmHSzmlg17EAguZ0Cbo3RouxvcD9ET6B0yvHCmgJBu6VcGn4VWE7JgspWhMOfA9TSVMLtdjncYK-H08TXAFxRVtELaH1lJfRtuUX5wvzYs2b63w0qsInLo_qPN1nodgBzaYhUHGfc9yXMrZzEmffOhbk05Sd39-t-oNjbuN8",
  drinks:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCvY7-UDIAJ3OG3iuDWNEu2aSKDwy-tDje8H23aVRW3bNPWBgTI60u7m7EPORwBkVI9I6i_72XqG5KJHUaWmm-4nuN0TXRgphb6o69hoPq9EE16swFCUHD65N67O-Prgxhw9e7Fh6LqV4XI2DAeyD3mM8KX2sHJp4eoGcJwb8B1WY9M1f0XLcKydrhVHnk6vwAqnp9tYXDTnY3gqvK-TBrJ2iOfArBUAHkr86JEX_wL8ZCfJKffr8o",
  dessert:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBmqGvxHQ3rh8z5y_ZTnO16dqpWqL7_E6uX8E88hojYdcORhudDiErLBtbgatnrVoPT-t8DPk7Hd2om7g9l9rst78bJ_ZR5tP75xzBu1_3Rs96HURVEBWw9hKYHjyv9cKi8eJZ_VMIIzHcj5W03Wb7rD0R_dTGIuv8JBnL7FGlMKD2ku3c_o8qE53H3vAmpoOp0m6_qSNpuemcZJt7F9MW0y-q8ykrgnuVyTl_IxggqU2ACMILnMaw",
  signatureBurger:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4XZfE7Fux3boO3MVm6LySJNYUWXy2AxPcgQZtiMOr4_YDoLh78Nh2tarflaFz_E6ILpiepIi09LpQ0GRIgGiD-1guuicykjPVHdAlHII9-ws7_yJs6nqQW_2U-ujRVX8SuQy0LKjnxiy_V99MqjkMxZPr6s9DNKlXjRN_NSYvo-BF4pKiKv11vpgSfNtCaXxeUUcTSIrgNZ21GcCP5DwfHSqgfFmxh2nWOp0FAVLncOls_OpIT8A",
  zinger:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDUTOzPAYyJRegihtqtYGU71yT-jDsJegRpj5-fxYMZKlDPNaQf5MILx8RRYSA8xrAw4w0qCVdi9HB_aeRJ2cnSwJLRRjJJEjFwqGv_f4empHBK5xxsi55TZWlwLElQvAxic8VSUSFY-Evnd2wyXv5ku_evzstE-tIImro5N0Px5wvNsjTr-v5WbuhBk7Ner7FWGRgIjX_ipliYGL4YRDf4-aDcIhduXy4GBvxIKScHCCQNU_G3E3I",
  loadedFriesDeluxe:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBJQf0sNcardJ7q6dzBFLC5hMUSlpSVYE2n6Zc2EyG7hNCdbdvirbXPZy7GJh5__ZBp-HADM5BnrCOAJQj07e8dUR13UdOYR5xAH8FMI9rdQJrQfdsuY79JNbfHJi7MhhwX9vI-q1Xm_jccMPiP_i6xuNE2kG09f-bcwGBDLGVWCHkw_Vp8NAwrFJoz1NgD1Hkp-DpjtGPB79zA0es0rsmKjHD4F1nwjtv7Cm3fMLCzbmheTF0V_zk",
  chef:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3c1EMzLqekJxukctub8KNszHKL-nsczGV6Jqdj3CPnpA0sUg6JK_tdaeAh1ser3X4zvKIULVwjwQwZEtp9XYaQayBjSuOB9n50cuBmBD6IsEFZGG7rR1BwZT_mo6jcTgUO8-ANb9qtNU3bhMkss843ElqdtENaYqfmU8Mky9_5o0dlTNSK8xZTMLDlGyPrxAQ1eZWl6iFIJQdU_8PmBmbMrWwPhPeJVMTFGWQyK5f0CjXcp4DMu4",
  lifestyle1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCHps1oEmF9qL5rvCNTYvDZ_vvVDs2jKxyJRoKqWbV5QCVTB230TdRHzqooL0XE3d7e8o58ic7ItRl5VQDXTuURZCc_L9WHYHX1bw5_b_AA0I04XjfguutcIRXDF5bKc4wWuDnXZIZac7rmToNQqkDfGdp9kLAwbW0Hy9gq2ZbbnQrKS23jSQVOl8jZVls8Lu6nNhBUo2nXtmM_VGT263wPPbE0m5b_L0asRwEmDARMK2oXKCc04jo",
  lifestyle2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Z3K2qiPibckQOZ5wvIgFXFB0gNaO6BlXIfSrz6IALIxALojamGH-3hnRxebTalv3TDdTqDAEuVcgVOMmThQ26L6pBEOdzXSeLQ68MAbghxOmvCDQBj8d4GbQDmVDdPrLVQp0PkmMbZ52EY5YA8CCnzDkW7Wcy2baOsRzyL74Umc8MxJGyuoitFxmUyKIsgPRZ2t8SvjgwzZBTpOevGEy7lr9zdUUuQ880zrf2w8vyYWh24vWFr4",
  milkshake:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBmqGvxHQ3rh8z5y_ZTnO16dqpWqL7_E6uX8E88hojYdcORhudDiErLBtbgatnrVoPT-t8DPk7Hd2om7g9l9rst78bJ_ZR5tP75xzBu1_3Rs96HURVEBWw9hKYHjyv9cKi8eJZ_VMIIzHcj5W03Wb7rD0R_dTGIuv8JBnL7FGlMKD2ku3c_o8qE53H3vAmpoOp0m6_qSNpuemcZJt7F9MW0y-q8ykrgnuVyTl_IxggqU2ACMILnMaw",
  delivery:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDjFYLnGRlb2owThyTxCPoq90JmyJvouG629z6Ydw0dHPy77Mp2aRxWodP74I3RsWKNMho1GXroypt6mCmr9Wzz6h67KwHB7idz8y_8ZHll2z4iQHFQJrqQNTA_T7y2GQKheAjGbxiNSssGUUA0481K-qJcf6Q6ChRtk5xhf4jYydnC0Ta0UWDCIEPZcQQTmoCgh8UgY5gexMxmNpYxbDmQe7eGCyyjjsTxadRLphdgPSNwOO2gFJs",
  interior:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA04DfImvIuS_v-ZMJoqvihOTFO0jj9B0zlIykWI2sAKqssM9scN6SkTsDsZH5gfaKQ1Qh1MiiTgqLa2_He--xyd0rdwJQ6s19gewk6XBjk-rtP1uUoidE78Dj1lCMFfBRVIbEyehDw7j-zyNsVA3Zx6YNYIj8-cFoKqF7t9KFqyZF9kw0cNeHqwUGk2v59KcVgkGZ025zT2VKydVe6p66gGJywpg7GiFREjnurOF1KEMYxLVU8zxc",
  chopping:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNqCgpY4EkyRn5VEoNRUYredPK2hur4J3X6H9MhSCrUONwtg7VaocNb6Mgd6NzTG9lu-ZTMBlsIIoperC79IHwST98OG0znw-6LUULXscPzPArltloJH0megQ90RUNS4qbm8RL2SZOiN_D5la11Vt65wPRBN--7ThFxTN0fLlfi9RCuqBz3iYh9eeQqOCGg3-LAmj1s4pHRaVgivhe_WlnL5p7Wk5gAkL4TjdviJ_VrVk_G0vp4dk",
  sauce:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCRhPmF3qkmsOvbsszAqqMxkca0F66-GhVg3uZ6Ct7Hda_s19kdKgQ05asZbSkHsv9htc9EYMn18RB5SpOSQBwt1XtS3XqN9A5xr-1_DDR0PSVrLpZACEWMmc1URGOiT6pDpPh-ktFwjV25sIbQ7_MNg09MaNcLKMbsoHby3mibKMQ51FpIf6F-tnwdLD9TDB7gqjdY0AbfRPJxLbI_56CCaTt3QF7Zy0PF1K0h3e0wYjHFu6MjOME",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOJskG4nl4YGzNdaSuEyjB4pQbV1BZ4kltFEq-z_G-Uc2lBhpLdiJxWcYEX5wwpaihDhBR9IRfUTZ5vFgWrpcoEVweYjk0EvfiLG3PuN2s1exDmYyypTcTEeSK9QsKUk3gne6-bljrt9henLPN7XZ0r1Y5oLmEtCqGoqccl5eoNCVs0WYjfX4OkTsYMh7N1GqIMvHCd4cbNjCl91aa4In7SGmzdz40Yu5CrJTOOKl2xR8Op4JH29s",
  avatar1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvZVZVgqjSA4x2TW7SFZiQbxBrXV2OgngZzTFiBGIhPuVQrKXhpql3AGL-wWqgVaQSbHO6pNlBFBU0zE0wzkH7NUlDzCVGCVKAyIxV57EtejXjpXrTyl3s_wwnC_sRf6i6Wl8V6uMOfpB1Osaw4FWYDMh55Pirbi3HKmbQVeKA-CoIbpEREt-50ThfGhQcyTKxyXp49rJHNFOzm3_pib7MpqVam_tFmsEyX8i53SVhnylYIZNWkIU",
  avatar2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDc60zkc6SHIOGWse_QLEKBgR3FiTMvSo1nvcCjRaGcARJrqCR8zHABA98UBN7le7iX061tK5a5ktCzPtwgB4vJTpHAqiPyOAXE4kRhCB-QZooNabpYbcdkttejZogtRYMT7wMeVBPRA9wH49qnhgKd-lksiuNm9h_yHUSFivPOexV0F_h9SNF5Pyr30La1zBo7-tWDYh_beIdNINW8TFS7O94iAED8CwAluspvGWlY5a1L4RfWJPA",
  avatar3:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuASM5mMYIUz_xgd7Ih7WzT8oJTG9mb2Ru1BzKylYGPTPr0WYOc_AqbNDx91TpnUm8-7QuoqF9O517Z0mfHH6W3yN8D-COQ7Z3DBTctbdbckD3p8OlJSKhXqD1L12G9qhBNlaN4qMtwf07TW_TmQVuq2V_oBUhpWDagPV_Q-uAVlSR_1-tWP9FxUl6sZ8UIvKkgpnyLe-feY1byncwDgV9Iz37GF2A5t1nf1KSwLAkdw1WO7rWleEC4",
} as const;

export type Meal = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  category: string;
  badges: { label: string; tone: "primary" | "tertiary" }[];
};

export const MEALS: Meal[] = [
  {
    id: "signature-vip-burger",
    name: "Signature VIP Burger",
    tagline: "Triple wagyu beef patties with secret VIP sauce and truffle fries.",
    price: "Rs. 1,299",
    image: IMAGES.signatureBurger,
    category: "Burgers",
    badges: [
      { label: "BEST SELLER", tone: "primary" },
      { label: "SPICY", tone: "tertiary" },
    ],
  },
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    tagline: "Our world-famous spicy breaded chicken fillet with cool mayo.",
    price: "Rs. 650",
    image: IMAGES.zinger,
    category: "Burgers",
    badges: [{ label: "TRENDING", tone: "primary" }],
  },
  {
    id: "beef-sliders",
    name: "Beef Sliders (3 pc)",
    tagline: "Mini juicy beef patties with melted cheese and caramelized onions.",
    price: "Rs. 999",
    image: IMAGES.burger,
    category: "Burgers",
    badges: [],
  },
  {
    id: "crispy-fried-chicken",
    name: "Crispy Fried Chicken (2 pc)",
    tagline: "Golden, crunchy, and juicy. Our signature buttermilk coating.",
    price: "Rs. 850",
    image: IMAGES.friedChicken,
    category: "Fried Chicken",
    badges: [{ label: "FAMILY FAV", tone: "primary" }],
  },
  {
    id: "chicken-wings",
    name: "Chicken Wings (6 pc)",
    tagline: "Sticky BBQ glazed wings with a choice of dipping sauce.",
    price: "Rs. 899",
    image: IMAGES.friedChicken,
    category: "Fried Chicken",
    badges: [{ label: "HOT", tone: "tertiary" }],
  },
  {
    id: "classic-bbq-platter",
    name: "Classic BBQ Platter",
    tagline: "Seekh kebabs, chicken tikka, and malai boti served with naan.",
    price: "Rs. 2,499",
    image: IMAGES.bbq,
    category: "BBQ",
    badges: [{ label: "FEAST", tone: "primary" }],
  },
  {
    id: "chicken-malai-roll",
    name: "Chicken Malai Roll",
    tagline: "Creamy malai chicken wrapped in a warm paratha with mint chutney.",
    price: "Rs. 750",
    image: IMAGES.wraps,
    category: "Wraps",
    badges: [],
  },
  {
    id: "grilled-chicken-sandwich",
    name: "Grilled Chicken Sandwich",
    tagline: "Char-grilled chicken breast with fresh veggies and garlic aioli.",
    price: "Rs. 699",
    image: IMAGES.sandwich,
    category: "Sandwiches",
    badges: [{ label: "LIGHT", tone: "tertiary" }],
  },
  {
    id: "loaded-fries-deluxe",
    name: "Loaded Fries Deluxe",
    tagline: "Hand-cut fries loaded with pulled beef, jalapeños and secret cheese.",
    price: "Rs. 899",
    image: IMAGES.loadedFriesDeluxe,
    category: "Loaded Fries",
    badges: [{ label: "NEW", tone: "tertiary" }],
  },
  {
    id: "peri-peri-fries",
    name: "Peri Peri Fries",
    tagline: "Crispy fries dusted with fiery peri peri seasoning.",
    price: "Rs. 549",
    image: IMAGES.loadedFries,
    category: "Loaded Fries",
    badges: [],
  },
  {
    id: "vip-family-deal",
    name: "VIP Family Deal",
    tagline: "4 burgers, 1 large fries, 2 zingers, and 4 drinks. Feed the crew.",
    price: "Rs. 3,999",
    image: IMAGES.familyDeals,
    category: "Family Deals",
    badges: [
      { label: "BEST VALUE", tone: "primary" },
      { label: "SAVE 20%", tone: "tertiary" },
    ],
  },
  {
    id: "kids-fun-meal",
    name: "Kids Fun Meal",
    tagline: "Mini burger, small fries, drink, and a surprise toy.",
    price: "Rs. 549",
    image: IMAGES.kidsMeals,
    category: "Kids Meals",
    badges: [],
  },
  {
    id: "oreo-milkshake",
    name: "Oreo Milkshake",
    tagline: "Thick and creamy Oreo shake topped with whipped cream.",
    price: "Rs. 499",
    image: IMAGES.milkshake,
    category: "Drinks",
    badges: [],
  },
  {
    id: "brownie-sundae",
    name: "Brownie Sundae",
    tagline: "Warm brownie, vanilla ice cream, fudge, and crushed nuts.",
    price: "Rs. 599",
    image: IMAGES.dessert,
    category: "Desserts",
    badges: [{ label: "MUST TRY", tone: "primary" }],
  },
];

export const CATEGORIES = [
  { label: "Burgers", image: IMAGES.burger },
  { label: "Fried Chicken", image: IMAGES.friedChicken },
  { label: "BBQ", image: IMAGES.bbq },
  { label: "Wraps", image: IMAGES.wraps },
  { label: "Sandwiches", image: IMAGES.sandwich },
  { label: "Loaded Fries", image: IMAGES.loadedFries },
  { label: "Family Deals", image: IMAGES.familyDeals },
  { label: "Kids Meals", image: IMAGES.kidsMeals },
  { label: "Drinks", image: IMAGES.drinks },
  { label: "Desserts", image: IMAGES.dessert },
] as const;

export const FEATURES = [
  {
    icon: "restaurant",
    title: "Premium Ingredients",
    description: "We source only the finest wagyu beef and organic produce.",
  },
  {
    icon: "skillet",
    title: "Chef Mastered",
    description: "Each meal is crafted by culinary experts with a passion for flavor.",
  },
  {
    icon: "delivery_dining",
    title: "VIP Delivery",
    description:
      "Lightning fast delivery in premium temperature-controlled packaging.",
  },
  {
    icon: "star",
    title: "Exclusive Deals",
    description: "Member-only pricing and early access to new seasonal items.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The Signature VIP Burger is hands down the best I've ever had. The quality of meat is noticeable from the first bite.",
    name: "Ahmed Khan",
    role: "Tech Entrepreneur",
    avatar: IMAGES.avatar1,
  },
  {
    quote:
      "Love the premium feel of the whole brand. Even the delivery box feels exclusive. My kids love the VIP sliders!",
    name: "Sara Jamshed",
    role: "Lifestyle Influencer",
    avatar: IMAGES.avatar2,
  },
  {
    quote:
      "Finally, a place that takes BBQ seriously. The platter was huge and every meat was perfectly tender.",
    name: "Mohammad Rafi",
    role: "Food Critic",
    avatar: IMAGES.avatar3,
  },
] as const;

export const GALLERY = [
  { image: IMAGES.lifestyle1, className: "h-64 md:h-80" },
  { image: IMAGES.lifestyle2, className: "h-40 md:h-48" },
  { image: IMAGES.milkshake, className: "h-56 md:h-64" },
  { image: IMAGES.delivery, className: "h-80 md:h-96" },
  { image: IMAGES.interior, className: "h-80 md:h-[450px]" },
  { image: IMAGES.chopping, className: "h-56 md:h-64" },
  { image: IMAGES.sauce, className: "h-56 md:h-64" },
] as const;
