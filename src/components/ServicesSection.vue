<template>
  <section id="services">
    <div class="container">
      <div class="row row-cols-2">
        <!-- right column -->
        <div class="right-column col">
          <div class="right-row row">
            <div class="col-6">
              <div class="section-card">
                <div class="card-text">
                  <h2>Graphic Design</h2>
                  <div>
                    Have a passion for graphics and arts? Show your talents with
                    confidence and self-assertiveness.
                  </div>
                </div>
                <div class="img-wrapper text-center">
                  <img
                    src="@/assets/images/home-6-service-image-01.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-6" style="margin-top: 5rem">
              <div class="section-card">
                <div class="card-text">
                  <h2>Business Administration</h2>
                  <div>
                    Learners are encouraged to study the mechanism and structure
                    of business administration.
                  </div>
                </div>
                <div class="img-wrapper text-center">
                  <img
                    src="@/assets/images/home-6-service-image-02.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-6" style="margin-top: -5rem">
              <div class="section-card">
                <div class="img-wrapper">
                  <img
                    src="@/assets/images/home-6-service-image-03.png"
                    alt=""
                  />
                </div>
                <div class="card-text">
                  <h2>Idea Discussion</h2>
                  <div>
                    Get teamed up with the specialists who work and teach coding
                    for years at famous universities.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="section-card">
                <div class="img-wrapper text-center">
                  <img
                    src="@/assets/images/home-6-service-image-04.png"
                    alt=""
                  />
                </div>
                <div class="card-text">
                  <h2>Web Development</h2>
                  <div>
                    Learn to start building web pages from scratch. You decide
                    your own pace, course and speed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /right column -->
        <!-- left column -->
        <div class="left-column col">
          <div class="small-text text-uppercase">together we can create</div>
          <h2 class="headline">
            Services We <span class="highlight">Can Provide</span> For My
            Clients.
          </h2>
          <div class="services">
            <div class="item">
              <font-awesome-icon icon="fa-solid fa-check" />
              <span>Select & customize courses to your preferences</span>
            </div>
            <div class="item">
              <font-awesome-icon icon="fa-solid fa-check" />
              <span>Change the tutor and make arrangements</span>
            </div>
            <div class="item">
              <font-awesome-icon icon="fa-solid fa-check" />
              <span>Participate in events to join others</span>
            </div>
            <div class="item">
              <font-awesome-icon icon="fa-solid fa-check" />
              <span>Get the desired certificate delivered at house</span>
            </div>
          </div>
          <button>Get started for free</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

#services {
  padding-top: 10rem;
  background-image: url("@/assets/images/background-pattern-grid-line.png");
  background-position: center;
  .right-row {
    row-gap: 2rem;
    .section-card {
      height: 400px;
      box-shadow: 0px 0px 18px -8px grey;
      border-radius: 0.5rem;
      background-color: white;

      img {
        max-width: 300px;
        height: 184px;
      }

      .card-text {
        padding: 2rem;
        h2 {
          font-size: 20px;
          color: $coursesSectTextColor;
        }
        div {
          color: #7e7e7e;
          font-weight: 300;
        }
      }
    }
  }

  .left-column {
    padding: 5rem;
    margin-top: 10rem;

    .small-text {
      font-size: 15px;
      letter-spacing: 2px;
      color: #696969;
      margin-bottom: 2rem;
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
    .services {
      margin-top: 2rem;
      .item {
        margin-top: 1rem;
        svg {
          color: $highlightedTextColor;
          margin-right: 1rem;
        }

        span {
          font-size: 15px;
          font-weight: 300;
        }
      }
    }

    button {
      @include button;
      margin-top: 2rem;

      &:hover {
          background-color: $coursesSectTextColor;
      }
    }
  }
}
</style>
