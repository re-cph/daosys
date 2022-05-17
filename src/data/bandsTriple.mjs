import Pointer from "../images/pointer.svg";
import Hands from "../images/hands.svg";
import Chart from "../images/chart.svg";

import Atom from "../images/atom.svg";
import Candlesticks from "../images/candlesticks.svg";
import Columns from "../images/columns.svg";

import Quest from "../images/quest.svg";
import Sliders from "../images/sliders.svg";
import Govern from "../images/govern.svg";



export default [
  {
    title: "How it works",
    bgColor: "bg-blue",
    textColor1: "text-white",
    textColor2: "text-white-dark",
    borderColor: "border-t-white-dark",
    badge: true,
    items: [
      {
        image: Pointer,
        title: "Join",
        description: "Purchase treasury tokens",
      },
      {
        image: Hands,
        title: "Loan",
        description: "Loan your interest-bearing tokens<br /><br />(Earn interest backed by market - driven maturity)",
      },
      {
        image: Chart,
        title: "Grow",
        description: "Loan to projects with Quests, building on your ecosystem (Syscoin) and earn back on investments",
      },
    ]
  },
  {
    title: "Risk-free Growth",
    bgColor: "bg-blue-light",
    textColor1: "text-blue",
    textColor2: "text-blue",
    borderColor: "border-blue",
    badge: false,
    items: [
      {
        image: Atom,
        title: "Bonded Allocation",
        description: "All capital allocation is bonded, assuring Interest Backed Tokens (IBT) secure your investment over time",
      },
      {
        image: Candlesticks,
        title: "Personal Treasury",
        description: "Control your assets, manage finance, join project round tables as a Councilor or become a Questor",
      },
      {
        image: Columns,
        title: "Earn",
        description: "As Web3 and Defi boom, your interest backed tokens will mature along with the growing market",
      },
    ]
  },
  {
    title: "Quest Management",
    bgColor: "bg-white-darker",
    textColor1: "text-blue",
    textColor2: "text-blue",
    borderColor: "border-t-blue",
    badge: false,
    items: [
      {
        image: Quest,
        title: "Quest",
        description: "Become a Councilor securing assets for a quest with capital allocation",
      },
      {
        image: Sliders,
        title: "Deploy",
        description: "Deposit assets to a Quest Vault. Set your own terms for allocation",
      },
      {
        image: Govern,
        title: "Govern",
        description: "Manage the assets as your own Treasurer",
      },
    ]
  },
];