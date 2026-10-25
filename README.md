# 로켓 노즐 추력 계산기

배기 운동량과 출구·주변 압력차로 준정상 로켓 노즐의 축방향 추력을 계산한다.

- ID: E102
- App: https://nanalab.kr/eng-rocket-nozzle-thrust/
- Repository: https://github.com/NaNaCompany/eng-rocket-nozzle-thrust
- Formula: F = ṁv_e + (p_e−p_a)A_e

## Model and data

ṁ,A_e>0, 0<v_e<c, p_e,p_a≥0. 절대압을 입력한다. 축방향 출구 유동과 출구 단면의 균일한 속도·압력을 가정하며 외부 공기 흡입은 없다. 노즐 내부 상태·효율·배압에 따른 박리·비정상 유동은 별도 모델이 필요하다. 압력 항은 음수일 수 있으며 결과의 부호는 지정한 추력 축 기준이다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
