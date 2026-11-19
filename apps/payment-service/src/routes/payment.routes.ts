import { Router } from "express";
import { paymentController } from "../controllers/payment.controller";

const router = Router();

// IMPORTANT: specific sub-paths must be registered BEFORE the /:id wildcard.
// Express matches routes in declaration order; "/:id" would shadow "/order/:orderId"
// and "/user/:userId" because the literal segments "order" and "user" are valid :id values.

router.get("/order/:orderId",
  paymentController.getOrderPayment
);

router.get("/user/:userId",
  paymentController.getUserPayments
);

router.post("/verify",
  paymentController.verifyPayment
);

router.post("/webhook",
  paymentController.razorpayWebhook
);

// Generic /:id wildcard must come LAST so it cannot shadow the routes above.
router.get("/:id",
  paymentController.getPayment
);

export default router;