console.log("background.js is running")



chrome.action.onClicked.addListener(tab => {




  chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
    const tab = tabs[0];
    if (tab) {

      chrome.scripting.executeScript(
        {
          target:{tabId: tab.id!},
          func:()=>{
            // let element = document.createElement("link");
            // element.setAttribute("rel", "stylesheet");
            // element.setAttribute("type", "text/css");
            // element.setAttribute("href", "/tester/styles.css");
            // document.getElementsByTagName("head")[0].appendChild(element);


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
              div.style.width = '600px';
              div.style.scrollSnapType = 'y mandatory';



              // (document.getElementById('oframecdnplayer'))!.appendChild(div!)

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
            sideBar.style.width = '0px';
            sideBar.style.height = '100%';
            sideBar.style.overflowY = 'scroll';
            sideBar.style.flex  = '0 0 300px';



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

           function  translateFunc(text:string){

             const options = {
               method: 'POST',
               headers: {
                 'content-type': 'application/json',
                 'X-RapidAPI-Key': '2a7953aad3msh15ec642006a5884p11e6c8jsne8218a6d95ac',
                 'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
               },
               body: JSON.stringify({
                 from: "en",
                 to: "ru",
                 e: "",
                 q:text
               })


             };

           return   fetch('https://rapid-translate-multi-traduction.p.rapidapi.com/t', options)
               .then(response => response.json())
               // .then(response => console.log(response))
               // .catch(err => console.error(err));
           }









            let player = document.getElementById('player');
            let buttonElement = document.createElement('button');

            buttonElement.style.width = '30px';
            buttonElement.style.height = '30px';
            buttonElement.style.left = '30px';
            buttonElement.style.position = 'absolute';
            buttonElement.style.backgroundColor = 'red';
            buttonElement.style.zIndex = '999999';
            player!.appendChild(buttonElement);

            let englishTextArea = document.createElement('textarea');
            englishTextArea.style.width = '98%';
            englishTextArea.style.height = '20%';
            englishTextArea.style.resize = 'none';
            let russTextArea = document.createElement('textarea');
            russTextArea.style.width = '98%';
            russTextArea.style.height = '20%';
            russTextArea.style.resize = 'none';
            let leftSideBar = document.createElement('div');
            leftSideBar.style.backgroundColor = 'blue';
            leftSideBar.style.height= '100%';
            leftSideBar.style.width= '0px';
            leftSideBar.style.flex  = '0 0 300px';
            leftSideBar.appendChild(englishTextArea)
            leftSideBar.appendChild(russTextArea)


            buttonElement.addEventListener('click',()=>{



              // document.body.style.width = '100%';
              // document.body.style.height = '100%';
              let hideRightSideBarButton = document.createElement('div');
              let hideLeftSideBarButton = document.createElement('div');
              hideRightSideBarButton.style.zIndex = '10';
              hideLeftSideBarButton.style.zIndex = '10';
              hideRightSideBarButton.style.position = 'absolute';
              hideLeftSideBarButton.style.position = 'absolute';
              hideRightSideBarButton.style.right = '20px';
              hideLeftSideBarButton.style.left = '20px';
              hideRightSideBarButton.style.top = '50%';
              hideLeftSideBarButton.style.top = '50%';
              hideRightSideBarButton.style.width = '20px';
              hideLeftSideBarButton.style.width = '20px';
              hideRightSideBarButton.style.height = '20px';
              hideLeftSideBarButton.style.height = '20px';
              hideRightSideBarButton.style.backgroundColor = 'red';
              hideLeftSideBarButton.style.backgroundColor = 'red';
              hideRightSideBarButton.style.visibility = 'hidden';
              hideLeftSideBarButton.style.visibility = 'hidden';
              // let cdnplayer = document.getElementById('cdnplayer-container');
              let videoWrapper = document.createElement('div');
              videoWrapper!.addEventListener('mouseover',()=>{
                hideRightSideBarButton.style.visibility = 'visible';
                hideLeftSideBarButton.style.visibility = 'visible';
              })




              videoWrapper!.addEventListener('mouseleave',()=>{
                hideRightSideBarButton.style.visibility = 'hidden';
                hideLeftSideBarButton.style.visibility = 'hidden';
              })
              let leftOpen = true;
              let rightOpen = true;
              hideRightSideBarButton.addEventListener("click", ()=>{
                if (rightOpen) {
                  sideBar.style.flex = '0 0 0px'
                  rightOpen = false
                }
                else {
                  sideBar.style.flex = '0 0 300px'
                  rightOpen = true
                }

              })
              hideLeftSideBarButton.addEventListener("click", ()=>{
                if (leftOpen) {
                  leftSideBar.style.flex = '0 0 0px'
                  leftOpen = false
                }
                else {
                  leftSideBar.style.flex = '0 0 300px'
                  leftOpen = true
                }
              })
              hideLeftSideBarButton.style.visibility = 'visible';
              videoWrapper!.appendChild(hideLeftSideBarButton);
              videoWrapper!.appendChild(hideRightSideBarButton);
              videoWrapper.appendChild(div!);
              videoWrapper.style.position = 'relative'
              videoWrapper.style.flex = '10 0 640px'
              let video = document.getElementsByTagName('video')[0];
              video.controls = false;
              videoWrapper.appendChild(video);
              /////////////////////////////////////////////////////////////////////////////
              let customControls = document.createElement('div');
              customControls.id = 'video-controls';
              customControls.style.display = 'flex';
              customControls.style.width = '100%';
              customControls.style.height = '50px';
              customControls.style.backgroundColor = 'red';
              customControls.style.position = 'absolute';
              customControls.style.bottom = '10%';
              videoWrapper.appendChild(customControls);


              let playStopButton = document.createElement('button');
              playStopButton.style.flex = '1 0 50px'
              playStopButton.classList.add('btn-outline-success')
              let innerGlyphicon = document.createElement('i');
              innerGlyphicon.classList.add('fas')
              innerGlyphicon.classList.add('fa-play')
              customControls.appendChild(playStopButton);
              playStopButton.appendChild(innerGlyphicon);


              let slider = document.createElement('input')
              slider.type = 'range';
              slider.id = 'seek-bar';
              slider.style.flex = '10 0 50%';
              slider.value = '0';
              slider.min = '0';
              slider.max = '100';
              customControls.appendChild(slider);

              let sliderValue:any = slider.value

              //add mute button
              let mute_button = document.createElement('button');
              mute_button.id = 'mute';
              mute_button.style.flex = '1 0 10px';
              mute_button.style.backgroundColor = 'red'
              customControls.appendChild(mute_button);


              //add volume seek-bar
              let volumeWrapper = document.createElement('div');
              let volume_bar = document.createElement('input');
              volume_bar.type = 'range';
              volume_bar.min = '0';
              volume_bar.max = '1';
              volume_bar.step = '0.01';
              volume_bar.value = '0.5';
              volumeWrapper.appendChild(volume_bar);
              customControls.appendChild(volumeWrapper);





              let volumeBarValue:any = volume_bar.value








              let  fullscreen = document.createElement('button');
              fullscreen.classList.add('btn-outline-success');
              fullscreen.innerHTML = '<i  class="fa fa-expand"></i>';
              customControls.appendChild(fullscreen);


              function makeFullscreen() {



                if (!document.fullscreenElement) {

                  videoWrapper.requestFullscreen();

                  fullscreen.innerHTML = '<i class="fa fa-compress"></i>';
                } else {
                  if (document.exitFullscreen) {
                    video.controls = false
                    fullscreen.innerHTML ='<i  class="fa fa-expand"></i>';
                    document.exitFullscreen();
                  }
                }
              }

              fullscreen.addEventListener('click',()=>makeFullscreen())


              function play_or_pause() {
                if (video.paused){
                  video.play();
                  playStopButton.innerHTML = '<i class="fas fa-play"></i>'
                }else {
                  video.pause();
                  playStopButton.innerHTML = '<i  class="fas fa-play"></i>'
                }
              }

              video.addEventListener('click',()=>play_or_pause())

              video.addEventListener('dblclick',()=>makeFullscreen())


              let min:any = slider.min

              let max:any = slider.max



              let max_volume:any = volume_bar.max

              let min_volume:any = volume_bar.min
              let is_change_scrolled:boolean;

              volumeBarValue = volume_bar.value
              volumeWrapper.style.background =`linear-gradient(to right, white ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%, gray ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%)`






              volume_bar.addEventListener('input',()=>{
                volumeBarValue = volume_bar.value

                video.volume = volumeBarValue

                volumeWrapper.style.background =`linear-gradient(to right, white ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%, gray ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%)`



                volumeBarValue = volume_bar.value
                if (volumeBarValue === 0){

                  mute_button.innerHTML = '<i class="fa fa-volume-mute"></i>'

                  video.volume = 0;

                  video.muted = true;
                  is_change_scrolled = true;


                }else {
                  volumeBarValue = volume_bar.value
                  if (volumeBarValue < 0.5){

                    mute_button.innerHTML = '<i class="fa fa-volume-down"></i>'
                  } else {

                    mute_button.innerHTML = '<i class="fa fa-volume-up"></i>';


                  }
                }

              })




              sliderValue = slider.value
              slider.style.background = `linear-gradient(to right, #202020 ${(sliderValue-min)/(max-min)*100}%,gray ${(sliderValue-min)/(max-min)*100}%)`

              slider.addEventListener('input',()=>{
                sliderValue = slider.value
                video.currentTime = video.duration * (sliderValue / 100);
                sliderValue = slider.value
                slider.style.background = `linear-gradient(to right, #202020 ${(sliderValue-min)/(max-min)*100}%,gray ${(sliderValue-min)/(max-min)*100}%)`
              })

              mute_button.addEventListener('click',()=>{


                if (video.muted){

                  video.muted = false;

                  mute_button.innerHTML = '<i class="fa fa-volume-up"></i>'
                  volumeBarValue = volume_bar.value
                  volumeWrapper.style.background =`linear-gradient(to right, white ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%, gray ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%)`
                  if (is_change_scrolled){
                    is_change_scrolled = false;

                    video.volume=0.5

                    volumeBarValue = 0.5
                    volumeBarValue = volume_bar.value
                    volumeWrapper.style.background =`linear-gradient(to right, white ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%, gray ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%)`
                  }
                  else {
                    volumeBarValue = volume_bar.value
                    volumeWrapper.style.background =`linear-gradient(to right, white ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%, gray ${(volumeBarValue-min_volume)/(max_volume-min_volume)*100}%)`
                  }
                }else {


                  video.muted = true;

                  mute_button.innerHTML = '<i class="fa fa-volume-mute"></i>'

                  volumeWrapper.style.background ='grey';
                }
              })

              video.addEventListener('timeupdate',()=>{

                slider.style.background = `linear-gradient(to right, #202020 ${Math.round((video.currentTime * 100)/video.duration)}%,gray ${Math.round((video.currentTime * 100)/video.duration)}%)`

                console.log(Math.round((video.currentTime * 100)/video.duration))
              })


              slider.addEventListener('change',()=>{
                sliderValue = slider.value
                video.currentTime = video.duration * (sliderValue / 100);
              })

              slider.addEventListener('input',()=>{
                sliderValue = slider.value
                video.currentTime = video.duration * (sliderValue / 100);

              })





              customControls.hidden = false


              playStopButton.addEventListener('click',()=>play_or_pause());

              videoWrapper.addEventListener('mouseout',()=>{

                customControls.hidden = !video.paused;
              })

              videoWrapper.addEventListener("mouseover", ()=>{

                customControls.hidden = false;
              })















              /////////////////////////////////////////////////////////////////////////////

              let cdnplayer2 = document.getElementById('cdnplayer');
              cdnplayer2!.style.height = '100%';
              cdnplayer2!.style.width = '100%';
              videoWrapper!.style.height = '100%'
              videoWrapper!.style.flexGrow = '3'
              let theatreDiv = document.createElement('div');
              theatreDiv.style.marginTop = '40px'
              theatreDiv.style.width = '100%'
              theatreDiv.style.display = 'flex'
              theatreDiv.style.height = '570px'
              theatreDiv.style.alignContent = 'stretch'
              // theatreDiv.style.justifyContent = 'space-between'
              theatreDiv.style.backgroundColor = 'black'
              theatreDiv.appendChild(leftSideBar);
              theatreDiv.appendChild(videoWrapper);
              theatreDiv.appendChild(sideBar);
              document.body.appendChild(theatreDiv!);
              theatreDiv.tabIndex =1
              theatreDiv.focus()



              // Array.from(listPjsdiv).forEach((e:any)=>{
              //  let numb = parseInt(e.style.top);
              //   if (numb > 313){
              //
              //     e.style.visibility = 'hidden';
              //     // e.style.bottom = '10%';
              //
              //   }else if (numb === 313 ){
              //     e.style.visibility = 'hidden';
              //   }
              // });




            })
            let oframecdnplayer = document.getElementById('oframecdnplayer');









            let observer = new MutationObserver((mutations,observer)=>{

              mutations.forEach(muta=>{

                let nodeww= muta.target;
                if (nodeww.nodeName ==="PJSDIV"){
                  let nodeAsElement = (nodeww as HTMLElement);
                  let numberOfTop =  parseInt (nodeAsElement.style.top);
                  if (numberOfTop > 313){

                    nodeAsElement.style.top = 'unset';
                    nodeAsElement.style.bottom = '10%';
                    console.log(numberOfTop + ' numberOfTop')
                    console.log('QWEasdQWE')
                  }else if (numberOfTop === 313 ){
                    nodeAsElement.style.visibility = 'hidden';
                  }

                }





                if (muta.removedNodes.length===1 && muta.addedNodes.length===0 &&
                  muta.removedNodes[0].nodeName ==="SPAN"){

                  Array.from(div!.children).forEach(c => c.remove())
                  console.log("REMOVE ")

                }else if (muta.removedNodes.length===0 && muta.addedNodes.length===1 &&
                  muta.addedNodes[0].nodeName ==="SPAN"){

                  (muta.target as HTMLElement).style.visibility = 'hidden'

                  muta.target.childNodes.forEach(innerNode=>{
                    if (innerNode.nodeName === "SPAN"){
                      let text = (innerNode as Element).innerHTML;
                      let block = document.createElement('div')
                      block.style.display = 'flex';
                      let translateButton = document.createElement('button');
                      let buttonInlineBlock = document.createElement('div');
                      buttonInlineBlock.style.display = 'inline-block'
                      buttonInlineBlock.style.width = '15%'
                      let wrapForButton= document.createElement('div');
                      wrapForButton.style.display = 'flex';
                      wrapForButton.style.flexDirection = 'column';
                      wrapForButton.style.width = '100%';
                      wrapForButton.style.height = '100%';
                      wrapForButton.style.justifyContent = 'center';
                      buttonInlineBlock.appendChild(wrapForButton)
                      // translateButton.style.height = '10px'
                      translateButton.style.height = '25px'
                      translateButton.style.width = '90%'
                      wrapForButton.appendChild(translateButton)
                      block.appendChild(buttonInlineBlock);
                      let translateText = document.createElement('div')
                      translateText.style.display = 'inline-block';
                      translateText.style.width = '85%';
                      let innerFlexWrap = document.createElement('div');
                      innerFlexWrap.style.display = 'flex';
                      innerFlexWrap.style.flexWrap = 'wrap';
                      translateText.appendChild(innerFlexWrap);
                      block.appendChild(translateText)
                      text = text.replace("<br>"," ");
                      text = text.replace(/[^,?a-zA-Z ]/g, '')

                      translateButton.addEventListener('click',()=>{
                        englishTextArea.innerText = text
                        translateFunc(text).then(data=>{
                          russTextArea.innerText = data[0]
                          }
                        )
                      })


                      block.style.wordBreak = 'break-word'
                      block.style.marginBottom = '25px'
                      block.style.background = 'rgba(0,0,0,0.7)';


                      text.split(" ").forEach(innerTxt => {
                        let innerDiv2 = document.createElement("a")
                        let innerDiv = document.createElement('div');




                        innerDiv.innerText = innerTxt
                        innerDiv2.innerText = innerTxt
                        innerDiv.style.marginRight = "10px"
                        innerDiv2.style.marginRight = "5px"
                        div!.appendChild(innerDiv)
                        translateText.appendChild(innerDiv2)

                        innerDiv.classList.add('popup')
                        let innerSpan = document.createElement('div');
                        innerSpan.classList.add('popuptext')

                        innerDiv.appendChild(innerSpan);
                        innerDiv.addEventListener('click',()=>{

                          translateFunc(innerTxt).then(data=>{
                            innerSpan.innerHTML = data[0];
                            innerSpan.style.visibility = 'visible'
                            innerSpan.classList.add("show")
                            console.log("SHOW")
                          })
                        })

                        innerDiv.addEventListener('mouseleave',()=>{
                          innerSpan.style.visibility = 'hidden'
                          console.log("SHOW")
                        })


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
                    block.style.display = 'flex';
                    let translateButton = document.createElement('button');
                    let buttonInlineBlock = document.createElement('div');
                    buttonInlineBlock.style.display = 'inline-block'
                    buttonInlineBlock.style.width = '15%'
                    let wrapForButton= document.createElement('div');
                    wrapForButton.style.display = 'flex';
                    wrapForButton.style.flexDirection = 'column';
                    wrapForButton.style.width = '100%';
                    wrapForButton.style.height = '100%';
                    wrapForButton.style.justifyContent = 'center';
                    buttonInlineBlock.appendChild(wrapForButton)
                    // translateButton.style.height = '10px'
                    translateButton.style.height = '25px'
                    translateButton.style.width = '90%'
                    wrapForButton.appendChild(translateButton)
                    block.appendChild(buttonInlineBlock);
                    let translateText = document.createElement('div')
                    translateText.style.display = 'inline-block';
                    translateText.style.width = '85%';
                    let innerFlexWrap = document.createElement('div');
                    innerFlexWrap.style.display = 'flex';
                    innerFlexWrap.style.flexWrap = 'wrap';
                    translateText.appendChild(innerFlexWrap);
                    block.appendChild(translateText)
                    text = text.replace("<br>"," ");
                    text = text.replace(/[^,?a-zA-Z ]/g, '')

                    translateButton.addEventListener('click',()=>{
                      englishTextArea.innerText = text
                      translateFunc(text).then(data=>{
                          russTextArea.innerText = data[0]
                        }
                      )
                    })

                    block.style.wordBreak = 'break-word'
                    block.style.marginBottom = '25px'
                    block.style.background = 'rgba(0,0,0,0.7)';

                    text.split(" ").forEach(innerTxt => {
                      let innerDiv2 = document.createElement("a")
                      let innerDiv = document.createElement('div');



                      innerDiv.innerText = innerTxt
                      innerDiv2.innerText = innerTxt
                      innerDiv.style.marginRight = "10px"
                      innerDiv2.style.marginRight = "5px"
                      div!.appendChild(innerDiv)
                      translateText.appendChild(innerDiv2)

                      innerDiv.classList.add('popup')
                      let innerSpan = document.createElement('div');

                      innerSpan.classList.add('popuptext')

                      innerDiv.appendChild(innerSpan);
                      innerDiv.addEventListener('click',()=>{

                         translateFunc(innerTxt).then(data=>{
                           innerSpan.innerHTML = data[0];
                           innerSpan.style.visibility = 'visible'
                           innerSpan.classList.add("show")
                           console.log("SHOW")
                         })
                      })
                      innerDiv.addEventListener('mouseleave',()=>{
                        innerSpan.style.visibility = 'hidden'
                        console.log("SHOW")
                      })



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
