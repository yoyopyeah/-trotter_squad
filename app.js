

const app = Vue.createApp({
    data() {
      return {
          groups: [
              {
                course: 'COMP 303',
                description: 'the asgn is so hard lol let\'s work on them',
                time: 'Jan. 24',
                location: 'trottier',
                capacity: 10,
                joined: 5
              },
              {
                course: 'MATH 222',
                description: 'omg kelome',
                time: 'Jan. 25',
                location: 'Burnside',
                capacity: 8,
                joined: 3
              }
          ]
        
      }
    },
    methods: {
      newJoin() {
          if (this.joined + 1 <= this.capacity) {
              this.joined++
          } else {
            window.alert("Sorry! Study group capacity reached!")
          }
      }
    },
  })
  
  app.mount('#app')
  