const setValue = (val) => {
  let currentVal = val;
  localStorage.setItem("current-value", currentVal);
};
const getValue = () => {
  let currentVal = false;
  const storedValue = localStorage.getItem("current-value");
  if (storedValue) {
    currentVal = JSON.parse(storedValue);
  }
  return currentVal;
};
export { setValue, getValue };
