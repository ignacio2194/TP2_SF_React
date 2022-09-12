const Footer = () => {
  return (
    <footer className="bg-[#54ea0f] bg-opacity-50 text-black relative bottom-0 left-0 flex flex-col w-full py-5 px-3 list-none mt-4">
      <div className="flex justify-evenly mb-1">
        <div className="w-13 ">
          <h3>¿Que Hacemos?</h3>
          <p>Estamos pasando la totalidad del Checkpoint#1 que se hizo con HTML/CSS/JS a React.js</p>
        </div>
        <div className="border-solid border-l-2 border-black pl-4">
          <h3>Team</h3>
          <li>Benitez, Ignacio</li>
          <li>Cazal, Damian</li>
          <li>Scharf, Guillermo</li>
        </div>
        <div className="border-solid border-l-2 border-black pl-4">
          <h3>Technology</h3>
          <li>React.js</li>
          <li>NPM</li>
          <li>Tailwind</li>
        </div>
        <div className="border-solid border-l-2 border-black pl-4">
          <h3>Recourse</h3>
          <li>https://jsonplaceholder.typicode.com</li>
          <li>https://rickandmortyapi.com</li>
        </div>
      </div>
      <div className="flex justify-between ">
        <span>Copyright © 2022 All Rights Reserved</span>
        <span>Privacy Policy | Terms of Use</span>
      </div>
    </footer>
  );
}

export default Footer;