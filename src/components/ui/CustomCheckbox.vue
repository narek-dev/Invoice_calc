<template>
  <label class="checkbox">
    <div class="checkbox__box">
      <img v-if="value" class="checkbox__check" src="/assets/img/svg/check.svg" width="15" height="15"/>
    </div>
    <input type="checkbox" class="checkbox__input" @change="onChange">
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onChange({target: {checked}}) {
      this.$emit('input', checked);
      this.$emit('change', checked);
    }
  }
}
</script>

<style scoped>
  /* .checkbox {

  } */
  .checkbox__input  {
    display: none;
  }
  .checkbox__box {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    border: 1px solid #000;
    position: relative;
  }
  .checkbox__check {
    position: absolute;
    left: 2px;
    top: -2px;
  }

</style>