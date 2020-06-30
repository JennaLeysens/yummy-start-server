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
          ingredients:
            "2 x medium tomatoes⁣⁣, 1 x large can of lentils⁣⁣⁣, 250g passata, 500g pasta, 100g baby spinach⁣⁣⁣",
          method:
            "Fry the two diced tomatoes. After a few minutes, add in the passata. Once the passata has warmed up, add in the can of (rinsed) lentils and the baby spinach. Next, add some fresh basil. Add some seasoning (e.g basil, italian herbs, salt and pepper). Cook until the sauce ⁣has thickened. Stir in your cooked pasta and enjoy",
          cookingTime: "30 minutes",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Strawberry Milkshake Smoothie bowl",
          imageURL:
            "https://scontent-amt2-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/93988735_3113805988644148_650732422009060151_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=ZBB_JhUdqr4AX_tAf8G&oh=06809009029b11549cad6a2a260da082&oe=5F23BC48",
          description:
            "Like a strawberry milkshake but refined sugar and dairy free!",
          ingredients:
            "1 x cup of frozen strawberries, ⁣half a frozen banana⁣⁣⁣, 1 tsp sweetener (e.g agave syrup), ⁣⁣3/4 cup of almond milk ⁣⁣⁣⁣⁣⁣",
          method: "Blend ingredients together and add toppings of choice",
          cookingTime: "10 minutes",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "Chickpea mayo filling",
          imageURL:
            "https://scontent-ams4-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/95567937_248030696400022_5879706146711515713_n.jpg?_nc_ht=scontent-ams4-1.cdninstagram.com&_nc_cat=110&_nc_ohc=rp6rSoBnvSQAX8MVXaS&oh=267168f9b3d1a640e96ece5865100a76&oe=5F25DEE1",
          description:
            "A tasty vegetarian filling for sandwiches, wraps or in salads",
          ingredients:
            "1 x small can of chickpeas, 2 x tbs of mayonaise, lemon juice, garlic powder, chives",
          method:
            "Rinse the chickpeas and smash them up into pieces. Add the rest of the ingredients and mix together",
          cookingTime: "10 minutes",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
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
