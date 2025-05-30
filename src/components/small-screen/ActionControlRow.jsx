function ActionControlRow({ startSimulation }) {
  const submitHandler = (e) => {
    e.preventDefault();
    startSimulation();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-row justify-between">
        <button
          id="start"
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-12 xs:px-6 py-2 rounded cursor-pointer w-fit-content"
        >
          Start
        </button>

        <button
          id="reset"
          type="button"
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-12 xs:px-6 py-2 rounded cursor-pointer w-fit-content"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default ActionControlRow;
