<template>
  <tr v-if="product" class="products-table__row">
    <td class="products-table__cell align-center">
      <custom-checkbox class="products-table__checkbox" :name="product.name" :value="checked" @input="updateSelectedItems" />
    </td>
    <td class="products-table__cell">{{ product.name }}</td>
    <td class="products-table__cell">{{ product.price }}</td>
    <td class="products-table__cell">{{ product.quantity }}</td>
    <td class="products-table__cell">{{ product.price * product.quantity }}</td>
  </tr>
  <tr class="products-table__row products-table__row--empty" v-else>
    <td class="products-table__cell"></td>
    <td class="products-table__cell"></td>
    <td class="products-table__cell"></td>
    <td class="products-table__cell"></td>
    <td class="products-table__cell"></td>
  </tr>
</template>

<script>
import CustomCheckbox from './ui/CustomCheckbox.vue';
  export default {
  components: { CustomCheckbox },
    props: ['product'],
    methods: {
      updateSelectedItems(checked) {
        this.$store.dispatch('updateSelectedItems', {id: this.product.id, checked });
      }
    },
    computed: {
      checked() {
        return this.$store.getters.selectedItems.includes(this.product.id);
      }
    }
  };
</script>

<style scoped>
  .products-table__row--empty {
    height: 26px;
  }
  .products-table__cell {
    border-left: solid 3px #000000;
    border-right: solid 3px #000000;
    padding: 4px 0 4px 10px;
  }
  .products-table__cell:first-child {
    border-left: solid 3px #000000;
    border-right: solid 3px #000000;
    padding: 4px 0;
  }
  .products-table__checkbox {
    margin-left: 4px;
  }

  .align-center {
    text-align: center;
  }
</style>