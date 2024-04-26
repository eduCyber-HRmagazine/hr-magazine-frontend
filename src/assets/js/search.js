function search(category, checkbox) {
  searchData = document.getElementById("search-container");
  console.log(searchData);
  searchData.innerHTML = "";
  if (checkbox.checked) {
    articlesName[category].forEach((element) => {
      searchData.innerHTML += `
      <a href="${element['url']}" class="fw-600 text-decoration-none d-block fs-8 text-white mx-2">${element['title']}</a>
      <hr class="text-white bg-white">
      `;
    });
  }
}
