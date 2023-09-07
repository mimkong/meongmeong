import "./Category.css";
import "./ProductList";
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
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
