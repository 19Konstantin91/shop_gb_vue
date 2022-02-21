<template>
    <section class="info">
            <div class="info_flex container">
                <div class="info_1">
                    <img src="../IMG/Delivery.svg" alt="Delivery_info">
                    <h2 class="info_items">Free Delivery</h2>
                    <h2 class="info_items_2">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</h2>
                </div>

                <div class="info_1">
                    <img src="../IMG/Sales.svg" alt="Delivery_info">
                    <h2 class="info_items">Sales & discounts</h2>
                    <h2 class="info_items_2">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</h2>
                </div>

                <div class="info_1">
                    <img src="../IMG/Quality.svg" alt="Delivery_info">
                    <h2 class="info_items">Quality assurance</h2>
                    <h2 class="info_items_2">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</h2>
                </div>
            </div>

        </section>
</template>

<script>
export default {
    name: 'Info'
}
</script>

<style lang="scss">
.info {
  background: #222224;
  height: 100%;
}

.info_flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.info_1 {
  text-align: center;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 103px 0;
}

.info_items {
  font-size: 19.96px;
  line-height: 24px;
  color: #FBFBFB;
  font-weight: 400;
  margin: 25px 0 16px 0;
}

.info_items_2 {
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #858585;
  font-weight: 300;
}
</style>