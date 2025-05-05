document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const songLists = document.querySelectorAll(".song-list");
  const searchInput = document.getElementById("searchInput");

  // Перемикання вкладок
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      songLists.forEach((list) => {
        list.classList.remove("active");
        if (list.id === target) {
          list.classList.add("active");
        }
      });

      searchInput.value = "";
      filterSongs("");
    });
  });

  // Пошук по піснях
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    filterSongs(query);
  });

  function filterSongs(query) {
    const activeList = document.querySelector(".song-list.active ul");
    if (!activeList) return;

    const songs = activeList.querySelectorAll("li");
    songs.forEach((song) => {
      const text = song.textContent.toLowerCase();
      song.style.display = text.includes(query) ? "block" : "none";
    });
  }
});