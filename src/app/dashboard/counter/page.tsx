import CartCounter from "@/app/(features)/components/CartCounter";

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>

      <CartCounter value={0} />
    </div>
  );
}
