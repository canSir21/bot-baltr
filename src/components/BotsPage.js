import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([])
  useEffect(() => {
    addBot()
  }, [])
  const addBot = async () => {
    try {
      const res = await fetch('http://localhost:8002/bots')
      const data = await res.json()
      setBots(data)

    } catch (error) {
      console.log(error)
    }
  }

  // const handleClick = event => {
  //   console.log(event.target.value);
  //   console.log('Image clicked');
  // };


  function clickedBot(id) {
    setBots(bots.map(bot => id === bot.id ? { ...bot, isClicked: true } : bot))
  }

  function unClickedBot(id) {
    setBots(bots.map(bot => id === bot.id ? { ...bot, isClicked: false } : bot))
  }

  function deleteBot(id) {
    setBots(bots.filter(bot => id !== bot.id))
  }

  // //refactored
  // function clickedBot(id, isClicked = true) {
  //   setBots(bots.map(bot => id === bot.id ? { ...bot, isClicked: isClicked} : bot))
  // }

  // <YourBotArmy bots={bots.filter(bot => bot.isClicked)} handleClick={(id) => isClicked(id, false)} />


  // console.log("My data ==>", bots)
  return (
    <div>
      <YourBotArmy bots={bots.filter(bot => bot.isClicked)} handleClick={unClickedBot} handleDelete={deleteBot} />
      <BotCollection bots={bots} handleClick={clickedBot} />
    </div>
  )
}

export default BotsPage;
