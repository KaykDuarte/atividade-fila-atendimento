export default function ChamadoCard ({chamado}){
    const badgeClass = chamado.resolved ? "badge-done" : "badge-open";
    const badgeText = chamado.resolved ? "Resolvido" : "Aberto";
        return(
            <article className="ticket-card">
                <div>
                    <h3>{chamado.title}</h3>
                    <p>Setor: {chamado.sector}</p>
                </div>
                <span className={`badge ${badgeClass}`}>{badgeText}</span>
            </article>
        );
}