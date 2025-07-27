import { inject, provide } from "vue";

const useFormFieldContext = Symbol("useFormFieldContext");

export function useFormFieldProvider(hasError) {
  provide(useFormFieldContext, { hasError });
}

export function useFormField() {
  const api = inject(useFormFieldContext, null);

  return { hasError: api?.hasError || false };
}
