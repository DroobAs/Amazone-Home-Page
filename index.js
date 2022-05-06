// ---------------Dynamic picture----------------------
var images =[];
images[0] = "Resources/img1.jpg";
images[1] = "Resources/img2.jpg";
images[2] = "Resources/img3.jpg";
images[3] = "Resources/img4.jpg";
images[4] = "Resources/img5.jpg";

var counter = 0;
parseInt(counter);
var stopimg;
function dynamic_img()
          {
            if (counter<5 && counter >-1)
              {
                  document.getElementById("frontimg").src = images[counter];
              }
              else
              {
                  counter = 0;
                  document.getElementById("frontimg").src = images[counter];
              }            
            //   addtext();
              counter++;  
          }
function start_dyimg ()
          {
              stopimg = setInterval(dynamic_img,2000);
          }

// ----------set Counter value by Buttons---------

function count(x)
{
    clearInterval(stopimg);
    counter = x;
    stopimg = setInterval(dynamic_img,2000);
}

function nextarr()
{
    clearInterval(stopimg);
    if (counter == 4)
    {
        counter = 0;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 3)
    {
        counter = 4;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 2)
    {
        counter = 3;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 1)
    {
        counter = 2;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 0)
    {
        counter = 1;
        document.getElementById("frontimg").src = images[counter];
    }
    stopimg = setInterval(dynamic_img,2000);
}

function lastarr()
{
    clearInterval(stopimg);
    if (counter == 4)
    {
        counter = 3;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 3)
    {
        counter = 2;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 2)
    {
        counter = 1;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 1)
    {
        counter = 0;
        document.getElementById("frontimg").src = images[counter];
    }
    else if (counter == 0)
    {
        counter = 4;
        document.getElementById("frontimg").src = images[counter];
    }
    stopimg = setInterval(dynamic_img,2000);
}
