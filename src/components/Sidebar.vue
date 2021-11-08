<template>
  <div class="wrapper">
    <div class="inside">
      <img class="logo" src="../assets/svgs/Aspire.svg" alt="aspire" />
      <div class="small-text">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </div>
      <div
        :class="link.active === 1 ? 'links active' : 'links'"
        v-for="(link, index) in links"
        :key="index"
      >
        <img class="image" :src="getImgUrl(link.logo)" />
        <router-link :to="link.url">{{ link.name }}</router-link>
      </div>
    </div>
  </div>

  <div class="wrapper-mobile">
    <div
      v-for="(link, index) in mobilelinks"
      :key="index"
      :class="link.active === 1 ? 'links active' : 'links'"
    >
      <img class="image" :src="getImgUrl(link.logo)" />
      <router-link :to="link.url">{{ link.name }}</router-link>
    </div>
  </div>
</template>

<script>
import { reactive, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const getImgUrl = (url) => {
      var images = require.context("../assets/svgs/", false, /\.svg$/);
      return images("./" + url + ".svg");
    };
    const links = reactive([
      {
        logo: "Home",
        url: "/",
        name: "Home",
        active: 0,
      },
      {
        logo: "Card",
        url: "/cards",
        name: "Cards",
        active: 1,
      },
      {
        logo: "Payments",
        url: "/payments",
        name: "Payments",
        active: 0,
      },
      {
        logo: "Credit",
        url: "/credit",
        name: "Credit",
        active: 0,
      },
      {
        logo: "Account",
        url: "/settings",
        name: "Settings",
        active: 0,
      },
    ]);

    const mobilelinks = reactive([
      {
        logo: "LogoMobile",
        url: "/",
        name: "Home",
        active: 0,
      },
      {
        logo: "Card",
        url: "/cards",
        name: "Cards",
        active: 1,
      },
      {
        logo: "Payments",
        url: "/payments",
        name: "Payments",
        active: 0,
      },
      {
        logo: "CreditMobile",
        url: "/credit",
        name: "Credit",
        active: 0,
      },
      {
        logo: "AccountMobile",
        url: "/settings",
        name: "Settings",
        active: 0,
      },
    ]);

    return { links, mobilelinks, getImgUrl };
  },
});
</script>

<style lang="scss">
.wrapper {
  min-width: 340px;
  background: #0c365a;
  margin-right: 60px;
  align-items: stretch;
  display: flex;
  .inside {
    padding: 48px;
    text-align: left;
    .logo {
      width: 135px;
      height: 35px;
      margin-bottom: 20px;
    }
    .small-text {
      font-size: 15px;
      color: rgba(#ffffff, 0.3);
      margin-bottom: 80px;
    }
    .links {
      display: flex;
      align-items: center;
      flex-direction: row;
      padding: 30px 0;
      &.active {
        a {
          color: #01d167;
        }
      }
      .image {
        margin-right: 16px;
      }
      a {
        font-size: 16px;
        text-decoration: none;
        color: #fff;
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
  }
}

.wrapper-mobile {
  display: none;
}

@media screen and (max-width: 414px) {
  .wrapper {
    display: none;
  }
  .wrapper-mobile {
    display: flex;
    position: fixed;
    bottom: 0;
    background: #fff;
    z-index: 2;
    filter: drop-shadow(0 -3px 6px #00000014);
    padding: 8px 31px;
    flex-flow: row wrap;
    width: 100%;
    .links {
      font-size: 9px;
      display: flex;
      flex-direction: column;
      flex: 0 1 calc(20% - 10px);
      text-align: center;
      cursor: pointer;
      &.active {
        a {
          color: #01d167;
        }
      }
      a {
        color: #dddddd;
        text-decoration: none;
      }
      img {
        width: 24px;
        height: 24px;
        margin: auto;
      }
    }
  }
}
</style>
