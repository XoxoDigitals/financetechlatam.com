const encoder = new TextEncoder();

async function hmacHex(message: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function secret() {
  return process.env.DASHBOARD_PASSWORD || "";
}

export function dashboardPasswordConfigured() {
  return Boolean(secret());
}

export async function createSessionToken() {
  const s = secret();
  if (!s) throw new Error("DASHBOARD_PASSWORD is not set.");
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const payload = String(exp);
  const sig = await hmacHex(payload, s);
  return `${payload}.${sig}`;
}

export async function isValidSessionToken(token: string | undefined | null) {
  const s = secret();
  if (!s || !token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  if (Number(payload) < Date.now()) return false;
  const expected = await hmacHex(payload, s);
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  return diff === 0;
}

export async function passwordMatches(input: string) {
  const s = secret();
  if (!s) return false;
  return input === s;
}
