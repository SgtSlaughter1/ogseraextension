<template>
    <div>
        <section class="hero-section">
        <!-- <div class="container-fluid"> -->
      <div class="container con-section">
        <div class="hero-content">
          
          <div class="text-content">
            <h1 class="ogsq">OG<span>SQ</span></h1>
            <p class="OGSQ-p">Ogun State Skills Qualification</p>
            <h4 class="sub-ogsq">Empowering Ogun State through Skills and Competence</h4>
        
          </div>
        </div>
        </div>
      <!-- </div> -->
    </section>

    <div class="row d-flex justify-content-center f-box ">
      <div class="col-md-6 first-box">
        <div class=" text-white  box1">
            <p>
          OSQ is a localized implementation of the Nigerian Skills Qualifications Framework (NSQF). It provides a structured pathway for individuals to acquire, demonstrate, and certify their  competencies in various industries.
          </p>
        </div>
      </div>
      <div class="col-md-5">
        <div class=" box2">
            <p>
          Whether skills are learned formally, informally, or on-the-job, OSQ ensures they are recognized and certified through National Occupational Standards (NOS).
        </p>
        </div>
      </div>
    </div>

    <!-- Key Objectives Section -->
     <div class="container-fluid big-box">
    <!-- <div class="container box3 "> -->
      <div class="key-obj container-fluid ">
        <h1 class="koo-OSQ">Key Objectives of OSQ</h1>
      </div>
    
      
      <!-- Promote Lifelong Learning -->
      <div class=" container box4 mb-3 ">
          <h2 class="title">
            <img src="../assets/about/ICON Key Objectives .png" ait="image-icon" width="50px" class="image">
            Promote Lifelong Learning
          </h2>
          <ul class="foster">
            <li>Access vocational education and training opportunities.</li>
            <li> Recognized prior learning, helping individuals build on their skills.</li>
          </ul>
      </div>

      <!-- Improve Workforce Competency -->
      <div class=" container box5 mb-3 ">
        <h2 class="title">
            <img src="../assets/about/ICON Key Objectives .png" ait="image-icon" width="50px" class="image">
            Improve Workforce Competency
          </h2>
          <ul class=" foster ">
            <li> Address the skills gap between education and industry requirements.</li>
            <li> Enhance job mobility and career progression through recognized certifications.</li>
          </ul>
      
      </div>

      <!-- Foster Economic Growth -->
 
        <div class=" container box6 mb-3">
          <h2 class="title">
            <img src="../assets/about/ICON Key Objectives .png" ait="image-icon" width="50px" class="image">
            Foster Economic Growth
          </h2>
          <ul class="foster">
            <li> Equip individuals with skills that meet Ogun State's developmental and industrial needs.</li>
            <li> Provide industries with a competent, multi-skilled workforce.</li>
          </ul>
        
      <!-- </div> -->
    </div>
  </div>
    <!-- Why OSQ Matters Section -->
    <div class=" box7 p-5">
      <h1 class="text-white  why">Why OSQ Matters....</h1>
      <div class="row p-3">
        <div class="col-md-4 mb-3">
          <div class="card h-100 bg-warning" style="border-radius: 0;">
            <div class="card-body">
              <h2 class="card-title">Individual</h2>
              <ul class="employer">
                <li> Gain recognized certifications that validate for your skills.</li>
                <li> Improve career prospects and achieve personal growth.</li>
                <li> Re-skill and upskill to meet the demands of an ever-evolving job market.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card h-100 bg-warning" style="border-radius: 0;">
            <div class="card-body">
              <h2 class="card-title">Employers</h2>
              <ul class="employer">
                <li> Build a confident and productive workforce.</li>
                <li> Streamline recruitment with certified, competent professionals.</li>
                <li> Enhance operational efficiency and workforce motivation.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card h-100 bg-warning" style="border-radius: 0;">
            <div class="card-body">
              <h2 class="card-title">Ogun State</h2>
              <ul class="employer">
                <li> Develop a workforce ready to tackle global challenges.</li>
                <li> Reduce unemployment through skills-driven opportunities.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins';
}

.hero-section {
  background-image: url(../assets/about/BKG_ABOUT_1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  padding-left: 5px;
}

.hero-content {
  align-items: center;
  text-align: center;
  justify-content: center;
  color: white;
}
.ogsq{
  font-size: 90px;
  font-weight: 700;
  padding: 5px;
}
span{
  color: #ffc727;
}
.koo-OSQ{
  font-weight: 700;
}

.card {
  border-radius: 0 !important;
}
.OGSQ-p{
  font-size: 14.5px;
  margin-top: -22px;
}
.sub-ogsq{
  margin-top: 30px;
  font-weight: 700;
  font-size: 30px;
}
.f-box{
    margin-top: 40px;
    margin-bottom: 5px;
}
.first-box{
    margin-left: 50px;
}
.box1{
  font-size: 32px;
  font-weight: 500;
  background-color: #269946;
  padding: 45px;
  padding-top: 60px;
  text-align: left;

}
.box2{
  font-size: 28px;
  font-weight: 500;
  margin-top: 60px;
  background-color: #ffe7a2;
  padding: 30px;
  text-align: left;
}
.big-box{
  background-image: url(../assets/about/Backgimageicon.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 20px;
}
.key-obj {
    background: linear-gradient(to right, white, #eeeeee);
    width: 50%;
    min-height: 80px; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    margin: 10px auto; 
    margin-top: 40px;
    text-align: center; 
    font-family: 'Open Sans';
    font-size: 30px;
    font-weight: 700;
}
.box4, .box5, .box6 {
  padding: 30px;
}
.image{
  margin-right: 30px;
  
}
.title{
  font-weight: 700;
}
ul li{
  list-style-position: outside;
}
.foster{
  padding-left: 115px;
  font-size: 22px;
  line-height: 1.5;
  font-weight: 500;
  text-align: left;
  
}
.box5{
  background-color: #d9f2e0;
}
.box4{
  background-color: #e5e5e5;
}
.box6{
  background-color: #f2e9d1;
}
.box7{
  background-color: #118e34;
}
.why{
    margin-bottom: 40px;
  padding-left: 20px;
  font-weight: 700;
}
.card-body{
  background-color: #ffc727;
  padding: 30px;
}
.card-title{
  font-family: open sans;
  font-weight: 900;
  margin-top: 15px;
  margin-bottom: 18px;
  font-size: 42px;
}
.employer{
  padding-left: 16px;
  line-height: 1.75;
  font-size: 15px;
  font-weight: 600;
  /* color: #000000; */
  margin-bottom: 20px;

}
.employer li{
  margin-bottom: 15px;
}
@media screen and (min-width: 320px) and (max-width: 425px) {
    .f-box{
        margin-top: 0px;
        padding-top: 0px;
    }
  .first-box{
    margin: 0px;
    padding: 5px;
  }
    .box1, .box2 {
    height: auto;
    margin-left: 0 !important;
    margin-right: 0;
    padding: 25px;
    font-size: 16px;
  }
  .box2{
    margin-top: -2px;
  }
  .key-obj {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .koo-OSQ {
    font-size: 20px;
    font-weight: 800;
    text-align: center;
  }
  .box4, .box5, .box6 {
    padding: 20px;
  }

  .box4 .title,   .box5 .title,   .box6 .title{
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .box4 .image, .box5 .image,   .box6 .image {
    width: 30px;
    margin-right: 15px;
  }

  .box4 .foster, .box5 .foster, .box6 .foster {
    font-size: 14px;
    padding-left: 45px;
  }
  .box7{
    padding: 0px;
  }
  .foster{
    line-height: 1.8;
  }
.why{
    margin-bottom: 5px;
    font-size: 20px;
}
.hero-section{
  height: 290px;
}
.ogsq{
  font-size: 60px;
  padding: 10px;
}
.OGSQ-p{
  font-size: 11px;
  margin-top: -18px;
}
.sub-ogsq{
  margin-top: 5px;
  font-size: 20px;
  padding: 5px;
}
.card-title{
  font-size: 30px;
}
}

@media screen and (min-width: 426px)  and (max-width: 768px) {
.box1 {
    padding: 28px;
    font-size: 21px;
    height: 60vh;
}
.box2{
    padding: 25px;
    font-size: 16px;
    height: 35vh;
}
.key-obj{
    width: 80%;
}
.box7{
    padding: 0px;
    margin: 0;
}
.employer{
    padding: 0;
    padding-left: 15px;
    line-height: 1.5;
    font-size: 14px;
    justify-content: space-between;
}
.card-title{
  font-size: 20px;
}
    
}
  



</style>