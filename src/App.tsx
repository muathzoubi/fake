import { FormEvent, useState } from 'react';
import './App.css';

function App() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    console.log(event);
  }

  return (
    <>
      <div className="container mx-auto p-4 font-cairo">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">صفحة الدفع</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <img src="./2e.png" />
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  طريقة الدفع
                </span>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-blue-600"
                      name="paymentMethod"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={() => setPaymentMethod('credit-card')}
                    />
                    <span className="mr-2  text-gray-700">بطاقة ائتمان</span>
                  </label>
                </div>
              </div>

              {paymentMethod === 'credit-card' && (
                <>
                  <div>
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      رقم البطاقة
                    </label>
                    <input
                      id="card-number"
                      type="text"
                      placeholder="xxxx xxxx xxxx xxxx"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label
                        htmlFor="expiry-date"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        تاريخ الانتهاء
                      </label>
                      <input
                        id="expiry-date"
                        type="text"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex-1 ">
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-medium text-gray-700 mb-1 "
                      >
                        رمز الأمان CVV
                      </label>
                      <input
                        id="cvv"
                        type="text"
                        placeholder="xxx"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                        className="w-full px-3 mx-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      الاسم على البطاقة
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="الاسم الكامل"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </>
              )}

              {paymentMethod === 'cash' && (
                <div>
                  <label
                    htmlFor="cash-amount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    المبلغ النقدي
                  </label>
                  <input
                    id="cash-amount"
                    type="number"
                    placeholder="أدخل المبلغ النقدي"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
                >
                  إتمام الدفع
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
