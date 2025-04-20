const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

async function uploadToS3(file) {
  const key = `media/${uuidv4()}-${file.originalname}`;
  await s3.putObject({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  }).promise();
  return `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${key}`;
}

module.exports = { uploadToS3 };
