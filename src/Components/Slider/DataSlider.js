import slide1 from "../../Images/slide1.png";
import slide2 from "../../Images/slide2.jpg";
import slide3 from "../../Images/slide3.jpg";
import slide4 from "../../Images/slide4.jpg";

const slides = [
  {
    id: 1,
    title: "title 1",
    content: `img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text     
    Line 17:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text     
    Line 21:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text `,
    button: "view more",
    image: slide1,
  },
  {
    id: 2,
    title: "title 2",
    content: "content 2 da",
    button: "view more",
    image: slide2,
  },
  {
    id: 3,
    title: "title 3",
    content: "content 3 da",
    button: "view more",
    image: slide3,
  },
  {
    id: 4,
    title: "title 4",
    content: "content 4 da",
    button: "view more",
    image: slide4,
  },
];

export default slides;
