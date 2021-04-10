Vue.component('router-link',{
    template:'<h1>Click</h1>'
})

const app = new Vue({
    el:'#form-data',
    data:{
        steps:1,
        totalstep:2,
        error:null,
        bookingData:{
            
            name:' ',
            appDate:'',
            appTime:'',
            appTimeS:''
            
    }
        
    },
    methods:{
        
        nextStep:function(){
            if(this.steps==1){

                
                if(!this.bookingData.appDate){
                    this.error="plase fill "
                    return false
                }
                
                
            }
            this.steps++;
        },
         
        prevStep:function(){
            this.steps--;
     },
     printData:function(){
        //  let div =document.getElementById('form-data').innerHTML
        //  let original=document.body.innerHTML

        //  document.body.innerHTML=div
        //  window.print()
        //  document.body.innerHTML=original
         window.print()
     }
    }
   
   
})