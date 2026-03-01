export default function Profile() {
    const email = "usuario@correo.com"; // estático por ahora
  
    return (
      <main className="container my-4" style={{ maxWidth: 700 }}>
        <h2 className="mb-3">Profile</h2>
  
        <p className="mb-4">
          <span className="fw-semibold">Email:</span> {email}
        </p>
  
        <button className="btn btn-dark">Cerrar sesión</button>
      </main>
    );
  }
  