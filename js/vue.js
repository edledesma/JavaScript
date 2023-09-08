const { createApp } = Vue;
createApp({
    data() {
        return {
            url: "./js/exercises.json",
            exercises: [],
        };
    },
    methods: {
        fetchData(url) {
            fetch(this.url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.exercises = data.exercises;
                })
                .catch((error) => alert("There has been an error " + error));
        },
    },
    created() {
        this.fetchData();
    }
}).mount('#app');