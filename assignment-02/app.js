const app = Vue.createApp({
    data() {
        return {
            text1: '',
            text2: '',
            text2Confirmed: ''
        }
    },
    methods: {
        showAlert() {
            alert('Hello');
        },
        input1(event) {
            this.text1 = event.target.value;
        },
        input2(event) {
            this.text2 = event.target.value;
        },
        input2Confirmed() {
            this.text2Confirmed = this.text2;
        }
    }
});

app.mount('#assignment');
