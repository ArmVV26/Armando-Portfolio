<template>
  <section
    id="contact"
    data-aos="fade-up"
    class="mx-auto mt-60 max-w-screen-xl px-2 sm:px-6 xl:px-0"
  >
    <!-- Title and Subtitle -->
    <h1 class="font-raleway text-principal text-center text-2xl font-bold sm:text-4xl">
      {{ $t("contact.title") }}
    </h1>
    <h2 class="font-raleway text-decoration text-md mb-6 text-center font-bold sm:text-lg">
      {{ $t("contact.subtitle") }}
    </h2>

    <!-- Form -->
    <form class="mx-auto mt-10 flex max-w-2xl flex-col gap-8" @submit.prevent="submitForm">
      <!-- Input Name -->
      <div class="relative">
        <input
          type="text"
          v-model="name"
          :placeholder="$t('contact.name')"
          class="border-decoration bg-base text-principal focus:ring-decoration w-full rounded-xl border p-3 outline-none focus:ring-2"
          :class="nameError ? 'border-red-500 focus:ring-red-300' : ''"
        />

        <!-- Error Icon -->
        <p v-if="nameError" class="absolute top-1/2 right-3 -translate-y-1/2 text-red-500">
          <i class="fas fa-exclamation-circle"></i>
        </p>

        <!-- Error Message -->
        <p
          v-if="nameError"
          class="absolute -top-7 left-0 z-10 rounded-xl bg-red-500 px-2 py-1 text-xs text-white shadow-xl"
        >
          {{ nameError }}
        </p>
      </div>

      <!-- Input Email -->
      <div class="relative">
        <input
          type="email"
          v-model="email"
          :placeholder="$t('contact.mail')"
          class="border-decoration bg-base text-principal focus:ring-decoration w-full rounded-xl border p-3 outline-none focus:ring-2"
          :class="emailError ? 'border-red-500 focus:ring-red-300' : ''"
        />

        <!-- Error Icon -->
        <p v-if="emailError" class="absolute top-1/2 right-3 -translate-y-1/2 text-red-500">
          <i class="fas fa-exclamation-circle"></i>
        </p>

        <!-- Error Message -->
        <p
          v-if="emailError"
          class="absolute -top-7 left-0 z-10 rounded-xl bg-red-500 px-2 py-1 text-xs text-white shadow-xl"
        >
          {{ emailError }}
        </p>
      </div>

      <!-- Input Subject -->
      <div class="relative">
        <input
          type="text"
          v-model="subject"
          :placeholder="$t('contact.subject')"
          class="border-decoration bg-base text-principal focus:ring-decoration w-full rounded-xl border p-3 outline-none focus:ring-2"
          :class="subjectError ? 'border-red-500 focus:ring-red-300' : ''"
        />

        <!-- Error Icon -->
        <p v-if="subjectError" class="absolute top-1/2 right-3 -translate-y-1/2 text-red-500">
          <i class="fas fa-exclamation-circle"></i>
        </p>

        <!-- Error Message -->
        <p
          v-if="subjectError"
          class="absolute -top-7 left-0 z-10 rounded-xl bg-red-500 px-2 py-1 text-xs text-white shadow-xl"
        >
          {{ subjectError }}
        </p>
      </div>

      <!-- Input Message -->
      <div class="relative">
        <textarea
          v-model="message"
          :placeholder="$t('contact.message')"
          rows="5"
          class="border-decoration bg-base text-principal focus:ring-decoration w-full resize-none rounded-xl border p-3 outline-none focus:ring-2"
          :class="messageError ? 'border-red-500 focus:ring-red-300' : ''"
        ></textarea>

        <!-- Error Icon -->
        <p v-if="messageError" class="absolute top-1/2 right-3 -translate-y-1/2 text-red-500">
          <i class="fas fa-exclamation-circle"></i>
        </p>

        <!-- Error Message -->
        <p
          v-if="messageError"
          class="absolute -top-7 left-0 z-10 rounded-xl bg-red-500 px-2 py-1 text-xs text-white shadow-xl"
        >
          {{ messageError }}
        </p>
      </div>

      <!-- Send Button -->
      <button
        type="submit"
        class="bg-decoration mx-auto mt-2 mb-6 cursor-pointer rounded-xl px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
      >
        {{ $t("contact.submit") }}
      </button>
    </form>

    <p v-if="successMessage" class="mt-4 text-center text-green-500">
      {{ $t("contact.success") }}
    </p>

    <p v-if="errorMessage" class="mt-4 text-center text-red-500">
      {{ successMessage }}
    </p>

    <!-- Other Way to contact me -->
    <p class="text-secondary mt-10 text-center">
      {{ $t("contact.other") }}
      <a
        href="mailto:avaquerovargas.01@gmail.com"
        class="text-decoration underline transition hover:opacity-70"
      >
        avaquerovargas.01@gmail.com
      </a>
    </p>
  </section>
</template>

<script setup>
// IMPORTS
import { ref } from "vue";
import { useForm, useField } from "vee-validate";
import { useI18n } from "vue-i18n";
import * as yup from "yup";
import emailjs from "emailjs-com";

// VARIABLES
const { t } = useI18n();

const scheme = yup.object({
  name: yup.string().required(t("contact.errorName")),
  email: yup.string().email(t("contact.errorEmailFormat")).required(t("contact.errorEmail")),
  subject: yup.string().required(t("contact.errorSubject")),
  message: yup.string().min(10, t("contact.errorMessageShort")).required(t("contact.errorMessage")),
});

const { handleSubmit, resetForm } = useForm({ validationSchema: scheme });

const { value: name, errorMessage: nameError } = useField("name");
const { value: email, errorMessage: emailError } = useField("email");
const { value: subject, errorMessage: subjectError } = useField("subject");
const { value: message, errorMessage: messageError } = useField("message");

const successMessage = ref(false);
const errorMessage = ref(false);

// METODOS
// Funcion que se encarga de mandar el correo de contacto
const submitForm = handleSubmit(async (values) => {
  successMessage.value = false;
  errorMessage.value = false;

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      values,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
    successMessage.value = true;
    resetForm();
  } catch (err) {
    errorMessage.value = true;
  }
});
</script>

<style scoped>
textarea::-webkit-scrollbar {
  width: 8px;
}
textarea::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 4px;
}
textarea::-webkit-scrollbar-track {
  background: transparent;
}
</style>
