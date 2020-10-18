import sys from "../assets/cases/systrarna-pa-naset.jpg"
import oc from "../assets/cases/onecake.jpg"
import kw from "../assets/cases/kitchenwiz.jpg"
// import cz from "../assets/cases/coldzyme.jpg"
import nk from "../assets/cases/nkporslin.jpg"
import ocfeature from "../assets/cases/onecake-feature.jpg"
import ockwvideo from "../assets/cases/onecake-kitchenwiz.mp4"
import czfeature from "../assets/cases/cz-feature.jpg"
import czvideo1 from "../assets/cases/cz1.mp4"
import czvideo2 from "../assets/cases/cz2.mp4"
import nkfeature from "../assets/cases/nk-feature.jpg"
import nkimg from "../assets/cases/nkimg.jpg"
import nkvideo from "../assets/cases/nkvideo.mp4"
import sysfeature from "../assets/cases/sys-feature.jpg"
import sysimg2 from "../assets/cases/sysimg2.jpg"

let cases = [
  {
    sn: "onecake-kitchenwiz",
    name: "Ett färgsprakande event",
    company: "Onecake / Kitchenwiz",
    desc: "OneCake och Kitchenwiz är två relativt nystartade företag som arbetar för att sprida kännedom om deras varumärke. Vårt uppdrag var att hjälpa till i deras resa att nå ut med sina varumärken till nya målgrupper på ett snabbt och effektivt sätt genom sociala medier.",
    featureImg:
      ocfeature,
    img: [
      oc,
      kw,
    ],
    website: "#",
    color: "#be3b3b",
    sections: [
      {
        title: "OneCake",
        img: oc,
        text: "OneCake, ett familjeägt företag som säljer farmors Lisbeths supergoda frystårtor över hela Sverige. Tårtorna är av högsta kvalité och helt fria från nötter, gluten och palmolja. OneCake driver också ett rosaglittrande café vid charmiga Jonsereds fabriker där man kan avnjuta tårtan.",
      },
      {
        title: "Kitchenwiz",
        img: kw,
        text: "Kitchenwiz är ett företag som svarar på den ständiga överhängande frågan – Vad ska vi äta idag? De förser hushåll med smaskig vardagsmat gjorda på bra råvaror utan tillsatser genom sin middagslösning ”Already” och färskfrysta rätterna ”Backup”. Snabbt, gott och enkelt!",
        style: "right",
      },
      {
        title: "Vad vi gjorde",
        video: ockwvideo,
        text: "Vi skapade ett färgsprakande event i OneCakes lokaler med en gästlista innehållande influencers med en stor följarskara. Med denna gästlista skapade vi en stor räckvidd och spridning för våra kunders varumärken på ett snabbt och effektivt sätt. Vi kryddade eventet med våra sponsorers tjänster för att skapa spänning, förväntan, överraskningsmoment och för att få ett attraktivt bild- och filmmaterial för gästernas sociala kanaler. Genom sociala medier träffade vi rätt målgrupp och tillsammans har vi nått ut till en stor följarskara över hela Sverige.",
      }
    ],
    btnTitle: "Vill ni också synas?"
  },
  {
    sn: "coldzyme",
    name: "ColdZyme, munsprayen som skyddar dig mot förkylning",
    company: "Enzymatica",
    desc: "Vi fick i uppdrag att driva ColdZymes sociala medier i Sverige och Danmark för att öka kännedom kring produkten samt stärka och skapa engagemang kring varumärket.",
    featureImg: czfeature,
    img: [
      czfeature,
    ],
    website: "#",
    color: "#4e2c6d",
    sections: [
      {
        title: "Enzymatica",
        video: czvideo1,
        text: "De svenska bioteknikbolaget Encymatica har efter en upptäckt av det marina enzymet Trypsin på 1970-talet, världspatent och rättigheter att sälja produkter innehållande Trypsin. Enzymet är huvudingrediensen i munsprayen ColdZyme och skapar en skyddande barriär i mun och svalg och reducerar därmed risken för en förkylning.",
      },
      {
        title: "Vad vi gjorde",
        video: czvideo2,
        text: "Vi startade i en nulägesanalys & omvärldsbevakning och satte upp en strategi som passade Enzymaticas affärsmål. Uppdraget är pågående och idag väcker vi intresse varje dag hos nya målgrupper genom att planera och publicera attraktivt och engagerande content på Coldzymes Instagram- och Facebooksida i Sverige och Danmark.",
        style: "right",
      },
    ],
    btnTitle: "Behöver ni hjälp med era sociala medier?"
  },
  {
    sn: "nk-kok-design",
    name: "Porslinlansering på Nordiska Kompaniet",
    company: "NK Kök & Design",
    desc: "NK Kök & Design stod inför en lansering av ett nytt porslin, Stone-kollektionen från Nicolas Vahé och vi ordnade en mysig höstfrukost som serverades på det vackra porslinet till några av Göteborgs största influencers.",
    featureImg: nkfeature,
    img: [
      nk,
    ],
    website: "#",
    color: "#d193b5",
    sections: [
      {
        title: "NK Kök & Design",
        img: nkimg,
        text: "NK Kök & Design ligger i Nordiska Kompaniet, Göteborg och som kund hittar du noggrant utvalda varumärken inom hem och kök i hög kvalitet och med design i fokus. Nicolas Vahé är en utav de varumärken som finns till försäljning och detta varumärke erbjuder en mängd klassiska och nyskapande produkter med en touch av både det franska och skandinaviska köket.",
      },
      {
        title: "Vad vi gjorde",
        video: nkvideo,
        text: "Eventet blev en succé! Porslinet som är tillverkat i stengods och har en rustik look i skiftande gråvita nyanser kom till sin rätta med de vackra och Instagramvänliga frukosträtterna på. NK Kök & Design fick en stor spridning i sociala medier genom influencers och sålde flera produkter under eventets gång.",
        style: "right",
      },
    ],
    btnTitle: "Har ni en produkt ni vill marknadsföra?"
  },
  {
    sn: "systrarna-pa-naset",
    name: "Kläder till de små",
    company: "Systrarna på Näset",
    desc: "Systrarna på Näset ligger precis som det låter, ute vid Näset i Göteborg på samma tomt som systrarnas sommarhus. Eftersom butiksläget inte är allmänt känt så behövde Systrarna på Näset ett lyft för att få en ökad kännedom kring deras varumärke och butiksplats gentemot sin målgrupp för att öka sin försäljning.",
    featureImg: sysfeature,
    img: [ 
      sys
    ],
    website: "#",
    color: "#2b7c6f",
    sections: [
      {
        title: "Systrarna på Näset",
        img: sys,
        text: "Systrarna på Näset är en liten butik som drivs av två systrar som är 9 och 11 år gamla. Under större delen av året bor de i Holland och spenderar sina somrar på Näset. Systrarnas passion för att leka affär var så stor att deras föräldrar till slut sa att de kunde öppna upp en riktig butik i sin lekstuga över sommaren. Sagt och gjort! Nu driver de sin egna butik i den gamla lekstugan under somrarna och säljer kläder från varumärkena Maxomorra och Meyadey, samt en del keramik, inredning och annat smått och gott.",
      },
      {
        title: "Vad vi gjorde",
        img: sysimg2,
        text: "Vi förvandlade systrarnas trädgård på Näset till ett stort klädkalas för noga utvalda influencers. Gästerna fick träffa systrarna i deras butik och mingla bland de vackra färgglada kläderna ute i trädgården. Vi lyckades att skapa ett stort engagemang hos de inbjudna gästerna genom ett bra strategisk upplägg och engagerande aktiviteter. Systrarna på Näster sålde en hel del under eventet, nådde ut med sitt varumärke & butiksplats till sin målgrupp och ökade sin försäljning under sommaren.",
        style: "right",
      },
    ],
    btnTitle: "Vill ni också synas?"
  },
];

export default cases;
