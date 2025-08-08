# 🏢 Clubs API Documentation

## Base URL
```
http://localhost:3000/api/clubs
```

## Endpoints

### 📋 Get All Clubs
```http
GET /api/clubs
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Club LUX",
    "description": "Premier nightclub with world-class DJs",
    "address": "Av. Mariscal López 1234, Asunción",
    "latitude": -25.2637,
    "longitude": -57.5759,
    "imageUrl": "https://example.com/club-lux.jpg",
    "phone": "+595 21 123-4567",
    "openTime": "22:00",
    "closeTime": "06:00",
    "isActive": true,
    "createdAt": "2025-01-20T10:00:00Z",
    "updatedAt": "2025-01-20T10:00:00Z"
  }
]
```

### 🔍 Get Club by ID
```http
GET /api/clubs/{id}
```

### 📍 Search Clubs by Location
```http
GET /api/clubs/search?lat=-25.2637&lng=-57.5759&radius=10
```

**Query Parameters:**
- `lat` (required): Latitude
- `lng` (required): Longitude  
- `radius` (optional): Search radius in km (default: 10)

### ➕ Create New Club
```http
POST /api/clubs
```

**Request Body:**
```json
{
  "name": "New Club",
  "description": "Amazing nightclub",
  "address": "Some address",
  "latitude": -25.2637,
  "longitude": -57.5759,
  "imageUrl": "https://example.com/image.jpg",
  "phone": "+595 21 123-4567",
  "openTime": "22:00",
  "closeTime": "06:00"
}
```

### ✏️ Update Club
```http
PATCH /api/clubs/{id}
```

### 🗑️ Delete Club (Soft Delete)
```http
DELETE /api/clubs/{id}
```

## 🧪 Testing with curl

### Get all clubs:
```bash
curl http://localhost:3000/api/clubs
```

### Create a club:
```bash
curl -X POST http://localhost:3000/api/clubs \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Club",
    "description": "Test description",
    "address": "Test address",
    "latitude": -25.2637,
    "longitude": -57.5759,
    "imageUrl": "https://example.com/test.jpg",
    "phone": "+595 21 123-4567",
    "openTime": "22:00",
    "closeTime": "06:00"
  }'
```
