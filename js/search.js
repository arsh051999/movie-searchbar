
var again_div= document.querySelector("#section");


var text = document.querySelector("#text_box");
var btn = document.querySelector("#search_");
  var ajax = new XMLHttpRequest();
  
btn.addEventListener("click", function()
{
    var URL =
      "https://api.themoviedb.org/3/movie/popular?api_key=344bc01dc2f99463bae5c15b3ae986ce&language=en-US&page=1";
      
    ajax.open("GET", URL);

    ajax.send();
    ajax.addEventListener("readystatechange", displaymovies);
  /*var str =response.results[i].title;
      var patt = new RegExp("e");
      var res = patt.test(str);
      document.getElementById("demo").innerHTML = res;
    */


});


function displaymovies()
    {
  if(ajax.readyState == 4)
  {
    var response = JSON.parse(ajax.responseText);
    for(var i = 0; i < response.results.length; i++)
    {
      
      if(text.value.toLowerCase().indexOf(response.results[i].title.toLowerCase())>=0)
      
      
      {
        

         // alert(response.results[0].title);
         // for(i = 0; i < response.results.length; i++)
      //    {
          //  if(response.results[i].id==saved)
          //  {
              var title_div= document.createElement("div");
              title_div.setAttribute("class","m_title");
              title_div.setAttribute("id",(i+1));
              title_div.innerHTML += "TITLE:" + response.results[i].title;
              title_div.innerHTML += "<br>";
              again_div.appendChild(title_div);
              var openmovie = document.createElement("a");
              //console.log(openmovie.id);
              openmovie.href = "moviesprofile.html";
              openmovie.target = "_blank";
              var img = document.createElement("img"); 
              img.setAttribute(
                "src",
                "https://image.tmdb.org/t/p/w500_and_h282_face/" +
                  response.results[i].poster_path
              );
              img.id = response.results[i].id;
              //img.setAttribute("class","myposters");
            //img.setAttribute("onclick", "clicked("+ response.results[i].id+ ")");
              openmovie.appendChild(img);
              again_div.appendChild(openmovie);

              again_div.innerHTML += "<br>";
              //console.log( movie.results.overview);
              //var overview = movie.results[i].overview;
              var overview_div=document.createElement("div");
              overview_div.setAttribute("class","overview_title");
              overview_div.setAttribute("id",(i+1));
              overview_div.innerHTML += "Overview: " + response.results[i].overview;
              //console.log(movie.results.release_date);
              overview_div.innerHTML += "<br>";
              again_div.appendChild(overview_div);
              
              var date=document.createElement("div");
              date.setAttribute("class","date_class");
              date.setAttribute("id",(i+1));
              date.innerHTML += "Release Date: " + response.results[i].release_date;
              date.innerHTML += "<br>";
              date.innerHTML += "<br>";
              date.innerHTML += "<br>";
              again_div.appendChild(date);
              trailers(response.results[i].id);
      
         // }  

      //  } 
        
  }
  }

    }

    }

    function trailers(e)
    {
      var another_ajax=new XMLHttpRequest();
      var another_URL="https://api.themoviedb.org/3/movie/"+e+"/videos?api_key=344bc01dc2f99463bae5c15b3ae986ce&language=en-US&page=1";
another_ajax.open("GET",another_URL);
another_ajax.send();
another_ajax.addEventListener("readystatechange",function(){

if(another_ajax.readyState==4)
        {
          var again_and_again_div=document.querySelector("#trailer_section");
           var response = JSON.parse(another_ajax.responseText);
            for(var i = 0; i < response.results.length; i++)
            {
            
            var trailer_link=document.createElement("a");
            trailer_link.innerText=response.results[i].name;
            trailer_link.href="https://www.youtube.com/watch?v="+response.results[i].key;
             again_and_again_div.appendChild(trailer_link);
            }
            
        }

});


         
    }
