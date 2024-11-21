import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados MongoDB usando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados "imersao-instabyte".
export default async function getTodosPosts(){
    // Obtém o banco de dados "imersao-instabyte" a partir da conexão estabelecida.
    const db = conexao.db("imersao-instabyte");
    // Obtém a coleção "posts" do banco de dados.
    const colecao = db.collection("posts");
    // Executa uma consulta para encontrar todos os documentos da coleção e retorna um array com os resultados.
    return colecao.find().toArray();
}