import {
	ComponentIcon,
	InertiaIcon,
	ComponentEvolvedIcon,
	NoteIcon,
} from '../components/symbols/icons';

const usages = [
	{
		toolbarButtonText: 'Create Component',
		Icon: ComponentIcon,
		title: 'To create a component',
		summary: 'component Name [Visibility (Y Axis), Maturity (X Axis)]',
		examples: [
			'component Customer [0.9, 0.5]',
			'component Cup of Tea [0.9, 0.5]',
		],
	},
	{
		toolbarButtonText: 'Inertia',
		Icon: InertiaIcon,
		title: 'Inertia - component likely to face resistance to change.',
		summary: 'component Name [Visibility (Y Axis), Maturity (X Axis)] inertia',
		examples: [
			'component Customer [0.95, 0.5] inertia',
			'component Cup of Tea [0.9, 0.5] inertia',
		],
	},
	{
		Icon: ComponentEvolvedIcon,
		title: 'To evolve a component',
		summary: 'evole Name (X Axis)',
		examples: ['evolve Customer 0.8', 'evolve Cup of Tea evolve 0.8'],
	},
	{
		title: 'To link components',
		summary: '',
		examples: ['Start Component->End Component', 'Customer->Cup of Tea'],
	},
	{
		title: 'To indicate flow',
		summary: '',
		examples: ['Start Component+<>End Component', 'Customer+<>Cup of Tea'],
	},
	{
		title: 'To set component as pipeline:',
		summary: 'pipeline Component Name [X Axis (start), X Axis (end)]',
		examples: ['pipeline Customer [0.15, 0.9]', 'pipeline Customer'],
	},
	{
		title: 'To indicate flow - past components only',
		summary: '',
		examples: ['Start Component+<End Component', 'Hot Water+<Kettle'],
	},
	{
		title: 'To indicate flow - future components only',
		summary: '',
		examples: ['Start Component+>End Component', 'Hot Water+>Kettle'],
	},
	{
		title: 'To indicate flow - with label',
		summary: '',
		examples: [
			"Start Component+'insert text'>End Component",
			"Hot Water+'$0.10'>Kettle",
		],
	},
	{
		title: 'Add notes',
		Icon: NoteIcon,
		summary: 'Add text to any part of the map',
		examples: [
			'note Note Text [0.9, 0.5]',
			'note +future development [0.9, 0.5]',
		],
	},
	{
		title: 'Stages of Evolution',
		summary: 'Change the stages of evolution labels on the map',
		examples: [
			'evolution First->Second->Third->Fourth',
			'evolution Novel->Emerging->Good->Best',
		],
	},
	{
		title: 'Y-Axis Labels',
		summary: 'Change the text of the y-axis labels',
		examples: [
			'y-axis Label->Min->Max',
			'y-axis Value Chain->Invisible->Visible',
		],
	},
	{
		title: 'Available styles',
		summary: 'Change the look and feel of a map',
		examples: ['style wardley', 'style handwritten', 'style colour'],
	},
];

export default usages;
