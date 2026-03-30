// Função para extrair o ID do vídeo do YouTube a partir de uma URL
export function getYouTubeId(url) {
    // Se não houver URL, retorna um ID padrão
    if (!url) return "7RUA0IOfar8";
    // Se a URL contém 'v=', extrai o ID após 'v=' e antes de '&'
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    // Caso contrário, pega a última parte da URL após '/'
    return url.split('/').pop();
}

// Função para gerar um score de match aleatório entre 80 e 99
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Função para gerar uma duração aleatória; se tem progresso, retorna "10 temporadas", senão uma duração em horas e minutos
export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// Função para gerar um badge de idade aleatório: "A16" com classe 'red-accent' ou "16" sem classe
export function getRandomAgeBadge() {
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}
