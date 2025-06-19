import "../styles/index.css";

export const metadata = {
  title: "My Website",
  description: "My awesome site description",
  // You can also include Open Graph, Twitter, etc.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
