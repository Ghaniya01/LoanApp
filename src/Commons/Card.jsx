export const Card = ({ img, user, h1 }) => {
    return (
      <div className="w-full h-[160px] rounded-md shadow-lg p-4 flex flex-col items-left pl-[30px]">
        <img src={img} alt={user} className="w-[40px] h-[40px] rounded-full mb-4" />
        <p className="text-sm text-textcolor1 font-medium mb-2">{user}</p>
        <h1 className="text-2xl text-textcolor2 font-bold">{h1}</h1>
      </div>
    );
  };
  