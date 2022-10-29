let houseImg = document.getElementById('houseimg')

let imageGrid =[
    {
        img:'images/image1.JPEG',
        btntext:`NS
        ${` <br>`}
        homes 12`,
        h2:'Quality meets Affordability',
        housetxt:' A neighborhood of tastefully finished must-have homes specifically designed to match varying modern lifestyles with luxury living at an affordable price.'
    },
    {
        img:'images/image2.JPEG',
        btntext:`imperial
        ${` <br>`}
        oak`,
        h2:'Comfort in Style',
        housetxt:' Built with the user’s comfort as the most important consideration, this unit offers maximum satisfaction for the owner.'
    },
    {
        img:'images/image3.JPEG alt="firstone" ',
        btntext:`Atlantic
        ${` <br>`}
        ville`,
        h2:'Maximise your Home Value',
        housetxt:'  Each property boasts of excellent rental and resell value which indicates an excellent return rate for the buyer.'
    },
    {
        img:'images/image4.JPEG',
        btntext:`NS
        ${` <br>`}
        Home 15`,
        h2:'Live Life Large',
        housetxt:' Each unit provides essential requirements for a contemporary family to live in style within affordable budget which in reality, is a gift.'
    }];


let generateimage =()=>{
    return(houseImg.innerHTML = imageGrid.map ((x)=>{
        let {img,btntext,h2,housetxt} = x;
        return `
        <div id="houseimg" class="mainimgdiv">
          <div class="firsthousingdiv">
            <div class="firstimg">
              <img src=${img} alt="firstone" class="imgss">
              <div class="imperial-oak">
               <a href="#" class="atag"><span class="nsopor">${btntext}</a>
              </div>
              <h2 class="under-texts">${h2}</h2>
            </div>
            <p class="housetxt">
            ${x.housetxt}
            </p>
        </div>
        `
    }).join(''));
};
generateimage();