export function ambilData(callback) {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", "../data/servicesData.json", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data)
    } else {
      console.error("Gagal memuat data");
    }
  }

  xhr.onerror = function () {
    console.error("terjadi kesalahan jaringan");
  };

  xhr.send();
}