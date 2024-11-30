let kullaniciYonetimi = {

    kullanicilar : [],
    ekle: function(isim,email,yas){
        this.kullanicilar.push({isim:isim, email:email, yas:yas});
        console.log(isim + " kullanıcı eklendi")
    },

    listele:function(){

        console.log("kullanıcılar");

        for (let i = 0; i < this.kullanicilar.length; i++){
            let kullani = this.kullanicilar[i];
            console.log((i+1) + ":" + kullani.isim + "-" + kullani.email + " -" + kullani.yas)
        }
    },

    sil : function(email){

        for (let i = 0; i<this.kullanicilar.length; i ++){
            if (this.kullanicilar[i].email === email){
                this.kullanicilar.splice(i,1);
                console.log(email + " silindi");
                break;
            }
            else{
                console.log("kullanıcı bulunamadı")
            }
        }
    }
}


kullaniciYonetimi.ekle("Çağla", "caglaytar@gmail.com", "29");
kullaniciYonetimi.ekle("eray", "eraytar1925@gmail.com", "29");

kullaniciYonetimi.listele();
kullaniciYonetimi.sil("eraytar1925@gmail.com")