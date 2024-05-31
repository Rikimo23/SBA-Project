const pokemon = [
    {
        name: "Breath Of The Wild",
        subname: "BOTW",
        description: "Open World Adventure Game",
        image : "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },

    {
        name: "Metal Gear Solid 3",
        subname: "MGS3",
        description: "Stealth Game",
        image : "https://upload.wikimedia.org/wikipedia/en/b/b3/Mgs3box.jpg"
    },
    {
        name: "Elden Ring",
        subname: "ER",
        description: "Fantasy Action-RPG Adventure",
        image : "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg"
    },

    {
        name: "Psi Ops The Midgate Conspiracy",
        subname: "POTMC",
        description: "Action Adventure Game",
        image : "https://upload.wikimedia.org/wikipedia/en/b/bc/Psi-Ops_-_The_Mindgate_Conspiracy_Coverart.png"
    },
    {
        name: "Def Jam Fight for Nyc",
        subname: "DJFFN",
        description: "Fighting Game",
        image : "https://upload.wikimedia.org/wikipedia/en/3/3a/Def_Jam_Fight_for_NY.jpg"
    },

    {
        name: "Tenchu Wrath Of Heaven",
        subname: "TWOH",
        description: "Stealth Adventure",
        image : "https://upload.wikimedia.org/wikipedia/en/3/31/Tenchu_Wrath_of_Heaven.jpg"
    }
]

console.log(pokemon)

const container = document.getElementById("container")

const form = document.querySelector(".form")
const loadingBar = document.querySelector(".loading-bar")
const submitButton = document.querySelector("#btn")


  submitButton.addEventListener( "click",(e)=>{
    let values = [...document.forms["form"].getElementsByTagName("input")].map(input => input.value)

    console.log(values)

    
    if( values.includes("")){
alert("Please fill out all the forms")

    } else{
        confirm("Are you sure you want to add game?")


    }
    e.preventDefault()
    loadingBar.classList.remove("hide")

    setTimeout(() => {
       loadingBar.classList.add("hide")
       let values = [...document.forms["form"].getElementsByTagName("input")].map(input => input.value)

       console.log(values)
   
      let pokemonData =  {
           name: values[0],
           subname: values[1],
           description: values[2],
           image : values[3]
       }
       MakeTheCards(pokemonData)
       
    form.reset()
      }, 2000);
  })




  for (let i = 0; i < pokemon.length; i++){

    MakeTheCards(pokemon[i])
  }

function MakeTheCards(pokemon){
    
    let column = document.createElement("div")
    column.classList.add("column")
    container.append(column)

//1st Part of Card
    let uiCard = document.createElement("div")
   uiCard.className = "ui card"
    column.append(uiCard)

    let imageContainer = document.createElement("div")
    imageContainer.className = "image"
    uiCard.appendChild(imageContainer)

    let image = document.createElement("img")
    image.src = pokemon.image
    imageContainer.appendChild(image)
//2nd Part Of Cards

    let content = document.createElement("div")
    content.classList.add("content")
    uiCard.appendChild(content)

    let header = document.createElement("a")
    header.classList.add("header")
    header.innerText = pokemon.name
    content.appendChild(header)

    let meta = document.createElement("div")
    meta.classList.add("meta")
    content.appendChild(meta)


    let data = document.createElement("span")
    data.classList.add("date")
    data.innerText = pokemon.subname
    meta.appendChild(data)

    let description = document.createElement("div")
    description.classList.add("description")
    description.innerText = pokemon.description
    content.appendChild(description)


    //Part 3

    let extraContent = document.createElement("div")
    extraContent.className = " extra content"
    uiCard.appendChild(extraContent)

    let aContainer = document.createElement("a")
  
    extraContent.appendChild(aContainer)

    let cameraIcon = document.createElement("i")
//     cameraIcon.className = "checkmark icon"
// aContainer.appendChild(cameraIcon)
aContainer.innerHTML = `<i class=" x icon red status"></i>Not Collected`

aContainer.addEventListener("click", (e)=>{
   if (e.target.innerHTML == `<i class=" x icon red status"></i>Not Collected`){
    aContainer.innerHTML =  `<i class=" check icon green status"></i>Collected`
   } else {
   aContainer.innerHTML = `<i class=" x icon red status"></i>Not Collected`
   }
})

}