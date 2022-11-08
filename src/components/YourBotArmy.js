import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, handleClick, handleDelete }) {
  //your bot army code here...
  const yourBotArmy = bots.map((bot) => (<BotCard key={bot.id} bot={bot} handleClick={handleClick} handleDelete={handleDelete} />))


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourBotArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;

//  {/*...and here...*/}
//  Your Bot Army
//  {bot.map((bot) => (<BotCard key={bot.id} bot={bot} />))}
//  console.log(bot)
//  {/* {bot && bot.map((bot) => <img src={bot}></img>)} */}
