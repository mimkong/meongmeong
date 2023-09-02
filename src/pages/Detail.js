import { useSelector } from "react-redux";

function Detail() {
  let a = useSelector((state) => {
    return state;
  });
  console.log(typeof a);
  return (
    <>
      <div>Detail페이지 입니다.</div>
    </>
  );
}

export default Detail;
