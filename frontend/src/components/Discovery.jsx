import React, { useState } from 'react';
import MainHeader from './MainHeader';
import Books from './Books';

const Discovery = () => {
    const categories = ["All", "Action", "Romance", "Business", "Fiction", "Non-Fiction", "Horror", "Adventure", "Marketing", ];
    const [toggleCategories, setToggledCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All"); // Default to show all books

    const toggleCategory = () => {
        setToggledCategory(!toggleCategories);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setToggledCategory(false); // Close dropdown after selection
    };

    return (
        <>
            <MainHeader />
            <article className="border py-3 px-2 rounded-2xl">
                <section className="relative flex justify-between items-center">
                    <h2 className="font-semibold text-stone-600 text-lg flex items-center justify-center gap-1">
                        <span className="material-symbols-rounded">book</span>
                        Books
                    </h2>
                    <button onClick={toggleCategory} className="rounded-2xl text-md bg-blue-100 text-blue-500 flex items-center justify-center gap-1 font-semibold px-3 py-[.5rem] border border-blue-400">
                        Categories
                        <span className="material-symbols-rounded">filter_list</span>
                    </button>
                    <ul
                        className={`transform transition-transform overflow-y-auto h-[15rem] ${
                            toggleCategories ? 'scale-100' : 'scale-0'
                        } absolute flex flex-col gap-3 right-0 top-12 w-[8.5rem] px-4 py-2 bg-white rounded-md border z-50`}
                    >
                        {categories.map((category, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleCategoryClick(category)}
                                    className="px-2 py-2 border w-full rounded-md font-semibold bg-white z-50"
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
                <Books selectedCategory={selectedCategory} />
            </article>
        </>
    );
};

export default Discovery;
