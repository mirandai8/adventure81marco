<template>
  <fragment v-if="selectedCase">

    <section
      class="uk-section-default uk-section uk-flex uk-flex-middle"
      :style="`min-height: calc(75vh - 80px); background:center center url(${selectedCase.featureImg}); background-size: cover`"
    >
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-xlarge">
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column">
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section-default uk-section uk-section-small">
      <div class="uk-container uk-container-xlarge uk-text-center">
        <h1 class="uk-h3 uk-text-bold uk-margin-remove-top">{{ selectedCase.name }}</h1>
        <div class="caseCompany uk-margin-remove-top">{{ selectedCase.company }}</div>
        <div class="uk-margin-auto uk-width-1-2@m uk-margin-medium-top subtitle">{{ selectedCase.desc }}</div>
      </div>
    </section>

    <section class="uk-section-default uk-section uk-section-large">
      <div class="uk-container uk-container-xlarge">
        <fragment
          v-for="(s, index) in selectedCase.sections"
          :key="index"
        >
          <div
            class="uk-grid-margin uk-margin-xlarge"
            uk-grid
          >
            <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m">
              <div class="uk-panel uk-width-1-1">
                <h2 class="uk-text-left@s uk-text-center">{{ s.title }}</h2>
                <div class="uk-margin">{{ s.text }}</div>
              </div>
            </div>
            <div
              :class="{'uk-flex-first@m': s.style == 'right'}"
              class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column"
            >
              <div class="uk-panel uk-width-1-1">
                <div class="uk-margin">
                  <video
                    v-if="s.video"
                    loop
                    muted
                    playsinline
                    uk-video="autoplay: inview"
                    class="uk-background-cover uk-height-large"
                    :class="{caseVideo: selectedCase.company === 'Enzymatica'}"
                    :src="s.video"
                  />
                  <div
                    v-if="s.img"
                    class="uk-height-medium uk-background-cover uk-background-center-center uk-height-large"
                    uk-img
                    :data-src="s.img"
                  />
                </div>
              </div>
            </div>
          </div>
        </fragment>
      </div>
    </section>

    <section class="uk-section-muted uk-section uk-section-small">
      <div class="uk-container uk-container-xlarge">
        <div class="uk-text-center">
          <h2 class="uk-h3 uk-margin-large-top">{{ selectedCase.btnTitle }}</h2>
          <router-link
            to="/kontaktaoss"
            class="uk-button uk-button-primary uk-margin-medium-bottom"
          >Kontakta oss</router-link>
        </div>
      </div>
    </section>

  </fragment>
</template>

<script>
import allCases from "../shared/cases"

export default {
  name: "Service",
  components: {
  },
  computed: {
  },
  data: () => ({
    selectedCase: null
  }),
  methods: {
    fetchService(urlCode) {
      var count = 0;
      for (let i = 0; i < allCases.length; i++) {
        count++
        if (allCases[ i ].sn === urlCode) {
          return this.selectedCase = allCases[ i ];
        }
        if (count === allCases.length) {
          this.empty()
        }
      }
    },
    empty() {
      this.$router.push('/')
    }
  },
  watch: {
    $route(to) {
      var updatedUrl = to.params.name
      if (to) {
        this.fetchService(updatedUrl);
        document.title = `Dreamdo - Tjänster - ${this.selectedCase.name}`
      }
    }
  },
  created() {
    setTimeout(() => {
      this.fetchService(this.$route.params.sn.toLowerCase())
    }, 100)
  },
}
</script>