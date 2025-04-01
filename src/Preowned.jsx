// MultipleFiles/Preowned.jsx
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button'; // Adjust the import based on your project structure

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); // Use your Stripe publishable key

function Preowned() {
  const [preownedCars, setPreownedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPreownedCars = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/preowned-cars"); // Adjust the URL to your API endpoint

        if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

        const data = await response.json();
        setPreownedCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPreownedCars();
  }, []);

  const handlePayment = async (car) => {
    const stripe = await stripePromise;

    // Create a payment session on your server
    const response = await fetch("http://localhost:5000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: car.price * 100, // Amount in cents
        carId: car.id,
      }),
    });

    const session = await response.json();

    if (session.error) {
      console.error(session.error);
      alert("Payment failed. Please try again.");
      return;
    }

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error(error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold'>Preowned Cars</h1>
      <p>Find the best deals on preowned cars in our collection.</p>

      {loading && <p>Loading cars...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && preownedCars.length === 0 && (
        <p>No preowned cars available right now.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {preownedCars.map((car) => (
          <div key={car.id} className="border p-4 rounded-lg shadow-md">
            <img src={car.imageUrl} alt={car.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{car.name}</h2>
            <p className="text-gray-600">Year: {car.year}</p>
            <p className="text-green-600 font-semibold">${car.price}</p>
            <Button className="mt-3" onClick={() => handlePayment(car)}>Buy Now</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Preowned;