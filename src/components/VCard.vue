<template>
  <div>
    <div>
      <img class="logo" alt="Jose Duran logo" src="../assets/logo.png" />
    </div>
    <div>
      <img class="foto" alt="Jose Duran logo" src="../assets/photo.jpeg" />
    </div>
    <div class="info mt-4">
      <h3>José Durán</h3>
      <h2>FrontEnd Developer</h2>
    </div>
    <div class="container mt-12">
      <div class="mx-4">
        <v-btn @click="llamar" icon="fas fa-phone" size="large" color="whie" >
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="mx-4">
        <v-btn @click="correo" icon="fa-solid fa-envelope" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="mx-4">
        <v-btn href="https://wa.me/50375687550" icon="fa-brands fa-whatsapp" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="mx-4">
        <v-btn href="https://github.com/wizard503/" icon="fa-brands fa-github" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="mx-4">
        <v-btn href="https://www.linkedin.com/in/jose-duran-dev/" icon="fa-brands fa-linkedin-in" size="large" color="white">
          <v-icon color="#0a061f" size="large"/>
        </v-btn>
      </div>
      <div class="mx-4">
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
.logo{
  width: 12vh;
  height: 12vh;
  margin: 3vh;
}
.foto{
  margin: auto;
  display: flex;
  width: 30vh;
  height: 30vh;
  background-color: #fff;
  border-radius: 100%;
}
.info{
  margin: auto;
  width: 50vh;
  height: 20vh;
  color: #fff;
  background: linear-gradient(45deg,rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.048),rgba(179, 169, 169, 0.39));
  border-radius: 30px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  text-align: center;
  align-content: center;
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

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #0a061f;
}

</style>
