import { Component } from '@angular/core';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wedding-registry',
  standalone: true,
  imports: [RadioGroupComponent, ReactiveFormsModule],
  templateUrl: './wedding-registry.component.html',
  styleUrl: './wedding-registry.component.scss',
})
export class WeddingRegistryComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: [],
      email: [],
      isAttending: [],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
