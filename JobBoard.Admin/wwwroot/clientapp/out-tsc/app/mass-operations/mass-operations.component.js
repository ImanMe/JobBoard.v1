"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var job_service_1 = require("./../services/job.service");
var router_1 = require("@angular/router");
var MassOperationsComponent = (function () {
    function MassOperationsComponent(jobService, route, router) {
        this.jobService = jobService;
        this.route = route;
        this.router = router;
        this.isNumberFirst = true;
        this.isNumberSecond = true;
    }
    MassOperationsComponent.prototype.ngOnInit = function () {
    };
    MassOperationsComponent.prototype.massExpire = function (podId) {
        var _this = this;
        if (isNaN(podId.value))
            this.isNumberFirst = false;
        else {
            console.log(podId.value);
            this.jobService.massExpire(podId.value)
                .subscribe(function (a) { _this.router.navigate(['/board/jobs']); }, function (error) { return _this.router.navigate(['/board/jobs']); });
        }
    };
    MassOperationsComponent.prototype.massDelete = function (podId) {
        var _this = this;
        if (isNaN(podId.value))
            this.isNumberSecond = false;
        else {
            this.jobService.massDelete(podId.value)
                .subscribe(function (a) { _this.router.navigate(['/board/jobs']); }, function (error) { return _this.router.navigate(['/board/jobs']); });
        }
    };
    return MassOperationsComponent;
}());
MassOperationsComponent = __decorate([
    core_1.Component({
        selector: 'app-mass-operations',
        templateUrl: './mass-operations.component.html',
        styleUrls: ['./mass-operations.component.css']
    }),
    __metadata("design:paramtypes", [job_service_1.JobService,
        router_1.ActivatedRoute,
        router_1.Router])
], MassOperationsComponent);
exports.MassOperationsComponent = MassOperationsComponent;
//# sourceMappingURL=mass-operations.component.js.map