<template>
  <div class="main-input-file-container">
    <label class="main-input-file-container__label"
      >{{ label }} <span>*</span></label
    >
    <label :for="id">
      <div
        class="main-input-file-drag-area"
        @drop="drop"
        @dragover="dragover"
        @dragleave="dragleave"
      >
        <h2>Drop file here to upload</h2>
        <input
          :value="modelValue"
          ref="file"
          @change="onChange"
          :id="id"
          type="file"
          style="display: none"
          :accept="acceptedFormat"
        />
      </div>
    </label>
    <p>Note: Image formats only: {{ acceptedFormat }}</p>
    <img :src="image" v-if="image" class="main-input-file-preview" />
  </div>
</template>

<script setup>
import { ref, watchEffect, computed } from 'vue';
const file = ref(null);
const data = ref(null);
const image = ref(null);
const formats = ['.jpg', '.gif', '.tif', '.png'];

const acceptedFormat = computed(() => formats.join(','));
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: String,
});
const emit = defineEmits(['change']);

watchEffect(() => {
  if (data.value) {
    emit('change', data.value);
    previewImage();
  }
});

const onChange = () => {
  data.value = file.value.files[0];
};
const drop = (event) => {
  event.preventDefault();
  event.currentTarget.classList.remove('main-input-file-drag-area__over');

  const newFile = event.dataTransfer.files[0];
  const fileType = newFile.name.split('.').pop();
  if (fileType && formats.includes(`.${fileType}`)) {
    file.value.files = event.dataTransfer.files;
    onChange();
  }
};
const previewImage = () => {
  image.value = URL.createObjectURL(data.value);
};

const dragover = (event) => {
  event.preventDefault();
  event.currentTarget.classList.add('main-input-file-drag-area__over');
};

const dragleave = (event) => {
  event.preventDefault();
  event.currentTarget.classList.remove('main-input-file-drag-area__over');
};
</script>

<style scoped>
.main-input-file-container__label {
  display: flex;
  flex-direction: row;
  color: white;
  font-weight: bold;
}
.main-input-file-container__label span {
  color: red;
  margin-left: 2px;
}
.main-input-file-container__icon {
  display: flex;
  background-color: white;
  padding-block: 2px;
  padding-left: 1px;
  align-items: center;
}

.main-input-file-preview {
  width: 100px;
}
.main-input-file-container__icon span {
  margin-inline: 5px;
}

.main-input-file-container p {
  font-size: 12px;
  color: white;
  margin-block: 5px;
}
.main-input-file-drag-area {
  padding: 5px;
  background-color: white;
  height: 80px;
  border-radius: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.main-input-file-drag-area__over {
  background-color: grey;
}

.main-input-file-drag-area h2 {
  font-size: 15px;
  font-weight: 500;
  color: rgb(167, 167, 167);
}
</style>
