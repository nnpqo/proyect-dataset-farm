'use client';
import { datasetCard as DatasetCard } from "@/app/components/business/datasetCard";
import { useRouter } from "next/navigation";

interface Dataset {
  title: string;
  status: "pendiente" | "en_progreso" | "completado";
  nParticipants: number;
  description: string;
  tiposDatos: string[];
}

const pageCompany = () => {
const router = useRouter();
const companyData =  {name:"company1"};
const datasets: Dataset[] = [
  {
    title: "dataset1",
    status: "pendiente",
    nParticipants: 482,
    description: "Descripción del dataset",
    tiposDatos: ["nacionalidad", "edad", "salario"]
  },
  {
    title: "dataset2",
    status: "en_progreso",
    nParticipants: 1050,
    description: "Encuesta de consumo tecnológico en jóvenes universitarios",
    tiposDatos: ["carrera", "uso_internet", "horas_estudio"]
  },
  {
    title: "dataset3",
    status: "completado",
    nParticipants: 320,
    description: "Registro de pacientes en un centro de salud comunitario",
    tiposDatos: ["nombre", "edad", "diagnóstico", "tratamiento"]
  }
];
  return <div> 
            <div>
            <h1>Bienvenido {companyData.name}</h1>
            <div>
        <div><button onClick={()=>{router.push("/business/createDataset")}}>Crear Dataset</button></div>
        {datasets.map((dataset) => (
          <DatasetCard key={dataset.title} dataset={dataset} />
        ))}
      </div>
            </div>

        </div>;
}

export default pageCompany;