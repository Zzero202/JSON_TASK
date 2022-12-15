<template>
<router-link style="color:white;display:none" to="/posts">posts</router-link>
<div style="text-align:left;">
  <button @click="backward">back</button>
 <button @click="forward">forward</button>
  <button @click="redirect">redirect</button>
  </div>
<router-view></router-view>
</template>
<script>
export default {

   methods: {
    forward(){
      this.$router.go(1)

    },
    backward(){
      this.$router.go(-1)
    },
    redirect(){
      this.$router.push({name : 'Posts'})

    }

  },
}
</script>
<style>
button{
  padding:10px 15px;
  cursor: pointer;
  border:none;
  background: gray;
  color:white;
  border-radius: 10px;
  margin-inline:0 15px;
  font-size:18px;
  font-weight: lighter;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
