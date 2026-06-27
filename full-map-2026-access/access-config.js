/* ============================================================================
   Full Japan Fashion Map - 2026 Edition  ·  buyer access gate config
   ----------------------------------------------------------------------------
   Soft password gate (MVP) — stops casual URL sharing, NOT true authentication.
   Contains NO shop data. Only the access version + a hashed password check.

   The plain password is NOT stored here. We store sha256(salt + password).
   The plain password lives only in the Payhip delivery PDF (and your private notes).
   Never write the plain password into this file, the HTML, or any published file.

   HOW TO CHANGE THE PASSWORD (and invalidate all previous unlocks):
     1. Pick a new password (10+ chars, not a dictionary word).
     2. Compute the hash, e.g. in a terminal (replace NEW_PASSWORD only at runtime,
        do not commit the plain value):
          python3 -c "import hashlib;print(hashlib.sha256(('tcn-fjfm-2026'+'NEW_PASSWORD').encode()).hexdigest())"
        (use the SAME salt below, or change the salt too).
     3. Paste the new value into `hash` and bump `version` by 1.
     4. Bumping `version` forces every device to re-enter the password.
     5. Update the password line in the delivery PDF.
   ============================================================================ */
window.TCN_ACCESS = {
  version: 2,                 // bump to invalidate all saved unlocks
  salt: "tcn-fjfm-2026",      // combined as sha256(salt + password)
  hash: "affda208b6f0573958dc7d2b4c5e6bdd87deda92d0208f3f9ca805fa052865ba"
};
