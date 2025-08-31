"use client"
import { useRouter } from "next/navigation";


const Login = ({ruta}:{ruta:string}) => {
    const router = useRouter();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget; // el formulario tipado
    const formData = new FormData(form);
    const name = formData.get("username") as string;

    if (name && name.trim().length > 0) {
      router.push(`${ruta}${name}`);
      console.log("Formulario enviado:", name);
    } else {
      console.log("El campo username está vacío");
    }
  };
    return <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="password" placeholder="password" />
            <button type="submit">Login</button>
        </form> 
    </div>
}

export {Login};