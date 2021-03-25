import Logo from './assets/logo.png'

function App() {
	return (
		<div className='container'>
			<figure className='logo'>
				<img src={Logo} alt='Logo Rick y Morty' />
			</figure>

			{/* form filtrar */}
			<section className='filtrar'>
				<form>
					<input type='text' name='buscar' placeholder='Nombre del personaje' />
					<button type='submit'>Buscar</button>
				</form>
			</section>
			{/* form filtrar */}

			{/* section personajes */}
			<section className='lista-personajes'>
				<article className='personaje'>
					<div className='personaje-header'>
						<div className='estado'>
							<span className='Dead'></span>
							<h4>Dead</h4>
						</div>
					</div>

					<div className='personaje-body'>
						<figure>
							<img
								src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
								alt='Rick'
							/>
						</figure>

						<h2>Rich Sanchez</h2>

						<p>
							Human <span>-</span> Man
						</p>
					</div>
				</article>

				<article className='personaje'>
					<div className='personaje-header'>
						<div className='estado'>
							<span className='Alive'></span>
							<h4>Live</h4>
						</div>
					</div>

					<div className='personaje-body'>
						<figure>
							<img
								src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
								alt='Rick'
							/>
						</figure>

						<h2>Rich Sanchez</h2>

						<p>
							Human <span>-</span> Man
						</p>
					</div>
				</article>

				<article className='personaje'>
					<div className='personaje-header'>
						<div className='estado'>
							<span className='Unknown'></span>
							<h4>Unknown</h4>
						</div>
					</div>

					<div className='personaje-body'>
						<figure>
							<img
								src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
								alt='Rick'
							/>
						</figure>

						<h2>Rich Sanchez</h2>

						<p>
							Human <span>-</span> Man
						</p>
					</div>
				</article>
			</section>
			{/* section personajes */}
		</div>
	)
}

export default App
