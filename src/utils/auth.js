var TokenKey = 'access_token'

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.clear();
}

export function setAuth(type) {
  return localStorage.setItem('Auth', type);
}

export function getAuthType() {
  return localStorage.getItem('Auth');
}

export function clearAll() {
  return localStorage.clear();
}


export function setUid( uid ) {
    return localStorage.setItem("uid", uid);
}

export function getUid() {
    return localStorage.getItem("uid");
  }