const app = {
    data() {
        return {
            like:'images/heart.png',
            search:'images/search.png',
            close:'images/close.png',
            boxstate:false,
            viewstate:false,
            viewpath:'',
            input:'',
            photos: [
                { src: './images/dodge.jpg', title: 'dodge charger' ,state: false },
                { src: './images/ferrary.jpg', title: 'ferrary' ,state: false},
                { src: './images/ford.jpg', title:'ford' ,state: false},
                { src: './images/tesla.jpg', title:'tesla' ,state: false}
            ]
        }

    },
    methods:{
        showstate(index){
            this.photos[index].state = !this.photos[index].state;
        },
        showinputbox(){
            this.boxstate = !this.boxstate;
            this.input='';
        },
        openview(index){
            this.viewpath = this.photos[index].src;
            this.viewstate = !this.viewstate;
        },
        closeview(){
            this.viewpath = undefined;
            this.viewstate = !this.viewstate;
        }
        
      
    },
    computed:{
        countmyfar(){
            return this.photos.filter(s => s.state).length;
        },
        sumphoto(){
            return this.photos.length;
        },
        searching(){
            return this.photos.filter(s => {return s.title.toLowerCase().includes(this.input.toLowerCase())});

        },view(){return this.viewpath;}
      
    }
}

Vue.createApp(app).mount('#app');
