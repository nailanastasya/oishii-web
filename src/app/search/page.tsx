import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Recipe = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

const SearchPage = () => {
    const router = useRouter();
    const { query } = router.query; // Mengambil query dari URL
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query) {
            fetchRecipes(query as string);
        }
    }, [query]);

    const fetchRecipes = async (searchQuery: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
            );
            const data = await response.json();
            setRecipes(data.meals || []);
        } catch (error) {
            console.error("Error fetching recipes:", error);
            setError("Failed to load recipes.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FFF6EA] p-4">
            <h1 className="text-3xl font-bold text-[#3D5300] text-center mb-6">
                Search Results for: "{query}"
            </h1>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : recipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.map((recipe) => (
                        <div
                            key={recipe.idMeal}
                            className="bg-white border border-[#E5962D] rounded-lg shadow-md p-4"
                        >
                            <img
                                src={recipe.strMealThumb}
                                alt={recipe.strMeal}
                                className="w-full h-40 object-cover rounded"
                            />
                            <h3 className="text-xl text-[#3D5300] font-bold mt-4">
                                {recipe.strMeal}
                            </h3>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default SearchPage;
