import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fitst',
  templateUrl: './fitst.component.html',
  styleUrls: ['./fitst.component.css']
})
export class FitstComponent implements OnInit{

  text!:string

  ngOnInit(): void {
    const grabBtn = document.getElementById("grabBtn")!;
    grabBtn.addEventListener("click",() => {
      chrome.tabs.query({active: true}, (tabs)=> {
        const tab = tabs[0];
        if (tab) {
          chrome.scripting.executeScript(
            {
              target:{tabId: tab.id!, allFrames: true},
              func:()=>{
                const pjsdiv = document.getElementById("oframecdnplayer")!;
                // const pjsdiv = document.querySelectorAll("pjsdiv");

                // pjsdiv.forEach( e=>{
                //   let span = e.querySelectorAll("span");
                //   if (span){
                //     span.forEach(sp=>{
                //       console.log( e.id)
                //     })
                //
                //   }
                // })
               let spanElement = pjsdiv.querySelectorAll("span")
                let span = spanElement[0].innerHTML;


                console.log(span)





              }
            },
              ///here

          )
        } else {
          alert("There are no active tabs")
        }
      })
    })

  }



}
