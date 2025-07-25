# 📋 Initial GitHub Issues to Create

Copy and paste these into GitHub Issues (github.com/nightlife-app-org/nightlife-app/issues/new):

## Issue 1: Setup Development Environment
**Title:** Setup Development Environment  
**Labels:** documentation, good first issue  
**Assignee:** Everyone  

**Description:**
Setup local development environment for the nightlife app.

**Tasks:**
- [ ] Clone repository
- [ ] Install Flutter SDK
- [ ] Install Node.js and npm
- [ ] Setup VS Code with Flutter/Dart extensions
- [ ] Run `flutter doctor` and resolve any issues
- [ ] Test backend with `cd server/api && npm run start:dev`
- [ ] Test Flutter with `cd mobile && flutter run`

---

## Issue 2: Create Club Entity and API
**Title:** Create Club Entity and CRUD API  
**Labels:** backend, enhancement  
**Assignee:** Backend Developer  

**Description:**
Create the Club entity and basic CRUD operations for managing nightclubs.

**Tasks:**
- [ ] Create Club entity (id, name, location, description, imageUrl)
- [ ] Create ClubsModule, Controller, Service
- [ ] Add TypeORM configuration
- [ ] Implement GET /api/clubs
- [ ] Implement POST /api/clubs
- [ ] Add validation with class-validator
- [ ] Test endpoints with Postman

**Acceptance Criteria:**
- Club entity with proper TypeScript types
- Working CRUD endpoints
- Proper error handling

---

## Issue 3: Setup Flutter Navigation and Home Screen
**Title:** Setup Flutter Navigation and Home Screen  
**Labels:** frontend, enhancement  
**Assignee:** Flutter Lead Developer  

**Description:**
Create the app navigation structure and home screen layout.

**Tasks:**
- [ ] Add go_router dependency
- [ ] Setup navigation structure (Home, Events, Offers, Map, Profile)
- [ ] Create basic screen widgets
- [ ] Add bottom navigation bar
- [ ] Create Home screen with clubs list placeholder
- [ ] Add Riverpod for state management

**Acceptance Criteria:**
- Working navigation between screens
- Home screen displays placeholder club list
- Clean, responsive UI

---

## Issue 4: Create Figma Design System
**Title:** Create Figma Design System and Mockups  
**Labels:** design, documentation  
**Assignee:** UI/UX Designer  

**Description:**
Create the visual design system and screen mockups for the app.

**Tasks:**
- [ ] Create Figma workspace
- [ ] Define color palette (dark theme friendly)
- [ ] Design typography system
- [ ] Create component library (buttons, cards, etc.)
- [ ] Mockup Home screen
- [ ] Mockup Events screen
- [ ] Mockup Club detail screen
- [ ] Share Figma link in team chat

**Acceptance Criteria:**
- Complete design system
- High-fidelity mockups for main screens
- Consistent visual style

---

## Issue 5: Research External Integrations
**Title:** Research and Plan External Service Integrations  
**Labels:** research, integrations  
**Assignee:** Integration Specialist  

**Description:**
Research and plan implementation of external services.

**Tasks:**
- [ ] Research Google Maps Flutter integration
- [ ] Research Stripe payment integration
- [ ] Research Firebase setup (Auth, FCM)
- [ ] Create integration timeline
- [ ] Document API keys and setup requirements
- [ ] Create setup guide for team

**Acceptance Criteria:**
- Documentation of all external services
- Clear implementation plan
- Setup requirements documented
