<template>
  <fragment>
    <!-- Mobile -->
    <div
      uk-sticky
      class="uk-hidden@m"
    >
      <div class="uk-navbar-container">
        <nav
          uk-navbar="boundary-align: true; align: right; dropbar: true; mode: click"
          class="uk-navbar"
        >
          <div class="uk-navbar-left">
            <router-link
              to="/"
              class="uk-navbar-item uk-logo"
            >
              <img
                src="../assets/Logo.svg"
                uk-svg
                height="35"
                alt="Dajalum"
              />
            </router-link>
          </div>
          <div class="uk-navbar-right">
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
                      <router-link to="/cases">Case</router-link>
                    </li>
                    <li @click="hideMenu">
                      <router-link to="/tjanster">Tjänster</router-link>
                    </li>
                    <li @click="hideMenu">
                      <router-link to="/omoss">Om oss</router-link>
                    </li>
                    <li @click="hideMenu">
                      <router-link to="/kontaktaoss">Kontakt</router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <!-- Desktop -->
    <div
      class="uk-visible@m"
      uk-header
    >
      <div
        uk-sticky
        media="@m"
        sel-target=".uk-navbar-container"
        class="uk-sticky uk-sticky-fixed"
      >
        <div class="uk-navbar-container">
          <div class="uk-container uk-container-xlarge">
            <nav
              class="uk-navbar"
              uk-navbar="{'align':'left','boundary':'!.uk-navbar-container'}"
            >
              <div class="uk-navbar-left">
                <router-link
                  to="/"
                  class="uk-navbar-item uk-logo"
                >
                  <img
                    src="../assets/Logo.svg"
                    uk-svg
                    height="45"
                    alt="Logo"
                    class="logo uk-padding-small uk-margin-small-right"
                  />
                </router-link>
              </div>
              <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                  <li>
                    <router-link to="/cases">Case</router-link>
                  </li>
                  <li>
                    <router-link to="/tjanster">Tjänster</router-link>
                  </li>
                  <li>
                    <router-link to="/omoss">Om oss</router-link>
                  </li>
                  <li>
                    <router-link to="/kontaktaoss">Kontakt</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="uk-sticky-placeholder"></div>
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
  mounted() {
    // Fade Background Color on Navbar when scrolling from top
    const nav = document.querySelectorAll(".uk-navbar-container");

    var isMac = navigator.appVersion.indexOf("Mac") != -1;

    window.addEventListener("scroll", () => {
      nav.forEach(navbar => {
        if (isMac) {
          var opacityMe = (2050 - window.pageYOffset) / 2000;
          navbar.style.background = "rgba(255,255,255,0.8)".replace(
            /[^,]+(?=\))/,
            opacityMe
          );
          if (opacityMe <= 0.8) {
            navbar.style.background = "rgba(255,255,255,0.8)".replace(
              /[^,]+(?=\))/,
              "0.8"
            );
          }
        } else {
          navbar.style.background = "rgba(255,255,255,1)";
        }
      });
    });
  },
  methods: {
    hideMenu() {
      const element = this.$refs.dropDownMenu;
      // eslint-disable-next-line no-undef
      UIkit.drop(element).hide();
    },
  },
}
</script>