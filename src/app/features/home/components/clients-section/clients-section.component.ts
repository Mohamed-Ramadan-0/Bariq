import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AppImgComponent } from '../../../../shared/components/app-img/app-img.component';
import { CLIENTS, Client } from '../../../../core/data/mock-db';

@Component({
    selector: 'app-clients-section',
    standalone: true,
    imports: [CommonModule, TranslateModule, AppImgComponent],
    templateUrl: './clients-section.component.html',
    styleUrls: ['./clients-section.component.scss']
})
export class ClientsSectionComponent implements OnInit {
    clients: Client[] = [];

    ngOnInit(): void {
        this.clients = CLIENTS;
    }
}
