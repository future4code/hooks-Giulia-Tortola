import connection from "./connection";

const createUsersTable = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
            );
        `)

        console.log("Tabela de usuários criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Usuários.")
        console.log(error.sqlMessage)
    }
}
// const createProductsTable= async () => {
//     try {
//         await connection.raw(`
//             CREATE TABLE IF NOT EXISTS labecommerce_users (
//             id VARCHAR(255) PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) NOT NULL,
//             password VARCHAR(255) NOT NULL
//             );
//         `)

//         console.log("Tabela Produtos criada com sucesso.")
//     } catch (error) {
//         console.log("Erro ao criar tabela Produtos.")
//         console.log(error.sqlMessage)
//     }
// }
// const createPurchaseTable = async () => {
//     try {
//         await connection.raw(`
//             CREATE TABLE IF NOT EXISTS labecommerce_purchases (
//             id VARCHAR(255) PRIMARY KEY NOT NULL,
//             user_id VARCHAR(255) NOT NULL, 
//             FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
//             product_id VARCHAR(255) NOT NULL, 
//             FOREIGN KEY (product_id) REFERENCES labecommerce_products(id)
//             quantity INT NOT NULL,
//             total_price DOUBLE NOT NULL
//             );
//         `)

//         console.log("Tabela De Compras criada com sucesso.")
//     } catch (error) {
//         console.log("Erro ao criar tabela de Compras.")
//         console.log(error.sqlMessage)
//     }
// }

// async function popularTabelaProdutos() {
//     try {
//         await connection.raw(`
//             INSERT INTO Produtos (id, nome, preco, categoria)
//             VALUES 
//             (1, "Chinelo", 19.99, "calçados"),
//             (2, "Relógio", 30.00, "acessórios"),
//             (3, "Boné", 25.00, "acessórios"),
//             (4, "Camiseta", 49.99, "roupas"),
//             (5, "Calça", 99.00, "roupas");
//         `)
        
//         console.log("Tabela Produtos populada com sucesso.")
//     } catch (error) {
//         console.log("Erro ao popular tabela Produtos.")
//         console.log(error.sqlMessage)
//     }
// }

createUsersTable()
// .then(() => popularTabelaProdutos())
// .finally(() => process.exit())