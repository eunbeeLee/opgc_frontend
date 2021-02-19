# opgc_frontend

Over Programmed Good Coding 프론트엔드 레포지토리

## Usage

### Project setup

```shell
> git clone https://github.com/mornya/react-demo-scrolling-anchor
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

-   npm packages (eslint, prettier, husky ...)
-   CSS
-   Redux (ReduxSaga)
-   React
-   Typescript
-   Webpack

## Proejct Structure (major factors)

```bash
├── dist # 빌드파일
│   ├── assets # 정적리소스 (= /src/assets 와 동일)
│   ├── app.js
│   ├── index.html
├── src
│   ├── apis
│   ├── assets # 정적리소스
│   ├── components
│   │   ├── common # 애플리케이션 공통 컴포넌트
│   │   ├── layouts # 페이지에서 공용으로 사용할 수 있는 레이아웃
│   │   └── pages # 페이지
│   ├── constants # 앱 공통으로 사용하는 상수 값 or 클래스
│   ├── libs # 사용자 정의 라이브러리, uilts과 비슷한 용도
│   ├── modules # redux module
│   ├── services
│   └── types # type 정의
├── ...
└── README.md
```
