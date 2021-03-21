var app = new Vue(
    {
        el: '#app',
        data: {
        counterPhoto: 0,
        photos: [
            'img/img01.jpg',
            'img/img02.jpg',
            'img/img03.jpg',
            'img/img04.jpg',
        ]
            
        },

        created: function () {
            setInterval(() => {
                this.nextPhoto();
            }, 3000);
        },
        
        
        methods: {
            prevPhoto: function() {
                this.counterPhoto --;
                if (this.counterPhoto < 0) {
                    this.counterPhoto = (this.photos.length - 1);
                }
            },
            nextPhoto: function() {
                this.counterPhoto ++;
                if (this.counterPhoto > (this.photos.length - 1)) {
                    this.counterPhoto = 0;
                }
            },
        }
    });

    console.log(app);



// Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus1: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
// Bonus2: Introdurre l' evento click sui pallini e visualizzare immagine relativa.
// Bonus3: spazio alla fantasia