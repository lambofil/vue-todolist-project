const app = Vue.createApp({
    data(){
        return {
            title: 'Our First Class',
            location: 'New Horizon Ibadan',
            studentsNo: 6
        }
    },
    // Another way to write location in your html is by first creating the method of location and passing in the function in the html.
    methods: {
        changeLocation(){
            this.location = 'New Horizons Abuja'
        },

        changeTitle(title){
            this.title = title
        }
    }
})

    





app.mount('#app')