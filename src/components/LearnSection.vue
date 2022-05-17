<template>
  <section id="learn">
    <div class="small-text text-uppercase text-center">
      wanna transform your life?
    </div>
    <h2 class="headline text-center">
      Glad to <span class="highlight">Help You</span> Learn
    </h2>
    <div class="container">
      <div class="row row-cols-4">
        <div class="col">
          <font-awesome-icon icon="fa-regular fa-flag" />
          <h3 class="title">Idea Discussion</h3>
          <div class="description">
            Get teamed up with the specialist who work and teach coding for
            years at famous universities
          </div>
        </div>
        <div class="col">
          <font-awesome-icon icon="fa-solid fa-gear" />
          <h3 class="title">Web Development</h3>
          <div class="description">
            Learn to start building web pages from scratch. You decide your own
            pace, course and speed.
          </div>
        </div>
        <div class="col">
          <font-awesome-icon icon="fa-solid fa-life-ring" />
          <h3 class="title">System Administration</h3>
          <div class="description">
            Learners are encouraged to study the mechanism and structure of
            business administration.
          </div>
        </div>
        <div class="col">
          <font-awesome-icon icon="fa-solid fa-display" />
          <h3 class="title">Graphic Design</h3>
          <div class="description">
            Have a passion for graphics and arts? Show your talents with
            confidence and self-assertiveness.
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-image text-center">
      <img src="@/assets/images/home-6-services-image.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "LearnSection",
};
</script>

<style lang="scss" scoped>
#learn {
  background-image: linear-gradient(white, rgb(112 171 254 / 12%));
  .small-text {
    font-size: 15px;
    letter-spacing: 2px;
    color: #696969;
    margin-bottom: 2rem;
    padding-top: 5rem;
  }

  h2.headline {
    font-size: 48px;
    line-height: 1.17em;
    color: #333333;

    .highlight {
      color: $highlightedTextColor;
      font-weight: 300;
    }
  }

  .row {
    margin-top: 5rem;
    padding-bottom: 5rem;
    svg {
      width: 64px;
      height: 64px;
      margin-bottom: 1rem;
    }

    h3.title {
      font-size: 20px;
    }

    .description {
      font-size: 15px;
      color: #696969;
      font-weight: 300;
    }
  }
}
</style>
