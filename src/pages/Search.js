import { useSelector } from "react-redux";
import ProductList from "./Shop/ProductList";

function Search() {
  const searchResults = useSelector((state) => state.search.results);
  return (
    <div className="menu-container">
      <h1>SEARCH</h1>
      <div className="search-results">
        {searchResults.length === 0 ? (
          <p className="empty-text">검색 결과가 없습니다.</p>
        ) : (
          <ProductList shopItems={searchResults} />
        )}
      </div>
    </div>
  );
}

export default Search;
