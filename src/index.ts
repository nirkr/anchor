import  dotenv from 'dotenv';
import express, {Request, Response} from 'express';
import { Schema, SetCellInput } from './types/index';
import { createSheet, getSheetById, setCellValue } from './controllers/index';

const app = express();
const port = 3000;

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
  const response = await getSheetById(sheetId)
  res.status(response.status).send(response.data || response.error);
});

app.use("*", (_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});