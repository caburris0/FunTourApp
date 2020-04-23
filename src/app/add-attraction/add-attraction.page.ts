import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-attraction',
  templateUrl: './add-attraction.page.html',
  styleUrls: ['./add-attraction.page.scss'],
})
export class AddAttractionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    firebase.auth().signOut().then(function() {

    }).catch(function(error){
      console.log("logout error: " + error)
    });
    console.log("log out")
    this.router.navigate(['/login']);
  }

  addAttraction() {
    console.log("Add attraction")
  }

}
