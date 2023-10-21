# 프로젝트 컨벤션

---

## Getting Stated

### Cloning the GitLab Repository

```
$ git clone https://github.com/HonZapHae/airport-congestion-view.git

```

### Installation

```
$ npm install

```

### Project structure (예시)

```
├── README.md                      - 리드미 파일
│
├── src/                           - 소스 폴더
│   │
│   ├── apis/                      - 서비스 API 정의 폴더
│   │
│   ├── assets/                    - Image, Font 리소스 폴더
│   │
│   ├── components/                - 공통 컴포넌트 폴더
│   │
│   ├── interfaces/                - 공통 인터페이스 정의 폴더
│   │
│   ├── pages/                     - 화면 정의 폴더
│   │
│   ├── stores/                    - MobX 스토어 정의 폴더
│   │
│   ├── tests/                      - 각종 테스트 파일 폴더
│   │
│   ├── types/                     - 각종 d.ts 정의 폴더
│   │
│   ├── utils/                     - 유틸 폴더
│   │
│   ├── App.tsx                    - 메인 앱 파일
│

```

### Branch & Commit Style

- Branch Name은 [name]/[objective]/[keyword]로 지정
    - ex) kyh/d/readme
- Commit Message는 [[objective]] [message]로 지정
    - ex) [docs] 설치 가이드 및 브랜치, 커밋 컨벤션을 포함한 README 추가
    - message는 최대한 상세하게 작성한다.

| Branch | Commit | Objective |
| --- | --- | --- |
| f | feat | 기능 추가, 라이브러리 추가, API 변경 |
| r | refactor | 코드 구조 변경 - 리팩토링 |
| b | bugfix | 버그 수정 |
| d | docs | 문서 수정 - README or guide 등 |
| t | test | 테스트 코드 작성 |
| c | config | config 및 기타 설정 파일 수정 |

### Github Merge Guide
- 각자의 branch에 commit 이후 원격 저장소에 push
- 해당 브랜치 pull request 요청