import express from "express";

// Base de dados
const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placehold.co/600x400"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante ao pôr do sol",
        iimagem: "https://placehold.co/600x400"
    },
    {
        id: 3,
        descricao: "Gato dormindo em uma caixa",
        imagem: "https://placehold.co/600x400"
    },
    {
        id: 4,
        descricao: "Cachorro correndo na praia",
        imagem: "https://placehold.co/600x400"
    },
    {
        id: 5,
        descricao: "Montanha coberta de neve",
        imagem: "https://placehold.co/600x400"
    },
    {
        id: 6,
        descricao: "Comida deliciosa em um restaurante",
        imagem: "https://placehold.co/600x400"
    },
    {
        id: 7,
        descricao: "Comida ruim da esquina",
        imagem: "https://placehold.co/600x400"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando ...");
});

// Rota que o client acessa para pegar o dado em nosso server. (TODOS OS POSTS)
app.get("/posts", (req, res) => {
    //res.status(200).send("Boas vindas!");
    res.status(200).json(posts);
});

// Funcao para ir no array e pegar o ID (Buscar um dado dentro de uma estrutura)
function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

// No navegador o :id vai ser substituido por um dado variavel (RETORNA 1 UNICO DADO(POST))
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});

