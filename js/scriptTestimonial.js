export function dataTestimoni(url) {
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        }catch (err){
          reject("Gagal parsing data");
        }
      } else {
        reject(`Gagal: status ${xhr.status}`)
      }
    }
    xhr.onerror = function () {
      reject("Terjadi kesalahan koneksi");
    };
    xhr.send();
  })
}