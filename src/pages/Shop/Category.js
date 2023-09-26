import "../../styles/PageStyle.css";
import "./ProductList";
import { Link } from "react-router-dom";

function Category({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category">
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={selectedCategory === category.categories ? "active" : ""}
            onClick={() => onSelectCategory(category.categories)}
          >
            <Link
              to={`/shop/${category.categories}`}
              onClick={() => {
                console.log("Category clicked:", category.name);
                onSelectCategory(categories.categories);
              }}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
