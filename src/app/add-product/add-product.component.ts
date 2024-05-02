import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  @ViewChild("productName", {static: true}) productName: ElementRef | undefined;
  @ViewChild("productPrice", {static: true}) productPrice: ElementRef | undefined;
  @ViewChild("productDescription", {static: true}) productDescription: ElementRef | undefined;
  @ViewChild("productImage", {static: true}) productImage: ElementRef | undefined;

  @Output()
  onProductAdded = new EventEmitter<{name: string, price: number, description: string, image: string}>();

  onAddProduct() {
    if(!this.productName || !this.productPrice || !this.productDescription || !this.productImage) return;
    const imageFile = this.productImage.nativeElement.files[0];
    this.onProductAdded.emit({
      name: this.productName.nativeElement.value,
      price: this.productPrice.nativeElement.value,
      description: this.productDescription.nativeElement.value,
      image: imageFile ? URL.createObjectURL(imageFile) : ''
    });
  }
}
