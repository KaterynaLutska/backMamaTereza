import { funds, topProjects } from './default-data'; 
import { Request, Response } from 'express';

export function getAllFunds (req: Request, res: Response) {
	res.json(funds);
}

export function getFundById (req: Request, res: Response) {
	const {id} = req.params

  const fund = funds.find(fund => fund.id === +id);

  if (fund) {
    res.json(fund);
  } else {
    res.status(404).json({ message: 'Fund not found' });
  }
}

export function getTopProjects (req: Request, res: Response) {
	res.json(topProjects);
}

export function changeProjectByIdInfo(req: Request, res: Response) {
	const {id} = req.params
	const { collected } = req.body;


	const allProjects = funds.flatMap(fund => fund.projects);
	
	const project = allProjects.find(project => project.id === +id); 

	if (!project) {
		const message = { message: 'Project not found' }
			 res.status(404).json(message);
	}

	if (collected !== undefined && project) {
			project.collected = collected;
	}

	 res.json({ message: 'Project updated successfully', project });
}

export function getAllProjects(req: Request, res: Response) {
  const allProjects = funds.flatMap(fund => fund.projects);
  res.json(allProjects);
}

export function getSOSProjects(req: Request, res: Response) {
	const allProjects = funds.flatMap(fund => fund.projects);
	const  date  = req.query.date as unknown as Date;

	if (date) {
			const queryDate = new Date(date);

			if (isNaN(queryDate.getTime())) {
					 res.status(400).json({ message: "Invalid date format" });
			}

			const filteredProjects = allProjects
					.filter(project => new Date(project.closingDate) > queryDate)
					.sort((a, b) => new Date(a.closingDate).getTime() - new Date(b.closingDate).getTime())
					.slice(0, 5);

			 res.json(filteredProjects);
	}

	 res.json(allProjects);
}
