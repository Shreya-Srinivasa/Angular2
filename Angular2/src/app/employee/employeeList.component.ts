import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import {  EmployeeService } from './employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    statusMessage: string = 'Loading data.. Please Wait...';
    employees: IEmployee[];
    selectedRB: string = 'All';


    constructor(private empService: EmployeeService) {
    }

    ngOnInit(): void {
        this.empService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => {
                this.statusMessage = 'Problem with the service. Please try again after a while';
                console.error(error);
            });
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmpCountRBchanged(selectedRBvalue: string): void
    {
        this.selectedRB = selectedRBvalue;
    }

}
