import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [

  ],
  imports: [

    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),

  ]
})
export class BodyModule { }
