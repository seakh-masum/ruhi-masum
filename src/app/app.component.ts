import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GettingMarriedComponent } from './features/getting-married/getting-married.component';
import { LoveStoryComponent } from './features/love-story/love-story.component';
import { InvitationComponent } from './features/invitation/invitation.component';
import { WeddingGalleryComponent } from './features/wedding-gallery/wedding-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GettingMarriedComponent,
    LoveStoryComponent,
    InvitationComponent,
    WeddingGalleryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ruhi weds Masum';
  landingPageImgUrl =
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJpZGUlMjBhbmQlMjBncm9vbXxlbnwwfHwwfHx8MA%3D%3D';
}
