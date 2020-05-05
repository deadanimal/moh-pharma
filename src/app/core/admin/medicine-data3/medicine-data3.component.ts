import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-medicine-data3',
  templateUrl: './medicine-data3.component.html',
  styleUrls: ['./medicine-data3.component.scss']
})
export class MedicineData3Component implements OnInit {

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  delete() {
    swal.fire({
      title: "Amaran",
      text: "Anda akan membuang data ini",
      type: "warning",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-warning",
      confirmButtonText: "Ya, buang"
    })
  }

}
