import { Link } from 'react-router'
import recipesData from '../assets/recipes.json'

function Home() {
  const recipeList: any = (recipesData as any).recipes || recipesData

  return (
    <section style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1>Catalogue de Recettes</h1>
        <p>Projet réalisé par : <strong>Elias Benmoussa</strong></p>
      </header>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {recipeList.map((recipe: any) => (
          <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '15px', width: '250px', borderRadius: '8px' }}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} 
              />
              <h3 style={{ fontSize: '1.2rem', marginTop: '10px' }}>{recipe.name}</h3>
              <p style={{ color: '#555' }}>Préparation : {recipe.prepTimeMinutes} min</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home