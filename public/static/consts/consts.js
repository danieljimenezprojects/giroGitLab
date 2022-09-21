export const menuItems = [
    {
        label: "Qué es BKOOL",
        description: "Rutas, entrenamientos y más",
		linkUrl: "https://www.google.es",
		mobileLink: 'main/about',
		level: "main",
        items: [
            {
                label: "Ciclismo indoor",
				linkUrl: "https://www.google.es",
				mobileLink: 'main/about/cycling',
				level: "main/about",
                parent: {
                    parentLabel: "Qué es BKOOL",
                    parentLevel: "main"
                },
                items: [
                    {
                        label: "Rutas",
						linkUrl: "https://www.google.es",
						level: "main/about/cycling",
                        parent: {
                            parentLabel: "Ciclismo indoor",
                            parentLevel: "main/about"
                        },
                    },
                    {
                        label: "Workouts",
						linkUrl: "https://www.google.es",
						level: "main/about/cycling",
                        parent: {
                            parentLabel: "Ciclismo indoor",
                            parentLevel: "main/about"
                        },
                    },
                    {
                        label: "Planes de entrenamiento",
						linkUrl: "https://www.google.es",
						level: "main/about/cycling",
                        parent: {
                            parentLabel: "Ciclismo indoor",
                            parentLevel: "main/about"
                        },
                    },
                ]
            },
			{
                label: "Spinning",
				linkUrl: "https://www.google.es",
				level: "main/about",
                parent: {
                    parentLabel: "Qué es BKOOL",
                    parentLevel: "main"
                },
            },
			{
                label: "¿Qué te ofrecemos?",
				linkUrl: "https://www.google.es",
				level: "main/about",
                parent: {
                    parentLabel: "Qué es BKOOL",
                    parentLevel: "main"
                },
            },
			{
                label: "Novedades",
				linkUrl: "https://www.google.es",
				level: "main/about",
                parent: {
                    parentLabel: "Qué es BKOOL",
                    parentLevel: "main"
                },
            },
        ],
    },
    {
        label: "¿Cómo funciona?",
        description: "Aprende a usarlo",
		linkUrl: "https://www.google.es",
		mobileLink: 'main/how-it-works',
		level: "main",
		items: [
            {
                label: "Aprende a usarlo",
				linkUrl: "https://www.google.es",
				mobileLink: 'main/how-it-works/learn-to-use-it',
				level: "main/how-it-works",
                parent: {
                    parentLabel: "¿Cómo funciona?",
                    parentLevel: "main"
                },
                items: [
                    {
                        label: "Rodillos y bicletas",
						linkUrl: "https://www.google.es",
						level: "main/how-it-works/learn-to-use-it",
                        parent: {
                            parentLabel: "Aprende a usarlo",
                            parentLevel: "main/how-it-works"
                        },
                    },
                    {
                        label: "Sensores",
						linkUrl: "https://www.google.es",
						level: "main/how-it-works/learn-to-use-it",
                        parent: {
                            parentLabel: "Aprende a usarlo",
                            parentLevel: "main/how-it-works"
                        },
                    },
                    {
                        label: "Apps",
						linkUrl: "https://www.google.es",
						level: "main/how-it-works/learn-to-use-it",
                        parent: {
                            parentLabel: "Ciclismo indoor",
                            parentLevel: "main/how-it-works"
                        },
                    },
                    {
                        label: "Otros",
						linkUrl: "https://www.google.es",
						level: "main/how-it-works/learn-to-use-it",
                        parent: {
                            parentLabel: "Ciclismo indoor",
                            parentLevel: "main/how-it-works"
                        },
                    },
                ]
            },
			{
                label: "¿Qué necesito?",
				linkUrl: "https://www.google.es",
				level: "main/how-it-works",
                parent: {
                    parentLabel: "¿Cómo funciona?",
                    parentLevel: "main"
                },
            },
			{
                label: "Suscríbete a BKOOL",
				linkUrl: "https://www.google.es",
				level: "main/how-it-works",
                parent: {
                    parentLabel: "¿Cómo funciona?",
                    parentLevel: "main"
                },
            },
			{
                label: "Conecta tus dispositivos",
				linkUrl: "https://www.google.es",
				level: "main/how-it-works",
                parent: {
                    parentLabel: "¿Cómo funciona?",
                    parentLevel: "main"
                },
            },
        ],
    },
    {
        label: "Comenzar a rodar",
        description: "Descubre qué necesitas",
		linkUrl: "https://www.google.es",
		mobileLink: 'main/what-you-need',
		level: "main",
		items: [
            {
                label: "Requerimientos de equipo",
				linkUrl: "https://www.google.es",
				level: "main/what-you-need",
                parent: {
                    parentLabel: "Comenzar a rodar",
                    parentLevel: "main"
                },
            },
			{
                label: "Comprueba tu rodillo",
				linkUrl: "https://www.google.es",
				level: "main/what-you-need",
                parent: {
                    parentLabel: "Comenzar a rodar",
                    parentLevel: "main"
                },
            },
			{
                label: "Configura tu  rodillo",
				linkUrl: "https://www.google.es",
				level: "main/what-you-need",
                parent: {
                    parentLabel: "Comenzar a rodar",
                    parentLevel: "main"
                },
            },
			{
                label: "Descargar apps",
				linkUrl: "https://www.google.es",
				level: "main/what-you-need",
                parent: {
                    parentLabel: "Comenzar a rodar",
                    parentLevel: "main"
                },
            },
			{
                label: "Configura tu plan",
				linkUrl: "https://www.google.es",
				level: "main/what-you-need",
                parent: {
                    parentLabel: "Comenzar a rodar",
                    parentLevel: "main"
                },
            },
		]
    },
    {
        label: "Y además...",
        description: "Eventos, desafíos, ligas",
		linkUrl: "https://www.google.es",
		mobileLink: 'main/event',
		level: "main",
        items: [
            {
                label: "Eventos",
				linkUrl: "https://www.google.es",
				level: "main/events",
                parent: {
                    parentLabel: "Y además...",
                    parentLevel: "main"
                },
            },
			{
                label: "Giro de Italia",
				linkUrl: "https://www.google.es",
				level: "main/events",
                parent: {
                    parentLabel: "Y además...",
                    parentLevel: "main"
                },
            },
			{
                label: "Clubs",
				linkUrl: "https://www.google.es",
				level: "main/events",
                parent: {
                    parentLabel: "Y además...",
                    parentLevel: "main"
                },
            },
			{
                label: "Ligas",
				linkUrl: "https://www.google.es",
				level: "main/events",
                parent: {
                    parentLabel: "Y además...",
                    parentLevel: "main"
                },
            },
			{
                label: "Partners",
				linkUrl: "https://www.google.es",
				level: "main/events",
                parent: {
                    parentLabel: "Y además...",
                    parentLevel: "main"
                },
            },
			{
                label: "Embajadores",
				linkUrl: "https://www.google.es",
				level: "main/events",
                parent: {
                    parentLabel: "Y además...",
                    parentLevel: "main"
                },
            },
		]
    },
    {
        label: "Ayuda",
		linkUrl: "https://www.google.es",
		mobileLink: 'main/help',
		level: "main",
        items: [
            {
                label: "Contacto",
				linkUrl: "https://www.google.es",
				level: "main/help",
                parent: {
                    parentLabel: "Ayuda",
                    parentLevel: "main"
                },
            },
			{
                label: "Preguntas Frecuentes",
				linkUrl: "https://www.google.es",
				level: "main/help",
                parent: {
                    parentLabel: "Ayuda",
                    parentLevel: "main"
                },
            },
			{
                label: "Foro",
				linkUrl: "https://www.google.es",
				level: "main/help",
                parent: {
                    parentLabel: "Ayuda",
                    parentLevel: "main"
                },
            },
			{
                label: "Conviértete en beta tester",
				linkUrl: "https://www.google.es",
				level: "main/help",
                parent: {
                    parentLabel: "Ayuda",
                    parentLevel: "main"
                },
            },
		]
    }
];

export const footer = [
	{
		section: 'Premium Unlimited',
		items: [
			{
				label: 'Compite en ligas',
				link: 'https://www.google.es/',
			},
			{
				label: 'Compatibilidad',
				link: 'https://www.google.es/',
			},
			{
				label: 'Canjea tu cupón',
				link: 'https://www.google.es/',
			},
		]
	},
	{
		section: 'Ayuda',
		items: [
			{
				label: 'BKOOL Cycling y Web',
				link: 'https://www.google.es/',
			},
			{
				label: 'BKOOL Fitness',
				link: 'https://www.google.es/',
			},
			{
				label: 'Suscripciones',
				link: 'https://www.google.es/',
			},
			{
				label: 'Buzón de sugerencias',
				link: 'https://www.google.es/',
			},
		]
	},
	{
		section: 'Descargas',
		items: [
			{
				label: 'BKOOL Cycling',
				link: 'https://www.google.es/',
			},
			{
				label: 'BKOOL Fitness',
				link: 'https://www.google.es/',
			},
			{
				label: 'BKOOL Toolkit',
				link: 'https://www.google.es/',
			},
			{
				label: 'BKOOL Video Route Editor 2',
				link: 'https://www.google.es/',
			},
		]
	},
	{
		section: 'Conócenos',
		items: [
			{
				label: 'Prensa',
				link: 'https://www.google.es/',
			},
			{
				label: 'Trabaja con nosotros',
				link: 'https://www.google.es/',
			},
			{
				label: 'BKOOL Magazine',
				link: 'https://www.google.es/',
			}
		]
	},
];

export const languages = [
	{
		language: 'ES',
		selected: true
	},
	{
		language: 'EN',
		selected: false
	},
	{
		language: 'DE',
		selected: false
	},
	{
		language: 'FR',
		selected: false
	},
	{
		language: 'IT',
		selected: false
	}
];