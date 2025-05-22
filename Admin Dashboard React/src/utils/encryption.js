export async function encrypt(plainText, password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plainText);
  const key = await window.crypto.subtle.digest("SHA-256", encoder.encode(password));

  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    key,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  );

  const encrypted = await window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    cryptoKey,
    data
  );

  const ivBase64 = btoa(String.fromCharCode(...iv));
  const encryptedBase64 = btoa(String.fromCharCode(...new Uint8Array(encrypted)));

  return `${ivBase64}.${encryptedBase64}`;
}
