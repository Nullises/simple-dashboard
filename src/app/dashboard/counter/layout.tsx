export const metadata = {
  title: "Counter",
  description: "Add products",
};

export default function CounterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {children}
    </div>
  );
}
