<template>
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
      <div id="site_nav" class="d-flex">
        <ul class="nav-menu list-unstyled d-flex">
          <li
            v-for="(item, index) in navMenu"
            :key="index"
            class="d-flex align-items-center"
          >
            <a :href="item.link">{{ item.text }}</a>
            <font-awesome-icon
              icon="fa-solid fa-chevron-down"
              style="color: white; width: 10px; padding: 2px"
            />
          </li>
        </ul>
        <div class="commands d-flex align-items-center">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
          />
          <font-awesome-icon
            icon="fa-regular fa-circle-user"
          />
          <input type="search" placeholder="Search" />
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="magnifying-glass"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
  props: {
    navMenu: Array,
  },
};
</script>

<style lang="scss" scoped>
#site_header {
  background-color: $headerColor;

  .container {
    column-gap: 1rem;

    #site_nav {
      column-gap: 2rem;

      .nav-menu {
        column-gap: 3rem;
      }

      .commands {
        column-gap: 1rem;
        svg {
          cursor: pointer;
          color: white;
          &:hover {
            color: $btnsColor;
          }
        }

        input {
          padding: 0.5rem;
          border: none;
          border-radius: 0.25rem;
        }

        .magnifying-glass {
          color: $highlightedTextColor;
          margin-left: -40px;
          cursor: pointer;
        }
      }

      ul {
        margin-top: 1rem;

        a {
          text-decoration: none;
          color: $mainWhiteColor;
          &:hover {
            text-decoration: underline 3px $highlightedTextColor;
          }
        }
      }
    }
  }
}
</style>
