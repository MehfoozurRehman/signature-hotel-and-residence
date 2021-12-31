export function isNullOrEmpty(str) {
  if (isNull(str)) return true;
  else if (isEmpty(str)) return true;
  else return false;
}

export function isNull(str) {
  return str === null;
}

export function isEmpty(str) {
  return str === "";
}
export function stringsNotEqual(str1, str2) {
  return str1 !== str2;
}

export function isNullOrEmptyArray(array) {
  if (isNullArray(array)) return true;
  else if (isEmptyArray(array)) return true;
  else return false;
}
export function isNullArray(array) {
  return array === null;
}

export function isEmptyArray(array) {
  return array.length === 0;
}

export async function getBase64(file, cb) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    cb(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
