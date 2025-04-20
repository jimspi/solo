# Solo

A minimalist one-way microblog where "I speak, world listens."

## Setup

1. **Backend**
   ```bash
   cd backend
   npm install
   npx prisma migrate dev
   npm run dev
   ```

2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Configure `.env` files as needed.

4. Deploy with GitHub Actions → Vercel (frontend) & Heroku/AWS (backend).
