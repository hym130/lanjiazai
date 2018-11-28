<template>
  <div id="login">
    <h2>懒加载。。。</h2>
    <ul>
      <li v-for='(item,ind) in newsList' :key='ind'>
        <p>{{item.title}}</p>
        <img v-lazy="item.img" alt="" width="300" height="150"/>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newsList:'',
    };
  },
  created(){
    this.axios.get('/api/data').then((response)=>{
        this.newsList=response.data.data;
      }).catch((response)=>{
        console.log(response);
      })
 },
 methods : {
   
 }
}
</script>

<style>
#login{
  width:100%;
  height: 100%;
}
</style>
