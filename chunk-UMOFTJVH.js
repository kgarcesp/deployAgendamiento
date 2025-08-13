import {
  HttpClient
} from "./chunk-UDNOL27E.js";
import {
  Injectable,
  catchError,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-NWYR77CG.js";

// src/environments/environment.ts
var environment = {
  production: false,
  apiBaseUrl: "http://localhost:3001/api"
  // o tu URL de desarrollo
};

// src/app/features/lista-precios/services/list-precios.service.ts
var ListPreciosService = class _ListPreciosService {
  http;
  apiUrl = `${environment.apiBaseUrl}/price-lists`;
  constructor(http) {
    this.http = http;
  }
  validatePriceListData(data) {
    return this.http.post(`${this.apiUrl}/validate`, { data }).pipe(catchError(this.handleError));
  }
  getHistoricoPrecios() {
    return this.http.get(`${this.apiUrl}/validate-products`).pipe(catchError(this.handleError));
  }
  guardarCambiosPrecios(data) {
    console.log(data);
    return this.http.post(`${this.apiUrl}/update-prices`, { data }).pipe(catchError(this.handleError));
  }
  handleError(error) {
    let errorMessage = "Ocurri\xF3 un error desconocido";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = error.error?.message || error.message;
    }
    console.error("Error en ListPreciosService:", error);
    return throwError(() => new Error(errorMessage));
  }
  static \u0275fac = function ListPreciosService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListPreciosService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ListPreciosService, factory: _ListPreciosService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListPreciosService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ListPreciosService
};
//# sourceMappingURL=chunk-UMOFTJVH.js.map
