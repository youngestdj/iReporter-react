export const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const getCookie = (cookieName) => {
  const name = `${cookieName} =`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArr = decodedCookie.split(';');
  for (let i = 0; i < cookieArr.length; i += 1) {
    let j = cookieArr[i];
    while (j.charAt(0) === ' ') {
      j = j.substring(1);
    }
    if (j.indexOf(name) === 0) return j.substring(name.length, j.length);
  }
  return '';
};

export const checkCookie = (cookieName) => {
  if (getCookie(cookieName) !== '') {
    return true;
  }
  return false;
};

export const extendCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};
