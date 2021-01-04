const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            listVisible: true,
        }
    },
    computed: {
        buttonText() {
            return this.listVisible ? 'Hide List' : 'Show'
        },
        getDate() {
            return new Date().toLocaleString();
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        switchVisibility() {
            this.listVisible = !this.listVisible;
        }
    }
});

app.mount('#assignment');
