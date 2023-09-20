import { Product } from "@prisma/client";
import prisma from "../database/database";

const TABLE_NAME = "product";

export type CreateProduct = Omit<Product, "id">

async function getProducts() {
  const result = await prisma.product.findMany();
  return result;
}

async function getProduct(id: number) {
  const result = await prisma.product.findUnique({where:{id}});
  return result;
}

async function createProduct(product: CreateProduct) {
  return await prisma.product.create({
    data: product
  })
}

async function deleteProduct(id: number) {
  return await prisma.product.delete({
    where: { id }
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct
}

export default productRepository;