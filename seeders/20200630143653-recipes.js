"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "recipes",
      [
        {
          title: "Easy and hearty lentil bolognese",
          imageURL:
            "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/95437486_154934106048041_989588099949057939_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=kxcaAt4l2cQAX_PXFEA&oh=c9acd0d4af846d561a3fda32c8beac04&oe=5F22E487",
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
            "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93988735_3113805988644148_650732422009060151_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=ZBB_JhUdqr4AX_tAf8G&oh=06809009029b11549cad6a2a260da082&oe=5F23BC48",
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
            "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/95567937_248030696400022_5879706146711515713_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=rp6rSoBnvSQAX8MVXaS&oh=267168f9b3d1a640e96ece5865100a76&oe=5F25DEE1",
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
            "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93816462_225534651875098_575068455237016509_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=rSLFaFzMEBoAX-g-lWg&oh=8e5b9b232b26ea371f77743654107379&oe=5F2F4AEF",
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
            "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93482718_109437867235226_159961100740511_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=102&_nc_ohc=nMo4HPDDKygAX8PhRFd&oh=8c8de5472fb50c629ab0aaccff2e4bbe&oe=5F313861",
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
            "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/42003303_313816652504104_8121410583518381048_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=104&_nc_ohc=NUUJoXd9ffoAX9sTPJJ&oh=e668a1a2ccbeef41629faaf524d0b18d&oe=5F32180C",
          description: "Like jam but refined sugar free and with extra protein",
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
            "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/92607915_2581808562066358_6942604077921160318_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=DVJoBIvBHpsAX8aZ9P5&oh=724c5cab57889a04eb31f8e1cadae62f&oe=5F3311E8",
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
            "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/58922575_2318069165147181_7708322933299803726_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=8AkAgwrtfp8AX8SY5SV&oh=d868b67015499d4ec8c8249ba84e437d&oe=5F33B8F3",
          description: "An afternoon pick-me-up snack",
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
