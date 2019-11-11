import { ChatOption, Configure, Github, Link } from "grommet-icons";

/** A project I've worked on. */
interface Project {
	/** Title of the project. */
	title: string;
	/** Short description of the project. */
	description: string;
	/** A URL for the project. */
	url?: string;
	/** An icon to display alongside the title. */
	icon: JSX.Element;
}

/** Projects that I've worked on. */
const projects: Project[] = [
	{
		title: "Zero Width Shortener",
		description:
			"A URL shortener that uses zero-width characters. Built on Firebase serverless functions. 600+ GitHub stars and over 30,000 URLs shortened.",
		url: "https://zws.im",
		icon: <Link />
	},
	{
		title: "Dice",
		description: "A general purpose utility bot for the Discord chat platform.",
		url: "https://dice.js.org",
		icon: <ChatOption />
	},
	{
		title: "Team 581",
		description:
			"An student-centered robotics club that participates in the FIRST Robotics Challenge.",
		url: "https://team581.club",
		icon: <Configure />
	},
	{
		title: "Various open source contributions",
		description: "I'm very passionate about giving back to the OSS community, and as such nearly all of my work is open-sourced on GitHub.",
		url: "https://github.com/pizzafox",
		icon: <Github />
	}
];

export default projects;
