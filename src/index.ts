import  dotenv from 'dotenv';
import express, {Request, Response} from 'express';
import { Schema, SetCellInput } from './types/index';
import { createSheet, getSheetById, setCellValue } from './controllers/index';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

dotenv.config()
app.use(express.json());

app.post('/sheet',async (req:Request, res:Response) => {
  const data: Schema = req.body
  const response = await createSheet(data)
  res.status(response.status).send(response.data || response.error);
});

app.put('/cell', async (req:Request, res:Response) => {
  const data: SetCellInput = req.body
  const response = await setCellValue(data)
  res.status(response.status).send(response.data || response.error);
});

app.get('/sheet/:sheetId', async (req:Request, res:Response) => {
  const {sheetId} = req.params
  const numericSheetId = Number(sheetId);

  if (isNaN(numericSheetId)) {
    res.status(400).send({ error: 'Invalid sheetId, must be a number' });
    return
  }
  const response = await getSheetById(numericSheetId)
  res.status(response.status).send(response.data || response.error);
});

app.use("*", (_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(error.message);
  }
};

startServer();