import Link from "next/link";

const ClientPage = () => {
  return (
    <div>
      <h1>pagina de Usuarios</h1>
      <Link href="/user/profile">login</Link>
    </div>
  );
};

export default ClientPage;
