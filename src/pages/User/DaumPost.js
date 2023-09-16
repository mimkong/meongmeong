import DaumPostCode from "react-daum-postcode";

function DaumPost({ handleComplete }) {
  const handleAddressSelection = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    const { addressType, bname, buildingName } = data;
    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress += `${extraAddress !== "" && ", "}${buildingName}`;
      }
      fullAddress += `${extraAddress !== "" ? ` ${extraAddress}` : ""}`;
    }
    handleComplete({ address: fullAddress });
  };
  return (
    <DaumPostCode onComplete={handleAddressSelection} className="post-code" />
  );
}

export default DaumPost;
