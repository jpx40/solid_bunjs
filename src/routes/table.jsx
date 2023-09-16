import Counter from "~/components/Counter";
import { A } from "solid-start";
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function TableUser() {




    const [user, setUser] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ]);

  return (
<ul>
      <For each={user()}>{(user, i) =>
        <li>
         <span>
               {i() + 1}: {user.name}
         </span>


        </li>
      }</For>
    </ul>
  );
}


export default function App(){
    return (
      <main>

          <TableUser></TableUser>

      </main>
    );
}