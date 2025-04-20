const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');
const { PrismaClient } = require('@prisma/client');
const { uploadToS3 } = require('../utils/s3');
const prisma = new PrismaClient();
const router = express.Router();
const upload = multer();

router.post('/', auth, upload.single('media'), async (req, res) => {
  const { content, isPublic } = req.body;
  let mediaUrl;
  if (req.file) mediaUrl = await uploadToS3(req.file);
  const post = await prisma.post.create({
    data: { content, mediaUrl, isPublic: isPublic === 'true', authorId: req.userId },
  });
  res.json(post);
});

router.get('/', auth, async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { authorId: req.userId },
    orderBy: { createdAt: 'desc' },
  });
  res.json(posts);
});

module.exports = router;
