import { useSelector } from "react-redux";

function RecentlyViewedItem() {
  const watchedId = JSON.parse(localStorage.getItem("watched"));
  const items = useSelector((state) => state.item);
  const matchedItems = watchedId.map((watchedId) =>
    items.find((item) => item.id === watchedId)
  );
  console.log(matchedItems);
  return (
    <>
      <div>최근 본 상품 페이지 입니다.</div>
    </>
  );
}

export default RecentlyViewedItem;
