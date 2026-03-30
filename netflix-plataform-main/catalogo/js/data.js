// Este arquivo contém os dados das categorias e itens do catálogo da plataforma Netflix-like.
// Cada categoria tem um título e uma lista de itens, onde cada item representa um filme ou série com propriedades como imagem, status no top 10, badges, progresso e link do YouTube.

export const categories = [
    {
        // Categoria "Mais assistidos" - contém filmes populares
        title: "Mais assistidos",
        items: [
            {
                // Primeiro item: Filme com imagem, marcado como top 10, com badge "Clássico" em vermelho, progresso 0 (não assistido), e link do YouTube
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDeMAfV0FS-phw5D3fWKMpHCQQUpcLk0O7zQ&s", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://youtu.be/4jGRyEa2jhE?si=pLjcin9B6U0FwPC6"
            },
            {
                // Segundo item: Filme com imagem, progresso 0, link do YouTube
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                // Terceiro item: Filme com imagem, progresso 0, link do YouTube
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                // Quarto item: Filme com imagem, progresso 0, link do YouTube
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
        ]
    },
    {
        // Categoria "Séries" - contém séries de TV
        title: "Séries",
        items: [
            // Primeira série: Imagem, top 10, badge "Nova temporada" vermelho, link YouTube
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            // Segunda série: Imagem, top 10, link YouTube
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            // Terceira série: Imagem, badge "Novo episódio" vermelho, link YouTube
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            // Quarta série: Imagem, badge "Novidade" vermelho, link YouTube
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    },
    {
        // Categoria "Para maratonar" - séries ou filmes ideais para assistir em sequência
        title: "Para maratonar",
        items: [
            // Primeiro item: Imagem, top 10, link YouTube
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            // Segundo item: Imagem, top 10, badge "Novidade" vermelho, link YouTube
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            // Terceiro item: Imagem, top 10, badge "Novo episódio" vermelho, link YouTube
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            // Quarto item: Imagem, top 10, badge "Novo episódio" vermelho, link YouTube
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    }
];
