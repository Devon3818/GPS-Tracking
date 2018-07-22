<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>

.md-radio .md-field .md-field-item {
        padding: 0;
        padding-left: 0.4rem;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
  overflow-x: hidden;
  background: #f0f0f0;
}

html,body {
  width: 100%;
}

.clear::after {
  content: '';
  display: block;
  clear: both;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #545454;
  color:inherit; 
}

a,a:hover,a:active,a:visited,a:link,a:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    outline:none;
    background: none;
    text-decoration: none;
}



#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.4rem;
}

</style>
