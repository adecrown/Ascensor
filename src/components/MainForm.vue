<template>
  <form @submit.prevent="submitForm" autocomplete="off">
    <div class="form-row">
      <MainInput
        id="firstName"
        label="First Name"
        iconName="checkmark-circle-outline"
        :iconColor="handleIconColor(firstNameIsValid)"
        v-model="form.firstName"
      />
      <MainInput
        id="lastName"
        label="Last Name"
        iconName="checkmark-circle-outline"
        :iconColor="handleIconColor(lastNameIsValid)"
        v-model="form.lastName"
      />
    </div>
    <div class="form-row">
      <MainInput
        id="email"
        label="Email"
        iconName="checkmark-circle-outline"
        type="email"
        :iconColor="handleIconColor(emailIsValid)"
        v-model="form.email"
        :errorMessage="emailErrorMessage"
      />
    </div>
    <div style="padding: 5px">
      <MainInputFile id="picture" label="Photo" @change="handleFile" />
    </div>

    <ButtonMain
      :title="submitButtonText"
      iconName="person-outline"
      id="submitButton"
    />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
import MainInput from './MainInput.vue';
import MainInputFile from './MainInputFile.vue';
import ButtonMain from './ButtonMain.vue';

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  file: null,
});
const submitButtonText = computed(() => {
  const msg = 'Save your Profile';
  if (form.value.firstName) {
    return `Hey ${form.value.firstName}, ${msg}`;
  }
  return msg;
});

const firstNameIsValid = computed(() => !!form.value.firstName);
const lastNameIsValid = computed(() => !!form.value.lastName);
const emailIsValid = computed(
  () => !!form.value.email && validateEmail(form.value.email)
);

const emailErrorMessage = computed(() =>
  emailIsValid.value ? '' : 'Please enter a valid email'
);

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};
const handleFile = (file) => {
  form.value.file = file;
};
const handleIconColor = (valid) => {
  return valid ? 'green' : 'red';
};
const submitForm = () => {
  const formIsValid = firstNameIsValid.value && lastNameIsValid && emailIsValid;
  if (formIsValid) {
    console.log('We saved the form');
    return;
  }
  console.log('This is not a valid form');
};
</script>

<style scoped>
.form-row {
  display: flex;
  width: 100%;
}

.form-row div {
  padding: 5px;
  width: 50%;
}
@media only screen and (max-width: 850px) {
  .form-row {
    display: flex;
    flex-direction: column;
  }
  .form-row div {
    width: 100%;
  }
}
</style>
