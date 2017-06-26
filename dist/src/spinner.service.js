import { Injectable } from '@angular/core';
var SpinnerService = (function () {
    function SpinnerService() {
        this.spinnerCache = new Set();
    }
    SpinnerService.prototype._register = function (spinner) {
        this.spinnerCache.add(spinner);
    };
    SpinnerService.prototype._unregister = function (spinnerName) {
        var _this = this;
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                _this.spinnerCache.delete(spinner);
            }
        });
    };
    SpinnerService.prototype._unregisterGroup = function (spinnerGroup) {
        var _this = this;
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.group === spinnerGroup) {
                _this.spinnerCache.delete(spinner);
            }
        });
    };
    SpinnerService.prototype._unregisterAll = function () {
        this.spinnerCache.clear();
    };
    SpinnerService.prototype.show = function (spinnerName) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                spinner.show = true;
            }
        });
    };
    SpinnerService.prototype.hide = function (spinnerName) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.name === spinnerName) {
                spinner.show = false;
            }
        });
    };
    SpinnerService.prototype.showGroup = function (spinnerGroup) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.group === spinnerGroup) {
                spinner.show = true;
            }
        });
    };
    SpinnerService.prototype.hideGroup = function (spinnerGroup) {
        this.spinnerCache.forEach(function (spinner) {
            if (spinner.group === spinnerGroup) {
                spinner.show = false;
            }
        });
    };
    SpinnerService.prototype.showAll = function () {
        this.spinnerCache.forEach(function (spinner) { return spinner.show = true; });
    };
    SpinnerService.prototype.hideAll = function () {
        this.spinnerCache.forEach(function (spinner) { return spinner.show = false; });
    };
    return SpinnerService;
}());
export { SpinnerService };
SpinnerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SpinnerService.ctorParameters = function () { return []; };
//# sourceMappingURL=spinner.service.js.map