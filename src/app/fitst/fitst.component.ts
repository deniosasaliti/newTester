import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-fitst',
  templateUrl: './fitst.component.html',
  styleUrls: ['./fitst.component.css']
})
export class FitstComponent implements OnInit,OnDestroy{

  text:string = "qwe"



  ngOnInit(): void {



      chrome.tabs.query({active: true}, (tabs)=> {
        const tab = tabs[0];
        if (tab) {
          chrome.scripting.executeScript(
            {
              target:{tabId: tab.id!, allFrames: true},
              func:()=>{

                const config = { attributes: true, childList: true, subtree: true };
                let observer = new MutationObserver((mutations, observer)=>{
                mutations.forEach(mutation=>{
                  mutation.target.childNodes.forEach(innerNode=>{
                          if (innerNode.nodeName ==="SPAN"){
                            console.log("in_span" + (innerNode as Element).innerHTML)
                          }
                          })


                })
                })
                observer.observe(document, config);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              //   document.addEventListener('DOMNodeInserted', ()=>{
              //     let pjsdiv = document.getElementById("oframecdnplayer")!;
              //
              //       let span = pjsdiv.getElementsByTagName("span")!;
              //
              //         let innerText = ""
              //         if (innerText != span[0].innerHTML)
              //           innerText = span[0].innerHTML
              //         console.log(innerText)
              //     this.text = innerText;
              //
              //
              //
              //
              //   });
                ///////////////////////////////////////////////////////////////////////////////////////////////////////






              }
            },
          )
        } else {
          alert("There are no active tabs")
        }
      })


  }

  ngOnDestroy(): void {

  }



}
