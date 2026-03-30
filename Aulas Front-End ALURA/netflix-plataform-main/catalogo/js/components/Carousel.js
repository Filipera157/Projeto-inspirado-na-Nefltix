// Importa a função para criar cartões do componente Card.js
import { createCard } from './Card.js';

// Função para criar um elemento de carrossel (carousel) para uma categoria
export function createCarousel(category) {
    // Cria o elemento div principal da seção do slider
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Cria o cabeçalho do slider contendo título e indicadores
    const header = document.createElement('div');
    header.className = 'slider-header';

    // Cria o elemento de título com o nome da categoria
    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    // Cria o elemento de indicadores (pode ser usado para navegação)
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    // Adiciona título e indicadores ao cabeçalho
    header.appendChild(title);
    header.appendChild(indicators);
    // Adiciona o cabeçalho à seção
    section.appendChild(header);

    // Cria a linha de filmes onde os cartões serão colocados
    const row = document.createElement('div');
    row.className = 'movie-row';

    // Para cada item na categoria, cria um cartão e adiciona à linha
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    // Adiciona a linha à seção
    section.appendChild(row);
    // Retorna a seção completa do carrossel
    return section;
}
