import crypto from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "..", "data");
const usersFile = path.join(dataDir, "users.json");

export async function ensureUserStore() {
  await mkdir(dataDir, { recursive: true });

  try {
    await readFile(usersFile, "utf-8");
  } catch {
    await writeFile(usersFile, "[]", "utf-8");
  }
}

async function readUsers() {
  await ensureUserStore();
  const content = await readFile(usersFile, "utf-8");
  return JSON.parse(content);
}

async function writeUsers(users) {
  await writeFile(usersFile, JSON.stringify(users, null, 2), "utf-8");
}

export async function findUserByEmail(email) {
  const users = await readUsers();
  return users.find((user) => user.email === email) || null;
}

export async function createUser({ name, email, passwordHash }) {
  const users = await readUsers();
  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    passwordHash,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  await writeUsers(users);
  return user;
}
