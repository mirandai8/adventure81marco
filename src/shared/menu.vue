<template>
  <fragment>

    <!-- DESKTOP -->
    <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light adventureMenu; top: 50vh">
      <nav class="uk-navbar-container">
        <div class="uk-container uk-container-large">
          <div uk-navbar>
            <div class="uk-navbar-left">
              <ul class="uk-navbar-nav">
                <li><a href="#">Home</a></li>
                <li>
                  <a href="#">Adventures</a>
                  <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                      <li><a href="#">3 HR Charter</a></li>
                      <li><a href="#">Custom Tour</a></li>
                      <li><a href="#">Weddings</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav">
                <li>
                  <a
                    class="menuBtn"
                    href="tel:+19207073585"
                  >Call us</a>
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