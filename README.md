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
│   ├── layouts # 여러 페이지에서 공용으로 사용할 수 있는 레이아웃
│   ├── constants # 앱 공통으로 사용하는 상수 값, enum
│   │   ├── api.config.js # api 설정과 관련된 상수
│   │   ├── application # 앱 전체 공용으로 사용하는 상수
│   │   ├── router # 라우팅 정보
│   │   ├── menu # 메뉴 리스트들
│   ├── utils # 사용자 정의 util
│   ├── modules # redux module
│   └── types # type 정의
├── ... # 기타 환경설정파일들
└── README.md
```

대부분의 구성요소(`containers`, `component`, ...)는 가독성 향상을 위해 단일파일이 아닌 디렉토리구조로 구성이 되어있다.\
디렉토리는 아래 파일들을 포함할 수 있으며, index.ts(x)를 제외한 나머지는 Optional 하다.

```bash
-   index.ts(x) # 디렉토리를 대표하는 main 파일
-   constants.ts # 변하지 않는 상수값
-   service.ts # 순수함수
-   type.ts
```
