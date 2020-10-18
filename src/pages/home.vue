<template>
  <fragment>

    <section class="uk-section-default uk-section uk-flex uk-flex-middle hero uk-light">
      <video
        src="../assets/danny.mp4"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
        :class="{videoFixEdge: checkEdge()}"
      ></video>
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-xlarge">
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column">
            <div class="uk-panel uk-width-1-2@l">
              <h1 class="uk-h1 uk-margin-auto uk-text-left@m uk-text-center">Vad får dig att dansa?</h1>
              <div class="uk-margin-large uk-text-left@m uk-text-center">
                <router-link
                  to="/tjanster"
                  class="uk-button uk-button-large uk-button-primary"
                >Läs mer</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="cases"
      class="uk-section-default uk-section uk-section-large"
    >
      <div class="uk-container uk-container-xlarge">
        <div
          class="uk-grid-margin uk-grid-stack"
          uk-grid
        >
          <div class="uk-flex-auto uk-width-1-1@m uk-first-column uk-text-center">
            <h2 class="uk-h1 uk-margin-remove-top uk-margin-remove-bottom uk-margin-auto">Case</h2>
            <router-link
              to="/cases"
              class="uk-button uk-button-primary uk-margin-medium-bottom"
            >Läs mer</router-link>
          </div>
        </div>
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
      id="about"
      class="uk-section-muted uk-section uk-section-large"
    >
      <div class="uk-container uk-container-xlarge">
        <div
          class="uk-grid-margin uk-grid-stack"
          uk-grid
        >
          <div class="uk-flex-auto uk-width-1-1@m uk-first-column">
            <h2 class="uk-h1 uk-margin-remove-top uk-margin-auto uk-text-center@m uk-text-center">Om oss</h2>
          </div>
        </div>
        <div class="uk-text-center">
          <!-- <h2 class="uk-h3 uk-margin-large-top">Vår Story</h2> -->
          <p class="uk-margin-auto uk-width-1-2@m">Vi älskar Disneyvärlden – hoppet, tron på ändlösa möjligheter och strävan efter att uppnå sina drömmar. Disney har lärt oss, att för att uppnå någonting behövs en magisk kittel som är fylld med vänlighet, mod, kreativitet, tålmodighet och viktigast av allt – att hålla fast vid sina värderingar. Vi tror att med en liten gnutta magi så är våra drömmar inom räckhåll, och den magin bär vi passionerat med oss i vårt arbete varje dag.</p>
          <router-link
            to="/omoss"
            class="uk-button uk-button-primary uk-margin-medium-bottom"
          >Läs mer om oss</router-link>
        </div>
        <div class="uk-text-center">
          <img
            class="uk-width-1-2"
            src="../assets/omoss.svg"
          />
        </div>
      </div>
    </section>

    <section
      id="services"
      class="uk-section-default uk-section uk-section-large"
    >
      <div class="uk-container uk-container-xlarge">
        <div
          class="uk-grid-margin uk-grid-stack"
          uk-grid
        >
          <div class="uk-flex-auto uk-width-1-1@m uk-first-column uk-text-center">
            <h2 class="uk-h1 uk-margin-remove-top uk-margin-remove-bottom uk-margin-auto">Tjänster</h2>
            <router-link
              to="/tjanster"
              class="uk-button uk-button-primary uk-margin-medium-bottom"
            >Vill du veta mer?</router-link>
          </div>
        </div>
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
            <a :href="`/tjanster/${s.sn}`">
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
                <div class="uk-transition-fade uk-position-cover uk-overlay uk-flex uk-flex-center caseHover">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section-muted uk-section uk-section-small">
      <div class="uk-container uk-container-xlarge">
        <div class="uk-text-center">
          <h2 class="uk-h3 uk-margin-large-top">Är du intresserad av våra tjänster?</h2>
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
import { mapGetters } from "vuex";
import allServices from "../shared/services";
import allCases from "../shared/cases";

export default {
  name: "Home",
  components: {
  },
  computed: {
    ...mapGetters([ "getVerification" ]),
  },
  data: () => ({
    cases: allCases,
    services: allServices,
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
  }
}
</script>