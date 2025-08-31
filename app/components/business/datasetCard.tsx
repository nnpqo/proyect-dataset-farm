interface Dataset {
  title: string;
  status: "pendiente" | "en_progreso" | "completado";
  nParticipants: number;
  description: string;
  tiposDatos: string[];
}


const datasetCard = ({dataset}:{dataset:Dataset}) => {

    return <div>
        <h2>{dataset.title}</h2>
        <p>{dataset.description}</p>
        <p>Estado: {dataset.status}</p>
        <p>Número de Participantes: {dataset.nParticipants}</p>
        <p>Tipos de Datos: {dataset.tiposDatos.join(", ")}</p> 
    </div>
}

export {datasetCard};