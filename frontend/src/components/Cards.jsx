import Card from './Card';
import AddButton from './buttons/AddButton';

export default function Cards({ recipes }) {
    const fakeRecipe = {
        name: "Spaghetti Bolognese",
        image: "https://www.allrecipes.com/thmb/ZhDrBmciWzegNpBWB-5LXEvULao=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Easyspaghettiwithtomatosauce_11715_DDMFS_4x3_2424-8d7bf30b2622465f9dd78a2c6277eeb8.jpg",
        rating: 4,
        category: "Dinner"
    };
    return (
        recipes.length === 0 ? (
            <div className="d-flex flex-column align-items-center mt-5">
                <h4 className='mb-3'>No recipes found</h4>
                <p className='text-secondary'>Click the button below to add a new recipe!</p>
                <AddButton />
            </div>) : (
            <div className="container py-4">
                <div className='row justify-content-start'>
                    {
                        recipes.map((recipe) => (
                            <Card recipe={recipe} />
                        ))
                    }
                </div>
            </div>
        )
    )
}