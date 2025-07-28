import {
  computed,
  inject,
  provide,
  type InjectionKey,
  type MaybeRef,
  type Ref,
} from "vue";

const useFormContext = Symbol("useFormContext") as InjectionKey<{
  validator: unknown;
}>;

export function useFormProvider(validator: unknown) {
  provide(useFormContext, { validator });
}

export function useForm(name: MaybeRef<string> = ""): {
  hasError: Ref<boolean>;
  errorMessage: Ref<string>;
} {
  // const hasError = ref(false);

  const api = inject(useFormContext, null);
  console.log(api);

  const hasError = computed(
    () => api?.validator.value?.[name].$invalid ?? false
  );

  const errorMessage = computed(
    () => api?.validator.value.$errors[name][0] ?? ""
  );

  return { hasError, errorMessage };
}
