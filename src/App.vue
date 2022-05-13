<template>
  <div id="app">
    <header id="site_header">
      <div class="container d-flex align-items-center justify-content-between">
        <div id="site_logo">
          <img
            src="@/assets/images/light-logo.png"
            alt="maxcoach-logo"
            id="header_logo"
            style="width: 200px"
          />
        </div>
        <div id="site_nav">
          <ul class="list-unstyled d-flex">
            <li v-for="(item, index) in navMenu" :key="index">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="commands d-flex align-items-center">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            style="color: white"
          />
          <font-awesome-icon
            icon="fa-regular fa-circle-user"
            style="color: white"
          />
          <input type="search" placeholder="Search" />
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="magnifying-glass"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      navMenu: [
        {
          text: "Home",
          link: "#",
        },
        {
          text: "Pages",
          link: "#",
        },
        {
          text: "Courses",
          link: "#",
        },
        {
          text: "Features",
          link: "#",
        },
        {
          text: "Shop",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";

#site_header {
  background-color: $headerColor;

  .container {
    column-gap: 1rem;

    .commands {
      column-gap: 1rem;

      .magnifying-glass {
        color: $highlightedTextColor;
        margin-left: -35px;
      }
    }

    ul {
      margin-top: 1rem;

      a {
        text-decoration: none;
        color: $mainWhiteColor;
      }
    }
  }
}
</style>
