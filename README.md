# 💗 Portfolio

이 프로젝트는 Next.js, Three.js, 그리고 GSAP를 활용하여 사용자와 상호작용하는 인터랙티브 웹 경험을 구현한 포트폴리오입니다. 스크롤에 따라 움직이는 3D 오브젝트, 커스텀 마우스 커서, 그리고 ScrollTrigger를 통한 애니메이션 효과로 시각적 재미를 주었습니다.

### 기술스택

#### Frontend

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/>

<img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />

#### Deployment

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>

## ✅ 프로젝트 주안점

### 1. 인터랙티브 요소

Three.js를 활용해 스크롤과 함께 카메라 위치를 조작하여, 사용자가 스크롤을 내릴 때 랩탑이 움직이는 것처럼 보이는 인터랙티브한 요소를 추가했습니다.

또한, GSAP을 사용해 마우스 커서를 커스텀하고, ScrollTrigger를 활용해 자기소개(about) 섹션이 양쪽에서 자연스럽게 등장하는 애니메이션을 구현해 재미와 몰입감을 더했습니다.

### 2. 사용자 경험(UX)

#### 로딩페이지 개선

용량이 큰 glb파일이 늦게 로드 되어 처음 사이트에 들어왔을 때 로드되지 않는 현상이 발생했습니다. 그래서 파일이 다 로드되는 동안 로딩화면을 보여주게 만들었으나, 생각보다 로딩이 너무 짧아 깜빡이는 느낌으로 나와서 2초정도의 로딩 시간을 추가하고 숫자로 로딩 %를 표현하여 사용자 경험을 개선했습니다.

#### 링크 요소 호버 UX 개선

GSAP을 활용해 마우스 커서를 커스텀했지만, 프로젝트 요소에 마우스를 올렸을 때 링크 이동이 가능하다는 시각적 힌트가 부족했습니다. 이를 개선하기 위해, 프로젝트 요소에 커서를 올리면 마우스 커서가 커지고, 깃허브 레포지토리로 이동할 수 있다는 명확한 시각적 피드백을 추가했습니다. 이를 통해 사용자에게 직관적인 인터랙션 경험을 제공했습니다.

## 🥹 어려웠던 점

### 문제상황

three.js의 GLTF 파일(/models/laptop.glb)을 로드하는 과정에서 문제가 발생했습니다. 처음에는 useLoader를 사용했는데,

```
const glb = useLoader(GLTFLoader, "/models/laptop.glb");
```

Next.js 빌드 중에 GLTFLoader가 서버에서 실행되면서 `"TypeError: Failed to parse URL"` 오류가 발생했습니다. Next.js의 서버 사이드 렌더링(SSR) 환경에서 브라우저 전용 리소스를 처리하려다 생긴 문제였습니다.

추가로 GLTF 로드 완료 시 로딩 애니메이션을 표시했는데, 파일 로딩이 예상보다 빨리 끝나 사용자 경험이 매끄럽지 않았습니다. 최소 로딩 시간을 설정하고 싶었지만, 이를 구현하는 방법이 명확하지 않아 어려움을 겪었습니다.

### 문제 해결 과정

#### 1. SSR관련 문제 해결

- `useLoader` 대신 `useEffect`와 `useState`를 사용해 GLTF파일을 로드했습니다.
- `useEffect`를 활용하여 브라우저 환경에서만 GLTF로더가 실행되도록 수정했습니다.

#### 2. 최소 로딩 시간 구현

- GLTF파일이 로드되는 동안 로딩 애니메이션을 최소 2초 동안 유지하기 위해 Promise를 사용했습니다.
- 두가지 Promise를 작성하여 하나는 최소 로딩 시간을, 다른 하나는 GLTF 로드를 기다리도록 했습니다.
- `Promise.all`을 활용해 두 조건이 모두 충족된 후 로딩 상태를 해제 했습니다.

#### 3. 추가로 UX개선

- 로딩 중 스크롤을 비활성화하고, 로딩이 끝난 후 다시 활성화하는 기능을 추가했습니다. 이를 통해 로딩 중 의도치 않은 사용자 입력을 방지할 수 있었습니다.

### 결과

- GLTF로드와 관련한 서버 렌더링 문제를 해결해 빌드와 클라이언트 실행 모두 정상 작동하게 되었습니다.
- 최소 로딩 시간을 도입해 사용자 경험을 매끄럽게 개선했습니다.
- 로딩 중 스크롤 비활성화 기능을 추가하여 사용자 인터페이스의 완성도를 높였습니다.

### 배운 점

- **SSR과 클라이언트 환경의 차이점:** 브라우저 전용 코드와 서버 환경의 차이를 이해하고, 이를 해결하기 위해 `useEffect`와 `dynamic`을 적절히 사용하는 법을 익혔습니다.
- **Promise 활용:** 비동기 작업의 순서를 제어하고, 최소 로딩 시간과 리소스 로드를 병렬로 처리하는 방법을 배웠습니다.
- **UX 개선 방법:** 로딩 중 스크롤 비활성화 같은 작은 디테일이 사용자 경험에 큰 영향을 미친다는 점을 깨달았습니다.

