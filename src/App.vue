<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import Input from "./components/form-controls/Input.vue";
import Select from "./components/form-controls/Select.vue";
import FormField from "./components/form-controls/FormField.vue";
import Autocomplete from "./components/form-controls/Autocomplete.vue";

const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];

const showPassword = ref(false);
</script>

<template>
  <fieldset>
    <legend>Base states</legend>

    <Input label="Base Input" />
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
      label="Compact with label"
      help="Please add e-mail address"
      errorLabel="Email is invalid"
    >
      <Input label="Label" compact />
    </FormField>
  </fieldset>
</template>
