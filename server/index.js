import express, { json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './db/db.js';
import logger from './middleware/logger.js';
import eventRoutes from './routes/eventRoutes.js';

import dotenv from "dotenv"

dotenv.config()

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());                    // Enable Cross-Origin Resource Sharing
app.use(json());           // Parse incoming JSON
app.use(urlencoded({ extended: true })); // Parse URL-encoded data
app.use(morgan('dev'));            // Log requests
app.use(helmet());                 // Secure headers
app.use(logger);                   // Custom logger middleware
// Routes


app.use('/api/events', eventRoutes);
// Root Route
app.get('/', (req, res) => res.send('Calendar Event API is running 🚀'));

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});