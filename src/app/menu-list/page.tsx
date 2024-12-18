'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Borel } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Footer from "@/pages/footer/pages";
import Header from "@/pages/header/page";
import { FaSearch } from 'react-icons/fa';

const borel = Borel({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

type Category = {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
};

type Recipe = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions?: string;
};

const Menus = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    const fetchCategories = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setCategories(data.categories || []);
        } catch (error) {
            console.error("Error fetching categories:", error);
            setError("Failed to load categories");
        } finally {
            setLoading(false);
        }
    };

    const fetchRecipesByCategory = async (category: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            );
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setRecipes(data.meals || []);
        } catch (error) {
            console.error("Error fetching recipes:", error);
            setError("Failed to load recipes");
        } finally {
            setLoading(false);
        }
    };

    const fetchRecipeDetails = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setSelectedRecipe(data.meals[0]);
        } catch (error) {
            console.error("Error fetching recipe details:", error);
            setError("Failed to load recipe details");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="bg-[#FFF6EA] min-h-screen flex flex-col items-center pt-40 px-4">
            <Header />

            <h2 className={`${borel.className} text-3xl font-bold text-[#3D5300] mt-10 mb-6`}>
                CATEGORIES
            </h2>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500 font-bold">Oops! {error}</p>
            ) : (
                <div className="flex flex-wrap gap-4 justify-center">
                    {categories.map((category) => (
                        <div
                            key={category.idCategory}
                            className="bg-[#FFF] border-2 border-[#E5962D] rounded-full px-4 py-2 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            onClick={() => fetchRecipesByCategory(category.strCategory)}
                        >
                            <h3 className={`${poppins.className} text-sm font-bold text-[#3D5300]`}>  
                                {category.strCategory}
                            </h3>
                        </div>
                    ))}
                </div>
            )}

            <h2 className={`${borel.className} text-3xl font-bold text-[#3D5300] mt-10 mb-6`}>
                RECIPES
            </h2>

            <div className="mt-6 flex justify-center relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B9C398]" />
                <input
                    type="text"
                    placeholder="mau masak apa?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`${poppins.className} w-full max-w-[600px] px-10 py-2 border rounded-full border-[#E5962D] text-[#B9C398] text-lg focus:outline-none placeholder:text-[#ABBA7C94]`}
                />
            </div>

            {recipes.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {recipes
                        .filter((recipe) =>
                            recipe.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((recipe) => (
                            <div
                                key={recipe.idMeal}
                                className="bg-[#FFF] border-2 border-[#E5962D] rounded-[20px] w-[368px] flex flex-col items-center p-4 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                                onClick={() => fetchRecipeDetails(recipe.idMeal)}
                            >
                                <div className="rounded-full overflow-hidden w-40 h-40 mt-8">
                                    <Image
                                        src={recipe.strMealThumb}
                                        alt={recipe.strMeal}
                                        width={160}
                                        height={160}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className={`${poppins.className} text-xl font-bold text-[#3D5300] mt-8`}>
                                    {recipe.strMeal}
                                </h3>
                            </div>
                        ))}
                </div>
            )}

            {selectedRecipe && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-3xl w-full overflow-y-auto max-h-[90vh]">
                        <h2 className="text-2xl font-bold mb-4">{selectedRecipe.strMeal}</h2>
                        <Image
                            src={selectedRecipe.strMealThumb}
                            alt={selectedRecipe.strMeal}
                            width={300}
                            height={300}
                            className="w-full h-auto object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-700 mb-4">{selectedRecipe.strInstructions}</p>
                        <button
                            onClick={() => setSelectedRecipe(null)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Menus;
