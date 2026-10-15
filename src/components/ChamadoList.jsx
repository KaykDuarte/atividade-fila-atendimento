import ChamadoCard from "./ChamadoCard";

export default function ChamadoList({ chamados, onToggle, onDelete }) {
  if (chamados.length === 0) {
    return <p>Nenhum chamado cadastrado.</p>;
  }

  return (
    <div className="ticket-list">
      {chamados.map((chamado) => (
        <ChamadoCard
          key={chamado.id}
          chamado={chamado}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}