// import image for personal_and_professional_growth
import personal_and_professional_growth from "../assets/services/personal_and_professional_growth/personal_and_professional_growth.png";
import personal_and_professional_growth_hover from "../assets/services/personal_and_professional_growth/personal_and_professional_growth_hover.png";
import personal_and_professional_growth_banner from "../assets/services/personal_and_professional_growth/personal_and_professional_growth_banner.png";
import personal_and_professional_growth_details from "../assets/services/personal_and_professional_growth/personal_and_professional_growth_details.png";

// import image for tough_times
import tough_times from "../assets/services/tough_times/tough_times.png";
import tough_times_hover from "../assets/services/tough_times/tough_times_hover.png";
import tough_times_banner from "../assets/services/tough_times/tough_times_banner.png";
import tough_times_details from "../assets/services/tough_times/tough_times_details.jpg";

// import image for Teenage Mentoring
import teenage_mentoring from "../assets/services/teenage_mentoring/teenage_mentoring.png";
import teenage_mentoring_hover from "../assets/services/teenage_mentoring/teenage_mentoring_hover.png";
import teenage_mentoring_banner from "../assets/services/teenage_mentoring/teenage_mentoring_banner.png";
import teenage_mentoring_details from "../assets/services/teenage_mentoring/teenage_mentoring_details.png";

// import image for Team Building Workshops
import team_building_workshop from "../assets/services/team_building_workshop/team_building_workshop.png";
import team_building_workshop_hover from "../assets/services/team_building_workshop/team_building_workshop_hover.png";
import team_building_workshop_details from "../assets/services/team_building_workshop/team_building_workshop_details.png";
// import team_building_workshop_banner from "../assets/services/team_building_workshop";

// import image for relationship_coaching
import relationship_coaching from "../assets/services/relationship_coaching/relationship_coaching.png";
import relationship_coaching_hover from "../assets/services/relationship_coaching/relationship_coaching_hover.png";
import relationship_coaching_banner from "../assets/services/relationship_coaching/relationship_coaching_banner.png";
import relationship_coaching_details from "../assets/services/relationship_coaching/relationship_coaching_details.png";

// import image for talks
import talks from "../assets/services/talks/talk.png";
import talks_hover from "../assets/services/talks/talks_hover.png";
import talks_banner from "../assets/services/talks/talks_banner.png";
import talks_details from "../assets/services/talks/talks_details.jpeg";

// import images for testimonials
import Testimonial1 from "../assets/home/Testimonials/testimonial_1.png";
import Testimonial2 from "../assets/home/Testimonials/testimonial_2.png";
import Testimonial3 from "../assets/home/Testimonials/testimonial_3.png";
import Testimonial4 from "../assets/home/Testimonials/testimonial_4.png";
import Testimonial5 from "../assets/home/Testimonials/testimonial_5.png";

const services = [
	{
		id: "personal_and_professional_growth",
		title: "Personal and Professional Growth",
		img: personal_and_professional_growth,
		hover_img: personal_and_professional_growth_hover,
		banner_img: personal_and_professional_growth_banner,
		details_img: personal_and_professional_growth_details,
		color: "#75A257",
		description:
			"Need some help with finding your path? We can help you make a plan for personal and professional aspects of your life and equip you with the skills and techniques to get you there.",
		priceList: {
			packs: [
				{
					pack: ["Per Session: ", ["£85", "£65", "from £25"]],
				},
				{
					pack: ["4-Session Pack: ", ["£300", "£200", "from £90"]],
				},
			],
			chooseForm: [
				"Choose From",
				[
					"Plan your Path",
					"Self-Confident",
					"Identity",
					"Embracing your Diversity",
					"Powerful Communication",
					"Excellent Presentations",
					"Learning another Language",
					"Coaching Skills for Team Leaders",
					"Negotiation",
				],
			],
		},
		heading: "",
		para1:
			"There are many skills and techniques needed in our lives which often don't get taught. Some people have those skills naturally or were lucky enough to have people in their life to show them. But for many of us, this never happened.",
		para2: [
			"At Thought-Bubble, we can help you develop and grow valuable life skills to benefit you both personally and professionally.",
			"This ranges from learning more about yourself and your values to help you with making key decisions in your life, boosting your self-confidence, and becoming an excellent communicator able to get your ideas across in a compelling way. We can coach you in techniques to facilitate your learning and to enhance your creative process to help you generate exciting new ideas.",
		],
	},
	{
		id: "tough_times",
		title: "Tough Times",
		img: tough_times,
		hover_img: tough_times_hover,
		banner_img: tough_times_banner,
		details_img: tough_times_details,
		color: "#A1A1A1",
		description:
			"Your mental health is essential for wellbeing. And life can take its toll on it. Whether a longstanding issue or a sudden crisis, we can help. ",
		priceList: {
			packs: [
				{
					pack: ["Per Session: ", ["£85", "£65", "from £25"]],
				},
				{
					pack: ["4-Session Pack: ", ["£300", "£200", "from £90"]],
				},
				{
					pack: [
						"Plus Stop Smoking Hypnotherapy (stop in 1 session): ",
						["£250", "N/A", "N/A"],
					],
				},
			],
			chooseForm: [
				"How we can help: including, but not limited to: ",
				[
					"Depression",
					"Boredom/Loss of meaning",
					"Loss of job",
					"Anger",
					"Break-up",
					"Grief",
					"Anxiety",
					"Phobia",
					"Family dysfunction",
					"Victim of violence/ abuse/ discrimination/ prejudice/ bullying",
				],
			],
		},
		heading: "",
		para1:
			"Some issues can be sudden or intermittent, others long-term. Some may be caused by a sudden crisis, others by childhood traumas, and some may be a complex mixture of things both internal and external, past and present. ",
		para2: [
			"At Thought-Bubble, we offer a range of psychological and therapeutic interventions to help you whatever the issue, drawing on a range of approaches including: Cognitive Behavioural Therapy (CBT), Existential Therapy, NLP, Psychodynamic Counselling, Gestalt Therapy and Hypnotherapy",
		],
	},
	{
		id: "relationship_coaching",
		title: "Relationship Coaching",
		img: relationship_coaching,
		hover_img: relationship_coaching_hover,
		banner_img: relationship_coaching_banner,
		details_img: relationship_coaching_details,
		color: "#FAA87A",
		description:
			"Problems within a couple relationship can cause deep and profound damage to both parties, to children and to the wider family and social network. Relationship coaching works best when both people can attend sessions together. At Thought-Bubble, whatever the problem might be, we will work with you in a non-judgemental way.",
		priceList: {
			packs: [
				{
					pack: [
						"4-session pack with email support: ",
						["£375", "£295", "from £100"],
					],
				},
			],
			chooseForm: [],
		},

		heading: "",
		para1:
			"Relationship coaching works best when both people can attend sessions together. We focus on trying to help couples develop a constructive dialogue with each other, to gain an understanding of themselves and each other both as individuals and as part of a couple.",

		para2: [
			"And we make no presumptions about couples staying together or separating, so whatever the future holds for the relationship, helping both parties to work through difficulties constructively is our goal.",
		],
	},
	{
		id: "teenage_mentoring",
		title: "Teenage Mentoring",
		img: teenage_mentoring,
		hover_img: teenage_mentoring_hover,
		banner_img: teenage_mentoring_banner,
		details_img: teenage_mentoring_details,
		color: "#7A92CC",
		description:
			"Too much pressure and too little useful guidance? Not being heard? Being a teenager is tough! We can help you try to make sense out of the chaos that is growing up.",
		priceList: {
			packs: [
				{
					pack: ["4-Session Pack: ", ["£300", "£200", "from £90"]],
				},
			],
			chooseForm: [
				"Choose Form",
				["Where are you at", "where do you want to go", "how to get there"],
			],
		},

		heading: "",
		para1:
			"We offer sessions specially adapted for teenagers to help suit your world, your interests and your concerns. We love to really listen to your side and help you find a way forward which really speaks to you.",

		para2: [""],
	},
	{
		id: "team_building_workshops",
		title: "Team Building Workshops",
		img: team_building_workshop,
		hover_img: team_building_workshop_hover,
		banner_img: teenage_mentoring_banner,
		details_img: team_building_workshop_details,
		color: "#E9CB81",
		description:
			"Want to create a high-performing team? So often in professional life, groups of people are put together and called a “team”. But rarely is much effort put into actually making a team.",
		priceList: {
			packs: [
				{
					pack: ["2-hours Sessions: ", ["£500", "£200", "N/A"]],
				},
			],
			chooseForm: [
				"including, but not limited to: ",
				[
					"Inter-Cultural Communication Workshop",
					"New Team Launch",
					"Team Reboot",
					"Team Rescue",
				],
			],
		},
		heading: "",
		para1:
			"At Thought-Bubble, we run workshops for both new and established teams to improve the dynamics of the team, bringing out the very best of the range of talents in the group and learning to support and help each other to reach high-performance.",
		para2: [""],
	},

	{
		id: "talks",
		title: "Talks",
		img: talks,
		hover_img: talks_hover,
		banner_img: talks_banner,
		details_img: talks_details,
		color: "#FF8A03",
		description:
			"Sometimes, the world seems to be a chaotic mess full of injustice, cruelty and absurdity. Society and politics can be bewildering and a cause of sadness, distress, frustration and anger. At Thought-Bubble, we help people make sense of it all through workshops, discussions and talks on specific topics. We also run sessions for teams to help team members understand each other and work together better.",
		priceList: {
			packs: [
				{
					pack: ["1-hour talks with Q & A: ", ["£25", "£10", "£5"]],
				},
			],
			chooseForm: [
				"including: ",
				[
					"Understanding Race and Racism",
					"Introduction to Unconcious Bias",
					"Differentiating Race, Ethnicity and Culture",
					"Language: Accents, Dialects, Status and Stigma",
				],
			],
		},
		heading: "Life Coaching",
		para1:
			"We work one-to-one with individuals for life coaching work, as well as with couples for relationship coaching. Our aim is to help people make the most out of their lives.",
		para2: [
			"About Coaching: coaching is geared towards exploring all your possibilities, making the most out of them and maximising your potential. We encourage a fresh perspective on your life to break routines which are no longer helpful or necessary. The goals in life coaching work may be very focused or more exploratory depending on the needs of the client. Coaching is very flexible and we continuously review and re-evaluate in collaboration with you.",
			"At Thought-Bubble we have a range of approaches to suit your needs, including: Cognitive Behavioural Coaching, Existential Coaching, NLP Coaching, Gestalt Coaching and Agile Coaching.",
			"All Thought-Bubble clients have an initial consultation session during which we work with you to decide on the appropriate course of action.",
		],
	},
];

const testimonials = [
	{
		name: "Saul Goodman",
		nickname: "S G",
		designation: "Ceo & Founder",
		image: Testimonial1,
		star: 5,
		review:
			"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
	},
	{
		name: "Sara Wilsson",
		nickname: "S W",
		designation: "Designer",
		image: Testimonial2,
		star: 5,
		review:
			"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
	},
	{
		name: "Jena Karlis",
		nickname: "J K",
		designation: "Store Owner",
		image: Testimonial3,
		star: 5,
		review:
			"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
	},
	{
		name: "Matt Brandon",
		nickname: "M B",
		designation: "Freelancer",
		image: Testimonial4,
		star: 5,
		review:
			"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
	},

	{
		name: "John Larson",
		nickname: "J L",
		designation: "Entrepreneur",
		image: Testimonial5,
		star: 5,
		review:
			"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
	},
];

export { services, testimonials };
