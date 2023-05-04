const app = Vue.createApp({
    data(){
        return {
            books : [
                {
                    title : "Computer Science",
                    author : "Min Khant",
                    age : 19,
                    img : "imgs/img1.jpg",
                    isFav : true,
                },
                {
                    title : "The art of problem solving",
                    author : "Min Khant",
                    age : 22,
                    img : "imgs/img2.jpg",
                    isFav : false,
                },
                {
                    title : "How to Program",
                    author : "Min Khant",
                    age : 25,
                    img : "imgs/img3.jpeg",
                    isFav : false,
                },
            ],
            showbook : true,
            link : "https://www.google.com",
        }
    },
    methods: {
        addFav(book){
            book.isFav = !book.isFav;
        }
    },
    // return filter property
    computed : {
        filterBooks(){
            return this.books.filter(book => book.isFav);
        }
    }
})

app.mount(".app");