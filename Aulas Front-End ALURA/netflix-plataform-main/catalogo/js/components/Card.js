// Importa funções utilitárias do arquivo utils.js
import { getYouTubeId, getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from '../utils.js';

// Função para criar um elemento de cartão (card) para um item de filme ou série
export function createCard(item) {
    // Cria o elemento div principal do cartão
    const card = document.createElement('div');
    card.className = 'movie-card';
    // Se o item tem progresso, adiciona a classe 'has-progress'
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // Cria o elemento de imagem para a capa do filme
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = `Movie cover`;

    // Cria o elemento iframe para o vídeo do YouTube
    const iframe = document.createElement('iframe');
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";

    // Extrai o ID do vídeo do YouTube da URL
    const videoId = getYouTubeId(item.youtube);

    // Adiciona o iframe e a imagem ao cartão
    card.appendChild(iframe);
    card.appendChild(img);

    // Gera um badge de idade aleatório
    const ageBadge = getRandomAgeBadge();

    // Cria o elemento de detalhes do cartão com botões, informações e tags
    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    // Adiciona os detalhes ao cartão
    card.appendChild(details);

    // Se o item tem progresso, cria e adiciona uma barra de progresso
    if (item.progress) {
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        pbValue.style.width = `${item.progress}%`;
        pbContainer.appendChild(pbValue);
        card.appendChild(pbContainer);
    }

    let playTimeout;
    // Event listener para quando o mouse entra no cartão
    card.addEventListener('mouseenter', () => {
        // Calcula a posição do cartão na tela para ajustar a origem da animação
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        
        // Adiciona classe baseada na posição para animação
        if (rect.left < 100) {
            card.classList.add('origin-left');
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        // Define um timeout para iniciar o vídeo após 600ms
        playTimeout = setTimeout(() => {
            // Define o src do iframe para o vídeo do YouTube com autoplay
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            iframe.classList.add('playing');
            img.classList.add('playing-video');
        }, 600);
    });

    // Event listener para quando o mouse sai do cartão
    card.addEventListener('mouseleave', () => {
        // Cancela o timeout se o mouse sair antes
        clearTimeout(playTimeout);
        // Remove classes de reprodução
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        // Limpa o src do iframe para parar o vídeo
        iframe.src = "";
        // Remove classes de origem
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    // Retorna o elemento do cartão criado
    return card;
}
