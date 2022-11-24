// import React, { useEffect, useLayoutEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";
// import { Card } from "react-bootstrap";
// import { BsHeart } from "react-icons/bs";
// import { DotLoader } from "react-spinners";

// const CategoryProductGrid = () => {
//   const navigate = useNavigate();

//   const [finalData, setFinalData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   let college = localStorage.getItem("collegeName");
//   if (!college) {
//     college = "MAIT";
//   }

//   const { Category } = useParams();
//   console.log("category is =>", Category);

//   useLayoutEffect(() => {
//     console.log("in fetcher");
//     setIsLoading(true);
//     try {
//       fetch(`https://campus-kart-api.ml/product/get/${Category}/${college}`)
//         //   fetch("http://localhost:3790/product/all")
//         .then((resp) => resp.json())
//         .then((resp) => {
//           console.log("data=>", resp);
//           setFinalData(resp.data);
//           setIsLoading(false);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   const id = localStorage.getItem("id");
//   const handleAdd = async (addData) => {
//     try {
//       const body = {
//         customerId: id,
//         productId: addData.id,
//         productName: addData.productName,
//         description: addData.description,
//         price: addData.price,
//         imgId: addData.imageId,
//         category: addData.category,
//         contactNumber: addData.contactNumber,
//       };
//       console.log("data=> ", body);
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       };
//       const resp = await fetch(
//         "https://campus-kart-api.ml/addprodinWishlist",
//         requestOptions
//       );
//       // .then((resp) => {
//       if (resp.status === 200) {
//         alert("added to wishlist");
//       }
//       if (resp.status === 300) {
//         alert("already added to wishlist");
//       }
//       // });
//     } catch (error) {
//       console.log("error=>", error);
//       alert("error is occurred");
//     }
//   };

//   return (
//     <div className=" 2xl:container 2xl:mx-auto">
//       <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
//         <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800"></p>
//       </div>
//       <div className=" py-6 lg:px-20 md:px-6 px-4">
//         <p className=" font-normal text-sm leading-3 text-gray-600 ">
//           Home / Shop by Category / All
//         </p>
//         <hr className=" w-full bg-gray-200 my-6" />

//         <br />

//         <div className="loader">
//           <DotLoader
//             color="#5ee727"
//             size={40}
//             speedMultiplier={1}
//             loading={isLoading}
//           />
//         </div>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-evenly",
//             flexWrap: "wrap",
//           }}
//         >
//           {finalData &&
//             finalData.map((data) => (
//               <div>
//                 <button
//                   style={{
//                     position: "absolute",
//                     zIndex: "100",
//                     width: "20px",
//                     height: "20px",
//                   }}
//                 >
//                   <BsHeart
//                     size={20}
//                     style={{ marginLeft: "230px", marginTop: "230px" }}
//                     onClick={() => {
//                       handleAdd(data);
//                     }}
//                   />
//                 </button>
//                 <Card
//                   className="shadow-lg m-2 p-3 rounded"
//                   style={{ width: "18rem", cursor: "pointer", height: "18rem" }}
//                   onClick={() =>
//                     navigate("/product/productReview", {
//                       state: {
//                         data: {
//                           imgId: data.imageId,
//                           productName: data.productName,
//                           price: data.price,
//                           description: data.description,
//                           contactNumber: data.contactNumber,
//                         },
//                       },
//                     })
//                   }
//                 >
//                   <Card.Img
//                     variant="top"
//                     src={`https://campus-kart-api.ml/uploads/${data.imageId}`}
//                   />
//                   <Card.Body>
//                     <Card.Title>Title: {data.productName}</Card.Title>
//                     <Card.Title>Price: Rs{data.price}</Card.Title>
//                     <Card.Text>
//                       Description: {data.description.slice(0, 10)}...
//                     </Card.Text>

//                     {/* <Link to={`product/${product.id}`}> */}
//                     {/* <button>Detail</button> */}
//                     {/* </Link> */}
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryProductGrid;

import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import DropdownSelect from "../Components/DropdownSelect";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DotLoader } from "react-spinners";

// import { Link } from 'react-router-dom'

const ProductsGrid = () => {
  const [category, setCategory] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let college = localStorage.getItem("collegeName");
  if (!college) {
    college = "MAIT";
  }

  const { Category } = useParams();
  console.log("category is =>", Category);

  // window.onload = function () {
  //   if (!window.location.hash) {
  //     window.location = window.location + "#loaded";
  //     window.location.reload();
  //   }
  // };
  // window.location.reload();

  const navigate = useNavigate();

  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    // window.location.reload();
    window.scrollTo(0, 0);
    setIsLoading(true);
    fetch(`https://campus-kart-api.ml/product/get/${Category}/${college}`)
      .then((resp) => resp.json())
      .then((resp) => {
        // window.location.reload();
        console.log("data=>", resp);
        setFinalData(resp.data);
        setIsLoading(false);
        // console.log("img =>", resp.data[0].imageId);
        // console.log("name=>", resp.data[0].productName);
      });
  }, [Category, college]);

  // useEffect(() => {
  //   console.log("in useEffect");
  //   setFinalData({ loading: true, finalData: null, err: null });

  //   fetcher();
  // }, []);

  // const handleSearch = async (e) => {
  //   e.preventDefault();
  //   console.log("in search");
  //   setIsLoading(true);
  //   try {
  //     await fetch(
  //       `https://campus-kart-api.ml/product/get/${category}/${college}`
  //     )
  //       //  await fetch("http://localhost:3790/product/all")
  //       .then((resp) => resp.json())
  //       .then((resp) => {
  //         // window.location.reload(false);
  //         console.log("data=>", resp);
  //         setFinalData(resp.data);
  //         setIsLoading(false);
  //         // console.log("img =>", resp.data[0].imageId);
  //         // console.log("name=>", resp.data[0].productName);
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // if (err) {
  //   setFinalData({ loading: false, finalData: null, err: null });
  // } else {
  //   console.log("In Async func ", response);
  //   // response = response.data;

  //   // setFinalData(response);
  //   setFinalData({ loading: false, finalData: response.data, err: null });
  // }
  const id = localStorage.getItem("id");
  const auth = localStorage.getItem("isAuthenticated");
  const handleAdd = async (addData) => {
    const body = {
      customerId: id,
      productId: addData._id,
      productName: addData.productName,
      description: addData.description,
      price: addData.price,
      imgId: addData.imageId,
      category: addData.category,
      contactNumber: addData.contactNumber,
    };
    console.log("data=> ", body);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    if (auth) {
      try {
        const resp = await fetch(
          "https://campus-kart-api.ml/addprodinWishlist",
          requestOptions
        );
        // .then((resp) => {
        if (resp.status === 200) {
          alert("added to wishlist");
        }
        if (resp.status === 300) {
          alert("already added to wishlist");
        }

        // });
      } catch (error) {
        console.log("error=>", error);
        alert("error is occurred");
      }
    } else {
      alert("login first to add this in wishlist");
    }
  };

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <div className=" flex justify-between items-center"></div>

        <br />
        <div className="loader">
          <DotLoader
            color="blue"
            size={40}
            speedMultiplier={1}
            loading={isLoading}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {finalData &&
            finalData.map((data) => (
              <div>
                <Card
                  className="shadow-lg m-2 p-3 rounded"
                  style={{ width: "18rem", cursor: "pointer", height: "auto" }}
                  onClick={() =>
                    navigate("/productReview", {
                      state: {
                        data: {
                          imgId: data.imageId,
                          productName: data.productName,
                          price: data.price,
                          description: data.description,
                          contactNumber: data.contactNumber,
                        },
                      },
                    })
                  }
                >
                  <Card.Img
                    style={{ height: "250px", objectFit: "contain" }}
                    variant="top"
                    src={`https://campus-kart-api.ml/uploads/${data.imageId}`}
                  />
                  <Card.Body>
                    <Card.Title>Title: {data.productName}</Card.Title>
                    <Card.Title>Price: Rs{data.price}</Card.Title>
                    <Card.Text>
                      Description: {data.description.slice(0, 10)}...
                    </Card.Text>

                    {/* <Link to={`product/${product.id}`}> */}
                    {/* <button>Detail</button> */}
                    {/* </Link> */}
                  </Card.Body>

                  <BsHeart
                    size={20}
                    style={{
                      position: "absolute",
                      zIndex: "100",
                      width: "20px",
                      height: "20px",
                      top: "90%",
                      left: "89%",
                    }}
                    // style={{ marginLeft: "230px", marginTop: "230px" }}
                    onClick={() => {
                      handleAdd(data);
                    }}
                  />
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
