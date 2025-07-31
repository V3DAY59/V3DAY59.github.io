// =====// =================================================================================
// --- 1. DONNÉES PRINCIPALES (DATA) ---
// =================================================================================

let animes = []

// Dans la section 1 de script.js

const allAchievements = {
    'ACH_001': { name: 'Premiers Pas', description: 'Regarder son premier épisode.', icon: '👣' },
    'ACH_002': { name: 'Collectionneur', description: 'Ajouter 10 animés à ses favoris.', icon: '📚' },
    'ACH_003': { name: 'Curieux', description: 'Utiliser la fonction "Découvrir un animé".', icon: '🎲' },
    'ACH_004': { name: 'Historien', description: 'Regarder un animé sorti avant l\'an 2000.', icon: '📜' },
    'ACH_005': { name: 'Marathonien', description: 'Regarder 10 épisodes.', icon: '🏃‍♂️' },
    'ACH_006': { name: 'Expert Shonen', description: 'Regarder 5 animés du genre "Shonen".', icon: '💥' }
};
const availableAvatars = [
	'avatar1.png', 'avatar2.png', 'avatar3.png',
	'avatar4.png', 'avatar5.png', 'avatar6.png',
	'avatar7.JPG', 'avatar8.png', 'avatar9.png',
	'avatar10.png', 'avatar11.png', 'avatar12.png'
];
// Dans script.js, sous la liste availableAvatars
const availableBanners = [
	'banner1.jpg',
	'banner2.jpg',
	'banner3.jpg',
	'banner4.jpg',
	'banner5.jpg',
	'banner6.jpg',
	'banner7.jpg',
	'banner8.jpg',
	'banner9.jpg',
	'banner10.jpg',
	'banner11.jpg',
	'banner12.jpg'
	// Ajoute ici les chemins vers toutes tes images de bannière
];

const nouveauteIds = [5];
const avenirIds = [];
const ecchiIds = [];

// Dans script.js, remplace l'ancien planningData par celui-ci

// Dans script.js, utilise cette version du planningData

const planningData = {
	"Lundi": [],
	"Mardi": [],
	"Mercredi": [5],
	"Jeudi": [],
	"Vendredi": [],
	"Samedi": [],
	"Dimanche": []
};
const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const sortiesDuJour = {
	0: [], // Dimanche
	1: [], // Lundi
	2: [], // Mardi
	3: [5], // Mercredi
	4: [], // Jeudi
	5: [], // Vendredi
	6: []  // Samedi
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

	return {
		prev: prevSeason,
		next: nextSeason
	};
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
// Dans script.js, section 3
// Dans script.js, section 3
console.log('La fonction showNotification est appelée !');
function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`; // type peut être 'success', 'info', 'error'
    
    // Ajoute une icône en fonction du type
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';

    notification.innerHTML = `<span>${icon}</span> ${message}`;

    container.appendChild(notification);

    // Supprime la notification du DOM après l'animation
    setTimeout(() => {
        notification.remove();
    }, 3000); // 3 secondes
}
function applySeasonalTheme() {
    const today = new Date();
    const month = today.getMonth(); // 0 = Janvier, 9 = Octobre, 11 = Décembre
    const body = document.body;

    // D'abord, on enlève les anciens thèmes pour éviter les conflits
    body.classList.remove('theme-halloween', 'theme-winter');

    // Thème Halloween (pour tout le mois d'octobre)
    if (month === 9) { // 9 = Octobre
        body.classList.add('theme-halloween');
    }

    // Thème Hiver/Noël (pour tout le mois de décembre)
    if (month === 11) { // 11 = Décembre
        body.classList.add('theme-winter');
    }
     if (month >= 5 && month <= 7) {
        body.classList.add('theme-summer');
        createBubbles(); // On lance la création des bulles
    }
    if (month >= 5 && month <= 7) {
        body.classList.add('theme-summer');
        createSeaAnimation(); // On lance l'animation de la mer
    }
}
// Dans script.js, après la fonction applySeasonalTheme

function createSeaAnimation() {
    // On vérifie si l'animation existe déjà
    if (document.getElementById('footer-animation')) return;

    const animationContainer = document.createElement('div');
    animationContainer.id = 'footer-animation';

 // APRÈS
animationContainer.innerHTML = `
    <div class="sea">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="boat"></div>
    </div>
`;
    
    // On l'ajoute juste avant le footer
    const footer = document.querySelector('footer');
    if (footer) {
        document.body.insertBefore(animationContainer, footer);
    } else {
        document.body.appendChild(animationContainer);
    }
}
// Dans script.js, après la fonction applySeasonalTheme

function createBubbles() {
    // On vérifie s'il y a déjà un conteneur de bulles, pour ne pas en ajouter à l'infini
    if (document.getElementById('bubble-container')) return;

    const container = document.createElement('div');
    container.id = 'bubble-container';

    const numberOfBubbles = 25; // Change ce nombre pour plus ou moins de bulles

    for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement('span');
        bubble.className = 'bubble';
        
        // On donne à chaque bulle une taille, une position et une vitesse aléatoires
        const size = Math.random() * 60 + 20 + 'px'; // Taille entre 20px et 80px
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + 'vw'; // Position horizontale aléatoire
        bubble.style.animationDuration = (Math.random() * 8 + 5) + 's'; // Durée de l'animation entre 5s et 13s
        bubble.style.animationDelay = Math.random() * 3 + 's'; // Délai de départ aléatoire

        container.appendChild(bubble);
    }
    document.body.appendChild(container);
}
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
            checkAllAchievements();
		});
		card.addEventListener('click', () => openAnimeModal(anime));
		gridElement.appendChild(card);
	});
}

// Dans script.js, remplace l'ancienne fonction updateProfileStats par celle-ci

// Variable globale pour garder une référence au graphique
let genreChartInstance = null;

function createGenreChart(genreCounts) {
    const ctx = document.getElementById('genreChart');
    if (!ctx) return;

    // Détruit l'ancien graphique s'il existe, pour éviter les bugs d'affichage
    if (genreChartInstance) {
        genreChartInstance.destroy();
    }

    const labels = Object.keys(genreCounts);
    const data = Object.values(genreCounts);

    // Couleurs aléatoires et jolies pour le graphique
    const backgroundColors = labels.map(() => `rgba(${Math.floor(Math.random() * 155) + 100}, ${Math.floor(Math.random() * 155) + 100}, ${Math.floor(Math.random() * 200) + 55}, 0.7)`);
    const borderColors = backgroundColors.map(color => color.replace('0.7', '1'));

    genreChartInstance = new Chart(ctx, {
        type: 'pie', // Type de graphique : camembert
        data: {
            labels: labels,
            datasets: [{
                label: 'Animés par genre',
                data: data,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom', // Affiche la légende en bas
                    labels: {
                        color: document.body.classList.contains('light-theme') ? '#181818' : '#eee', // Adapte la couleur du texte au thème
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Répartition des Genres Favoris',
                    color: document.body.classList.contains('light-theme') ? '#181818' : '#eee',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });
}

function updateProfileStats() {
    const favDisplay = document.getElementById('stats-favorites');
    if (!favDisplay) return; // S'assure qu'on est bien sur la page de profil

    // Mise à jour des stats textuelles (code existant)
    document.getElementById('stats-favorites').textContent = getFavorites().size;
    const progress = JSON.parse(localStorage.getItem('animeProgress') || '{}');
    document.getElementById('stats-started').textContent = Object.keys(progress).length;
    
    // NOUVEAU : Logique pour le graphique
    const favorites = getFavorites();
    const chartContainer = document.querySelector('.chart-container');

    if (favorites.size > 0) {
        chartContainer.style.display = 'block';
        const favoriteAnimes = animes.filter(a => favorites.has(a.id));
        const genreCounts = {};
        favoriteAnimes.forEach(anime => {
            if (anime.genres && Array.isArray(anime.genres)) {
                anime.genres.forEach(genre => {
                    genreCounts[genre] = (genreCounts[genre] || 0) + 1;
                });
            }
        });
        
        // Mise à jour du genre préféré (logique existante améliorée)
        let maxCount = 0;
        let favoriteGenre = '-';
        for (const genre in genreCounts) {
            if (genreCounts[genre] > maxCount) {
                maxCount = genreCounts[genre];
                favoriteGenre = genre;
            }
        }
        document.getElementById('stats-fave-genre').textContent = favoriteGenre;

        // Création du graphique
        createGenreChart(genreCounts);

    } else {
        // S'il n'y a pas de favoris, on cache le graphique et on met les stats à zéro
        chartContainer.style.display = 'none';
        document.getElementById('stats-fave-genre').textContent = '-';
    }
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

// Place ces 3 fonctions dans script.js (par exemple, à la fin de la section 3)

function displayAchievements() {
    const grid = document.getElementById('trophiesGrid');
    if (!grid) return; // Ne s'exécute que sur la page de profil

    const unlocked = getFromStorage('shinime_achievements');
    grid.innerHTML = '';

    for (const id in allAchievements) {
        const ach = allAchievements[id];
        const isUnlocked = unlocked.has(id);

        const card = document.createElement('div');
        card.className = `trophy-card ${isUnlocked ? '' : 'locked'}`;
        card.innerHTML = `
            <div class="trophy-icon">${ach.icon}</div>
            <div class="trophy-info">
                <h4 class="trophy-title">${ach.name}</h4>
                <p class="trophy-desc">${ach.description}</p>
            </div>
        `;
        grid.appendChild(card);
    }
}

function checkAndUnlockAchievement(achievementId) {
    const unlocked = getFromStorage('shinime_achievements');
    if (unlocked.has(achievementId)) {
        return; // Déjà débloqué
    }

    unlocked.add(achievementId);
    saveToStorage('shinime_achievements', unlocked);
    
    // Affiche une alerte (on pourra faire une plus belle notification plus tard)
     showNotification(`🏆 Trophée débloqué : ${allAchievements[achievementId].name}`, 'success');
    
    // Met à jour l'affichage sur la page de profil si on y est
    displayAchievements();
}

function checkAllAchievements() {
    const watched = JSON.parse(localStorage.getItem('shinime_watched') || '{}');
    const favorites = getFavorites();

    // ACH_001: Premier épisode regardé
    if (Object.keys(watched).length > 0) {
        checkAndUnlockAchievement('ACH_001');
    }

    // ACH_002: 10 favoris
    if (favorites.size >= 10) {
        checkAndUnlockAchievement('ACH_002');
    }
    
    // ACH_004: Animé d'avant 2000
    const watchedAnimeIds = Object.keys(watched).map(id => parseInt(id));
    const watchedAnimes = animes.filter(a => watchedAnimeIds.includes(a.id));
    if (watchedAnimes.some(a => a.year < 2000)) {
        checkAndUnlockAchievement('ACH_004');
    }

    // ACH_005: 10 épisodes regardés
    let totalWatchedEpisodes = 0;
    for (const id in watched) {
        totalWatchedEpisodes += watched[id].length;
    }
    if (totalWatchedEpisodes >= 10) {
        checkAndUnlockAchievement('ACH_005');
    }
    
    // ACH_006: 5 animés Shonen regardés
    const watchedShonen = watchedAnimes.filter(a => a.genres && a.genres.includes('Shonen'));
    if (watchedShonen.length >= 5) {
        checkAndUnlockAchievement('ACH_006');
    }
}
// =================================================================================
// --- 4. FONCTIONS MODALES (MODALS) ---
// =================================================================================
// Dans script.js, section 4 (FONCTIONS MODALES)
// Dans script.js, section 4 (FONCTIONS MODALES)

function openQuizModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.onclick = () => document.body.removeChild(overlay);

    const modalContent = document.createElement('div');
    modalContent.className = 'quiz-modal-content';
    modalContent.onclick = e => e.stopPropagation();

    modalContent.innerHTML = `
        <h3 style="color: #61dafb; font-size: 1.8rem; margin-top: 0;">🧠 Quiz Animé 🧠</h3>
        <p id="quiz-question">Chargement de la question...</p>
        <div id="quiz-answers"></div>
        <p id="quiz-feedback"></p>
        <button id="next-quiz-btn">Question Suivante</button>
    `;

    overlay.appendChild(modalContent);
    document.body.appendChild(overlay);

    const questionEl = document.getElementById('quiz-question');
    const answersEl = document.getElementById('quiz-answers');
    const feedbackEl = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('next-quiz-btn');

    let correctAnswer = null;

    function generateQuestion() {
        feedbackEl.innerHTML = '';
        nextBtn.style.display = 'none';

        // 1. Choisir 4 animés au hasard (avec une description)
        const candidates = animes.filter(a => a.description && a.description.length > 50)
                               .sort(() => 0.5 - Math.random())
                               .slice(0, 4);
        
        if (candidates.length < 4) {
            questionEl.textContent = "Pas assez de données pour créer une question !";
            answersEl.innerHTML = '';
            return;
        }

        correctAnswer = candidates[0];
        const choices = candidates.sort(() => 0.5 - Math.random()); // Mélanger les 4

        questionEl.textContent = `De quel animé vient cette description : "${correctAnswer.description}"`;
        answersEl.innerHTML = '';

        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'quiz-answer-btn';
            btn.textContent = choice.title;
            btn.onclick = () => handleAnswer(choice);
            answersEl.appendChild(btn);
        });
    }

    function handleAnswer(selectedAnime) {
        // Désactiver tous les boutons
        answersEl.querySelectorAll('button').forEach(btn => btn.disabled = true);

        if (selectedAnime.id === correctAnswer.id) {
            feedbackEl.textContent = 'Bonne réponse ! 🎉';
            feedbackEl.style.color = '#28a745';
        } else {
            feedbackEl.textContent = `Mauvaise réponse... C'était "${correctAnswer.title}"`;
            feedbackEl.style.color = '#dc3545';
        }

        // Mettre en évidence les bonnes/mauvaises réponses
        answersEl.querySelectorAll('button').forEach(btn => {
            if (btn.textContent === correctAnswer.title) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedAnime.title) {
                btn.classList.add('wrong');
            }
        });

        nextBtn.style.display = 'inline-block';
    }

    nextBtn.onclick = generateQuestion;

    generateQuestion(); // Lancer la première question
}
function openRouletteModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.onclick = () => document.body.removeChild(overlay);

    const modalContent = document.createElement('div');
    modalContent.className = 'roulette-modal-content';
    modalContent.onclick = e => e.stopPropagation();

    // Générer la liste des genres disponibles
    const allGenres = [...new Set(animes.flatMap(a => a.genres || []))].sort();
    const genreOptions = allGenres.map(g => `<option value="${g}">${g}</option>`).join('');

    modalContent.innerHTML = `
        <h3>Roulette d'Animés 🎲</h3>
        <p style="color: #aaa;">Choisis tes critères et laisse le hasard faire le reste !</p>
        <div class="roulette-filters">
            <select id="roulette-genre">
                <option value="">Tous les genres</option>
                ${genreOptions}
            </select>
            <select id="roulette-statut">
                <option value="">Tous les statuts</option>
                <option value="Terminé">Terminé</option>
                <option value="En cours">En cours</option>
            </select>
        </div>
        <button id="launch-roulette-btn" class="roulette-btn">Lancer !</button>
    `;

    overlay.appendChild(modalContent);
    document.body.appendChild(overlay);

    // Gérer le clic sur le bouton "Lancer !"
    document.getElementById('launch-roulette-btn').onclick = () => {
        const selectedGenre = document.getElementById('roulette-genre').value;
        const selectedStatut = document.getElementById('roulette-statut').value;

        // Filtrer la liste d'animés
        let filteredAnimes = animes;
        if (selectedGenre) {
            filteredAnimes = filteredAnimes.filter(a => a.genres && a.genres.includes(selectedGenre));
        }
        if (selectedStatut) {
            filteredAnimes = filteredAnimes.filter(a => a.statut === selectedStatut);
        }

        // Dans openRouletteModal
if (filteredAnimes.length === 0) {
    showNotification("Aucun animé ne correspond à tes critères.", 'error');
    return;
}

        // Choisir un animé au hasard dans la liste filtrée
        const randomAnime = filteredAnimes[Math.floor(Math.random() * filteredAnimes.length)];

        // Débloquer le succès "Curieux"
        checkAndUnlockAchievement('ACH_003');
        
        // Fermer la modale de la roulette et ouvrir celle de l'animé
        document.body.removeChild(overlay);
        openAnimeModal(randomAnime);
    };
}
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

// In script.js

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
    
    // NOUVEAU : Crée un conteneur pour les boutons de sélection du lecteur
    const playerSelectorContainer = document.createElement('div');
    playerSelectorContainer.className = 'player-selector-container';

    const iframe = document.createElement('iframe');
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    
    modalCenter.appendChild(playerSelectorContainer); // Ajoute le conteneur AVANT l'iframe
    modalCenter.appendChild(iframe);

    const modalLeft = document.createElement('div');
    modalLeft.className = 'modal-left';
    
    // NOUVEAU : Fonction pour mettre à jour les lecteurs et l'iframe
    function updatePlayers(episodeIndex) {
        // Vide les anciens boutons de lecteur
        playerSelectorContainer.innerHTML = '';
        const players = anime.episodeUrls[episodeIndex];

        if (!players || players.length === 0) {
            iframe.src = ''; // Pas de lecteur pour cet épisode
            return;
        }

        // Crée un bouton pour chaque lecteur disponible
        players.forEach((player, playerIndex) => {
            const playerBtn = document.createElement('button');
            playerBtn.className = 'player-btn';
            playerBtn.textContent = player.name || `Lecteur ${playerIndex + 1}`;
            playerBtn.onclick = () => {
                iframe.src = player.url;
                // Met en surbrillance le bouton du lecteur actif
                playerSelectorContainer.querySelectorAll('.player-btn').forEach(btn => btn.classList.remove('active'));
                playerBtn.classList.add('active');
            };
            playerSelectorContainer.appendChild(playerBtn);
        });

        // Charge automatiquement le premier lecteur et active son bouton
        iframe.src = players[0].url;
        playerSelectorContainer.querySelector('.player-btn').classList.add('active');
    }

    const watchedEpisodes = getWatchedEpisodes(anime.id);

    if (Array.isArray(anime.episodeUrls)) {
        anime.episodeUrls.forEach((episodePlayers, idx) => {
            if (!episodePlayers || episodePlayers.length === 0) return;

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
            
            // MODIFIÉ : Le clic sur un épisode met maintenant à jour les lecteurs disponibles
            epBtn.addEventListener('click', () => {
                updatePlayers(idx); // Appelle la nouvelle fonction
                
                modalLeft.querySelectorAll('.ep-btn').forEach(b => b.classList.remove('active'));
                epBtn.classList.add('active');
                
                let progress = JSON.parse(localStorage.getItem('animeProgress') || '{}');
                progress[anime.id] = idx;
                localStorage.setItem('animeProgress', JSON.stringify(progress));
                displayAllGrids();
            });

            watchedBtn.addEventListener('click', () => {
                const currentWatched = getWatchedEpisodes(anime.id);
                currentWatched.has(idx) ? currentWatched.delete(idx) : currentWatched.add(idx);
                saveWatchedEpisodes(anime.id, currentWatched);
                entry.classList.toggle('is-watched');
                checkAllAchievements();
            });

            entry.appendChild(epBtn);
            entry.appendChild(watchedBtn);
            modalLeft.appendChild(entry);
        });
        
        // Active le premier bouton d'épisode et charge ses lecteurs par défaut
        if (anime.episodeUrls.length > 0) {
            updatePlayers(0);
            const firstEpBtn = modalLeft.querySelector('.ep-btn');
            if (firstEpBtn) firstEpBtn.classList.add('active');
        }

    }

    // Le reste de la fonction (modalRight, description, etc.) ne change pas...
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
		<p><b>Statut :</b> ${anime.statut} </p>
    `;
    modalRight.appendChild(infoContainer);

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
    // On déclare une variable `animes` qui sera remplie plus tard

    // --- On va chercher les données dans le fichier data.json ---
    fetch('data.json')
        .then(response => response.json()) // On transforme la réponse en JSON
        .then(data => {
            // Une fois les données chargées, on les met dans notre variable
            animes = data;

            // ---- TOUT TON ANCIEN CODE D'INITIALISATION EST MAINTENANT ICI ----
            
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
            checkAllAchievements();
            displayAchievements();

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
                    yearSelect.innerHTML = '<option value="">Année</option>' + [...yearsSet].sort((a, b) => b - a).map(y => `<option value="${y}">${y}</option>`).join('');
                };

                populateFilters();
                letterSelect.addEventListener('change', filterCatalogue);
                genreContainer.addEventListener('change', filterCatalogue);
                yearSelect.addEventListener('change', filterCatalogue);
                resetFiltersBtn.addEventListener('click', () => {
                    letterSelect.value = '';
                    yearSelect.value = '';
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
                        p.onclick = () => {
                            openAnimeModal(a);
                            searchResults.style.display = 'none';
                            searchInput.value = '';
                        };
                        searchResults.appendChild(p);
                    });
                } else {
                    searchResults.innerHTML = `<p>Aucun résultat</p>`;
                }
            });
            document.addEventListener('click', e => {
                if (!e.target.closest('.search-container')) searchResults.style.display = 'none';
            });

            // --- Thème ---
            const setTheme = (theme) => {
                document.body.classList.toggle('light-theme', theme === 'light');
                themeBtn.textContent = theme === 'light' ? '🌞 Mode clair' : '🌙 Mode sombre';
                localStorage.setItem('shinime_theme', theme);
            };
            themeBtn.onclick = () => setTheme(document.body.classList.contains('light-theme') ? 'dark' : 'light');
            setTheme(localStorage.getItem('shinime_theme') || 'dark');
            applySeasonalTheme();
            // --- Boutons Header ---
            if (planningBtn) {
                planningBtn.onclick = (e) => {
                    e.preventDefault();
                    openPlanningModal();
                };
            }
        // Le nouveau code
if (randomBtn) {
    randomBtn.onclick = () => {
        openRouletteModal(); // Ouvre la nouvelle fenêtre de sélection
    };
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
            if (ecchiConfirm) ecchiConfirm.onclick = () => {
                ecchiAgeVerified = true;
                ecchiAgeModal.style.display = 'none';
                updateEcchiOverlay();
            };
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
                    if (newPseudo !== null) {
                        localStorage.setItem('shinime_pseudo', newPseudo.trim());
                        displayPseudo();
                    }
                };
                avatarDisplay.onclick = () => openAvatarModal();
                bannerDisplay.onclick = () => openBannerModal();

                const setupClearButton = (btnId, storageKey, listName) => {
                    const btn = document.getElementById(btnId);
                    if (btn) btn.onclick = () => {
                        if (confirm(`Êtes-vous sûr de vouloir vider votre liste "${listName}" ?`)) {
                            localStorage.removeItem(storageKey);
                            displayAllGrids();
                            showNotification(`La liste "${listName}" a été vidée.`, 'success');
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
        })
        .catch(error => {
            // Au cas où il y a une erreur de chargement du fichier JSON
            console.error("Erreur de chargement du fichier data.json:", error);
            // Tu pourrais afficher un message d'erreur à l'utilisateur ici
        });

    // --- L'Anti-copie reste en dehors du fetch ---
    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("keydown", e => {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key.toUpperCase())) || (e.ctrlKey && e.key.toUpperCase() === 'U')) {
            e.preventDefault();
        }
    });
});
// Dans la section 5 (DOMContentLoaded), avec les autres sélections d'éléments

const quizBtn = document.getElementById('quizBtn');

// ... et avec les autres event listeners

if (quizBtn) {
    quizBtn.onclick = (e) => {
        e.preventDefault();
        openQuizModal();
    };
}