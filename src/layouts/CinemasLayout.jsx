import { Outlet } from "react-router-dom";

const CinemasLayout = () => {
  const applicationName = "🌌cineverse🌌";
  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  };

  return (
    <>
      <header>{applicationName}</header>
      <main>
        <Outlet />
      </main>
      <footer>
        🦄Copyright &copy; {credits.year} <a href="https://www.linkedin.com/in/elliotgaramendi/" target="_blank" rel="noopener noreferrer">{credits.author}.</a> Todos los derechos reservados.🦄
      </footer>
    </>
  );
};

export default CinemasLayout;