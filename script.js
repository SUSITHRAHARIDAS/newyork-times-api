var outer = document.createElement('div')
outer.className =('container')

var contentcontainer = document.createElement('div')



async function catcontent(section) {
	try {
		contentcontainer.innerHTML = ''
		var url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=3OB0bcgpIW3TVAPG7VwV58Mu1cLp50WP`
        var data =  await fetch(url)
        var fdata = await data.json()
        var cont = fdata.results
         console.log(cont)
        for(i of cont) 
        {
        var content = document.createElement("div")
        content.setAttribute("class","container")
        content.setAttribute('style','margin:20px;border :1px solid black')
       

        var row = document.createElement("div")
        row.setAttribute("class","row")
        

        var card = document.createElement("div")
        card.setAttribute("class","card")

        var newscat = document.createElement("div")
        newscat.setAttribute("class","sectioncard")
        newscat.innerHTML = section.toUpperCase()

        var title = document.createElement("div")
        title.setAttribute("class","titlecard")
        title.innerHTML = i["title"]

        var date = document.createElement("div")
        date.setAttribute("class","datecard")
        date.innerHTML = i["published_date"]

        var abstract = document.createElement("div");
        abstract.setAttribute("class","abstractcard");
        abstract.innerHTML = i["abstract"];

        var continuereading = document.createElement("a");
        continuereading.setAttribute("class","continuereading");
        continuereading.setAttribute("href",`${i["short_url"]}`)
        continuereading.innerHTML = "<b>Continue reading<b>";

        var imagediv =document.createElement("div");
        imagediv.setAttribute("class","container")
        imagediv.setAttribute("style","width:200px;height:150px;float:right")


        var image = document.createElement("img");
        image.className=("img-thumbnail float-right")
        image.setAttribute("src",`${i["multimedia"][4]["url"]}`);
        image.setAttribute("style","width:200px;height:150px;float:right")
imagediv.append(image)

        card.append(newscat,title,date,abstract,continuereading,imagediv)
        row.append(card)
        content.append(row)
        contentcontainer.append(content)
        outer.append(contentcontainer)
        document.body.append(outer)

        }    
    }
    catch{
        console.log("ERROR")
    }
}