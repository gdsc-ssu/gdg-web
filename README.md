# GDG-WEB-2026 DEV
[WEB PAGE](https://gdgocsoongsil.com/)

# 블로그 글 작성 안내

### 1. 파일 위치
content/posts/ 폴더 안에 .mdx 파일을 생성해요.

### 2. 파일명 규칙

content/posts/파일명.mdx
  - 영문 소문자, 숫자, 하이픈(-)만 사용
  - 파일명이 URL의 slug가 됨 (예: my-post.mdx → /blog/my-post)

### 3. 상단 메타데이터 (필수)
파일 맨 위에 ---로 감싼 frontmatter를 반드시 작성해야 해요.

```
  ---
  title: "글 제목"
  date: "2025-05-20"          # YYYY-MM-DD 형식
  description: "글 요약"       # 블로그 목록에 표시됨
  author: "작성자 이름"
  tags: ["태그1", "태그2"]    # 선택사항
  ---
```

### 4. 본문 작성
frontmatter 아래에 Markdown 문법으로 작성해요.

```
# 제목 (h1)
## 소제목 (h2)
```
일반 문단 텍스트입니다.

```
  **굵게**, *기울임*, `인라인 코드`

  - 목록 항목 1
  - 목록 항목 2
  [링크 텍스트](https://링크주소)

  코드 블록:
  javascript
  console.log('Hello!')
  
```

### 5. 주의사항

  - date 형식이 틀리면 정렬이 깨질 수 있어요 → 반드시 "YYYY-MM-DD" 형식
  - 최신 글이 목록 상단에 표시되므로 날짜를 정확히 입력해야 해요
  - 파일 저장 후 개발 서버가 자동으로 재생성해줌 (pnpm dev 실행 중이면 자동 반영)
  - 이미지를 넣고 싶다면 public/ 폴더에 이미지를 넣고 `![alt](이미지경로)` 문법 사용

---

## 🌱 Commit Convention

- 커밋 메시지 규칙
  - `commit convention`: `commit message`
  - 예시) `feat: 로그인 구현`

| Tag Name | Description                                                                                   |
| :-- | :-------------------------------------------------------------------------------------------- |
| ✨ | 새로운 기능 추가                                                                              |
| 🎨 | CSS 등 사용자 UI 디자인 변경                                                                  |
| 💬 | 필요한 주석 추가, 변경 및 삭제                                                                |
| 🔧 | 버그 수정                                                                                     |
| ♻️ | 프로덕션 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우                  |
| 📝 | README.md 수정                                                                                |
| 📁 | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우                                            |
| 🗑️ | 파일을 삭제하는 작업만 수행한 경우                                                            |
| 🧪 | 테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음       |
| 🧹 | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |
| 🚑️ | 급하게 치명적인 버그를 고쳐야하는 경우                                                        |

## 🪵 Branch Convention
| issue | Description                                                                                   |
| :-- | :-------------------------------------------------------------------------------------------- |
| feature | 새로운 기능 추가                                                                              |
| design | CSS 등 사용자 UI 디자인 변경                                                                  |
| fix | 버그 수정                                                                                       |
- Issue를 생성한다. (작업의 단위, 번호 부여)
- Issue의 Feature Branch를 생성한다.
  - `{접두사}/#이슈번호_{작업명}`
  - 예시: feat/#12_login
- Add - Commit - Push - Pull Request 의 과정
- Pull Request가 작성되면 다른 팀원이 Code Review를 한다.
- Code Review가 완료되고, 다른 팀원이 Approve하면 Merge Pull Request 진행
- 다른 팀원은 merge된 작업물을 pull하고 다시 각자 맡은 작업을 이어나간다.
