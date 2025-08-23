window.onload = function() {
  const products = [
    { name: "T-Shirt", category: "Clothing" },
    { name: "Jeans", category: "Clothing" },
    { name: "Headphones", category: "Gadgets" },
    { name: "Smartphone", category: "Gadgets" },
    { name: "Novel", category: "Books" },
    { name: "Cookbook", category: "Books" }
  ];

  const categoryDropdown = document.getElementById('categoryDropdown');
  const productList = document.getElementById('productList');
  let selectedDiv = null;

  function selectProduct(div) {
    if (selectedDiv) {
      selectedDiv.classList.remove('selected');
    }
    selectedDiv = div;
    div.classList.add('selected');
  }

  function renderProducts(category) {
    productList.innerHTML = '';
    const filtered = products.filter(product =>
      category === 'All' ? true : product.category === category
    );

    filtered.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product-item';
      div.textContent = product.name;

      div.addEventListener('click', () => selectProduct(div));
      productList.appendChild(div);
    });
  }

  categoryDropdown.addEventListener('change', function() {
    selectedDiv = null; 
    renderProducts(this.value);
  });

  renderProducts('All');
};
