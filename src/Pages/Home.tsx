import { Link } from 'react-router'
import recipesData from '../assets/recipes.json'

function Home() {
  const recipes = (recipesData as any).recipes || recipesData;

  return (
    <div>
      <h1>Catalogue des Recettes</h1>
      <p>Elias Benmoussa</p>

      <div>
        {Array.from(recipes).map((recipe: any) => (
          <div key={recipe.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <img src={recipe.image} alt={recipe.title} width="100" />
            <h3>{recipe.title}</h3>
            <p>Temps : {recipe.prepTime || recipe.prepTimeMinutes} min</p>
            <Link to={`/recipe/${recipe.id}`}>Voir la recette</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home