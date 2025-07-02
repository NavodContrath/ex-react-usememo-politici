import { useState, useEffect } from "react"

function App() {
  const [politicians, setPoliticians] = useState([])

  useEffect(() => {
    async function loadPoliticians() {
      const politicians = await fetch('http://localhost:3333/politicians')
      const data = await politicians.json()
      setPoliticians(data)
    }
    loadPoliticians()
  }, [])

  return (
    <>
      <header className="bar"></header>
      <main>
        <div className="container">
          <h1>Politicians</h1>
          <div className="row">
            {
              politicians.map(p => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={p.id}>
                    <div className="card h-100 w-100">
                      <img className="card-img-top" src={p.image} alt="Politician" />
                      <div className="card-body d-flex flex-column">
                        <h4 className="card-title">{p.name}</h4>
                        <h5 className="card-subtitle">{p.position}</h5>
                        <p className="card-text">{p.biography}</p>
                      </div>
                    </div>
                  </div>

                )
              })
            }
          </div>
        </div>

      </main>
      <footer className="bar"></footer>

    </>
  )
}

export default App
