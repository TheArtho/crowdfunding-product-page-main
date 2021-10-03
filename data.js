const app_stat = new Vue ({
    el: '#app_stat',
    data: {
        current_back: 89914,
        total_back: 100000,
        total_backers: 5007,
        days_left: 56
    },
    methods: {
        parse_number(value) {
            return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    }
})

const app_rewards = new Vue ({
    el: '#app_rewards',
    data: {
        rewards: [
            {
                name: 'Bamboo Stand',
                description: 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
                price: 25,
                stock: 101
            },
            {
                name: 'Black Edition Stand',
                description: 'You get a Black Special Edition computer stand and a personal thank you. You\’ll be added to our Backer member list. Shipping is included.',
                price: 75,
                stock: 64
            },
            {
                name: 'Mahogany Special Edition',
                description: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\’ll be added  to our Backer member list. Shipping is included.',
                price: 200,
                stock: 0
            }
        ]
    },
    methods: {
        parse_number(value) {
            return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    }
})