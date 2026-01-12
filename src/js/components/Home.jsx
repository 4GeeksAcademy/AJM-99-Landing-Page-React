import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Credits } from "./Credits";
import { Alert } from "./Alert";

//create your first component

const Home = () => {
	const peakys = [
		{
			id: 1,
			name: "Tommy Shelby",
			image: "https://static.wikia.nocookie.net/peaky-blinders/images/8/8e/Tommys3.jpg/revision/latest?cb=20190715140230",
			description: "Thomas Michael ‘Tommy’ Shelby OBE DCM MM MP is the main protagonist of the Peaky Blinders. He is the son of Arthur and Mrs. Shelby, brother of Arthur, John, Ada and Finn Shelby. He is the leader of the Birmingham criminal gang, the Peaky Blinders and the patriarch of the Shelby Family."
		},
		{
			id: 2,
			name: "Arthur Shelby",
			image: "https://static.wikia.nocookie.net/peaky-blinders/images/1/16/Arthur-shelby-peaky2-.jpg/revision/latest?cb=20251117201557",
			description: "Arthur Shelby Jr. is one of the main protagonists of the Peaky Blinders. He is the eldest son of Arthur and Mrs Shelby, older brother of Thomas, John, Ada and Finn Shelby. He is also Deputy Vice President of Shelby Company Limited and a member of the ICA, acting as his brother's right-hand man. Arthur has a drug problem, which gets worse over time until he met Linda, who helped him to recover himself."
		},
				{
			id: 3,
			name: "John Shelby",
			image: "https://static.wikia.nocookie.net/peaky-blinders/images/0/0b/Johns3.jpg/revision/latest/scale-to-width-down/1200?cb=20190715140143",
			description: "John Michael Shelby (also known as Johnny and John Boy) is one of the two former tritagonists (alongside Polly Gray) of Peaky Blinders. He is a British street gangster who was a soldier during the First World War. He is the third son of Arthur Shelby Sr, brother of Arthur, Thomas, Ada and Finn Shelby."
		},
				{
			id: 4,
			name: "Ada Shelby/Thorne",
			image: "https://i.pinimg.com/736x/d1/07/a6/d107a63653ed3aca9572968e6a7bd9a9.jpg",
			description: "Ada Thorne (née Shelby) is the tritagonist of Peaky Blinders. She is the fourth and only female of the Shelby siblings and the only sibling initially not involved with the Peaky Blinders. By the end of 1924, however, Ada assumes a leading position at the United States branch of Shelby Company Limited, dealing only with legal acquisitions; unlike her brothers back home in Birmingham, England."
		},
		{
			id: 5,
			name: "Aunt Pol",
			image: "https://static.wikia.nocookie.net/peaky-blinders/images/8/8a/Pollys4.jpg/revision/latest?cb=20190713150345",
			description: 'Elizabeth Pollyanna "Polly" Gray (née Shelby) is one of the two former tritagonists (alongside John Shelby) of Peaky Blinders. She is the mother of Michael and Anna Gray, aunt of Arthur, Thomas, John, Ada and Finn Shelby, as well as being the matriarch of the Shelby and Gray families. She is part of the Birmingham criminal gang, the Peaky Blinders, a certified accountant and company treasurer of Shelby Company Limited.'
		},
		{
			id: 6,
			name: "Finn Shelby",
			image: "https://i2-prod.walesonline.co.uk/article23499865.ece/ALTERNATES/s1200c/0_Peaky-Blinders-SERIES-4.jpg",
			description: "He is the youngest member of the Peaky Blinders, a son of Arthur Shelby Sr. and Mrs. Shelby and the youngest brother of Arthur, Thomas, John, and Ada Shelby. Finn's role in the beginning is minor due to his young age (11 at the beginning of the first season), however, he gets himself into quite a few complicated situations causing trouble to the rest of his family. As the story progresses, Finn grows up and becomes a brighter figure in the gangster world."
		},
		{
			id: 7,
			name: "Michael Gray/Shelby",
			image: "https://i.pinimg.com/474x/9e/33/07/9e33072921a18fc792d01b5e0c65a8f2.jpg",
			description: "He is the son of Polly Gray and the cousin of the Shelby siblings. He was taken away from Polly at a young age and was raised by his adoptive mother. After Thomas learns about Polly's wish to find her children again, he pays Michael's foster family a visit and invites the boy to see his biological mother. Michael reunites with his mother and becomes part of the Shelby Family and the Peaky Blinders at the age of 17, starting out on the respectable and legal side of the family business, Shelby Company Limited."
		},
	]
	return (
		<div className="bg-secondary bg-gradient">
			<Navbar/>
			<Alert/>
			<div className="container text-center">
				<h1 className="m-4 text-warning-emphasis"><strong>Shelby Family Members</strong></h1>
				<div className="row" id="grid">
					{
						peakys.map(personaje => {
							return (
								<div key={personaje.id} className="col-sm-6 col-md-4 p2">
									<div className="card bg-dark text-secondary">
										<div className="images">
											<img src={personaje.image} className="card-img-top" alt="..."/>
										</div>
										<div className="card-body">
											<h5 className="card-title">{personaje.name}</h5>
											<p className="card-text">{personaje.description}</p>
											<a href="#" className="btn btn-outline-warning">More info</a>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			<Credits/>
		</div>
	);
};

export default Home;