<template>
    <div class="product_card">
        <img src="..\IMG\card_men8.jpg" alt="foto_1">
                      <!-- ДОПОЛНИЕТЛЬНЫЙ ДИВ -->
        <div class="hover">
            <button class="hover__button">
                <img src="..\IMG\Hover.png" alt="Hover">
            </button>
        </div>
                  <!-- ------------------------ ----->
        <div class="card_title_flex">
            <h3 class="card_title_1">{{data.title}}</h3>
            <h3 class="card_title_2">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda
                            Operandi.</h3>
            <h3 class="card_title_3">{{data.price}}$</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: [
    'data'
  ],
}
</script>

<style lang="scss">

.product_card {
  width: 360px;
  height: 581px;
  background: #F8F8F8;
  margin-top: 30px;
  padding-bottom: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /*ТОЖЕ ДОБАВЛЯЕМ ДЛЯ КОРРЕКТНОГО  ПОЗИЦИОНИРОВАНИЯ  ДОП.ДИВА    */
  position: relative;
}

.hover__button {
  opacity: 0.6;
  border: none;
  cursor: pointer;
}

/* ХОВЕР ЭФФЕКТ */
.product_card:hover .hover {
  opacity: 1;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.card_title_flex {
  padding: 25px 28px 20px 16px;
}

.card_title_1 {
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
}

.card_title_2 {
  font-size: 14px;
  line-height: 17px;
  font-weight: 300;
  color: #5D5D5D;
  margin: 18px 0 12px 0;
}

.card_title_3 {
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #F16D7F;
}

/* СТИЛИ ДЛЯ ДОП.ДИВА */
.hover {
  position: absolute;
  background: rgba(58, 56, 56, 0.86);
  width: 360px;
  height: 420px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  opacity: 0;
  top: 0;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.card_2 {
  margin: 10px 30%;
}

.background_card_2 {
  background: #F7E4E2;
}
</style>