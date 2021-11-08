<template>
  <div class="card-wrapper">
    <div class="logo-mobile">
      <img src="../assets/svgs/ColorLogo.svg" alt="image" />
    </div>
    <div class="top-header">Available balance</div>
    <div class="sub-header">
      <div class="side-left">
        <div class="type-currency">S$</div>
        <div class="type-money">3,000</div>
      </div>
      <button class="btn-primary">
        <img src="../assets/svgs/CirclePlus.svg" alt="circle-plus" />
        <span>New card</span>
      </button>
      <a class="btn-primary-mobile">
        <img src="../assets/svgs/Box.svg" alt="circle-plus" />
        <span>New card</span>
      </a>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="My debit cards" name="debit">
        <div class="show-btn mobile">
          <img src="../assets/svgs/Eye.svg" />
          <span>Show card number</span>
        </div>
        <el-carousel
          indicator-position="outside"
          arrow="never"
          height="280"
          class="carousel-mobile"
        >
          <el-carousel-item v-for="item in 3" :key="item">
            <Card></Card>
          </el-carousel-item>
        </el-carousel>
        <tab-wrapper>
          <div class="show-btn">
            <img src="../assets/svgs/Eye.svg" />
            <span>Show card number</span>
          </div>
          <div class="content-debit">
            <div class="left">
              <el-carousel
                indicator-position="outside"
                arrow="never"
                height="280"
              >
                <el-carousel-item v-for="item in 3" :key="item">
                  <Card></Card>
                </el-carousel-item>
              </el-carousel>
              <GroupButton></GroupButton>
            </div>
            <div class="right">
              <Collapse></Collapse>
            </div>
          </div>
        </tab-wrapper>
      </el-tab-pane>
      <el-tab-pane label="All company cards" name="company"
        >All company cards</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import TabWrapper from "../components/TabWrapper.vue";
import Card from "../components/Card.vue";
import GroupButton from "../components/GroupButton.vue";
import Collapse from "../components/Collapse.vue";

export default defineComponent({
  components: {
    TabWrapper,
    Card,
    GroupButton,
    Collapse,
  },
  setup() {
    const activeName = ref("debit");
    return { activeName };
  },
});
</script>

<style lang="scss">
.card-wrapper {
  margin-top: 60px;
  width: 100%;
  padding: 0 60px;
  .top-header {
    font-size: 14px;
    color: #000;
    margin-bottom: 16px;
  }
  .sub-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .btn-primary-mobile {
      display: none;
    }
    .side-left {
      display: flex;
      align-items: center;
      .type-currency {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 24px;
        background: #01d167;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 600;
        color: #fff;
      }
      .type-money {
        color: #000;
        font-size: 26px;
        font-weight: 600;
        margin-left: 12px;
      }
    }
  }
  .carousel-mobile {
    display: none;
  }
  .logo-mobile {
    display: none;
  }
}

.show-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 12px;
  &.mobile {
    display: none;
  }
  span {
    font-size: 12px;
    color: #01d167;
    margin-left: 6px;
    font-weight: 600;
  }
}

.content-debit {
  display: flex;
  .left {
    width: 50%;
    padding-right: 23px;
  }
  .right {
    width: 50%;
    padding-left: 23px;
  }
}

.btn-primary {
  display: flex;
  align-items: center;
  background: #325baf;
  padding: 9px 12px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  span {
    margin-left: 8px;
  }
}

.el-tabs__nav-wrap::after {
  width: 0;
}

.el-tabs__item,
.el-tabs__item:hover {
  color: rgba(#222222, 0.3);
  font-size: 14px;
}

.el-tabs__item.is-active {
  color: #222222;
  font-weight: 600;
}

.el-tabs__active-bar {
  background-color: #23cefd;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__indicators--outside button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.el-carousel__indicator.is-active button {
  background-color: #01d167;
  width: 16px;
  border-radius: 8px;
}

.el-carousel--horizontal {
  overflow-y: hidden;
  border-radius: 12px;
}

.el-carousel__item {
  border-radius: 12px;
}

.el-tabs__content {
  filter: drop-shadow(0 2px 12px #00000014);
  border-radius: 8px;
}

@media screen and (max-width: 414px) {
  .card-wrapper {
    margin-top: 0;
    padding: 0;
    padding-top: 31px;
    background: #0c365a;
    .top-header,
    .sub-header,
    .el-tabs__header {
      padding: 0 24px;
      color: #fff;
    }
    .sub-header {
      .side-left {
        .type-money {
          color: #fff;
        }
      }
      .btn-primary {
        display: none;
      }
      .btn-primary-mobile {
        display: flex;
        align-items: center;
        color: #23cefd;
        font-size: 13px;
        font-weight: 700;
        span {
          margin-left: 6px;
        }
      }
    }
    .logo-mobile {
      display: block;
      text-align: right;
      padding: 0 24px;
    }
  }
  .el-tabs__item,
  .el-tabs__item:hover {
    color: rgba(#ffffff, 0.5);
    font-size: 13px;
  }

  .el-tabs__item.is-active {
    color: #fff;
    font-weight: 600;
  }

  .el-tabs__active-bar {
    background-color: #23cefd;
  }

  .el-tabs__content {
    border-radius: inherit;
    filter: inherit;
    position: relative;
    padding-top: 40px;
  }

  .tab-wrapper {
    padding: 0;
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    .content-debit {
      display: block;
      padding-bottom: 40px;
      .left {
        width: 100%;
        padding-right: 23px;
        .group-base {
          margin-top: 0;
          .group-button {
            padding: 0 15px;
            &:first-child {
              padding-left: 0;
            }
            &:last-child {
              padding-right: 0;
            }
          }
        }
      }
      .right {
        width: 100%;
        padding-left: 0;
        max-width: 90%;
        margin: 24px auto;
      }
    }
    .el-carousel--horizontal,
    .show-btn {
      display: none;
    }
  }
  .show-btn {
    &.mobile {
      display: flex;
      max-width: 151px;
      padding: 5px 10px 30px 10px;
      background: #fff;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      margin-left: auto;
      margin-right: 24px;
      text-align: right;
      margin-bottom: 0;
      margin-top: 24px;
      position: absolute;
      top: -10px;
      right: 0;
    }
  }
  .carousel-mobile {
    display: block !important;
    margin: 0 24px;
  }
}
</style>
