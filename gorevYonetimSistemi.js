let gorevYonetimi = {
    gorevler : [],

    ekle:function(baslik){
        let id = this.gorevler.length + 1;
        this.gorevler.push({id:id, baslik: baslik, tamamlandı:false});
        console.log(baslik + " eklendi")
    },

    listele : function(){
        console.log("Görevler")

        for (let i = 0; i<this.gorevler.length; i++){
            let gorev = this.gorevler[i];
            console.log("ID " + gorev.id + 
                " Başlık " + gorev.baslik + 
                " Durum " + gorev.tamamlandı)
        }
    },

    tamamla : function(id){
        for (let i = 0; i<this.gorevler.length; i++){
            if (this.gorevler[i].id === id){
                this.gorevler[i].tamamlandı = true;
                console.log("başarı ile tamamlandı " + this.gorevler[i].baslik);
                break;
            }
        }
    },

    sil: function(id){
        for (let i = 0; i<this.gorevler.length; i++){
            if (this.gorevler[i].id === id){
                console.log("başarı ile silindi " + this.gorevler[i].baslik);
                this.gorevler.splice(i,1);
            }
        }
    }

}


gorevYonetimi.ekle("login page")
gorevYonetimi.ekle("image optimizasyonu");

gorevYonetimi.listele()

gorevYonetimi.tamamla(1)

gorevYonetimi.sil(2)

gorevYonetimi.listele()