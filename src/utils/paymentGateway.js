// // // src/utils/paymentGateway.js
// // import jwt from "jsonwebtoken";
// // import axios from "axios";

// // /**
// //  * createCollectRequest
// //  * - signs a JWT payload (if required by gateway)
// //  * - posts to gateway create-collect endpoint
// //  * - returns gateway response
// //  *
// //  * Make sure to update endpoint and payload shape to match actual docs.
// //  */
// // export const createCollectRequest = async ({ orderId, amount, returnUrl, customer }) => {
// //   // Example payload — change fields to match API doc
// //   const payload = {
// //     pg_key: process.env.PG_KEY,
// //     order_id: orderId,
// //     order_amount: amount,
// //     school_id: process.env.SCHOOL_ID,
// //     // add more fields as required
// //   };

// //   // Sign payload if gateway expects JWT signed payload (per hint)
// //   const signed = jwt.sign(payload, process.env.PAYMENT_API_KEY, { algorithm: "HS256" });

// //   try {
// //     const resp = await axios.post(`${process.env.PAYMENT_API_BASE}/create-collect-request`, {
// //       data: signed,
// //       return_url: returnUrl,
// //       customer
// //     }, {
// //       headers: {
// //         "Content-Type": "application/json",
// //         "x-api-key": process.env.PAYMENT_API_KEY // if required
// //       },
// //       timeout: 15000
// //     });

// //     return resp.data;
// //   } catch (err) {
// //     // normalize error
// //     throw new Error(err?.response?.data?.message || err.message);
// //   }
// // };


// import jwt from "jsonwebtoken";
// import axios from "axios";

// const PAYMENT_BASE_URL = "https://dev-vanilla.edviron.com/erp";

// export const createPayment = async (school_id, amount, callback_url) => {
//   const signPayload = { school_id, amount, callback_url };
//   const sign = jwt.sign(signPayload, process.env.PG_KEY);

//   const response = await axios.post(
//     `${PAYMENT_BASE_URL}/create-collect-request`,
//     { school_id, amount, callback_url, sign },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.PAYMENT_API_KEY}`,
//       },
//     }
//   );

//   return response.data;
// };

// export const checkPaymentStatus = async (school_id, collect_request_id) => {
//   const signPayload = { school_id, collect_request_id };
//   const sign = jwt.sign(signPayload, process.env.PG_KEY);

//   const response = await axios.get(
//     `${PAYMENT_BASE_URL}/collect-request/${collect_request_id}?school_id=${school_id}&sign=${sign}`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.PAYMENT_API_KEY}`,
//       },
//     }
//   );

//   return response.data;
// };


//POSTMANNN

import jwt from "jsonwebtoken";
import axios from "axios";

const PAYMENT_BASE_URL = "https://dev-vanilla.edviron.com/erp";

export const createPayment = async (school_id, amount, callback_url) => {
  try {
    console.log("=== Creating Payment ===");
    console.log("Input:", { school_id, amount, callback_url });

    // Generate JWT sign
    const signPayload = { school_id, amount, callback_url };
    const sign = jwt.sign(signPayload, process.env.PG_KEY);
    console.log("Generated sign (JWT):", sign);

    // Make API request
    const response = await axios.post(
      `${PAYMENT_BASE_URL}/create-collect-request`,
      { school_id, amount, callback_url, sign },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PAYMENT_API_KEY}`,
        },
      }
    );

    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // API responded with an error
      console.error("API Error Response:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Request Error:", error.message);
    }
    throw error;
  }
};

export const checkPaymentStatus = async (school_id, collect_request_id) => {
  try {
    console.log("=== Checking Payment Status ===");
    console.log("Input:", { school_id, collect_request_id });

    // Generate JWT sign
    const signPayload = { school_id, collect_request_id };
    const sign = jwt.sign(signPayload, process.env.PG_KEY);
    console.log("Generated sign (JWT):", sign);

    // Make API request
    const response = await axios.get(
      `${PAYMENT_BASE_URL}/collect-request/${collect_request_id}?school_id=${school_id}&sign=${sign}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYMENT_API_KEY}`,
        },
      }
    );

    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      console.error("Status Code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Request Error:", error.message);
    }
    throw error;
  }
};
