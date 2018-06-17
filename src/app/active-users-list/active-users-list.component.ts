import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-active-users-list',
  templateUrl: './active-users-list.component.html',
  styleUrls: ['./active-users-list.component.css']
})
export class ActiveUsersListComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<ActiveUsersListComponent>) {
  }

    openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    }
  ngOnInit() {
  }

}
