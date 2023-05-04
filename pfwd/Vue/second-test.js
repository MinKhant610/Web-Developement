const app = Vue.createApp({
    data(){
        return {
            author : "Min Khant",
            book : "Computer Science",
            age : 19
        }
    },
    methods: {
        mouseOverHandler(event, data){
            console.log("Mouse Over work", event.type, data);
        },
        mouseLeaveHandler(){
            console.log("Mouse Leave work");
        },
        dblClickHandler(){
            console.log("Double Click work");
        },
    },
});

app.mount("#app");