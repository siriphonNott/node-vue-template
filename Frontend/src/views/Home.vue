<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="container">
       <div class="tb-show">
        <table border="1" width="100%">
          <thead>
            <th b>No.</th>
            <th b>Role</th>
          </thead>
          <tbody>
            <tr :key="index" v-for="(item, index) in roles">
              <td>{{index+1}}</td>
              <td>{{item.title}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return {
      roles: []
    }
  },
  components: {
  },
  created(){
    axios.get('/api/user')
    .then((res)=>{
      this.roles = res.data
      console.log(res);
    })
    .catch((err) => console.log(err))
    
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
}
.tb-show {
  display:inline-block;
  width: 50vw;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
  text-align: left;    
}
table tr:nth-child(even) {
  background-color: #eee;
}
table tr:nth-child(odd) {
 background-color: #fff;
}
table th {
  background-color: black;
  color: white;
}
</style>