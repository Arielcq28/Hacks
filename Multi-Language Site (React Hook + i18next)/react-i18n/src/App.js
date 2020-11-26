import React, { Suspense } from "react";
import Welcome from './components/Welcome';

function App() {


  return (
    <Suspense fallback="Cargando traducciones...">
      <Welcome />
    </Suspense>

    
  );
}

export default App;
