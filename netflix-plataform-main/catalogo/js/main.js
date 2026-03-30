// Importa os dados das categorias do arquivo data.js
import { categories } from './data.js';
// Importa a função para criar carrosséis do componente Carousel.js
import { createCarousel } from './components/Carousel.js';

// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o nome e a imagem do perfil ativo armazenados no localStorage
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Se o perfil estiver definido, atualiza os elementos da interface
    if (nomePerfil && imagemPerfil) {
        // Seleciona o link para o modo kids e o ícone do perfil
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        // Define o texto do link kids como o nome do perfil
        if (kidsLink) kidsLink.textContent = nomePerfil;
        // Define a imagem do ícone do perfil
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Seleciona o container principal onde os carrosséis serão adicionados
    const container = document.getElementById('main-content');
    
    // Se o container existir, cria um carrossel para cada categoria e adiciona ao container
    if (container) {
        categories.forEach(category => {
            // Cria um elemento de carrossel para a categoria atual
            const carousel = createCarousel(category);
            // Adiciona o carrossel ao container principal
            container.appendChild(carousel);
        });
    }
});
