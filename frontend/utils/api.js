const API = 'http://localhost:5000/api';

async function registerUser(data) {
  const res = await fetch(`${API}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

async function loginUser(data) {
  const res = await fetch(`${API}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}

async function getProducts() {
  const res = await fetch(`${API}/products`);
  return await res.json();
}

async function getProductById(id) {
  const res = await fetch(`${API}/products/${id}`);
  return await res.json();
}
