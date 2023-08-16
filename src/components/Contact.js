const Contact = () => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form className="flex">
        <input type="text" className="border border-black p-2 m-2 rounded-md" placeholder="Name"/>
        <input className="border border-black p-2 m-2 rounded-md" placeholder="Message"></input>
        <button className="border border-black p-2 m-2 bg-gray-400 rounded-md hover:bg-gray-200">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
