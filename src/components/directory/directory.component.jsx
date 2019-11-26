import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.freeimages.com/images/thumbs/dd3/patrol-hat-1499927.jpg",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl:
            "https://media.istockphoto.com/photos/fashion-portrait-pretty-sweet-woman-blowing-red-lips-black-hat-picture-id615595706",
          id: 2,
          linkUrl: ""
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/a2c/sneakers-1541724.jpg",
          id: 3,
          linkUrl: ""
        },
        {
          title: "womens",
          imageUrl:
            "https://images.freeimages.com/images/large-previews/1e0/manken-model-turkish-women-1438588.jpg",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "mens",
          imageUrl:
            "https://media.istockphoto.com/photos/young-long-bearded-man-with-suit-picture-id645998452",
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
