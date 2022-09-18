import validaor from "validator";
export let signUpErrors = (
  userName,
  email,
  password,
  cPassword,
  student,
  teacher
) => {
  cPassword = password;
  let err = [];
  userName.length > 3 && !userName.includes(" ")
    ? ""
    : err.push("invalid user name");
  validaor.isEmail(email) ? "" : err.push("wrong emil");
  validaor.isStrongPassword(password) ? "" : err.push("password is not strong");
  password === cPassword ? "" : err.push("Passwords not mach");
  student || teacher ? "" : err.push("select you are teacher or student ");
  return err;
};
export let LogInErrors = (email, password, pin = "0000") => {
  let err = [];
  pin.length === 4 && !pin.includes(" ") ? "" : err.push("invalid pin");
  validaor.isEmail(email) ? "" : err.push("wrong emil");
  validaor.isStrongPassword(password) ? "" : err.push("password is not strong");
  return err;
};
export let hideBtn = (id) => console.log(id);
  // document.querySelector(`#${id}`).classList.replace(`inline-flex`, `hidden`);

export let showBtn = (id) => console.log(id);
  // document.querySelector(`#${id}`).classList.replace(`hidden`, `inline-flex`);
