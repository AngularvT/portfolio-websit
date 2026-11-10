import type { ContactFieldErrors } from "@/lib/contact-validation";

export type ContactFormStatus =
  | "idle"
  | "success"
  | "validation-error"
  | "save-error";

export type ContactFormState = {
  status: ContactFormStatus;
  message: string;
  fieldErrors: ContactFieldErrors;
  values: { name: string; email: string; message: string };
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: { name: "", email: "", message: "" },
};
