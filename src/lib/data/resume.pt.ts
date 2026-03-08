import { CodeIcon, Github, Globe, HomeIcon } from 'lucide-svelte';
// Ícones da Navbar
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

// Seus dados de currículo
export const DATA = {
	name: 'Iago Braga',
	initials: 'IB',
	url: 'https://github.com/iagobragas',
	img: '/DEV.png',
	locale: 'pt_BR',
	location: 'Florianópolis, Brasil',
	locationLink: 'https://www.google.com/maps/place/Florianópolis',
	description: 'Engenheiro de Software apaixonado por automação.',
	summary:
		'Em 2019, entrei para a equipe de robótica da minha escola e descobri minha paixão por programação através da [FIRST Robotics Competition](https://www.firstinspires.org/programs/frc/). Desde então, busquei graduação em [Engenharia de Software e Ciências Contábeis](/#education), combinando forte conhecimento técnico com visão de negócios. Iniciei [minha carreira](/#work) como Data Steward, com foco em extração e análise de dados, e atualmente atuo como Desenvolvedor RPA, projetando soluções de automação que otimizam processos e aumentam a eficiência operacional.',
	avatarUrl: '',
	skills: [
		'Desenvolvimento Backend',
		'Automação',
		'Integração de APIs',
		'SQL',
		'Virtualização',
		'Orquestração de Workflows',
		'Processamento de Dados',
		'Arquitetura de Sistemas',
		'Infraestrutura'
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Início' },
		{ href: '#projects', icon: CodeIcon, label: 'Projetos' }
	],
	contact: {
		email: 'iagofbraga@gmail.com',
		tel: '+55',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/iagobragas',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			LinkedIn: {
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/iagobragas/',
				icon: LinkedinSvg,
				navbar: true,
				dark_icon: LinkedinDarkSvg
			},
			X: {
				name: 'X',
				url: 'https://x.com/iago_bragas',
				icon: TwitterSvg,
				navbar: true,
				dark_icon: TwitterDarkSvg
			},
			PeerList: {
				name: 'PeerList',
				url: 'https://peerlist.io/bhide',
				icon: PeerListSvg,
				navbar: false,
				dark_icon: PeerListDarkSvg
			},
			email: {
				name: 'Enviar Email',
				url: '#',
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
			location: 'Remoto',
			title: 'Desenvolvedor RPA',
			logoUrl: '/EXITO.jpg',
			start: 'Set 2022',
			end: 'Presente',
			description:
				'Projetei e implementei soluções de automação para processos empresariais repetitivos utilizando Python e frameworks de automação. Desenvolvi e mantive bots integrados ao Microsoft Office, melhorando significativamente a eficiência operacional, precisão e segurança dos processos.'
		},
		{
			company: 'ABx Software Solutions',
			href: 'https://www.abx-tecnologia.com',
			badges: [],
			location: 'Florianópolis, Brasil (Híbrido)',
			title: 'Desenvolvedor Full Stack',
			logoUrl: '/ABX.png',
			start: 'Jul 2023',
			end: 'Out 2025',
			description:
				'Desenvolvi aplicações web escaláveis utilizando TypeScript e MongoDB. Projetei e implementei uma plataforma de rastreamento veicular, contribuindo para a arquitetura do sistema e desenvolvimento backend. Realizei testes e validações de API utilizando Postman e colaborei na construção de sistemas confiáveis e prontos para produção.'
		},
		{
			company: 'Stocci',
			href: '',
			badges: [],
			location: 'Remoto',
			title: 'Data Steward',
			logoUrl: '/STOCCI.avif',
			start: 'Mar 2024',
			end: 'Dez 2024',
			description:
				'Construí e mantive pipelines de dados utilizando Google Cloud Platform (BigQuery, Dataflow e Cloud Storage). Automatizei fluxos de dados em Python, garantindo qualidade, governança e enriquecimento contínuo dos dados. Colaborei com equipes multidisciplinares para otimizar processos e reduzir custos operacionais.'
		},
		{
			company: 'Magic Island Robotics – FRC 5800',
			href: 'https://www.instagram.com/frc5800/',
			badges: [],
			location: 'Florianópolis, Brasil',
			title: 'Desenvolvedor de Firmware',
			logoUrl: '/FRC5800.jpg',
			start: 'Jul 2019',
			end: 'Jul 2021',
			description:
				'Desenvolvi firmware em Java para robótica competitiva na FIRST Robotics Competition. Implementei navegação autônoma, manipulação de objetos e sistemas de controle de movimento para resolver desafios complexos de engenharia no mundo real.'
		}
	],
	education: [
		{
			school: 'Estácio',
			href: 'https://estacio.br/cursos/graduacao/engenharia-de-software',
			degree: 'Bacharelado em Engenharia de Software',
			logoUrl: '/ESTACIO.jpg',
			start: '2022',
			end: '2026 (Previsão)'
		},
		{
			school: 'Unisinos',
			href: 'https://ead.unisinos.br/cursos-graduacao/ciencias-contabeis',
			degree: 'Bacharelado em Ciências Contábeis',
			logoUrl: '/UNISINOS.jpg',
			start: '2025',
			end: '2029 (Previsão)'
		},
		{
			school: 'IFSC',
			href: 'https://www.ifsc.edu.br/web/campus-florianopolis/tecnicos-integrados/-/visualizar/eletrotecnica/Campus-Florianopolis/76/113/J3XdHVPxGRNW',
			degree: 'Curso Técnico em Eletrotécnica',
			logoUrl: '/IFSC.png',
			start: '2018',
			end: '2022'
		}
	],
	projects: [
		{
			title: 'Clone TabNews',
			href: 'https://clone-tabnews.iagobragas.com.br',
			dates: 'Set 2025 - Presente',
			active: true,
			description:
				'Aplicação full-stack pronta para produção inspirada no TabNews. Projetada para explorar arquitetura limpa, migrações de banco de dados, autenticação, testes automatizados e deploys containerizados.',
			technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Jest', 'Docker'],
			links: [
				{
					type: 'Website',
					href: 'https://clone-tabnews.iagobragas.com.br',
					icon: Globe
				},
				{
					type: 'Código Fonte',
					href: 'https://github.com/iagobragas/clone-tabnews',
					icon: Github
				}
			],
			image: '/clone-tabnews.png',
			video: ''
		}
	]
};
