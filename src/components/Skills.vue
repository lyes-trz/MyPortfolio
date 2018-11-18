<template >
     <div>
             <div class="skills-content">
                
                 <div class="skills-header fadeInDown animated">
                      
                         <button :class="{'active-btn': (chart==1)}" @click="chart=1">
                           <i class="fas fa-code" style="font-size: 18px;"></i>
                           <p style="font-size: 10px; font-family:comfortaa;">CODING</p>
                         </button>
                         <button :class="{'active-btn': (chart==2)}" @click="chart=2">
                         <i class="far fa-object-group" style="font-size: 18px;"></i>
                         <p style="font-size: 10px;font-family:comfortaa;">GRAPHICS</p>
                         </button>
                </div>


                <div class="chart-container" v-show="chart==1">
                   <canvas id="codingChart" width="300" height="300"></canvas>
                  
                </div>


                <div class="chart-container" v-show="chart==2">
                   <canvas id="graphicsChart"  width="300" height="300"></canvas>
                </div>

            </div>
                 
    </div>
   

</template>






<script >

  import Chart from 'chart.js';

Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultStrokeColor = 'white';




  export default {
    name: 'skills',
    data(){
      return {
        chart: 1
      }
    },


    mounted(){
      Chart.defaults.global.defaultFontFamily = "comfortaa";
    
    
      //coding chart
      var ctx = document.getElementById("codingChart");
      var codingChart = new Chart(ctx, {
        type: 'radar',
        


        data: {

          labels: ["Vue.js", "Html", "Css", "Sass", "Bootstrap" ,["JavaScript", "      ES6"], "React.js", "Angular 6","Node.js","Express.js","MongoDB","Php","Sql","Wordpress","APIs",["Web   ","Sockets"],"Git", "C", "Java", "Linux"],
          datasets: [{
            label: '# of Votes',
            data: [4.5, 4.9, 4.9, 4.5, 4.9, 4.9, 4, 4, 4, 4, 4, 4, 3.5,4,3.5,3.5,4,4,4.5,4],
             
             
            backgroundColor: [
            'rgba(253,121,131,0.3)',
            ],
            borderColor:"#ff4d5a",
            borderWidth: 1
          }]
        },
        options: {
          responsive : true,
           scale: {
                 ticks: {
                    display: false,
                    beginAtZero: true,
                    max: 5
                },
              pointLabels: {
                fontSize: 13,
               },
               gridLines: { 
                color: "#2f2f2f",
                 },
               angleLines: { 
                color: "#2f2f2f",
                 },  
            },
            legend: {
            display: false
          },


          tooltips : {
            enabled : false
          }
        }
      });

      // graphics chart
      var ctx2 = document.getElementById("graphicsChart");
      var graphicsChart = new Chart(ctx2, {
        type: 'radar',
        data: {
          labels: ["Photoshop", "Illustrator","After effect", "Xdesign",],
          datasets: [{
            label: '# of Votes',
            data: [4.5,4,3,3],
            backgroundColor: [
            'rgba(253,121,131,0.3)',
            ],
            borderColor:"#ff4d5a",
            borderWidth: 1
          }]
        },
        options: {
          responsive : true,
           scale: {
                 ticks: {
                    display: false,
                    beginAtZero: true,
                    max: 5
                },
              pointLabels: {
                fontSize: 13,
                  },
              gridLines: { 
                color: "#2f2f2f",
                 },
               angleLines: { 
                color: "#2f2f2f",
                 },     
            },
            legend: {
            display: false
          },
          tooltips : {
            enabled : false
          }
        }
      });

    }
  }
  
</script>



<style>

 @import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");

.skills-content{  
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family:comfortaa;
  }

.skills-header{ 
  margin-bottom: -30px;
    
    .active-btn{
       background: royalblue;
       transition: all .2s;
      }
    }

.skills-header>button{
      background-color: transparent;      
      text-align: center;
      border:none;
      cursor: pointer;
      outline: none;
      font-size: 20px;  
      margin-left: 0px;
      color: #474747;     
  }
 
.skills-header>.active-btn{
      background-color: transparent;
      text-align: center;
      border:none;
      cursor: pointer;
      outline: none;
      margin-left: 0px;
      color: #ff4d5a;     
  }

.chart-container{
  width: 480px;
  margin:auto;
  font-family:comfortaa;
}


@media(max-width:1069px){
    
  .skills-content{
    font-family:comfortaa;
     }
  }

    
</style>