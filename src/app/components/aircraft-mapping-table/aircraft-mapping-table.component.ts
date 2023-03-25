import {Component, OnInit} from '@angular/core';
import {AircraftMapping} from "../../dto/aircraft-mapping.model";
import {AircraftMappingService} from "../../services/aircraft-mapping.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-aircraft-mapping-table',
  templateUrl: './aircraft-mapping-table.component.html',
  styleUrls: ['./aircraft-mapping-table.component.css']
})
export class AircraftMappingTableComponent implements OnInit {
  mappings: AircraftMapping[] = []
  selected: number = -1;

  constructor(private mappingService: AircraftMappingService, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.mappingService.getAllMappings().subscribe(data => {
      this.mappings = data;
    });
  }

  select(id: number) {
    this.selected = id;
  }

  delete() {
    if (this.selected === -1) {
      this.toastr.error("Something went wrong, try to refresh page");
    } else {
      this.mappingService.deleteMapping(this.selected).subscribe(data => {
        this.toastr.success("Mapping deleted");
        this.load();
      },
        error => {
        this.toastr.error(error.error.message)
        });
    }
  }
}
