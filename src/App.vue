<template>
  <div id="app">
    <SiteHeader :navMenu="navMenu" />
    <div class="jumbotron">
      <div class="container-fluid">
        <div class="row" style="height: 670px">
          <div class="jumbo-text text-center text-white">
            <h2 class="jumbo-title">Learn At Your Own Pace!</h2>
            <p>Get teamed up with people of the same will.</p>
            <button>Get started for free</button>
          </div>
          <div class="col left-img text-center">
            <img src="@/assets/images/home-6-hero-left-person.png" alt="" />
          </div>
          <div class="col center-img">
            <img
              src="@/assets/images/home-6-hero-poster-final.jpg"
              alt=""
              class="screen"
            />
            <img
              src="@/assets/images/icon-youtube-play.png"
              alt=""
              class="yt-logo"
            />
          </div>
          <div class="col right-img">
            <img
              src="@/assets/images/home-6-hero-right-person-195x300.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
  },
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

.jumbotron {
  background-color: $headerColor;

  .jumbo-text {
    padding: 5rem 0;

    button {
      @include button;
    }

    .jumbo-title {
      line-height: 1.17em;
      font-size: 48px;
    }

    p {
      color: $jumboParColor;
    }
  }

  .center-img {
    position: relative;

    img.screen {
      border: 20px solid white;
      border-radius: 1.25rem;
      z-index: 1;
      box-shadow: 1px 8px 5px -2px $shadowColor;
    }

    img.yt-logo {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    }
  }

  .left-img {
    position: relative;

    img {
      width: 370px;
      position: absolute;
      left: 5%;
    }
  }

  .right-img {
    position: relative;

    img {
      position: absolute;
      bottom: -30%;
    }
  }
}
</style>
