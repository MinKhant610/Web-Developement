const app = Vue.createApp({
    // template: "<h2>Hi there <h2>"
    data(){
        return {
            title : "Computer Science",
            author : "Min Khant",
            age: 19,
            showbook : true,
        }
    },
    // methods: {
    //     increseAge(){
    //         this.age++;
    //     },
        
    // },
});
app.mount("#app");