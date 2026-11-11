---
layout: default
title: "Step3. Tools 및 MCP 등록"
nav_order: 5
permalink: /lab/tools-mcp.html
---
# Step3. Tools 등록 

**학습 목표:** 업무에 필요한 기능과 출처를 기준으로 도구를 선택하고, Learn MCP의 실제 호출 결과를 확인합니다.

### 1. Tool은 실제 작업에 쓰는 기능

Tool은 **정보를 찾거나 작업할 때 에이전트가 사용하는 기능**입니다. Skill에 작업 방법을 적고, 필요한 기능을 Tool로 연결합니다.

### 2. Project Delivery 에이전트에 연결할 도구

| 필요한 일 | 선택한 도구와 이유 |
|---|---|
| Microsoft 기술을 공식 문서에서 확인 | Microsoft Learn Docs MCP Server로 검색 |
| 실제로 조회됐는지 확인 | 답변과 실행 기록에서 호출 결과·문서 출처 확인 |

다른 업무에서도 먼저 **무엇을 해야 하는지** 정하고, 그 일을 할 수 있는 도구를 선택합니다.

### 3. Microsoft Learn MCP Server 등록

1. **빌드 → 도구(Tools) 옆 +**를 선택합니다.
    ![도구 추가](../Hands-on_image/6-1_도구연결화면.png)

2. 카탈로그에서 `Microsoft Learn Docs MCP Server` 를 검색하여 선택합니다.
    ![Learn MCP 선택](../Hands-on_image/6-2_도구_LearnMCP서버연결화면.png)

3. 서버 상세에서 연결 추가를 선택하고 연결 이름에 아래 이름을 입력합니다. `본인이니셜`은 본인의 이니셜로 바꿔 **만들기(Create)** 및 에이전트 추가를 완료합니다.
    ```text
    HandsOn_Connection_본인이니셜
    ```

    ![연결 생성](../Hands-on_image/6-3_MCP서버연결생성화면.png)
    ![연결 만들기](../Hands-on_image/6-4_MCP서버연결생성화면2.png)

4.  Project Delivery 에이전트에서 사용하지 않는 **Work IQ**가 목록에 있다면 제거한 후 저장합니다.
    ![Work IQ 도구 제거](../Hands-on_image/6-5-1_WorkIQ도구제거.png)
    ![등록 완료](../Hands-on_image/6-5-2_도구연결확인화면.png)

### 4. 도구 호출 확인

등록한 도구(Microsoft Learn MCP Server)가 잘 동작하는지 확인합니다.

1. 상단 Preview(미리 보기)를 선택합니다. 만든 에이전트를 테스트할 수 있는 공간이 보입니다.
    ![도구 호출 확인_Preview](../Hands-on_image/6-6_도구연결확인_미리보기.png)

2. 아래 요청을 프롬프트 입력창에 입력하여 실행합니다.
    ```text
    Microsoft Learn MCP를 사용해 Copilot Studio의 GHCP 하네스에 대해 간단하게 설명해줘.
    ```
    ![프롬프트 입력 및 테스트](../Hands-on_image/6-6-2_테스트프롬프트입력.png)

3. Microsoft Learn MCP Server 도구를 호출하였는지, 답변에 이상이 있는지 확인합니다.
    ![테스트 결과 확인](../Hands-on_image/6-6-3_테스트프롬프트확인.png)

    {: .note }
    > `최종 사용자 미리 보기`는 에이전트의 테스트 화면 표시 방식을 전환하는 기능입니다.  
     실행 기록을 확인할 때는 도구 호출 항목이 보이는 표시 상태로 맞춥니다. 표시 방식은 에이전트의 실제 동작에 영향을 주지 않습니다.



**완료 확인:** 응답의 링크뿐 아니라 Trace에 실제 MCP 검색 호출과 결과가 있습니다. 필요한 근거를 확보했으면 불필요한 반복 검색을 하지 않습니다. 제품 기술은 Learn MCP, 내부 인력·경험은 Knowledge처럼 **업무별 근거에 맞는 도구·지식**을 선택합니다.

조회가 실패하면 도구 목록의 연결 상태, 호출 입력과 오류 내용을 먼저 확인합니다. 호출은 성공했지만 근거가 부족하면 검색어를 구체화하거나 필요한 본문을 조회합니다.

**다음 단계로 넘어가기 전:** 도구가 목록에 있는지만 보지 말고, 실제 호출과 반환된 공식 문서 내용·URL까지 확인합니다.

<details markdown="block">
<summary>참고: 도구 선택 기준 자세히 보기</summary>

#### 도구를 직접 선택할 때

**업무에 필요한 행동과 근거를 먼저 정하고, 이를 수행할 도구를 선택합니다.** Project Delivery 에이전트에서는 Microsoft 제품·서비스에 대한 제안을 공식 기술 문서로 뒷받침해야 하므로 Microsoft Learn MCP를 연결했습니다.

| 실무에서 고려할 기준 | 구성할 때 확인할 내용 | Project Delivery 에이전트에 적용한 선택·이유 |
|---|---|---|
| 필요한 행동 | 검색·조회·계산·생성·수정 중 무엇이 필요한가? | 요구사항의 구현 가능성과 기술 제안 근거를 확인할 문서 검색·본문 조회 기능 선택 |
| 신뢰할 출처 | 어떤 원천의 정보로 판단해야 하는가? | MS 파트너 업무의 기술 제안을 뒷받침하기 위해 Microsoft 공식 문서를 조회하는 Learn MCP 선택 |
| 입력·반환 결과 | 다음 작업에서 사용할 내용과 출처가 반환되는가? | 요구사항·기술명을 검색어로 사용하고, 반환된 문서 내용·URL을 청사진과 제안의 근거로 활용 |
| 기능·접근 범위 | 목적에 맞는 기능과 필요한 권한만 연결했는가? | 공식 기술 문서 조회에 맞는 도구를 연결. 내부 인력·사례는 별도 Knowledge로 구분 |
| 호출·검증 기준 | 언제 호출하고 어떤 결과를 확인할 것인가? | 기술의 지원 조건·제약 확인이 필요할 때 조회하고, Trace의 호출 결과와 산출물에 반영된 근거를 대조 |

예를 들어 문서 추출을 제안한다면 ‘해당 기능이 있다’는 답만으로는 부족합니다. 샘플 검증·사람 검수 등 적용 조건을 확인해야 하므로 **검색 후 필요한 본문까지 조회할 수 있는 도구**를 선택한 것입니다.

다른 업무에도 같은 순서로 적용합니다. 필요한 행동을 정하고, 그 행동을 수행할 도구의 입력·출력·접근 범위를 확인한 뒤, 결과가 실제 후속 작업에 쓰이는지 검증합니다. 도구 이름·설명과 Skill의 호출 조건에도 이 목적을 일치시킵니다.

</details>

---

<nav class="lab-page-nav" aria-label="페이지 이동">
  <a class="lab-page-nav__prev" href="{{ '/lab/skills.html' | relative_url }}" rel="prev">이전</a>
  <a class="lab-page-nav__home" href="{{ '/' | relative_url }}">홈</a>
  <a class="lab-page-nav__next" href="{{ '/lab/knowledge.html' | relative_url }}" rel="next">다음</a>
</nav>
