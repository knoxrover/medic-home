function Loading() {
  let styleee = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styleee} title="5">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="30px"
        height="36px"
        viewBox="0 0 24 30"
        // style="enable-background:new 0 0 50 50;"
        // xml:space="preserve"
      >
        <rect
          style={{ fill: "#0d6efd" }}
          x="0"
          y="13"
          width="4"
          height="5"
          fill="#333"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          style={{ fill: "#0d6efd" }}
          x="10"
          y="13"
          width="4"
          height="5"
          fill="#333"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          style={{ fill: "#0d6efd" }}
          x="20"
          y="13"
          width="4"
          height="5"
          fill="#333"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            values="5;21;5"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="13; 5; 13"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}

export default Loading;
