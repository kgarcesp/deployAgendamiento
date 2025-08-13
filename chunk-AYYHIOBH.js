import {
  Card,
  CardModule
} from "./chunk-SIVP3XQJ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-MFEZNY7Y.js";
import {
  ButtonModule,
  RippleModule
} from "./chunk-IYCYBSIV.js";
import "./chunk-UDNOL27E.js";
import {
  CommonModule
} from "./chunk-I2T6NAHC.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-NWYR77CG.js";

// src/app/features/lista-precios/components/lista-precios.component.ts
var ListaPreciosComponent = class _ListaPreciosComponent {
  static \u0275fac = function ListaPreciosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListaPreciosComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListaPreciosComponent, selectors: [["app-lista-precios"]], decls: 27, vars: 0, consts: [[1, "container", "mt-5"], [1, "text-center", "mb-5"], [1, "display-4"], [1, "lead"], ["header", "Opciones de Lista de Precios"], [1, "row"], [1, "col-md-6", "mb-4", "card__primary"], ["routerLink", "/lista-precios/cargar-excel", 1, "card", "h-100", "option-card"], [1, "card-body", "text-center"], [1, "mb-3"], [1, "bi", "bi-file-earmark-excel", "fs-1", "text-success"], [1, "h5"], [1, "text-muted"], ["routerLink", "/lista-precios/historico", 1, "card", "h-100", "option-card"], [1, "bi", "bi-clock-history", "fs-1", "text-info"]], template: function ListaPreciosComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
      \u0275\u0275text(3, "Lista de Precios de Proveedor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Gesti\xF3n de precios de materiales/proveedores");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "p-card", 4);
      \u0275\u0275element(7, "br");
      \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h3", 11);
      \u0275\u0275text(15, "Cargar Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 12);
      \u0275\u0275text(17, "Sube el archivo manual");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 6)(19, "div", 13)(20, "div", 8)(21, "div", 9);
      \u0275\u0275element(22, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h3", 11);
      \u0275\u0275text(24, "Hist\xF3rico");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 12);
      \u0275\u0275text(26, "Consulta cambios anteriores");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [
    CommonModule,
    RouterModule,
    RouterLink,
    ButtonModule,
    CardModule,
    Card,
    RippleModule
  ], styles: ["\n\n.option-card[_ngcontent-%COMP%] {\n  background-color: var(--gray-50);\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.option-card[_ngcontent-%COMP%]:hover {\n  background-color: var(--gray-50);\n  transform: scale(1.03);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=lista-precios.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListaPreciosComponent, [{
    type: Component,
    args: [{ selector: "app-lista-precios", standalone: true, imports: [
      CommonModule,
      RouterModule,
      ButtonModule,
      CardModule,
      RippleModule
    ], template: '<div class="container mt-5">\r\n  <div class="text-center mb-5">\r\n    <h5 class="display-4">Lista de Precios de Proveedor</h5>\r\n    <p class="lead">Gesti\xF3n de precios de materiales/proveedores</p>\r\n  </div>\r\n  <p-card header="Opciones de Lista de Precios">\r\n    <br>\r\n    <div class="row">\r\n      <!-- Opci\xF3n 1: Cargar Excel -->\r\n      <div class="col-md-6 mb-4 card__primary ">\r\n        <div class="card h-100 option-card" routerLink="/lista-precios/cargar-excel">\r\n          <div class="card-body text-center">\r\n            <div class="mb-3">\r\n              <i class="bi bi-file-earmark-excel fs-1 text-success"></i>\r\n            </div>\r\n            <h3 class="h5">Cargar Excel</h3>\r\n            <p class="text-muted">Sube el archivo manual</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- <div class="col-md-4 mb-4 card__primary">\r\n        <div class="card h-100 option-card" routerLink="/lista-precios/registro-manual">\r\n          <div class="card-body text-center">\r\n            <div class="mb-3">\r\n              <i class="bi bi-pencil-square fs-1 text-success"></i>\r\n            </div>\r\n            <h3 class="h5">Registro Manual</h3>\r\n            <p class="text-muted">Ingresa los precios manualmente</p>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n      <div class="col-md-6 mb-4 card__primary">\r\n        <div class="card h-100 option-card" routerLink="/lista-precios/historico">\r\n          <div class="card-body text-center">\r\n            <div class="mb-3">\r\n              <i class="bi bi-clock-history fs-1 text-info"></i>\r\n            </div>\r\n            <h3 class="h5">Hist\xF3rico</h3>\r\n            <p class="text-muted">Consulta cambios anteriores</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </p-card>', styles: ["/* src/app/features/lista-precios/components/lista-precios.component.scss */\n.option-card {\n  background-color: var(--gray-50);\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n}\n.option-card:hover {\n  background-color: var(--gray-50);\n  transform: scale(1.03);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=lista-precios.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListaPreciosComponent, { className: "ListaPreciosComponent", filePath: "src/app/features/lista-precios/components/lista-precios.component.ts", lineNumber: 21 });
})();
export {
  ListaPreciosComponent
};
//# sourceMappingURL=chunk-AYYHIOBH.js.map
