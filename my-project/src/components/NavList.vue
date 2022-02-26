<template>
  <div>
    <ul class="nav-list">
        <li class="nav-list-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/sample">Sample</router-link>
        </li>
      </ul>
  </div>
</template>
<style>
.nav-list-wrapper {
  padding: 10px;
}
.nav-list-item {
  list-style: none;
  padding: 8px 0;
}
.nav-list-item a {
  color: #40b983;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
}
.nav-list-item a:hover {
  background: #40b983;
  opacity: 0.8;
  color: #fff;
}
</style>
