export default function ChamadoCard({ chamado, onToggle, onDelete }) {
  const badgeClass = chamado.resolved ? "badge-done" : "badge-open";
  const badgeText = chamado.resolved ? "Resolvido" : "Aberto";

  return (
    <article className="ticket-card">
      <div>
        <h3>{chamado.title}</h3>
        <p>Setor: {chamado.sector}</p>
      </div>
      <span className={`badge ${badgeClass}`}>{badgeText}</span>
      <div className="ticket-actions">
        <button type="button" onClick={() => onToggle(chamado.id)}>
          {chamado.resolved ? "Reabrir" : "Resolver"}
        </button>
        <button
          type="button"
          className="secondary"
          onClick={() => onDelete(chamado.id)}
        >
          Excluir
        </button>
      </div>
    </article>
  );
}