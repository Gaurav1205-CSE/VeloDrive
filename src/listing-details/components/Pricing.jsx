import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";
import { MdOutlineLocalOffer } from "react-icons/md";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = ({ carDetail }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // Ensure this is declared

    const handleCheckout = async () => {
        setLoading(true);
        setError("");
        setSuccessMessage(""); // Reset success message

        const stripe = await stripePromise;

        try {
            const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_STRIPE_SECRET_KEY}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    "payment_method_types[]": "card",
                    "line_items[0][price_data][currency]": "usd",
                    "line_items[0][price_data][product_data][name]": `Car Offer #${carDetail.id}`,
                    "line_items[0][price_data][unit_amount]": `${carDetail.sellingPrice * 100}`,
                    "line_items[0][quantity]": "1",
                    "mode": "payment",
                    "success_url": `http://localhost:5173/success?carId=${carDetail.id}`,
                    "cancel_url": `http://localhost:5173/cancel`,
                }),
            });

            const session = await response.json();
            if (session.error) throw new Error(session.error);

            // Redirect to Stripe Checkout
            await stripe.redirectToCheckout({ sessionId: session.id });

            // Set success message
            setSuccessMessage("Payment was successful! Redirecting...");
            // Redirect to default page after a short delay
            setTimeout(() => {
                window.location.href = '/'; // Redirect to the home page or desired page
            }, 3000); // Redirect after 3 seconds

        } catch (err) {
            setError("Payment failed. Try again.");
            console.error("Stripe Error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-10 rounded-xl border shadow-md">
            <h2 className="text-lg font-semibold">Our Price</h2>
            <h2 className="font-bold text-4xl">${carDetail?.sellingPrice}</h2>

            {error && <p className="text-red-500 mt-3">{error}</p>}
            {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}

            <Button className="w-full mt-7 flex items-center justify-center" size="lg" onClick={handleCheckout} disabled={loading}>
                <MdOutlineLocalOffer className="text-lg mr-2" />
                {loading ? "Processing..." : "Make a Payment"}
            </Button>
        </div>
    );
};

export default Payment;