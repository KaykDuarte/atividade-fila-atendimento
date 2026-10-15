import "./App.css";
import ChamadoList from "./components/ChamadoList";
import { initialTickets} from "./data/chamados";


// PONTO DE PARTIDA: os três cartões abaixo estão escritos manualmente.
// O arquivo src/data/chamados.js contém quatro chamados.
// Os componentes, ações, formulário e persistência ainda não existem.

export default function App() {
  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      <section className="panel">
        <div className="panel-header">
          <h2>Chamados</h2>
        </div>
        <div className="panel-content">
          <ChamadoList chamados={initialTickets} />
          </div>
          </section>
          </main>
  );
}
