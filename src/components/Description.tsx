import React from "react";
import {Description} from "../types";
import Tag from "./Tag";

const DescriptionView = ({description}: { description: Description }) => {
    return (
        <div className="text-gray-300 mt-4 w-full">
            <div className="flex flex-row space-x-2 flex-wrap">
                {
                    description.tags?.map((tag) => (
                        <Tag tag={tag} key={tag.text}/>
                    ))
                }
            </div>
            <ul className="list-disc mt-2 list-inside space-y-2 px-2">
                {description.bulletPoints.map((point) => (
                    <li className="text-gray-300 text-left" key={point}>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default DescriptionView;