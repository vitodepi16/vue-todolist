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
              text:  'pane',
              done: false
            },
            {
              text: 'acqua',
              done: false
            },
            {
              text:  'birra',
              done: false
            }
            ],
            text:'',
        }
      },
      methods: {
          inserisci(){ 
            const newItem = {
              text : this.text,
              done: false,
            }
            this.listSpesa.push(newItem);
            this.text = ''
           
          },
          deleteItem(index){
            this.listSpesa.splice(index, 1)
          },
          completedAction(index){
            this.listSpesa[index].done = true;
          }

      }
      
}
).mount('#app');