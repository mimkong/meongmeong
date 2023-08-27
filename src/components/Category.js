import "./Category.css";
import "./ProducList";
function Category({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category">
      <ul>
        {categories.map((category) => (
          <li
            className={selectedCategory === category.id ? "active" : ""}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
