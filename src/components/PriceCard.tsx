type PriceCardProps = {
  plan: string;
  price: number;
  period?: string;
  desc: string;
  benefits: string[];
  handleGetStarted: (e: React.MouseEvent) => void;
};

function PriceCard({
  plan,
  price,
  period,
  desc,
  benefits,
  handleGetStarted,
}: PriceCardProps) {
  return (
    <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow ">
      <h3 className="mb-4 text-2xl font-semibold">{plan}</h3>
      <p className="font-light text-gray-800 sm:text-lg">{desc}</p>
      <div className="my-8 flex items-baseline justify-center">
        <span className="mr-2 text-4xl font-bold">
          {price.toLocaleString()} 원
        </span>
        <span className="text-gray-800">{period}</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            {benefit && (
              <svg
                className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white  dark:focus:ring-primary-900"
        onClick={handleGetStarted}
      >
        Get started
      </a>
    </div>
  );
}

export default PriceCard;
