const WarningAlert = () => {
  return (
    <div
      className="bg-yellow-100 border-l-4 border-yellow-500 text-orange-700 p-4"
      role="alert"
    >
      <p className="font-bold">Be Warned</p>
      <p>Something not ideal might be happening.</p>
    </div>
  );
};

export default WarningAlert;
