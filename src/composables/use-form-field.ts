import { inject, provide, ref, type InjectionKey, type Ref } from "vue";

const useFormFieldContext = Symbol("useFormFieldContext") as InjectionKey<{
  hasError: Ref<boolean>;
}>;

export function useFormFieldProvider(hasError: Ref<boolean>) {
  provide(useFormFieldContext, { hasError });
}

export function useFormField() {
  const api = inject(useFormFieldContext, null);

  return { hasError: api?.hasError ?? ref(false) };
}
