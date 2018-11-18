<template>
	<dir id="Header">
  <nav>
   
    <router-link to="/"><img src="logo-white.png" class="logo"></router-link>   
    
    <router-link to="/Contact" class="items">Contact</router-link> 
    <router-link to="/Projects" class="items">Projects</router-link>
    <router-link to="/Skills" class="items">Skills</router-link>
    <router-link to="/Me" class="items">About Me</router-link>
   
  </nav>

  </dir>


  
</template>


<style lang="scss">
     
     #Header nav {
       width: 95%;
       color: white;
       min-height: 50px;
       font-family:comfortaa;

     }
     

     #Header .logo {
      margin-left: 1.5em;
      margin-top: 0.6em;
      float: left;
      height: 35px;
      
     }

    

     #Header .items{
      margin-top: 1.4em;
      float: right;
      margin-left: 15px;
      outline: none;
      font-size: 12px;
      color: white;
     
      text-decoration: none;

            &:hover {
             outline: none;
             color: #ff4d5a;
             text-decoration: none;
                 }
            &:focus {
             outline: none;
             color: #ff4d5a;
             text-decoration: none;
                 }
                 
                 &:actived {
             outline: none;
             color: #ff4d5a;
             text-decoration: none;
                 }     


     }


     

</style>


 