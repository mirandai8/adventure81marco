<template>
  <fragment>

    <section class="uk-section-default uk-section uk-flex uk-flex-middle">
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-xlarge">
          <div class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column">
            <div class="uk-panel uk-width-1-1 uk-text-center">
              <h1 class="uk-h2 uk-margin-auto">Kontakta oss</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="uk-section-default uk-section uk-section-large"
    >
      <div class="uk-container">
        <div
          class="uk-grid-large uk-grid-margin-large"
          uk-grid
        >
          <div class="uk-grid-item-match uk-width-expand@m">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin">
                <div class="uk-text-large uk-margin">
                  Ring, mejla eller boka in oss på ett möte – digitalt, på ett luftigt café eller kanske på en promenad. I pandemitider är det viktigt att vi tar hand om varandra ♥️.
                </div>
                <div>
                  <i class="fas fa-map-pin"></i> Göteborg
                </div>
                <div>
                  <i class="fas fa-mobile-alt"></i> <a href="tel:+46760946292">+46 760 94 62 92</a>
                </div>
                <div>
                  <i class="fas fa-heart"></i> <a href="mailto:camilla@dreamdo.se">camilla@dreamdo.se</a>
                </div>
                <div
                  class="uk-margin-top uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-visible@m"
                  uk-img
                  :data-src="kontaktimg"
                  style="max-height: 230px"
                />
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-width-expand@m uk-first-column">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-text-large uk-margin uk-margin-small-top subtitle">...eller fyll enkelt i kontaktformuläret</div>
              <form
                v-if="!loadingTxt"
                @submit.prevent="sendEmail"
                method="POST"
              >
                <div class="inputPlaceholder">
                  <input
                    class="uk-input uk-form-large"
                    type="text"
                    name="name"
                    v-model="nameMsg"
                    placeholder=" "
                  >
                  <label>Namn*</label>
                </div>
                <div class="inputPlaceholder">
                  <input
                    class="uk-input uk-form-large"
                    type="email"
                    name="_replyto"
                    v-model="emailMsg"
                    placeholder=" "
                  >
                  <label>Mail*</label>
                </div>
                <div class="inputPlaceholder">
                  <textarea
                    class="uk-textarea uk-form-large"
                    type="text"
                    rows="3"
                    name="message"
                    v-model="messageMsg"
                    placeholder=" "
                  />
                  <label>Meddelande*</label>
                </div>
                <div
                  v-if="errorTxt"
                  class="uk-alert-danger"
                  uk-alert
                >
                  <p>{{errorTxt}}</p>
                </div>
                <button
                  type="submit"
                  class="uk-margin-top uk-button uk-button-primary"
                >Skicka</button>
              </form>
              <p
                v-if="loadingTxt"
                class="uk-h4"
              >Tack för ditt meddelande! Det har landat säkert i vår mailbox, vi svarar inom kort. Ha det fint tills dess, hälsningar dreamdo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </fragment>
</template>

<script>
import axios from 'axios';
import kontaktimg from "../assets/kontakt.jpg"

export default {
  name: "Contact",
  components: {
  },
  computed: {
  },
  data: () => ({
    kontaktimg: kontaktimg,
    nameMsg: '',
    emailMsg: '',
    messageMsg: '',
    loadingTxt: false,
    errorTxt: "",
  }),
  methods: {
    sendEmail() {
      if (!this.nameMsg) {
        return this.errorTxt = "Skriv ditt namn"
      }
      if (!this.emailMsg) {
        return this.errorTxt = "Skriv din email-adress"
      }
      if (!this.messageMsg) {
        return this.errorTxt = "Skriv ditt meddelande"
      }
      // if (!this.getVerification) {
      //   return this.errorTxt = "reCAPTCHA not done!"
      // }
      if (this.nameMsg && this.emailMsg && this.messageMsg) {
        this.loadingTxt = true;
      }
      axios.post('https://formspree.io/xzbjnvlw', {
        name: this.nameMsg,
        from: this.emailMsg,
        _subject: `${this.nameMsg} | Meddelande från dreamdo.se`,
        message: this.messageMsg,
      },
      ).then(() => {
        this.nameMsg = '';
        this.emailMsg = '';
        this.messageMsg = '';
      }).catch((error) => {
        if (error.response) {
          this.errorText = error.response
        }
      });
    },
  },
  watch: {
  },
  created() {
  },
}
</script>