<template>
  <fragment>

    <!-- MOBILE -->
    <div
      uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light adventureMenu; top: 50vh"
      class="uk-hidden@m"
    >
      <div class="uk-navbar-container">
        <nav
          uk-navbar="boundary-align: true; align: left; dropbar: true; mode: click"
          class="uk-navbar"
        >
          <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <li>
                <a
                  class="uk-navbar-toggle"
                  href="#sv-mobile"
                  uk-toggle
                >
                  <div
                    uk-navbar-toggle-icon
                    class="uk-icon uk-navbar-toggle-icon"
                  >
                  </div>
                </a>
                <div
                  ref="dropDownMenu"
                  class="uk-navbar-dropdown uk-width"
                >
                  <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li @click="hideMenu">
                      <a
                        uk-scroll
                        href="#"
                      >Home</a>
                    </li>
                    <li @click="hideMenu">
                      <a
                        uk-scroll
                        href="#adventures"
                      >Adventures</a>
                    </li>
                    <li @click="hideMenu">
                      <a
                        uk-scroll
                        href="#about"
                      >About</a>
                    </li>
                    <li @click="hideMenu">
                      <a
                        uk-scroll
                        href="#contact"
                      >Contact us</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="uk-navbar-center">
            <router-link
              to="/"
              class="uk-navbar-item uk-logo"
            >
              <img
                height="50"
                alt="Adventure 81"
              />
            </router-link>
          </div>
          <div class="uk-navbar-right menuPhone">
            <i class="fas fa-phone"></i>
          </div>
        </nav>
      </div>
    </div>

    <!-- DESKTOP -->
    <div
      class="uk-visible@m"
      uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light adventureMenu; top: 50vh"
    >
      <nav class="uk-navbar-container">
        <div class="uk-container uk-container-large">
          <div uk-navbar>
            <div class="uk-navbar-left">
              <ul class="uk-navbar-nav">
                <li><a
                    uk-scroll
                    href="#"
                  >Home</a></li>
                <li>
                  <a
                    uk-scroll
                    href="#adventures"
                  >Adventures</a>
                  <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li><a
                          uk-scroll
                          href="#adventures"
                        >3 HR Charter</a></li>
                      <li><a
                          uk-scroll
                          href="#custom"
                        >Custom Tour</a></li>
                      <li><a
                          uk-scroll
                          href="#weddings"
                        >Weddings</a></li>
                    </ul>
                  </div>
                </li>
                <li><a
                    uk-scroll
                    href="#about"
                  >About</a></li>
                <li><a
                    uk-scroll
                    href="#contact"
                  >Contact us</a></li>
              </ul>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav">
                <li>
                  <a
                    class="menuBtn"
                    href="tel:+19207073585"
                  >+1 920-707-3585</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  </fragment>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
  }),
  computed: {
  },
  components: {
  },
  mounted() { },
  methods: {
    hideMenu() {
      const element = this.$refs.dropDownMenu;
      // eslint-disable-next-line no-undef
      UIkit.drop(element).hide();
    },
  },
}
</script>