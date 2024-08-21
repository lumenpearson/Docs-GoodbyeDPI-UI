// for page navigation & to sort on leftbar
export const ROUTES = [
	{
		title: "Начало работы",
		href: "getting-started",
		items: [
			{ title: "Знакомство", href: "/introduction" },
            { title: "Структура проекта", href: "/project-structure" },
			{ title: "Инсталляция", href: "/installation" },
			{ title: "Краткое руководство", href: "/quick-start-guide" },
            { title: "Обновления", href: "/updates" },
			{ title: "Журнал изменений", href: "/changelog" },
		],
	},
    {
        title: "FAQ",
        href: "faq",
        items: [
            { title: "Q&A", href: "/qna" },
            { title: "Деинсталляция", href: "/deinstallation" },
        ],
    },
    {
        title: "О нас",
        href: "about",
        items: [
            { title: "Реквизиты", href: "/contact" },
            { title: "Благодарности", href: "/acknowledgments" },
            { title: "Лицензия", href: "/license" },
        ],
    }
];

export const page_routes = ROUTES.map(({ href, items }) =>
	items.map((link) => ({
		title: link.title,
		href: href + link.href,
	})),
).flat();
