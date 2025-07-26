// =================================================================================
// --- 1. DONNÉES PRINCIPALES (DATA) ---
// =================================================================================

const animes = [{
		id: 1,
		title: "The Water Magician",
		img: "https://m.media-amazon.com/images/M/MV5BOGJlZmZmOGYtNWJjNy00ZDI1LThmZGEtYjk3ZmExNzVhMjMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		episodes: 5,
		description: "Le personnage principal de la série, Ryo, est un Japonais qui meurt à 20 ans et se réincarne dans un autre monde. Il reçoit les pouvoirs d'un magicien de l'eau ainsi que la jeunesse éternelle. Il s'entraîne dans un pays lointain pendant 20 ans avant de voyager vers d'autres contrées et de devenir un aventurier.",
		genres: ["Magie", "Isekai", "Action", "Fantaisie", "Isekai"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-0gnasrpqulgn.html",
			"https://vidmoly.net/embed-z44jot9quodu.html",
			"https://vidmoly.net/embed-wyfx8pk3g547.html",
			"https://vidmoly.net/embed-ph7ejj8zjziq.html"

		]
	},
	{
		id: 2,
		title: "I Was Reincanated As The 7Th Prince(Saison 1)",
		img: "https://www.nautiljon.com/images/anime/00/58/tensei_shitara_dai_nana_ouji_datta_node_kimama_ni_majutsu_wo_kiwamemasu_fr_11585.webp?1719745289",
		episodes: 10,
		description: "Un sorcier ordinaire, dépourvu de lignée et d'aptitudes, subit une mort brutale lors d'un duel. À son réveil, il se réincarne en Lloyd, le septième prince du royaume de Saloum. Dans cet environnement béni, il peut désormais apprendre et maîtriser n'importe quelle magie à volonté, fort du savoir et des souvenirs de sa vie antérieure.",
		genres: ["Aventure", "Isekai", "Comédie", "Fantaisie", "Magie", "Slice of Life"], // <-- Ajoute cette ligne
		year: 2024,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5490195&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5498109&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5506096&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5512861&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5519835&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5527605&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5534506&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5541032&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5547397&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5553323&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5559131&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5566274&share=1"

		]
	},
	// Ajoute les autres animés avec les même clés si besoin
	{
		id: 3,
		title: "I Was Reincanated As The 7Th Prince(Saison 2)",
		img: "https://a.storyblok.com/f/178900/750x1060/6ccdd32a8f/i_was_reincarnated_as_the_7th_prince_season2_key_art.jpg/m/filters:quality(95)format(webp)",
		episodes: 5,
		description: "Un sorcier ordinaire, dépourvu de lignée et d'aptitudes, subit une mort brutale lors d'un duel. À son réveil, il se réincarne en Lloyd, le septième prince du royaume de Saloum. Dans cet environnement béni, il peut désormais apprendre et maîtriser n'importe quelle magie à volonté, fort du savoir et des souvenirs de sa vie antérieure.",
		genres: ["Aventure", "Isekai", "Comédie", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-v37omjf2i5wh.html",
			"https://vidmoly.net/embed-2re00e6t9zmc.html",
			"https://vidmoly.net/embed-3swxkax9q5vv.html"

		]
	},
	{
		id: 4,
		title: "Gachiakuta",
		img: "https://m.media-amazon.com/images/I/818ndvd0zOL._UF1000,1000_QL80_.jpg",
		episodes: 2,
		description: "Accusé d'un crime qu'il n'a pas commis, Rudo est condamné à mort en étant jeté avec les déchets dans la décharge située sous les bidonvilles. Trahi par les siens et abandonné de tous, il ne cherche plus qu'une seule et unique chose : la vengeance.",
		genres: ["Action", "Drame", "Fantaisie", "Mystère"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-u8jv52sxa6hl.html",
			"https://vidmoly.net/embed-exk7nfmrdcr4.html"
		]
	},
	{
		id: 5,
		title: "Clevatess",
		img: "https://a.storyblok.com/f/178900/750x1061/69666cb40e/clevatess-key-visual.jpg/m/filters:quality(95)format(webp)",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Drame", "Fantaisie", "Démons"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-b5h2obobwdml.html",
			"https://vidmoly.net/embed-dhq2evvhnrqn.html",
			"https://vidmoly.net/embed-xk1zjtsuoa62.html",
			"https://vidmoly.net/embed-2gg698q36ouq.html"

		]
	},
	{
		id: 6,
		title: "Solo Leveling (Saison 1)",
		img: "https://www.manga-news.com/public/images/dvd/Solo_Leveling_anime-visual-2.webp",
		episodes: 13,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2024,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5389406&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5397577&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5406329&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5414604&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5421264&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5428101&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5435724&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5444576&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5453063&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5461770&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5470382&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5479260&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5487838&share=1"
		]
	},
	{
		id: 7,
		title: "Solo Leveling (Saison 2)",
		img: "https://fr.web.img6.acsta.net/img/77/68/77683886a834a4c341f56aadf2186633.jpg",
		episodes: 13,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5790524&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5795961&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5801411&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5414604&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5421264&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5428101&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5435724&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5444576&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5453063&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5461770&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5470382&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5479260&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5487838&share=1"

		]
	},
	{
		id: 8,
		title: "Sakamoto Days",
		img: "https://m.media-amazon.com/images/M/MV5BM2MwZDRmYWItNGIzZC00ZWExLWEwNWYtNmM1ZmU3OTA3NmY4XkEyXkFqcGc@._V1_.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Assassinat", "Comédie", "Shonen"],
		year: 2024,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 9,
		title: "Sakamoto Days (Saison 1 Partie 2)",
		img: "https://animotaku.fr/wp-content/uploads/2025/03/anime-sakamoto-days-partie-2-visuel-1.jpg",
		episodes: 2,
		description: "Sakamoto est aujourd'hui patron d'une petite épicerie de quartier et coule des jours heureux avec sa famille. Mais lorsque son passé le rattrape sous les traits de Shin, un jeune assassin télépathe, Sakamoto reprend du service... et malgré son apparence, il est toujours aussi charismatique lorsqu'il passe à l'action !",
		genres: ["Action", "Assassinat", "Comédie", "Shonen"],
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-b9bmf4b6kj3a.html",
			"https://vidmoly.net/embed-nzm10g1p37kn.html"
		]
	},

	{
		id: 10,
		title: "The beggining after the end",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCI62c4bu-zGm8keyZ9MkaMQ8-KRwLzTNNQ&s",
		episodes: 12,
		description: "Le roman suit la vie du défunt roi Grey après sa mort prématurée et mystérieuse. Réincarné sous le nom d'Arthur Leywin, il cherche à corriger ses erreurs passées sur le nouveau continent vibrant de Dicathen, un monde de magie et de créatures fantastiques.",
		genres: ["Action", "Aventure", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://oneupload.to/embed-w2fzgk7qhcr7.html",
			"https://oneupload.to/embed-025bjw43idu0.html",
			"https://oneupload.to/embed-w4vw1dx9gig3.html",
			"https://oneupload.to/embed-dg47afucm4o2.html",
			"https://oneupload.to/embed-fpg1mhsbhj43.html",
			"https://oneupload.to/embed-4g5jyv5nivxn.html",
			"http://video.sibnet.ru/shell.php?videoid=5911337&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5917926&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5923839&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5929166&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5934430&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5939714&share=1"
		]
	},

	{
		id: 11,
		title: "The rising of the shield hero (Saison 1)",
		img: "https://m.media-amazon.com/images/I/81YJ8CeI7hL._UF894,1000_QL80_.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 12,
		title: "The rising of the shield hero (Saison 2)",
		img: "https://fr.web.img5.acsta.net/pictures/20/09/09/11/12/4458267.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie"],
		year: 2022,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 13,
		title: "The rising of the shield hero (Saison 3)",
		img: "https://www.manga-news.com/public/images/dvd/Rising_of_the_Shield_Hero_S3_anime.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie"],
		year: 2023,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 14,
		title: "The rising of the shield hero (Saison 4)",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvVEA2VyocXLXg1U-1BfjSexo32mmpmWnBL6qqppyqtMYoc-3AHQqpBoV6dMwVxuynaY&usqp=CAU",
		episodes: 3,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5958477&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5965845&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5972516&share=1"
		]
	},

	{
		id: 15,
		title: "Demon Slayer (Saison 1)",
		img: "https://fr.web.img6.acsta.net/pictures/19/09/18/13/46/0198270.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2019,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=4668120&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668131&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668135&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668139&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668143&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668146&share=1",
			""
		]
	},

	{
		id: 16,
		title: "Demon Slayer (Saison 2)",
		img: "https://fr.web.img4.acsta.net/pictures/21/09/27/11/50/4103657.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 17,
		title: "Demon Slayer (Saison 3)",
		img: "https://fr.web.img4.acsta.net/c_150_200/pictures/23/04/06/09/18/0802333.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2023,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 18,
		title: "Demon Slayer (Saison 4)",
		img: "https://preview.redd.it/demon-slayer-season-4-v0-zg2ulgr1s10d1.jpeg?auto=webp&s=242bdb3ac32c0d35f7ea6e9083bf3108c5cae32a",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2024,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 19,
		title: "Demon Slayer (Train de l'infini)",
		img: "https://m.media-amazon.com/images/I/81IPnc7rdML._UF350,350_QL50_.jpg",
		episodes: 1,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 20,
		title: "Demon Slayer (Infinity Castle)",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1kXkuLZ6JxUL66L60OTzNX-JemrDrt-lnQ&s",
		episodes: 1,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2025,
		episodeUrls: [
			"",

		]
	},

	{
		id: 21,
		title: "The éminence in shadow (Saison 1)",
		img: "https://images.justwatch.com/poster/300920834/s718/saison-1.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Aventure", "Shonen", "Isekai", "Harem"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 22,
		title: "The éminence in shadow (Saison 2)",
		img: "https://image.animationdigitalnetwork.com/license/eminenceshadow/tv/web/affiche_500x0.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Aventure", "Shonen", "Isekai", "Harem"],
		year: 2022,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 23,
		title: "Kaiju No. 8 (Saison 1)",
		img: "https://fr.web.img5.acsta.net/pictures/23/10/16/12/48/2424702.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Horreur", "Science-Fiction"],
		year: 2024,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 24,
		title: "Kaiju No. 8 (Saison 2)",
		img: "https://a.storyblok.com/f/178900/1000x1500/897a9e973c/kaiju-no8-s2-base-assets-2x3.png/m/filters:quality(95)format(webp)",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Horreur", "Science-Fiction"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5968853&share=1"

		]
	},

	{
		id: 25,
		title: "No Game No Life",
		img: "https://m.media-amazon.com/images/I/81pCZrM-GcL._UF1000,1000_QL80_.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Comédie", "Aventure", "Fantaisie", "Jeux"],
		year: 2014,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 26,
		title: "Noble New World Adventure",
		img: "https://fr.web.img6.acsta.net/pictures/23/03/22/17/23/3003680.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Fantaisie", "Isekai", "Magie"], // <-- Ajoute cette ligne
		year: 2018,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 27,
		title: "Villainess lv 99",
		img: "https://www.editions-soleil.fr/sites/default/files/product/9782302095656-001-X.jpeg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Fantaisie", "Isekai", "Romance", "Jeux", "Magie"], // <-- Ajoute cette ligne
		year: 2024,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 28,
		title: "Fire Force (Saison 1)",
		img: "https://www.manga-news.com/public/images/dvd/fire-force-anime-visual-1.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Drame", "Comédie", "Shonen"],
		year: 2019,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 29,
		title: "Fire Force (Saison 2)",
		img: "https://fr.web.img6.acsta.net/pictures/20/05/22/16/15/5172548.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Drame", "Comédie", "Shonen"],
		year: 2020,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 30,
		title: "Fire Force (Saison 3)",
		img: "https://a.storyblok.com/f/178900/1064x1596/7394dd442d/fire-force-season-3-key-art.png/m/filters:quality(95)format(webp)",
		episodes: 12,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Drame", "Comédie", "Shonen"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5869295&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5875856&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5884206&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5891938&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5899250&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5906673&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5913356&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5919836&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5925648&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5930601&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5935916&share=1"

		]
	},

	{
		id: 31,
		title: "Kuroko's Basketball (Saison 1)",
		img: "https://images.justwatch.com/poster/181383869/s718/kuroko-no-basket.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Sport", "Shonen", "Basketball"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 32,
		title: "Kuroko's Basketball (Saison 2)",
		img: "https://kuroko-no-basket-shop.com/cdn/shop/products/H242fc14e1b6b4ed0a04740a8463e6cfas-sw_1200x1200.jpg?v=1626385156",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Fantastique"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 33,
		title: "Kuroko's Basketball (Saison 3)",
		img: "https://fr.web.img4.acsta.net/pictures/19/07/12/16/57/3671280.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Fantastique"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 34,
		title: "Kuroko's Basketball (Last Game)",
		img: "https://fr.web.img6.acsta.net/pictures/21/03/01/16/09/1616577.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Fantastique"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 35,
		title: "Kuroko's Basketball (Highlight 1)",
		img: "https://www.manga-news.com/public/images/dvd/Kuroko-s-Basket-Winter-Cup-film-1-visual.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Fantastique"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 36,
		title: "Kuroko's Basketball (Highlight 2)",
		img: "https://www.manga-news.com/public/images/dvd/Kuroko-s-Basket-Winter-Cup-film-2-visual.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Sport", "Shonen"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 37,
		title: "Kuroko's Basketball (Highlight 3)",
		img: "https://www.manga-news.com/public/images/dvd/.Kuroko-s-Basket-Winter-Cup-film-3-visual_medium.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Fantastique"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 38,
		title: "Hunter x Hunter (1999)",
		img: "https://fr.web.img2.acsta.net/pictures/19/07/31/13/28/3312695.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Shonen", "Fantastique"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 39,
		title: "Hunter x Hunter (2011)",
		img: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Shonen", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 40,
		title: "Naruto",
		img: "https://www.shoshosein.com/sites/default/files/fiches/animes/naruto/naruto.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 41,
		title: "Naruto Shippuden",
		img: "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 42,
		title: "The éminence in shadow (Lost Echoes)",
		img: "https://fr.web.img5.acsta.net/pictures/23/12/21/09/28/2574913.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 43,
		title: "Fairy Tail",
		img: "https://www.nautiljon.com/images/anime/00/34/fairy_tail_1343.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 44,
		title: "Fairy Tail: (100 Years Quest)",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVYpeETi0mrYXAp0uIZGCz7TTzgLnZEF_bw&s",
		episodes: 1,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 45,
		title: "Fairy Tail (La Prêtresse du Phoenix)",
		img: "https://media.hachette.fr/fit-in/780x1280/imgArticle/PIKA/2014/9782811614164-X.jpg?source=web",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 46,
		title: "Fairy Tail (Dragon Cry)",
		img: "https://m.media-amazon.com/images/M/MV5BMWFmMWQwYjktN2Y3Yi00OThjLWJlZWQtZGQyNzY0YmMzODI2XkEyXkFqcGc@._V1_.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 47,
		title: "Blue Exorcist (Saison 1)",
		img: "https://fr.web.img2.acsta.net/pictures/19/07/12/15/28/1784446.jpg",
		episodes: 25,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=4705891&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705892&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705896&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705899&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705902&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705906&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705910&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705913&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705920&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705929&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705935&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4920488&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4920499&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705957&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705963&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705968&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705978&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705981&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4705988&share=1",
			"https://vidmoly.net/embed-unq88zrphyh1.html",
			"http://video.sibnet.ru/shell.php?videoid=4705998&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4706003&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4706006&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4706010&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4706016&share=1"
		]
	},

	{
		id: 48,
		title: "Blue Exorcist (Saison 2)",
		img: "https://fr.web.img6.acsta.net/pictures/19/07/12/15/22/4697337.jpg",
		episodes: 12,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=4728288&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728294&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728301&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728312&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728320&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728329&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728337&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728341&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728344&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728347&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728352&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4728354&share=1"
		]
	},

	{
		id: 49,
		title: "Blue Exorcist (Saison 3)",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0pWf7t1G28bQ_zwLEPrAGAdve_6AGZbQBw&s",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5389446&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5397615&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5406376&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5414638&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5421298&share=1"
		]
	},

	{
		id: 50,
		title: "Blue Exorcist (Saison 4 Partie 1)",
		img: "https://www.manga-news.com/public/images/dvd/Blue-Exorcist-Beyond-the-Snow-anime-visual.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 51,
		title: "Blue Exorcist (Saison 4 Partie 2)",
		img: "https://api.manga-clic.com/media/anime/blue-exorcist-saison-4-part2-the-blue-night-saga/affiche-anime-blue-exorcist-blue-night-saga.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 52,
		title: "Blue Lock (Saison 1)",
		img: "https://fr.web.img2.acsta.net/pictures/22/08/12/08/53/4402230.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 53,
		title: "Blue Lock (Saison 2)",
		img: "https://fr.web.img6.acsta.net/img/64/22/64221262a364696cf5b2d0ba6ff4633b.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 54,
		title: "Sword Art Online (Saison 1)",
		img: "data:image/jpeg;base64,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",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 55,
		title: "Sword Art Online (Saison 2)",
		img: "https://fr.web.img2.acsta.net/pictures/19/07/09/11/21/4865877.jpg",
		episodes: 24,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 56,
		title: "Sword Art Online (Saison 3)",
		img: "https://fr.web.img6.acsta.net/pictures/19/07/09/11/43/4099000.jpg",
		episodes: 24,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 57,
		title: "Sword Art Online (Saison 4)",
		img: "https://fr.web.img5.acsta.net/pictures/20/02/10/16/53/3067184.jpg",
		episodes: 24,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 58,
		title: "Code Geass (Saison 1)",
		img: "https://fr.web.img2.acsta.net/c_225_300/pictures/19/07/02/09/59/1369546.jpg",
		episodes: 24,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 59,
		title: "Code Geass (Saison 2)",
		img: "https://fr.web.img6.acsta.net/c_225_300/pictures/19/07/02/09/59/0079410.jpg",
		episodes: 24,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 60,
		title: "Parasite",
		img: "https://fr.web.img6.acsta.net/pictures/19/07/12/10/57/3901004.jpg",
		episodes: 24,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Comédie", "Drame", "Shonen", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 61,
		title: "The Testament of Sister New Devil",
		img: "https://m.media-amazon.com/images/M/MV5BNWJhNmI1NDgtNGFlMi00MjczLWJlNWYtNjAzMzE0NzI3ZDIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		episodes: 24,
		description: "Description du nouvel anime ajouté.",
		genres: ["Ecchi"],
		year: 2015,
		episodeUrls: [
			"https://vidmoly.net/embed-53tqxukpzezk.html"
		]
	},

	{
		id: 62,
		title: "Redo of Healer",
		img: "https://www.filmspourenfants.net/wp-content/uploads/2025/01/redo-of-healer-a.jpg",
		episodes: 24,
		description: "Description du nouvel anime ajouté.",
		genres: ["Ecchi"],
		year: 2020,
		episodeUrls: [
			"https://vidmoly.net/embed-53tqxukpzezk.html"
		]
	},

	{
		id: 63,
		title: "Death Note",
		img: "https://fr.web.img5.acsta.net/pictures/18/01/18/14/35/2024405.jpg",
		episodes: 10,
		description: "Un sorcier ordinaire, dépourvu de lignée et d'aptitudes, subit une mort brutale lors d'un duel. À son réveil, il se réincarne en Lloyd, le septième prince du royaume de Saloum. Dans cet environnement béni, il peut désormais apprendre et maîtriser n'importe quelle magie à volonté, fort du savoir et des souvenirs de sa vie antérieure.",
		genres: ["Aventure", "Isekai", "Comédie", "Fantaisie", "Magie", "Slice of Life"], // <-- Ajoute cette ligne
		year: 2024,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5490195&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5498109&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5506096&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5512861&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5519835&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5527605&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5534506&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5541032&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5547397&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5553323&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5559131&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5566274&share=1"

		]
	},
	
	{
		id: 64,
		title: "Dr. Stone (Saison 1)",
		img: "https://m.media-amazon.com/images/I/91ZdVxJKHTL._UF894,1000_QL80_.jpg",
		episodes: 5,
		description: "Un sorcier ordinaire, dépourvu de lignée et d'aptitudes, subit une mort brutale lors d'un duel. À son réveil, il se réincarne en Lloyd, le septième prince du royaume de Saloum. Dans cet environnement béni, il peut désormais apprendre et maîtriser n'importe quelle magie à volonté, fort du savoir et des souvenirs de sa vie antérieure.",
		genres: ["Aventure", "Isekai", "Comédie", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-v37omjf2i5wh.html",
			"https://vidmoly.net/embed-2re00e6t9zmc.html",
			"https://vidmoly.net/embed-3swxkax9q5vv.html"

		]
	},
	{
		id: 65,
		title: "Dr. Stone (Saison 2)",
		img: "https://fr.web.img4.acsta.net/pictures/20/12/07/11/10/1508157.jpg",
		episodes: 2,
		description: "Accusé d'un crime qu'il n'a pas commis, Rudo est condamné à mort en étant jeté avec les déchets dans la décharge située sous les bidonvilles. Trahi par les siens et abandonné de tous, il ne cherche plus qu'une seule et unique chose : la vengeance.",
		genres: ["Action", "Drame", "Fantaisie", "Mystère"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-u8jv52sxa6hl.html",
			"https://vidmoly.net/embed-exk7nfmrdcr4.html"
		]
	},
	{
		id: 66,
		title: "Dr. Stone (Saison 3 Partie 1)",
		img: "https://m.media-amazon.com/images/I/91vpmlFhX7L._UF894,1000_QL80_.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Drame", "Fantaisie", "Démons"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-b5h2obobwdml.html",
			"https://vidmoly.net/embed-dhq2evvhnrqn.html",
			"https://vidmoly.net/embed-xk1zjtsuoa62.html",
			"https://vidmoly.net/embed-2gg698q36ouq.html"

		]
	},
	{
		id: 67,
		title: "Dr. Stone (Saison 3 Partie 2)",
		img: "https://gaak.fr/wp-content/uploads/2023/08/stone-3.png",
		episodes: 13,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2024,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5389406&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5397577&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5406329&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5414604&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5421264&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5428101&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5435724&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5444576&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5453063&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5461770&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5470382&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5479260&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5487838&share=1"
		]
	},
	{
		id: 68,
		title: "Dr. Stone (Saison 4 Partie 1)",
		img: "https://resizing.flixster.com/75lESxH3ChWoocOXeSCnPFaoFDk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28830351_i_v9_aa.jpg",
		episodes: 13,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5790524&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5795961&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5801411&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5414604&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5421264&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5428101&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5435724&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5444576&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5453063&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5461770&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5470382&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5479260&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5487838&share=1"

		]
	},
	{
		id: 69,
		title: "Dr. Stone (Saison 4 Partie 2)",
		img: "https://www.manga-news.com/public/images/dvd/dr-stone-S4-science-future.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Assassinat", "Comédie", "Shonen"],
		year: 2024,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 70,
		title: "Vinland Saga (Saison 1)",
		img: "https://www.manga-news.com/public/images/dvd/vinland-saga-anime-visual-netflix.webp",
		episodes: 2,
		description: "Sakamoto est aujourd'hui patron d'une petite épicerie de quartier et coule des jours heureux avec sa famille. Mais lorsque son passé le rattrape sous les traits de Shin, un jeune assassin télépathe, Sakamoto reprend du service... et malgré son apparence, il est toujours aussi charismatique lorsqu'il passe à l'action !",
		genres: ["Action", "Assassinat", "Comédie", "Shonen"],
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-b9bmf4b6kj3a.html",
			"https://vidmoly.net/embed-nzm10g1p37kn.html"
		]
	},

	{
		id: 71,
		title: "Vinland Saga (Saison 2)",
		img: "https://fr.web.img2.acsta.net/pictures/22/06/09/08/55/2618532.jpg",
		episodes: 12,
		description: "Le roman suit la vie du défunt roi Grey après sa mort prématurée et mystérieuse. Réincarné sous le nom d'Arthur Leywin, il cherche à corriger ses erreurs passées sur le nouveau continent vibrant de Dicathen, un monde de magie et de créatures fantastiques.",
		genres: ["Action", "Aventure", "Fantaisie"], // <-- Ajoute cette ligne
		year: 2025,
		episodeUrls: [
			"https://oneupload.to/embed-w2fzgk7qhcr7.html",
			"https://oneupload.to/embed-025bjw43idu0.html",
			"https://oneupload.to/embed-w4vw1dx9gig3.html",
			"https://oneupload.to/embed-dg47afucm4o2.html",
			"https://oneupload.to/embed-fpg1mhsbhj43.html",
			"https://oneupload.to/embed-4g5jyv5nivxn.html",
			"http://video.sibnet.ru/shell.php?videoid=5911337&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5917926&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5923839&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5929166&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5934430&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5939714&share=1"
		]
	},

	{
		id: 72,
		title: "Your Lie in April",
		img: "https://www.nautiljon.com/images/anime/00/67/shigatsu_wa_kimi_no_uso_3476.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 73,
		title: "Chainsaw Man (Saison 1)",
		img: "https://www.nautiljon.com/images/anime/00/40/gekijouban_chainsaw_man_-_reze-hen_12404.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie"],
		year: 2022,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 74,
		title: "Tokyo Ghoul (Saison 1)",
		img: "https://fr.web.img5.acsta.net/pictures/15/11/04/15/59/314681.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie"],
		year: 2023,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 75,
		title: "Tokyo Ghoul (Saison 2)",
		img: "https://www.nautiljon.com/images/anime/00/55/tokyo_ghoul_a_3855.webp",
		episodes: 3,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5958477&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5965845&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5972516&share=1"
		]
	},

	{
		id: 76,
		title: "Tokyo Ghoul:re",
		img: "https://image.animationdigitalnetwork.com/license/tokyoghoul/tv3/web/affiche_500x0.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2019,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=4668120&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668131&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668135&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668139&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668143&share=1",
			"http://video.sibnet.ru/shell.php?videoid=4668146&share=1",
			""
		]
	},

	{
		id: 77,
		title: "Jujutsu Kaisen (Saison 1)",
		img: "https://m.media-amazon.com/images/I/81pfjal69fL._UF894,1000_QL80_.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 78,
		title: "Jujutsu Kaisen (Saison 2)",
		img: "https://www.nautiljon.com/images/anime/00/08/jujutsu_kaisen_2nd_season_10980.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2023,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 79,
		title: "Jujutsu Kaisen 0",
		img: "https://media.senscritique.com/media/000020292090/0/jujutsu_kaisen_0.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2024,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 80,
		title: "Spy x Family (Saison 1 Partie 1)",
		img: "https://www.manga-news.com/public/images/dvd/Spy_X_Family_S1_anime.webp",
		episodes: 1,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 81,
		title: "Spy x Family (Saison 1 Partie 2)",
		img: "https://www.nautiljon.com/images/anime/00/89/spy_family_part_2_10898.webp",
		episodes: 1,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Aventure", "Drame", "Fantaisie", "Démons"],
		year: 2025,
		episodeUrls: [
			"",

		]
	},

	{
		id: 82,
		title: "Spy x Family (Saison 2)",
		img: "https://www.nautiljon.com/images/anime/00/03/spy_family_season_2_11630.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Aventure", "Shonen", "Isekai", "Harem"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 83,
		title: "Spy x Family (Code White)",
		img: "https://a.storyblok.com/f/178900/848x1200/4de5a4848a/spy-x-family-code-white-teaser-visual.jpg/m/filters:quality(95)format(webp)",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Aventure", "Shonen", "Isekai", "Harem"],
		year: 2022,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 84,
		title: "Attack on Titan (Saison 1)",
		img: "https://fr.web.img4.acsta.net/pictures/18/10/31/18/23/3895256.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Horreur", "Science-Fiction"],
		year: 2024,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 85,
		title: "Attack on Titan (Saison 2)",
		img: "https://fr.web.img2.acsta.net/pictures/18/11/06/15/07/4301473.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Horreur", "Science-Fiction"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5968853&share=1"

		]
	},

	{
		id: 86,
		title: "Attack on Titan (Saison 3)",
		img: "https://blob.cede.ch/catalog/17394000/17394971_1_92.jpg?v=1",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Comédie", "Aventure", "Fantaisie", "Jeux"],
		year: 2014,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 87,
		title: "Attack on Titan (Saison 4 Partie 1)",
		img: "https://www.manga-news.com/public/images/dvd/L-Attaque-des-Titans-the-final-season-visual-5.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Comédie", "Fantaisie", "Isekai", "Magie"], // <-- Ajoute cette ligne
		year: 2018,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 88,
		title: "Attack on Titan (Saison 4 Partie 2)",
		img: "https://www.manga-news.com/public/images/dvd/L-Attaque-des-Titans-the-final-season-visual-5.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Fantaisie", "Isekai", "Romance", "Jeux", "Magie"], // <-- Ajoute cette ligne
		year: 2024,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 89,
		title: "Attack on Titan (Saison 4 Partie 3)",
		img: "https://www.manga-news.com/public/images/dvd/L-Attaque-des-Titans-the-final-season-visual-5.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Drame", "Comédie", "Shonen"],
		year: 2019,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 90,
		title: "Attack on Titan (Saison 4 Partie 4)",
		img: "https://www.manga-news.com/public/images/dvd/L-Attaque-des-Titans-the-final-season-visual-5.jpg",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Drame", "Comédie", "Shonen"],
		year: 2020,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 91,
		title: "Attack on Titan (La Dernière Attaque)",
		img: "https://a.storyblok.com/f/178900/1003x1504/d439071c2f/attack-on-titan-the-last-attack-english-kv.jpg/m/filters:quality(95)format(webp)",
		episodes: 12,
		description: "Description du nouvel anime ajouté.",
		genres: ["Action", "Drame", "Comédie", "Shonen"],
		year: 2025,
		episodeUrls: [
			"http://video.sibnet.ru/shell.php?videoid=5869295&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5875856&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5884206&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5891938&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5899250&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5906673&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5913356&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5919836&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5925648&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5930601&share=1",
			"http://video.sibnet.ru/shell.php?videoid=5935916&share=1"

		]
	},

	{
		id: 92,
		title: "Steins;Gate",
		img: "https://www.nautiljon.com/images/anime/00/76/steins_gate_1967.webp",
		episodes: 2,
		description: "Description du nouvel anime ajouté.",
		genres: ["Sport", "Shonen", "Basketball"], 
		year: 2025,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 93,
		title: "Steins;Gate 0",
		img: "https://media.senscritique.com/media/000017727744/0/steins_gate_0.jpg",
		episodes: 2,
		description: "L’histoire prend place en novembre 2010, dans la continuité de la bêta world line. Cette série animée se passe dans cette continuité, alors qu’Okabe Rintarou n’a pas réussi à “la” sauver, ce fameux 28 juillet et a fini par revenir seul. Cependant, Okabe ne sait pas que Kurisu est toujours là…",
		genres: ["Drama", "Sci-Fi", "Thriller"],
		year: 2018,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 94,
		title: "Beelzebub",
		img: "https://www.nautiljon.com/images/anime/00/89/beelzebub_1898.webp",
		episodes: 2,
		description: "Le lycée Ishiyama est un établissement entièrement fréquenté par des délinquants, où la violence et l’anarchie régnent. Cependant, il y a une règle universellement reconnue : ne pas croiser l’étudiant de première année Tatsumi Oga, le combattant le plus vicieux d’Ishiyama. Un jour, Oga est au bord d’une rivière lorsqu’il rencontre un homme qui descend la rivière. Après l’avoir récupéré, l’homme s’ouvre en deux pour révéler un bébé, qui rampe sur le dos d’Oga. Bien qu’il ne le sache pas encore, ce bébé se nomme Kaiser de Emperana Beelzebub IV, ou «Baby Beel» pour faire plus court, le fils du Seigneur des Démons! Comme si trouver le futur Seigneur des enfers ne suffisait pas, Oga est aussi confrontée à Hildegard, la servante démoniaque de Beel. Ensemble, ils vont tenter d’élever Baby Beel, bien qu’ils soient entourés de délinquants juvéniles et de puissants démons.",
		genres: ["Action", "Comédie", "Supernaturel"],
		year: 2011,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 95,
		title: "The Promised Neverland (Saison 1)",
		img: "https://upload.wikimedia.org/wikipedia/en/d/de/The_Promised_Neverland.jpg",
		episodes: 2,
		description: "Emma, Norman et Ray coulent des jours heureux à l’orphelinat Grace Field House. Entourés de leurs petits frères et sœurs, ils s’épanouissent sous l’attention pleine de tendresse de « Maman », qu’ils considèrent comme leur véritable mère. Mais tout bascule le soir où ils découvrent l’abominable réalité qui se cache derrière la façade de leur vie paisible ! Ils doivent s’échapper, c’est une question de vie ou de mort !",
		genres: ["Action", "Aventure", "Drama", "Fantaisie", "Horreur"],
		year: 2019,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 96,
		title: "The Promised Neverland (Saison 2)",
		img: "https://media.senscritique.com/media/000019804871/0/the_promised_neverland_2.jpg",
		episodes: 2,
		description: "Emma, Norman et Ray coulent des jours heureux à l’orphelinat Grace Field House. Entourés de leurs petits frères et sœurs, ils s’épanouissent sous l’attention pleine de tendresse de « Maman », qu’ils considèrent comme leur véritable mère. Mais tout bascule le soir où ils découvrent l’abominable réalité qui se cache derrière la façade de leur vie paisible ! Ils doivent s’échapper, c’est une question de vie ou de mort !",
		genres: ["Action", "Aventure", "Drama", "Fantaisie", "Horreur"],
		year: 2021,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 97,
		title: "Golden Kamuy (Saison 1)",
		img: "https://www.nautiljon.com/images/anime/00/51/golden_kamui_7115.webp",
		episodes: 2,
		description: "Surnommé « l’Immortel », Saichi Sugimoto est un ancien soldat ayant survécu à la guerre meurtrière qui s’est déroulée au début du XXe siècle entre le Japon et la Russie. À présent, il se retrouve seul dans l’immense étendue désertique du nord du pays et il a besoin de beaucoup d’argent pour un but bien précis. La découverte d’une carte l’emmène sur les traces d’un trésor, 75 kilos d’or accumulé par le peuple autochtone des Aïnous…",
		genres: ["Action", "Aventure", "Comédie"],
		year: 2018,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 98,
		title: "Golden Kamuy (Saison 2)",
		img: "https://www.nautiljon.com/images/anime/00/21/golden_kamui_2_8012.webp",
		episodes: 2,
		description: "Surnommé « l’Immortel », Saichi Sugimoto est un ancien soldat ayant survécu à la guerre meurtrière qui s’est déroulée au début du XXe siècle entre le Japon et la Russie. À présent, il se retrouve seul dans l’immense étendue désertique du nord du pays et il a besoin de beaucoup d’argent pour un but bien précis. La découverte d’une carte l’emmène sur les traces d’un trésor, 75 kilos d’or accumulé par le peuple autochtone des Aïnous…",
		genres: ["Action", "Aventure", "Comédie"],
		year: 2018,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 99,
		title: "Golden Kamuy (Saison 3)",
		img: "https://www.nautiljon.com/images/anime/00/80/golden_kamuy_3_8808.webp",
		episodes: 2,
		description: "Surnommé « l’Immortel », Saichi Sugimoto est un ancien soldat ayant survécu à la guerre meurtrière qui s’est déroulée au début du XXe siècle entre le Japon et la Russie. À présent, il se retrouve seul dans l’immense étendue désertique du nord du pays et il a besoin de beaucoup d’argent pour un but bien précis. La découverte d’une carte l’emmène sur les traces d’un trésor, 75 kilos d’or accumulé par le peuple autochtone des Aïnous…",
		genres: ["Action", "Aventure", "Comédie"],
		year: 2020,
		episodeUrls: [
			"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&rel=0",
			"https://www.youtube.com/embed/sBws8MSXN7A?autoplay=1&rel=0"
		]
	},

	{
		id: 100,
		title: "Golden Kamuy (Saison 4)",
		img: "https://www.nautiljon.com/images/anime/00/95/golden_kamuy_4_10859.webp",
		episodes: 2,
		description: "Surnommé « l’Immortel », Saichi Sugimoto est un ancien soldat ayant survécu à la guerre meurtrière qui s’est déroulée au début du XXe siècle entre le Japon et la Russie. À présent, il se retrouve seul dans l’immense étendue désertique du nord du pays et il a besoin de beaucoup d’argent pour un but bien précis. La découverte d’une carte l’emmène sur les traces d’un trésor, 75 kilos d’or accumulé par le peuple autochtone des Aïnous…",
		genres: ["Action", "Aventure", "Comédie"],
		year: 2022,
		episodeUrls: [
			"https://vidmoly.net/embed-vo1evfpodgib.html",
			"https://vidmoly.net/embed-mjorbm8pl578.html",
			"https://vidmoly.net/embed-5oayrgjbs46z.html",
			"https://vidmoly.net/embed-gt995ix74h0l.html",
			"https://vidmoly.net/embed-u6zqhi4kq9cc.html",
			"https://vidmoly.net/embed-nykvuuy9b1vr.html",
			"https://vidmoly.net/embed-q9y54q7mbrgl.html",
			"https://vidmoly.net/embed-u9g1tia4kycw.html",
			"https://vidmoly.net/embed-ed0e56arx7ke.html",
			"https://vidmoly.net/embed-djvhe2ujxm6c.html",
			"https://vidmoly.net/embed-4crewhwm28so.html",
			"https://vidmoly.net/embed-y1b1mjgaesor.html",
			"https://vidmoly.net/embed-6h19wz6hw3ez.html"
		]
	},

	{
		id: 101,
		title: "Lord of Mysteries",
		img: "https://fr.web.img3.acsta.net/img/c0/98/c098c23d1ddd09a1c29082d46d31b383.jpg",
		episodes: 6,
		description: "Avec l’avènement de l’énergie à vapeur et des machines, qui peut se rapprocher de devenir un Transcendant ? Enveloppé dans le brouillard de l’histoire et des ténèbres, qui ou quel est le mal tapi dans l’ombre qui murmure à nos oreilles ? Zhou Mingrui se réincarne en Klein Moretti dans un monde alternatif de l’époque victorienne rempli de machines, de canons, de dirigeables, ainsi que de potions et de divination, cartes de tarot, artefacts scellés… Une série de mystères se dresse alors devant lui dans un monde où il devient le Fou…",
		genres: ["Action", "Drame", "Aventure", "Fantaisie", "Mystère", "Supernaturel", "Thriller"],
		year: 2025,
		episodeUrls: [
			"https://vidmoly.net/embed-wynaiqrcfj28.html",
			"https://vidmoly.net/embed-pulcz9dq0nhj.html",
			"https://vidmoly.net/embed-uiet556xftdb.html",
			"https://vidmoly.net/embed-ovil3m0k9rui.html",
			"https://vidmoly.net/embed-47la9pudf7x1.html",
			"https://vidmoly.net/embed-antzfjg8dbcy.html"

		]
	}

];

const availableAvatars = [
  'avatar1.png', 'avatar2.png', 'avatar3.png',
  'avatar4.png', 'avatar5.png', 'avatar6.png'
];
// Dans script.js, sous la liste availableAvatars
const availableBanners = [
  'banner1.jpg',
  'banner2.jpg',
  'banner3.jpg',
  'banner4.jpg',
  'banner5.jpg',
  'banner6.jpg'
  // Ajoute ici les chemins vers toutes tes images de bannière
];

const nouveauteIds = [2, 6, 8, 18, 23, 101];
const avenirIds = [20, 42];
const ecchiIds = [61, 62];

// Dans script.js, remplace l'ancien planningData par celui-ci

// Dans script.js, utilise cette version du planningData

const planningData = {
    "Lundi": [8, 9],
    "Mardi": [1],
    "Mercredi": [5, 14, 2],
    "Jeudi": [1, 68, 69],
    "Vendredi": [1],
    "Samedi": [101, 23, 24],
    "Dimanche": [4]
};
const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const sortiesDuJour = {
  0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [101] // Samedi
};


// =================================================================================
// --- 2. FONCTIONS UTILITAIRES (HELPERS) ---
// =================================================================================
function findAdjacentSeasons(currentAnime) {
    const title = currentAnime.title;
    // On cherche un motif comme "(Saison 2)" ou "(Saison 1 Partie 2)"
    const seasonRegex = /(.+)\(Saison (\d+)(.*)\)/i;
    const match = title.match(seasonRegex);

    if (!match) {
        return {}; // Pas une saison, on ne fait rien
    }

    const baseTitle = match[1].trim(); // Ex: "Demon Slayer"
    const seasonNumber = parseInt(match[2]); // Ex: 3
    
    let prevSeason = null;
    let nextSeason = null;

    // Cherche dans toute la liste d'animés
    animes.forEach(anime => {
        // Cherche la saison précédente
        if (anime.title.includes(`${baseTitle} (Saison ${seasonNumber - 1}`)) {
            prevSeason = anime;
        }
        // Cherche la saison suivante
        if (anime.title.includes(`${baseTitle} (Saison ${seasonNumber + 1}`)) {
            nextSeason = anime;
        }
    });

    return { prev: prevSeason, next: nextSeason };
}
function getFromStorage(key, defaultValue = '[]') {
    const data = localStorage.getItem(key);
    return data ? new Set(JSON.parse(data)) : new Set();
}

function saveToStorage(key, set) {
    localStorage.setItem(key, JSON.stringify([...set]));
}

const getFavorites = () => getFromStorage('animeFavorites');
const saveFavorites = (set) => saveToStorage('animeFavorites', set);
const getWatchlist = () => getFromStorage('shinime_watchlist');
const saveWatchlist = (set) => saveToStorage('shinime_watchlist', set);

// --- DANS LA SECTION 2. FONCTIONS UTILITAIRES ---

function getWatchedEpisodes(animeId) {
    const allWatched = JSON.parse(localStorage.getItem('shinime_watched') || '{}');
    return new Set(allWatched[animeId] || []);
}

function saveWatchedEpisodes(animeId, watchedSet) {
    const allWatched = JSON.parse(localStorage.getItem('shinime_watched') || '{}');
    allWatched[animeId] = [...watchedSet];
    localStorage.setItem('shinime_watched', JSON.stringify(allWatched));
}
function getReprendreList() {
	const progress = JSON.parse(localStorage.getItem('animeProgress') || '{}');
	return animes.filter(a => progress[a.id] !== undefined && progress[a.id] < a.episodeUrls.length);
}

function calculateFavoriteGenre() {
  const favorites = getFavorites();
  if (favorites.size === 0) return '-';
  const favoriteAnimes = animes.filter(a => favorites.has(a.id));
  const genreCounts = {};
  favoriteAnimes.forEach(anime => {
    if (anime.genres && Array.isArray(anime.genres)) {
      anime.genres.forEach(genre => {
        genreCounts[genre] = (genreCounts[genre] || 0) + 1;
      });
    }
  });
  let maxCount = 0;
  let favoriteGenre = '-';
  for (const genre in genreCounts) {
    if (genreCounts[genre] > maxCount) {
      maxCount = genreCounts[genre];
      favoriteGenre = genre;
    }
  }
  return favoriteGenre;
}

function findSimilarAnimes(currentAnime, count = 3) {
  if (!currentAnime.genres || currentAnime.genres.length === 0) return [];
  const similar = animes.filter(anime => {
    if (anime.id === currentAnime.id) return false;
    return anime.genres && anime.genres.some(genre => currentAnime.genres.includes(genre));
  });
  return similar.sort(() => 0.5 - Math.random()).slice(0, count);
}

function addToHistory(animeId) {
	let history = JSON.parse(localStorage.getItem('animeHistory') || '[]');
	history = history.filter(id => id !== animeId);
	history.unshift(animeId);
	if (history.length > 10) history = history.slice(0, 10);
	localStorage.setItem('animeHistory', JSON.stringify(history));
}

// =================================================================================
// --- 3. FONCTIONS D'AFFICHAGE (DISPLAY) ---
// =================================================================================

function displayAnimes(list, gridElement) {
    if (!gridElement) return;
	const favorites = getFavorites();
	const watchlist = getWatchlist();
	gridElement.innerHTML = '';

	if (list.length === 0) {
		gridElement.innerHTML = `<p>Aucun animé trouvé 😕</p>`;
		return;
	}

	list.forEach(anime => {
		const card = document.createElement('div');
		card.className = 'anime-card';
		card.dataset.cardId = anime.id;
        card.innerHTML = `
          <img src="${anime.img}" alt="${anime.title}" loading="lazy" />
          <div class="anime-info">
            <div class="anime-title">${anime.title}</div>
            <div class="card-buttons">
              <button class="watchlist-btn ${watchlist.has(anime.id) ? 'in-watchlist' : ''}" title="${watchlist.has(anime.id) ? 'Retirer de la watchlist' : 'Ajouter à la watchlist'}">🔖</button>
              <button class="favorite-btn ${favorites.has(anime.id) ? 'favorited' : ''}" title="${favorites.has(anime.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}">♥</button>
            </div>
          </div>
        `;
        card.querySelector('.watchlist-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const currentWatchlist = getWatchlist();
            currentWatchlist.has(anime.id) ? currentWatchlist.delete(anime.id) : currentWatchlist.add(anime.id);
            saveWatchlist(currentWatchlist);
            displayAllGrids();
        });
		card.querySelector('.favorite-btn').addEventListener('click', (e) => {
			e.stopPropagation();
            const currentFavorites = getFavorites();
			currentFavorites.has(anime.id) ? currentFavorites.delete(anime.id) : currentFavorites.add(anime.id);
			saveFavorites(currentFavorites);
            displayAllGrids();
		});
		card.addEventListener('click', () => openAnimeModal(anime));
		gridElement.appendChild(card);
	});
}

function updateProfileStats() {
  const favDisplay = document.getElementById('stats-favorites');
  if (!favDisplay) return;

  document.getElementById('stats-favorites').textContent = getFavorites().size;
  const progress = JSON.parse(localStorage.getItem('animeProgress') || '{}');
  document.getElementById('stats-started').textContent = Object.keys(progress).length;
  document.getElementById('stats-fave-genre').textContent = calculateFavoriteGenre();
}

function displayHistorySidebar() {
	const history = JSON.parse(localStorage.getItem('animeHistory') || '[]');
	const historyList = animes.filter(a => history.includes(a.id));
	const ordered = history.map(id => historyList.find(a => a.id === id)).filter(Boolean);
	const container = document.getElementById('history-list');
	if (!container) return;
	container.innerHTML = '';

	if (ordered.length === 0) {
		container.innerHTML = "<div style='color:#aaa;font-size:0.95em;'>Aucun animé consulté</div>";
		return;
	}
	ordered.forEach(anime => {
		const div = document.createElement('div');
		div.className = 'history-anime';
		div.innerHTML = `<img src="${anime.img}" alt="${anime.title}" /><span class="history-anime-title">${anime.title}</span><button class="history-anime-remove" title="Retirer de l'historique">✖</button>`;
		div.onclick = () => openAnimeModal(anime);
		div.querySelector('.history-anime-remove').onclick = (e) => {
			e.stopPropagation();
			let currentHistory = JSON.parse(localStorage.getItem('animeHistory') || '[]');
			currentHistory = currentHistory.filter(id => id !== anime.id);
			localStorage.setItem('animeHistory', JSON.stringify(currentHistory));
			displayHistorySidebar();
		};
		container.appendChild(div);
	});
}

function displayAllGrids() {
    // Listes de contenu
    const nouveautes = animes.filter(anime => nouveauteIds.includes(anime.id));
    const avenir = animes.filter(anime => avenirIds.includes(anime.id));
    const catalogue = animes.filter(a => ![...avenirIds, ...nouveauteIds, ...ecchiIds].includes(a.id)).sort((a, b) => a.title.localeCompare(b.title));
    const favorisList = animes.filter(a => getFavorites().has(a.id));
    const watchlistAnimes = animes.filter(a => getWatchlist().has(a.id));
    const ecchiList = animes.filter(a => Array.isArray(a.genres) && a.genres.some(g => g.toLowerCase() === "ecchi"));
    const jour = new Date().getDay();
    const animesDuJour = animes.filter(a => (sortiesDuJour[jour] || []).includes(a.id));

    // Affichage
    displayAnimes(nouveautes, document.getElementById('nouveauteGrid'));
    displayAnimes(avenir, document.getElementById('avenirGrid'));
    displayAnimes(catalogue, document.getElementById('catalogueGrid'));
    displayAnimes(favorisList, document.getElementById('favorisGrid'));
    displayAnimes(getReprendreList(), document.getElementById('reprendreGrid'));
    displayAnimes(watchlistAnimes, document.getElementById('watchlistGrid'));
    displayAnimes(ecchiList, document.getElementById('ecchiGrid'));
    displayAnimes(animesDuJour, document.getElementById('sortieJourGrid'));
    updateProfileStats();
}


// =================================================================================
// --- 4. FONCTIONS MODALES (MODALS) ---
// =================================================================================
function openBannerModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.onclick = () => document.body.removeChild(overlay);
  
  const modalContent = document.createElement('div');
  modalContent.className = 'avatar-modal-content'; // On peut réutiliser ce style
  modalContent.innerHTML = '<h3>Choisissez votre bannière</h3>';
  
  const bannerGrid = document.createElement('div');
  bannerGrid.className = 'avatar-selection-grid'; // On réutilise ce style aussi

  availableBanners.forEach(bannerUrl => {
    const bannerImg = document.createElement('img');
    bannerImg.src = bannerUrl;
    bannerImg.className = 'banner-choice'; // Nouvelle classe pour le style
    bannerImg.onclick = () => {
      localStorage.setItem('shinime_banner', bannerUrl);
      document.getElementById('user-banner').style.backgroundImage = `url('${bannerUrl}')`;
      document.body.removeChild(overlay);
    };
    bannerGrid.appendChild(bannerImg);
  });

  modalContent.appendChild(bannerGrid);
  overlay.appendChild(modalContent);
  document.body.appendChild(overlay);
}
function openAnimeModal(anime) {
	const overlay = document.createElement('div');
	overlay.className = 'modal-overlay';
    overlay.onclick = () => document.body.removeChild(overlay);

	const modal = document.createElement('div');
	modal.className = 'modal';
    modal.onclick = (e) => e.stopPropagation();

	const closeBtn = document.createElement('button');
	closeBtn.className = 'modal-close';
	closeBtn.textContent = '×';
	closeBtn.onclick = () => document.body.removeChild(overlay);

	const modalCenter = document.createElement('div');
	modalCenter.className = 'modal-center';
	const iframe = document.createElement('iframe');
	iframe.src = anime.episodeUrls && anime.episodeUrls[0] ? anime.episodeUrls[0] : '';
	iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
	iframe.allowFullscreen = true;
	modalCenter.appendChild(iframe);

// ... début de la fonction openAnimeModal ...

	const modalLeft = document.createElement('div');
	modalLeft.className = 'modal-left';

    // ▼▼▼ TON NOUVEAU BLOC DE CODE VA ICI ▼▼▼
    const watchedEpisodes = getWatchedEpisodes(anime.id);

	if (Array.isArray(anime.episodeUrls)) {
		anime.episodeUrls.forEach((url, idx) => {
			if (!url) return;

            const entry = document.createElement('div');
            entry.className = 'episode-entry';

			const epBtn = document.createElement('button');
            epBtn.className = 'ep-btn';
			epBtn.textContent = `Épisode ${idx + 1}`;
			
            const watchedBtn = document.createElement('button');
            watchedBtn.className = 'mark-watched-btn';
            watchedBtn.innerHTML = '👁️';
            watchedBtn.title = 'Marquer comme vu/non vu';
            
            if (watchedEpisodes.has(idx)) {
                entry.classList.add('is-watched');
            }

			epBtn.addEventListener('click', () => {
				iframe.src = url;
				modalLeft.querySelectorAll('.ep-btn').forEach(b => b.classList.remove('active'));
				epBtn.classList.add('active');
				let progress = JSON.parse(localStorage.getItem('animeProgress') || '{}');
				progress[anime.id] = idx;
				localStorage.setItem('animeProgress', JSON.stringify(progress));
				displayAllGrids();
			});
            
            watchedBtn.addEventListener('click', () => {
                const currentWatched = getWatchedEpisodes(anime.id);
                if (currentWatched.has(idx)) {
                    currentWatched.delete(idx);
                } else {
                    currentWatched.add(idx);
                }
                saveWatchedEpisodes(anime.id, currentWatched);
                entry.classList.toggle('is-watched');
            });

            entry.appendChild(epBtn);
            entry.appendChild(watchedBtn);
			modalLeft.appendChild(entry);
		});
        
        const firstEpBtn = modalLeft.querySelector('.ep-btn');
        if (firstEpBtn) firstEpBtn.classList.add('active');
	}
    // ▲▲▲ FIN DU NOUVEAU BLOC ▲▲▲

    const modalRight = document.createElement('div');
    modalRight.className = 'modal-right';
    const smallImg = document.createElement('img');
    smallImg.src = anime.img;
    smallImg.alt = anime.title;
    modalRight.appendChild(smallImg);

    const infoContainer = document.createElement('div');
    infoContainer.style.width = '100%';
    infoContainer.innerHTML = `
        <p><b>Genres :</b> ${anime.genres.join(', ')}</p>
        <p><b>Année :</b> ${anime.year || 'Inconnue'}</p>
        <p><b>Épisodes :</b> ${anime.episodes || 'Inconnu'}</p>
    `;
    modalRight.appendChild(infoContainer);

	    // ▼▼▼ AJOUTE CE NOUVEAU BLOC DE CODE ▼▼▼
    const adjacentSeasons = findAdjacentSeasons(anime);
    if (adjacentSeasons.prev || adjacentSeasons.next) {
        const seasonNavContainer = document.createElement('div');
        seasonNavContainer.className = 'season-nav-container';

        if (adjacentSeasons.prev) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'season-nav-btn';
            prevBtn.innerHTML = `&larr; Saison ${adjacentSeasons.prev.title.match(/Saison (\d+)/i)[1]}`;
            prevBtn.onclick = () => {
                document.body.removeChild(overlay);
                openAnimeModal(adjacentSeasons.prev);
            };
            seasonNavContainer.appendChild(prevBtn);
        }

        if (adjacentSeasons.next) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'season-nav-btn';
            nextBtn.innerHTML = `Saison ${adjacentSeasons.next.title.match(/Saison (\d+)/i)[1]} &rarr;`;
            nextBtn.onclick = () => {
                document.body.removeChild(overlay);
                openAnimeModal(adjacentSeasons.next);
            };
            seasonNavContainer.appendChild(nextBtn);
        }
        modalRight.appendChild(seasonNavContainer);
    }
    // ▲▲▲ FIN DU BLOC À AJOUTER ▲▲▲

    const similarAnimes = findSimilarAnimes(anime, 3);
    if (similarAnimes.length > 0) {
        const similarTitle = document.createElement('h4');
        similarTitle.className = 'similar-title';
        similarTitle.textContent = 'Vous pourriez aussi aimer';
        modalRight.appendChild(similarTitle);
        const similarContainer = document.createElement('div');
        similarContainer.className = 'similar-container';
        similarAnimes.forEach(simAnime => {
            const simCard = document.createElement('div');
            simCard.className = 'similar-anime-card';
            simCard.innerHTML = `<img src="${simAnime.img}" alt="${simAnime.title}"><div class="similar-anime-title">${simAnime.title}</div>`;
            simCard.onclick = () => {
                document.body.removeChild(overlay);
                openAnimeModal(simAnime);
            };
            similarContainer.appendChild(simCard);
        });
        modalRight.appendChild(similarContainer);
    }

	const desc = document.createElement('p');
	desc.className = 'modal-description';
	desc.textContent = anime.description || '';

    const modalTopContent = document.createElement('div');
    modalTopContent.className = 'modal-top-content';
    modalTopContent.appendChild(modalLeft);
    modalTopContent.appendChild(modalCenter);
    modalTopContent.appendChild(modalRight);

    modal.appendChild(closeBtn);
    modal.appendChild(modalTopContent);
    modal.appendChild(desc);

	overlay.appendChild(modal);
	document.body.appendChild(overlay);

    addToHistory(anime.id);
    displayHistorySidebar();
}

function openAvatarModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.onclick = () => document.body.removeChild(overlay);
  const modalContent = document.createElement('div');
  modalContent.className = 'avatar-modal-content';
  modalContent.innerHTML = '<h3>Choisissez votre avatar</h3>';
  const avatarGrid = document.createElement('div');
  avatarGrid.className = 'avatar-selection-grid';
  availableAvatars.forEach(avatarUrl => {
    const avatarImg = document.createElement('img');
    avatarImg.src = avatarUrl;
    avatarImg.className = 'avatar-choice';
    avatarImg.onclick = () => {
      localStorage.setItem('shinime_avatar', avatarUrl);
      document.getElementById('user-avatar').src = avatarUrl;
      document.body.removeChild(overlay);
    };
    avatarGrid.appendChild(avatarImg);
  });
  modalContent.appendChild(avatarGrid);
  overlay.appendChild(modalContent);
  document.body.appendChild(overlay);
}
function openPlanningModal() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.onclick = () => document.body.removeChild(overlay);

  const modalContent = document.createElement('div');
  modalContent.className = 'avatar-modal-content'; // On peut réutiliser ce style
  modalContent.style.maxWidth = '1000px';
  modalContent.onclick = e => e.stopPropagation();
  
  const closeBtn = document.createElement('button');
	closeBtn.className = 'modal-close';
	closeBtn.textContent = '×';
	closeBtn.onclick = () => document.body.removeChild(overlay);

  const title = document.createElement('h3');
  title.textContent = 'Planning des Sorties de la Semaine';
  title.style.color = '#00ffe5';

  const tableWrapper = document.createElement('div');
  tableWrapper.className = 'planning-table-wrapper';
  
  const table = document.createElement('table');
  table.className = 'planning-table';
  table.style.width = '100%';

  
  const thead = document.createElement('thead');
  let headerRow = '<tr>';
  jours.forEach(jour => headerRow += `<th>${jour}</th>`);
  headerRow += '</tr>';
  thead.innerHTML = headerRow;


// NOUVEAU CODE CORRECT pour construire le corps du tableau
const tbody = document.createElement('tbody');
// On trouve le jour avec le plus d'animés pour savoir combien de lignes faire
const maxAnimes = Math.max(...jours.map(jour => (planningData[jour] || []).length));

// Boucle pour chaque LIGNE du tableau
for (let i = 0; i < maxAnimes; i++) {
    const row = document.createElement('tr');

    // Boucle pour chaque JOUR (cellule) dans la ligne
    jours.forEach(jour => {
        const cell = document.createElement('td');
        const animeId = (planningData[jour] || [])[i]; // On prend le i-ème animé du jour

        if (animeId) {
            const animeObject = animes.find(a => a.id === animeId);
            if (animeObject) {
                const animeDiv = document.createElement('div');
                animeDiv.className = 'planning-anime';
                animeDiv.innerHTML = `
                    <img src="${animeObject.img}" alt="${animeObject.title}">
                    <span class="planning-anime-title">${animeObject.title}</span>
                `;
                animeDiv.onclick = () => {
                    document.body.removeChild(document.querySelector('.modal-overlay'));
                    openAnimeModal(animeObject);
                };
                cell.appendChild(animeDiv);
            }
        }
        row.appendChild(cell);
    });
    tbody.appendChild(row);
}
  
  table.appendChild(thead);
  table.appendChild(tbody);
  tableWrapper.appendChild(table);
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(title);
  modalContent.appendChild(tableWrapper);
  overlay.appendChild(modalContent);
  document.body.appendChild(overlay);
}

// =================================================================================
// --- 5. POINT D'ENTRÉE PRINCIPAL (INITIALISATION) ---
// =================================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- Sélection des éléments principaux ---
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const themeBtn = document.getElementById('theme-toggle');
    const planningBtn = document.getElementById('planningBtn');
    const randomBtn = document.getElementById('random-anime-btn');
    const warningModal = document.getElementById('warning-modal');
    const ecchiAgeBtn = document.getElementById('ecchi-age-btn');
    const ecchiAgeModal = document.getElementById('ecchi-age-modal');

    // --- Affichage initial (commun à toutes les pages) ---
    displayAllGrids();
    displayHistorySidebar();

    // --- Logique de la Page Catalogue (Filtres) ---
    const letterSelect = document.getElementById('filter-letter');
    if (letterSelect) {
        const genreContainer = document.getElementById('filter-genres');
        const yearSelect = document.getElementById('filter-year');
        const resetFiltersBtn = document.getElementById('reset-filters');

        const filterCatalogue = () => {
            let catalogue = animes.filter(a => ![...avenirIds, ...nouveauteIds, ...ecchiIds].includes(a.id));
            const letter = letterSelect.value;
            const year = yearSelect.value;
            const checkedGenres = [...genreContainer.querySelectorAll('.genre-checkbox:checked')].map(cb => cb.value);

            if (letter) catalogue = catalogue.filter(a => a.title.toUpperCase().startsWith(letter));
            if (year) catalogue = catalogue.filter(a => a.year && a.year.toString() === year);
            if (checkedGenres.length > 0) catalogue = catalogue.filter(a => a.genres && checkedGenres.every(g => a.genres.includes(g)));
            
            displayAnimes(catalogue.sort((a, b) => a.title.localeCompare(b.title)), document.getElementById('catalogueGrid'));
        };

        const populateFilters = () => {
            const letterSet = new Set(animes.map(a => a.title ? a.title[0].toUpperCase() : '').filter(Boolean));
            letterSelect.innerHTML = '<option value="">Lettre</option>' + [...letterSet].sort().map(l => `<option value="${l}">${l}</option>`).join('');
            const genresSet = new Set(animes.flatMap(a => a.genres || []));
            genreContainer.innerHTML = [...genresSet].sort().map(g => `<label><input type="checkbox" class="genre-checkbox" value="${g}">${g}</label>`).join('');
            const yearsSet = new Set(animes.map(a => a.year).filter(Boolean));
            yearSelect.innerHTML = '<option value="">Année</option>' + [...yearsSet].sort((a,b)=>b-a).map(y => `<option value="${y}">${y}</option>`).join('');
        };
        
        populateFilters();
        letterSelect.addEventListener('change', filterCatalogue);
        genreContainer.addEventListener('change', filterCatalogue);
        yearSelect.addEventListener('change', filterCatalogue);
        resetFiltersBtn.addEventListener('click', () => {
            letterSelect.value = ''; yearSelect.value = '';
            genreContainer.querySelectorAll('.genre-checkbox').forEach(cb => cb.checked = false);
            filterCatalogue();
        });
        filterCatalogue();
    }

    // --- Recherche ---
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.style.display = (query === '') ? 'none' : 'block';
        if (query === '') return;

        const filtered = animes.filter(a => a.title.toLowerCase().includes(query) && !ecchiIds.includes(a.id));
        searchResults.innerHTML = '';
        if (filtered.length > 0) {
            filtered.forEach(a => {
                const p = document.createElement('p');
                p.textContent = a.title;
                p.onclick = () => { openAnimeModal(a); searchResults.style.display = 'none'; searchInput.value = ''; };
                searchResults.appendChild(p);
            });
        } else {
            searchResults.innerHTML = `<p>Aucun résultat</p>`;
        }
    });
    document.addEventListener('click', e => { if (!e.target.closest('.search-container')) searchResults.style.display = 'none'; });

    // --- Thème ---
    const setTheme = (theme) => {
        document.body.classList.toggle('light-theme', theme === 'light');
        themeBtn.textContent = theme === 'light' ? '🌞 Mode clair' : '🌙 Mode sombre';
        localStorage.setItem('shinime_theme', theme);
    };
    themeBtn.onclick = () => setTheme(document.body.classList.contains('light-theme') ? 'dark' : 'light');
    setTheme(localStorage.getItem('shinime_theme') || 'dark');

    // --- Boutons Header ---
    if (planningBtn) {
        planningBtn.onclick = (e) => { e.preventDefault(); openPlanningModal(); };
    }
    if (randomBtn) {
        randomBtn.onclick = () => openAnimeModal(animes[Math.floor(Math.random() * animes.length)]);
    }

    // --- Modals Avertissement & Ecchi ---
    if (warningModal && localStorage.getItem('shinime_warning_ack') === '1') {
        warningModal.style.display = 'none';
    }
    const warningBtn = document.getElementById('shinime-warning-btn');
    if (warningBtn) {
        warningBtn.onclick = () => {
            if (document.getElementById('shinime-hide-warning').checked) localStorage.setItem('shinime_warning_ack', '1');
            warningModal.style.display = 'none';
        };
    }
    
    let ecchiAgeVerified = false;
    const updateEcchiOverlay = () => {
        const overlay = document.getElementById('ecchi-overlay');
        if (overlay) overlay.style.display = ecchiAgeVerified ? 'none' : 'flex';
    };
    updateEcchiOverlay();
    if (ecchiAgeBtn) ecchiAgeBtn.onclick = () => ecchiAgeModal.style.display = 'flex';
    const ecchiConfirm = document.getElementById('ecchi-age-confirm');
    const ecchiCancel = document.getElementById('ecchi-age-cancel');
    if (ecchiConfirm) ecchiConfirm.onclick = () => { ecchiAgeVerified = true; ecchiAgeModal.style.display = 'none'; updateEcchiOverlay(); };
    if (ecchiCancel) ecchiCancel.onclick = () => ecchiAgeModal.style.display = 'none';

	// --- Logique de la Page Profil ---
    const pseudoDisplay = document.getElementById('user-pseudo');
    if (pseudoDisplay) {
        const editPseudoBtn = document.getElementById('edit-pseudo-btn');
        const avatarDisplay = document.getElementById('user-avatar');
        const bannerDisplay = document.getElementById('user-banner');
        
        const displayPseudo = () => {
            const savedPseudo = localStorage.getItem('shinime_pseudo');
            pseudoDisplay.textContent = savedPseudo ? `Bienvenue, ${savedPseudo} !` : 'Définir un pseudo';
        };
        const displayAvatar = () => {
            const savedAvatar = localStorage.getItem('shinime_avatar');
            avatarDisplay.src = (savedAvatar && availableAvatars.includes(savedAvatar)) ? savedAvatar : (availableAvatars[0] || '');
        };
        const displayBanner = () => {
            const savedBanner = localStorage.getItem('shinime_banner');
            const bannerUrl = (savedBanner && availableBanners.includes(savedBanner)) ? savedBanner : availableBanners[0];
            if (bannerUrl) bannerDisplay.style.backgroundImage = `url('${bannerUrl}')`;
        };

        editPseudoBtn.onclick = () => {
            const newPseudo = prompt("Quel est votre nouveau pseudo ?", localStorage.getItem('shinime_pseudo') || '');
            if (newPseudo !== null) { localStorage.setItem('shinime_pseudo', newPseudo.trim()); displayPseudo(); }
        };
        avatarDisplay.onclick = () => openAvatarModal();
        bannerDisplay.onclick = () => openBannerModal();
        
        const setupClearButton = (btnId, storageKey, listName) => {
            const btn = document.getElementById(btnId);
            if(btn) btn.onclick = () => {
                if (confirm(`Êtes-vous sûr de vouloir vider votre liste "${listName}" ?`)) {
                    localStorage.removeItem(storageKey);
                    displayAllGrids();
                }
            };
        };
        setupClearButton('clear-watchlist-btn', 'shinime_watchlist', 'Watchlist');
        setupClearButton('clear-reprendre-btn', 'animeProgress', 'Reprendre');
        setupClearButton('clear-favoris-btn', 'animeFavorites', 'Favoris');
        
        displayPseudo();
        displayAvatar();
        displayBanner();
    }
    
    // --- Sortie du jour Titre ---
    const sortieJourTitle = document.getElementById("sortieJourTitle");
    if (sortieJourTitle) {
      const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
      sortieJourTitle.textContent = "Sortie du jour : " + jours[new Date().getDay()];
    }

    // --- Anti-copie ---
    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("keydown", e => {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) || (e.ctrlKey && e.key.toUpperCase() === 'U')) {
            e.preventDefault();
        }
    });
});