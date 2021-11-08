<template>
  <div class="card-item-wrapper">
    <img class="image-aspire-white" src="../assets/svgs/AspireWhite.svg" />
    <div class="card-info">
      <div class="card-name">Mark Henry</div>
      <div class="card-number">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot spacing"></div>

        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot spacing"></div>

        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot spacing"></div>

        <div class="ditgit">2020</div>
      </div>
      <div class="card-date">
        <div class="expired">Thru: 12/20</div>
        <div>CVV: ***</div>
      </div>
    </div>
    <img class="image-aspire-white" src="../assets/svgs/Visa.svg" />
  </div>
</template>

<style lang="scss">
.card-item-wrapper {
  padding: 27px;
  background-color: #01d167;
  border-radius: 12px;
  .image-aspire-white {
    margin-left: auto;
    display: flex;
    margin-bottom: 27px;
  }
  .card-info {
    color: #fff;
    margin-bottom: 32px;
    .card-name {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 33px;
    }
    .card-number {
      display: flex;
      align-items: center;
      margin-bottom: 21px;
      .dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #fff;
        margin: 0 3px;
        &.spacing{
          margin-right:27px;
        }
        .ditgit{
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    .card-date{
      display: flex;
      font-size: 13px;
      font-weight: 600;
      .expired{
        margin-right: 36px;
      }
    }
  }
}
</style>
