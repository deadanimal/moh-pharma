import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-medicine-pricing',
  templateUrl: './medicine-pricing.component.html',
  styleUrls: ['./medicine-pricing.component.scss']
})
export class MedicinePricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  download() {
    swal.fire({
      title: "Berjaya",
      text: "Sijil penghargaan anda sedang dimuat turun",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Ok"
    })
  }

}
