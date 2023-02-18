console.log("background.js is running")



chrome.action.onClicked.addListener(tab => {




  chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
    const tab = tabs[0];
    if (tab) {

      chrome.scripting.executeScript(
        {
          target:{tabId: tab.id!},
          func:()=>{



            console.log("www")
            alert("SSSSSSS")



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
              div.style.position = 'absolute';
              div.style.width = '200px';
              div.style.scrollSnapType = 'y mandatory';



              (document.getElementById('oframecdnplayer'))!.appendChild(div!)

            }



            const config = {
              childList: true,
              attributes: true,
              characterData: true,
              subtree: true,
              attributeOldValue: true,
              characterDataOldValue: true
            };

            let sideBar = document.createElement("div");
            sideBar.id = "qwe2"
            sideBar.style.zIndex = '10000';
            sideBar.style.background = 'rgba(0,0,0,0.2)';
            sideBar.style.visibility = 'visible';
            sideBar.style.right = '0px';
            sideBar.style.position = 'absolute';
            sideBar.style.width = '250px';
            sideBar.style.height = '300px';
            sideBar.style.overflowY = 'scroll';



            let translate =  document.createElement("a");
            translate.id = "translate";
            translate.style.zIndex = '10000';
            translate.style.left = '0px';
            translate.style.position = 'absolute';
            translate.style.width = '250px';
            translate.style.height = '300px';
            translate.innerHTML = "red";


            // const translate2 = require('google-translate-api');

            // translate2('Ik spreek Engels', {to: 'en'}).then((res:any) => {
            //   console.log(res.text);
            //   //=> I speak English
            //   console.log(res.from.language.iso);
            //   //=> nl
            // }).catch((err:any) => {
            //   console.error(err);
            // });




            // const encodedParams = new URLSearchParams();
            // encodedParams.append("q", "Hello, world!");
            // encodedParams.append("target", "ru");
            // encodedParams.append("source", "en");
            //
            // const options = {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/x-www-form-urlencoded',
            //         'Accept-Encoding': 'application/gzip',
            //         'X-RapidAPI-Key': '2a7953aad3msh15ec642006a5884p11e6c8jsne8218a6d95ac',
            //         'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            //     },
            //     body: encodedParams
            // };
            //
            // fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
            //     .then(response => response.json())
            //     .then(response => console.log(response))
            //     .catch(err => console.error(err));








            let player = document.getElementById('player');
            let buttonElement = document.createElement('button');

            buttonElement.style.width = '30px';
            buttonElement.style.height = '30px';
            buttonElement.style.left = '30px';
            buttonElement.style.position = 'absolute';
            buttonElement.style.backgroundColor = 'red';
            buttonElement.style.zIndex = '999999';
            player!.appendChild(buttonElement);
            buttonElement.addEventListener('click',()=>{



              document.body.style.width = '100%';
              document.body.style.height = '100%';
              let cdnplayer = document.getElementById('cdnplayer-container');
              cdnplayer!.style.height = '100%'
              let theatreDiv = document.createElement('div');
              theatreDiv.style.width = '100%'
              theatreDiv.style.height = '600px'
              theatreDiv.style.flex = '100%'
              // theatreDiv.style.justifyContent = 'space-between'
              theatreDiv.style.backgroundColor = 'red'
              theatreDiv.appendChild(cdnplayer!);
              document.body.appendChild(theatreDiv!);
              theatreDiv.tabIndex =1
              theatreDiv.focus()
              let listPjsdiv = document.getElementsByTagName('pjsdiv');
              let cdnplayer2 = document.getElementById('cdnplayer');
              cdnplayer2!.style.height = '100%';
              let videoElement = document.getElementsByTagName('video')[0];


              Array.from(listPjsdiv).forEach((e:any)=>{
               let numb = parseInt(e.style.top);
                if (numb > 300){
                  e.style.top = numb + 300 + 'px';
                }
              });




            })
            let elementById = document.getElementById('oframecdnplayer');
            elementById!.appendChild(sideBar);


            let pjsdiv =  elementById!.getElementsByTagName('pjsdiv').item(133)


            // let observer2 = new MutationObserver((mutations,observer)=>{
            //   mutations.forEach(muta=>{
            //    let nodeww= muta.target;
            //     if (nodeww.nodeName ==="PJSDIV"){
            //       let nodeAsElement = (nodeww as HTMLElement);
            //      let numberOfTop =  parseInt (nodeAsElement.style.top);
            //      if (numberOfTop > 300){
            //        nodeAsElement.style.top = '500px';
            //        console.log(numberOfTop + ' numberOfTop')
            //        console.log('QWEasdQWE')
            //      }
            //
            //     }
            //   });
            //
            //
            //   let pjsdiv =  elementById!.getElementsByTagName('pjsdiv');
            //   Array.from(pjsdiv).forEach((e:any)=>{
            //
            //   });
            //
            // });
            // observer2.observe(document,config);
            let observer = new MutationObserver((mutations,observer)=>{

              mutations.forEach(muta=>{

                if (muta.removedNodes.length===1 && muta.addedNodes.length===0 &&
                  muta.removedNodes[0].nodeName ==="SPAN"){

                  Array.from(div!.children).forEach(c => c.remove())
                  console.log("REMOVE ")

                }else if (muta.removedNodes.length===0 && muta.addedNodes.length===1 &&
                  muta.addedNodes[0].nodeName ==="SPAN"){

                  muta.target.childNodes.forEach(innerNode=>{
                    if (innerNode.nodeName === "SPAN"){
                      let text = (innerNode as Element).innerHTML;
                      let block = document.createElement('div')
                      block.style.wordBreak = 'break-word'
                      block.style.marginBottom = '25px'
                      block.style.background = 'rgba(0,0,0,0.7)';

                      text.split(" ").forEach(innerTxt => {
                        let innerDiv2 = document.createElement("a")
                        let innerDiv = document.createElement('a');
                        innerDiv.innerText = innerTxt
                        innerDiv2.innerText = innerTxt
                        innerDiv.style.marginRight = "10px"
                        innerDiv2.style.marginRight = "5px"
                        div!.appendChild(innerDiv)
                        block.appendChild(innerDiv2)
                      })
                      sideBar.appendChild(block)
                      sideBar.scrollTop = sideBar.scrollHeight
                      console.log("ADD")
                      console.log(text)
                    }
                  })
                }else if(muta.removedNodes.length===1 && muta.addedNodes.length===1
                          && muta.removedNodes[0].nodeName ==="SPAN"
                          && muta.addedNodes[0].nodeName ==="SPAN") {
                  if ((muta.removedNodes[0] as Element).innerHTML !== (muta.addedNodes[0] as Element).innerHTML){
                    Array.from(div!.children).forEach(c => c.remove())
                    let text = (muta.addedNodes[0] as Element).innerHTML;
                    let block = document.createElement('div')
                    block.style.wordBreak = 'break-word'
                    block.style.marginBottom = '25px'
                    block.style.background = 'rgba(0,0,0,0.7)';
                    text.split(" ").forEach(innerTxt => {
                      let innerDiv2 = document.createElement("a")
                      let innerDiv = document.createElement('a');
                      innerDiv.innerText = innerTxt
                      innerDiv2.innerText = innerTxt
                      innerDiv.style.marginRight = "10px"
                      innerDiv2.style.marginRight = "5px"
                      div!.appendChild(innerDiv)
                      block.appendChild(innerDiv2)

                    })
                    sideBar.appendChild(block)
                    sideBar.scrollTop = sideBar.scrollHeight
                    console.log("CHANGE")
                    console.log(text)
                  }

                }
              })













/////////////////////////////////
//
            })
            observer.observe(document, config);

          }
        }
      )
    }
  });



});
