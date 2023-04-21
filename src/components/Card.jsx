// import pasta from '../images/pasta.jpg'
// https://spoonacular.com/recipeImages/pasta-with-garlic-scallions-cauliflower-bread-crumbs-716429.jpg

export default function Card({ title, image, time, servings, sourceUrl }) {
  console.log(title);
  const imgLink = `https://spoonacular.com/recipeImages/${image}`;
  return (
    <div className="card">
      <img src={imgLink} alt="" />
      <p>
        <strong>{title}</strong>  <br />
        Ready time: {time} minutes <br />
        Servings {servings} <br />
        <a href={sourceUrl}> More Here</a>
      </p>
    </div>
  );
}
