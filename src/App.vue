<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todos</router-link>
      <router-link to="/archive">Archive</router-link>
    </div>
    <div id="body">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  background-color: white;
  box-shadow: 1px 1px 1px #c3c3c3;

  a {
    flex-grow: 1;
    font-weight: bold;
    color: #797979;
    padding: 20px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#body {
  padding-top: 60px;
}
</style>
