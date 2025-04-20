require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth');
const postsRouter = require('./routes/posts');
const { PrismaClient } = require('@prisma/client');

const app = express();
const db = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

// Health check
app.get('/health', (req, res) => res.send('OK'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
