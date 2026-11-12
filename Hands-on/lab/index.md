---
layout: home
title: 홈
nav_order: 1
permalink: /
---

# Microsoft Copilot Studio GHCP Harness Hands-on Lab

**RFP 분석 및 제안서·WBS 생성 에이전트 구축**

Project Delivery 에이전트에 준비된 작업 방법과 도구·자료를 연결하고, 직접 요청해 결과를 확인합니다. RFP는 고객의 사업 요구 문서이고, WBS는 작업·담당자·일정을 정리한 표입니다.

## 1. 학습 목표와 준비사항

Project Delivery 에이전트를 구성하며 다음 내용을 익힙니다.

- 지침과 세 Skill을 등록합니다.
- 공식 문서를 찾는 도구와 내부 업무 자료를 연결합니다.
- 두 가지 요청을 직접 실행하고, 제안서·WBS 파일은 시연으로 확인합니다.

### 시작 전 확인

{: .note}
> 실습 자료: <a href="{{ '/Hands-On_Lab.zip' | relative_url }}" download>
  Hands-On_Lab 실습 자료
</a>

| 준비 항목 | 확인할 내용 |
|---|---|
| 계정·환경 | Copilot Studio에 로그인하고, 사용할 환경에서 GHCP 에이전트를 생성·편집할 수 있는지 확인 |
| 연결 기능 | 해당 환경에서 Skill 업로드, MCP 도구 연결, Knowledge 추가를 사용할 수 있는지 확인 |
| 지식 저장소 | Step4에서 연결할 교육용 SharePoint 폴더에 접근할 수 있는지 확인. 폴더와 자료는 미리 준비되어 있음 |
| 제공 자료 | 아래 ‘사용할 자료’에서 지침·Skill 등록 파일·지식 샘플·테스트 RFP 확인 |
| 결과 확인 | 생성된 `.pptx`·`.xlsx`를 열어 내용과 서식을 확인할 수 있는 프로그램 준비 |

구체적인 화면 조작과 연결 방법은 각 Step에서 확인합니다.

<a id="lab-materials"></a>

### 사용할 자료

일괄 다운로드에는 지침·Skill·지식 샘플·테스트 RFP가 들어 있습니다. 등록할 파일은 준비하고, 지식 자료는 교육용 SharePoint 폴더를 연결합니다.

Project Delivery 에이전트는 **Hands-on Lab용으로 제작된 에이전트 지침과 분석·제안서 생성·WBS 생성 Skill**을 사용합니다. 제안서와 상세 WBS는 Skill에 포함된 표준 템플릿을 복사한 뒤 내용을 작성하도록 구성했습니다.

#### 지침·Skill 등록 파일

| 용도 | 사용할 파일 | 적용 위치 |
|---|---|---|
| 에이전트 지침 | `AGENT_지침.md` | Step1에서 지침 내용을 입력 |
| 분석 Skill | `rfp-analyzer.zip` | Step2에서 `.md` 파일 업로드 |
| 제안서 생성 Skill | `rfp-proposal-generator-tc.zip` | Step2에서 템플릿을 포함한 `.zip` 그대로 업로드 |
| WBS 생성 Skill | `rfp-wbs-generator-tc.zip` | Step2에서 템플릿을 포함한 `.zip` 그대로 업로드 |

제안서·WBS의 표준 템플릿은 Skill ZIP에 포함되어 있습니다. 패키지의 세부 구성과 업로드 방법은 Step2에서 확인합니다.

#### Knowledge에 연결할 자료

| 분류 | 자료 | 사용 목적 |
|---|---|---|
| 공통 인력 | `기술본부인력관리표.xlsx` | 역할·Level·기술 역량에 맞는 후보 추천 |
| 제안 참고 | `한빛푸드_IT_인프라_효율화_사업_제안서.pptx`, `노바시온테크그룹_제안서.pptx` | 논리 전개·내용 구성 참고. 표준 템플릿과 구분 |
| WBS 참고 | `WBS_한빛푸드_IT인프라효율화.xlsx`, `WBS_누리제약_M365협업전환.xlsx` | 작업 분해 참고. 과거 일정·인력·공수를 새 사업에 그대로 적용하지 않음 |

Step4에서 공통·업무별로 연결합니다. 인력 추천의 ‘실명’은 **자료에 실제로 기재된 후보 이름**을 뜻합니다. 이름·경력·가용성을 임의로 만들지 않으며, 운영 자료도 업무 적합성 정보만 사용합니다.

#### 테스트 입력

| 구분 | 자료 | 사용 목적 |
|---|---|---|
| 기본 RFP | `RFP-01_물류운영포털.md` | Step5에서 분석 테스트와 제안서·WBS 시연에 사용 |
| 추가 RFP | RFP-02, RFP-03 | 교육 후 다른 요구사항으로 추가 테스트 |

## 2. 완성할 에이전트와 업무 흐름

Project Delivery 에이전트는 RFP에서 요구사항·구축 계획·추천 인력을 정리하고, 그 내용으로 제안서와 WBS를 작성합니다. 교안에서 ‘구축 청사진’은 시스템을 어떻게 구성할지 정리한 계획을 뜻합니다.

![프로젝트 산출물 작성 에이전트의 목적: 제안서·WBS 초안 작성 시간을 기존 수작업 3일에서 에이전트 활용 시 약 1시간으로 줄이고 검토·수정·보완 후 고객에게 전달]({{ '/Hands-on_image/project-delivery-purpose.png' | relative_url }})

![RFP 분석부터 상세 WBS까지의 에이전트 업무 흐름]({{ '/Hands-on_image/ProjectDeliveryAgent흐름도.png' | relative_url }})

**분석 → Draft WBS → 제안서 → 상세 WBS** 순으로 이전 결과를 재사용합니다. Draft WBS는 제안서에 쓸 중간 작업 계획이며 별도 Excel 파일을 만들지 않습니다. 청사진과 인력 후보를 일정·수행계획에 연결하고, 최종적으로 표준 양식을 적용한 제안서 `.pptx`와 WBS `.xlsx`를 생성합니다.

## 3. 전체 학습 경로

| 페이지 | 확인할 내용 |
|---|---|
| [GHCP Harness 개요]({{ '/lab/GHCP-Harness-Overview.html' | relative_url }}) | 할 수 있는 일·선택 이유 |
| [Step1. GHCP Harness 에이전트 생성 및 Instructions 작성]({{ '/lab/agent-instructions.html' | relative_url }}) | 에이전트 생성과 전체 목표·범위·공통 원칙 설정 |
| [Step2. Skills 구성]({{ '/lab/skills.html' | relative_url }}) | 세 Skill의 역할과 등록 방법 |
| [Step3. Tools 등록]({{ '/lab/tools-mcp.html' | relative_url }}) | 필요한 행동과 출처를 기준으로 Learn MCP 연결 |
| [Step4. Knowledge 구성]({{ '/lab/knowledge.html' | relative_url }}) | 인력·참고 자료의 역할과 검색 범위 구성 |
| [Step5. 테스트 및 Activity Trace]({{ '/lab/testing.html' | relative_url }}) | 두 요청 직접 테스트·최종 파일과 실행 기록 시연 |
| [정리 및 마무리]({{ '/lab/wrap-up.html' | relative_url }}) | 설계·검증 기준을 정리하고 자신의 업무에 적용 |

---

<nav class="lab-page-nav" aria-label="페이지 이동">
  <a class="lab-page-nav__next" href="{{ '/lab/GHCP-Harness-Overview.html' | relative_url }}" rel="next">다음</a>
</nav>
