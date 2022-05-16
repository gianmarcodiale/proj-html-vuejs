<template>
  <section id="partners_section">
    <div class="headline text-center">
      <h2>Why people talk about <span class="highlight">MaxCoach</span>?</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-10 m-auto">
          <div class="caption d-flex align-items-center">
            <img
              class="testimonial"
              src="@/assets/images/testimonial-avata-02.jpg"
              alt=""
            />
            <img
              class="shape"
              src="@/assets/images/maxcoach-shape-05-150x150.png"
              alt=""
            />
            <div class="text">
              I'm free to learn at my own pace, follow my own schedule and chose
              the subject I like. Great study portal for free people like me.
              <br />
              <h6 class="name text-uppercase">Mina Hollace</h6>
              <span class="position">/Freelancer</span>
            </div>
          </div>
        </div>
      </div>
      <div class="partners">
        <div class="row justify-content-between">
          <img
            src="@/assets/images/client-logo-colored-01.png"
            alt=""
            style="width: 100px"
          />
          <img
            src="@/assets/images/client-logo-colored-02.png"
            alt=""
            style="width: 150px"
          />
          <img
            src="@/assets/images/client-logo-colored-03.png"
            alt=""
            style="width: 100px"
          />
          <img
            src="@/assets/images/client-logo-colored-04.png"
            alt=""
            style="width: 150px"
          />
          <img
            src="@/assets/images/client-logo-colored-05.png"
            alt=""
            style="width: 150px"
          />
          <img
            src="@/assets/images/client-logo-colored-06.png"
            alt=""
            style="width: 150px"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PartnersSection",
};
</script>

<style lang="scss" scoped>
#partners_section {
  .headline h2 {
    font-size: 48px;
    color: #333333;
    margin-top: 5rem;
    .highlight {
      color: $highlightedTextColor;
      font-weight: 300;
    }
  }
  .caption {
    position: relative;
    img.testimonial {
      border-radius: 50%;
      z-index: 100000;
    }
    img.shape {
      position: absolute;
      left: 8%;
      width: 120px;
      bottom: 15%;
    }
    .text {
      font-size: 34px;
      color: #333333;
      font-weight: 400;
      line-height: 1.42;
      padding: 4.75rem;
      .name {
        font-size: 15px;
        letter-spacing: 1px;
        margin-top: 2rem;
      }
      .position {
        color: #7e7e7e;
        font-size: 14px;
      }
    }
  }
  .partners {
    padding-bottom: 5rem;
    img {
      object-fit: contain;
    }
  }
}
</style>
