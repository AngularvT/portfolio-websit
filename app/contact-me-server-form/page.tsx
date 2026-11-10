import type { Metadata } from "next";
import ContactForm from "./contact-form";
import styles from "./contact-me.module.css";

export const metadata: Metadata = {
  title: "Contact — Lanboer Zhao",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <h1>Contact me</h1>
      <p>
        Send me a message using the form below. Your submission goes to a
        server action, is validated on the server, and is stored in a JSON
        file before you see the confirmation.
      </p>
      <ContactForm />
    </div>
  );
}
