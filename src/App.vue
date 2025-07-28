<script setup>
import { reactive, ref } from "vue";
import { Icon } from "@iconify/vue";
import SInput from "./components/form-controls/SInput.vue";
import SSelect from "./components/form-controls/SSelect.vue";
import SForm from "./components/form-controls/SForm.vue";
import SFormField from "./components/form-controls/SFormField.vue";
import SAutocomplete from "./components/form-controls/SAutocomplete.vue";
import SInputGroup from "./components/form-controls/SInputGroup.vue";
import SBadge from "./components/form-controls/SBadge.vue";
import { useRegle } from "@regle/core";
import {
  required,
  minLength,
  maxLength,
  email,
  withMessage,
} from "@regle/rules";

const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];

const model01 = ref("");
const showPassword = ref(false);

const state = reactive({
  email: "",
  password: "",
});

const { r$ } = useRegle(
  state,
  {
    email: {
      required: withMessage(required, "E-mail is required"),
      email,
      minLength: minLength(4),
    },
    password: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(12),
    },
  },
  { lazy: true }
);

async function submitForm() {
  const { valid } = await r$.$validate();
  console.log("SUBMIT", valid);
}
</script>

<template>
  <fieldset>
    <legend>Base states</legend>
    <div>Model value: {{ model01 }}</div>

    <SInput v-model="model01" label="Base Input" autocomplete="off" />
    <SInput label="Error state" :has-error="true" />
    <SInput label="Disabled" disabled />
  </fieldset>

  <fieldset>
    <SInput
      placeholder="Placeholder very very very very long text"
      icon="radix-icons:link-1"
      append-icon="radix-icons:discord-logo"
      hasError
    />
  </fieldset>

  <fieldset>
    <legend>Input group horizontal</legend>
    <SInputGroup isHorizontal>
      <SInput label="Input First" />
      <SInput label="Input last" />
      <SAutocomplete label="Autocomplete" />
      <SSelect
        label="Fruits"
        :options="options"
        :style="'width: 300px'"
      ></SSelect>
    </SInputGroup>
  </fieldset>

  <fieldset>
    <legend>Input group</legend>
    <SFormField hasError errorLabel="Error">
      <SInputGroup>
        <SInput label="Input 01" />
        <SInput label="Input 02" hasError />
        <SInput label="Input 03" />
      </SInputGroup>
    </SFormField>
  </fieldset>

  <fieldset>
    <legend>Input group with Badge</legend>
    <SInputGroup isHorizontal>
      <SBadge label="HUF" />
      <SInput label="Input 02" />
      <SBadge label="HUF">Slot</SBadge>
    </SInputGroup>
  </fieldset>

  <fieldset>
    <SInput label="Append element" :type="showPassword ? 'text' : 'password'">
      <template #append>
        <span tabindex="0">
          <Icon
            :icon="showPassword ? 'lucide:eye-off' : 'lucide:eye'"
            width="20"
            height="20"
            @click="showPassword = !showPassword"
          />
        </span>
      </template>
    </SInput>
  </fieldset>

  <fieldset>
    <SSelect
      label="Fruits"
      :options="options"
      :style="'width: 300px'"
    ></SSelect>
  </fieldset>

  <fieldset>
    <SFormField help="Please add e-mail address" errorLabel="Email is invalid">
      <SInput label="Label" />
    </SFormField>
  </fieldset>

  <fieldset>
    <SAutocomplete label="Label" />
  </fieldset>

  <fieldset>
    <SFormField
      help="Please add e-mail address"
      hasError
      errorLabel="Email is invalid"
    >
      <SAutocomplete label="Label" />
    </SFormField>
  </fieldset>

  <fieldset>
    <legend>Compact with label</legend>

    <SFormField
      label="Form Field label"
      help="Please add e-mail address"
      errorLabel="Email is invalid"
    >
      <SInput placeholder="Placeholder" compact />
    </SFormField>
  </fieldset>

  <fieldset>
    <legend>Form</legend>

    <div style="margin: 0 auto; display: grid; max-width: 320px">
      <SForm
        style="display: grid; gap: 1rem"
        :validator="r$"
        @submit="submitForm"
      >
        <SFormField name="email">
          <SInput v-model="state.email" label="E-mail" class="w-full" />
        </SFormField>
        <SFormField name="password">
          <SInput
            v-model="state.password"
            label="Password"
            type="password"
            class="w-full"
          />
        </SFormField>

        <button type="submit" style="display: inline-flex">Submit form</button>
      </SForm>
    </div>
  </fieldset>
</template>

<style>
.w-full {
  width: 100%;
}
</style>
