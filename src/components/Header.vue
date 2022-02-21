<template>
        <nav class="header">
            <div class="header_menu container">
                <div class="header_left">
                    <router-link to="/" class="header_logo"><img src="../IMG/lable.png" alt="lable"></router-link>
                    
                        <img src="..\IMG\search_menu.svg" alt="search_menu">
                    
                </div>

                <div class="header_right">
                        <img class="icon_right" src="..\IMG\burger_menu.svg" alt="burger_menu">

                        <img class="icon_right" src="..\IMG\account.svg" alt="account">

                        <router-link to="/cart" class="icon_right"><img src="../IMG/basket.svg" alt="cart"></router-link>

                </div>
            </div>
        </nav>
    
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
.header {
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background: #222222;
  color: #E8E8E8;
  padding: 19px 0;
}

.header_menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.header_logo {
  margin-right: 41px;
  text-decoration: none;
}

.icon_right:not(:last-child) {
  margin-right: 33px;
}
</style>