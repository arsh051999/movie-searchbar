var ajax = new XMLHttpRequest();
var div_ = document.querySelector("#section");
window.addEventListener("load", function() {
  var URL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=344bc01dc2f99463bae5c15b3ae986ce&language=en-US&page=1";
  ajax.open("GET", URL);

  ajax.send();

  ajax.addEventListener("readystatechange", displaymovies);
});

function displaymovies() {
  if (ajax.readyState == 4) {
    var movie = JSON.parse(ajax.responseText);

    for (i = 0; i < movie.results.length; i++) {
      //console.log("This is the title: " + movie.results[i].title);
      var title_div= document.createElement("div");
      title_div.setAttribute("class","m_title");
      title_div.setAttribute("id",(i+1));
      title_div.innerHTML += "TITLE:" + movie.results[i].title;
      title_div.innerHTML += "<br>";
      div_.appendChild(title_div);
      var openmovie = document.createElement("a");
      //console.log(openmovie.id);
      openmovie.href = "moviesprofile.html";
      openmovie.target = "_blank";
      var img = document.createElement("img"); 
      img.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500_and_h282_face/" +
          movie.results[i].poster_path
      );
      img.id = movie.results[i].id;
      //img.setAttribute("class","myposters");
    //img.setAttribute("onclick", "clicked("+ response.results[i].id+ ")");
      openmovie.appendChild(img);
      div_.appendChild(openmovie);

      div_.innerHTML += "<br>";
      //console.log( movie.results.overview);
      //var overview = movie.results[i].overview;
      var overview_div=document.createElement("div");
       overview_div.setAttribute("class","overview_title");
      overview_div.setAttribute("id",(i+1));
      overview_div.innerHTML += "Overview: " + movie.results[i].overview;
      //console.log(movie.results.release_date);
      overview_div.innerHTML += "<br>";
      div_.appendChild(overview_div);
      
      var date=document.createElement("div");
      date.setAttribute("class","date_class");
      date.setAttribute("id",(i+1));
      date.innerHTML += "Release Date: " + movie.results[i].release_date;
      date.innerHTML += "<br>";
      date.innerHTML += "<br>";
      date.innerHTML += "<br>";
      div_.appendChild(date);


    }
  }
}


function postprofile(e) {
sessionStorage.setItem("showmovie",b);
}

document.addEventListener("click",function(event){
    if(event.target.tagName == "IMG") {

      sessionStorage.setItem("id",event.target.id);
      console.log(sessionStorage.getItem("id"));
      //var movies_title=document.querySelector(event.target.id);
      //var select_poster=document.queryselector(event.target.id);
      /*
      window.open("moviesprofile.html", "_blank");
      var x=document.createElement("input");
      x.setAttribute("type","search");
      var pixinfo=document.querySelector("#one_picture");
      pixinfo.appendChild(x);
      pixinfo.innerHTML +=
        "Title:" +
        movie.results[event.target.id]
        
      pixinfo.innerHTML += "<br>";
      var img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500_and_h282_face/" +
          movie.results[i].poster_path
      );

      pixinfo.innerHTML += "<br>";
      var overview = movie.results[i].overview;

      pixinfo.innerHTML += "Overview: " + movie.results[i].overview;

      pixinfo.innerHTML += "<br>";
      var date = movie.results[i].release_date;

      pixinfo.innerHTML += "Release Date: " + movie.results[i].release_date;
      */
    }
 });
  

/*
  window.open("moviesprofile.html", "_blank");
function postprofile() {
 
  document.querySelector("one_picture").innerHTML +=
    "Title:" +
    movie.results[i]
      .title; 
  div_.innerHTML += "<br>";
  var img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://image.tmdb.org/t/p/w500_and_h282_face/" +
      movie.results[i].poster_path
  );

  div_.innerHTML += "<br>";
  var overview = movie.results[i].overview;
  div_.innerHTML += "Overview: " + movie.results[i].overview;
  div_.innerHTML += "<br>";
  var date = movie.results[i].release_date;
  div_.innerHTML += "Release Date: " + movie.results[i].release_date;
}*/
