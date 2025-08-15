# MedDrop API Contract

This document defines the API contract for **MedDrop**, a medicine donation and request platform.  
It includes endpoints for authentication, donations, requests, and admin/NGO functionalities.

---

## 1. User Authentication

### Register User
**Method:** POST  
**Path:** `/api/auth/register`  
**Description:** Registers a new user (individual, NGO, or pharmacy).  

**Request Body (JSON):**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "individual | ngo | pharmacy",
  "phone": "string",
  "address": "string"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "userId": "string"
}
```

**Error Response (400):**
```json
{
  "error": "Email already exists"
}
```

---

### Login User
**Method:** POST  
**Path:** `/api/auth/login`  
**Description:** Authenticates a user and provides a JWT token.  

**Request Body (JSON):**
```json
{
  "email": "string",
  "password": "string"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "token": "jwt_token"
}
```

**Error Response (401):**
```json
{
  "error": "Invalid email or password"
}
```

---

## 2. Medicine Donation

### Create Donation (Form Submission)
**Method:** POST  
**Path:** `/api/donations`  
**Description:** Donor/Pharmacy adds a medicine donation.  

**Request Body (JSON):**
```json
{
  "donorId": "string",
  "medicineName": "string",
  "quantity": "number",
  "expiryDate": "YYYY-MM-DD",
  "condition": "sealed | opened",
  "location": "string"
}
```

**Success Response (201):**
```json
{
  "message": "Donation submitted successfully",
  "donationId": "string"
}
```

---

### Get All Donations
**Method:** GET  
**Path:** `/api/donations`  
**Description:** Retrieve all available medicine donations.  

**Success Response (200):**
```json
[
  {
    "donationId": "string",
    "medicineName": "string",
    "quantity": "number",
    "expiryDate": "YYYY-MM-DD",
    "location": "string",
    "status": "available | matched | completed"
  }
]
```

---

## 3. Medicine Requests

### Create Request
**Method:** POST  
**Path:** `/api/requests`  
**Description:** Patient/NGO requests a medicine.  

**Request Body (JSON):**
```json
{
  "requesterId": "string",
  "medicineName": "string",
  "quantity": "number",
  "urgency": "low | medium | high"
}
```

**Success Response (201):**
```json
{
  "message": "Request created successfully",
  "requestId": "string"
}
```

---

### Get All Requests
**Method:** GET  
**Path:** `/api/requests`  
**Description:** Retrieve all medicine requests.  

**Success Response (200):**
```json
[
  {
    "requestId": "string",
    "medicineName": "string",
    "quantity": "number",
    "urgency": "low | medium | high",
    "status": "pending | fulfilled | cancelled"
  }
]
```

---

## 4. Match Notifications

### Get Matches
**Method:** GET  
**Path:** `/api/matches`  
**Description:** Retrieve matched donations and requests for a user.  

**Success Response (200):**
```json
[
  {
    "matchId": "string",
    "donationId": "string",
    "requestId": "string",
    "status": "pending | confirmed | completed"
  }
]
```

---

## 5. Admin & NGO Panel

### Get All Users
**Method:** GET  
**Path:** `/api/admin/users`  
**Description:** Admin retrieves all registered users.  

**Success Response (200):**
```json
[
  {
    "userId": "string",
    "name": "string",
    "role": "individual | ngo | pharmacy",
    "email": "string",
    "status": "active | blocked"
  }
]
```

---

### Approve NGO/Partner
**Method:** PATCH  
**Path:** `/api/admin/approve/:userId`  
**Description:** Admin approves an NGO or partner organization.  

**Success Response (200):**
```json
{
  "message": "NGO approved successfully",
  "userId": "string"
}
```

---

## Target Users
- Individuals with surplus or unused, non-expired medicines  
- Patients and families in financial distress  
- NGOs, healthcare centers, and social workers  
- Pharmacies or hospitals with overstock  

