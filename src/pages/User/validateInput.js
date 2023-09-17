function validateInput(formData) {
  const errors = [];
  // 공백이 아닌 문자가 있는지 검사
  const nameReg = /\S/;

  // 5~12자의 알파벳 및 숫자 (특수문자 사용하지 않음)
  const idReg = /^[a-zA-Z0-9]{5,12}$/;

  // 최소 8자, 영어(대문자 또는 소문자), 숫자포함
  const passwordReg = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

  // 10~11자리의 숫자
  const phoneNumberReg = /^\d{10,11}$/;

  if (!nameReg.test(formData?.name)) {
    errors.push("이름을 입력해주세요.");
  }
  if (!idReg.test(formData?.userId)) {
    errors.push("아이디는 5~12자의 알파벳 및 숫자로 이루어져야 합니다.");
  }
  if (!passwordReg.test(formData?.password)) {
    errors.push(
      "비밀번호는 최소 8자리이며, 영어(대문자 또는 소문자), 숫자를 포함해야 합니다."
    );
  }
  if (formData?.password !== formData?.confirmPassword) {
    errors.push("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
  }
  if (!phoneNumberReg.test(formData?.phoneNumber)) {
    errors.push("올바른 전화번호를 입력해주세요.");
  }
  if (!nameReg.test(formData?.address)) {
    errors.push("주소를 입력해주세요.");
  }

  if (errors.length > 0) {
    alert(errors[0]);
    return false;
  }

  return true;
}

export default validateInput;
