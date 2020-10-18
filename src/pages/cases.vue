<template>
  <fragment>

    <section class="uk-section-default uk-section uk-flex uk-flex-middle">
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-xlarge">
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column">
            <div class="uk-panel uk-width-1-1 uk-text-center">
              <h1 class="uk-h2 uk-margin-auto">Case</h1>
              <div class="uk-width-1-2@m uk-margin-auto subtitle">Vi värderar våra kunder högt och ser alltid till att ha väldigt kul tillsammans. Är ni ett företag eller en organisation? Det spelar ingen roll för oss, vi tycker om er båda och älskar att leverera över våra kunders förväntan. Genom kreativitet, strategi, kärlek och en gnutta magi uppnår vi våra drömmar tillsammans.
                <br><br>Nedan är ett axplock av våra kundcase, klicka och läs mer:
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="cases"
      class="uk-section-default uk-section uk-section-large uk-padding-remove-top"
    >
      <div class="uk-container uk-container-xlarge">
        <div
          class="uk-grid-margin"
          uk-grid
          uk-height-match="target: .uk-card; row: false"
        >
          <div
            v-for="(p, index) in cases"
            :key="index"
            class="uk-flex-auto uk-first-column uk-width-1-2@m"
          >
            <a :href="`/cases/${p.sn}`">
              <div
                class="uk-inline-clip uk-transition-toggle uk-box-shadow-medium bigHoverBox"
                tabindex="0"
              >
                <fragment v-if="p.img.length == 1">
                  <img
                    :alt="p.desc"
                    :title="p.name"
                    uk-img
                    :src="p.img"
                  >
                </fragment>
                <div
                  :class="{loopImages: !checkMoz() && !checkEdge(), edgeFix: checkEdge(), edgeFix: checkMoz()}"
                  v-else
                >
                  <img
                    v-if="checkEdge() || checkMoz()"
                    :alt="p.desc"
                    :title="p.name"
                    uk-img
                    :src="p.img[0]"
                  >
                  <img
                    v-else
                    v-for="(img, index) in p.img"
                    :key="index"
                    :alt="p.desc"
                    :title="p.name"
                    uk-img
                    :src="img"
                  >
                </div>
                <div class="uk-transition-fade uk-position-cover uk-overlay uk-flex uk-flex-center uk-flex-middle caseHover">
                  <div class="uk-text-center">
                    <h3 class="uk-h3 uk-margin-remove">{{ p.name }}</h3>
                    <p class="uk-h4 uk-margin-remove">{{ p.company }}</p>
                  </div>
                </div>
              </div>
            </a>
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
          <h2 class="uk-h3 uk-margin-large-top">Vill du också synas?</h2>
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
  name: "Cases",
  components: {
  },
  computed: {
  },
  data: () => ({
    selectedCase: null,
    cases: allCases,
    info: window.navigator.userAgent,
    info2: window.navigator.userAgent.indexOf("Edge")
  }),
  methods: {
    checkEdge() {
      if (window.navigator.userAgent.indexOf("Edge") > -1) return 1
      return 0
    },
    checkMoz() {
      if (window.navigator.userAgent.indexOf("Firefox") > 0) return 1
      return 0
    },
    fetchCase(urlCode) {
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
      this.$router.push('/tjanster')
    }
  },
  watch: {
    $route(to) {
      var updatedUrl = to.params.name
      if (to) {
        this.fetchCase(updatedUrl);
        document.title = `Dreamdo - Tjänster - ${this.selectedCase.name}`
      }
    }
  },
  created() {
    setTimeout(() => {
      this.fetchCase(this.$route.params.sn.toLowerCase())
    }, 100)
  },
}
</script>