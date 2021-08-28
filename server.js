import express from 'express';
import UserRouter from './routes/user';
const app = express();

app.use('/', (req, res) => {
  res.send('Home Page');
});

app.use('/api/users', UserRouter);

const PORT = 5000;
app.listen(PORT, () => console.log('Server Running'));
