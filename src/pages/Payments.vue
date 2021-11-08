<template>
  <div class="payment-wrapper">
    <button class="btn-add" @click="addDialogVisible = true">Add a loan</button>
    <el-table :data="paymentList" style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="amount" label="Amount" />
      <el-table-column prop="terms" label="Terms">
        <template #default="scope">
          {{ scope.row.loanTerm + " " + scope.row.typeTerms }}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status">
        <template #default="scope">
          <el-tag
            :type="scope.row.status === 'Unpaid' ? 'danger' : 'success'"
            disable-transitions
            >{{ scope.row.status }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="Action" width="120">
        <template #default="scope">
          <el-button type="text" size="small" @click="openModalPay(scope.row)"
            >Repay</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- Add Loan -->
  <el-dialog v-model="addDialogVisible" title="Add" width="30%">
    <div class="form-group">
      <div class="label">Amount</div>
      <input type="number" class="field" v-model="amount" autocomplete="off" />
      <div class="error-message" v-if="errors.amount">
        {{ errors.amount }}
      </div>
    </div>
    <div class="form-group">
      <div class="label">Loan term</div>
      <input type="number" class="field" v-model="term" autocomplete="off" />
      <div class="error-message" v-if="errors.term">
        {{ errors.term }}
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleAdd">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- Add Loan -->

  <!-- Add Pay -->
  <el-dialog v-model="payDialogVisible" title="Add" width="30%">
    <div class="form-group">
      <div class="label">Amount</div>
      <input type="number" class="field" v-model="amount" autocomplete="off" />
      <div class="error-message" v-if="errors.amount">
        {{ errors.amount }}
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="payDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handlePay">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- Add Pay -->
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import useFormValidation from "../composables/validators";

export default defineComponent({
  setup() {
    const store = useStore();
    const { validateAmountField, validateTermField, errors } =
      useFormValidation();
    const paymentList = ref([]);
    const addDialogVisible = ref(false);
    const payDialogVisible = ref(false);
    const amount = ref("");
    const term = ref("");
    const id = ref(null);

    onMounted(async () => {
      await store.dispatch("paymentStore/getListPayment");
      paymentList.value = store.state.paymentStore.payments;
    });

    const handleAdd = async () => {
      validateAmountField("amount", amount.value);
      validateTermField("term", term.value);
      if (!errors.amount && !errors.term) {
        const data = {
          amount: amount.value,
          loanTerm: term.value,
          typeTerms: "Monthly",
          status: "Unpaid",
        };
        try {
          await store.dispatch("paymentStore/createLoan", data);
          await store.dispatch("paymentStore/getListPayment");
          paymentList.value = store.state.paymentStore.payments;
          addDialogVisible.value = false;
          errors.amount = "";
          errors.term = "";
          amount.value = "";
          term.value = "";
        } catch (err) {
          console.log(err);
        }
      } else {
        return false;
      }
    };

    const openModalPay = async (row) => {
      id.value = row.id;
      const res = await store.dispatch("paymentStore/getListPaymentById", id.value);
      console.log(res)
      term.value = res.loanTerm;
      payDialogVisible.value = true;
    };

    const handlePay = async () => {
      validateAmountField("amount", amount.value);
      if (!errors.name && !errors.amount && !errors.term) {
        const data = {
          id: id.value,
          amount: amount.value,
          loanTerm: term.value,
          typeTerms: "Monthly",
          status: "Repaid",
        };
        try {
          await store.dispatch("paymentStore/payLoan", data);
          await store.dispatch("paymentStore/getListPayment");
          paymentList.value = store.state.paymentStore.payments;
          payDialogVisible.value = false;
          errors.amount = "";
          amount.value = "";
        } catch (err) {
          console.log(err);
        }
      } else {
        return false;
      }
    };

    return {
      paymentList,
      addDialogVisible,
      errors,
      amount,
      term,
      handleAdd,
      openModalPay,
      payDialogVisible,
      handlePay,
    };
  },
});
</script>

<style lang="scss">
.payment-wrapper {
  margin-top: 60px;
  width: 100%;
  padding: 0 60px;
  .el-table {
    filter: drop-shadow(0 2px 12px #00000014);
    margin-top: 60px;
  }
}

.form-group {
  margin-bottom: 15px;
  .label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
  }
  .field {
    display: block;
    width: 90%;
    height: 30px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    -webkit-transition: border-color ease-in-out 0.15s,
      box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    -webkit-transition: border-color ease-in-out 0.15s,
      -webkit-box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s,
      -webkit-box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
      -webkit-box-shadow ease-in-out 0.15s;
  }
}

.btn-add {
  background: #325baf;
  padding: 9px 12px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 12px;
}
</style>
