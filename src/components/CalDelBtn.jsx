const CalDelBtn = ({ result, setResult }) => {
  const onClickDel = () => {
    if (result.length === 1) {
      setResult((result = "0"));
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  };

  return (
    <button
      className="btn-style bg-cyan-500 active:bg-cyan-500"
      onClick={onClickDel}
    >
      Del
    </button>
  );
};

export default CalDelBtn;
