// src/pages/Dashboard.tsx
export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="dashboard-grid">
        {/* Citas Próximas */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Citas Proximas</h3>
            <button className="view-all-btn">Ver todo</button>
          </div>
          <div className="card-content">
            <div className="info-item">
              <span className="client-name">Daniel Mejía</span>
              <span className="client-info">27/08/2025 a las 10:00 AM</span>
            </div>
            <div className="info-item">
              <span className="client-name">Jose Raudales</span>
              <span className="client-info">29/08/2025 a las 03:30 PM</span>
            </div>
          </div>
        </div>
        
        {/* Pagos Recientes */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Pagos Recientes</h3>
            <button className="view-all-btn">Ver todo</button>
          </div>
          <div className="card-content">
            <div className="info-item">
              <span className="client-name">Alexandra Vallecio</span>
              <span className="client-info">L 25,000.00 - 20/08/2025</span>
            </div>
            <div className="info-item">
              <span className="client-name">Kevin Fernandez</span>
              <span className="client-info">L 10,000.00 - 15/08/2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}