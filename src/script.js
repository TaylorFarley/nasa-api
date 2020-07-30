const key=config.apiKey

function nasaPic() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=`+key)
        .then(result => {


            return result.json()
        })
        .then(data => {
            console.log(data)
            const showmethis = data.url
            const descript = data.explanation
            console.log(showmethis)
            
           // document.getElementById("img1").src = showmethis;
        //document.body.style.backgroundImage = "url('img_tree.png')";
        document.getElementById("description").style.color='white'
            document.getElementById("description").innerHTML = descript
        document.body.style.backgroundImage = "url('"+showmethis+"')";
        })

        .catch(error => console.log(error))
}



nasaPic()


async function asteroidData() {
    try {
        const output = []
        const result = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=af8nVd58gdMHrVIo1j6zSvEa5Jt3ELygBEDzLcw5`)

        const data = await result.json()
        const neo = await data.near_earth_objects["2015-09-08"]
        neo.forEach(el => {
            if (el.is_potentially_hazardous_asteroid === true)
                {
                console.log(`potentiall hazardous and near earth item found name: ${el.name}`)
            const warning = el.name;
            output.push(el.name)
                    
                    document.getElementById('asteroidAlert').style.color='white'
            document.getElementById('asteroidAlert').innerHTML = `Closest hazardous meteor: ${el.name}`
}
        })
    return output
    } 
    
    catch (error) {
        alert(error)
    }

}
let output;
asteroidData().then(dummy=>{
    output=dummy
    console.log('!Outside Promise, this is being returned from the function and then using a promise to assign : ' + output)
})
