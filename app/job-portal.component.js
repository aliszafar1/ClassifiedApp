System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var JobPortalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            JobPortalComponent = (function () {
                function JobPortalComponent() {
                    this.cars = [
                        {
                            name: "Honda",
                            model: "2009",
                            price: "Rs. 100k"
                        },
                        {
                            name: "Toyota",
                            model: "2008",
                            price: "Rs. 150k"
                        },
                        {
                            name: "Mercedes Benz",
                            model: "2010",
                            price: "Rs. 250k"
                        }
                    ];
                    this.mobiles = [
                        {
                            name: "Samsung",
                            model: "S4",
                            price: "Rs. 15k"
                        },
                        {
                            name: "Apple",
                            model: "i5",
                            price: "Rs. 45k"
                        },
                        {
                            name: "HTC",
                            model: "10c",
                            price: "Rs. 18k"
                        }];
                    this.laptops = [
                        {
                            name: "Hp",
                            model: "Pavailion",
                            price: "Rs. 35k"
                        },
                        {
                            name: "Sony",
                            model: "Vaio",
                            price: "Rs. 65k"
                        },
                        {
                            name: "Apple",
                            model: "Macbook Pro",
                            price: "Rs. 135k"
                        }
                    ];
                }
                JobPortalComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/jobs.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['app/job-portal-style.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], JobPortalComponent);
                return JobPortalComponent;
            }());
            exports_1("JobPortalComponent", JobPortalComponent);
        }
    }
});
//# sourceMappingURL=job-portal.component.js.map