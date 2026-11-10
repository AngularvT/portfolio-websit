export type ContactInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactFieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export type ContactValidationResult =
  | { ok: true; name: string; email: string; message: string }
  | { ok: false; errors: ContactFieldErrors };

export function isValidEmail(email: string): boolean {
  if (/\s/.test(email)) {
    return false;
  }
  const parts = email.split("@");
  if (parts.length !== 2) {
    return false;
  }
  const [local, domain] = parts;
  if (local.length === 0) {
    return false;
  }
  if (!domain.includes(".")) {
    return false;
  }
  return domain.split(".").every((label) => label.length > 0);
}

export function validateContactInput(
  input: ContactInput,
): ContactValidationResult {
  const errors: ContactFieldErrors = {};

  const name = input.name.trim();
  if (name.length === 0) {
    errors.name = "Name is required.";
  }

  const email = input.email;
  if (!isValidEmail(email)) {
    errors.email = "Enter a valid email address, e.g. you@example.com.";
  }

  const message = input.message.trim();
  if (message.length === 0) {
    errors.message = "Message is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return { ok: true, name, email, message };
}
