<template>
  <div>
    <div>
      <img class="logo ma-md-6 ma-xs-2" alt="Jose Duran logo" src="../assets/logo.png" />
    </div>
    <div>
      <img rel="preload" class="foto" alt="Jose Duran logo" src="../assets/photo.webp" />
    </div>
    <div class="info mt-4">
      <h3>José Durán</h3>
      <h2>FrontEnd Developer</h2>
    </div>
    <div class="container mt-8">
      <div class="ma-4">
        <v-btn @click="llamar" icon="fas fa-phone" size="large" color="whie" >
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="ma-4">
        <v-btn @click="correo" icon="fa-solid fa-envelope" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="ma-4">
        <v-btn href="https://wa.me/50375687550" icon="fa-brands fa-whatsapp" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="ma-4">
        <v-btn href="https://github.com/wizard503/" icon="fa-brands fa-github" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="ma-4">
        <v-btn href="https://www.linkedin.com/in/jose-duran-dev/" icon="fa-brands fa-linkedin-in" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="ma-4">
        <v-btn href="https://joseduran.me/" icon="fa-solid fa-globe" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VCard',
  methods:{
    llamar(){
      const phonenumber='+50375687550';
      window.open(`tel:${phonenumber}`,'_self');
    },
    correo(){
      const email='josemdg12@gmail.com';
      window.open(`mailto:${email}`,'_self')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
*{
  margin: auto;
}
.logo{
  width: 12vh;
  height: 12vh;
}
.foto{
  display: flex;
  width: 30vh;
  height: 30vh;
  background-color: #fff;
  border-radius: 100%;
}
.info{
  align-content: center;
  text-align: center;
  width: 50vh;
  height: 20vh;
  color: #fff;
  background: linear-gradient(45deg,rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.048),rgba(179, 169, 169, 0.39));
  border-radius: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(9.4px);

  &, h3{
    font-family: 'Josefin Slab';
    
    & :first-child{
      font-size: 40px;
      font-weight: 400;
    }

    & :last-child{
      font-size: 28px;
    }
  }
}

@media screen and (max-width:767px){
  .info{
    width: 40vh;

    &, h3{  
      & :first-child{
        padding-top: 3vh;
      }
    }
  }
}
.container {
  margin-bottom: 10vh;
  bottom: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #0a061f;
}

</style>
