import { useParams, Link } from 'react-router'
import recipesData from '../assets/recipes.json'
import NotFound from './NotFound'

function RecipeDetail() {
  const { id } = useParams()
  
  const recipeList: any = (recipesData as any).recipes || recipesData
  const recipe = Array.from(recipeList).find((r: any) => r.id.toString() === id) as any

 
  if (!recipe) {
    return <NotFound />
  }

  const steps = recipe.steps || recipe.instructions || []

  return (
    <div>
      <Link to="/">← Retour à l'accueil</Link>
      <h1>{recipe.title || recipe.name}</h1>
      <img src={recipe.image} alt={recipe.title || recipe.name} width="250" />
      <p><strong>Temps de préparation :</strong> {recipe.prepTime || recipe.prepTimeMinutes} min</p>

      <h3>Ingrédients :</h3>
      <ul>
        {recipe.ingredients && recipe.ingredients.map((ing: string, index: number) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <h3>Étapes :</h3>
      <ol>
        {steps.map((step: string, index: number) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeDetail