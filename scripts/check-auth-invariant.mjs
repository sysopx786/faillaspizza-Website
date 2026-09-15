/** Auth is off for this marketing site. Stub keeps browser-smoke importable. */

export function buildAuthEnabled() {
  return false;
}

export async function probeDevAuthEnabled(_url) {
  return false;
}

export function compareAuthInvariant({ devAuthEnabled, buildAuthEnabled }) {
  return { ok: true, devAuthEnabled, buildAuthEnabled };
}

export function authInvariantWarnings(_comparison) {
  return [];
}
