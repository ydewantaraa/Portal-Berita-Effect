// Fungsi untuk memuat berita dari API
async function loadNews() {
  const apiKey = "ada04a18bca64f73bab55836d2b6abb0"; // Ganti dengan kunci API Anda
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Ambil array berita dari response
    const articles = data.articles;

    // Tampilkan berita ke dalam HTML
    const newsContainer = document.getElementById("newsContainer");

    articles.forEach((article) => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("col-md-4");
      newsItem.innerHTML = `
                        <div class="card newsItem">
                            <img src="${
                              article.urlToImage ||
                              "https://via.placeholder.com/300"
                            }" class="card-img-top" alt="${article.title}">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <p class="card-text">${article.description}</p>
                                <a href="${
                                  article.url
                                }" target="_blank" class="btn btn-primary">Baca lebih lanjut</a>
                            </div>
                        </div>
                    `;
      newsContainer.appendChild(newsItem);
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("alert", "alert-danger");
    errorMessage.textContent =
      "Gagal mengambil berita. Silakan coba lagi nanti.";
    document.getElementById("newsContainer").appendChild(errorMessage);
  }
}

// Panggil fungsi untuk memuat berita saat halaman dimuat
window.onload = loadNews;

// Fungsi untuk melakukan pencarian live
document.getElementById("searchInput").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();
  const newsItems = document.querySelectorAll(".newsItem");

  newsItems.forEach((item) => {
    const title = item.querySelector(".card-title").textContent.toLowerCase();
    const description = item
      .querySelector(".card-text")
      .textContent.toLowerCase();
    if (title.includes(searchValue) || description.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
