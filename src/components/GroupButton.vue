<template>
  <div class="group-base">
    <div class="group-button">
      <img src="../assets/svgs/Freeze.svg" alt="image" />
      <div>Freeze card</div>
    </div>
    <div class="group-button">
      <img src="../assets/svgs/SetSpendLimit.svg" alt="image" />
      <div>Set spend limit</div>
    </div>
    <div class="group-button">
      <img src="../assets/svgs/GPay.svg" alt="image" />
      <div>Add to GPay</div>
    </div>
    <div class="group-button">
      <img src="../assets/svgs/Replace.svg" alt="image" />
      <div>Replace card</div>
    </div>
    <div class="group-button">
      <img src="../assets/svgs/Deactivate.svg" alt="image" />
      <div>Cancel card</div>
    </div>
  </div>
</template>

<style lang="scss">
.group-base {
  display: flex;
  padding: 20px 31px;
  background-color: #edf3ff;
  border-radius: 16px;
  margin-top: 32px;
  .group-button {
    padding: 0 24px;
    text-align: center;
    &:first-child{
      padding-left: 0;
    }
    &:last-child{
      padding-right: 0;
    }
    img {
      width: 32px;
      height: 32px;
    }
    div {
      font-size: 13px;
      color: #0c365a;
    }
  }
}
</style>
