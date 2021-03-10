<template>
  <fragment>
    <section
      class="uk-section-secondary uk-section uk-flex uk-flex-middle hero uk-light"
    >
      <!-- <video
        src="../assets/adventure81web.mp4"
        loop
        muted
        playsinline
        uk-video="autoplay: inview"
      ></video> -->
      <img src="../assets/hero.jpg" uk-img />
      <div class="uk-width-1-1">
        <div class="uk-container uk-container-large">
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-margin-xlarge-bottom"
          >
            <div class="uk-panel uk-width-1-1">
              <h2
                class="uk-h3 uk-margin-remove-bottom uk-text-left@m uk-text-center"
              >
                Cruise Aboard
              </h2>
              <h2
                class="uk-h1 uk-margin-remove-vertical uk-text-left@m uk-text-center"
              >
                Your Own
              </h2>
              <h2
                class="uk-h1 amHero uk-margin-remove-top uk-text-left@m uk-text-center"
              >
                Private Yacht
              </h2>
              <div
                class="uk-text-large uk-panel uk-margin uk-width-xlarge uk-margin-auto-right@m uk-margin-remove-left@m uk-margin-auto uk-text-left@m uk-text-center"
              >
                Along Southwest Florida’s Beautiful Gulf Coast
              </div>
              <div class="uk-margin-large uk-text-left@m uk-text-center">
                <a
                  class="uk-button uk-button-primary uk-button-large"
                  title="Explore"
                  uk-scroll
                  href="#adventures"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="adventures"
      class="uk-section-default uk-section-overlap uk-dark"
    >
      <div
        uk-img
        class="uk-section uk-section-large uk-flex uk-flex-middle"
        uk-height-viewport="offset-bottom: 20"
      >
        <div class="uk-container uk-container-large">
          <div class="uk-grid-large uk-margin-large" uk-grid>
            <div class="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
              <div class="uk-panel uk-width-1-1">
                <h3 class="uk-h1 uk-margin-small uk-text-left@m uk-text-center">
                  Standard 3 HR Charter
                </h3>
                <div
                  class="uk-panel uk-text-large uk-text-primary uk-margin-small uk-text-left@m uk-text-center"
                >
                  Daytime Or Sunset Cruise At Your Fingertips
                </div>
                <div
                  class="uk-panel uk-margin-medium uk-text-left@m uk-text-center"
                >
                  Standard three hour daytime or sunset cruise at your
                  fingertips all it is a call or text away. A minimum of 4
                  guests and a maximum of 6 is required, $100 per guest. Cruise
                  includes snacks and appetizers as well as champagne, mimosas,
                  white wine, beer and soft drinks. Just bring sunblock, we'll
                  take care of the rest. Additional hours are avaliable upon
                  request.
                </div>
                <div class="uk-text-left@m uk-text-center">
                  <a
                    class="uk-button uk-button-secondary uk-button-large uk-margin-bottom"
                    uk-scroll
                    href="#contact"
                    @click="interestedIn('3hr')"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div class="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
              <div class="uk-panel uk-width-1-1">
                <div
                  uk-slideshow="minHeight: 610;"
                  class="uk-margin uk-slideshow"
                >
                  <div class="uk-position-relative">
                    <ul class="uk-slideshow-items">
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-1.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-2.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-3.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-4.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-5.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-6.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-7.jpg"
                        />
                      </li>
                    </ul>
                    <div class="uk-visible@s uk-light">
                      <a
                        class="uk-position-center-left uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-previous
                        uk-slideshow-item="previous"
                      ></a>
                      <a
                        class="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-next
                        uk-slideshow-item="next"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="custom" class="uk-section-muted uk-section-overlap uk-dark">
      <div
        class="uk-section uk-section-large uk-flex uk-flex-middle"
        uk-height-viewport="offset-bottom: 20"
      >
        <div class="uk-container uk-container-large">
          <div class="uk-grid-large uk-margin-large" uk-grid>
            <div
              class="uk-grid-item-match uk-flex-middle uk-width-1-2@m uk-flex-last@m"
            >
              <div class="uk-panel uk-width-1-1">
                <h3 class="uk-h1 uk-margin-small uk-text-left@m uk-text-center">
                  Custom Tour
                </h3>
                <div
                  class="uk-panel uk-text-large uk-text-primary uk-margin-small uk-text-left@m uk-text-center"
                >
                  Customize A Memorable Experience
                </div>
                <div
                  class="uk-panel uk-margin-medium uk-text-left@m uk-text-center"
                >
                  Special events like birthdays, anniversaries, engagements,
                  weddings, valentines and celebrations of life abouard
                  Adventure81 are our specialty! Allow us to customize a
                  memorable experience along the gorgeous waters of Naples Bay
                  Resort, Port Royal, Dome Homes and all coastline of Marco
                  Island and Naples with customized catering and decor
                  officiated by a licensed Master Captain. Please allow advanced
                  notice for bookings for your special event.
                </div>
                <div class="uk-text-left@m uk-text-center">
                  <a
                    class="uk-button uk-button-secondary uk-button-large uk-margin-bottom"
                    uk-scroll
                    href="#contact"
                    @click="interestedIn('custom')"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div class="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
              <div class="uk-panel uk-width-1-1">
                <div
                  uk-slideshow="minHeight: 610;"
                  class="uk-margin uk-slideshow"
                >
                  <div class="uk-position-relative">
                    <ul class="uk-slideshow-items">
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/custom-1.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/custom-2.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/custom-3.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/custom-4.jpg"
                        />
                      </li>
                    </ul>
                    <div class="uk-visible@s uk-light">
                      <a
                        class="uk-position-center-left uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-previous
                        uk-slideshow-item="previous"
                      ></a>
                      <a
                        class="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-next
                        uk-slideshow-item="next"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="weddings"
      class="uk-section-default uk-section-overlap uk-dark"
    >
      <div
        uk-img
        class="uk-background-norepeat uk-background-cover uk-background-bottom-center uk-section uk-section-large uk-flex uk-flex-middle"
        :style="{ backgroundImage: `url('${marcoislandBG}')` }"
        uk-height-viewport="offset-bottom: 20"
      >
        <div class="uk-container uk-container-large">
          <div class="uk-width-1-1">
            <div class="uk-grid-large uk-margin-large" uk-grid>
              <div
                class="uk-grid-item-match uk-margin-auto-vertical uk-width-1-2@m uk-height-1-1"
              >
                <h3 class="uk-h1 uk-margin-small uk-text-left@m uk-text-center">
                  Weddings
                </h3>
                <div
                  class="uk-panel uk-text-large uk-text-primary uk-margin-small uk-text-left@m uk-text-center"
                >
                  Looking For A Private Intimate Wedding?
                </div>
                <div
                  class="uk-panel uk-margin-medium uk-text-left@m uk-text-center"
                >
                  You are engaget! Let us start by congratulating you. We would
                  be honored to be part of your most memorable special day of
                  your life. Wether if your looking for a bachelor,
                  bachelorette, elopement or intimate wedding we will take the
                  stress away from you. All you have to do is is sit back and
                  relax while our captain and team do the rest. Our Caotain is
                  wedding officiant and notary, he will be able to announce you
                  as husband and wife aboard or on private beach.
                </div>
                <div class="uk-text-left@m uk-text-center">
                  <a
                    class="uk-button uk-button-secondary uk-button-large uk-margin-bottom"
                    uk-scroll
                    href="#contact"
                    @click="interestedIn('wedding')"
                  >
                    Book now
                  </a>
                </div>
              </div>
              <div class="uk-width-1-2@m">
                <div
                  uk-slideshow="minHeight: 610;"
                  class="uk-margin uk-slideshow"
                >
                  <div class="uk-position-relative">
                    <ul class="uk-slideshow-items">
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/wedding-1.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/wedding-2.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/wedding-3.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/wedding-4.jpg"
                        />
                      </li>
                    </ul>
                    <div class="uk-visible@s uk-light">
                      <a
                        class="uk-position-center-left uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-previous
                        uk-slideshow-item="previous"
                      ></a>
                      <a
                        class="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-next
                        uk-slideshow-item="next"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="private" class="uk-section-muted uk-section-overlap uk-dark">
      <div
        class="uk-section uk-section-large uk-flex uk-flex-middle"
        uk-height-viewport="offset-bottom: 20"
      >
        <div class="uk-container uk-container-large">
          <div class="uk-grid-large uk-margin-large" uk-grid>
            <div
              class="uk-grid-item-match uk-flex-middle uk-width-1-2@m uk-flex-last@m"
            >
              <div class="uk-panel uk-width-1-1">
                <h3 class="uk-h1 uk-margin-small uk-text-left@m uk-text-center">
                  Private Dinner
                </h3>
                <div
                  class="uk-panel uk-text-large uk-text-primary uk-margin-small uk-text-left@m uk-text-center"
                >
                  With Personal Chef
                </div>
                <div
                  class="uk-panel uk-margin-medium uk-text-left@m uk-text-center"
                >
                  Choose casual or fancy dinner catered to all your likings.
                  Dinner will be paired with liqour or wine of your choice.
                  Preferably 2-4 persons with advanced booking. Text us at +1
                  920-707-3585 to discuss details and pricing.
                </div>
                <div class="uk-text-left@m uk-text-center">
                  <a
                    class="uk-button uk-button-secondary uk-button-large uk-margin-bottom"
                    uk-scroll
                    href="#contact"
                    @click="interestedIn('private')"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div class="uk-grid-item-match uk-flex-middle uk-width-1-2@m">
              <div class="uk-panel uk-width-1-1">
                <div
                  uk-slideshow="minHeight: 610;"
                  class="uk-margin uk-slideshow"
                >
                  <div class="uk-position-relative">
                    <ul class="uk-slideshow-items">
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/private-1.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-2.jpg"
                        />
                      </li>
                      <li tabindex="-1">
                        <img
                          class="uk-cover"
                          alt=""
                          uk-img="target: !.uk-slideshow-items"
                          uk-cover
                          src="../assets/images/3hr-7.jpg"
                        />
                      </li>
                    </ul>
                    <div class="uk-visible@s uk-light">
                      <a
                        class="uk-position-center-left uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-previous
                        uk-slideshow-item="previous"
                      ></a>
                      <a
                        class="uk-position-center-right uk-position-small uk-hidden-hover"
                        href="#"
                        uk-slidenav-next
                        uk-slideshow-item="next"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      class="uk-section uk-section-large uk-section-default"
      uk-height-viewport="offset-bottom: 20"
    >
      <div class="uk-container uk-container-large">
        <h3 class="uk-h1 uk-margin-large uk-text-left@m uk-text-center">
          About
        </h3>
        <div
          class="tm-grid-expand uk-grid-column-small uk-margin-small"
          uk-grid
        >
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-2-3@s uk-first-column"
          >
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin uk-text-center">
                <div
                  class="uk-child-width-1-1 uk-child-width-1-2@s uk-grid-small"
                  uk-grid
                >
                  <div class="uk-first-column">
                    <div class="uk-inline-clip uk-light">
                      <img alt="" uk-img src="../assets/boat-1.jpg" />
                    </div>
                  </div>
                  <div>
                    <div class="uk-inline-clip uk-light">
                      <img alt="" uk-img src="../assets/boat-2.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match uk-flex-middle uk-width-1-3@s">
            <div class="uk-panel uk-width-1-1">
              <h3 class="uk-h4 uk-text-center uk-margin-remove-bottom">
                On the beautiful waters of Marco Island
              </h3>
              <hr class="uk-divider-small uk-text-center" />
              <div
                class="uk-panel uk-margin uk-width-medium uk-margin-auto uk-text-center"
              >
                Let us take you on a day time or dinner sunset cruise on the
                beautiful waters of Naples Bay, Port Royal, Dome Homes and all
                of Marco Island, Naples, Isles of Capri and 10,000 Islands along
                the Golf of Mexico coast line with daily excursions on our 40'
                yacht.
              </div>
            </div>
          </div>
        </div>

        <div
          class="tm-grid-expand uk-grid-column-small uk-margin-small"
          uk-grid
        >
          <div class="uk-grid-item-match uk-flex-middle uk-width-2-3@s">
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin-remove-vertical">
                <img
                  alt=""
                  uk-img
                  class="aboutImg"
                  src="../assets/joshua.jpg"
                />
              </div>
            </div>
          </div>
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-1-3@s uk-flex-first@s uk-first-column"
          >
            <div class="uk-panel uk-width-1-1">
              <h3 class="uk-h4 uk-text-center">Joshua James Skinner</h3>
              <hr class="uk-divider-small uk-text-center" />
              <div
                class="uk-panel uk-margin uk-width-medium uk-margin-auto uk-text-center"
              >
                Positive, soft spoken and funny. Josh is originally from
                Minocqua, Wisconsin. He moved to Florida to pursue his dreams of
                living and working on the water. Josh then became a Licensed
                Master Captain and PADI Dive instructor. With careful
                consideration he bought the 40' yacht to offer dream vacations
                for one and all.
              </div>
            </div>
          </div>
        </div>

        <div
          class="tm-grid-expand uk-grid-column-small uk-margin-small"
          uk-grid
        >
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-2-3@s uk-flex-first@s"
          >
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin-remove-vertical">
                <img
                  alt=""
                  uk-img
                  class="aboutImg top"
                  src="../assets/luxury.jpg"
                />
              </div>
            </div>
          </div>
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-1-3@s uk-flex-first@s uk-first-column"
          >
            <div class="uk-panel uk-width-1-1">
              <h3 class="uk-h4 uk-text-center">Luxury vacations</h3>
              <hr class="uk-divider-small uk-text-center" />
              <div
                class="uk-panel uk-margin uk-width-medium uk-margin-auto uk-text-center"
              >
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="uk-section uk-section-large uk-padding-remove-top">
      <div class="uk-container uk-container-large">
        <h3 class="uk-h3 uk-text-left@m uk-text-center">Latest Instagram</h3>
        <div class="uk-grid-small uk-flex-middle" uk-grid>
          <div class="uk-width-auto">
            <img
              class="uk-border-circle"
              width="100"
              height="100"
              :src="instagram[0].profilePic"
            />
          </div>
          <div class="uk-width-expand">
            <h3 class="uk-card-title uk-margin-remove-bottom">
              {{ instagram[0].insta }}
            </h3>
            <a
              class="uk-button uk-button-secondary uk-button-small"
              target="_blank"
              rel="nofollow noopener"
              :href="`https://www.instagram.com/${instagram[0].insta}/`"
            >
              Follow
            </a>
          </div>
        </div>
        <div
          class="uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center uk-grid-medium"
          uk-lightbox="animation: slide"
          uk-grid
        >
          <div v-for="i in instagram[0].images" :key="i.node.id">
            <a
              :href="i.node.display_url"
              class="uk-inline-clip uk-transition-toggle"
              tabindex="0"
              :data-caption="i.node.edge_media_to_caption.edges[0].node.text"
            >
              <img
                :src="i.node.thumbnail_src"
                class="uk-transition-scale-up uk-transition-opaque"
              />
            </a>
          </div>
        </div>
        <div class="uk-margin-top uk-text-left@m uk-text-center">
          <a
            class="uk-button uk-button-secondary uk-button-large"
            target="_blank"
            rel="nofollow noopener"
            :href="`https://www.instagram.com/${instagram[0].insta}/`"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>

    <section id="contact" class="uk-section-muted uk-section uk-section-large">
      <div class="uk-container uk-container-large">
        <div class="uk-grid-large uk-grid-margin-large" uk-grid>
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-visible@m"
          >
            <div class="uk-panel uk-width-1-1">
              <div class="uk-margin uk-text-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4699.828306657711!2d-81.72726112300585!3d25.981852533741353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88daef8596ccb7d7%3A0x9ffb99c7acee95da!2s387%20Capri%20Blvd%2C%20Naples%2C%20FL%2034113%2C%20USA!5e0!3m2!1sen!2sse!4v1604660147120!5m2!1sen!2sse"
                  width="600"
                  height="450"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div
            class="uk-grid-item-match uk-flex-middle uk-width-expand@m uk-first-column"
          >
            <div class="uk-panel uk-width-1-1">
              <h3 class="uk-h2">Contact us</h3>
              <div class="uk-margin uk-text-large">
                Text or call us by phone
                <a class="uk-button uk-button-secondary" href="tel:+19207073585"
                  ><i class="fas fa-phone uk-margin-small-right" />+1
                  920-707-3585</a
                >
              </div>
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
                  />
                  <label>Name*</label>
                </div>
                <div class="inputPlaceholder">
                  <input
                    class="uk-input uk-form-large"
                    type="email"
                    name="_replyto"
                    v-model="emailMsg"
                    placeholder=" "
                  />
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
                  <label>Message (optional)</label>
                </div>
                <div v-if="errorTxt" class="uk-alert-danger" uk-alert>
                  <p>{{ errorTxt }}</p>
                </div>
                <!-- <Recaptcha /> -->
                <button
                  type="submit"
                  class="uk-margin-top uk-button uk-button-secondary"
                >
                  Send
                </button>
              </form>
              <p class="uk-text-large" v-if="loadingTxt">
                Thank you, We'll be in touch soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </fragment>
</template>

<script>
import axios from "axios";

import marcoislandBG from "../assets/marcoisland-dock-bg.jpg";

export default {
  name: "Home",
  data: () => ({
    marcoislandBG: marcoislandBG,
    nameMsg: "",
    emailMsg: "",
    messageMsg: "",
    loadingTxt: false,
    errorTxt: "",
    instagram: [
      {
        id: "adventure81marco",
        insta: "adventure81marco",
        fullName: "Adventure 81",
        profilePic: null,
        images: null,
      },
    ],
  }),
  mounted() {
    this.loadPic(this.instagram[0].insta);
  },
  methods: {
    interestedIn(input) {
      if (input === "3hr") {
        this.messageMsg = "I'm interested in a 3 hour tour";
      }
      if (input === "custom") {
        this.messageMsg = "I'm interested in a custom tour";
      }
      if (input === "wedding") {
        this.messageMsg = "I'm interested in a wedding package";
      }
      if (input === "private") {
        this.messageMsg = "I'm interested in private dinner with personal chef";
      }
    },
    sendEmail() {
      if (!this.nameMsg) {
        return (this.errorTxt = "Please type your name");
      }
      if (!this.emailMsg) {
        return (this.errorTxt = "Please type your email");
      }
      // if (!this.getVerification) {
      //   return this.errorTxt = "reCAPTCHA not done!"
      // }
      if (this.nameMsg && this.emailMsg) {
        this.loadingTxt = true;
      }
      axios
        .post("https://formspree.io/XXXXXX", {
          name: this.nameMsg,
          from: this.emailMsg,
          _subject: `${this.nameMsg} | Message from adventure81marco.com`,
          message: this.messageMsg,
          option: this.radioMsg,
        })
        .then(() => {
          this.nameMsg = "";
          this.emailMsg = "";
          this.messageMsg = "";
        })
        .catch((error) => {
          if (error.response) {
            this.errorText = error.response;
          }
        });
    },
    checkEdge() {
      if (window.navigator.userAgent.indexOf("Edge") > -1) return 1;
      return 0;
    },
    checkMoz() {
      if (window.navigator.userAgent.indexOf("Firefox") > 0) return 1;
      return 0;
    },
    loadPic: async function(username) {
      var pic = await this.fetchUsername(username);
      this.instagram
        .filter((o) => o.insta === username)
        .forEach((o) => (o.profilePic = pic.graphql.user.profile_pic_url_hd));
      this.instagram
        .filter((o) => o.insta === username)
        .forEach(
          (o) =>
            (o.images = pic.graphql.user.edge_owner_to_timeline_media.edges)
        );
    },
    fetchUsername: async function(username) {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      return await fetch(
        `${proxyUrl}https://www.instagram.com/${username}/?__a=1`
      ).then((r) => r.json());
    },
  },
};
</script>
