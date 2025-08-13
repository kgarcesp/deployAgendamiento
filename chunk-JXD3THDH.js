import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-EHOFFIZY.js";
import {
  CommonModule,
  NgIf
} from "./chunk-I2T6NAHC.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-NWYR77CG.js";

// src/app/features/lista-precios/components/precio-form/precio-form.component.ts
function PrecioFormComponent_span_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2, "Guardar Producto ");
    \u0275\u0275elementEnd();
  }
}
function PrecioFormComponent_span_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 44);
    \u0275\u0275text(2, " Guardando... ");
    \u0275\u0275elementEnd();
  }
}
var PrecioFormComponent = class _PrecioFormComponent {
  // Modelo del formulario
  producto = {
    codigoProveedor: "",
    codigoSap: "",
    descripcion: "",
    unidadEmpaque: "",
    costoUnitario: 0,
    descuento1: 0,
    descuento2: 0,
    costoFinal: 0,
    variacionCosto: 0,
    observaciones: "",
    precioVentaSugerido: 0
  };
  // Estado del formulario
  isLoading = false;
  submitted = false;
  calcularCostoFinal() {
    const desc1 = this.producto.descuento1 / 100;
    const desc2 = this.producto.descuento2 / 100;
    this.producto.costoFinal = this.producto.costoUnitario * (1 - desc1) * (1 - desc2);
    return this.producto.costoFinal;
  }
  onSubmit() {
    this.submitted = true;
    this.isLoading = true;
    setTimeout(() => {
      console.log("Producto registrado:", this.producto);
      this.isLoading = false;
    }, 1e3);
  }
  resetForm() {
    this.producto = {
      codigoProveedor: "",
      codigoSap: "",
      descripcion: "",
      unidadEmpaque: "",
      costoUnitario: 0,
      descuento1: 0,
      descuento2: 0,
      costoFinal: 0,
      variacionCosto: 0,
      observaciones: "",
      precioVentaSugerido: 0
    };
    this.submitted = false;
  }
  static \u0275fac = function PrecioFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrecioFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrecioFormComponent, selectors: [["app-precio-form"]], decls: 92, vars: 14, consts: [["precioForm", "ngForm"], [1, "container"], [1, "card", "shadow", "mt-4"], [1, "card-header", "bg-success", "text-white"], [1, "h5", "mb-0"], [1, "card-body"], [3, "ngSubmit"], [1, "row", "mb-3"], [1, "col-md-4"], [1, "form-group"], ["for", "codigoProveedor", 1, "form-label"], ["type", "text", "id", "codigoProveedor", "name", "codigoProveedor", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "codigoSap", 1, "form-label"], ["type", "text", "id", "codigoSap", "name", "codigoSap", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "unidadEmpaque", 1, "form-label"], ["type", "text", "id", "unidadEmpaque", "name", "unidadEmpaque", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-8"], ["for", "descripcion", 1, "form-label"], ["type", "text", "id", "descripcion", "name", "descripcion", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "observaciones", 1, "form-label"], ["type", "text", "id", "observaciones", "name", "observaciones", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["for", "costoUnitario", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], ["type", "number", "step", "0.01", "id", "costoUnitario", "name", "costoUnitario", "required", "", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "col-md-2"], ["for", "descuento1", 1, "form-label"], ["type", "number", "id", "descuento1", "name", "descuento1", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["for", "descuento2", 1, "form-label"], ["type", "number", "id", "descuento2", "name", "descuento2", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["for", "costoFinal", 1, "form-label"], ["type", "number", "id", "costoFinal", "name", "costoFinal", "disabled", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "precioVentaSugerido", 1, "form-label"], ["type", "number", "step", "0.01", "id", "precioVentaSugerido", "name", "precioVentaSugerido", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "row", "mb-4"], ["for", "variacionCosto", 1, "form-label"], ["type", "number", "id", "variacionCosto", "name", "variacionCosto", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bi", "bi-x-circle", "me-2"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [4, "ngIf"], [1, "bi", "bi-check-circle", "me-2"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function PrecioFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2", 4);
      \u0275\u0275text(4, "Registro Manual de Precios");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 5)(6, "form", 6, 0);
      \u0275\u0275listener("ngSubmit", function PrecioFormComponent_Template_form_ngSubmit_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "label", 10);
      \u0275\u0275text(12, "C\xF3digo Proveedor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.codigoProveedor, $event) || (ctx.producto.codigoProveedor = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "label", 12);
      \u0275\u0275text(17, "C\xF3digo SAP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.codigoSap, $event) || (ctx.producto.codigoSap = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 8)(20, "div", 9)(21, "label", 14);
      \u0275\u0275text(22, "Unidad Empaque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.unidadEmpaque, $event) || (ctx.producto.unidadEmpaque = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 7)(25, "div", 16)(26, "div", 9)(27, "label", 17);
      \u0275\u0275text(28, "Descripci\xF3n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.descripcion, $event) || (ctx.producto.descripcion = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 8)(31, "div", 9)(32, "label", 19);
      \u0275\u0275text(33, "Observaciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.observaciones, $event) || (ctx.producto.observaciones = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 7)(36, "div", 21)(37, "div", 9)(38, "label", 22);
      \u0275\u0275text(39, "Costo Unitario");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 23)(41, "span", 24);
      \u0275\u0275text(42, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.costoUnitario, $event) || (ctx.producto.costoUnitario = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function PrecioFormComponent_Template_input_change_43_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.calcularCostoFinal());
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 26)(45, "div", 9)(46, "label", 27);
      \u0275\u0275text(47, "Desc. 1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 23)(49, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.descuento1, $event) || (ctx.producto.descuento1 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function PrecioFormComponent_Template_input_change_49_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.calcularCostoFinal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 24);
      \u0275\u0275text(51, "%");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "div", 26)(53, "div", 9)(54, "label", 29);
      \u0275\u0275text(55, "Desc. 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 23)(57, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_57_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.descuento2, $event) || (ctx.producto.descuento2 = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function PrecioFormComponent_Template_input_change_57_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.calcularCostoFinal());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "span", 24);
      \u0275\u0275text(59, "%");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "div", 26)(61, "div", 9)(62, "label", 31);
      \u0275\u0275text(63, "Costo Final");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 23)(65, "span", 24);
      \u0275\u0275text(66, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_67_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.costoFinal, $event) || (ctx.producto.costoFinal = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 21)(69, "div", 9)(70, "label", 33);
      \u0275\u0275text(71, "Precio Venta Sugerido");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 23)(73, "span", 24);
      \u0275\u0275text(74, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_75_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.precioVentaSugerido, $event) || (ctx.producto.precioVentaSugerido = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(76, "div", 35)(77, "div", 21)(78, "div", 9)(79, "label", 36);
      \u0275\u0275text(80, "Variaci\xF3n Costo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 23)(82, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function PrecioFormComponent_Template_input_ngModelChange_82_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.producto.variacionCosto, $event) || (ctx.producto.variacionCosto = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 24);
      \u0275\u0275text(84, "%");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(85, "div", 38)(86, "button", 39);
      \u0275\u0275listener("click", function PrecioFormComponent_Template_button_click_86_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.resetForm());
      });
      \u0275\u0275element(87, "i", 40);
      \u0275\u0275text(88, "Limpiar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 41);
      \u0275\u0275template(90, PrecioFormComponent_span_90_Template, 3, 0, "span", 42)(91, PrecioFormComponent_span_91_Template, 3, 0, "span", 42);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      const precioForm_r2 = \u0275\u0275reference(7);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.codigoProveedor);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.codigoSap);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.unidadEmpaque);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.descripcion);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.observaciones);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.costoUnitario);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.descuento1);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.descuento2);
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.costoFinal);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.precioVentaSugerido);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.producto.variacionCosto);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.isLoading || !precioForm_r2.form.valid);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: 500;\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  opacity: 1;\n  font-weight: 500;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=precio-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrecioFormComponent, [{
    type: Component,
    args: [{ selector: "app-precio-form", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="container">\r\n  <div class="card shadow mt-4">\r\n    <div class="card-header bg-success text-white">\r\n      <h2 class="h5 mb-0">Registro Manual de Precios</h2>\r\n    </div>\r\n    \r\n    <div class="card-body">\r\n      <form #precioForm="ngForm" (ngSubmit)="onSubmit()">\r\n        <!-- Primera fila -->\r\n        <div class="row mb-3">\r\n          <div class="col-md-4">\r\n            <div class="form-group">\r\n              <label for="codigoProveedor" class="form-label">C\xF3digo Proveedor</label>\r\n              <input type="text" class="form-control" id="codigoProveedor" \r\n                     [(ngModel)]="producto.codigoProveedor" name="codigoProveedor" required>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="col-md-4">\r\n            <div class="form-group">\r\n              <label for="codigoSap" class="form-label">C\xF3digo SAP</label>\r\n              <input type="text" class="form-control" id="codigoSap" \r\n                     [(ngModel)]="producto.codigoSap" name="codigoSap" required>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="col-md-4">\r\n            <div class="form-group">\r\n              <label for="unidadEmpaque" class="form-label">Unidad Empaque</label>\r\n              <input type="text" class="form-control" id="unidadEmpaque" \r\n                     [(ngModel)]="producto.unidadEmpaque" name="unidadEmpaque" required>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Segunda fila -->\r\n        <div class="row mb-3">\r\n          <div class="col-md-8">\r\n            <div class="form-group">\r\n              <label for="descripcion" class="form-label">Descripci\xF3n</label>\r\n              <input type="text" class="form-control" id="descripcion" \r\n                     [(ngModel)]="producto.descripcion" name="descripcion" required>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="col-md-4">\r\n            <div class="form-group">\r\n              <label for="observaciones" class="form-label">Observaciones</label>\r\n              <input type="text" class="form-control" id="observaciones" \r\n                     [(ngModel)]="producto.observaciones" name="observaciones">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Tercera fila - Costos -->\r\n        <div class="row mb-3">\r\n          <div class="col-md-3">\r\n            <div class="form-group">\r\n              <label for="costoUnitario" class="form-label">Costo Unitario</label>\r\n              <div class="input-group">\r\n                <span class="input-group-text">$</span>\r\n                <input type="number" step="0.01" class="form-control" id="costoUnitario" \r\n                       [(ngModel)]="producto.costoUnitario" name="costoUnitario" \r\n                       (change)="calcularCostoFinal()" required>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="col-md-2">\r\n            <div class="form-group">\r\n              <label for="descuento1" class="form-label">Desc. 1</label>\r\n              <div class="input-group">\r\n                <input type="number" class="form-control" id="descuento1" \r\n                       [(ngModel)]="producto.descuento1" name="descuento1" \r\n                       (change)="calcularCostoFinal()">\r\n                <span class="input-group-text">%</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="col-md-2">\r\n            <div class="form-group">\r\n              <label for="descuento2" class="form-label">Desc. 2</label>\r\n              <div class="input-group">\r\n                <input type="number" class="form-control" id="descuento2" \r\n                       [(ngModel)]="producto.descuento2" name="descuento2" \r\n                       (change)="calcularCostoFinal()">\r\n                <span class="input-group-text">%</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="col-md-2">\r\n            <div class="form-group">\r\n              <label for="costoFinal" class="form-label">Costo Final</label>\r\n              <div class="input-group">\r\n                <span class="input-group-text">$</span>\r\n                <input type="number" class="form-control" id="costoFinal" \r\n                       [(ngModel)]="producto.costoFinal" name="costoFinal" disabled>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class="col-md-3">\r\n            <div class="form-group">\r\n              <label for="precioVentaSugerido" class="form-label">Precio Venta Sugerido</label>\r\n              <div class="input-group">\r\n                <span class="input-group-text">$</span>\r\n                <input type="number" step="0.01" class="form-control" id="precioVentaSugerido" \r\n                       [(ngModel)]="producto.precioVentaSugerido" name="precioVentaSugerido" required>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Cuarta fila - Variaci\xF3n -->\r\n        <div class="row mb-4">\r\n          <div class="col-md-3">\r\n            <div class="form-group">\r\n              <label for="variacionCosto" class="form-label">Variaci\xF3n Costo</label>\r\n              <div class="input-group">\r\n                <input type="number" class="form-control" id="variacionCosto" \r\n                       [(ngModel)]="producto.variacionCosto" name="variacionCosto">\r\n                <span class="input-group-text">%</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Botones -->\r\n        <div class="d-flex justify-content-end gap-2">\r\n          <button type="button" class="btn btn-outline-secondary" (click)="resetForm()">\r\n            <i class="bi bi-x-circle me-2"></i>Limpiar\r\n          </button>\r\n          \r\n          <button type="submit" class="btn btn-success" [disabled]="isLoading || !precioForm.form.valid">\r\n            <span *ngIf="!isLoading">\r\n              <i class="bi bi-check-circle me-2"></i>Guardar Producto\r\n            </span>\r\n            <span *ngIf="isLoading">\r\n              <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>\r\n              Guardando...\r\n            </span>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>', styles: ["/* src/app/features/lista-precios/components/precio-form/precio-form.component.scss */\n.container {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n}\n.card {\n  border-radius: 8px;\n  overflow: hidden;\n}\n.card .card-header {\n  padding: 1rem;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-group label {\n  font-weight: 500;\n  margin-bottom: 0.5rem;\n}\n.input-group-text {\n  background-color: #f8f9fa;\n  font-weight: 500;\n}\n.form-control:disabled {\n  background-color: #f8f9fa;\n  opacity: 1;\n  font-weight: 500;\n}\n.spinner-border {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=precio-form.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrecioFormComponent, { className: "PrecioFormComponent", filePath: "src/app/features/lista-precios/components/precio-form/precio-form.component.ts", lineNumber: 12 });
})();
export {
  PrecioFormComponent
};
//# sourceMappingURL=chunk-JXD3THDH.js.map
