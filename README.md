# 뉴스피드 프로젝트 : MyLog

## 🏆 기획

**일상 공유 플랫폼**

나의 하루를 브이로그처럼 일상을 공유, 매일 성장하는 나 자신을 찾아가기 위한 블로그!

**`서비스 링크`** : [MyLog 서비스 링크]()

**`피그마 링크`** : [피그마 초안 링크](https://www.figma.com/design/hkMDJN7Q3YyZA6LZ7ryMb5/B8-TEAM?node-id=0-1&t=X8gfbZkxEIkUTb3s-1)

## 🍳 기술 스택

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## 📘 ERD

<img width="589" alt="image" src="https://github.com/Ileriayo/markdown-badges/assets/50113066/d3fd2763-43d7-4da6-b107-463f8ccec447">

## 📂 폴더 구조

```



```

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
<summary>토글 제목</summary>
<br>

**`문제`**
무슨무슨문제
**`해결`**
무슨무슨해결

</details>

## 👨‍👩‍👧 구성원

| 역할 | 이름   | 분담                                           | 깃허브                          |
| ---- | ------ | ---------------------------------------------- | ------------------------------- |
| 팀장 | 김준영 | 메인페이지 및 전체적인 CSS                     | https://github.com/JvnKim       |
| 팀원 | 서주환 | 유저 마이 페이지 및 유저 정보 수정/삭제 페이지 | https://github.com/JoohwanSeo   |
| 팀원 | 윤문열 | 회원가입, 로그인                               | https://github.com/munyeol-Yoon |
| 팀원 | 천다연 | 게시글 페이지, 댓글 페이지 CRUD                | https://github.com/Dayeon-Cheon |
