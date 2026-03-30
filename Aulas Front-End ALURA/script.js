// Script para alternar entre dark e light mode

// Seleciona o botão de alternância de tema e o corpo do documento
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há uma preferência de tema salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    // Aplica o tema salvo ao corpo da página
    body.classList.add(savedTheme);
    // Atualiza o ícone do botão conforme o tema
    updateButton(savedTheme);
}

// Adiciona um event listener ao botão para alternar o tema ao clicar
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        // Remove a classe light-mode para voltar ao dark mode
        body.classList.remove('light-mode');
        // Salva a preferência no localStorage
        localStorage.setItem('theme', '');
        // Atualiza o botão
        updateButton('');
    } else {
        // Adiciona a classe light-mode para ativar o light mode
        body.classList.add('light-mode');
        // Salva a preferência no localStorage
        localStorage.setItem('theme', 'light-mode');
        // Atualiza o botão
        updateButton('light-mode');
    }
});

// Função para atualizar o ícone do botão baseado no tema atual
function updateButton(theme) {
    if (theme === 'light-mode') {
        // Define o ícone como sol para indicar light mode
        themeToggle.textContent = '☀️'; // Sol para light mode
    } else {
        // Define o ícone como lua para indicar dark mode
        themeToggle.textContent = '🌙'; // Lua para dark mode
    }
}

// Seleciona todos os links de perfil
const profileLinks = document.querySelectorAll('.profile');

// Adiciona event listener a cada link de perfil
profileLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Obtém o nome do perfil da figcaption
        const name = link.querySelector('figcaption').textContent;
        // Obtém a imagem do perfil do src da img
        const image = link.querySelector('img').src;
        
        // Armazena o nome e a imagem no localStorage
        localStorage.setItem('perfilAtivoNome', name);
        localStorage.setItem('perfilAtivoImagem', image);
    });
});