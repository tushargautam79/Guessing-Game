var choice=3;
var start=0;
var mode="easy";
var arr={
	0:"Indian Floating Post Office is in ____",
	"Indian Floating Post Office is in ____":"Srinagar",
	1:"Mela With Crowd Visible from Space",
	"Mela With Crowd Visible from Space":"Kumbh Mela",
	2:"The wettest inhabited place in the world",
	"The wettest inhabited place in the world":"Mawsynram",
	3:"The highest cricket ground in the world",
	"The highest cricket ground in the world":"Chail Cricket Ground",
	4:"shampoo has been derived from sanskrit word",
	"shampoo has been derived from sanskrit word":"champu",
	5:"Indian team won all world cups in",
	"Indian team won all world cups in":"Kabaddi",
	6:" Science day in Switzerland is dedicated to",
	" Science day in Switzerland is dedicated to":"APJ Abdul Kalam",
	7:"world's second-largest English speaking country",
	"world's second-largest English speaking country":"India",

};
var tar={
	0:["Srinagar","Udaipur"," Chandigarh"," Kerala","Mizoram","Darjeeling"],
	1:["Pushkar Fair","Hemis Gompa Fair","Chandrabhaga Mela","Gangasagar Mela","Baneshwar fair","Kumbh Mela"],
	2:["Kerala","Cherrapunji","Mahabaleshwar","Mawsynram","Amboli","Pasighat"],
	3:["Eden Gardens","Chail Cricket Ground","Raipur International Cricket Stadium","Jawaharlal Nehru Stadium","DY Patil Stadium","Wankhede Stadium"],
	4:["champu","Asana","Avidya","Citta","Eka","Japa"],
	5:["Gilli Danda","Kabaddi","Kho Kho","Cricket","Hockey","Badminton"],
	6:["CV Raman","Homi J Bhabha","APJ Abdul Kalam"," Visvesvaraya","S. Chandrashekar","Meghnad Saha"],
	7:["England","Australia","New zealand","Mangolia","America","India"],
};
var color=["red","chocolate","blue","violet","green","purple"];
var won=["Y","O","U","W","O","N"];
var game=document.querySelector("#game");
var over=document.querySelector("#over");
var random=Math.floor(Math.random()*8);
var question=document.querySelector("#question");
var chances=document.querySelector("#chances");
var again=document.querySelector("#new");
question.innerText=arr[random];
question.style.textAlign="center";
question.style.fontWeight="960";
question.style.background=color[random];
var answer=arr[arr[random]];
var done="do";
question.style.marginTop="20px";
question.style.color="white";
question.style.borderRadius="40px";
question.style.fontSize="40px";
var hard=document.querySelector("#hard");
var easy=document.querySelector("#easy");
hard.addEventListener("click",function()
{
	if(start==0)
	{
		mode="hard";
		choice=2;
		easy.style.background="white";
		easy.style.textAlign="center";
		hard.style.textAlign="center";
		easy.style.color="black";
		hard.style.color="white";
		hard.style.background="rgb(0,0,128)";
		chances.innerText=choice;
		chances.style.fontSize="80px";
		chances.style.marginTop="0px";
		chances.style.color="red";
		chances.style.fontWeight="900";
		chances.style.textAlign="center";
	}
});
easy.addEventListener("click",function()
{
	if(start==0)
	{
		mode="hard";
		choice=3;
		hard.style.background="white";
		hard.style.color="black";
		easy.style.color="white";
		hard.style.textAlign="center";
		easy.style.textAlign="center";
		easy.style.background="rgb(0,0,128)";
		chances.innerText=choice;
		chances.style.fontSize="80px";
		chances.style.marginTop="0px";
		chances.style.color="red";
		chances.style.fontWeight="900";
		chances.style.textAlign="center";
	}
});
var button=document.querySelectorAll("button");
for(var i=0;i<6;i++)
{
	button[i].innerText=tar[random][i];
	button[i].style.fontWeight="900";
	button[i].style.fontSize="130%";
	button[i].style.background=color[i];
	button[i].style.color="black";
	button[i].style.align="center";
}
chances.innerText=choice;
chances.style.fontSize="80px";
chances.style.marginTop="0px";
chances.style.color="red";
chances.style.fontWeight="900";

chances.style.textAlign="center";
button[0].addEventListener("click",function()
	{
		done=tar[random][0];
		if(choice>0)
			{
				if(done==answer)
				{
					for(var j=0;j<6;j++)
					{
						button[j].innerText=won[j];
						button[j].style.background=color[0];
						button[j].style.fontWeight="900";
						button[j].style.fontSize="130px";
						button[j].style.background=color[0];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				}
				else
				{
					start=1;
					choice--;
					chances.innerText=choice;
					chances.style.fontSize="80px";
                    chances.style.marginTop="0px";
                    chances.style.color="red";
                    chances.style.fontWeight="900";
                    chances.style.textAlign="center";
                    this.style.display="none";
				}
			}
		else
			{
				game.innerText="Game";
				over.innerText="Over";
		        game.style.fontSize="80px";
		        game.style.marginBottom="0px";
		        game.style.color="red";
		        game.style.fontWeight="900";
		        game.style.textAlign="left";
		        over.style.fontSize="80px";
		        over.style.marginTop="0px";
		        over.style.color="red";
		        over.style.fontWeight="900";
		        over.style.textAlign="left";
		        for(var j=0;j<6;j++)
					{
						button[j].innerText=answer;
						button[j].style.background=color[0];
						button[j].style.fontWeight="bold";
						button[j].style.fontSize="40px";
						button[j].style.background=color[0];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				again.innerText="Play Again"
		        again.style.color="black";
		        again.style.weight="bold";
		        again.style.textAlign="center";
		        again.style.textAlign="center";
		        again.style.background="red";
		        again.style.borderRadius="40px";
		        again.addEventListener("click",function()
					{
						random=Math.floor(Math.random()*8);
						start=0;
						if(mode=="easy")
							choice=3;
						else
							choice=2;
						for(var i=0;i<6;i++)
							{
								button[i].innerText=tar[random][i];
								button[i].style.fontWeight="900";
								button[i].style.fontSize="130%";
								button[i].style.background=color[i];
								button[i].style.color="black";
								button[i].style.align="center";
								button[i].style.display="block";
							}
						chances.innerText=choice;
						chances.style.fontSize="80px";
						chances.style.marginTop="0px";
						chances.style.color="red";
						chances.style.fontWeight="900";
						chances.style.textAlign="center";
						question.innerText=arr[random];
						question.style.textAlign="center";
						question.style.fontWeight="960";
						question.style.background=color[random];
						answer=arr[arr[random]];
						question.style.marginTop="20px";
						question.style.color="white";
						question.style.borderRadius="40px";
						question.style.fontSize="40px";
						again.innerText="";
						again.insertAdjacentHTML('afterbegin','<h3>New Creation</h3>');
					});

			}
	
	}
);
button[1].addEventListener("click",function()
	{
		done=tar[random][1];
		if(choice>0)
			{
				if(done==answer)
				{
					for(var j=0;j<6;j++)
					{
						button[j].innerText=won[j];
						button[j].style.background=color[1];
						button[j].style.fontWeight="bold";
						button[j].style.fontSize="40px";
						button[j].style.background=color[1];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				}
				else
				{
					start=1;
					choice--;
					chances.innerText=choice;
					chances.style.fontSize="80px";
                    chances.style.marginTop="0px";
                    chances.style.color="red";
                    chances.style.fontWeight="900";
                    chances.style.textAlign="center";
                    this.style.display="none";
				}
			}
		else
			{
				game.innerText="Game";
				over.innerText="Over";
		        game.style.fontSize="80px";
		        game.style.marginBottom="0px";
		        game.style.color="red";
		        game.style.fontWeight="900";
		        game.style.textAlign="left";
		        over.style.fontSize="80px";
		        over.style.marginTop="0px";
		        over.style.color="red";
		        over.style.fontWeight="900";
		        over.style.textAlign="left";
		        for(var j=0;j<6;j++)
					{
						button[j].innerText=answer;
						button[j].style.background=color[1];
						button[j].style.fontWeight="bold";
						button[j].style.fontSize="40px";
						button[j].style.background=color[1];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				again.innerText="Play Again"
		        again.style.color="black";
		        again.style.textAlign="center";
		        again.style.fontWeight="bold";
		        again.style.background="red";
		        again.style.borderRadius="40px";
		        again.addEventListener("click",function()
					{
						random=Math.floor(Math.random()*8);
						start=0;
						if(mode=="easy")
							choice=3;
						else
							choice=2;
						for(var i=0;i<6;i++)
							{
								button[i].innerText=tar[random][i];
								button[i].style.fontWeight="900";
								button[i].style.fontSize="130%";
								button[i].style.background=color[i];
								button[i].style.color="black";
								button[i].style.align="center";
								button[i].style.display="block";
							}
						chances.innerText=choice;
						chances.style.fontSize="80px";
						chances.style.marginTop="0px";
						chances.style.color="red";
						chances.style.fontWeight="900";
						chances.style.textAlign="center";
						question.innerText=arr[random];
						question.style.textAlign="center";
						question.style.fontWeight="960";
						question.style.background=color[random];
						answer=arr[arr[random]];
						question.style.marginTop="20px";
						question.style.color="white";
						question.style.borderRadius="40px";
						question.style.fontSize="40px";
						again.innerText="";
						again.insertAdjacentHTML('afterbegin','<h3>New Creation</h3>');
					});

			}	
	}
);
button[2].addEventListener("click",function()
	{
		done=tar[random][2];
		if(choice>0)
			{
				if(done==answer)
				{
					for(var j=0;j<6;j++)
					{
						button[j].innerText=won[j];
						button[j].style.background=color[2];
						button[j].style.fontWeight="900";
						button[j].style.fontSize="130px";
						button[j].style.background=color[2];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				}
				else
				{
					start=1;
					choice--;
					chances.innerText=choice;
					
					chances.style.fontSize="80px";
                    chances.style.marginTop="0px";
                    chances.style.color="red";
                    chances.style.fontWeight="900";
                    chances.style.textAlign="center";
                    this.style.display="none";
				}
			}
		else
			{
				game.innerText="Game";
				over.innerText="Over";
		        game.style.fontSize="80px";
		        game.style.marginbottom="0px";
		        game.style.color="red";
		        game.style.fontWeight="900";
		        game.style.textAlign="left";
		        over.style.fontSize="80px";
		        over.style.marginTop="0px";
		        over.style.color="red";
		        over.style.fontWeight="900";
		        over.style.textAlign="left";
		         for(var j=0;j<6;j++)
					{
						button[j].innerText=answer;
						button[j].style.background=color[2];
						button[j].style.fontWeight="bold";
						button[j].style.fontSize="40px";
						button[j].style.background=color[2];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
			}	again.innerText="Play Again"
		        again.style.color="black";
		        again.style.fontWeight="bold";
		        again.style.textAlign="center";
		        again.style.background="red";
		        again.style.borderRadius="40px";
		        again.addEventListener("click",function()
					{
						random=Math.floor(Math.random()*8);
						start=0;
						if(mode=="easy")
							choice=3;
						else
							choice=2;
						for(var i=0;i<6;i++)
							{
								button[i].innerText=tar[random][i];
								button[i].style.fontWeight="900";
								button[i].style.fontSize="130%";
								button[i].style.background=color[i];
								button[i].style.color="black";
								button[i].style.align="center";
								button[i].style.display="block";
							}
						chances.innerText=choice;
						chances.style.fontSize="80px";
						chances.style.marginTop="0px";
						chances.style.color="red";
						chances.style.fontWeight="900";
						chances.style.textAlign="center";
						question.innerText=arr[random];
						question.style.textAlign="center";
						question.style.fontWeight="960";
						question.style.background=color[random];
						answer=arr[arr[random]];
						question.style.marginTop="20px";
						question.style.color="white";
						question.style.borderRadius="40px";
						question.style.fontSize="40px";
						again.innerText="";
						again.insertAdjacentHTML('afterbegin','<h3>New Creation</h3>');
					});

	}
);
button[3].addEventListener("click",function()
	{
		done=tar[random][3];
		if(choice>0)
			{
				if(done==answer)
				{
					for(var j=0;j<6;j++)
					{
						button[j].innerText=won[j];
						button[j].style.background=color[3];
						button[j].style.fontWeight="900";
						button[j].style.fontSize="130px";
						button[j].style.background=color[3];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				}
				else
				{
					start=1;
					choice--;
					chances.innerText=choice;
					
					chances.style.fontSize="80px";
                    chances.style.marginTop="0px";
                    chances.style.color="red";
                    chances.style.fontWeight="900";
                    chances.style.textAlign="center";
                    this.style.display="none";
				}
			}
		else
			{
				game.innerText="Game";
				over.innerText="Over";
		        game.style.fontSize="80px";
		        game.style.marginbottom="0px";
		        game.style.color="red";
		        game.style.fontWeight="900";
		        game.style.textAlign="left";
		        over.style.fontSize="80px";
		        over.style.marginTop="0px";
		        over.style.color="red";
		        over.style.fontWeight="900";
		        over.style.textAlign="left";
		         for(var j=0;j<6;j++)
					{
						button[j].innerText=answer;
						button[j].style.background=color[3];
						button[j].style.fontWeight="bold";
						button[j].style.fontSize="40px";
						button[j].style.background=color[3];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				again.innerText="Play Again"
		        again.style.color="black";
		        again.style.fontWeight="bold";
		        again.style.textAlign="center";
		        again.style.background="red";
		        again.style.borderRadius="40px";
		        again.addEventListener("click",function()
					{
						random=Math.floor(Math.random()*8);
						start=0;
						if(mode=="easy")
							choice=3;
						else
							choice=2;
						for(var i=0;i<6;i++)
							{
								button[i].innerText=tar[random][i];
								button[i].style.fontWeight="900";
								button[i].style.fontSize="130%";
								button[i].style.background=color[i];
								button[i].style.color="black";
								button[i].style.align="center";
								button[i].style.display="block";
							}
						chances.innerText=choice;
						chances.style.fontSize="80px";
						chances.style.marginTop="0px";
						chances.style.color="red";
						chances.style.fontWeight="900";
						chances.style.textAlign="center";
						question.innerText=arr[random];
						question.style.textAlign="center";
						question.style.fontWeight="960";
						question.style.background=color[random];
						answer=arr[arr[random]];
						question.style.marginTop="20px";
						question.style.color="white";
						question.style.borderRadius="40px";
						question.style.fontSize="40px";
						again.innerText="";
						again.insertAdjacentHTML('afterbegin','<h3>New Creation</h3>');
					});
	
			}	
	}
);
button[4].addEventListener("click",function()
	{
		done=tar[random][4];
		if(choice>0)
			{
				if(done==answer)
				{
					for(var j=0;j<6;j++)
					{
						button[j].innerText=won[j];
						button[j].style.background=color[4];
						button[j].style.fontWeight="900";
						button[j].style.fontSize="130px";
						button[j].style.background=color[4];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				}
				else
				{
					start=1;
					choice--;
					chances.innerText=choice;
					
					chances.style.fontSize="80px";
                    chances.style.marginTop="0px";
                    chances.style.color="red";
                    chances.style.fontWeight="900";
                    chances.style.textAlign="center";
                    this.style.display="none";
				}
			}
		else
			{
				game.innerText="Game";
				over.innerText="Over";
		        game.style.fontSize="80px";
		        game.style.marginbottom="0px";
		        game.style.color="red";
		        game.style.fontWeight="900";
		        game.style.textAlign="left";
		        over.style.fontSize="80px";
		        over.style.marginTop="0px";
		        over.style.color="red";
		        over.style.fontWeight="900";
		        over.style.textAlign="left";
		         for(var j=0;j<6;j++)
					{
						button[j].innerText=answer;
						button[j].style.background=color[4];
						button[j].style.fontWeight="bold";
						button[j].style.fontSize="40px";
						button[j].style.background=color[4];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				again.innerText="Play Again"
		        again.style.color="black";
		        again.style.fontWeight="bold";
		        again.style.textAlign="center";
		        again.style.background="green";
		        again.style.borderRadius="40px";
		        again.addEventListener("click",function()
					{
						random=Math.floor(Math.random()*8);
						start=0;
						if(mode=="easy")
							choice=3;
						else
							choice=2;
						for(var i=0;i<6;i++)
							{
								button[i].innerText=tar[random][i];
								button[i].style.fontWeight="900";
								button[i].style.fontSize="130%";
								button[i].style.background=color[i];
								button[i].style.color="black";
								button[i].style.align="center";
								button[i].style.display="block";
							}
						chances.innerText=choice;
						chances.style.fontSize="80px";
						chances.style.marginTop="0px";
						chances.style.color="red";
						chances.style.fontWeight="900";
						chances.style.textAlign="center";
						question.innerText=arr[random];
						question.style.textAlign="center";
						question.style.fontWeight="960";
						question.style.background=color[random];
						answer=arr[arr[random]];
						question.style.marginTop="20px";
						question.style.color="white";
						question.style.borderRadius="40px";
						question.style.fontSize="40px";
						again.innerText="";
						again.insertAdjacentHTML('afterbegin','<h3>New Creation</h3>');
					});
	
			}	
	}
);
button[5].addEventListener("click",function()
	{
		done=tar[random][5];
		if(choice>0)
			{
				if(done==answer)
				{
					for(var j=0;j<6;j++)
					{
						button[j].innerText=won[j];
						button[j].style.background=color[5];
						button[j].style.fontWeight="900";
						button[j].style.fontSize="130px";
						button[j].style.background=color[5];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				}
				else
				{
					start=1;
					choice--;
					chances.innerText=choice;
					chances.style.fontSize="80px";
                    chances.style.marginTop="0px";
                    chances.style.color="red";
                    chances.style.fontWeight="900";
                    chances.style.textAlign="center";
                    this.style.display="none";
				}
			}
		else
			{
				game.innerText="Game";
				over.innerText="Over";
		        game.style.fontSize="80px";
		        game.style.marginbottom="0px";
		        game.style.color="red";
		        game.style.fontWeight="900";
		        game.style.textAlign="left";
		        over.style.fontSize="80px";
		        over.style.marginTop="0px";
		        over.style.color="red";
		        over.style.fontWeight="900";
		        over.style.textAlign="left";
		         for(var j=0;j<6;j++)
					{
						button[j].innerText=answer;
						button[j].style.background=color[5];
						button[j].style.fontWeight="bold";
						button[j].style.fontSize="40px";
						button[j].style.background=color[5];
						button[j].style.color="white";
						button[j].style.align="center";
						button[j].style.display="block";
					}
				again.innerText="Play Again"
		        again.style.color="black";
		        again.style.fontWeight="bold";
		        again.style.textAlign="center";
		        again.style.background="green";
		        again.style.borderRadius="40px";
		        again.addEventListener("click",function()
					{
						random=Math.floor(Math.random()*8);
						start=0;
						if(mode=="easy")
							choice=3;
						else
							choice=2;
						for(var i=0;i<6;i++)
							{
								button[i].innerText=tar[random][i];
								button[i].style.fontWeight="900";
								button[i].style.fontSize="130%";
								button[i].style.background=color[i];
								button[i].style.color="black";
								button[i].style.align="center";
								button[i].style.display="block";
							}
						chances.innerText=choice;
						chances.style.fontSize="80px";
						chances.style.marginTop="0px";
						chances.style.color="red";
						chances.style.fontWeight="900";
						chances.style.textAlign="center";
						question.innerText=arr[random];
						question.style.textAlign="center";
						question.style.fontWeight="960";
						question.style.background=color[random];
						answer=arr[arr[random]];
						question.style.marginTop="20px";
						question.style.color="white";
						question.style.borderRadius="40px";
						question.style.fontSize="40px";
						again.innerText="";
						again.insertAdjacentHTML('afterbegin','<h3>New Creation</h3>');
					});
	
			}	
	}
);


