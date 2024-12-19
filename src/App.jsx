import { MantineProvider } from "@mantine/core";
import Inicio from "./paginas/inicio/inicio.jsx";
import ProveedorAutenticacion from "./contexto/ContextoAutenticacion.jsx";

export default function App() {
  return (
    <MantineProvider>
      <ProveedorAutenticacion>
       <Inicio />
      </ProveedorAutenticacion>
    </MantineProvider>
  );
}