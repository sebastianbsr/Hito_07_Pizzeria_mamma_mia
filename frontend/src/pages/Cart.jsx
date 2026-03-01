import { formatCLP } from "../utils/format.js";
import { useCart } from "../context/CartContext.jsx";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, total, addToCart, decreaseFromCart, removeFromCart } =
    useCart();
  const { token } = useUser();

  if (cart.length === 0) {
    return (
      <main className="container my-4" style={{ maxWidth: 900 }}>
        <h4 className="mb-3">Detalle del pedido</h4>
        <p className="text-muted">Tu carrito está vacío.</p>
        <Link to="/" className="btn btn-dark">
          Volver al Home
        </Link>
      </main>
    );
  }

  return (
    <main className="container my-4" style={{ maxWidth: 900 }}>
      <h4 className="mb-4">Detalle del pedido</h4>

      <div className="d-flex flex-column gap-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex align-items-center justify-content-between border rounded p-3"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: 80,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
              <span className="fw-semibold text-capitalize">{item.name}</span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <span className="fw-semibold text-success">
                ${formatCLP(item.price)}
              </span>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => decreaseFromCart(item.id)}
                >
                  -
                </button>

                <span className="fw-semibold">{item.count}</span>

                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>

                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => removeFromCart(item.id)}
                  title="Eliminar"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-between mt-4">
        <h4 className="mb-0">Total: ${formatCLP(total)}</h4>
        <button className="btn btn-dark" disabled={!token}>
          Pagar
        </button>
      </div>
    </main>
  );
}
