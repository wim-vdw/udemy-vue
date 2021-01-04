const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add(value) {
            this.counter = this.counter + value;
        }
    },
    computed: {
        result() {
            if (this.counter === 37) {
                return this.counter
            } else if (this.counter < 37) {
                return 'Not there yet'
            } else {
                return 'Too much!'
            }
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.counter = 0;
            }, 5000);
        }
    }
});

app.mount('#assignment');
