import { useState } from "react";

const emptyForm = { title: "", sector: "" };

export default function ChamadoForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((formAtual) => ({ ...formAtual, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = form.title.trim();
    const sector = form.sector.trim();

    if (title === "" || sector === "") {
      setError("Preencha o assunto e o setor.");
      return;
    }

    onAdd({ title, sector });
    setForm(emptyForm);
    setError("");
  }

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Assunto</label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="sector">Setor</label>
        <input
          id="sector"
          name="sector"
          type="text"
          value={form.sector}
          onChange={handleChange}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">Cadastrar chamado</button>
    </form>
  );
}