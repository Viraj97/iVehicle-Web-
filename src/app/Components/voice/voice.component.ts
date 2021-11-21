import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  pythonCall(){

  var PythonShell = require('python-shell');
  PythonShell.run('my_script.py', Option, function(err:any, results:any) {
    console.log(results);
    })
  } 
}
