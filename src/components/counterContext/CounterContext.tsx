import { extname } from "node:path/win32";
import React, { useContext } from "react";

const CounterContext = React.createContext({
  count: 100,
  incrementCount: () => {},
});

type StateType = {
  count: number;
};

export class GrandParent extends React.Component {
  state: Readonly<StateType> = { count: 100 };
  render(): React.ReactNode {
    return (
      <div>
        <CounterContext.Provider
          value={{
            count: this.state.count,
            incrementCount: () => {
              this.setState({ count: this.state.count + 1 });
            },
          }}
        >
          <Parent />
        </CounterContext.Provider>
      </div>
    );
  }
}

export class Parent extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <>
          {" "}
          <Child />
          <AnotherChild />
        </>
      </div>
    );
  }
}

// export class Child extends React.Component {
//   render(): React.ReactNode {
//     return (
//       <>
//         <CounterContext.Consumer>
//           {value => <p>Count : {value.count}</p>}
//         </CounterContext.Consumer>
//       </>
//     );
//   }
// }

export function Child() {
  const counterctx = useContext(CounterContext); // onlyworks with functional components
  return (
    <div>
      <strong>Count (Child): {counterctx.count}</strong>
      <button
        className="btn btn-primary"
        onClick={() => counterctx.incrementCount()}
      >
        ++
      </button>
    </div>
  );
}

export function AnotherChild() {
  const counterctx = useContext(CounterContext); // onlyworks with functional components
  return (
    <div>
      <strong>Count (AnotherChild): {counterctx.count}</strong>
    </div>
  );
}
