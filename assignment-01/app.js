const app = Vue.createApp({
    data() {
        return {
            name: 'Wim',
            age: 46,
            url: 'https://www.omegawatches.com/media/catalog/product/cache/f3d8b64e89cdd188d12d5664598de5ef7c1d79a8423cda22f8bbdc40cd241ffb/o/m/omega-seamaster-railmaster-22010402001001-list.jpg'
        }
    },
    methods: {
        ageFive() {
            return this.age + 5;
        },
        getRandomInt() {
            return Math.random();
        }
    }
});

app.mount('#assignment');
