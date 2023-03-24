import {Component, OnInit} from '@angular/core';
import {AircraftMapping} from "../../dto/aircraft-mapping.model";
import {AircraftMappingService} from "../../services/aircraft-mapping.service";

@Component({
  selector: 'app-aircraft-mapping-table',
  templateUrl: './aircraft-mapping-table.component.html',
  styleUrls: ['./aircraft-mapping-table.component.css']
})
export class AircraftMappingTableComponent implements OnInit {
  mappings: AircraftMapping[] = []

  constructor(private mappingService: AircraftMappingService) {
  }
  ngOnInit(): void {
    this.load();
  }

  load() {
    this.mappingService.getAllMappings().subscribe(data => {
      this.mappings = data;
    });
  }

}
