<template>
  <fragment>

    <section class="uk-section-default uk-section uk-flex uk-flex-middle">
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-xlarge">
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column">
            <div class="uk-panel uk-width-1-1 uk-text-center">
              <h1 class="uk-h2 uk-margin-auto">Tjänster</h1>
              <div class="uk-width-1-2@m uk-margin-auto subtitle">Vi älskar digital kommunikation både internt &amp; externt och skapar alltid värdefulla kommunikationslösningar för er. Fysiska event ligger oss varmt om hjärtat och vi jobbar hårt för att kunna bibehålla dessa evenemang under den pågående pandemi som vi befinner oss i. Vi följer myndigheternas rekommendationer med stor seriositet vilket bland annat innebär en begränsning av eventens storlek. Vi gör alltid en riskbedömning och i samråd med er så ”Corona”-anpassar vi eventen för allas säkerhet. Tack för ert tålamod och visad hänsyn!</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="services"
      class="uk-section-default uk-section uk-section-large uk-padding-remove-top"
    >
      <div class="uk-container uk-container-xlarge">
        <div
          class="uk-grid-margin"
          uk-grid
          uk-height-match="target: .uk-card; row: false"
        >
          <div
            v-for="(s, index) in services"
            :key="index"
            class="uk-width-1-3@m"
          >
            <p class="uk-text-large uk-text-center uk-text-uppercase">{{ s.name }}</p>
            <div
              class="uk-inline-clip uk-transition-toggle uk-box-shadow-medium services"
              tabindex="0"
            >
              <img
                v-if="!s.type"
                :alt="s.desc"
                :title="s.name"
                uk-img
                :src="`./images/tjanster/${s.sn}.jpg`"
              >
              <img
                v-if="s.type === 'gif'"
                :alt="s.desc"
                :title="s.name"
                uk-img
                :src="`./images/tjanster/${s.sn}.gif`"
              >
              <video
                v-if="s.type === 'video'"
                :src="`./images/tjanster/${s.sn}.mp4`"
                loop
                muted
                playsinline
                uk-video="autoplay: inview"
              ></video>
            </div>
            <div class="uk-margin uk-margin-large-bottom">
              {{ s.desc }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="uk-section-muted uk-section uk-section-small"
    >
      <div class="uk-container uk-container-xlarge">
        <div class="uk-text-center">
          <h2 class="uk-h3 uk-margin-large-top">Är du intresserad av en tjänst?</h2>
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
import allServices from "../shared/services"

export default {
  name: "Service",
  components: {
  },
  computed: {
  },
  data: () => ({
    selectedService: null,
    services: allServices,
  }),
  methods: {
    fetchService(urlCode) {
      var count = 0;
      for (let i = 0; i < allServices.length; i++) {
        count++
        if (allServices[ i ].sn === urlCode) {
          return this.selectedService = allServices[ i ];
        }
        if (count === allServices.length) {
          this.empty()
        }
      }
    },
    empty() {
      this.$router.push('/tjanster')
    }
  },
  watch: {
    $route(to) {
      var updatedUrl = to.params.name
      if (to) {
        this.fetchService(updatedUrl);
        document.title = `Dreamdo - Tjänster - ${this.selectedService.name}`
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