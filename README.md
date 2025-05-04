# AI Business Name Generator

A full-stack application that generates creative and unique business names based on your industry, keywords, and preferences.

## Features

- Industry-specific business name generation
- Multiple naming styles: Modern, Classic, Playful, Technical, Abstract
- Customizable name length
- Keyword integration
- Descriptions for each generated name

## Tech Stack

- **Frontend**:
  - Next.js (using App Router)
  - React
  - Tailwind CSS
  - Axios for API calls

- **Backend**:
  - Express.js
  - Custom name generation algorithm

## Project Structure

The project consists of two main parts:

1. `next-business-name-generator/` - Frontend Next.js application
2. `backend/` - Express.js backend API

## Installation and Setup

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory (optional):
   ```
   PORT=5000
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The API will be running at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd next-business-name-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the frontend directory:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be running at `http://localhost:3000`.

## API Endpoints

### `POST /api/generate-names`

Generates business names based on provided parameters.

**Request Body:**

```json
{
  "industry": "technology",
  "keywords": "innovative, smart",
  "style": "modern",
  "nameLength": "medium",
  "count": 5
}
```

**Response:**

```json
[
  {
    "businessName": "Quantum Digital Solutions",
    "description": "A modern, innovative name that represents excellence in the technology industry.",
    "rating": 4.8
  },
  // Additional names...
]
```

## Name Generation Logic

The business name generator uses a sophisticated algorithm that:

1. Maps the user's industry to industry-specific word sets
2. Incorporates user-provided keywords
3. Applies style-specific prefixes, suffixes, and adjectives
4. Uses different generation strategies based on desired name length
5. Ensures uniqueness and quality of generated names
6. Creates relevant descriptions for each name

## Deployment

### Backend Deployment

The Express.js backend can be deployed to platforms like Heroku, Render, or AWS:

```bash
cd backend
npm run start
```

### Frontend Deployment

The Next.js frontend can be deployed to Vercel, Netlify, or similar platforms:

```bash
cd next-business-name-generator
npm run build
npm run start
```

## License

MIT