const baseUrl = 'http://localhost:3001';

export const checkServerResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  };
  
export function getItems() {
    return fetch(`${baseUrl}/items`, { method: "GET" }).then(checkServerResponse);
  }