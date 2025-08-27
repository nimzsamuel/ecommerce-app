// Fake API for products (you can replace with real API later)

const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 20,
    image: "/images/tshirt1.jpg",
    category: "Tops",
    description: "A soft cotton white T-shirt, perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 50,
    image: "/images/jeans1.jpg",
    category: "Bottoms",
    description: "Slim-fit blue denim jeans with a modern cut.",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 120,
    image: "/images/jacket1.jpg",
    category: "Outerwear",
    description: "Premium black leather jacket with zip details.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === parseInt(id)));
    }, 500);
  });
};
