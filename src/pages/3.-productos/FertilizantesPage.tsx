import React, { useState } from 'react';
import DataFetcher from '../../components/DataFetcher';
import SidebarFilters from './SidebarFilter'; 

const FertilizantesPage: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, string | boolean>>({});

  const handleFilterChange = (filterName: string, value: string | boolean) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Barra lateral de filtros */}
      <SidebarFilters onFilterChange={handleFilterChange} />

      {/* Contenido principal */}
      <div style={{ marginLeft: '20px', flex: 1 }}>
        <h1>Catálogo de Fertilizantes</h1>
        <DataFetcher tipo="fertilizantes" filters={filters} toggleSidebar={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </div>
    </div>
  );
};

export default FertilizantesPage;