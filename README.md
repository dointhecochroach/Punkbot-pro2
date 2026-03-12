
# PunkBot PRO

Mobile AI Trading Terminal (Cyberpunk Theme)

Features scaffolded:
- Claude AI trading assistant module
- Liquidity sweep detector
- Signal generator with confidence scoring
- Cornix webhook export
- Pine Script strategy generator
- Trading chart placeholder
- Neon cyberpunk theme

How to build APK from phone:

1. Upload this project to GitHub or Replit
2. Open in Expo environment
3. Install Expo CLI in cloud shell
4. Run:

   npm install
   npx expo prebuild
   npx expo build:android

or with EAS:

   npm install -g eas-cli
   eas build -p android

Then download the APK.

Main folders:

/app            -> UI screens
/components     -> terminal widgets
/core           -> trading logic
/ai             -> Claude integration
/automation     -> Cornix signals
/strategy       -> Pine generator
