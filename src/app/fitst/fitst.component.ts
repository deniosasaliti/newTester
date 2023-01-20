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



                const config = { attributes: true, childList: true, subtree: true };
                let observer = new MutationObserver((mutations, observer)=>{


                mutations.forEach(mutation=>{
                  mutation.target.childNodes.forEach(innerNode=>{
                          if (innerNode.nodeName ==="SPAN"){

                           result = (innerNode as Element).innerHTML
                           let strings:string[] = []
                            let nodes:Node[] = []
                            if (div) {



                                   strings = result.split(' ');
                                  strings.forEach((innerSplittedSt)=>{

                                    let InnerDivSplittedBySpace = document.createElement('div');

                                    if (div) {
                                      div.appendChild(InnerDivSplittedBySpace as Node)

                                      InnerDivSplittedBySpace.innerText = innerSplittedSt
                                    }
                                  })


                            }

                          }
                          })
                })

                  console.log(result)



                })

                let elementById = document.getElementById('oframecdnplayer')!.getElementsByTagName("span")[0] as Node;

                if (elementById) {
                  console.log(elementById + " ArrayLength")
                  observer.observe(elementById, config);
                }
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
    // if (result.indexOf('<br>') !== -1){
    //   let BrSplit = result.split('<br>');
    //   BrSplit.forEach((splittedString)=>{
    //     let divSplittedByBr = document.createElement('div');
    //     node.appendChild(divSplittedByBr)
    //     splittedString.split(' ').forEach((innerSplittedSt)=>{
    //       let InnerDivSplittedBySpace = document.createElement('div');
    //       InnerDivSplittedBySpace.innerText = innerSplittedSt
    //     })
    //   })
    // }
  node.innerText = result
}

}
