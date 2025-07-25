# 🎉 Nightlife App

Mobile app for exploring nightclubs, booking events, viewing offers, and more.

## 📱 Features
- **Home**: Browse all clubs with offers and info
- **Events**: View all club events with filters
- **Offers**: Club promotions and deals
- **Map**: Interactive club locations
- **Profile**: User profile + chat with other users
- **Booking**: Reserve entry and services
- **DJ Tips**: Tip DJs and request songs

## 🛠️ Tech Stack
- **Frontend**: Flutter (iOS + Android)
- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL
- **Auth**: Firebase Auth / JWT
- **Maps**: Google Maps
- **Payments**: Stripe

## 🚀 Getting Started

### Backend (NestJS)
```bash
cd server/api
npm install
npm run start:dev
```

### Frontend (Flutter)
```bash
cd mobile
flutter pub get
flutter run
```

## 🌿 Branch Structure
- `main` - Production ready code
- `develop` - Integration branch
- `feature/xxx` - Feature branches

## 👥 Team Workflow
1. Create feature branch from `develop`
2. Work on your feature
3. Create Pull Request to `develop`
4. Code review + merge
5. Deploy `develop` to `main` when ready
