import React from "react";
                  
export function Produtosform() {
    return (<>
   
        <div className="container text-center mb-4">
  <div className="row align-items-start">
    <div className="col-2">
    <label className="form-label">Referencia</label>
        <input
          type="text"
          className="form-control"
          placeholder="REF"
        />
    </div>
    <div className="col-10">
    <label className="form-label">Descricao</label>
        <input
          type="text"
          className="form-control"
          placeholder="Calça pantalona"
        />
    </div>
  </div>
  </div>

       </> )
}