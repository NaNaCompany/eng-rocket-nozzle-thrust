export const tool={
  "id": "E102",
  "slug": "eng-rocket-nozzle-thrust",
  "title": "로켓 노즐 추력 계산기",
  "title_en": "Rocket Nozzle Thrust Calculator",
  "category": "우주·천체",
  "category_en": "Space and astronomy",
  "fields": [
    {
      "key": "flow",
      "label": "추진제 배출 질량유량 ṁ",
      "label_en": "Exhaust mass flow rate ṁ",
      "dimension": "massFlow",
      "example": 5,
      "constraint": "positive",
      "display_unit": "kgs",
      "display_value": "5"
    },
    {
      "key": "exhaust",
      "label": "축방향 배기속도 v_e",
      "label_en": "Axial exhaust speed v_e",
      "dimension": "speed",
      "example": 2500,
      "constraint": "positive",
      "display_unit": "ms",
      "display_value": "2500"
    },
    {
      "key": "exit",
      "label": "노즐 출구 절대압 p_e",
      "label_en": "Nozzle exit absolute pressure p_e",
      "dimension": "pressure",
      "example": 120000,
      "constraint": "nonnegative",
      "display_unit": "kPa",
      "display_value": "120"
    },
    {
      "key": "ambient",
      "label": "주변 절대압 p_a",
      "label_en": "Ambient absolute pressure p_a",
      "dimension": "pressure",
      "example": 100000,
      "constraint": "nonnegative",
      "display_unit": "kPa",
      "display_value": "100"
    },
    {
      "key": "area",
      "label": "노즐 출구 면적 A_e",
      "label_en": "Nozzle exit area A_e",
      "dimension": "area",
      "example": 0.05,
      "constraint": "positive",
      "display_unit": "m2",
      "display_value": "0.050000000000000003"
    }
  ],
  "result_label": "축방향 추력 F",
  "result_label_en": "Axial thrust F",
  "result_dimension": "force",
  "formula": "F = ṁv_e + (p_e−p_a)A_e",
  "purpose": "배기 운동량과 출구·주변 압력차로 준정상 로켓 노즐의 축방향 추력을 계산한다.",
  "purpose_en": "Calculate axial rocket nozzle thrust from exhaust momentum and the exit-to-ambient pressure difference.",
  "assumptions": "ṁ,A_e>0, 0<v_e<c, p_e,p_a≥0. 절대압을 입력한다. 축방향 출구 유동과 출구 단면의 균일한 속도·압력을 가정하며 외부 공기 흡입은 없다. 노즐 내부 상태·효율·배압에 따른 박리·비정상 유동은 별도 모델이 필요하다. 압력 항은 음수일 수 있으며 결과의 부호는 지정한 추력 축 기준이다.",
  "assumptions_en": "Required: ṁ,A_e>0, 0<v_e<c and nonnegative absolute pressures. Quasi-steady axial exhaust with uniform exit velocity and pressure is assumed, without external air ingestion. Excluded: internal nozzle solutions, efficiency, back-pressure separation and unsteady flow. The pressure contribution may be negative; the output is signed along the chosen thrust axis.",
  "sources": [
    {
      "label": "NASA Glenn · Rocket Thrust Equation",
      "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/rocket-thrust-equation/"
    }
  ],
  "condition": "균일한 축방향 출구 유동과 유동 박리 없는 준정상 노즐 조건을 확인했습니다.",
  "condition_en": "I confirm uniform axial exit flow and a quasi-steady nozzle without flow separation.",
  "site": "https://nanalab.kr/eng-rocket-nozzle-thrust/",
  "repository": "https://github.com/NaNaCompany/eng-rocket-nozzle-thrust",
  "groups": [],
  "output_unit": "N"
};
