import "./products.css";

var dummy_data = [
  {
    id: "1",
    title: "this is the fist image",
    image: "https://static2.bigstockphoto.com/2/3/3/large1500/332237014.jpg",
    addess: "Addiss Ababa , shetaton Hotel",
    description:
      "This is so choose one of the them and aboune loreem serum luefdfa the fist image of the draft about the project in thesis so look ti up and give your comments in the text below",
  },
  {
    id: "2",
    title: "this is the fist image",
    image: "https://static2.bigstockphoto.com/2/3/3/large1500/332237014.jpg",
    addess: "Addiss Ababa , shetaton Hotel",
    description:
      "This is so choose one of the them and aboune loreem serum luefdfa the fist image of the draft about the project in thesis so look ti up and give your comments in the text below",
  },
  {
    id: "3",
    title: "this is the fist image",
    image: "https://static2.bigstockphoto.com/2/3/3/large1500/332237014.jpg",
    addess: "Addiss Ababa , shetaton Hotel",
    description:
      "This is so choose one of the them and aboune loreem serum luefdfa the fist image of the draft about the project in thesis so look ti up and give your comments in the text below",
  },
  {
    id: "4",
    title: "this is the fist image",
    image: "https://static2.bigstockphoto.com/2/3/3/large1500/332237014.jpg",
    addess: "Addiss Ababa , shetaton Hotel",
    description:
      "This is so choose one of the them and aboune loreem serum luefdfa the fist image of the draft about the project in thesis so look ti up and give your comments in the text below",
  },
  {
    id: "5",
    title: "this is the fist image",
    image:
      "https://pe-images.s3.amazonaws.com/basics/cs6/layers/background-layer-action/adobe-stock-image.jpg",
    addess: "Addiss Ababa , shetaton Hotel",
    description:
      "This is the fist image of the draft about the project in thesis so look ti up and give your comments in the text below",
  },
];

function Products() {
  return (
    <div>
      <h1>here is the products page</h1>

      <div className="dynamic-div">
        {dummy_data.map((a) => {
          return (
            <div key={a.id} className="dynamic">
              {/* key helps to avoid errors occrs in console.log since each should have unique id */}
              {
                <div className="">
                  <h3 className="dynamic-h3">{a.title}</h3>
                  <img className="dynamic-img" src={a.image} />
                  <p className="dynamic-p1">{a.addess}</p>
                  <p className="dynamic-p2">{a.description} </p>
                </div>
              }
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default Products;
