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

> Retrieves a list of histories. Optionally filters posts by message.

**Query Parameters:**

- `message` (optional): The message text to filter by.

**Response:**

- `200`: Returns an array of `SlmMessageHistory` objects.

```json
[
  {
    "id": 1,
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
    "creationDate": "20240712214350"
  },
  ...
]
```

### # POST /api/histories

> Creates a new history.

**Request Body:**

```json
{
  "messages": [
    {
      "role": "human",
      "message": "Hello World!!"
    },
    {
      "role": "ai",
      "message": "Wow!!!!"
    }
  ]
}
```

**Responses:**

- `201`: Returns the created `SlmMessageHistory` objects.

```json
[
  {
    "id": 1,
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
    "creationDate": "20240712214350"
  },
  ...
}
```

### # GET /api/history

> Retrieve a history

**Query Parameters:**

- `id` (required): The message text to filter by.

**Response:**

- `200`: Returns a `SlmMessageHistory` objects.

```json
{
  "id": 1,
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
  "creationDate": "20240712214350"
}
```
