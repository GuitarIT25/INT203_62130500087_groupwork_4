const app = {
    data() {
        return {
            like:'images/heart.png',
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
        }
    },
    computed:{
        countmyfar(){
            return this.photos.filter(s => s.state).length;
        },
        sumphoto(){
            return this.photos.length;
        }
    }
}

Vue.createApp(app).mount('#app');