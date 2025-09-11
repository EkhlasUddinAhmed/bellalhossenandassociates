import Link from "next/link";

const FaceBook = () => {
  return (
    <Link
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="20"
        height="20"
      >
        <path d="M17 1h-3a5 5 0 00-5 5v3H6v4h3v10h4v-10h3l1-4h-4V6a1 1 0 011-1h3V1z" />
      </svg>
    </Link>
  );
};

export default FaceBook;
