const app = Vue.createApp({
    data() {
      return {
        course: 'COMP 303',
        description: 'the asgn is so hard lol let\'s work on them',
        time: 'Jan. 24',
        location: 'trottier',
        capacity: 10,
        joined: 5
      }
    },
    methods: {
      newJoin() {
          if (this.joined + 1 <= this.capacity) {
              this.joined++;
          }
      }
    },
  })
  
  app.mount('#app')
  