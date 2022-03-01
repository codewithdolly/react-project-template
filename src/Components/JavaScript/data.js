let foods = {
    foodItems: [
      {
        name: "Biriyani",
        categoryID: "1234",
      },
      {
        name: "Paneer",
        categoryID: "3456",
      },
    ],
    categories: [
      {
        name: "Veg",
        id: "3456",
      },
      {
        name: "Non-Veg",
        id: "1234",
      },
    ],
  };

    // expected output
//   [
//     {
//         name:"Biriyani",
//         categoryID:"1234",
//         categoryName:"Non-Veg"
//     },
//     {
//         name:"Paneer",
//         categoryID:"3456",
//         categoryName:"Veg"
//     }
//   ]

  let result=[];
  for(let index=0; index<foods.foodItems.length; index++){
    result.push(foods.foodItems[index] )
    result[index].categoryName=foods.categories[index].name;
  }


console.log(result);
