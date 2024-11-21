import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Permite que o servidor interprete requisições com corpo formato JSON.
    app.use(express.json());

    // Rota para buscar (TODOS OS POSTS)
    app.get("/posts", listarPosts);
}

export default routes;
