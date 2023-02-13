import { Dispatch, SetStateAction, useMemo, useState } from "react";

const usePrettyPrintedState = function (label) {
  const [value, setValue] = useState(null);
  const resultValue = useMemo(() => {
    return (
      <>
        {value && (
          <pre>
            {label || "Value"}:
            <br />
            {JSON.stringify(value, null, 2)}
          </pre>
        )}
      </>
    );
  }, [label, value]);
  return [resultValue, setValue];
};

export default usePrettyPrintedState;