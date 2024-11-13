import express from 'express';
import cors from 'cors';
import { FUNDS_URL, FUNDS_ID_URL, PROJECT_TOP_URL, PROJECTS_URL, PROJECT_ID_URL } from './constants';
import { changeProjectByIdInfo, getAllFunds, getAllProjects, getFundById, getSOSProjects, getTopProjects } from './services';


const app = express()
app.use(cors({
  origin: 'http://localhost:3000'
}));

const PORT = 3333

export const funds = app.get(FUNDS_URL, getAllFunds)

app.use(express.json());

app.get(FUNDS_URL, getAllFunds) 

app.get(FUNDS_ID_URL, getFundById); 

app.get(PROJECTS_URL, getAllProjects) 

app.get(PROJECT_TOP_URL, getTopProjects) 

app.put(PROJECT_ID_URL, changeProjectByIdInfo) 

app.get(PROJECTS_URL, getSOSProjects) 

app.listen(PORT, ()=> {
	console.log(`Server is running on http://localhost:${PORT}`);
})
