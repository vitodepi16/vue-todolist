/*
fare una lista della spesa per pasquetta, avere un input dove 
poter inserire gli elementi della spesa quindi 
aggiungi bottone per inviare la lista, 
aggiungere btn per ogni elemento della lista che dovrà cancellare
aggiungere bottone per completare

*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            listSpesa: [{
              name:  'pane',
              completed: false
            },
            {
              name: 'acqua',
              completed: false
            },
            {
              name:  'birra',
              completed: false
            }
            ],
            newIngredient:'',
            text:'',
            completed:'',
        }
      },
      methods: {
          inserisci(){ 
            const newItem = {
              name : this.newIngredient,
              complete: false,
            }
            this.listSpesa.push(newItem)
           
          },
          deleteItem(index){
            this.listSpesa.splice(index, 1)
          },
          completedAction(index){
            this.listSpesa[index].completed = true;
          }
      }
      
}
).mount('#app');