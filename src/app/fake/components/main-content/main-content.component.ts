import {Component, OnInit} from '@angular/core';
import {FakeApiService} from "../../services/fake-api.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  displayedColumns: string[] = ['id','title','price','description','rate','count'];
  dataSource:Array<any> = []
  products:Array<any> =[];
  constructor(private fakeService:FakeApiService) {
  }
  private getAllSources(): void{
    this.fakeService.getSources()
      .subscribe((data:any) => {
        this.products = data;
        this.dataSource = this.products
      });


  }
  ngOnInit(): void {
    this.getAllSources()
  }
}
