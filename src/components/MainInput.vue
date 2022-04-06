<template>
  <div class="main-input-container">
    <label :for="id"
      >{{ label }}
      <span
        >* <span v-if="errorMessage">{{ errorMessage }}</span></span
      ></label
    >
    <div class="main-input-container__icon">
      <input :value="modelValue" @change="onChange" :id="id" :type="type" />
      <span>
        <ion-icon
          :name="iconName"
          class="icon"
          :style="{ color: iconColor }"
        ></ion-icon>
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  iconName: {
    type: String,
    required: true,
  },
  errorMessage: String,
  iconColor: String,
  modelValue: String,
  type: String,
});
const emit = defineEmits(['update:modelValue']);
const onChange = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
.main-input-container__icon {
  display: flex;
  background-color: white;
  padding-block: 2px;
  padding-left: 1px;
  align-items: center;
}

.main-input-container__icon span {
  margin-inline: 5px;
}
.main-input-container label {
  font-weight: bold;
  color: white;
  display: flex;
  flex-direction: row;
}
.main-input-container label span {
  margin-left: 2px;
  color: red;
}
</style>
