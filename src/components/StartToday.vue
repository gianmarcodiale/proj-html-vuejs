<template>
  <section id="start_today" class="text-center">
    <h3 class="small-heading">
      Start today for getting
      <span class="highlight">Online Certification </span>
    </h3>
    <h2 class="heading">You can be your own guiding star with our help!</h2>
    <button>Get started now</button>
  </section>
</template>

<script>
export default {
  name: "StartToday",
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

#start_today {
  padding: 5rem 0 5rem 0;
  h3.small-heading {
    font-size: 24px;
    color: #333333;
    .highlight {
      color: $highlightedTextColor;
      font-weight: 300;
    }
  }
  h2.heading {
    font-size: 34px;
    color: #333333;
  }
  button {
    @include button;
    margin-top: 2rem;
    &:hover {
      background-color: $coursesSectTextColor;
    }
  }
}
</style>
