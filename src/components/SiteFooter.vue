<template>
  <footer id="site_footer">
    <div class="container">
      <div class="row row-cols-2">
        <div class="col" id="left_footer">
          <h2 class="heading">Address</h2>
          <div class="address">
            382 NE 191st St # 87394 Miami, FL 33179-3899 +1 (305) 547-9909 (9am
            - 5pm EST, Monday - Friday)
          </div>
          <div class="email">support@maxcoach.com</div>
          <div class="socials">
            <font-awesome-icon icon="fa-brands fa-facebook-square" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-instagram" />
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </div>
        </div>
        <div class="col" id="right_footer">
          <div class="row row-cols-3">
            <div class="col" v-for="(title, index) in footerMenu" :key="index">
              <h2 class="heading">{{ title.title }}</h2>
              <div
                class="links"
                v-for="(item, index) in footerMenu[index].items"
                :key="index"
              >
                <a href="#">{{ item.item }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy text-center">
        &copy; 2020 Maxcoach. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  props: {
    footerMenu: Array,
  },
};
</script>

<style lang="scss" scoped>
#site_footer {
  background-color: $blogSect_footerColor;
  padding-top: 5rem;
  #left_footer {
    padding-right: 15rem;
    h2.heading {
      font-size: 18px;
      color: #333333;
    }
    .address,
    .email {
      color: #696969;
      line-height: 2.5;
      font-size: 14px;
    }
    .socials {
      color: $jumboParColor;
      margin-top: 3rem;
      svg {
        font-size: 30px;
        margin-right: 3rem;
        cursor: pointer;
      }
    }
  }
  #right_footer {
    h2.heading {
      font-size: 18px;
      color: #333333;
    }
    a {
      text-decoration: none;
      color: #696969;
      font-size: 14px;
    }
  }
  .copy {
    font-size: 14px;
    color: #696969;
    padding: 3rem;
  }
}
</style>
