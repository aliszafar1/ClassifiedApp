System.register(['angular2/core', 'angular2/router', './data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, data_service_1;
    var AddMoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            AddMoreComponent = (function () {
                function AddMoreComponent(_router, _dataService) {
                    this._router = _router;
                    this._dataService = _dataService;
                    this.data = {};
                    this.receiveData = {};
                    this.showDetail = false;
                }
                ;
                AddMoreComponent.prototype.onGetData = function () {
                    this.receiveData = this._dataService.getRandomData();
                    this.showDetail = true;
                };
                AddMoreComponent.prototype.addMore = function (data) {
                    this._dataService.insertData(data);
                    console.log(this.data);
                };
                AddMoreComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/add-more-form.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [data_service_1.DataService],
                        styleUrls: ['app/add-more-style.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
                ], AddMoreComponent);
                return AddMoreComponent;
            }());
            exports_1("AddMoreComponent", AddMoreComponent);
        }
    }
});
//# sourceMappingURL=add-more.component.js.map