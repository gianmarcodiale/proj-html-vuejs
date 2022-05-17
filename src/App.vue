<template>
  <div id="app">
    <SiteHeader :navMenu="navMenu" />
    <SiteJumbo />
    <SiteMain :coursesList="coursesList" :articles="articles"/>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteJumbo from "@/components/SiteJumbo.vue";
import SiteMain from "@/components/SiteMain.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteJumbo,
    SiteMain,
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
      coursesList: [
        {
          price: "$40.00",
          course_title: "Learning to Write as a Professional Author",
          course_image: require("@/assets/images/course-02-480x298.jpg"),
          lessons_number: "20 Lessons",
          students_number: "50 Students",
        },
        {
          price: "Free",
          course_title: "Customer-centric Info-Tech Strategies",
          course_image: require("@/assets/images/stock-full-hd-03-480x298.jpg"),
          lessons_number: "24 Lessons",
          students_number: "769 Students",
        },
        {
          price: "$19.00",
          course_title: "Open Programming Courses for Everyone: Python",
          course_image: require("@/assets/images/stock-full-hd-04-480x298.jpg"),
          lessons_number: "17 Lessons",
          students_number: "62 Students",
        },
        {
          price: "$26.00",
          course_title: "Academic Listening and Note-taking",
          course_image: require("@/assets/images/stock-full-hd-06-480x298.jpg"),
          lessons_number: "14 Lessons",
          students_number: "67 Students",
        },
        {
          price: "$39.00",
          course_title: "Master jQuery in a Short Period of Time",
          course_image: require("@/assets/images/course-featured-image-01-480x298.jpg"),
          lessons_number: "6 Lessons",
          students_number: "51 Students",
        },
        {
          price: "$59.00",
          course_title: "Introduction to Javascript for Beginners",
          course_image: require("@/assets/images/stock-full-hd-05-480x298.jpg"),
          lessons_number: "14 Lessons",
          students_number: "76 Students",
        },
      ],
      articles: [
        {
          image: require("@/assets/images/artist-blog-03-480x325.jpeg"),
          type: "artist",
          title: "Brush Strokes Energize Trees in Paintings",
          date: "May 15, 2020",
          views: "688 views"
        },
        {
          image: require("@/assets/images/artist-blog-01-480x325.jpg"),
          type: "artist",
          title: "Pocket-Sized Notebooks Hold Miniature Paintings",
          date: "May 15, 2020",
          views: "603 views"
        },
        {
          image: require("@/assets/images/artist-blog-02-480x325.jpg"),
          type: "artist",
          title: "Connection Between Self-Portraits and Identity",
          date: "May 15, 2020",
          views: "397 views"
        }
      ]
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
