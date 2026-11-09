---
layout: default
title: "정리 및 마무리"
nav_order: 8
permalink: /lab/wrap-up.html
---

# 정리 및 마무리

RFP 분석·제안서·WBS 생성 사례를 통해 **업무를 나누고, 실행 기능과 근거 자료를 연결하고, 결과를 검증하며 개선하는 에이전트 구성 방법**을 살펴봤습니다. 같은 원칙을 다른 업무에도 적용할 수 있습니다.

### 1. 이번 실습에서 구성한 것

![에이전트 구성 관계도: Instructions가 원칙을 정하고 Skill이 Tool·Knowledge를 활용하며, 테스트로 구성을 개선](../Hands-on_image/agent-design-overview.png)

Instructions로 전체 원칙과 실행 순서를 정하고, 분석·WBS·제안서 Skill에 업무를 나눴습니다. Learn MCP와 Knowledge로 근거를 연결하고, 결과와 실행 기록을 대조하는 방법을 확인했습니다.

업무 흐름은 **분석 → Draft WBS → 제안서 → 상세 WBS**입니다. Draft WBS는 중간 계획 데이터로 전달하고, 제안서와 상세 WBS는 각각 `.pptx`·`.xlsx` 파일로 생성합니다.

### 2. 실습에서 기억할 핵심 원칙

| 구성 | 기억할 원칙 |
|---|---|
| [Instructions]({{ '/lab/agent-instructions.html' | relative_url }}) | 전체 목표·범위·공통 원칙과 Skill 실행 순서를 정합니다. |
| [Skill]({{ '/lab/skills.html' | relative_url }}) | 맡은 업무와 입력·출력·완료 기준을 명확히 정의합니다. |
| [Tool]({{ '/lab/tools-mcp.html' | relative_url }}) | 필요한 행동과 반환 결과·출처를 기준으로 선택합니다. |
| [Knowledge]({{ '/lab/knowledge.html' | relative_url }}) | 판단에 필요한 자료를 연결하고 근거까지 조회되는지 확인합니다. |
| [테스트·개선]({{ '/lab/testing.html' | relative_url }}) | 기대 결과와 실행 증거를 대조하고, 원인에 맞게 수정·재검증합니다. |

**전체 업무의 연결은 지침에, 구체적인 수행 방법은 Skill에** 둡니다. 여러 단계가 결과를 이어 쓸 때는 앞 단계의 정보와 미확정 상태가 유지되도록 구성합니다.

### 3. 실습 완료 확인

자신의 에이전트와 실행 결과를 보며 확인합니다.

- [ ] Instructions와 세 Skill을 등록하고, 역할·선택 조건·실행 순서를 연결했습니다.
- [ ] Learn MCP와 Knowledge에서 실제 근거를 조회하고 출처를 확인했습니다.
- [ ] 분석·Draft WBS의 청사진·추천 인력·일정과 미확정 상태를 제안서·상세 WBS에 이어 사용했습니다.
- [ ] 생성된 PPTX·XLSX를 직접 열어 내용과 표준 양식 적용 여부를 확인했습니다.
- [ ] 기대 결과와 실행 기록을 대조하고, 문제가 있었다면 해당 구성을 수정한 뒤 재검증했습니다.

확인하지 못한 항목은 **추가 확인할 내용·문제 원인·다음 조치**로 남깁니다. 실행 완료 표시와 실제 업무 기준 충족 여부를 함께 확인합니다.

### 4. 다음으로 해볼 것

RFP-02 또는 RFP-03으로 새 대화에서 테스트해 봅니다. 새로운 요구사항에 맞게 판단하면서도 역할·근거·완료 기준을 유지하는지 확인합니다.

자신의 업무에 적용할 때는 **맡길 목표와 범위, 나눌 작업, 필요한 기능·자료, 결과의 완료 기준**부터 정해 봅니다. 이번 실습에서 확인한 구성·검증 방법을 기준으로 작은 업무부터 확장할 수 있습니다.

---

<nav class="lab-page-nav" aria-label="페이지 이동">
  <a class="lab-page-nav__prev" href="{{ '/lab/testing.html' | relative_url }}" rel="prev">이전</a>
  <a class="lab-page-nav__home" href="{{ '/' | relative_url }}">홈</a>
</nav>
