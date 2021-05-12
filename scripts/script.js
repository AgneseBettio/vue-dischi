Descrizione:
// Attraverso una chiamata ajax all’API di boolean https://flynn.boolean.careers/exercises/api/array/music avremo a disposizione una decina di dischi musicali. Utilizzando vue, stampiamo a schermo una card per ogni album.
//Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

new Vue({
    el: '#root',
    data : {
        albumsList : [],
        loading : false,
    },
    methods : {
        //funzione sort per stampare card in ordine data. metodo richiamato in mounted.
        sortAlbumsYear() {
            this.albumsList.sort((album1, album2)=>{
                if(album1.year < album2.year){
                    return -1
                } else if (album1.year > album2.year) {
                    return 1
                } else {
                    return 0
                }
            })
        }
    },
    mounted(){
        //recupero dati album da api indicato 
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((resp) => {
                this.loading = true;
                /*cosa avrà response e ogni singolo album all'interno? recupero array di oggetti.
                {
                    "poster":
                    "title": 
                    "author": 
                    "genre": 
                    "year": 
                },
                */
               //per gestire tempo push in array in data solo quando l'array è completo
                const ayaxAlbums = resp.data.response;
                console.log(ayaxAlbums);
                this.albumsList.push(...ayaxAlbums);
                console.log(this.albumsList);
                this.sortAlbumsYear();
                this.loading = false;
                
            })
            
    }
})