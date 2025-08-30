<template>
      <div  class="row">
          <div class="col-lg-6 col-12">
            <!-- small box -->
            <div class="small-box bg-primary">
              <div class="inner  ">
                <h3 class="">{{total }}<sup style="font-size: 20px"></sup></h3>

                <p> Tasks</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <RouterLink to="/task" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></RouterLink>
            </div>
          </div>
      
          <!-- ./col -->
          <div class="col-lg-6 col-12">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>{{ panding }}</h3>

                <p>Task Pending</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
             <RouterLink to="/task" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></RouterLink>
            </div>
          </div>
              <!-- ./col -->
          <div class="col-lg-6 col-12">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>{{completed }}<sup style="font-size: 20px"></sup></h3>

                <p>Task Approved</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <RouterLink to="/task" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></RouterLink>
            </div>
          </div>
             <!-- ./col -->
          <div class="col-lg-6 col-12">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>{{ rejected }}</h3>

                <p>Task Rejected</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
             <RouterLink to="/task" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></RouterLink>
            </div>
          </div>
     
        </div>
</template>
    <script setup>
 
   import axios from 'axios';
import {  ref,onMounted} from'vue'

    let page= ref(0);
   
      const pagenext=()=>{
        if(page.value==tasks.value.length-5){
            alert("No more data")
             

        }
        else{
           
              page.value=page.value+5
   
        }
    
    }
    const pageback=()=>{
        
        if(page.value>=5){
            page.value=page.value-5
        }
        else{
           
        }
    }
const completed=ref(0)
const total=ref(0)
const panding=ref(0)
const rejected=ref(0)

onMounted(async()=>{
    
    
  await axios.get('https://6851a6c58612b47a2c0adbd3.mockapi.io/leads').then(res=>{
       total.value= res.data.length;
       completed.value=res.data.filter(item=>item.status==='Approved').length
       panding.value=res.data.filter(item=>item.status==='Pending').length
        rejected.value=res.data.filter(item=>item.status==='Rejected').length
  })
   total.value= res.data.length;


   
})
   

   
    
    
        let tasks= ref([
{"id":1,"todo":"Do something nice for someone you care about","completed":false,"userId":152},{"id":2,"todo":"Memorize a poem","completed":true,"userId":13},{"id":3,"todo":"Watch a classic movie","completed":true,"userId":68},{"id":4,"todo":"Watch a documentary","completed":false,"userId":84},{"id":5,"todo":"Invest in cryptocurrency","completed":false,"userId":163},{"id":6,"todo":"Contribute code or a monetary donation to an open-source software project","completed":true,"userId":69},{"id":7,"todo":"Solve a Rubik's cube","completed":true,"userId":76},{"id":8,"todo":"Bake pastries for yourself and neighbor","completed":true,"userId":198},{"id":9,"todo":"Go see a Broadway production","completed":false,"userId":7},{"id":10,"todo":"Write a thank you letter to an influential person in your life","completed":true,"userId":9},{"id":11,"todo":"Invite some friends over for a game night","completed":true,"userId":104},{"id":12,"todo":"Have a football scrimmage with some friends","completed":false,"userId":32},{"id":13,"todo":"Text a friend you haven't talked to in a long time","completed":true,"userId":2},{"id":14,"todo":"Organize pantry","completed":false,"userId":46},{"id":15,"todo":"Buy a new house decoration","completed":true,"userId":105},{"id":16,"todo":"Plan a vacation you've always wanted to take","completed":true,"userId":162},{"id":17,"todo":"Clean out car","completed":false,"userId":71},{"id":18,"todo":"Draw and color a Mandala","completed":true,"userId":6},{"id":19,"todo":"Create a cookbook with favorite recipes","completed":true,"userId":53},{"id":20,"todo":"Bake a pie with some friends","completed":false,"userId":162},{"id":21,"todo":"Create a compost pile","completed":false,"userId":13},{"id":22,"todo":"Take a hike at a local park","completed":true,"userId":37},{"id":23,"todo":"Take a class at local community center that interests you","completed":true,"userId":65},{"id":24,"todo":"Research a topic interested in","completed":true,"userId":130},{"id":25,"todo":"Plan a trip to another country","completed":false,"userId":140},{"id":26,"todo":"Improve touch typing","completed":false,"userId":178},{"id":27,"todo":"Learn Express.js","completed":false,"userId":194},{"id":28,"todo":"Learn calligraphy","completed":false,"userId":80},{"id":29,"todo":"Have a photo session with some friends","completed":true,"userId":91},{"id":30,"todo":"Go to the gym","completed":true,"userId":142}])

</script>