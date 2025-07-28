<script setup>
import { reactive, ref } from "vue";
import { Icon } from "@iconify/vue";
import Input from "./components/form-controls/Input.vue";
import Select from "./components/form-controls/Select.vue";
import SForm from "./components/form-controls/SForm.vue";
import FormField from "./components/form-controls/FormField.vue";
import Autocomplete from "./components/form-controls/Autocomplete.vue";
import InputGroup from "./components/form-controls/InputGroup.vue";
import Badge from "./components/form-controls/Badge.vue";
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

    <Input v-model="model01" label="Base Input" autocomplete="off" />
    <Input label="Error state" :has-error="true" />
    <Input label="Disabled" disabled />
  </fieldset>

  <fieldset>
    <Input
      placeholder="Placeholder very very very very long text"
      icon="radix-icons:link-1"
      append-icon="radix-icons:discord-logo"
      hasError
    />
  </fieldset>

  <fieldset>
    <legend>Input group horizontal</legend>
    <InputGroup isHorizontal>
      <Input label="Input First" />
      <Input label="Input last" />
      <Autocomplete label="Autocomplete" />
      <Select
        label="Fruits"
        :options="options"
        :style="'width: 300px'"
      ></Select>
    </InputGroup>
  </fieldset>

  <fieldset>
    <legend>Input group</legend>
    <FormField hasError errorLabel="Error">
      <InputGroup>
        <Input label="Input 01" />
        <Input label="Input 02" hasError />
        <Input label="Input 03" />
      </InputGroup>
    </FormField>
  </fieldset>

  <fieldset>
    <legend>Input group with Badge</legend>
    <InputGroup isHorizontal>
      <Badge label="HUF" />
      <Input label="Input 02" />
      <Badge label="HUF">Slot</Badge>
    </InputGroup>
  </fieldset>

  <fieldset>
    <Input label="Append element" :type="showPassword ? 'text' : 'password'">
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
    </Input>
  </fieldset>

  <fieldset>
    <Select label="Fruits" :options="options" :style="'width: 300px'"></Select>
  </fieldset>

  <fieldset>
    <FormField help="Please add e-mail address" errorLabel="Email is invalid">
      <Input label="Label" />
    </FormField>
  </fieldset>

  <fieldset>
    <Autocomplete label="Label" />
  </fieldset>

  <fieldset>
    <FormField
      help="Please add e-mail address"
      hasError
      errorLabel="Email is invalid"
    >
      <Autocomplete label="Label" />
    </FormField>
  </fieldset>

  <fieldset>
    <legend>Compact with label</legend>

    <FormField
      label="Form Field label"
      help="Please add e-mail address"
      errorLabel="Email is invalid"
    >
      <Input placeholder="Placeholder" compact />
    </FormField>
  </fieldset>

  <fieldset>
    <legend>Forml</legend>

    <div style="margin: 0 auto; display: grid; max-width: 320px">
      <SForm
        style="display: grid; gap: 1rem"
        :validator="r$"
        @submit="submitForm"
      >
        <FormField name="email">
          <Input v-model="state.email" label="E-mail" />
        </FormField>
        <FormField name="password">
          <Input v-model="state.password" label="Password" type="password" />
        </FormField>

        <button type="submit" style="display: inline-flex">Submit form</button>
      </SForm>
    </div>
  </fieldset>
</template>
