"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";
import { initialContactFormState } from "./contact-form-state";
import styles from "./contact-me.module.css";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );

  return (
    <form action={formAction} className={styles.form}>
      {state.status === "success" && (
        <p role="status" className={styles.success}>
          {state.message}
        </p>
      )}
      {state.status === "save-error" && (
        <p role="alert" className={styles.saveError}>
          {state.message}
        </p>
      )}
      {state.status === "validation-error" && (
        <p role="alert" className={styles.formError}>
          {state.message}
        </p>
      )}

      <div className={styles.field}>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          defaultValue={state.values.name}
          aria-invalid={state.fieldErrors.name ? true : undefined}
          aria-describedby={
            state.fieldErrors.name ? "contact-name-error" : undefined
          }
        />
        {state.fieldErrors.name && (
          <p id="contact-name-error" className={styles.fieldError}>
            {state.fieldErrors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          defaultValue={state.values.email}
          aria-invalid={state.fieldErrors.email ? true : undefined}
          aria-describedby={
            state.fieldErrors.email ? "contact-email-error" : undefined
          }
        />
        {state.fieldErrors.email && (
          <p id="contact-email-error" className={styles.fieldError}>
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          defaultValue={state.values.message}
          aria-invalid={state.fieldErrors.message ? true : undefined}
          aria-describedby={
            state.fieldErrors.message ? "contact-message-error" : undefined
          }
        />
        {state.fieldErrors.message && (
          <p id="contact-message-error" className={styles.fieldError}>
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
