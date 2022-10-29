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

let footerImg = document.getElementById('footerimg')

let footerCards = [
    {
        images:'images/3cardsimg1.JPEG',
        h2txt:'How to search for Lagos real estate/properties on t...',
        h4txt:'Searching for the perfect home is a rigorous process that requires time and patience. Becoming a...'
    },
    {
        images:'images/3cardsimg2.JPEG',
        h2txt:'Lagos housing market predictions for 2022...',
        h4txt:'Recently, the Nigerian real estate industry has been negatively impacted by the COVID-19...'
    },
    {
        images:'images/3cardimg3.JPEG',
        h2txt:'Things buyers need to consider when buying or investing in real...',
        h4txt:'Purchasing a property is one of the most important decisions you’ll ever make in your life. A...'
    }
];

let lastImg =()=>{
    return (footerImg.innerHTML = footerCards.map((y)=>{
        let {images,h2txt,h4txt} = y;
        return `
        <div class="ending-pattern">
            <div id="footerimg" class="endcardone">
            <img src=${images}>
            <p class="endcardone-text">
                <h2 class="endcardoneunderh-text">${h2txt}</h2>
                <h4 class="endcardonelastone-text">${h4txt}</h4>
            </p>
            </div>
        </div>
        `
    }).join(''));
};

lastImg()