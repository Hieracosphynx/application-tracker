import express from 'express';
import UserRouter from './routes/user';
import AuthRouter from './routes/auth';
import AppRouter from './routes/applications';
const app = express();

// Connect to database

// Init Middleware
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
