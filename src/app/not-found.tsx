import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", backgroundColor: "#F5F5DC" }}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#2D5016", marginBottom: "1rem" }}>404</h1>
            <h2 style={{ fontSize: "1.5rem", color: "#1A1A1A", marginBottom: "1rem" }}>Page Not Found</h2>
            <p style={{ color: "#666", marginBottom: "2rem" }}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
            <Link
              href="/en"
              style={{ display: "inline-block", padding: "0.75rem 2rem", backgroundColor: "#2D5016", color: "white", borderRadius: "0.5rem", textDecoration: "none", fontWeight: "600" }}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
