const inputtugas = document.querySelector("#inputtugas");

const daftartugas = document.querySelector("#daftartugas");

function tambahtugas() {
  if (inputtugas.value.trim() === "") {
    alert("tugas tidak boleh kosong!");
    return;
  }

  //1. buat elemen list / <li></li> baru
  const li = document.createElement("li");
  li.textContent = inputtugas.value;

  //2. buat tombol hapus (span)
  const tombolhapus = document.createElement("span");
  tombolhapus.textContent = "delete";
  tombolhapus.onclick = function () {
    daftartugas.removeChild(li);
  };

  //tambahkan event untuk menandai selesai
  li.onclick = function (event) {
    if (event.target !== tombolhapus) {
      li.classList.toggle("selesai");
    }
  };

  li.appendChild(tombolhapus);
  daftartugas.appendChild(li);

  inputtugas.value = "";
}

inputtugas.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    tambahtugas();
  }
});
