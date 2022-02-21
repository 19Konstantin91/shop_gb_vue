<template>
    <footer>
        <section class="footer_top">
            <article class="support_flex container">
                <div class="support_info">
                    <img class="support_foto" src="../IMG/support_foto.png" alt="foto">
                    <h2 class="support_foto_title">“Vestibulum quis porttitor dui! Quisque <br> viverra nunc mi, <em> a pulvinar purus <br> condimentum“ </em></h2>
                </div>

                <div class="support_mail">
                    <h2 class="subscribe_title">SUBSCRIBE</h2>
                    <h2 class="subscribe_h2">FOR OUR NEWLETTER AND PROMOTION</h2>
                    <form class="form" action="#" method="post">
                        <input class="inputField" type="email" name="email" placeholder="Enter Your Email">
                        <input class="submit" type="submit" value="Subscribe"> 
                    </form>
                </div>
            </article>
        </section>
        <section class="footer_bottom ">
            <div class="footer_bottom_flex container">
                    <h2 class="bottom_title">© 2021  Brand  All Rights Reserved.</h2>

                    <div class="footer_links">

                        <a  class="facebook" href="#">
                            <img src="../IMG/facebook.svg" alt="facebook">
                        </a>

                        <a  class="facebook" href="#">
                            <img src="../IMG/Inst.svg" alt="Inst">
                        </a>

                        <a  class="facebook" href="#">
                            <img src="../IMG/Pin.svg" alt="pin">
                        </a>

                        <a  class="facebook" href="#">
                            <img src="../IMG/tviter.svg" alt="tvit">
                        </a>

                    </div>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">

/*    Footer top    */

.footer_top {
  background: url(../IMG/Font_footer.jpg);
  background-repeat: no-repeat;
  background-position: center;
}

.support_flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.support_info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 104px 0 126px 0;
}

.support_foto {
  width: 96px;
  height: 96px;
}

.support_foto_title {
  font-size: 20px;
  margin: 30px 0 0 0;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
  color: #222224;
}

.support_mail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 150px 0 32px 0;
  width: 557px;
  height: 61px;
}

.subscribe_title {
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
}

.subscribe_h2 {
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
}

.form {
  margin-top: 32px;
}

.inputField {
  font-size: 14px;
  line-height: 17px;
  color: #222224;
  background: #E1E1E1;
  padding: 14px 60px 14px 20px;
  border-radius: 20px 0 0 20px;
  border: none;
  outline: none;
}

.submit {
  cursor: pointer;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  background: #E05C6E;
  border-radius: 0 20px 20px 0;
  padding: 14px;
  margin-left: -5px;
  border: none;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.submit:hover {
  background: #F16D7F;
}

/* Fppooter bottom    */
.footer_bottom {
  background: #222224;
}

.footer_bottom_flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.bottom_title {
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #FBFBFB;
  margin: 30px 0;
}

.facebook {
  padding: 8px 10px;
  background: #FFFFFF;
  text-decoration: none;
}

.facebook:not(:last-child) {
  margin-right: 7px;
}

.footer_links {
  margin: 24px 0;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
</style>