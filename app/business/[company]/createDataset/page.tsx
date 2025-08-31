
const createDatasetPage = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Formulario enviado");
        event.preventDefault();
        try {
            const form = event.currentTarget; // el formulario tipado
            const formData = new FormData(form);
            const title = formData.get("title") as string;
            const description = formData.get("description") as string;
            const nParticipants = formData.get("nParticipants") as string;
            const tiposDatos = formData.get("tiposDatos") as string;
            const validation = formData.get("validation") as string;
        } catch (error) {
            console.log(error);
        }
        
    }
  return <div>Crear dataset
        <form >
        <label>Título:
            <input type="text" name="title" />
        </label>
        <br />
        <label>
            Descripción:
            <textarea name="description" />
        </label>
        <br />
        <label>
            Número de Participantes:
            <input type="number" name="nParticipants" />
        </label>
        <br />
        <label>
            Tipos de Datos (separados por comas):
            <input type="text" name="tiposDatos" />
        </label>
        <br />
        <label > 
            forma de validación:
            <input type="text" name="validation" />
        </label>
        <button type="submit">Crear Dataset</button>
        </form>
  </div>;
}