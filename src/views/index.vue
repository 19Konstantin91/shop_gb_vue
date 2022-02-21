<template>
    <div class="index">

        <div class="promo">
            <div class="promo_flex container">
                <div class="promo_title">
                        <h1> <span class="bold">THE BRAND</span>  <br> <span class="font_bold">OF LUXERIOUS <span class="title_span">FASHION</span></span>
                        </h1>
                </div>
            </div>
        </div>
        <main>
            <section class="category">
                <div class="category_flex container">
                    <div class="category_items background_women"> 
                        <h2> <strong class="bold_category">30% OFF</strong> <br> 
                    <strong class="color_category">FOR WOMEN</strong></h2>
                    </div>

                    <div  class="category_items background_men"> 
                        <h2> <strong class="bold_category">HOT DEAL
                            </strong> <br> 
                    <strong class="color_category">FOR MEN</strong></h2>
                    </div>

                    <div  class="category_items background_kids"> 
                        <h2> <strong class="bold_category">NEW ARRIVALS
                            </strong> <br> 
                    <strong class="color_category">FOR KIDS</strong></h2>
                    </div>

                    <div  class="category_items background_accesories"> 
                        <h2> <strong class="bold_category">LUXIROUS & TREND
                            </strong> <br> 
                    <strong class="color_category">ACCESORIES</strong></h2>
                    </div>
                </div>
            </section>

            <h2 class="product_title"> <span class="product_heading"> Fetured Items</span><br><span class="product_p">Shop for items based on what we featured in this week</span></h2>
            
            <section class="container card_flex">
                <ProductCard v-for="item of list" v-bind:key="item.id" v-bind:data="item"></ProductCard>
            </section>
            <section class="all_product_flex">
                <a class="all_product" href="catalog.html"> Browse All Product</a>
            </section>
            <section>
                <Info></Info>
            </section>
        </main>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Info from '../components/Info.vue'

export default {
    components: { 
        ProductCard,
        Info,
        },
    name: 'index',
    props: [
        'list',
        'catalog'
    ],
}
</script>

<style lang="scss">

.card_flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.card_flex_margin {
  margin: 68px 0 128px 0;
}
.promo {
  background: #F1E4E6;
  height: 764px;
}
.promo_flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  background: url(../IMG/promo_men.png);
  background-repeat: no-repeat;
  background-position: -200px;
}

.promo_title {
  max-width: 405px;
  border-left: 12px solid #F16D7F;
  padding-left: 16px;
}

.title_span {
  color: #F16D7F;
}

.bold {
  font-size: 48px;
  line-height: 57px;
}

.font_bold {
  font-size: 30px;
  line-height: 39px;
}

/*    Category    */

.category {
  margin: 65px;
}

.category_flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.category_items:not(:last-child) {
  width: 32%;
  height: 260px;
  margin-bottom: 30px;
}

.category_items {
  width: 100%;
  height: 180px;
  text-align: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.bold_category {
  font-size: 16px;
  font-weight: 100;
  line-height: 19px;
  color: #FFFFFF;
}

.color_category {
  font-size: 24px;
  line-height: 19px;
  color: #F16D7F;
  line-height: 29px;
}

.background_women {
  background: url(../IMG/background_women.jpg);
}

.background_men {
  background: url(../IMG/background_men.jpg);
}

.background_kids {
  background: url(../IMG/background_kids.jpg);
}

.background_accesories {
  background: url(../IMG/background_accesories.jpg);
}

/*Producy*/

.product_title {
  text-align: center;
  margin: 96px 0 18px 0;
}

.product_heading {
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
}

.product_p {
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: #9F9F9F;
}

/*    Button all product    */

.all_product_flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 48px 0 95px 0;
}

.all_product {
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border: 1px solid #FF6A6A;
  padding: 14px 38px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #F26376;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.all_product:hover {
  background: #F16D7F;
  color: #FFFFFF;
}

.all_product:active {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}
</style>
