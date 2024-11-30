
// Nesneleri Döngüyle Gezmek

let araba = {
    marka : "Toyota",
    model : "Corolla",
    renk : "Kırmızı"
};

for (let key in araba){
    console.log(key + ":" + araba[key]);
}