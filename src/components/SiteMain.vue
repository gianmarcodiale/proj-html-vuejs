<template>
  <main id="site_main">
    <CourseInfoSection />
    <ServicesSection />
    <section id="courses_section">
      <div class="small-text text-uppercase text-center">
        choose a course to get started
      </div>
      <h2 class="headline text-center">
        Latest Featured <span class="highlight">Courses</span>
      </h2>
      <div class="container" id="courses_list">
        <div class="row row-cols-2">
          <div class="col" v-for="(item, index) in coursesList" :key="index">
            <div
              class="section-card d-flex justify-content-center align-items-center"
            >
              <img :src="item.course_image" alt="" class="img-fluid" />
              <div class="card-text">
                <div class="highlighted">{{ item.price }}</div>
                <div class="course-title">{{ item.course_title }}</div>
                <br />
                <span class="lessons"
                  ><font-awesome-icon icon="fa-solid fa-file-lines" />{{
                    item.lessons_number
                  }}</span
                >
                <span class="students"
                  ><font-awesome-icon icon="fa solid fa-user" />{{
                    item.students_number
                  }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="courses-btn text-center">
        <button>
          View all courses <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>
      </div>
    </section>
    <PartnersSection />
  </main>
</template>

<script>
import CourseInfoSection from "@/components/CourseInfoSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import PartnersSection from "@/components/PartnersSection.vue";

export default {
  name: "SiteMain",
  components: {
    CourseInfoSection,
    ServicesSection,
    PartnersSection,
  },
  props: {
    coursesList: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
// courses section
#courses_section {
  padding-top: 5rem;
  background-color: $blogSect_footerColor;

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

  #courses_list {
    padding-top: 7rem;

    .row {
      row-gap: 2rem;
    }

    .section-card {
      padding: 1rem;
      border-radius: 0.5rem;

      &:hover {
        background-color: $mainWhiteColor;
      }

      img {
        max-width: 170px;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
      }

      .card-text {
        padding: 2rem;

        .highlighted {
          color: $highlightedTextColor;
          font-size: 23px;
          font-weight: 700;
        }

        .course-title {
          color: $coursesSectTextColor;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;

          &:hover {
            color: $highlightedTextColor;
          }
        }

        .lessons {
          margin-right: 30px;
        }

        .lessons,
        .students {
          color: #8c89a2;
          font-size: 13px;

          svg {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .courses-btn {
    margin-top: 2rem;
    padding-bottom: 5rem;
    button {
      @include button;
      &:hover {
        background-color: $coursesSectTextColor;
      }
    }
  }
}
// end courses section
</style>
