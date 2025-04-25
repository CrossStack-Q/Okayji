const API = "http://localhost:5000/api";

async function register() {
  const user = {
    name: document.getElementById("register-name").value,
    email: document.getElementById("register-email").value,
    userId: document.getElementById("register-userid").value,
    password: document.getElementById("register-password").value,
    userType: document.getElementById("register-usertype").value,
  };

  const res = await fetch(`${API}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  alert((await res.json()).message);
}

async function login() {
  const creds = {
    email: document.getElementById("login-email").value,
    password: document.getElementById("login-password").value,
  };

  const res = await fetch(`${API}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(creds)
  });

  const data = await res.json();
  if (res.ok) {
    alert("Login successful");
    document.getElementById("admin-panel").style.display = "block";
    loadCategories();
    loadSubCategories();
    loadProducts();
  } else {
    alert(data.message || "Login failed");
  }
}

async function addCategory() {
  const name = document.getElementById("category-name").value;
  const res = await fetch(`${API}/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  await res.json();
  alert("Category added!");
  loadCategories();
}

async function addSubCategory() {
  const name = document.getElementById("subcategory-name").value;
  const categoryId = document.getElementById("category-dropdown").value;

  const res = await fetch(`${API}/subcategories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, categoryId })
  });

  await res.json();
  alert("Subcategory added!");
  loadSubCategories();
}

async function addProduct() {
  const product = {
    name: document.getElementById("product-name").value,
    image: document.getElementById("product-image").value,
    productCode: document.getElementById("product-code").value,
    description: document.getElementById("product-description").value,
    subCategoryId: document.getElementById("subcategory-dropdown").value,
  };

  const res = await fetch(`${API}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });

  await res.json();
  alert("Product added!");
  loadProducts();
}

async function addVariation() {
  const variation = {
    productId: document.getElementById("product-dropdown").value,
    size: document.getElementById("var-size").value,
    color: document.getElementById("var-color").value,
    price: document.getElementById("var-price").value,
    discount: document.getElementById("var-discount").value
  };

  const res = await fetch(`${API}/products/variation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(variation)
  });

  await res.json();
  alert("Variation added!");
}

async function showAll() {
  const res = await fetch(`${API}/products`);
  const products = await res.json();
  document.getElementById("output").textContent = JSON.stringify(products, null, 2);
}

async function loadCategories() {
  const res = await fetch(`${API}/categories`);
  const data = await res.json();
  const dropdown = document.getElementById("category-dropdown");
  dropdown.innerHTML = "";
  data.forEach((c) => {
    const option = document.createElement("option");
    option.value = c._id;
    option.textContent = c.name;
    dropdown.appendChild(option);
  });
}

async function loadSubCategories() {
  const res = await fetch(`${API}/subcategories`);
  const data = await res.json();
  const dropdown = document.getElementById("subcategory-dropdown");
  dropdown.innerHTML = "";
  data.forEach((s) => {
    const option = document.createElement("option");
    option.value = s._id;
    option.textContent = s.name;
    dropdown.appendChild(option);
  });
}

async function loadProducts() {
  const res = await fetch(`${API}/products`);
  const data = await res.json();
  const dropdown = document.getElementById("product-dropdown");
  dropdown.innerHTML = "";
  data.forEach((p) => {
    const option = document.createElement("option");
    option.value = p._id;
    option.textContent = p.name;
    dropdown.appendChild(option);
  });
}
