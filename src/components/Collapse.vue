<template>
  <div
    class="collapse"
    v-for="(item, index) in items"
    :key="index"
    @click="toggle"
  >
    <div class="title">
      <img :src="getImgUrl(item.logo)" alt="image" />
      <span>{{ item.name }}</span>
    </div>
    <img src="../assets/svgs/ArrowDown.svg" alt="image" v-if="!show" />
    <img src="../assets/svgs/ArrowUp.svg" alt="image" v-if="show" />
  </div>
  <div
    v-show="show === true"
    class="content-wrapper"
    v-for="(item, index) in content"
    :key="index"
  >
    <div class="content-item">
      <div class="circle" :class="item.background">
        <img :src="getImgUrl(item.logo)" alt="image" />
      </div>
      <div class="group-content-info">
        <div class="name-info">{{ item.name }}</div>
        <div class="date-info">{{ item.date }}</div>
        <div class="group-refund">
          <div class="refund-cirle">
            <img :src="getImgUrl(item.refundLogo)" alt="image" />
          </div>
          <div class="refund-text">Refund on debit card</div>
        </div>
      </div>
      <div class="group-currency">
        <span :class="item.condition === 0 ? 'plus' : 'minus'">{{ item.currencyText }}</span>
        <img :src="getImgUrl(item.currencyLogo)" alt="image" />
      </div>
    </div>
  </div>
  <div class="view-all" v-show="show === true">View all card transactions</div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const show = ref(false);
    const getImgUrl = (url) => {
      var images = require.context("../assets/svgs/", false, /\.svg$/);
      return images("./" + url + ".svg");
    };
    const items = reactive([
      {
        id: 1,
        logo: "CardDetail",
        name: "Card details",
      },
      {
        id: 2,
        logo: "Transaction",
        name: "Recent transactions",
      },
    ]);

    const content = reactive([
      {
        id: 1,
        logo: "FileStorage",
        name: "Hamleys",
        date: "20 May 2020",
        refundLogo: "Finance",
        refundText: "Refund on debit card",
        currencyText: "+ S$ 150",
        currencyLogo: "Next",
        condition: 0,
        background: "blue",
      },
      {
        id: 2,
        logo: "Flights",
        name: "Hamleys",
        date: "20 May 2020",
        refundLogo: "Finance",
        refundText: "Refund on debit card",
        currencyText: "- S$ 150",
        currencyLogo: "Next",
        condition: 1,
        background: "green",
      },
      {
        id: 3,
        logo: "Megaphone",
        name: "Hamleys",
        date: "20 May 2020",
        refundLogo: "Finance",
        refundText: "Refund on debit card",
        currencyText: "- S$ 150",
        currencyLogo: "Next",
        condition: 1,
        background: "pink",
      },
      {
        id: 4,
        logo: "FileStorage",
        name: "Hamleys",
        date: "20 May 2020",
        refundLogo: "Finance",
        refundText: "Refund on debit card",
        currencyText: "- S$ 150",
        currencyLogo: "Next",
        condition: 1,
        background: "blue",
      },
    ]);

    const toggle = () => {
      show.value = !show.value;
    };

    return { items, getImgUrl, toggle, show, content };
  },
});
</script>

<style lang="scss">
.collapse {
  background: #f5f9ff;
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid #f5f5f5;
  &:nth-child(2) {
    margin-bottom: 0;
  }
  .title {
    display: flex;
    align-items: center;
    span {
      color: #0c365a;
      margin-left: 12px;
    }
  }
}
.content-wrapper {
  border: 1px solid #f0f0f0;
  border-bottom: 0;
  border-top: 0;
  background-color: #fff;
  padding: 24px;
  padding-bottom: 0;
  .content-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 16px;
    .circle {
      width: 48px;
      height: 48px;
      display: flex;
      justify-items: center;
      align-items: center;
      border-radius: 50%;
      margin-right: 12px;
      &.blue {
        background: #009dff1a;
      }
      &.green {
        background: #00d6b51a;
      }
      &.pink {
        background: #f251951a;
      }
      img {
        margin: auto;
      }
    }
    .group-content-info {
      .name-info {
        font-size: 14px;
        color: #222222;
        margin-bottom: 4px;
        font-weight: 600;
      }
      .date-info {
        color: #aaaaaa;
        font-size: 13px;
        margin-bottom: 12px;
      }
      .group-refund {
        display: flex;
        align-items: center;
        .refund-cirle {
          width: 24px;
          height: 20px;
          background-color: #325baf;
          margin-right: 8px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .refund-text {
          color: #325baf;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
    .group-currency {
      font-weight: 700;
      font-size: 14px;
      span {
        margin-right: 10px;
        &.plus {
          color: #01d167;
        }
        &.minus {
          color: #222222;
        }
      }
    }
  }
}
.view-all {
  color: #01d167;
  padding: 16px;
  background-color: #ddffec;
  cursor: pointer;
  text-align: center;
}
</style>
