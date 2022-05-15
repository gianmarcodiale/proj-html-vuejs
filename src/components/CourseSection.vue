<template>
  <section id="course_info">
    <div class="container">
      <div class="row">
        <div class="col-8 m-auto">
          <div class="text text-center">
            Let passion and determination be the guide along the way and develop
            at your own pace that's comfortable.
          </div>
          <div class="cite">
            <h6 class="name text-uppercase pt-3 text-center">Fannie Moreno</h6>
            <div class="position text-center">/Founder & CEO</div>
          </div>
        </div>
      </div>
      <div class="row row-cols-4" id="course_counters">
        <div class="col text-center">
          <div class="counter">1.926</div>
          <div class="counter-info text-uppercase">Finished sessions</div>
        </div>
        <div class="col text-center">
          <div class="counter">3.092+</div>
          <div class="counter-info text-uppercase">Enrolled learners</div>
        </div>
        <div class="col text-center">
          <div class="counter">200</div>
          <div class="counter-info text-uppercase">Online instructors</div>
        </div>
        <div class="col text-center">
          <div class="counter">100%</div>
          <div class="counter-info text-uppercase">Satisfaction rate</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CourseSection",
};
</script>

<style lang="scss" scoped>
#course_info {
  .container {
    background-image: url("@/assets/images/background-pattern-grid-line.png");
    background-position: center;
  }

  .text {
    color: #333333;
    padding-top: 22rem;
    font-size: 34px;
    font-weight: 600;
    line-height: 1.42em;
  }

  .cite {
    padding-top: 2rem;

    .name {
      letter-spacing: 1px;
      font-size: 15px;
    }

    .position {
      color: #7e7e7e;
      font-size: 14px;
    }
  }
}

#course_counters {
  margin-top: 10rem;

  .counter {
    font-size: 48px;
    font-weight: 700;
    color: $highlightedTextColor;
  }

  .counter-info {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #696969;
  }
}
</style>
