export default function sidebar() {
	return [
		{
			text: "Get Started",
			collapsible: false,
			items: [
				{
					text: "Setup your account",
					link: "/get-started/setup-your-account",
				}
			]
		},
        {
			text: "Course Creation",
			collapsible: false,
			items: [
				{
                    text: "Create a Course",
                    link: "/course-creation/create-a-course"
                },
				{
					text: "Add a Chapter",
					link: "/course-creation/add-a-chapter",
				},
                {
					text: "Add a Lesson",
					link: "/course-creation/add-a-lesson",
				},
                {
                    text: "Create a Quiz",
                    link: "/course-creation/create-a-quiz"
                }
			],
		},
		{
			text: "Class Creation",
			collapsible: false,
			items: [
				{
                    text: "Create a Class",
                    link: "/class-creation/create-a-class"
                },
				{
					text: "Create a Live Class",
					link: "/class-creation/create-a-live-class"
				}
			],
		},
		{
			text: "Roles",
			collapsible: false,
			items: [
				{
					text: "Who can create a course",
					link: "/roles/who-can-create-a-course"
				}
			]
		},
		{
			text: "Miscellaneous",
			collapsible: false,
			items: [
				{
					text: "FAQ",
					link: "/miscellaneous/faq",
				},
			],
		},
	];
}