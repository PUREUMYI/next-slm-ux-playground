이 프로젝트는 NextSLM의 Frontend 개발 진행을 위한 Playground 입니다.

- Next.js + Tailwind CSS + shadcn/ui로 구성되어 있기 때문에 Codespace 개발이 가능

## Installation

### i) Git Clone

```shell
$ git clone https://github.com/miracom-genai/next-slm-ux-playground
$ cd next-slm-ux-playground
```

### i) Install Module

```shell
$ npm install
# or
$ yarn install
```

## Getting Started

개발 환경으로 서버 실행을 위해서는 다음의 명령으로 실행합니다.

```bash
npm run dev
# or
yarn dev
```

## API Documentation

### # GET /api/histories

> 메시지 이력을 조회

**Query Parameters:**

- `message` (optional): message 검색조건

**Response:**

- `200`: 결과에 대응하는 `SlmMessageHistory` Array 객체를 반환

```json
[
  {
    "id": 1,
    "system": "This is System messages...",
    "messages": [
      {
        "role": "human",
        "message": "Hello World!!"
      },
      {
        "role": "ai",
        "message": "Wow!!!!"
      }
    ],
    "settings": {
      "model": "gpt-4o",
      "temperature": 0.5,
      "maxLength": 4096,
      "topP": 1
    },
    "ragId": 1,
    "updatedDate": "20240715220140"
  },
  ...
]
```

### # POST /api/histories

> 새로운 메시지 이력을 생성

**Request Body:**

```json
{
  "system": "This is System messages...",
  "messages": [
    {
      "role": "human",
      "message": "Hello World!!"
    },
    {
      "role": "ai",
      "message": "Wow!!!!"
    }
  ],
  "settings": {
    "model": "gpt-4o",
    "temperature": 0.5,
    "maxLength": 4096,
    "topP": 1
  },
  "ragId": 1
}
```

**Responses:**

- `201`: 생성된 `SlmMessageHistory` 객체를 반환.

### # GET /api/history

> id에 대응하는 메시지 객체를 반환

**Query Parameters:**

- `id` (required): 메시지 객체의 ID

**Response:**

- `200`: `SlmMessageHistory` 객체를 반환

```json
{
  "id": 1,
  "system": "This is System messages...",
  "messages": [
    {
      "role": "human",
      "message": "Hello World!!"
    },
    {
      "role": "ai",
      "message": "Wow!!!!"
    }
  ],
  "settings": {
    "model": "gpt-4o",
    "temperature": 0.5,
    "maxLength": 4096,
    "topP": 1
  },
  "ragId": 1,
  "updatedDate": "20240715220752"
}
```

- `404`: `id`에 대응하는 메시지가 없는 경우
- `400`: `id`가 전달되지 않았을 경우

### # PUT /api/history

> id에 대응하는 메시지 이력을 수정

**Request Body:**

```json
{
  "id": 2,
  "messages": [
    {
      "role": "human",
      "message": "Hello World!! _2"
    },
    {
      "role": "ai",
      "message": "Wow!!!! _2"
    }
  ]
}
```

**Responses:**

- `201`: 수정된 `SlmMessageHistory` 객체를 반환.

```json
{
  "id": 2,
  "system": "This is System messages...",
  "messages": [
    {
      "role": "human",
      "message": "Hello World!! _2"
    },
    {
      "role": "ai",
      "message": "Wow!!!! _2"
    }
  ],
  "settings": {
    "model": "gpt-4o",
    "temperature": 0.5,
    "maxLength": 4096,
    "topP": 1
  },
  "ragId": 1,
  "updatedDate": "20240715221142"
}
```

- `404`: `id`에 대응하는 메시지가 없는 경우
- `400`: `id` 및 `messages`가 전달되지 않았을 경우

### # DELETE /api/history

> id에 대응하는 메시지 이력을 삭제

**Query Parameters:**

- `id` (required): 메시지 객체의 ID

**Responses:**

- `204`: 정상적으로 삭제됨
- `404`: `id`에 대응하는 메시지가 없는 경우
- `400`: `id`가 전달되지 않았을 경우

### # GET /api/github

> GitHub 정보를 반환

**Responses:**

- `200`: `GithubInfo` 객체를 반환

```json
{
  "token": "ghtk-1234567890",
  "url": "https://github.com",
  "updatedDate": "20240715205141"
}
```

### # PUT /api/github

> GitHub 정보를 업데이트

**Request Body**

```json
{
  "token": "ghtk-1234567890",
  "url": "https://github.com"
}
```

**Responses:**

- `201`: 수정된 `GithubInfo` 객체를 반환

```json
{
  "token": "ghtk-1234567890",
  "url": "https://github.com",
  "updatedDate": "20240715205215"
}
```

- `400`: `token`, `url`이 전달되지 않았을 경우

### # GET /api/rags

> RAG 전체 목록을 반환

**Responses:**

```json
[
  {
    "id": 1,
    "owner": "miracom-genai",
    "repo": "next-slm-rag-playground",
    "ragTargets": [],
    "updatedDate": "20240715225038"
  }
]
```

### # GET /api/rag

> id에 대응하는 RAG를 반환

**Query Parameters:**

- `id` (required): Rag 객체의 ID

**Responses:**

- `200`: id에 대응하는 Rag 객체를 반환

```json
{
  "id": 1,
  "owner": "miracom-genai",
  "repo": "next-slm-rag-playground",
  "ragTargets": [],
  "updatedDate": "20240715225038"
}
```

- `404`: `id`에 대응하는 Rag 객체가 없는 경우
- `400`: `id`가 전달되지 않았을 경우

### # POST /api/rag

> Rag 객체를 생성

**Request Body:**

```json
{
  "owner": "miracom-genai",
  "repo": "next-slm-rag-playground"
}
```

**Responses:**

- `201`: 생성된 Rag 객체를 반환

```json
{
  "id": 1,
  "owner": "miracom-genai",
  "repo": "next-slm-rag-playground",
  "ragTargets": [],
  "updatedDate": "20240715225038"
}
```

- `400`: `owner` 또는 `repo`가 전달되지 않았을 경우

### # POST /api/ragTarget

> Rag 객체의 RagTarget을 추가

**Request Body:**

```json
{
  "id": 1,
  "ragTarget": {
    "directory": "lib",
    "fileType": "py"
  }
}
```

**Responses:**

- `201`: 추가된 RagTarget 객체를 반환

```json
{
  "id": 1,
  "directory": "lib",
  "fileType": "py",
  "files": 748
}
```

- `404`: `id`에 대응하는 Rag가 존재하지 않을 경우
- `400`: `id` 또는 `ragTarget`이 전달되지 않았을 경우

### # DELETE /api/ragTarget

> Rag 객체의 RagTarget을 삭제

**Query Parameters:**

- `ragId` (required): Rag의 id
- `ragTargetId` (required): RagTarget의 id

**Responses:**

- `204`: RagTarget이 정상적으로 삭제됨
- `404`: `ragId` 또는 `ragTargetId`에 대응하는 객체가 존재하지 않을 경우
- `400`: `ragId` 또는 `ragTargetId`이 전달되지 않았을 경우
