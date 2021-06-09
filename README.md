# opgc_frontend

Over Programmed Good Coding 프론트엔드 레포지토리\
React 학습을 위한 토이프로젝트입니다.

개발자들의 랭킹을 보여줍니다!

## Usage

### Project setup

```shell
> git clone https://github.com/DirtyBoyz/opgc_frontend
> cd opgc_frontend
> npm install
```

### Run in local for development

```shell
> npm run dev
```

### Build for production

```shell
> npm run build
```

## Tech Stack

-   HTML5, CSS3 - 마크업
-   eslint, prettier, husky - 소스 품질관리
-   Redux (ReduxSaga) - 상태관리, 비동기작업
-   React - 컴포넌트개발 라이브러리
-   Typescript - 타입기반의 javascript superset
-   Webpack - 빌드 자동화 및 최적화

## Proejct Structure (major factors)

```bash
├── dist # 빌드파일
│   ├── assets # 정적리소스 (= /src/assets 와 동일)
│   ├── app.js
│   ├── index.html
├── src
│   ├── apis # api 비동기 호출 함수들
│   ├── assets # 정적리소스
│   ├── components # presentational components, 계층구조없이 구성
│   ├── containers # container components, page를 root로 계층구조로구성
│   ├── layouts # 페이지에서 공용으로 사용할 수 있는 레이아웃
│   ├── constants # 앱 공통으로 사용하는 상수 값 or 클래스
│   ├── utils # 사용자 정의 util
│   ├── modules # redux module
│   └── types # type 정의
├── ... # 기타 환경설정파일들
└── README.md
```
