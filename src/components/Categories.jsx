import React, { useEffect, useState } from "react";
import { getCategories } from "../apis/categories";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const searchQuery = {
    category: "cooljmessy",
  };
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <main>
      <h3 className="text-center">List of Categories</h3>

      <ul className="single-view-ul">
        {categories.map((category) => {
          return (
            <li className="category-list" key={category.slug}>
              <div>
                <p className="text-center">{category.slug}</p>
                <p>{category.description}</p>
              </div>
              <Link
                to={{
                  pathname: "/reviews",
                  search: category.slug,
                }}
              >
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="user-button"
                  onClick={() => {}}
                >
                  View Reviews
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Categories;
