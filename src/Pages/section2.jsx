import React from 'react';
import Card from '../Component/Card'

const Section2 = () => {
  const cardData = [
    {
      image: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/179k95kaa98ok4/3c4b1f3c0ee61f263eb101dbbf006a67e91f0571.jpg",
      title: "Rockstar Game",
      paragraph: "CircoLoco Records Presents Don’t Stop from Prospa",
      time: "April 11, 2025"
    },
    {
      image: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/894ka79k221352/9c02ecb104a44a1ba25011319eabb451b151dcc0.jpg",
      title: "GTA Online",
      paragraph: "Take Down the Original High Stakes Scores with Double Rewards on GTA Online’s Classic Heists",
      time: "April 10, 2025"
    },
    {
      image: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/179k95kaa98ok4/3c4b1f3c0ee61f263eb101dbbf006a67e91f0571.jpg",
      title: "Rockstar Game",
      paragraph: "New Single from Prospa Arrives April 11 on CircoLoco Records",
      time: "April 4, 2025"
    },
    {
      image: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/894a298a797o14/4f0975413ba92dcaf896e7da094cfd6d677f86fb.jpg",
      title: "GTA Online",
      paragraph: "GTA+ Members Blaze Ahead with the Bollokan Envisage Sports Car and LD Organics Threads",
      time: "April 13, 2025"
    },
    {
      image: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/ak3o34a914kk9a/fa2c94e1bca08cb7cb90b4ad70c82669f2e7a525.jpg",
      title: "GTA Online",
      paragraph: "Speed to the Finish with 3X GTA$ and RP on HSW Races",
      time: "April 12, 2025"
    },
    {
      image: "https://media-rockstargames-com.akamaized.net/tina-uploads/posts/4k32k89k2o772o/72936c84d96be7a82444ba5fdc2a2f7097b60ee5.jpg",
      title: "Red Dead Online",
      paragraph: "Traders Set to Prosper This Month with Role Bonuses in Red Dead Online",
      time: "April 5, 2025"
    }
  ];

  return (
    <section className=" bg-[#0B0B0B] text-white max-w-[100%]">
      <div className="w-[100%] lg:max-w-[1370px] mx-auto">
        <h1 className="pl-[27px] pt-[30px] md:pt-[50px] md:pb-[30px] lg:text-[30px] font-semibold">Newswire</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-cols-1">
             {cardData.map((item, index) => (
               <Card data={item} id={index}/>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
