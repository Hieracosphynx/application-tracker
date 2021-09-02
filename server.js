import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import UserRouter from './routes/user';
import AuthRouter from './routes/auth';
import AppRouter from './routes/applications';
const app = express();

// Connect to database
connectDB();

// Cors policy
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Home Page');
});

// Routes
app.use('/api/auth', AuthRouter);
app.use('/api/users', UserRouter);
app.use('/api/applications', AppRouter);

// Connect to port
const PORT = 5000;
app.listen(PORT, () => console.log('Server Running'));
