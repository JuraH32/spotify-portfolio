import React from "react";
import {TagType} from "../types";

const Tag = ({tag}: {tag: TagType}) => {
    //create a tag that looks like a pill
    return (
        <div className="text-white px-2 py-1 rounded-full text-xs font-semibold" style={{backgroundColor: tag.color}}>
            {tag.text}
        </div>
    )

}

export default Tag;