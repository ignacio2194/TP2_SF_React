const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white relative bottom-0 left-0 flex flex-col w-full py-5 px-3 list-none mt-4">
      <div className="flex justify-evenly mb-1">
        <div className="w-13">
          <h2>¿Que Hacemos?</h2>
          <p>Estamos pasando la totalidad del Checkpoint#1 que se hizo con HTML/CSS/JS a React.js</p>
        </div>
        <div>
          <h2>Team</h2>
          <li>nombre1</li>
          <li>nombre1</li>
          <li>nombre1</li>
        </div>
        <div>
          <h2>Technology</h2>
          <li>nombre1</li>
          <li>nombre1</li>
          <li>nombre1</li>
        </div>
        <div>
          <h2>Recourse</h2>
          <li>nombre1</li>
          <li>nombre1</li>
          <li>nombre1</li>
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