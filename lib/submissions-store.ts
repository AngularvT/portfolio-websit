import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export type StoredSubmission = {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

const submissionsPath = path.join(process.cwd(), "data", "submissions.json");

export function readSubmissions(): StoredSubmission[] {
  if (!existsSync(submissionsPath)) {
    return [];
  }
  const parsed = JSON.parse(readFileSync(submissionsPath, "utf8"));
  if (!Array.isArray(parsed)) {
    throw new Error("Submissions file is malformed.");
  }
  return parsed;
}

export function saveSubmission(submission: StoredSubmission): StoredSubmission[] {
  const submissions = readSubmissions();
  submissions.push(submission);
  writeFileSync(
    submissionsPath,
    JSON.stringify(submissions, null, 2) + "\n",
    "utf8",
  );
  return submissions;
}
