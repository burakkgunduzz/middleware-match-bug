import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <Link style={{ fontSize: 24 }} href="/product/123">
      go to a dynamic route
    </Link>
  );
}
