<template>
	<dir >
  <nav class="A">
   
    <router-link to="/"><img src="../assets/img/logo-white.png" class="logo"></router-link>   
    
    <router-link to="/Contact" class="items">Contact</router-link> 
    <router-link to="/Projects" class="items">Projects</router-link>
    <router-link to="/Skills" class="items">Skills</router-link>
    <router-link to="/Me" class="items">About Me</router-link>
   
  </nav>

  </dir>


  
</template>


<style>
     
     .A {
       width: 95%;
       color: white;
       min-height: 50px;
       font-family:comfortaa;

     }
     

     .logo {
      margin-left: 1.5em;
      margin-top: 0.6em;
      float: left;
      height: 35px;
      
     }

    

     .items{
      margin-top: 1.4em;
      float: right;
      margin-left: 15px;
      outline: none;
      font-size: 12px;
      color: white;
     
      text-decoration: none;    
     }


     .items:hover {
     outline: none;
      color: #ff4d5a;
      text-decoration: none;
     }

     .items:focus {
      
      outline: none;
      color: #ff4d5a;
      text-decoration: none;
     }
     .items:actived {
      
      outline: none;
      color: #ff4d5a;
      text-decoration: none;
     }
   
  













     #all {
      border:1px solid ;
      border-color: white;
      border-radius: 5px;
      padding: 5px;
      font-size: 14px;
     }
     #all:hover {
      background-color: #ff4d5a;
      border-color: #ff4d5a;
       outline: none;
      color:white;
      text-decoration: none;
     }
     #all:focus {
      background-color: #ff4d5a;
      border-color: #ff4d5a;
       outline: none;
      color:white;
      text-decoration: none;
     }






</style>


 