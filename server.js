import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { contactRouter } from './routes/contact.routes.js';
import { userRouter } from './routes/user.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api/contacts', contactRouter);
app.use('/api/users', userRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my Portfolio application');
});

// MongoDB connection and server start
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection failed:', err.message);
});

