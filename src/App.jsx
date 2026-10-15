import { useEffect, useState } from "react";
import "./App.css";
import ChamadoForm from "./components/ChamadoForm";
import ChamadoList from "./components/ChamadoList";
import Panel from "./components/Panel";
import { initialTickets } from "./data/chamados";

const STORAGE_KEY = "iteam:fila-atendimento";

function loadChamados() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === null) {
    return initialTickets;
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : initialTickets;
  } catch {
    return initialTickets;
  }
}

export default function App() {
  const [chamados, setChamados] = useState(loadChamados);

  const resolvedCount = chamados.filter(
    (chamado) => chamado.resolved,
  ).length;
  const totalCount = chamados.length;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chamados));
  }, [chamados]);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${resolvedCount}/${totalCount} chamados resolvidos`;

    return () => {
      document.title = previousTitle;
    };
  }, [resolvedCount, totalCount]);

  function handleToggleChamado(chamadoId) {
    setChamados((chamadosAtuais) =>
      chamadosAtuais.map((chamado) =>
        chamado.id === chamadoId
          ? { ...chamado, resolved: !chamado.resolved }
          : chamado,
      ),
    );
  }

  function handleDeleteChamado(chamadoId) {
    setChamados((chamadosAtuais) =>
      chamadosAtuais.filter((chamado) => chamado.id !== chamadoId),
    );
  }

  function handleAddChamado({ title, sector }) {
    const novoChamado = {
      id: `chamado-${Date.now()}`,
      title,
      sector,
      resolved: false,
    };

    setChamados((chamadosAtuais) => [...chamadosAtuais, novoChamado]);
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
          {resolvedCount} de {totalCount} chamados resolvidos
        </p>
      </Panel>

      <Panel title="Novo chamado">
        <ChamadoForm onAdd={handleAddChamado} />
      </Panel>

      <Panel title="Chamados">
        <ChamadoList
          chamados={chamados}
          onToggle={handleToggleChamado}
          onDelete={handleDeleteChamado}
        />
      </Panel>
    </main>
  );
}