import React from "react";
import Card from "../common/Card";

export default function ArchivedCard(props) {
  return (
    <Card className="group w-80 grow h-48 max-w-sm hover:shadow-hover_card hover:shadow-black-900 hover:bg-secondary">
      <div className="px-6 pt-3 max-w-sm h-3/4 overflow-auto">
        <p className="text-white w-fit text-sm">{props.message}</p>
      </div>
      <div className="flex flex-col h-1/4 bg-bg_card_bottom group-hover:bg-indigo-900 pl-3 py-1 rounded-b-lg justify-center">
        <p className="text-sm text-white">From: {props.from}</p>
        <p className="text-sm text-white">To: {props.to}</p>
      </div>
    </Card>
  );
}
