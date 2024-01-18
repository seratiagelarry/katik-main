//MENGHITUNG LUAS PERSEGI
function hitungluasPersegi() {
  event.preventDefault();
  let sisi = document.getElementById("sisiPersegi").value;

  let luas = sisi * sisi ;

  document.getElementById("rumusluasPersegi").innerHTML =
    "L = L = S x S <br/>" + "L = " + sisi + " x " + sisi;
  document.getElementById("hasilluasPersegi").innerHTML = "L = " + luas;
}

//MENGHITUNG KELILING PERSEGI
function hitungkelilingPersegi() {
  event.preventDefault();
  let sisi = parseInt(document.getElementById("sisi").value);

  let keliling = 4 * sisi;
  document.getElementById("rumuskelilingPersegi").innerHTML =
    "K = 4 x S <br/>" + "K = 4 x " + sisi;
  document.getElementById("hasilkelilingPersegi").innerHTML =
    "K = " + keliling;
}

//MENGHITUNG LUAS PERSEGI PANJANG
function hitungluasPersegiPanjang() {
  event.preventDefault();
  let Panjang = document.getElementById("Panjang").value;
  let lebar = document.getElementById("lebar").value;

  let luas = Panjang * lebar;
  document.getElementById("rumusluasPersegiPanjang").innerHTML =
    "L = p x l <br/>" + "L = " + Panjang + " x " + lebar;
  document.getElementById("hasilluasPersegiPanjang").innerHTML = "L = " + luas;
}

//MENGHITUNG KELILING PERSEGI PANJANG
function hitungkelilingPersegiPanjang() {
  event.preventDefault();
  let panjang = parseInt(document.getElementById("panjang").value);
  let lebar2 = parseInt(document.getElementById("lebar2").value);

  let keliling = 2 * (panjang + lebar2);
  document.getElementById("rumuskelilingPersegiPanjang").innerHTML =
    "K = 2 x ( p + l ) <br/>" + "K = 2 x (" + panjang + " + " + lebar2 + ")";
  document.getElementById("hasilkelilingPersegiPanjang").innerHTML = "K = " + keliling;
}

//RESET LUAS PERSEGI
function resetluasPersegi() {
  document.getElementById("sisiPersegi").value = "";
  document.getElementById("rumusluasPersegi").innerHTML = "";
  document.getElementById("hasilluasPersegi").innerHTML = "";
}

//RESET KELILING PERSEGI
function resetkelilingPersegi() {
  document.getElementById("sisi").value = "";
  document.getElementById("rumuskelilingPersegi").innerHTML = "";
  document.getElementById("hasilkelilingPersegi").innerHTML = "";
}

//RESET LUAS JAJAR GENJANG
function resetluasPersegiPanjang() {
  document.getElementById("Panjang").value = "";
  document.getElementById("lebar").value = "";
  document.getElementById("rumusluasPersegiPanjang").innerHTML = "";
  document.getElementById("hasilluasPersegiPanjang").innerHTML = "";
}

//RESET KELILING JAJAR GENJANG
function resetkelilingPersegiPanjang() {
  document.getElementById("panjang").value = "";
  document.getElementById("lebar2").value = "";
  document.getElementById("rumuskelilingPersegiPanjang").innerHTML = "";
  document.getElementById("hasilkelilingPersegiPanjang").innerHTML = "";
}
