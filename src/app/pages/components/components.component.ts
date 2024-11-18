import { Component } from '@angular/core';
import { ContentEditorComponent } from '../../dynamic-content-editor/components/content-editor/content-editor.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [ContentEditorComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

}
