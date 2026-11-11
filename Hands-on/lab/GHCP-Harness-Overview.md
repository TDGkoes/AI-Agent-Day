---
layout: default
title: GHCP Harness 개요
nav_order: 2
permalink: /lab/GHCP-Harness-Overview.html
has_toc: false
---

# GHCP Harness 개요

**학습 목표:** GHCP 하네스로 어떤 일을 할 수 있는지 알고, Project Delivery 에이전트에서 선택한 이유를 확인합니다.

{: .note }
환경에 따라 **Microsoft Copilot 하네스**라는 이름으로 표시될 수 있습니다. 교안은 기존 화면과 맞춰 GHCP라는 이름을 사용합니다. [공식 명칭 안내](https://www.microsoft.com/en-us/copilot/blog/copilot-studio/the-github-copilot-harness-in-copilot-studio-is-now-the-microsoft-copilot-harness/)

## 1. GHCP Harness로 할 수 있는 일

하네스는 **AI가 필요한 기능을 사용해 실제 작업을 하도록 돕는 실행 환경**입니다. GHCP 하네스에서는 말로 업무를 설명하고, 작업 방법과 도구·자료를 연결할 수 있습니다.

| 할 수 있는 일 | Project Delivery 에이전트의 예 |
|---|---|
| 여러 작업을 이어 수행 | 요구사항을 분석하고, 그 결과로 제안서와 WBS 작성 |
| 필요한 기능과 자료 사용 | 인력 자료를 찾고 Microsoft 공식 문서 확인 |
| 업무 파일 작성 | PowerPoint 제안서와 Excel WBS 생성 |

필요한 작업과 도구를 선택하고, 결과를 확인하며 작업을 이어갑니다. [공식 하네스 안내](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview)

## 2. Project Delivery 에이전트에서 선택한 이유

Project Delivery 에이전트는 **고객 요구사항을 읽는 일부터 문서 파일을 만드는 일까지** 연결해야 합니다. 여러 Skill과 도구를 사용하기에 GHCP가 적합했고, 실제 구축에서도 PowerPoint·Excel 작성 결과가 만족스러웠습니다.

Project Delivery 에이전트는 GHCP로 구성합니다. Standard는 비교 대상이며 함께 사용하지 않습니다. 파일 품질에 대한 평가는 실제 구축 경험을 기준으로 합니다.

## 3. 사용할 자료

{: .note}
> 실습 자료: <a href="{{ '/Hands-On_Lab.zip' | relative_url }}" download>
  Hands-On_Lab 실습 자료
</a>

Project Delivery 에이전트는 **Hands-on Lab용으로 제작된 에이전트 지침과 분석·제안서 생성·WBS 생성 Skill**을 사용합니다. 제안서와 상세 WBS는 Skill에 포함된 표준 템플릿을 복사한 뒤 내용을 작성하도록 구성했습니다.

### 3.1 지침·Skill 등록 파일

| 용도 | 사용할 파일 | 적용 위치 |
|---|---|---|
| 에이전트 지침 | `AGENT_지침.md` | Step1에서 지침 내용을 입력 |
| 분석 Skill | `rfp-analyzer.zip` | Step2에서 `.md` 파일 업로드 |
| 제안서 생성 Skill | `rfp-proposal-generator-tc.zip` | Step2에서 템플릿을 포함한 `.zip` 그대로 업로드 |
| WBS 생성 Skill | `rfp-wbs-generator-tc.zip` | Step2에서 템플릿을 포함한 `.zip` 그대로 업로드 |

분석 Skill에는 업무 방법이, 제안서·WBS Skill에는 업무 방법과 원본 템플릿이 들어 있습니다. 아래 파일은 구성 확인용이며 별도로 Skill에 업로드하지 않습니다.

- **RFP 분석:** 업무 수행 지침(`SKILL.md`)
- **제안서:** 업무 수행 지침(`SKILL.md`), 표준 제안서 양식(`assets/표준제안서 템플릿_V2.pptx`)
- **WBS:** 업무 수행 지침(`SKILL.md`), 표준 WBS 양식(`assets/표준 WBS.xlsx`)

### 3.2 Knowledge에 연결할 자료

| 분류 | 자료 | 사용 목적 |
|---|---|---|
| 공통 인력 | `기술본부인력관리표.xlsx` | 역할·Level·기술 역량에 맞는 후보 추천 |
| 제안 참고 | `한빛푸드_IT_인프라_효율화_사업_제안서.pptx`, `노바시온테크그룹_제안서.pptx` | 논리 전개·내용 구성 참고. 표준 템플릿과 구분 |
| WBS 참고 | `WBS_한빛푸드_IT인프라효율화.xlsx`, `WBS_누리제약_M365협업전환.xlsx` | 작업 분해 참고. 과거 일정·인력·공수를 새 사업에 그대로 적용하지 않음 |

Step4에서 공통·업무별로 연결합니다. 인력 추천의 ‘실명’은 **자료에 실제로 기재된 후보 이름**을 뜻합니다. 이름·경력·가용성을 임의로 만들지 않으며, 운영 자료도 업무 적합성 정보만 사용합니다.

### 3.3 테스트 입력

| 구분 | 자료 | 사용 목적 |
|---|---|---|
| 기본 RFP | `RFP-01_물류운영포털.md` | Step5에서 분석부터 최종 파일까지의 흐름 확인 |
| 추가 RFP | RFP-02, RFP-03 | 다른 요구사항에서도 역할·근거·완료 기준을 유지하는지 검증 |



<details markdown="block">
<summary>참고: Standard와 비교하기</summary>

### GHCP Harness와 Standard Harness 비교

두 하네스는 업무를 설계하고 실행하는 중심 방식이 다릅니다. **Standard는 미리 정의한 토픽·규칙·경로가 중심이고, GHCP는 목표를 달성하기 위해 여러 단계를 수행하고 결과에 따라 조정하는 작업이 중심**입니다.

| 비교 관점 | Standard Harness | GHCP Harness |
|---|---|---|
| 설계 중심 | 토픽·규칙·분기 등 명시적인 경로 | 목표·Instructions·Skill을 통한 단계별 업무 수행 |
| 적합한 업무 | 처리 경로가 명확한 반복 문의·구조화된 업무 | 자료와 도구를 연결해 판단해야 하는 복합 업무 |
| 실행 흐름 | 작성자가 정의한 경로를 중심으로 실행 | 목표와 중간 결과에 따라 다음 작업·도구 활용을 조정 |
| 오류·예외 대응 | 사전에 설계한 예외 경로를 중심으로 처리 | 오류 결과를 확인해 재시도·대안 경로 등으로 조정 |
| 파일 업무의 비중 | 정형 대화·규칙 기반 처리에 초점 | 업무 파일의 읽기·생성·편집을 포함한 다단계 처리에 초점 |

이 비교는 각 하네스의 설계 중심과 적합성을 설명합니다. [공식 Harness 비교](https://learn.microsoft.com/en-us/microsoft-copilot-studio/harnesses-overview)

</details>

---

<nav class="lab-page-nav" aria-label="페이지 이동">
  <a class="lab-page-nav__prev" href="{{ '/' | relative_url }}" rel="prev">이전</a>
  <a class="lab-page-nav__home" href="{{ '/' | relative_url }}">홈</a>
  <a class="lab-page-nav__next" href="{{ '/lab/agent-instructions.html' | relative_url }}" rel="next">다음</a>
</nav>
