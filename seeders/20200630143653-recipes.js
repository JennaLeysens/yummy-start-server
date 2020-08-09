"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipes",
      [
        {
          title: "Easy and hearty lentil bolognese",
          imageURL:
            "https://res.cloudinary.com/yummystart/image/upload/v1596975136/WhatsApp_Image_2020-08-09_at_14.10.34_q5kzpc.jpg",
          description:
            "Pasta is the ultimate comfort food and this one is easy to throw together on a busy Monday using some pantry staples",
          ingredients: [
            "2 x medium tomatoes",
            "1 x large can of lentils⁣⁣⁣",
            "250g passata",
            "500g pasta",
            "100g baby spinach",
          ],
          method:
            "Fry the two diced tomatoes. After a few minutes, add in the passata. Once the passata has warmed up, add in the can of (rinsed) lentils and the baby spinach. Next, add some fresh basil. Add some seasoning (basil, italian herbs, salt and pepper). Cook until the sauce ⁣has thickened. Stir in your cooked pasta and enjoy",
          cookingTime: "45",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 5,
          userId: 1,
          servings: "2",
        },
        {
          title: "Strawberry milkshake smoothie bowl",
          imageURL:
            "https://res.cloudinary.com/yummystart/image/upload/v1596973025/IMG_0422_vok2cz.jpg",
          description:
            "Like a strawberry milkshake but refined sugar and dairy free!",
          ingredients: [
            "1 x cup of frozen strawberries",
            "half a frozen banana⁣⁣⁣",
            "1 tsp sweetener",
            "⁣⁣3/4 cup of almond milk",
          ],
          method: "Blend ingredients together and add toppings of choice",
          cookingTime: "15",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 8,
          userId: 1,
          servings: "1",
        },
        {
          title: "Chickpea mayo filling",
          imageURL:
            "https://res.cloudinary.com/yummystart/image/upload/v1596973134/IMG_0902_czelgi.jpg",
          description:
            "A tasty vegetarian filling for sandwiches, wraps or in salads",
          ingredients: [
            "1 x small can of chickpeas",
            "2 x tbs of mayonaise",
            "lemon juice",
            "garlic powder",
            "chives",
          ],
          method:
            "Rinse the chickpeas and smash them up into pieces. Add the rest of the ingredients and mix together",
          cookingTime: "15",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 3,
          userId: 2,
          servings: "2",
        },
        {
          title: "Baked pumpkin falafel",
          imageURL:
            "https://res.cloudinary.com/yummystart/image/upload/v1596975136/WhatsApp_Image_2020-08-09_at_14.10.52_ntadt2.jpg",
          description: "A great source of protein for salads, wraps or tacos",
          ingredients: [
            "1 cup pumpkin puree",
            "½ cup of chickpeas⁣⁣",
            "3 tbs of flour⁣⁣",
            "1 clove of garlic",
            "Sesame seeds⁣⁣",
          ],
          method:
            "Purée the pumpkin and chickpeas with a stick blender or in a blender, mix in the garlic (crushed) and spices and the flour. Refrigerate the mixture for at least three hours until the mixture is quite firm. Form small falafels and dip into sesame seeds to coat them all around. Place the falafels on a baking tray with wax paper and bake at 200° C for 20 minutes, turning the falafels over at 10 minutes to bake each side",
          cookingTime: "45",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 5,
          userId: 1,
          servings: "4",
        },
        {
          title: "Berry chia jam",
          imageURL:
            "https://res.cloudinary.com/yummystart/image/upload/v1596973438/93482718_109437867235226_159961100740511_n_pcg4x9.jpg",
          description: "Like jam but refined sugar free and with extra protein",
          ingredients: ["2 x tbsp of chia seeds", "2 cups of frozen berries"],
          method:
            "Bring the fruit to the boil for about 10mins. Then add the chia seeds and turn down the heat but let it cook for another 10min or so. Then let it cool so that it thickens and refrigerate it before serving",
          cookingTime: "15",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 13,
          userId: 1,
          servings: "8",
        },
        {
          title: "Roast pumpkin and butternut soup",
          imageURL:
            "https://res.cloudinary.com/yummystart/image/upload/v1596973483/42003303_313816652504104_8121410583518381048_n_cljmro.jpg",
          description: "Healthy and hearty",
          ingredients: [
            "1/2 a butternut⁣",
            "1/2 a pumpkin",
            "1/2 cup of coconut milk⁣",
            "1/2 an onion",
            "Seasoning",
          ],
          method:
            "Roast the butternut and pumpkin until it’s all cooked, adding onion towards the end. Add the roasted veggies to a pot with the coconut milk and some hot water. Blend with a stick blender until smooth and add seasoning to taste⁣",
          cookingTime: "60",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 10,
          userId: 2,
          servings: "4",
        },
        {
          title: "Spinach and artichoke salad",
          imageURL:
            "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description: "A fresh side salad that isn't just lettuce",
          ingredients: [
            "200g baby spinach⁣",
            "400g preserved artichokes",
            "100g pomegranate seeds",
            "50ml olive oil",
            "Salt and pepper",
          ],
          method: "Mix all the ingrdients together in a bowl",
          cookingTime: "15",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 8,
          userId: 2,
          servings: "4",
        },
        {
          title: "Chocolate and peanut butter quinoa squares",
          imageURL:
            "https://res.cloudinary.com/yummystart/image/upload/v1596973554/92607915_2581808562066358_6942604077921160318_n_q9bwsi.jpg",
          description: "An afternoon pick-me-up snack",
          ingredients: [
            "1 cup puffed quinoa",
            "2 tbs cocoa powder⁣⁣",
            "1 cup natural peanut butter",
            "3/4 cup medjool dates",
            "1/2 cup pumpkin and sunflower seeds",
          ],
          method:
            "Blend the dates in a blender until it forms a paste. Add the melted peanut butter and mix until combined. Add the dry ingredients and mix all the elements together. Transfer to an 8×8 pan lined with parchment paper and place in the fridge to set",
          cookingTime: "30",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 8,
          userId: 1,
          servings: "8",
        },
        {
          title: "Vanilla and cinnamon protein oatmeal",
          imageURL:
            "https://res.cloudinary.com/yummystart/image/upload/v1596973557/58922575_2318069165147181_7708322933299803726_n_cars1e.jpg",
          description: "A filling and nutritious ",
          ingredients: [
            "1/2 cup of rolled oats",
            "1 cup of milk⁣⁣⁣ of choice",
            "1 scoop of vanilla protein powder⁣⁣⁣ of choice",
            "1/2 tsp of cinnamon ⁣",
            "2 tsb natural peanut butter",
          ],
          method:
            "Add the oats, cinnamon and milk to a bowl and microwave for 2 minutes. Mix in the protein powder and top with peanut butter and other toppings (optional)",
          cookingTime: "15",
          createdAt: new Date(),
          updatedAt: new Date(),
          likes: 12,
          userId: 1,
          servings: "1",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
