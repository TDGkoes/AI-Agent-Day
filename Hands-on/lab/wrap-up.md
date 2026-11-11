---
layout: default
title: "정리 및 마무리"
nav_order: 8
permalink: /lab/wrap-up.html
---

# 정리 및 마무리

Project Delivery 에이전트에 **작업 방법과 도구·자료를 연결하고, 두 가지 요청을 실행해 결과를 확인**했습니다. 제안서·WBS 파일과 실행 기록은 시연으로 살펴봤습니다.

### 1. 이번 실습에서 구성한 것

![에이전트 구성 관계도: Instructions가 원칙을 정하고 Skill이 Tool·Knowledge를 활용하며, 테스트로 구성을 개선](../Hands-on_image/agent-design-overview.png)

Instructions로 전체 원칙과 실행 순서를 정하고, 분석·WBS·제안서 Skill에 업무를 나눴습니다. Learn MCP와 Knowledge로 근거를 연결하고, 결과와 실행 기록을 대조하는 방법을 확인했습니다.

업무 흐름은 **분석 → Draft WBS → 제안서 → 상세 WBS**입니다. Draft WBS는 중간 계획 데이터로 전달하고, 제안서와 상세 WBS는 각각 `.pptx`·`.xlsx` 파일로 생성합니다.

### 2. 실습에서 기억할 핵심 원칙

| 구성 | 기억할 원칙 |
|---|---|
| [Instructions]({{ '/lab/agent-instructions.html' | relative_url }}) | 전체 목표·범위·공통 원칙과 Skill 실행 순서를 정합니다. |
| [Skill]({{ '/lab/skills.html' | relative_url }}) | 무엇을 받아 무엇을 만들고, 무엇을 확인하면 끝인지 정합니다. |
| [Tool]({{ '/lab/tools-mcp.html' | relative_url }}) | 해야 할 일을 먼저 정하고 필요한 기능을 연결합니다. |
| [Knowledge]({{ '/lab/knowledge.html' | relative_url }}) | 답변에 필요한 자료를 연결하고 실제 내용이 검색되는지 봅니다. |
| [테스트·개선]({{ '/lab/testing.html' | relative_url }}) | 원하는 결과와 실제 응답을 비교하고, 다르면 기록을 확인합니다. |

**전체 업무의 연결은 지침에, 구체적인 수행 방법은 Skill에** 둡니다. 여러 단계가 결과를 이어 쓸 때는 앞 단계의 정보와 미확정 상태가 유지되도록 구성합니다.

### 3. 실습 완료 확인

자신의 에이전트와 실행 결과를 보며 확인합니다.

**직접 실습한 항목과 시연으로 확인한 항목을 구분합니다.**

- [ ] 지침과 분석·제안서·WBS Skill 세 개를 등록했습니다.
- [ ] Learn 도구와 인력·참고 자료를 연결했습니다.
- [ ] RFP 분석을 요청하고 후보 한 명의 이름·추천 근거를 확인했습니다.
- [ ] 자료가 없는 새 대화에서 필요한 자료를 요청하는지 확인했습니다.
- [ ] 시연에서 PowerPoint·Excel 파일과 실행 기록 한 항목을 확인했습니다.

끝내지 못한 실습은 현재 위치를 기록하고 교육 후 이어 합니다. 시연으로 본 파일은 자신의 에이전트가 직접 만든 파일과 구분합니다.

### 4. 다음으로 해볼 것

교육 후에는 분석을 완료한 같은 대화에서 제안서·상세 WBS를 직접 만들어 봅니다. 이어서 RFP-02 또는 RFP-03으로 새 대화에서 테스트해 봅니다. 새로운 요구사항에 맞게 판단하면서도 역할·근거·완료 기준을 유지하는지 확인합니다.

자신의 업무에 적용할 때는 **맡길 목표와 범위, 나눌 작업, 필요한 기능·자료, 결과의 완료 기준**부터 정해 봅니다. 이번 실습에서 확인한 구성·검증 방법을 기준으로 작은 업무부터 확장할 수 있습니다.

---

<nav class="lab-page-nav" aria-label="페이지 이동">
  <a class="lab-page-nav__prev" href="{{ '/lab/testing.html' | relative_url }}" rel="prev">이전</a>
  <a class="lab-page-nav__home" href="{{ '/' | relative_url }}">홈</a>
</nav>
