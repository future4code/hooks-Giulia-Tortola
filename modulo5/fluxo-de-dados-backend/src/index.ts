import express from "express";

import { v4 as uuidv4 } from "uuid";
import { AddressInfo } from "net";
import { products } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/test", (req, res) => {
  res.send("API FUNCIONAL!");
});

app.post("/create-product", (req, res) => {
  const productName = req.body.name;
  const productPrice = req.body.price;
  try {
    if (productName === "" || productPrice <= 0) {
      throw new Error("Nome ou valor do Produto vazio!");
    } else if (
      typeof productName !== "string" ||
      typeof productPrice !== "number"
    ) {
      throw new Error("Formato inválido, digite um nome ou valor válido!");
    } else {
      const newProduct = {
        id: uuidv4(),
        name: productName,
        price: productPrice,
      };
      products.push(newProduct);
      res.send("Produto foi criado!");
    }
  } catch (error: any) {
    res.send(error.message);
  }
});

app.put("/products-att/:id", (req, res) => {
  const idProduct = req.params.id;
  const newPrice = req.body.price;

  products.map((product) => {
    try {
      if (typeof newPrice !== "number") {
        throw new Error("Formato inválido, digite um número");
      } else if (newPrice <= 0) {
        throw new Error("Preço inválido, digite um valor válido");
      } else if (product.id === idProduct) {
        product.price = newPrice;
        res.send(products);
      } else {
        throw new Error("Produto não encontrado");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  });
});

app.delete("/products-delete/:id", (req, res) => {
  const idProduct = req.params.id;

  products.map((product, index) => {
    try {
      if (idProduct === product.id) {
        products.splice(index, 1);
      } else {
        throw new Error("Produto não encontrado!");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  });

  res.send(products);
});
