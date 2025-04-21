export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎰 BET1533</h1>
      <p>Deposite qualquer valor via Pix e jogue agora!</p>
      <button
        style={{
          backgroundColor: "#ffd700",
          padding: "10px 20px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => window.open("https://wa.me/5535997476255", "_blank")}
      >
        Suporte via WhatsApp
      </button>
    </div>
  );
}
