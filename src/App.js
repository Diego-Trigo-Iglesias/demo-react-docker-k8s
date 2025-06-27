import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>¡Hola desde Kubernetes con React + Docker!</h1>
      <p>
        Esta app está desplegada en un cluster <strong>Kubernetes local</strong> usando <strong>Minikube</strong>.
      </p>
      <p className="subtext">Este proyecto es una demo para practicar DevOps y despliegue con contenedores.</p>
    </div>
  );
}

export default App;
