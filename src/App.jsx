import "./App.css";
import ChamadoList from "./components/ChamadoList";
import Panel from "./components/Panel";

import { initialTickets} from "./data/chamados";


// PONTO DE PARTIDA: os três cartões abaixo estão escritos manualmente.
// O arquivo src/data/chamados.js contém quatro chamados.
// Os componentes, ações, formulário e persistência ainda não existem.

export default function App() {
  const resolvedCount = initialTickets.filter(
    (chamado) => chamado.resolved,
  ).length;

  function handleToggleChamado(chamadoId) {
    alert(`Você clicou no chamado: ${chamadoId}`);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      <Panel title="Resumo">
        <p className="summary">
          {resolvedCount} de {initialTickets.length} chamados resolvidos
        </p>
      </Panel>

      <Panel title="Chamados">
        <ChamadoList
          chamados={initialTickets}
          onToggle={handleToggleChamado}
        />
      </Panel>
    </main>
  );
}
