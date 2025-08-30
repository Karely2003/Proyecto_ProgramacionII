export default function Reportes() {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold mb-6">Reportes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Citas Próximas */}
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Citas Próximas</h3>

          <div className="bg-white p-3 rounded mb-3 shadow-sm">
            <p className="font-bold">Daniel Mejía</p>
            <p className="text-sm text-gray-600">
              Fecha: 27/08/2025, Hora: 10:00 AM
            </p>
          </div>
       <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-bold">José Raudales</p>
            <p className="text-sm text-gray-600">
              Fecha: 29/08/2025, Hora: 03:30 PM
            </p>
          </div>
        </div>

        {/* Pagos por Clientes */}
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Pagos por Clientes</h3>

          <div className="bg-white p-3 rounded mb-3 shadow-sm">
            <p className="font-bold">Cliente: Alexandra Vallecío</p>
            <p className="text-sm text-gray-600">Total pagado: L 20,000.00</p>
          </div>

          <div className="bg-white p-3 rounded shadow-sm">
            <p className="font-bold">Cliente: Kevin Fernández</p>
            <p className="text-sm text-gray-600">Total pagado: L 10,000.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}