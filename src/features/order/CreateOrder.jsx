import { useSelector } from 'react-redux';
import { Form, useActionData, useNavigation } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const errors = useActionData();
  const cart = fakeCart;
  const { userName } = useSelector(state => state.user);

  return (
    <div className="container max-w-3xl p-8 mx-auto space-y-8">
      <h2 className="text-xl font-semibold text-center">Ready to order? Let&apos;s go!</h2>

      <Form method="POST" className="space-y-6">
        <div className="flex items-center justify-between gap-2">
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            required
            defaultValue={userName}
            className="w-2/3 px-4 py-2 text-base border rounded-full border-stone-200 focus:ring-2 ring-yellow-400"
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <label>Phone number</label>
          <div className="relative w-2/3">
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 text-base border rounded-full border-stone-200 focus:ring-2 ring-yellow-400"
            />
            {errors?.phone && <p className="absolute text-xs text-red-500 left-4">{errors.phone}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <label>Address</label>
          <div className="w-2/3">
            <input
              type="text"
              name="address"
              required
              className="w-full px-4 py-2 text-base border rounded-full border-stone-200 focus:ring-2 ring-yellow-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <input type="checkbox" name="priority" id="priority" className="accent-yellow-400 size-4" />
          <label htmlFor="priority" className="font-semibold ">
            Want to yo give your order priority?
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>
          <button
            disabled={isSubmitting}
            className="px-5 py-3 mt-6 text-sm font-semibold uppercase transition duration-300 bg-yellow-400 rounded-full md:mt-12 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-1"
          >
            {isSubmitting ? 'Please wait...' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
