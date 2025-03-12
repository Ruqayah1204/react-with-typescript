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
  const [query, setQuery] = useState("Chinua Achebe");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const API = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    const fetchData = () => {
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.items || []);
          console.log(data);
        });
    };

    fetchData();
  }, [query]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(inputValue);

    setInputValue("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter books..."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button>Search</button>
      </form>
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
    </section>
  );
};

export default Products;
