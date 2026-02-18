import { CodeIcon, Github, Globe, HomeIcon } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import PeerListSvg from '$lib/imgs/peerlist.svg';
import PeerListDarkSvg from '$lib/imgs/peerlist-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import LinkedinSvg from '$lib/imgs/linkedin.svg';
import LinkedinDarkSvg from '$lib/imgs/linkedin-dark.svg';

import TwitterSvg from '$lib/imgs/x.svg';
import TwitterDarkSvg from '$lib/imgs/x-dark.svg';

// Your resume data
export const DATA = {
	name: 'Iago Braga',
	initials: 'IB',
	url: 'https://github.com/iagobragas',
	img: '/DEV.png',
	location: 'Florianópolis, Brazil',
	locationLink: 'https://www.google.com/maps/place/Florianópolis',
	description: 'Software Engineer passionate about automation.',
	summary:
		'In 2019, I joined my high school robotics team and discovered a passion for programming through the [FIRST Robotics Competition](https://www.firstinspires.org/programs/frc/). Since then, I have pursued degrees in [Software Engineering and Accounting](/#education), combining strong technical expertise with business insight. I began [my career](/#work) as a Data Steward, specializing in data extraction and analysis, and I currently work as an RPA Developer, designing automation solutions that streamline processes and enhance operational efficiency.',
	avatarUrl: '',
	skills: [
		'Backend Development',
		'Automation',
		'API Integration',
		'SQL',
		'Virtualization',
		'Workflow Orchestration',
		'Data Processing',
		'System Design',
		'Infrastructure'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		//{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
		{ href: '#projects', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'iagofbraga@gmail.com',
		tel: '+55',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/iagobragas',
				// // icon: Icons.github,
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/iagobragas/',
				// // icon: Icons.linkedin,
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://x.com/iago_bragas',
				// // icon: Icons.x,
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			PeerList: {
				name: 'PeerList',
				url: 'https://peerlist.io/bhide',
				// // icon: Icons.x,
				icon: PeerListSvg,
				navbar: false,
				dark_icon: PeerListDarkSvg
			},
			// Youtube: {
			// 	name: 'Youtube',
			// 	url: 'https://github.com/SikandarJODD',
			// 	// // icon: Icons.youtube,
			// 	icon: Youtube,
			// 	navbar: true
			// },
			email: {
				name: 'Send Email',
				url: '#',
				// // icon: Icons.email,
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Êxito Burelo Contabilidade',
			href: 'https://exitoburelo.com.br',
			badges: [],
			location: 'Remote',
			title: 'RPA Developer',
			logoUrl: '/EXITO.jpg',
			start: 'Sep 2022',
			end: 'Present',
			description:
				'Designed and implemented automation solutions for repetitive business processes using Python and automation frameworks. Developed and maintained bots integrated with Microsoft Office, significantly improving operational efficiency, accuracy, and process security.'
		},

		{
			company: 'ABx Software Solutions',
			href: 'https://www.abx-tecnologia.com',
			badges: [],
			location: 'Florianópolis, Brazil (Hybrid)',
			title: 'Full Stack Developer',
			logoUrl: '/ABX.png',
			start: 'Jul 2023',
			end: 'Out 2025',
			description:
				'Developed scalable web applications using TypeScript and MongoDB. Designed and implemented a vehicle tracking platform, contributing to system architecture and backend development. Performed API testing and validation using Postman and collaborated on building reliable, production-ready systems.'
		},

		{
			company: 'Stocci',
			href: '',
			badges: [],
			location: 'Remote',
			title: 'Data Steward',
			logoUrl: '/STOCCI.avif',
			start: 'Mar 2024',
			end: 'Dec 2024',
			description:
				'Built and maintained data pipelines using Google Cloud Platform (BigQuery, Dataflow, and Cloud Storage). Automated data workflows in Python, ensuring data quality, governance, and continuous enrichment. Collaborated with cross-functional teams to optimize processes and reduce operational costs.'
		},
		{
			company: 'Magic Island Robotics – FRC 5800',
			href: 'https://www.instagram.com/frc5800/',
			badges: [],
			location: 'Florianópolis, Brazil',
			title: 'Firmware Developer',
			logoUrl: '/FRC5800.jpg',
			start: 'Jul 2019',
			end: 'Jul 2021',
			description:
				'Developed Java-based firmware for competitive robotics in the FIRST Robotics Competition. Implemented autonomous navigation, object manipulation, and motion control systems to solve complex real-world engineering challenges.'
		}
	],
	education: [
		{
			school: 'Estácio',
			href: 'https://estacio.br/cursos/graduacao/engenharia-de-software',
			degree: "Bachelor's Degree in Software Engineering",
			logoUrl: '/ESTACIO.jpg',
			start: '2022',
			end: '2026 (Expected)'
		},
		{
			school: 'Unisinos',
			href: 'https://ead.unisinos.br/cursos-graduacao/ciencias-contabeis',
			degree: "Bachelor's Degree in Accounting",
			logoUrl: '/UNISINOS.jpg',
			start: '2025',
			end: '2029 (Expected)'
		},
		{
			school: 'IFSC',
			href: 'https://www.ifsc.edu.br/web/campus-florianopolis/tecnicos-integrados/-/visualizar/eletrotecnica/Campus-Florianopolis/76/113/J3XdHVPxGRNW',
			degree: 'Technical Degree in Electrotechnics',
			logoUrl: '/IFSC.png',
			start: '2018',
			end: '2022'
		}
	],
	projects: [
		{
			title: 'Clone TabNews',
			href: 'https://clone-tabnews.iagobragas.com.br',
			dates: 'Sep 2025 - Present',
			active: true,
			description:
				'A production-ready full-stack application inspired by TabNews. Designed to explore clean architecture, database migrations, authentication, automated testing, and containerized deployments.',
			technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Jest', 'Docker'],
			links: [
				{
					type: 'Website',
					href: 'https://clone-tabnews.iagobragas.com.br',
					icon: Globe
				},
				{
					type: 'Source',
					href: 'https://github.com/iagobragas/clone-tabnews',
					icon: Github
				}
			],
			image: '/clone-tabnews.png',
			video: ''
		}
	]
	/*
	hackathons: [
		{
			title: "Make School's Student App Competition 2017",
			dates: 'May 19th - 21st, 2017',
			location: 'International',
			description: 'Improved PocketDoc and submitted to online competition',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
			win: 'Top 10 Finalist | Honourable Mention',
			links: [
				{
					title: 'Medium Article',
					icon: Github,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a'
				},
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: Youtube,
					// icon: <Icons.youtube className="h-4 w-4" />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: Github,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'Waterloo Equithon',
			dates: 'May 5th - 7th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: Youtube,
					// icon: <Icons.youtube className="h-4 w-4" />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		}
	]*/
};
