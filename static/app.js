const app = Vue.createApp({
  el: '#vm',
  delimiters: ['${', '}'],
  data() {
    return {
        groups: [
            {
              course: 'COMP 303',
              description: 'the asgn is so hard lol let\'s work on them',
              time: 'Jan. 24',
              location: 'trottier',
              capacity: 10,
              joined: 5,
              open: true,
            },
            {
              course: 'MATH 222',
              description: 'omg kelome',
              time: 'Jan. 25',
              location: 'Burnside',
              capacity: 8,
              joined: 3,
              open: true,
            }
        ]
      
    }

  },
  methods: {
    newJoin(group) {
      console.log(group.course)
      if (group.joined + 1 <= group.capacity) {
          group.joined++
      } else {
        window.alert("Sorry! Study group capacity reached!")
      }
    }
  },
})

app.mount('#app')

