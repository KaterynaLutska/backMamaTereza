export interface Project {
	fundId: number;
	id: number;
	name: string;
	fundraisingGoal: number;
	purpose: string;
	collected: number
	closingDate: string
}

export interface Fund {
  name: string;
  id: number;
  capital: number;
  foundedYear: number;
	projects: Project [];
	info: string;
	imageURL: string
	slug: string
}
 
 export const funds: Fund[] = [
	{
		"name": "Defend Our Nation",
		"id": 1,
		"capital": 4000000,
		 "foundedYear": 2018,
		"slug": "defend-our-nation",
		"projects": [
			{
				"fundId": 1,
				"id": 11,
				"name": "Equipment Purchase",
				"fundraisingGoal": 7000000,
				"purpose": "Purchasing advanced military equipment",
				"collected": 5000000,
				"closingDate": "2024-12-31"
			},
			{
				"fundId": 1,
				"id": 12,
				"name": "Technology Development",
				"fundraisingGoal": 3000000,
				"purpose": "Developing new military technologies",
				"collected": 2000000,
				"closingDate": "2024-09-31"
			},
			{
				"fundId": 1,
				"id": 13,
				"name": "Training Programs",
				"fundraisingGoal": 2000000,
				"purpose": "Training programs for new recruits",
				"collected": 1000000,
				"closingDate": "2024-08-20"
			}
		],
		"info": "Uses state-of-the-art technology for fund allocation.",
		"imageURL": "https://static.ukrinform.com/photos/2024_02/thumb_files/630_360_1708795836-349.jpg"
	},
	{
		"name": "Heroes Home Coming",
		"id": 2,
		"capital": 1500000,
		"foundedYear": 2020,
		"slug": "heroes-home-coming",
		"projects": [
			{
				"fundId": 2,
				"id": 21,
				"name": "Reintegration Support",
				"fundraisingGoal": 1500000,
				"purpose": "Assisting with the reintegration of soldiers into civilian life",
				"collected": 800000,
				"closingDate": "2024-09-17"
			},
			{
				"fundId": 2,
				"id": 22,
				"name": "Job Placement",
				"fundraisingGoal": 1000000,
				"purpose": "Job placement services for veterans",
				"collected": 600000,
				"closingDate": "2024-09-23"
			},
			{
				"fundId": 2,
				"id": 23,
				"name": "Vocational Training",
				"fundraisingGoal": 500000,
				"purpose": "Providing vocational training for veterans",
				"collected": 300000,
				"closingDate": "2024-10-17"
			}
		],
		"info": "Offers job placement services and vocational training.",
		"imageURL": "https://static.wixstatic.com/media/cf153e_34b7e47a2f2c4c3980f38eadcce0a513~mv2.png/v1/fill/w_1036,h_584,fp_0.50_0.50,q_90,enc_auto/cf153e_34b7e47a2f2c4c3980f38eadcce0a513~mv2.png"
	},
	{
		"name": "Military Aid Foundation",
		"capital": 2000000,
		"foundedYear": 2015,
		"id": 3,
		"slug": "military-aid-foundation",
		"projects": [
			{
				"fundId": 3,
				"id": 31,
				"name": "Medical Supplies",
				"fundraisingGoal": 2000000,
				"purpose": "Providing medical supplies to field hospitals",
				"collected": 1200000,
					"closingDate": "2024-11-17"
			},
			{
				"fundId": 3,
				"id": 32,
				"name": "Mental Health",
				"fundraisingGoal": 1500000,
				"purpose": "Counseling services for soldiers",
				"collected": 900000,
					"closingDate": "2024-12-17"
			},
			{
				"fundId": 3,
				"id": 33,
				"name": "Rehabilitation Centers",
				"fundraisingGoal": 1500000,
				"purpose": "Building rehabilitation centers for injured soldiers",
				"collected": 700000,
				"closingDate": "2024-12-15"
			}
		],
		"info": "Partnered with over 50 hospitals worldwide.",
		"imageURL": "https://war.ukraine.ua/wp-content/uploads/2022/03/116__A-couple-of-Ukrainian-defenders-are-holding-hands-in-Kyiv-17-March-2022-By-Sergei-Supinsky.jpg"
	},
	{
		"name": "Support Our Troops",
		"id": 4,
		"capital": 5000000,
		"foundedYear": 2010,
		"slug": "support-our-troops",
		"projects": [
			{
				"fundId": 4,
				"id": 41,
				"name": "Frontline Supplies",
				"fundraisingGoal": 4000000,
				"purpose": "Providing essential supplies to troops on the front lines",
				"collected": 2500000,
					"closingDate": "2024-11-17"
			},
			{
				"fundId": 4,
				"id": 42,
				"name": "Veterans Housing",
				"fundraisingGoal": 3000000,
				"purpose": "Building housing for homeless veterans",
				"collected": 1500000,
				"closingDate": "2024-10-20"
	
			},
			{
				"fundId": 4,
				"id": 43,
				"name": "Family Support",
				"fundraisingGoal": 3000000,
				"purpose": "Financial aid for families of fallen soldiers",
				"collected": 2000000,
							"closingDate": "2024-10-10"
			}
		],
		"info": "This fund was started by a group of veterans.",
		"imageURL": "https://www.knuba.edu.ua/wp-content/uploads/2022/12/%D0%B2%D0%B8%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0.jpg"
	},
	{
		"name": "Warrior Relief Fund",
		"id": 5,
		"capital": 3000000,
		"foundedYear": 2012,
		"slug": "warrior-relief-rund",
		"projects": [
			{
				"fundId": 5,
				"id": 51,
				"name": "Mental Health Support",
				"fundraisingGoal": 2000000,
				"purpose": "Providing mental health support for veterans",
				"collected": 1500000,
				"closingDate": "2024-09-29"
			},
			{
				"fundId": 5,
				"id": 52,
				"name": "Family Counseling",
				"fundraisingGoal": 1000000,
				"purpose": "Family counseling services for military families",
				"collected": 500000,
							"closingDate": "2024-10-15"
			},
			{
				"fundId": 5,
				"id": 53,
				"name": "Crisis Intervention",
				"fundraisingGoal": 1000000,
				"purpose": "Crisis intervention services for veterans in need",
				"collected": 700000,
							"closingDate": "2024-10-30"
			}
		],
		"info": "Provides free counseling services.",
		"imageURL": "https://24tv.ua/resources/photos/news/202212/2222082.jpg?v=1671636134000&w=768&h=432&fit=cover&output=webp&q=70"
	}
];

export const topProjects = [
	{
    fundId: 1,
    id: 12,
    name: "Technology Development",
    fundraisingGoal: 3000000,
    purpose: "Developing new military technologies",
    collected: 2000000
  },
  {
    fundId: 2,
    id: 23,
    name: "Vocational Training",
    fundraisingGoal: 500000,
    purpose: "Providing vocational training for veterans",
    collected: 300000
  },
  {
    fundId: 3,
    id: 31,
    name: "Medical Supplies",
    fundraisingGoal: 2000000,
    purpose: "Providing medical supplies to field hospitals",
    collected: 1200000
  },
  {
    fundId: 4,
    id: 42,
    name: "Veterans Housing",
    fundraisingGoal: 3000000,
    purpose: "Building housing for homeless veterans",
    collected: 1500000
  }
]



