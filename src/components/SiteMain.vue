<template>
  <main id="site_main">
    <CourseSection />
    <ServicesSection />
  </main>
</template>

<script>
import CourseSection from "@/components/CourseSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";

export default {
  name: "SiteMain",
  components: {
    CourseSection,
    ServicesSection,
  },
};
</script>

<style lang="scss" scoped></style>
