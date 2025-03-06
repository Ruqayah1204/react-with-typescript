import { useEffect, useState } from "react";

interface Product {
  volumeInfo: {
    title: string;
    imageLinks: {
      thumbnail: string;
    };
    authors: string;
    description: string;
  };
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const API =
      "https://www.googleapis.com/books/v1/volumes?q=%22chinua%20achebe%22";

    const fetchData = () => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.items);
          console.log(data);
        });
    };

    fetchData();
  }, []);

  return (
    <section className="product-section">
      {products.map((product, index) => (
        <div key={index} className="card">
          <img src={product.volumeInfo.imageLinks.thumbnail} alt="" />
          <h3>{product.volumeInfo.title}</h3>
          <span>{product.volumeInfo.authors}</span>
          <p className="product-description">
            {product.volumeInfo.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Products;
