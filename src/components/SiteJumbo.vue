<template>
  <div class="jumbotron">
    <div class="container-fluid">
      <div class="row" style="height: 670px; position: relative">
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
          <img src="@/assets/images/home-6-hero-right-person.png" alt="" />
        </div>
        <div class="side-opt-wrapper">
          <div class="side-options text-center d-flex flex-column">
            <font-awesome-icon icon="fa-solid fa-ruler" />
            <font-awesome-icon icon="fa-solid fa-life-ring" />
            <font-awesome-icon icon="fa-solid fa-book" />
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteJumbo",
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.jumbotron {
  background-color: $headerColor;

  .side-opt-wrapper {
    position: fixed;

    .side-options {
      row-gap: 17px;
      background-color: #ffffff;
      position: absolute;
      width: 40px;
      border-radius: 0.25rem 0 0 0.25rem;
      right: 0;
      top: 200px;
      padding: 10px;
      box-shadow: 0px 0px 5px -1px grey;

      svg {
        cursor: pointer;
      }
    }
  }

  .jumbo-text {
    padding: 5rem 0;

    button {
      @include button;

      &:hover {
        background-color: $mainWhiteColor;
        color: $btnsColor;
      }
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
      box-shadow: 0px -2px 25px -6px grey;
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
      bottom: -35%;
    }
  }
}
</style>
