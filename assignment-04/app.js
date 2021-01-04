const app = Vue.createApp({
    data() {
        return {
            className: '',
            confirmedClass: '',
            visible: true,
            inputColor: ''
        }
    },
    computed: {
        validClasses() {
            return {
                user1: this.confirmedClass === 'user1',
                user2: this.confirmedClass === 'user2',
                visible: this.visible,
                hidden: !this.visible
            }
        }
    },
    methods: {
        confirmClass() {
            this.confirmedClass = this.className;
        },
        toggleVisibility() {
            this.visible = !this.visible;
        }
    }
});

app.mount('#assignment');
