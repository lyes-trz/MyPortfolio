<template>
  <div id="contact">

    <div class="contact-form">

      <form @submit.prevent="onSubmit">

        <div class="contact-header">
          <p class="fadeInUp animated">Contact me</p> 
        </div>


        <div class="input fadeInUp animated" 
             :class="{invalid: $v.name.$error}"
             >
          <input  type="text"
                  id="name"
                  placeholder="Your Name..."
                  @blur="$v.name.$touch()"
                  v-model="name">
                 
        </div>


        <div class="input fadeInUp animated"
             :class="{invalid: $v.email.$error}">
          <input  type="email"
                  id="email"
                  placeholder="Your email..."
                  @blur="$v.email.$touch()"
                  v-model="email"
                  >
           <p v-if="!$v.email.email">Please provide a valid email address.</p>       
        </div>



        <div class="input fadeInUp animated"
            :class="{invalid: $v.msg.$error}">
            <textarea 
                id="msg" 
                placeholder="Your message..." 
                rows="3" 
                @blur="$v.msg.$touch()"      
                v-model="msg"></textarea>
        </div>



        <div class="submit fadeInUp animated">
          <button type="submit"
                  :disabled="$v.$invalid"
                  >Send</button>
        </div>


    </form>

  </div>
</div>

</template>



<script>

  import { required, email } from 'vuelidate/lib/validators'
  
  import axios from 'axios'

  export default {
    data () {
      
          return {
               name: '',
               email: '',
               msg: ''
                 }
            },
         

   validations: {
    
              name: { required },
              email: { required, email },
              msg: { required }
    
                },
     
   methods: {
   
      onSubmit () {
       
           const formData = {

                          name: this.name,  
                          email: this.email,
                          msg: this.msg
         
                            }

        console.log(formData)

        axios.post('https://myportfolio-1ec8b.firebaseio.com/emails.json', formData)

        .then(res => console.log(res))
        .catch(error => console.log(error))
        alert("Thank you for your message ;) It has been sent.");

                  }
          }
             
             }
</script>

<style scoped>

 @import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");

  #contact {
    position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family:comfortaa;
  color: white;
  
  }
  .contact-form {
    width: 350px;
    
    
    padding: 5px;
    
  }
 
.contact-header {
    position: relative;
  text-align: center;
  left: 50%;
  transform: translate(-50%);
  font-family:comfortaa;
  font-size: 18px;

  

  
  }


  .input {
    margin: 40px auto;
     

  }

 

  .input input{

    font: inherit;
    width: 100%;
    padding: 6px 12px;
    background-color: transparent;
     border-color: transparent;
   border-bottom-color: #2f2f2f;
  
  }
  .input textarea{
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    background-color: transparent;
    border: solid 2px  #2f2f2f;
 }

  .input p{
    font-size: 10px;
    color: #ff4d5a;
    margin-top: 8px;
  
  }
   

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    
    outline: none;
    border-bottom-color: white;
    color: white;
  }
  .input textarea:focus {
    outline: none;
    border-color: white;
    color: white;
  }

  .input.invalid input{
       border-bottom-color: #ff4d5a;
       color: #ff4d5a;
  }
  .input.invalid textarea{
       border-color: #ff4d5a;
       color: #ff4d5a;
  }

  .submit button {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 100px;
    color: white;
    padding: 5px 10px;
    font: inherit;
    cursor: pointer;
    margin-left: 50%;
    transform: translate(-50%); 
    font-size: 12px;
    
  }

  .submit button:hover,
  .submit button:active
  {
    background-color: white;
    color: black;
    outline: none;
  }
   .submit button:focus {
    
    outline: none;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ff4d5a;
    background-color: transparent;
    color: #ff4d5a;
    cursor: not-allowed;
    outline: none;
  }



</style>