const Footer = () => {
  return (
    <footer className="bg-[#54ea0f] bg-opacity-50 text-black relative bottom-0 left-0 flex flex-col w-full py-5 px-3 list-none mt-4">
      <div className="flex mb-1">
        <div className="inline-block pl-4 w-3/4">
          <h3>Team:</h3>
          <p>Benitez Ignacio</p>
          <p>Cazal Damian</p>
          <p>Scharf Guillermo</p>
        </div>
      </div>
      <div className="flex justify-between">
        <span>Copyright © 2022 All Rights Reserved</span>
        <span>Privacy Policy | Terms of Use</span>
      </div>
    </footer>
  );
}

export default Footer;