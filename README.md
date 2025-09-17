**School Payment Dashboard - Backend**
**Project Overview**
This is the backend API for the School Payment Dashboard.
It handles user authentication, order creation, payment processing, transaction management, and webhook handling.
Built with Node.js, Express-style architecture (NestJS compatible structure), MongoDB Atlas, and JWT authentication.

---

**Setup Instructions**

1. **Clone Repository**

```bash
git clone https://github.com/<your-username>/backend-repo.git
cd backend
```

2. **Install Dependencies**

```bash
npm install
```

3. **Create Environment Variables**
   Create a `.env` file in the `backend/` folder:

```
MONGO_URI=<Your MongoDB Atlas URI>
JWT_SECRET=<Your JWT secret>
JWT_EXPIRES_IN=3600s
PAYMENT_API_KEY=<Your Payment API Key>
PORT=5000
```

*Note: Do not push `.env` to GitHub. Include `.env.example` instead.*

4. **Run the Server**

```bash
npm run start:dev
```

The server runs on `http://localhost:5000` (or the port set in `.env`).

---

**API Endpoints**

**Authentication**

| Method | Route              | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login and get JWT   |

**Payments & Orders**

| Method | Route                                | Description                      |
| ------ | ------------------------------------ | -------------------------------- |
| POST   | /api/orders/create-payment           | Create a new payment/order       |
| GET    | /api/orders/payment-status/\:orderId | Check payment status by order ID |
| POST   | /api/orders/webhook                  | Test webhook events              |

**Transactions**

| Method | Route                                 | Description                                 |
| ------ | ------------------------------------- | ------------------------------------------- |
| GET    | /api/transactions                     | Fetch all transactions                      |
| GET    | /api/transactions/school/\:schoolId   | Fetch transactions by school ID             |
| GET    | /api/transactions/status/\:customerId | Fetch transactions by status for a customer |

*Note: All protected routes require a JWT token in the `Authorization: Bearer <token>` header.*

---

**Pagination & Sorting**

* For `/api/transactions`, you can add query parameters for pagination and sorting:

```
/api/transactions?page=1&limit=10&sort=payment_time&order=desc
```

* Backend indexes important fields (`school_id`, `custom_order_id`, `collect_id`) for faster queries.

---

**Testing**

* Use Postman to test all endpoints.
* Import the provided `Postman_collection.json` ().
* Make sure to include the JWT token in Authorization headers for protected routes.


