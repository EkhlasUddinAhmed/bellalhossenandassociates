import Link from "next/link";

const LinkedIn = () => {
  return (
    <Link
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.33c0-1.75-.03-4-2.44-4-2.44 0-2.82 1.9-2.82 3.87V24h-5V8z" />
      </svg>
    </Link>
  );
};

export default LinkedIn;
