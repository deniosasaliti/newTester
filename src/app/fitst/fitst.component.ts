import {Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-fitst',
  templateUrl: './fitst.component.html',
  styleUrls: ['./fitst.component.css']
})
export class FitstComponent implements OnInit,OnDestroy{

  text:string = "qwe"





  ngOnInit(): void {



    chrome.tabs.query({active: true,currentWindow: true }, (tabs)=> {
      const tab = tabs[0];
      if (tab) {
        chrome.scripting.executeScript(
          {
            target:{tabId: tab.id!},
            func:()=>{
              let map:any = []
              let result:string =""
              let div=document.getElementById("qwe")
              if (div==null) {
                div = document.createElement("div");
                div.id = "qwe"
                div.style.zIndex = '1';
                div.style.color = 'red';
                div.style.background = 'black';
                div.style.visibility = 'visible';
                div.style.left = '10%';
                div.style.top = '10%';
                div.style.position = 'relative';


                (document.getElementById('oframecdnplayer') as Node).appendChild(div)

              }



              const config = {

                childList: true
              };

              let counter =0;




              let observer = new MutationObserver((mutations,observer)=>{

                let observer2 = new MutationObserver((mutations2,observer2222)=>{
                  let innerHTML2 = (mutations[0].target.childNodes[0] as Element).innerHTML;
                  if (innerHTML2 !=innerHTML) {
                    Array.from(div!.children).forEach(c => c.remove())
                    counter=0;
                    observer.observe((pjsdiv as Node), config);
                    observer2222.disconnect()
                  }

                })

                counter++;
                let innerHTML = (mutations[0].target.childNodes[0] as Element).innerHTML;
                console.log(innerHTML)
                let strings = innerHTML.split(' ')
                strings.forEach(st=>{
                  let innerDiv = document.createElement('div');
                  if (div){
                    innerDiv.innerText = st
                    div.appendChild(innerDiv as Node)
                  }
                })


                if (counter==1){
                  observer2.observe((pjsdiv as Node), config);
                  observer.disconnect();
                }
              })

              let elementById = document.getElementById('oframecdnplayer')!;

              let pjsdiv =  elementById.getElementsByTagName('pjsdiv').item(133)


              observer.observe((pjsdiv as Node), config);








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

  madeDiv(result:string,node:any){
    let strings =  result.split(' ');
    strings.forEach((innerSplittedSt)=>{

      let InnerDivSplittedBySpace = document.createElement('div');



      console.log("into inner div")
      node!.appendChild(InnerDivSplittedBySpace as Node)

      InnerDivSplittedBySpace.innerText = innerSplittedSt

    })
  }

}
