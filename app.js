export function norm(s) {
  return (s || "")
    .toLowerCase()
    .trim()
    .replaceAll("ё", "е")
    .replace(/\s+/g, " ");
}

// SHA-256 -> hex
export async function sha256Hex(str) {
  const data = new TextEncoder().encode(str);
  const hashBuf = await crypto.subtle.digest("SHA-256", data);
  const hashArr = Array.from(new Uint8Array(hashBuf));
  return hashArr.map(b => b.toString(16).padStart(2, "0")).join("");
}