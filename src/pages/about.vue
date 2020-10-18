<template>
  <fragment>

    <!-- <section
      class="uk-section-default uk-section uk-flex uk-flex-middle"
      :style="`min-height: calc(75vh - 80px); background:center center url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); background-size: cover`"
    >
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-xlarge">
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column">
          </div>
        </div>
      </div>
    </section> -->

    <section class="uk-section-default uk-section uk-flex uk-flex-middle">
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-xlarge">
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column">
            <div class="uk-panel uk-width-1-1 uk-text-center">
              <h1 class="uk-h2 uk-margin-auto">Om oss</h1>
              <div class="uk-width-1-2@m uk-margin-auto subtitle">Vi älskar Disneyvärlden – hoppet, tron på ändlösa möjligheter och strävan efter att uppnå sina drömmar. Disney har lärt oss, att för att uppnå någonting behövs en magisk kittel som är fylld med vänlighet, mod, kreativitet, tålmodighet och viktigast av allt – att hålla fast vid sina värderingar. Vi tror att med en liten gnutta magi så är våra drömmar inom räckhåll, och den magin bär vi passionerat med oss i vårt arbete varje dag.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section-default uk-section uk-section-large uk-padding-remove-top">
      <div class="uk-container uk-container-xlarge">
        <div
          class="uk-grid-margin uk-margin-xlarge"
          uk-grid
        >
          <div class="uk-grid-item-match uk-flex-middle uk-width-auto@m uk-flex-last@m uk-first-column">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin">
                <div
                  class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover omossImg"
                  uk-img
                  :data-src="omoss1"
                />
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m">
            <div class="uk-panel uk-width-1-1">
              <h2 class="uk-text-left@s uk-text-center">Vår story</h2>
              <div class="uk-margin">Allt startade i ett litet bullerby-område när två grannar hittade varandra i event- och kommunikationsvärlden. Den ena arbetar inom event &amp; sociala medier och den andra inom strategisk kommunikation, videoproduktion och digitala event. Två vänner är bättre än en, och så bestämde de sig för att slå sig samman och idag uppfyller de stora drömmar tillsammans. Camilla driver dreamdo.se och Malin, <a href="https://eventolution.se">Eventolution.se</a>.</div>
            </div>
          </div>
        </div>
        <div
          class="uk-grid-margin uk-margin-xlarge"
          uk-grid
        >
          <div class="uk-grid-item-match uk-flex-middle uk-width-auto@m uk-flex-first@m uk-first-column">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin">
                <div
                  class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover omossImg"
                  uk-img
                  :data-src="omoss2"
                  data-sizes="min-width: 450px"
                />
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m">
            <div class="uk-panel uk-width-1-1">
              <h2 class="uk-text-left@s uk-text-center">Våra vänner</h2>
              <div class="uk-margin">Vi älskar våra vänner, ju fler desto större kalas! Vi vill ge lite extra spotlight till våra professionella kollegor JAWS Streaming, Zoetrop Film och .709 Media. Är du intresserad av att samarbeta med oss? Tveka inte en sekund på att höra av dig, vi älskar som sagt vänner!</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section-default uk-section uk-section-large uk-padding-remove-top">
      <div class="uk-container uk-container-xlarge">
        <h2 class="uk-h3 uk-text-center">Hur vi tänker</h2>
        <div class="standards">
          <div
            v-for="(s, index) in standards"
            :key="index"
            class="item"
          >
            <div class="uk-text-large">{{ s.title }}</div>
            <!-- <div class="uk-text-small">{{ s.subtitle }}</div> -->
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

  </fragment>
</template>

<script>
import omoss1 from "../assets/omoss1.jpg"
import omoss2 from "../assets/omoss2.jpg"

export default {
  name: "About",
  components: {
  },
  computed: {
  },
  data: () => ({
    omoss1: omoss1,
    omoss2: omoss2,
    standards: [
      {
        title: "Människor framför vinst",
        subtitle: "Lorem ipsum",
        desc: "Relationer är vår gyllene standard. Vi strävar efter att omge oss själva med smarta och passionerade människor i vårt team och klientel & tillsammans växer vi genom vårt samarbete.",
      },
      {
        title: "Håll det enkelt",
        subtitle: "Lorem ipsum",
        desc: "Vi arbetar för att hålla arbetssätt och lösningar enkelt, för enkelt = tydligt, förståeligt och genomförbart. Vi använder detta koncept i varje aspekt i våra produktioner och leveranser.",
      },
      {
        title: "Kvalité över kvantitet",
        subtitle: "Lorem ipsum",
        desc: "Vi koncentrerar vår tid och talang på färre projekt och klienter. Varför? Då får vi tid till att ägna hela vårt hjärta efter ert behov.  ",
      },
      {
        title: "Gör det bättre",
        subtitle: "Lorem",
        desc: "Det finns alltid rum för förbättring och det är en värdering vi tror starkt på. Vi strävar efter storhet och utmanar oss själva att hela tiden.",
      },
      {
        title: "Var äkta",
        subtitle: "Lorem",
        desc: "Människor är människor och det är så vi behandlar dem. Alla förtjänar att bli behandlade med respekt, transparens och ärlighet. Vi gör ingen skillnad på människor, vi tycker om er alla och det är så vi jobbar ♥️",
      },
      {
        title: "Lär för livet",
        subtitle: "Lorem",
        desc: "Vi utmanar oss själva och söker alltid efter nya saker att lära oss. Vi tror att genom att jaga vår passion, lyssna på andra och hitta nya sätt och ställen att lära sig på, så hjälper det oss att växa.",
      },
    ]
  }),
  methods: {
  },
  watch: {
  },
  created() {
  },
}
</script>