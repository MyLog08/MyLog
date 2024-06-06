# 뉴스피드 프로젝트 : MyLog

## 🏆 기획

**일상 공유 플랫폼**

나의 하루를 브이로그처럼 일상을 공유, 매일 성장하는 나 자신을 찾아가기 위한 블로그!

**`서비스 링크`** : [MyLog 서비스 링크](https://my-log-one.vercel.app/)

**`피그마 링크`** : [피그마 초안 링크](https://www.figma.com/design/hkMDJN7Q3YyZA6LZ7ryMb5/B8-TEAM?node-id=0-1&t=X8gfbZkxEIkUTb3s-1)

## 🍳 기술 스택

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## 📘 ERD

<img width="589" alt="image" src="https://github.com/Ileriayo/markdown-badges/assets/50113066/d3fd2763-43d7-4da6-b107-463f8ccec447">

## 📂 폴더 구조

<details>
<summary>폴더 구조</summary>
<br>

```

📦 MyLog
├── 📜 README.md
├── 📜 index.html
├── 📜 package.json
├── 📂 public
│   └── 📜 vite.svg
├── 📂 src
│   ├── 📜 App.jsx
│   ├── 📂 api
│   │   └── 📜 authApi.js
│   ├── 📂 assets
│   │   ├── 📜 MyLogLogo_1.svg
│   │   ├── 📜 MyLogLogo_blue_bold.png
│   │   └── 📜 No_image_available.png
│   ├── 📂 components
│   │   ├── 📂 AuthStatus
│   │   │   └── 📜 AuthStatus.jsx
│   │   ├── 📂 Common
│   │   │   ├── 📜 Button.jsx
│   │   │   ├── 📜 Input.jsx
│   │   │   └── 📜 LoadingBar.jsx
│   │   ├── 📂 DetailPage
│   │   │   ├── 📜 ArticleDisplay.jsx
│   │   │   ├── 📜 CommentDisplay.jsx
│   │   │   └── 📜 CommentInput.jsx
│   │   ├── 📂 LoginComponents
│   │   │   ├── 📜 LoginForm.jsx
│   │   │   └── 📜 SocialSection.jsx
│   │   ├── 📂 MainPage
│   │   │   ├── 📜 Articles.jsx
│   │   │   ├── 📜 Header.jsx
│   │   │   └── 📜 Search.jsx
│   │   ├── 📂 MyPage
│   │   │   └── 📜 UserProfile.jsx
│   │   ├── 📂 RegisterComponents
│   │   │   └── 📜 RegisterForm.jsx
│   │   └── 📂 SubmitPage
│   │       ├── 📜 ArticleCreateForm.jsx
│   │       └── 📜 ArticleUpdateForm.jsx
│   ├── 📂 hooks
│   │   └── 📜 useInput.jsx
│   ├── 📂 icons
│   │   ├── 📜 DiscordIcon.jsx
│   │   ├── 📜 GithubIcon.jsx
│   │   ├── 📜 GoogleIcon.jsx
│   │   ├── 📜 KaKaoIcon.jsx
│   │   └── 📜 SlackIcon.jsx
│   ├── 📜 main.jsx
│   ├── 📂 pages
│   │   ├── 📂 DetailPage
│   │   │   └── 📜 DetailPage.jsx
│   │   ├── 📂 EditProfilePage
│   │   │   └── 📜 EditProfile.jsx
│   │   ├── 📂 ErrorPage
│   │   │   └── 📜 NotFoundPage.jsx
│   │   ├── 📂 LoadingPage
│   │   │   └── 📜 LoadingPage.jsx
│   │   ├── 📂 LoginPage
│   │   │   └── 📜 LoginPage.jsx
│   │   ├── 📂 MainPage
│   │   │   └── 📜 MainPage.jsx
│   │   ├── 📂 MyPage
│   │   │   └── 📜 MyPage.jsx
│   │   ├── 📂 RegisterPage
│   │   │   └── 📜 RegisterPage.jsx
│   │   └── 📂 SubmitPage
│   │       ├── 📜 ArticleCreatePage.jsx
│   │       └── 📜 ArticleUpdatePage.jsx
│   ├── 📂 redux
│   │   ├── 📂 slices
│   │   │   ├── 📜 authSlice.js
│   │   │   └── 📜 userProfileSlice.js
│   │   └── 📜 store.js
│   ├── 📂 shared
│   │   └── 📜 Router.jsx
│   ├── 📂 styles
│   │   ├── 📂 Common
│   │   │   ├── 📜 ButtonStyle.js
│   │   │   ├── 📜 InputStyle.js
│   │   │   └── 📜 LoadingBarStyle.js
│   │   ├── 📂 Detail
│   │   │   ├── 📜 CommentDisplayStyle.js
│   │   │   ├── 📜 CommentStyle.js
│   │   │   ├── 📜 DetailEditStyle.js
│   │   │   └── 📜 DetailStyle.js
│   │   ├── 📂 ErrorPage
│   │   │   └── 📜 NotFoundPageStyle.js
│   │   ├── 📂 GlobalStyle
│   │   │   ├── 📜 AppStyle.js
│   │   │   ├── 📜 GlobalStyle.js
│   │   │   └── 📜 Theme.js
│   │   ├── 📂 LoginComponents
│   │   │   ├── 📜 LoginStyle.js
│   │   │   └── 📜 SocialLoginStyle.js
│   │   ├── 📂 MainPage
│   │   │   ├── 📜 HeaderStyle.js
│   │   │   └── 📜 MainStyle.js
│   │   ├── 📂 ProfilePage
│   │   │   ├── 📜 ProfileEditPageStyle.js
│   │   │   └── 📜 ProfilePageStyle.js
│   │   ├── 📂 Register
│   │   │   └── 📜 RegisterStyle.js
│   │   └── 📂 WriteStyle
│   │       └── 📜 WriteStyle.js
│   ├── 📂 supabase
│   │   └── 📜 supabase.js
│   └── 📂 utils
│       ├── 📂 common
│       │   └── 📜 scrollToTop.js
│       └── 📂 validators
│           ├── 📜 index.js
│           ├── 📜 validateCheckDuplicate.js
│           ├── 📜 validateDateFormat.js
│           ├── 📜 validateEmailFormat.js
│           ├── 📜 validateLength.js
│           ├── 📜 validateNameLength.js
│           ├── 📜 validatePasswordFormat.js
│           └── 📜 validatePasswordMatch.js
├── 📜 vite.config.js
└── 📜 yarn.lock

```

</details>

## 🧨 트러블 슈팅

<details>
<summary>유저 데이터 관리 문제</summary>
<br>

**`문제`** 유저 데이터 관리 문제
**`해결`** supabase 는 authenticate 의 user 의 저장소를 손쉽게 만들어주어 관리할 수 있게 해줌. 하지만 따로 유저 테이블을 만들어 관리가 필요했음. -> 관계를 설정하고 옵션을 CASCADE 로 설정해 유저가 탈퇴한다면 해당 유저가 만든 게시글과 댓글을 삭제하고 싶었음.
두가지 저장소에 대한 관리를 모두 진행하였고 이에 따라 유저가 소셜로그인을 했는지 로컬로그인을 했는지에 관한 데이터 불일치 문제가 발생함.

`step1` 소셜로그인이 발생했을때 유저테이블의 컬럼을 업데이트 하는 방식

- `failed` : 소셜로그인 진행시 페이지가 리다이렉트 되기 때문에 이 방법으로 진행하기 어려웠음

`step2` 로딩 페이지를 만듦. 소셜로그인이 진행된 후 리다이렉트를 로딩 페이지로 주어 이때 로그인 정보를 업데이트

- `solve` : 데이터를 일치시켰고, 이에 따라 유저정보를 더욱 정확히 파악할 수 있었음, 추후 토큰 블랙리스트를 통한 관리나 세션 관리도 가능해짐

</details>

<details>
<summary>이미지 관리 이슈</summary>
<br>

**`문제`**DB 이미지 url 호출, 관리 이슈
**`해결`**
`step1` supabase /storage/ bucket에 프로젝트에 사용되는 모든이미지 url을 따로 저장, 관리를 해준다

- `failed` 프로필의 이미지를 등록하는 과정에서 이미지를 제외한 나머지 정보는 문제없이 db에저장이 됐지만 프로필을 등록하는 경로에서 사용법이 익숙치 않아 그에 대한 문제가 있었고 등록 했음에도 화면에 표출이 안 되어 그에 대한 문제도 있었다. 같은 이유로 저장된 이미지 주소를 수정 했을 때도 문제가 있었습니다.
- `solve` 불러오는 컬럼(속성)값의 경로를 지정해주고 supabase api docs에서 제공하는 샘플 코드를 이용해 해당 정보를 불러오고 표출 시켰습니다.
- `try` 사용법이 미숙해 문제가 발생했던 부분과 어떤 값을 가져와서 적용시키는 문제에 대해서 연습을 통해 익숙해지도록 할 예정입니다.

</details>

## 👨‍👩‍👧 구성원

| 역할 | 이름   | 분담                                           | 깃허브                          |
| ---- | ------ | ---------------------------------------------- | ------------------------------- |
| 팀장 | 김준영 | 메인페이지 및 전체적인 CSS                     | https://github.com/JvnKim       |
| 팀원 | 서주환 | 유저 마이 페이지 및 유저 정보 수정/삭제 페이지 | https://github.com/JoohwanSeo   |
| 팀원 | 윤문열 | 회원가입, 로그인                               | https://github.com/munyeol-Yoon |
| 팀원 | 천다연 | 게시글 페이지, 댓글 페이지 CRUD                | https://github.com/Dayeon-Cheon |
