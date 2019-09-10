"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ripple_1 = require("@material/ripple");
var Topbar = /** @class */ (function (_super) {
    __extends(Topbar, _super);
    function Topbar(parent) {
        return _super.call(this, parent) || this;
    }
    Topbar.prototype.init = function () {
        console.log('configure topbar');
    };
    Topbar.prototype.configure = function () {
        console.log('configure topbar');
        console.log(this.element.querySelectorAll(".hv-button"));
        this.element.querySelectorAll(".hv-button").forEach(function (button) { return new ripple_1.MDCRipple(button); });
    };
    return Topbar;
}(Component));
exports.Topbar = Topbar;
//# sourceMappingURL=topbar.js.map