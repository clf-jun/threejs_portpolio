# Threejs Portfolio web
![threejs](https://user-images.githubusercontent.com/83111488/235297588-57a9fa23-3bdd-4180-a385-282e7c090f41.JPG)

- 제작에 도움을 준 영상: https://www.youtube.com/watch?v=0fYi8SGA20k
- 클론 코딩 및 three js의 기본 활용법 학습이 주 목적
- Vercel 배포 주소: https://threejs-portpolio-mliw.vercel.app/
- (현재 Vercel 모바일 접속시 gltf파일이 랜더링 되지 않는 오류가 있습니다.)

## 1.기술스택
- 라이브러리: 리액트 18.2v
- 디자인: tailwind css, three, postcss
- 빌드: vite 4.2.0v
- 배포: Vercel

## 2.주요기능
- gltf 파일 렌더링 및 객체 좌우 회전
- tailwind css 기반 반응형 지원 (현재 3d모델 렌더링 오류), 이미지 틸트
- react-three를 제외한 사실상 단순 자료 표시용 static web

## 3.로컬 설치 및 동작
- git clone 혹은 다운로드 압축풀기 후
- vscode 해당경로 terminal에서 npm install --legacy-peer-deps 입력 후 엔터 (몇몇 모듈의 버전문제로)
- 모듈 설치 이후 npm run dev 입력, url ctrl+클릭