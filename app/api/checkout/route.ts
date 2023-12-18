import { basketitem } from "@/types/basketitem";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    // Create Checkout Sessions from body params.
    const body = await request.json() as basketitem[]
    const lineItems = body.map((basketItem) => {
        return {
            price_data: {
                product_data: {
                    name: basketItem.name
                },
                currency: 'GBP',
                unit_amount: basketItem.price.cost * 100
              },
              quantity: 1,
        }
    })

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${request.headers.get('origin')}/basket/?success=true`,
      cancel_url: `${request.headers.get('origin')}/basket/?canceled=true`,
    });

    return Response.json({ id: session.id });
  } catch (error) {
    return Response.json({ error: error });
  }
}
