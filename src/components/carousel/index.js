import './carousel.css';
import YouTubePlayer from "../player";

const Carousel = () => {
    return (
        <section className="carousel-1">
            <div className="carousel-content">
                <a>Front-End</a>
                <h2>SEO com React</h2>
                <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
            </div>
            <div>
                <YouTubePlayer></YouTubePlayer>
            </div>
        </section>
    )
}

export default Carousel