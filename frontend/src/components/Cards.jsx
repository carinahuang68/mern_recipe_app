import Card from './Card';

export default function Cards() {
    const fakeRecipe = {
        name: "Spaghetti Bolognese",
        image: "https://www.allrecipes.com/thmb/ZhDrBmciWzegNpBWB-5LXEvULao=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Easyspaghettiwithtomatosauce_11715_DDMFS_4x3_2424-8d7bf30b2622465f9dd78a2c6277eeb8.jpg",
        rating: 4,
        category: "Dinner"
    };
    return (
        
        <div className="container py-4">
            <div className='row justify-content-center'>
                <Card recipe={fakeRecipe} />
                <Card recipe={fakeRecipe} />
                <Card recipe={fakeRecipe} />
                <Card recipe={fakeRecipe} />
                <Card recipe={fakeRecipe} />
                <Card recipe={fakeRecipe} />
                <Card recipe={fakeRecipe} />
                <Card recipe={fakeRecipe} />
                <Card recipe={fakeRecipe} />
            </div>
        </div>
    )
}