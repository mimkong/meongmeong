import { useSelector } from "react-redux";

function Detail() {
  let a = useSelector((state) => state.item);
  console.log(a);
  return (
    <>
      <div>Detail페이지 입니다.</div>
    </>
  );
}

export default Detail;
