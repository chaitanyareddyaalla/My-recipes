const recipes = {
    "butter chicken": {
        "name": "Butter Chicken",
        "description": "Creamy, rich Indian curry with tender chicken.",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=1200",
        "servings": 1,
        "prepTime": 20,
        "cookTime": 45,
        "ingredients": [
            { "name": "Chicken (boneless, skinless, cut into pieces)", "amount": 125, "unit": "g" },
            { "name": "Yogurt", "amount": 30, "unit": "ml" },
            { "name": "Ginger-garlic paste", "amount": 0.5, "unit": "tbsp" },
            { "name": "Lemon juice", "amount": 0.25, "unit": "tbsp" },
            { "name": "Turmeric powder", "amount": 0.125, "unit": "tsp" },
            { "name": "Red chili powder", "amount": 0.25, "unit": "tsp" },
            { "name": "Garam masala", "amount": 0.25, "unit": "tsp" },
            { "name": "Butter", "amount": 12.5, "unit": "g" },
            { "name": "Oil", "amount": 0.25, "unit": "tbsp" },
            { "name": "Tomatoes (pureed)", "amount": 75, "unit": "g" },
            { "name": "Fresh cream", "amount": 30, "unit": "ml" },
            { "name": "Fenugreek leaves (dried)", "amount": 0.25, "unit": "tsp" },
            { "name": "Salt", "amount": "to taste" }
        ],
        "instructions": [
            "Marinate the chicken with yogurt, ginger-garlic paste, lemon juice, turmeric, red chili powder, and garam masala. Let it rest for 30 minutes or overnight.",
            "Heat oil in a pan, cook the marinated chicken until fully cooked, and set it aside.",
            "In the same pan, melt butter and add the pureed tomatoes. Cook until the oil separates.",
            "Add salt, red chili powder, and a little garam masala to the tomato sauce. Stir well.",
            "Add the cooked chicken to the sauce and mix.",
            "Stir in the cream and dried fenugreek leaves. Simmer for 5-7 minutes.",
            "Serve hot with naan or basmati rice."
        ]
    },
    "spicy chicken biryani": {
        "name": "Spicy Chicken Biryani",
        "description": "A flavorful Indian rice dish with tender chicken and aromatic spices.",
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1200",
        "servings": 1,
        "prepTime": 30,
        "cookTime": 60,
        "ingredients": [
            { "name": "Basmati rice", "amount": 200, "unit": "g" },
            { "name": "Chicken (bone-in or boneless)", "amount": 125, "unit": "g" },
            { "name": "Onions (thinly sliced)", "amount": 0.5, "unit": "large" },
            { "name": "Tomatoes (chopped)", "amount": 0.33, "unit": "medium" },
            { "name": "Yogurt", "amount": 33.33, "unit": "ml" },
            { "name": "Ginger-garlic paste", "amount": 0.33, "unit": "tbsp" },
            { "name": "Biryani masala", "amount": 0.33, "unit": "tbsp" },
            { "name": "Red chili powder", "amount": 0.33, "unit": "tsp" },
            { "name": "Turmeric powder", "amount": 0.08, "unit": "tsp" },
            { "name": "Cumin seeds", "amount": 0.16, "unit": "tsp" },
            { "name": "Cloves", "amount": 0.66, "unit": "pieces" },
            { "name": "Green cardamoms", "amount": 0.5, "unit": "pieces" },
            { "name": "Bay leaves", "amount": 0.33, "unit": "pieces" },
            { "name": "Coriander leaves (chopped)", "amount": 0.33, "unit": "tbsp" },
            { "name": "Mint leaves (chopped)", "amount": 0.33, "unit": "tbsp" },
            { "name": "Salt", "amount": "to taste" },
            { "name": "Ghee or oil", "amount": 1, "unit": "tbsp" },
            { "name": "Water (for cooking rice)", "amount": "as required" }
        ],
        "instructions": [
            "Wash and soak the basmati rice in water for 30 minutes. Drain and set aside.",
            "In a large pot, boil water with salt, a bay leaf, and a few whole spices (cloves and cardamoms). Cook the rice until it's 70% done. Drain and set aside.",
            "Marinate the chicken with yogurt, ginger-garlic paste, red chili powder, turmeric, biryani masala, and salt. Let it sit for 30 minutes.",
            "Heat ghee or oil in a large pan. Add cumin seeds, bay leaves, and whole spices (cloves and cardamoms). Sauté for a minute.",
            "Add the sliced onions and cook until golden brown. Reserve a portion of fried onions for garnishing.",
            "Add the chopped tomatoes and cook until soft and oil starts separating.",
            "Add the marinated chicken and cook on medium heat until the chicken is 80% cooked and coated in the masala.",
            "In a large heavy-bottomed pot, layer half of the cooked rice, followed by the chicken and masala. Sprinkle chopped coriander, mint leaves, and some fried onions. Add the remaining rice on top.",
            "Drizzle ghee or oil over the top and cover the pot with a tight lid. Cook on low heat for 20-25 minutes (dum cooking).",
            "Turn off the heat and let it rest for 10 minutes before serving.",
            "Serve hot with raita or salad."
        ]
    },
    "carrot halwa": {
        "name": "Carrot Halwa",
        "description": "A rich and flavorful Indian dessert made with carrots, milk, and ghee.",
        "image": "https://greedyeats.com/wp-content/uploads/2023/08/Carrot-Halwa.jpg",
        "servings": 1,
        "prepTime": 15,
        "cookTime": 40,
        "ingredients": [
            { "name": "Carrots", "amount": 83.33, "unit": "g" },
            { "name": "Milk", "amount": 166.67, "unit": "ml" },
            { "name": "Ghee", "amount": 8.33, "unit": "g" },
            { "name": "Cardamom pods", "amount": 1, "unit": "pcs" },
            { "name": "Sugar", "amount": 16.67, "unit": "g" },
            { "name": "Cashews", "amount": 3.33, "unit": "g" },
            { "name": "Raisins", "amount": 2.5, "unit": "g" }
        ],
        "instructions": [
            "Grate the carrots and set them aside.",
            "In a pan, add ghee and sauté the grated carrots until fragrant.",
            "Add milk to the pan, ensuring it is double the quantity of carrots, and bring to a boil.",
            "Add cardamom pods for flavor and cook until the milk reduces to half.",
            "Add sugar and continue to cook, stirring frequently, until the milk reduces further into a thick kova consistency.",
            "In a separate pan, fry cashews and raisins in ghee and add them to the halwa.",
            "Stir well, garnish as desired, and serve warm."
        ]
    },
    "red sauce pasta": {
        "name": "Red Sauce Pasta",
        "description": "A tangy and spicy pasta dish with a rich tomato-based sauce.",
        "image": "https://www.bigbasket.com/media/uploads/recipe/w-l/2533_1_1.jpg",
        "servings": 1,
        "prepTime": 20,
        "cookTime": 25,
        "ingredients": [
            { "name": "Tomatoes", "amount": 2, "unit": "pcs" },
            { "name": "Red chilies", "amount": 1.25, "unit": "pcs" },
            { "name": "Garlic", "amount": 1, "unit": "clove" },
            { "name": "Ginger", "amount": 5, "unit": "g" },
            { "name": "Macaroni pasta", "amount": 62.5, "unit": "g" },
            { "name": "Oil", "amount": 0.75, "unit": "tbsp" },
            { "name": "Onions", "amount": 0.25, "unit": "cup" },
            { "name": "Bell peppers", "amount": 0.25, "unit": "cup" },
            { "name": "Capsicum", "amount": 0.25, "unit": "cup" },
            { "name": "Black pepper", "amount": 0.25, "unit": "tsp" },
            { "name": "Oregano", "amount": 0.25, "unit": "tsp" },
            { "name": "Chili flakes", "amount": 0.25, "unit": "tsp" },
            { "name": "Sugar", "amount": 0.25, "unit": "tsp" },
            { "name": "Salt", "amount": 0.25, "unit": "tsp" },
            { "name": "Coriander", "amount": 0.5, "unit": "tbsp" }
        ],
        "instructions": [
            "Boil the tomatoes and red chilies for 5 minutes, then peel the tomatoes.",
            "Blend the boiled tomatoes, red chilies, ginger, and garlic into a smooth sauce.",
            "In a pan, heat oil and add the tomato mixture. Add coriander, spices, sugar, and salt, then cook for 2 minutes.",
            "Boil the macaroni with a little oil and salt, then drain and set aside.",
            "In another pan, sauté onions, capsicum, and bell peppers.",
            "Add the boiled macaroni and fry slightly, then mix in the prepared tomato sauce.",
            "Cook everything together for 3-4 minutes. Add oregano and chili flakes, stir well, and serve."
        ]
    },
    "dragon chicken": {
        "name": "Dragon Chicken",
        "description": "A spicy and tangy Indo-Chinese chicken dish, perfect as a starter or main course.",
        "image": "https://www.yummytummyaarthi.com/wp-content/uploads/2021/11/dragon-chicken-1.jpeg",
        "servings": 1,
        "prepTime": 20,
        "cookTime": 30,
        "ingredients": [
            { "name": "Chicken breast", "amount": 125, "unit": "g" },
            { "name": "Egg", "amount": 0.25, "unit": "pcs" },
            { "name": "Cornflour", "amount": 0.5, "unit": "tbsp" },
            { "name": "All-purpose flour", "amount": 0.25, "unit": "tbsp" },
            { "name": "Salt", "amount": 0.25, "unit": "tsp" },
            { "name": "Black pepper powder", "amount": 0.125, "unit": "tsp" },
            { "name": "Oil", "amount": 125, "unit": "ml" },
            { "name": "Ginger-garlic paste", "amount": 0.25, "unit": "tbsp" },
            { "name": "Onion", "amount": 0.25, "unit": "pcs" },
            { "name": "Capsicum", "amount": 0.25, "unit": "pcs" },
            { "name": "Green chilies", "amount": 0.75, "unit": "pcs" },
            { "name": "Tomato ketchup", "amount": 0.5, "unit": "tbsp" },
            { "name": "Soy sauce", "amount": 0.25, "unit": "tbsp" },
            { "name": "Red chili sauce", "amount": 0.25, "unit": "tbsp" },
            { "name": "Vinegar", "amount": 0.25, "unit": "tsp" },
            { "name": "Honey", "amount": 0.25, "unit": "tbsp" },
            { "name": "Water", "amount": 0.125, "unit": "cup" },
            { "name": "Spring onions", "amount": 0.5, "unit": "tbsp" },
            { "name": "Sesame seeds", "amount": 0.25, "unit": "tbsp" }
        ],
        "instructions": [
            "In a bowl, whisk the egg and add cornflour, all-purpose flour, salt, and pepper. Mix well.",
            "Add the chicken strips to the mixture and coat them thoroughly.",
            "Heat oil in a pan and deep fry the chicken strips until golden and crispy. Remove and set aside.",
            "In another pan, heat 0.5 tbsp oil and add ginger-garlic paste. Sauté until fragrant.",
            "Add sliced onions, capsicum, and green chilies. Stir-fry for a couple of minutes.",
            "Add tomato ketchup, soy sauce, red chili sauce, vinegar, and honey. Mix well.",
            "Pour in water and let the sauce simmer for a few minutes. Adjust salt if needed.",
            "Add the fried chicken strips to the sauce and toss until well coated. Cook for 2-3 minutes.",
            "Garnish with chopped spring onions and sesame seeds. Serve hot with rice or noodles."
        ]
    },
    "aloo paratha": {
        "name": "Aloo Paratha",
        "description": "A classic Indian flatbread stuffed with spiced mashed potatoes, perfect for breakfast or any meal.",
        "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe-500x500.jpg",
        "servings": 1,
        "prepTime": 30,
        "cookTime": 20,
        "ingredients": [
            { "name": "Whole wheat flour", "amount": 0.5, "unit": "cup" },
            { "name": "Water", "amount": "as needed", "unit": "" },
            { "name": "Salt", "amount": 0.25, "unit": "tsp" },
            { "name": "Oil or ghee", "amount": 0.25, "unit": "tbsp" },
            { "name": "Potatoes", "amount": 1, "unit": "medium" },
            { "name": "Onion", "amount": 0.25, "unit": "small" },
            { "name": "Green chilies", "amount": 0.5, "unit": "pcs" },
            { "name": "Ginger", "amount": 0.125, "unit": "inch" },
            { "name": "Cumin seeds", "amount": 0.25, "unit": "tsp" },
            { "name": "Turmeric powder", "amount": 0.125, "unit": "tsp" },
            { "name": "Red chili powder", "amount": 0.125, "unit": "tsp" },
            { "name": "Garam masala", "amount": 0.125, "unit": "tsp" },
            { "name": "Fresh coriander leaves", "amount": 0.5, "unit": "tbsp" },
            { "name": "Oil or ghee", "amount": 0.25, "unit": "tbsp" }
        ],
        "instructions": [
            "In a large bowl, mix the whole wheat flour and salt. Gradually add water and knead into a soft dough.",
            "Add 0.25 tbsp of oil or ghee to the dough and knead again. Cover with a damp cloth and let rest for 20-30 minutes.",
            "Heat oil or ghee in a pan and add cumin seeds. Let them splutter.",
            "Add chopped onions, green chilies, and grated ginger. Sauté until onions turn translucent.",
            "Add turmeric powder, red chili powder, and salt. Mix well.",
            "Add mashed potatoes and stir to combine. Cook for a few minutes, then add garam masala and chopped coriander leaves. Mix well and cook for another 2 minutes. Let the filling cool.",
            "Divide the dough into equal-sized balls. Roll each ball into a small circle and place a portion of the potato filling in the center.",
            "Bring the edges of the dough together to seal the filling and form a ball. Flatten gently and roll out into a flat circle.",
            "Heat a tawa or griddle over medium heat. Place the rolled paratha on the hot tawa and cook on one side until bubbles form, then flip.",
            "Spread a little oil or ghee on the cooked side and flip again. Spread oil or ghee on the other side and cook until golden brown and crisp.",
            "Repeat with the remaining dough and filling. Serve hot with yogurt, pickle, or chutney."
        ]
    },
    "dalgona coffee": {
        "name": "Dalgona Coffee",
        "description": "A whipped coffee drink with a creamy and frothy top layer, perfect for coffee lovers.",
        "image": "https://cdn11.bigcommerce.com/s-cjh14ahqln/product_images/uploaded_images/finalimage-web.jpg",
        "servings": 1,
        "prepTime": 10,
        "cookTime": 0,
        "ingredients": [
            { "name": "Instant coffee", "amount": 0.5, "unit": "tbsp" },
            { "name": "Sugar", "amount": 0.5, "unit": "tbsp" },
            { "name": "Hot water", "amount": 0.5, "unit": "tbsp" },
            { "name": "Milk", "amount": 0.25, "unit": "cup" },
            { "name": "Ice cubes", "amount": "as needed", "unit": "" }
        ],
        "instructions": [
            "In a mixing bowl, combine instant coffee, sugar, and hot water.",
            "Using a hand whisk or electric mixer, whip the mixture until it becomes light, fluffy, and forms stiff peaks. This takes about 3-5 minutes with an electric mixer or longer if whisking by hand.",
            "If using cold milk, fill a glass with ice cubes.",
            "Pour milk into the glass, leaving space at the top for the whipped coffee mixture.",
            "Spoon the whipped coffee mixture on top of the milk.",
            "Stir the coffee into the milk before drinking, if desired."
        ]
    },
    'pulihora': {
        name: 'Pulihora (Tamarind Rice)',
        description: 'A tangy and flavorful South Indian rice dish made with tamarind and aromatic spices.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNzQ5BO_V8RgBGtSgiBndwWhA4i_4BEumsg&s',
       "servings": 1,
        "prepTime": 15,
        "cookTime": 20,
        "ingredients": [
            { "name": "Cooked rice", "amount": 100, "unit": "g" },
            { "name": "Tamarind pulp", "amount": 1, "unit": "tbsp" },
            { "name": "Turmeric powder", "amount": 0.125, "unit": "tsp" },
            { "name": "Salt", "amount": "to taste", "unit": "" },
            { "name": "Sesame oil", "amount": 0.5, "unit": "tbsp" },
            { "name": "Mustard seeds", "amount": 0.25, "unit": "tsp" },
            { "name": "Curry leaves", "amount": 5, "unit": "leaves" },
            { "name": "Dry red chilies", "amount": 0.5, "unit": "pcs" },
            { "name": "Green chilies", "amount": 0.5, "unit": "pcs" },
            { "name": "Peanuts", "amount": 1, "unit": "tbsp" },
            { "name": "Hing (asafoetida)", "amount": 0.125, "unit": "tsp" }
        ],
        "instructions": [
            "Heat sesame oil in a pan and add mustard seeds. Let them splutter.",
            "Add curry leaves, dry red chilies, green chilies, peanuts, and hing. Sauté for a few minutes.",
            "Add turmeric powder, tamarind pulp, and salt. Cook until the mixture thickens slightly.",
            "Mix the prepared tamarind mixture into the cooked rice evenly.",
            "Let it rest for 10 minutes before serving for enhanced flavor."
        ]
    },
    'kheer': {
        name: 'Kheer (Indian Rice Pudding)',
        description: 'A creamy and delicious traditional Indian dessert made with rice, milk, and aromatic spices.',
        image: 'https://www.sharmispassions.com/wp-content/uploads/2018/03/RiceKheer4-1.jpg',
        "servings": 1,
        "prepTime": 10,
        "cookTime": 30,
        "ingredients": [
            { "name": "Milk", "amount": 1, "unit": "cup" },
            { "name": "Rice", "amount": 2, "unit": "tbsp" },
            { "name": "Sugar", "amount": 1, "unit": "tbsp" },
            { "name": "Cardamom powder", "amount": 0.125, "unit": "tsp" },
            { "name": "Cashews", "amount": 0.5, "unit": "tbsp" },
            { "name": "Raisins", "amount": 0.5, "unit": "tbsp" },
            { "name": "Saffron", "amount": 2, "unit": "strands" }
        ],
        "instructions": [
            "Wash and soak the rice for 15 minutes.",
            "In a heavy-bottomed pan, bring the milk to a boil.",
            "Add the soaked rice and cook on low heat, stirring occasionally to prevent sticking.",
            "When the rice is soft and the milk thickens, add sugar and cardamom powder.",
            "Cook for a few more minutes and add cashews, raisins, and saffron.",
            "Serve warm or chilled."
        ]
    },
    'gulab_jamun': {
        name: 'Gulab Jamun',
        description: 'Soft and syrup-soaked Indian sweet dessert, made with khoya and infused with cardamom and rose flavors.',
        image: 'https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/gulab-jamun.png',
        "servings": 1,
        "prepTime": 20,
        "cookTime": 30,
        "ingredients": [
            { "name": "Khoya (mawa)", "amount": 50, "unit": "g" },
            { "name": "All-purpose flour", "amount": 1, "unit": "tbsp" },
            { "name": "Baking soda", "amount": 0.125, "unit": "tsp" },
            { "name": "Milk", "amount": 0.5, "unit": "tbsp" },
            { "name": "Sugar", "amount": 0.5, "unit": "cup" },
            { "name": "Water", "amount": 0.5, "unit": "cup" },
            { "name": "Cardamom pods", "amount": 1, "unit": "pcs" },
            { "name": "Rose water", "amount": 0.25, "unit": "tsp" },
            { "name": "Ghee or oil", "amount": "for frying", "unit": "" }
        ],
        "instructions": [
            "In a bowl, mix khoya, all-purpose flour, and baking soda. Knead into a smooth dough, adding milk as needed.",
            "Divide the dough into small balls, ensuring they are smooth and crack-free.",
            "Heat ghee or oil in a pan and fry the balls on low heat until golden brown. Remove and set aside.",
            "In another pan, prepare the sugar syrup by boiling sugar, water, and cardamom pods until slightly sticky. Add rose water and mix.",
            "Soak the fried gulab jamuns in the warm syrup for at least 30 minutes before serving."
        ]
    },
    'mutton_biryani': {
    name: 'Mutton Biryani',
    description: 'A flavorful and aromatic rice dish made with marinated mutton, basmati rice, and a blend of spices, cooked to perfection.',
    image: 'https://pipingpotcurry.com/wp-content/uploads/2024/05/Lamb-Biryani.-Mutton-Biryani-Piping-Pot-Curry.jpg',
    "servings": 1,
        "prepTime": 40,
        "cookTime": 60,
        "ingredients": [
            { "name": "Basmati rice", "amount": 100, "unit": "g" },
            { "name": "Mutton", "amount": 125, "unit": "g" },
            { "name": "Yogurt", "amount": 1, "unit": "tbsp" },
            { "name": "Ginger-garlic paste", "amount": 0.5, "unit": "tbsp" },
            { "name": "Onions", "amount": 0.5, "unit": "pcs" },
            { "name": "Tomatoes", "amount": 0.25, "unit": "pcs" },
            { "name": "Green chilies", "amount": 0.5, "unit": "pcs" },
            { "name": "Mint leaves", "amount": 0.5, "unit": "tbsp" },
            { "name": "Coriander leaves", "amount": 0.5, "unit": "tbsp" },
            { "name": "Biryani masala", "amount": 0.5, "unit": "tsp" },
            { "name": "Salt", "amount": "to taste", "unit": "" },
            { "name": "Oil or ghee", "amount": 0.5, "unit": "tbsp" }
        ],
        "instructions": [
            "Marinate the mutton with yogurt, ginger-garlic paste, and biryani masala for at least 1 hour.",
            "Cook the basmati rice until 70% done and set aside.",
            "In a pan, heat oil or ghee and sauté sliced onions until golden brown.",
            "Add tomatoes, green chilies, mint, and coriander leaves. Cook until the tomatoes soften.",
            "Add the marinated mutton and cook until tender.",
            "In a heavy-bottomed pot, layer the cooked rice and mutton mixture. Cover tightly and cook on low heat for 20 minutes.",
            "Serve hot with raita or salad."
        ]
    },
   'dal_sambar': {
    name: 'Dal Sambar',
    description: 'A hearty South Indian lentil soup made with toor dal, mixed vegetables, tamarind, and a fragrant blend of spices, perfect with rice or dosa.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQSd3bjDSm-MxUbyXZJHbVg79LVibrupNeA&s',
    "servings": 1,
    "prepTime": 15,
    "cookTime": 30,
    "ingredients": [
        { "name": "Toor dal (pigeon peas)", "amount": 2, "unit": "tbsp" },
        { "name": "Tamarind pulp", "amount": 0.5, "unit": "tbsp" },
        { "name": "Mixed vegetables", "amount": 0.5, "unit": "cup" },
        { "name": "Sambar powder", "amount": 0.5, "unit": "tbsp" },
        { "name": "Turmeric powder", "amount": 0.125, "unit": "tsp" },
        { "name": "Salt", "amount": "to taste", "unit": "" },
        { "name": "Mustard seeds", "amount": 0.25, "unit": "tsp" },
        { "name": "Curry leaves", "amount": 5, "unit": "leaves" },
        { "name": "Dry red chilies", "amount": 0.5, "unit": "pcs" },
        { "name": "Hing (asafoetida)", "amount": 0.125, "unit": "tsp" },
        { "name": "Oil", "amount": 0.5, "unit": "tbsp" }
    ],
    "instructions": [
        "Cook toor dal with turmeric powder until soft and mash it well.",
        "In a pan, cook the mixed vegetables until tender.",
        "Add tamarind pulp, sambar powder, and salt to the cooked vegetables. Simmer for 5 minutes.",
        "Add the mashed dal to the vegetable mixture and simmer for another 5 minutes.",
        "Heat oil in a small pan and add mustard seeds. Let them splutter.",
        "Add curry leaves, dry red chilies, and hing. Sauté for a minute.",
        "Pour the tempering over the sambar and mix well. Serve hot with rice or idli."
    ]
},
   'prawns_fry': {
    name: 'Prawns Fry',
    description: 'A flavorful and spicy stir-fried prawn dish made with aromatic spices, sautéed onions, and a hint of curry leaves.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxwr9zm9Zh8sUNCWXhw_cCLInn2plPFpkYQ&s',
    "servings": 1,
    "prepTime": 15,
    "cookTime": 20,
    "ingredients": [
        { "name": "Prawns (cleaned)", "amount": 100, "unit": "g" },
        { "name": "Turmeric powder", "amount": 0.125, "unit": "tsp" },
        { "name": "Red chili powder", "amount": 0.25, "unit": "tsp" },
        { "name": "Ginger-garlic paste", "amount": 0.25, "unit": "tbsp" },
        { "name": "Salt", "amount": "to taste", "unit": "" },
        { "name": "Oil", "amount": 0.5, "unit": "tbsp" },
        { "name": "Curry leaves", "amount": 5, "unit": "leaves" },
        { "name": "Mustard seeds", "amount": 0.25, "unit": "tsp" }
    ],
    "instructions": [
        "Marinate the prawns with turmeric powder, red chili powder, ginger-garlic paste, and salt. Set aside for 10 minutes.",
        "Heat oil in a pan and add mustard seeds. Let them splutter.",
        "Add curry leaves and the marinated prawns.",
        "Cook on medium heat for 8-10 minutes, stirring occasionally.",
        "Serve hot with rice or as an appetizer."
    ]
},
  'egg_rice': {
    name: 'Egg Rice',
    description: 'A simple and flavorful one-pan dish made with scrambled eggs, cooked rice, and a blend of aromatic spices.',
    image: 'https://images.mrcook.app/recipe-image/0190ba07-a9bf-763e-b7e1-e89a55379f7e',
    "servings": 1,
    "prepTime": 10,
    "cookTime": 15,
    "ingredients": [
        { "name": "Cooked rice", "amount": 100, "unit": "g" },
        { "name": "Eggs", "amount": 1, "unit": "pcs" },
        { "name": "Oil", "amount": 0.5, "unit": "tbsp" },
        { "name": "Salt", "amount": "to taste", "unit": "" },
        { "name": "Pepper powder", "amount": 0.125, "unit": "tsp" },
        { "name": "Green chilies", "amount": 0.5, "unit": "pcs" },
        { "name": "Onions (chopped)", "amount": 0.25, "unit": "cup" },
        { "name": "Soy sauce", "amount": 0.25, "unit": "tsp" }
    ],
    "instructions": [
        "Heat oil in a pan and sauté chopped onions and green chilies until translucent.",
        "Add the eggs and scramble them well.",
        "Add cooked rice, salt, pepper powder, and soy sauce. Mix well.",
        "Cook for another 2-3 minutes and serve hot."
    ]
},
  'vegetable_rice': {
    name: 'Vegetable Rice',
    description: 'A fragrant and colorful rice dish made with mixed vegetables, aromatic spices, and basmati rice, perfect as a standalone meal or side dish.',
    image: 'https://www.indianveggiedelight.com/wp-content/uploads/2020/06/veg-fried-rice-featured.jpg',
    "servings": 1,
    "prepTime": 15,
    "cookTime": 20,
    "ingredients": [
        { "name": "Cooked rice", "amount": 100, "unit": "g" },
        { "name": "Mixed vegetables", "amount": 0.5, "unit": "cup" },
        { "name": "Oil", "amount": 0.5, "unit": "tbsp" },
        { "name": "Cumin seeds", "amount": 0.25, "unit": "tsp" },
        { "name": "Salt", "amount": "to taste", "unit": "" },
        { "name": "Pepper powder", "amount": 0.125, "unit": "tsp" },
        { "name": "Turmeric powder", "amount": 0.125, "unit": "tsp" },
        { "name": "Green chilies", "amount": 0.5, "unit": "pcs" }
    ],
    "instructions": [
        "Heat oil in a pan and add cumin seeds. Let them splutter.",
        "Add chopped mixed vegetables and sauté for 5 minutes.",
        "Add salt, turmeric powder, green chilies, and pepper powder. Mix well.",
        "Add cooked rice and stir to combine.",
        "Cook for another 2-3 minutes and serve hot."
    ]
},

  'upma': {
    name: 'Upma',
    description: 'A savory and aromatic South Indian breakfast dish made with semolina, tempered with mustard seeds, cumin, and dals, topped with lemon juice and fresh coriander.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIjtlIoJ5oa5eBg8qpvlcZDUz6vjLJqLNTw&s',
    "servings": 1,
        "prepTime": 10,
        "cookTime": 15,
        "ingredients": [
            { "name": "Semolina (rava)", "amount": 0.25, "unit": "cup" },
            { "name": "Water", "amount": 0.5, "unit": "cup" },
            { "name": "Oil", "amount": 0.5, "unit": "tbsp" },
            { "name": "Mustard seeds", "amount": 0.25, "unit": "tsp" },
            { "name": "Curry leaves", "amount": 5, "unit": "leaves" },
            { "name": "Green chilies", "amount": 0.5, "unit": "pcs" },
            { "name": "Onions (chopped)", "amount": 0.25, "unit": "cup" },
            { "name": "Salt", "amount": "to taste", "unit": "" }
        ],
        "instructions": [
            "Dry roast the semolina in a pan until it turns slightly golden and aromatic. Set aside.",
            "Heat oil in the same pan and add mustard seeds. Let them splutter.",
            "Add curry leaves, green chilies, and chopped onions. Sauté until the onions turn translucent.",
            "Add water and salt to the pan and bring it to a boil.",
            "Gradually add the roasted semolina while stirring continuously to avoid lumps.",
            "Cook on low heat until the upma thickens. Serve hot."
        ]
    },
   'paneer_butter_masala': {
    name: 'Paneer Butter Masala',
    description: 'A rich and creamy North Indian dish made with soft paneer cubes simmered in a flavorful tomato-based gravy, spiced with aromatic Indian spices and finished with cream.',
    image: 'https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg',
    "servings": 1,
        "prepTime": 20,
        "cookTime": 25,
        "ingredients": [
            { "name": "Paneer", "amount": 100, "unit": "g" },
            { "name": "Butter", "amount": 0.5, "unit": "tbsp" },
            { "name": "Oil", "amount": 0.25, "unit": "tbsp" },
            { "name": "Onions (chopped)", "amount": 0.25, "unit": "cup" },
            { "name": "Tomato puree", "amount": 0.5, "unit": "cup" },
            { "name": "Cream", "amount": 0.25, "unit": "cup" },
            { "name": "Ginger-garlic paste", "amount": 0.25, "unit": "tbsp" },
            { "name": "Red chili powder", "amount": 0.25, "unit": "tsp" },
            { "name": "Garam masala", "amount": 0.25, "unit": "tsp" },
            { "name": "Salt", "amount": "to taste", "unit": "" }
        ],
        "instructions": [
            "Heat butter and oil in a pan. Add chopped onions and sauté until golden.",
            "Add ginger-garlic paste and sauté until fragrant.",
            "Add tomato puree, red chili powder, and salt. Cook until the oil separates.",
            "Add garam masala and cream. Mix well.",
            "Add paneer cubes and simmer for 5 minutes.",
            "Serve hot with naan or rice."
        ]
    },
  'pav_bhaji': {
    name: 'Pav Bhaji',
    description: 'A flavorful, spiced vegetable mash served with buttery toasted pav buns. A popular street food from Mumbai that’s loved for its bold flavors.',
    image: 'https://bhojmasale.com/cdn/shop/articles/YFL-Pav-Bhaji-2_8a51cfbd-f4ff-4ee8-81e6-90831eaa304d_1024x1024.webp?v=1719038943',
    "servings": 1,
        "prepTime": 20,
        "cookTime": 30,
        "ingredients": [
            { "name": "Potatoes (boiled and mashed)", "amount": 1, "unit": "pcs" },
            { "name": "Mixed vegetables (boiled and mashed)", "amount": 0.5, "unit": "cup" },
            { "name": "Butter", "amount": 0.5, "unit": "tbsp" },
            { "name": "Oil", "amount": 0.25, "unit": "tbsp" },
            { "name": "Onions (chopped)", "amount": 0.25, "unit": "cup" },
            { "name": "Tomatoes (chopped)", "amount": 0.25, "unit": "cup" },
            { "name": "Ginger-garlic paste", "amount": 0.25, "unit": "tbsp" },
            { "name": "Pav bhaji masala", "amount": 0.5, "unit": "tsp" },
            { "name": "Red chili powder", "amount": 0.25, "unit": "tsp" },
            { "name": "Salt", "amount": "to taste", "unit": "" },
            { "name": "Pav buns", "amount": 1, "unit": "pcs" }
        ],
        "instructions": [
            "Heat butter and oil in a pan. Add chopped onions and sauté until golden.",
            "Add ginger-garlic paste and sauté until fragrant.",
            "Add chopped tomatoes, pav bhaji masala, red chili powder, and salt. Cook until the oil separates.",
            "Add mashed vegetables and mix well.",
            "Cook on low heat, mashing everything together, until well blended.",
            "Serve hot with buttered pav buns and chopped onions on the side."
        ]
    },
  "kachori": {
        "name": "Kachori",
        "description": "A crispy, deep-fried pastry filled with a spiced moong dal mixture. A delicious snack enjoyed with chutneys.",
        "image": "https://boxedhalal.com/cdn/shop/articles/Keema-Kachori-03.jpg?v=1600273628&width=2048",
        "servings": 1,
        "prepTime": 25,
        "cookTime": 30,
        "ingredients": [
            { "name": "All-purpose flour (maida)", "amount": 0.5, "unit": "cup" },
            { "name": "Oil or ghee", "amount": 1, "unit": "tbsp" },
            { "name": "Salt", "amount": "to taste", "unit": "" },
            { "name": "Water", "amount": "as needed", "unit": "" },
            { "name": "Moong dal (soaked for 2 hours)", "amount": 0.25, "unit": "cup" },
            { "name": "Oil", "amount": 0.25, "unit": "tbsp" },
            { "name": "Cumin seeds", "amount": 0.25, "unit": "tsp" },
            { "name": "Fennel seeds", "amount": 0.125, "unit": "tsp" },
            { "name": "Turmeric powder", "amount": 0.125, "unit": "tsp" },
            { "name": "Red chili powder", "amount": 0.25, "unit": "tsp" },
            { "name": "Coriander powder", "amount": 0.25, "unit": "tsp" },
            { "name": "Garam masala", "amount": 0.125, "unit": "tsp" }
        ],
        "instructions": [
            "In a bowl, mix the all-purpose flour, salt, and oil/ghee.",
            "Gradually add water and knead into a soft dough.",
            "Cover the dough with a damp cloth and let it rest for 20-30 minutes.",
            "Heat oil in a pan and add cumin seeds and fennel seeds. Let them splutter.",
            "Add soaked moong dal and cook for a few minutes.",
            "Add turmeric powder, red chili powder, coriander powder, garam masala, and salt. Mix well.",
            "Cook until the dal is soft and the mixture is dry.",
            "Let the filling cool.",
            "Divide the dough into small balls. Roll each ball into a small circle.",
            "Place a spoonful of the filling in the center and seal the edges to form a ball.",
            "Flatten the ball gently and roll it out slightly.",
            "Heat oil in a deep pan. Fry the kachoris on medium heat until they are golden brown and crispy.",
            "Serve hot kachoris with tamarind chutney or green chutney."
        ]
    }
 
};

// // Global variable to track the current recipe
// let currentRecipe = null;

// // Create Recipe Buttons
// function createRecipeButtons() {
//     const container = document.getElementById("recipeButtons");
//     container.innerHTML = ""; // Clear any existing buttons
//     Object.keys(recipes).forEach((key) => {
//         const recipe = recipes[key];

//         // Create button
//         const button = document.createElement("button");
//         button.classList.add("recipe-button");
//         button.onclick = () => displayRecipe(recipe);

//         // Add image and name
//         const img = document.createElement("img");
//         img.src = recipe.image;
//         img.alt = recipe.name;

//         const name = document.createElement("p");
//         name.textContent = recipe.name;

//         button.appendChild(img);
//         button.appendChild(name);
//         container.appendChild(button);
//     });
// }

// // Display Selected Recipe
// function displayRecipe(recipe) {
//     currentRecipe = recipe; // Set the current recipe
//     const recipeDisplay = document.getElementById("recipeDisplay");
//     recipeDisplay.classList.remove("hidden");

//     // Populate recipe details
//     document.getElementById("recipeName").textContent = recipe.name;
//     document.getElementById("recipeDescription").textContent = recipe.description;
//     document.getElementById("prepTime").textContent = `${recipe.prepTime} mins`;
//     document.getElementById("cookTime").textContent = `${recipe.cookTime} mins`;
//     document.getElementById("totalTime").textContent = `${recipe.prepTime + recipe.cookTime} mins`;

//     // Initialize servings
//     const servingsElement = document.getElementById("servings");
//     servingsElement.textContent = recipe.servings;

//     // Update ingredients and instructions
//     updateIngredients(recipe.ingredients, recipe.servings);
//     updateInstructions(recipe.instructions);

//     // Show Taste Customization
//     document.getElementById("tasteCustomization").classList.remove("hidden");

//     // Setup serving adjustment
//     document.getElementById("increase").onclick = () => adjustServings(1);
//     document.getElementById("decrease").onclick = () => adjustServings(-1);
// }

// // Adjust Serving Size
// function adjustServings(change) {
//     const servingsElement = document.getElementById("servings");
//     let currentServings = parseInt(servingsElement.textContent);
//     currentServings = Math.max(1, currentServings + change); // Prevent zero or negative servings
//     servingsElement.textContent = currentServings;

//     // Update ingredient quantities
//     if (currentRecipe) {
//         updateIngredients(currentRecipe.ingredients, currentServings);
//     }
// }

// function updateIngredients(ingredients, servings) {
//     const ingredientsList = document.getElementById("ingredientsList");
//     const originalServings = currentRecipe.servings;

//     // Clear the ingredients list
//     ingredientsList.innerHTML = "";

//     ingredients.forEach((ingredient) => {
//         const adjustedAmount = ((ingredient.amount / originalServings) * servings).toFixed(2);

//         // Create a list item for each ingredient
//         const listItem = document.createElement("li");
//         listItem.textContent = `${adjustedAmount} ${ingredient.unit} ${ingredient.name}`;
        
//         // Append to the list
//         ingredientsList.appendChild(listItem);
//     });
// }


// // Update Instructions List
// function updateInstructions(instructions) {
//     const instructionsList = document.getElementById("instructionsList");
//     instructionsList.innerHTML = instructions
//         .map((step, idx) => `<li>Step ${idx + 1}: ${step}</li>`)
//         .join("");
// }



// function updateTaste(type, value) {
//     console.log(`Updating taste: ${type} with value: ${value}`);

//     const tasteLevels = ["Normal", "Medium", "High", "Very High"];
//     const displayElement = document.getElementById(`${type}Value`);
//     displayElement.textContent = tasteLevels[value];

//     if (currentRecipe) {
//         // Map taste types to ingredient categories
//         const tasteMapping = {
//             spiciness: "spicy",
//             saltiness: "salt",
//             sourness: "sour",
//             bitterness: "bitter",
//         };

//         // Get the corresponding category for the slider
//         const category = tasteMapping[type];
//         if (category) {
//             const tasteIngredients = currentRecipe.ingredients.filter(
//                 (ing) => ing.category === category
//             );

//             const ingredientsList = document.getElementById("ingredientsList");
//             ingredientsList.innerHTML = currentRecipe.ingredients
//                 .map((ing) => {
//                     let adjustedAmount = ing.amount;

//                     if (tasteIngredients.includes(ing)) {
//                         // Apply the specific increase based on the taste level
//                         let increaseAmount = 0;
//                         switch (value) {
//                             case "0": // Normal
//                                 increaseAmount = 1;
//                                 break;
//                             case "1": // Medium
//                                 increaseAmount = 3;
//                                 break;
//                             case "2": // High
//                                 increaseAmount = 5;
//                                 break;
//                             case "3": // Very High
//                                 increaseAmount = 8;
//                                 break;
//                             default:
//                                 break;
//                         }

//                         adjustedAmount = (parseFloat(ing.amount) + increaseAmount).toFixed(2);
//                     }

//                     return `<li>${adjustedAmount} ${ing.unit} ${ing.name}</li>`;
//                 })
//                 .join("");
//         }
//     }
// }






// // Initialize on Page Load
// window.onload = () => {
//     createRecipeButtons();

//     // Setup sliders for taste customization
//     ["spiciness", "sweetness", "sourness", "saltiness", "bitterness"].forEach((type) => {
//         const slider = document.getElementById(`${type}Slider`);
//         if (slider) {
//             slider.oninput = () => updateTaste(type, slider.value);
//         }
//     });
// };
// // Update the `displayRecipe` function
// function displayRecipe(recipe) {
//     currentRecipe = recipe; // Set the current recipe
//     const recipeDisplay = document.getElementById("recipeDisplay");
//     recipeDisplay.classList.remove("hidden");

//     // Populate recipe details
//     document.getElementById("recipeName").textContent = recipe.name;
//     document.getElementById("recipeDescription").textContent = recipe.description;
//     document.getElementById("prepTime").textContent = `${recipe.prepTime} mins`;
//     document.getElementById("cookTime").textContent = `${recipe.cookTime} mins`;
//     document.getElementById("totalTime").textContent = `${recipe.prepTime + recipe.cookTime} mins`;

//     // Initialize servings
//     const servingsElement = document.getElementById("servings");
//     servingsElement.textContent = recipe.servings;

//     // Update ingredients and instructions
//     updateIngredients(recipe.ingredients, recipe.servings);
//     updateInstructions(recipe.instructions);

//     // Show Taste Customization
//     document.getElementById("tasteCustomization").classList.remove("hidden");

//     // Set the dish image dynamically
//     const recipeImage = document.getElementById("recipeImage");
//     recipeImage.src = recipe.image;
//     recipeImage.alt = recipe.name;

//     // Setup serving adjustment
//     document.getElementById("increase").onclick = () => adjustServings(1);
//     document.getElementById("decrease").onclick = () => adjustServings(-1);
// }

// function updateTaste(type, value) {
//     console.log(`Updating taste: ${type} with value: ${value}`);

//     const tasteLevels = ["Normal", "Medium", "High", "Very High"];
//     const displayElement = document.getElementById(`${type}Value`);
//     displayElement.textContent = tasteLevels[value];

//     if (currentRecipe) {
//         const ingredientsList = document.getElementById("ingredientsList");
//         const originalServings = currentRecipe.servings; // The base serving size of the recipe
//         const currentServings = parseInt(document.getElementById("servings").textContent);

//         // Define multipliers for each taste level
//         const multipliers = { "0": 1, "1": 1.5, "2": 2, "3": 3 };

//         const tasteAdjustments = {
//             spiciness: "red chili powder",
//             sweetness: "sugar",
//             saltiness: "salt",
//             sourness: ["lemon", "tamarind"],
//         };

//         const multiplier = multipliers[value]; // Multiplier for the current slider level

//         // Update ingredients dynamically
//         ingredientsList.innerHTML = currentRecipe.ingredients
//             .map((ing) => {
//                 let adjustedAmount = (ing.amount / originalServings) * currentServings; // Base adjustment for servings

//                 // Apply the taste multiplier if the ingredient matches the taste type
//                 if (tasteAdjustments[type]) {
//                     const relevantIngredients = Array.isArray(tasteAdjustments[type])
//                         ? tasteAdjustments[type]
//                         : [tasteAdjustments[type]];

//                     if (relevantIngredients.some((name) => ing.name.toLowerCase().includes(name))) {
//                         adjustedAmount *= multiplier; // Apply multiplier
//                     }
//                 }

//                 // Round and format the adjusted amount
//                 adjustedAmount = parseFloat(adjustedAmount.toFixed(2));

//                 return `<li>${adjustedAmount} ${ing.unit} ${ing.name}</li>`;
//             })
//             .join("");
//     }
// }
// // Navigate to recipe details page
// function displayRecipe(recipe) {
//     // Save the selected recipe to localStorage
//     localStorage.setItem("selectedRecipe", JSON.stringify(recipe));

//     // Redirect to the new page
//     window.location.href = "recipeDetails.html";
// }

// // On the recipeDetails.html page, load the selected recipe
// function loadRecipeDetails() {
//     const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));

//     if (!recipe) {
//         alert("No recipe selected!");
//         window.location.href = "recipes.html"; // Redirect back to recipes page
//         return;
//     }

//     // Update the recipe details on the page
//     document.getElementById("recipeName").textContent = recipe.name;
//     document.getElementById("recipeDescription").textContent = recipe.description;
//     document.getElementById("prepTime").textContent = `${recipe.prepTime} mins`;
//     document.getElementById("cookTime").textContent = `${recipe.cookTime} mins`;
//     document.getElementById("totalTime").textContent = `${recipe.prepTime + recipe.cookTime} mins`;
//     document.getElementById("recipeImage").src = recipe.image;
//     document.getElementById("recipeImage").alt = recipe.name;

//     // Initialize servings
//     const servingsElement = document.getElementById("servings");
//     servingsElement.textContent = recipe.servings;

//     // Update ingredients and instructions
//     updateIngredients(recipe.ingredients, recipe.servings);
//     updateInstructions(recipe.instructions);

//     // Attach serving adjustment events
//     document.getElementById("increase").onclick = () => adjustServings(1);
//     document.getElementById("decrease").onclick = () => adjustServings(-1);
// }

// // Update the servings
// function adjustServings(change) {
//     const servingsElement = document.getElementById("servings");
//     let currentServings = parseInt(servingsElement.textContent);
//     currentServings = Math.max(1, currentServings + change);
//     servingsElement.textContent = currentServings;

//     const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));
//     updateIngredients(recipe.ingredients, currentServings);
// }

// // Update ingredients dynamically
// function updateIngredients(ingredients, servings) {
//     const ingredientsList = document.getElementById("ingredientsList");
//     const originalServings = JSON.parse(localStorage.getItem("selectedRecipe")).servings;

//     ingredientsList.innerHTML = ""; // Clear list
//     ingredients.forEach((ingredient) => {
//         const adjustedAmount = ((ingredient.amount / originalServings) * servings).toFixed(2);
//         const listItem = document.createElement("li");
//         listItem.textContent = `${adjustedAmount} ${ingredient.unit} ${ingredient.name}`;
//         ingredientsList.appendChild(listItem);
//     });
// }

// // Update instructions dynamically
// function updateInstructions(instructions) {
//     const instructionsList = document.getElementById("instructionsList");
//     instructionsList.innerHTML = ""; // Clear list

//     instructions.forEach((step, index) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `Step ${index + 1}: ${step}`;
//         instructionsList.appendChild(listItem);
//     });
// }

// // On load, call loadRecipeDetails if on the recipeDetails.html page
// if (document.title === "Recipe Details") {
//     loadRecipeDetails();
// }
// function updateTaste(type, value) {
//     console.log(`Updating taste: ${type} with value: ${value}`);

//     const tasteLevels = ["Normal", "Medium", "High", "Very High"];
//     const displayElement = document.getElementById(`${type}Value`);
//     displayElement.textContent = tasteLevels[value];

//     if (currentRecipe) {
//         const ingredientsList = document.getElementById("ingredientsList");
//         const originalServings = currentRecipe.servings; // The base serving size of the recipe
//         const currentServings = parseInt(document.getElementById("servings").textContent);

//         // Define multipliers for each taste level
//         const multipliers = { "0": 1, "1": 1.5, "2": 2, "3": 3 };

//         const tasteAdjustments = {
//             spiciness: "red chili powder",
//             sweetness: "sugar",
//             saltiness: "salt",
//             sourness: ["lemon", "tamarind"],
//         };

//         const multiplier = multipliers[value]; // Multiplier for the current slider level

//         // Update ingredients dynamically
//         ingredientsList.innerHTML = currentRecipe.ingredients
//             .map((ing) => {
//                 let adjustedAmount = (ing.amount / originalServings) * currentServings; // Base adjustment for servings

//                 // Apply the taste multiplier if the ingredient matches the taste type
//                 if (tasteAdjustments[type]) {
//                     const relevantIngredients = Array.isArray(tasteAdjustments[type])
//                         ? tasteAdjustments[type]
//                         : [tasteAdjustments[type]];

//                     if (relevantIngredients.some((name) => ing.name.toLowerCase().includes(name))) {
//                         adjustedAmount *= multiplier; // Apply multiplier
//                     }
//                 }

//                 // Round and format the adjusted amount
//                 adjustedAmount = parseFloat(adjustedAmount.toFixed(2));

//                 return `<li>${adjustedAmount} ${ing.unit} ${ing.name}</li>`;
//             })
//             .join("");
//     }
// }
// // Adjust ingredient quantities dynamically based on slider input
// function adjustIngredients(sliderValue) {
//     const ingredientsList = document.querySelectorAll("#recipe-ingredients li");

//     ingredientsList.forEach((ingredient) => {
//         const baseAmount = parseFloat(ingredient.getAttribute("data-base-amount"));

//         // Adjust the quantity (e.g., scale by slider value)
//         const adjustedAmount = (baseAmount * sliderValue).toFixed(2); // Optional rounding to 2 decimals
//         const ingredientText = ingredient.innerText.split(" ");
//         ingredient.innerText = `${adjustedAmount} ${ingredientText.slice(1).join(" ")}`; // Update ingredient text
//     });

//     // Reflect the slider value somewhere for user feedback (optional)
//     document.getElementById("slider-value-display").innerText = `Spiciness Level: ${sliderValue}`;
// }

// // Add event listener to the slider
// document.getElementById("spiciness-slider").addEventListener("input", function (event) {
//     const sliderValue = event.target.value; // Retrieve slider value
//     adjustIngredients(sliderValue);
// });
// Global variable to track the current recipe

function createRecipeButtons() {
    const container = document.getElementById("recipeButtons");
    container.innerHTML = ""; // Clear the container

    Object.keys(recipes).forEach((key) => {
        const recipe = recipes[key];

        // Create a button for each recipe
        const button = document.createElement("button");
        button.className = "recipe-button";
        button.onclick = () => navigateToRecipeDetails(recipe);

        // Create image and name for the recipe
        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.name;

        const name = document.createElement("p");
        name.textContent = recipe.name;

        button.appendChild(img);
        button.appendChild(name);
        container.appendChild(button);
    });
}

// Navigate to recipe details page
function navigateToRecipeDetails(recipe) {
    localStorage.setItem("selectedRecipe", JSON.stringify(recipe)); // Save recipe in localStorage
    window.location.href = "recipeDetails.html"; // Redirect to details page
}

// Load and display the recipe details
function loadRecipeDetails() {
    const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));

    // Populate recipe details
    document.getElementById("recipeName").textContent = recipe.name;
    document.getElementById("recipeDescription").textContent = recipe.description;
    document.getElementById("prepTime").textContent = `${recipe.prepTime} mins`;
    document.getElementById("cookTime").textContent = `${recipe.cookTime} mins`;
    document.getElementById("totalTime").textContent = `${recipe.prepTime + recipe.cookTime} mins`;
    document.getElementById("recipeImage").src = recipe.image;
    document.getElementById("recipeImage").alt = recipe.name;

    const servingsElement = document.getElementById("servings");
    servingsElement.textContent = recipe.servings;

    updateIngredients(recipe.ingredients, recipe.servings);
    updateInstructions(recipe.instructions);

    // Attach event listeners for serving adjustment
    document.getElementById("increase").onclick = () => adjustServings(1);
    document.getElementById("decrease").onclick = () => adjustServings(-1);
}

// Adjust serving size
function adjustServings(change) {
    const servingsElement = document.getElementById("servings");
    let currentServings = Math.max(1, parseInt(servingsElement.textContent) + change);
    servingsElement.textContent = currentServings;

    const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));
    updateIngredients(recipe.ingredients, currentServings);
}

// Update ingredients dynamically
function updateIngredients(ingredients, servings) {
    const ingredientsList = document.getElementById("ingredientsList");
    const originalServings = currentRecipe.servings;

    ingredientsList.innerHTML = ""; // Clear ingredients list
    ingredients.forEach((ingredient) => {
        const adjustedAmount = ((ingredient.amount / originalServings) * servings).toFixed(2);
        const listItem = document.createElement("li");
        listItem.textContent = `${adjustedAmount} ${ingredient.unit} ${ingredient.name}`;
        ingredientsList.appendChild(listItem);
    });
}

// Update recipe instructions
function updateInstructions(instructions) {
    const instructionsList = document.getElementById("instructionsList");
    instructionsList.innerHTML = ""; // Clear the list

    instructions.forEach((step, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Step ${index + 1}: ${step}`;
        instructionsList.appendChild(listItem);
    });
}

// Initialize recipes or details page
document.addEventListener("DOMContentLoaded", () => {
    const recipeButtonsContainer = document.getElementById("recipeButtons");
    if (recipeButtonsContainer) {
        // If on recipes.html
        createRecipeButtons();
    } else {
        // If on recipeDetails.html
        loadRecipeDetails();
    }
});

// Load and display the selected recipe's details
function loadRecipeDetails() {
    // Get the recipe from localStorage
    const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));

    if (!recipe) {
        alert("No recipe selected!");
        window.location.href = "recipes.html"; // Redirect to recipes.html if no recipe is selected
        return;
    }

    // Populate recipe details
    document.getElementById("recipeName").textContent = recipe.name;
    document.getElementById("recipeDescription").textContent = recipe.description;
    document.getElementById("prepTime").textContent = `${recipe.prepTime} mins`;
    document.getElementById("cookTime").textContent = `${recipe.cookTime} mins`;
    document.getElementById("totalTime").textContent = `${recipe.prepTime + recipe.cookTime} mins`;
    document.getElementById("recipeImage").src = recipe.image;
    document.getElementById("recipeImage").alt = recipe.name;

    // Set the initial servings
    const servingsElement = document.getElementById("servings");
    servingsElement.textContent = recipe.servings;

    // Populate ingredients and instructions
    updateIngredients(recipe.ingredients, recipe.servings);
    updateInstructions(recipe.instructions);

    // Attach event listeners to serving adjustment buttons
    document.getElementById("increase").onclick = () => adjustServings(1);
    document.getElementById("decrease").onclick = () => adjustServings(-1);

    // Attach event listeners for taste customization sliders
    ["spiciness", "sweetness", "sourness", "saltiness"].forEach((type) => {
        const slider = document.getElementById(`${type}Slider`);
        if (slider) {
            slider.oninput = () => updateTaste(type, slider.value);
        }
    });
}

// Update the ingredients list dynamically based on servings
function updateIngredients(ingredients, servings) {
    const ingredientsList = document.getElementById("ingredientsList");
    const originalServings = JSON.parse(localStorage.getItem("selectedRecipe")).servings;

    ingredientsList.innerHTML = ""; // Clear the existing ingredients list

    ingredients.forEach((ingredient) => {
        // Adjust ingredient amounts proportionally
        const adjustedAmount = ((ingredient.amount / originalServings) * servings).toFixed(2);
        const listItem = document.createElement("li");
        listItem.textContent = `${adjustedAmount} ${ingredient.unit} ${ingredient.name}`;
        ingredientsList.appendChild(listItem);
    });
}

// Update the recipe's instructions dynamically
function updateInstructions(instructions) {
    const instructionsList = document.getElementById("instructionsList");
    instructionsList.innerHTML = ""; // Clear the existing instructions list

    instructions.forEach((step, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Step ${index + 1}: ${step}`;
        instructionsList.appendChild(listItem);
    });
}

// Adjust serving size dynamically
function adjustServings(change) {
    const servingsElement = document.getElementById("servings");
    let currentServings = Math.max(1, parseInt(servingsElement.textContent) + change);
    servingsElement.textContent = currentServings;

    // Update ingredients with the new serving size
    const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));
    updateIngredients(recipe.ingredients, currentServings);
}

// Adjust taste dynamically based on slider values
function updateTaste(type, value) {
    const tasteLevels = ["Normal", "Medium", "High", "Very High"];
    document.getElementById(`${type}Value`).textContent = tasteLevels[value];

    const recipe = JSON.parse(localStorage.getItem("selectedRecipe"));
    const ingredientsList = document.getElementById("ingredientsList");
    const originalServings = recipe.servings;
    const currentServings = parseInt(document.getElementById("servings").textContent);

    const multipliers = { "0": 1, "1": 1.5, "2": 2, "3": 3 };
    const tasteMapping = {
        spiciness: "red chili powder",
        sweetness: "sugar",
        saltiness: "salt",
        sourness: ["lemon", "tamarind"],
    };

    const multiplier = multipliers[value];
    ingredientsList.innerHTML = recipe.ingredients
        .map((ingredient) => {
            let adjustedAmount = (ingredient.amount / originalServings) * currentServings;

            // If ingredient matches the taste slider category, apply multiplier
            if (tasteMapping[type]) {
                const relevantIngredients = Array.isArray(tasteMapping[type])
                    ? tasteMapping[type]
                    : [tasteMapping[type]];

                if (relevantIngredients.some((name) => ingredient.name.toLowerCase().includes(name))) {
                    adjustedAmount *= multiplier;
                }
            }

            return `<li>${adjustedAmount.toFixed(2)} ${ingredient.unit} ${ingredient.name}</li>`;
        })
        .join("");
}

// Initialize the recipeDetails.html page
document.addEventListener("DOMContentLoaded", loadRecipeDetails);












// let currentRecipe = null;

// // Create Recipe Buttons
// function createRecipeButtons() {
//     const container = document.getElementById("recipeButtons");
//     container.innerHTML = ""; // Clear any existing buttons

//     Object.keys(recipes).forEach((key) => {
//         const recipe = recipes[key];

//         // Create button
//         const button = document.createElement("button");
//         button.classList.add("recipe-button");
//         button.onclick = () => displayRecipe(recipe);

//         // Add image and name
//         const img = document.createElement("img");
//         img.src = recipe.image;
//         img.alt = recipe.name;

//         const name = document.createElement("p");
//         name.textContent = recipe.name;

//         button.appendChild(img);
//         button.appendChild(name);
//         container.appendChild(button);
//     });
// }

// // Display Selected Recipe
// function displayRecipe(recipe) {
//     currentRecipe = recipe; // Set the current recipe
//     const recipeDisplay = document.getElementById("recipeDisplay");
//     recipeDisplay.classList.remove("hidden");

//     // Populate recipe details
//     document.getElementById("recipeName").textContent = recipe.name;
//     document.getElementById("recipeDescription").textContent = recipe.description;
//     document.getElementById("prepTime").textContent = `${recipe.prepTime} mins`;
//     document.getElementById("cookTime").textContent = `${recipe.cookTime} mins`;
//     document.getElementById("totalTime").textContent = `${recipe.prepTime + recipe.cookTime} mins`;

//     // Set initial servings
//     const servingsElement = document.getElementById("servings");
//     servingsElement.textContent = recipe.servings;

//     // Update ingredients and instructions
//     updateIngredients(recipe.ingredients, recipe.servings);
//     updateInstructions(recipe.instructions);

//     // Display dish image
//     const recipeImage = document.getElementById("recipeImage");
//     recipeImage.src = recipe.image;
//     recipeImage.alt = recipe.name;

//     // Setup serving adjustment buttons
//     document.getElementById("increase").onclick = () => adjustServings(1);
//     document.getElementById("decrease").onclick = () => adjustServings(-1);

//     // Show Taste Customization section
//     document.getElementById("tasteCustomization").classList.remove("hidden");
// }

// // Adjust Serving Size
// function adjustServings(change) {
//     const servingsElement = document.getElementById("servings");
//     let currentServings = parseInt(servingsElement.textContent);
//     currentServings = Math.max(1, currentServings + change); // Ensure servings are at least 1
//     servingsElement.textContent = currentServings;

//     // Update ingredients dynamically
//     if (currentRecipe) {
//         updateIngredients(currentRecipe.ingredients, currentServings);
//     }
// }

// // Update Ingredients
// function updateIngredients(ingredients, servings) {
//     const ingredientsList = document.getElementById("ingredientsList");
//     const originalServings = currentRecipe.servings;

//     // Clear current ingredients list
//     ingredientsList.innerHTML = "";

//     // Adjust ingredient quantities based on servings
//     ingredients.forEach((ingredient) => {
//         const adjustedAmount = ((ingredient.amount / originalServings) * servings).toFixed(2);

//         // Create a list item
//         const listItem = document.createElement("li");
//         listItem.textContent = `${adjustedAmount} ${ingredient.unit} ${ingredient.name}`;

//         ingredientsList.appendChild(listItem);
//     });
// }

// // Update Instructions
// function updateInstructions(instructions) {
//     const instructionsList = document.getElementById("instructionsList");
//     instructionsList.innerHTML = ""; // Clear current instructions

//     instructions.forEach((step, index) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `Step ${index + 1}: ${step}`;
//         instructionsList.appendChild(listItem);
//     });
// }

// // Update Taste Customization
// function updateTaste(type, value) {
//     const tasteLevels = ["Normal", "Medium", "High", "Very High"];
//     const displayElement = document.getElementById(`${type}Value`);
//     displayElement.textContent = tasteLevels[value];

//     if (currentRecipe) {
//         const ingredientsList = document.getElementById("ingredientsList");
//         const originalServings = currentRecipe.servings;
//         const currentServings = parseInt(document.getElementById("servings").textContent);

//         const multipliers = { "0": 1, "1": 1.5, "2": 2, "3": 3 };
//         const tasteMapping = {
//             spiciness: "red chili powder",
//             sweetness: "sugar",
//             saltiness: "salt",
//             sourness: ["lemon", "tamarind"],
//         };

//         const multiplier = multipliers[value];

//         // Adjust specific ingredients for taste type
//         ingredientsList.innerHTML = currentRecipe.ingredients
//             .map((ingredient) => {
//                 let adjustedAmount = (ingredient.amount / originalServings) * currentServings;

//                 if (tasteMapping[type]) {
//                     const relevantIngredients = Array.isArray(tasteMapping[type])
//                         ? tasteMapping[type]
//                         : [tasteMapping[type]];

//                     if (relevantIngredients.some((name) => ingredient.name.toLowerCase().includes(name))) {
//                         adjustedAmount *= multiplier;
//                     }
//                 }

//                 adjustedAmount = adjustedAmount.toFixed(2);
//                 return `<li>${adjustedAmount} ${ingredient.unit} ${ingredient.name}</li>`;
//             })
//             .join("");
//     }
// }

// // Initialize Page
// window.onload = () => {
//     createRecipeButtons();

//     // Set up sliders for taste customization
//     ["spiciness", "sweetness", "sourness", "saltiness"].forEach((type) => {
//         const slider = document.getElementById(`${type}Slider`);
//         if (slider) {
//             slider.oninput = () => updateTaste(type, slider.value);
//         }
//     });
// };
