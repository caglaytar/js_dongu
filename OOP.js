let araba = {
    marka : "Toyota",
    model : "Corolla",
    renk : "Kırmızı"
}
console.log (araba.marka);

console.log(araba["renk"]);

araba.yil = 2023;

console.log(araba.yil);

araba.renk="Mavi";
console.log(araba.renk);

let ogrenci = {
    isim : "Ali",
    yas : 20,
    adres : {
        sehir : "İstanbul",
        ilce : "Kadıköy"
    }
};

console.log (ogrenci.adres.sehir);
console.log(ogrenci.adres.ilce);

// Methodlar

let telefon = {
    marka: "Apple",
    model : "iPhone 14",
    tanit : function () {
        console.log ("Bu telefon " + this.marka + " " + this.model + ".");
    }
};

telefon.tanit();

// Nesneleri Döngüyle Gezmek

let araba = {
    marka : "Toyota",
    model : "Corolla",
    renk : "Kırmızı"
};

for (let key in araba){
    console.log(key + ":" + araba[key]);
}